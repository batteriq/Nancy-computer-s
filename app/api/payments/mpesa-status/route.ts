import { NextRequest, NextResponse } from "next/server";
import {
  getAccessToken,
  getPassword,
  getTimestamp,
  MPESA_BASE,
} from "@/lib/mpesa";
import { getPayment } from "@/lib/order-store";

export async function GET(req: NextRequest) {
  const checkoutRequestId = req.nextUrl.searchParams.get("checkoutRequestId");
  if (!checkoutRequestId) {
    return NextResponse.json(
      { error: "checkoutRequestId is required" },
      { status: 400 }
    );
  }

  // First check if the callback already resolved this payment.
  const record = getPayment(checkoutRequestId);
  if (record && typeof record.resultCode === "number") {
    return NextResponse.json({
      source: "callback",
      resultCode: record.resultCode,
      resultDesc: record.resultDesc,
      mpesaReceipt: record.mpesaReceipt,
      paid: record.resultCode === 0,
    });
  }

  // Otherwise actively query Daraja for the STK status.
  try {
    const token = await getAccessToken();
    const timestamp = getTimestamp();
    const password = getPassword(timestamp);
    const shortcode = process.env.MPESA_SHORTCODE ?? "";

    const res = await fetch(`${MPESA_BASE}/mpesa/stkpushquery/v1/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        CheckoutRequestID: checkoutRequestId,
      }),
      cache: "no-store",
    });

    const data = await res.json();

    // ResultCode "0" = success. "1037"/"1032" etc = pending/cancelled.
    // errorCode 500.001.1001 = "transaction is being processed" (still pending).
    const resultCode =
      data.ResultCode !== undefined ? Number(data.ResultCode) : undefined;

    return NextResponse.json({
      source: "query",
      paid: resultCode === 0,
      pending: data.errorCode === "500.001.1001" || resultCode === undefined,
      resultCode,
      resultDesc: data.ResultDesc,
      daraja: data,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: "Status query failed", detail: message },
      { status: 500 }
    );
  }
}
