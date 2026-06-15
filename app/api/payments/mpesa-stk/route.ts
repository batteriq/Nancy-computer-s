import { NextRequest, NextResponse } from "next/server";
import {
  getAccessToken,
  getPassword,
  getTimestamp,
  normalisePhone,
  MPESA_BASE,
} from "@/lib/mpesa";

const isSandbox = () => (process.env.MPESA_ENV ?? "sandbox") !== "production";

// Demo fallback: when the real Daraja call can't complete in sandbox, return a
// simulated STK push so the checkout flow stays fully demoable for the client.
function simulatedResponse(msisdn: string, note?: string) {
  return NextResponse.json({
    success: true,
    simulated: true,
    checkoutRequestId: "SIM-" + Date.now(),
    customerMessage: `STK Push sent to ${msisdn} - check your phone to authorise payment.`,
    note: note ?? "Simulated sandbox payment (Daraja unavailable).",
  });
}

export async function POST(req: NextRequest) {
  let msisdn = "";
  try {
    const body = await req.json();
    const { phone, amount, reference } = body as {
      phone: string;
      amount: number;
      reference?: string;
    };

    if (!phone || !amount) {
      return NextResponse.json(
        { error: "phone and amount are required" },
        { status: 400 }
      );
    }

    msisdn = normalisePhone(phone);
    if (!/^254(7|1)\d{8}$/.test(msisdn)) {
      return NextResponse.json(
        { error: "Invalid phone number. Use format 07XX or 01XX." },
        { status: 400 }
      );
    }

    // Try the real Daraja STK push. If anything fails in sandbox, simulate.
    try {
      const token = await getAccessToken();
      const timestamp = getTimestamp();
      const password = getPassword(timestamp);
      const shortcode = process.env.MPESA_SHORTCODE ?? "";

      // Sandbox accepts whole numbers >= 1.
      const stkAmount = Math.max(1, Math.round(amount));

      const payload = {
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: stkAmount,
        PartyA: msisdn,
        PartyB: shortcode,
        PhoneNumber: msisdn,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: reference || "Nancy Fire Computers",
        TransactionDesc: "Nancy Fire Computers order",
      };

      const res = await fetch(`${MPESA_BASE}/mpesa/stkpush/v1/processrequest`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok || data.ResponseCode !== "0") {
        if (isSandbox()) {
          return simulatedResponse(
            msisdn,
            "Daraja rejected the request; using simulated sandbox payment."
          );
        }
        return NextResponse.json(
          { error: "STK push failed", daraja: data },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        simulated: false,
        checkoutRequestId: data.CheckoutRequestID,
        merchantRequestId: data.MerchantRequestID,
        customerMessage: data.CustomerMessage,
      });
    } catch (darajaErr) {
      // OAuth/network failure (e.g. invalid sandbox keys) - simulate in sandbox.
      if (isSandbox()) {
        const detail =
          darajaErr instanceof Error ? darajaErr.message : "Daraja error";
        return simulatedResponse(msisdn, detail);
      }
      throw darajaErr;
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: "Server error", detail: message },
      { status: 500 }
    );
  }
}
