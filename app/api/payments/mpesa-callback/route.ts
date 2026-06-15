import { NextRequest, NextResponse } from "next/server";
import { savePayment } from "@/lib/order-store";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(
      "[mpesa-callback] received:",
      JSON.stringify(body, null, 2)
    );

    const stk = body?.Body?.stkCallback;
    if (stk) {
      const checkoutRequestId = stk.CheckoutRequestID;
      const resultCode = stk.ResultCode;
      const resultDesc = stk.ResultDesc;

      let mpesaReceipt: string | undefined;
      let amount: number | undefined;
      let phone: string | undefined;

      const items = stk.CallbackMetadata?.Item ?? [];
      for (const item of items) {
        if (item.Name === "MpesaReceiptNumber") mpesaReceipt = item.Value;
        if (item.Name === "Amount") amount = item.Value;
        if (item.Name === "PhoneNumber") phone = String(item.Value);
      }

      if (checkoutRequestId) {
        savePayment({
          checkoutRequestId,
          resultCode,
          resultDesc,
          mpesaReceipt,
          amount,
          phone,
          updatedAt: Date.now(),
        });
      }
    }
  } catch (err) {
    console.error("[mpesa-callback] error parsing body:", err);
  }

  // Daraja expects this acknowledgement regardless.
  return NextResponse.json({ ResultCode: 0, ResultDesc: "Accepted" });
}
