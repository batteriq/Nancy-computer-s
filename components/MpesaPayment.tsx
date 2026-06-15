"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, CheckCircle2, XCircle, Smartphone } from "lucide-react";
import { formatKES } from "@/lib/products";

type Status = "idle" | "initiating" | "polling" | "success" | "failed";

export function isValidKenyanPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return /^(07|01)\d{8}$/.test(digits);
}

export default function MpesaPayment({
  amount,
  reference,
  defaultPhone = "",
  onSuccess,
}: {
  amount: number;
  reference: string;
  defaultPhone?: string;
  onSuccess?: (receipt?: string) => void;
}) {
  const [phone, setPhone] = useState(defaultPhone);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [receipt, setReceipt] = useState<string>();
  const [seconds, setSeconds] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [raw, setRaw] = useState<unknown>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (defaultPhone) setPhone(defaultPhone);
  }, [defaultPhone]);

  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function stopTimers() {
    if (pollRef.current) clearInterval(pollRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
  }

  async function pay() {
    if (!isValidKenyanPhone(phone)) {
      setMessage("Enter a valid Safaricom number (07XX or 01XX, 10 digits).");
      setStatus("failed");
      return;
    }

    setStatus("initiating");
    setMessage("Sending payment request to your phone...");
    setRaw(null);
    setReceipt(undefined);

    try {
      const res = await fetch("/api/payments/mpesa-stk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, amount, reference }),
      });
      const data = await res.json();

      if (!res.ok || !data.checkoutRequestId) {
        setStatus("failed");
        setMessage(data.error || "Failed to start payment.");
        setRaw(data.daraja || data);
        return;
      }

      const checkoutRequestId = data.checkoutRequestId as string;

      // Demo/simulation path: short countdown then guaranteed success so the
      // checkout flow is fully demoable when live Daraja isn't available.
      if (data.simulated) {
        setStatus("polling");
        setMessage(
          data.customerMessage ||
            `STK Push sent to ${phone} - check your phone`
        );
        setCountdown(5);
        timerRef.current = setInterval(() => {
          setCountdown((c) => {
            if (c <= 1) {
              stopTimers();
              const fakeReceipt =
                "Q" +
                Math.random().toString(36).slice(2, 8).toUpperCase() +
                Math.floor(Math.random() * 90 + 10);
              setReceipt(fakeReceipt);
              setStatus("success");
              setMessage("Payment received. Thank you!");
              onSuccess?.(fakeReceipt);
              return 0;
            }
            return c - 1;
          });
        }, 1000);
        return;
      }

      setStatus("polling");
      setMessage(
        data.customerMessage ||
          "Check your phone and enter your M-Pesa PIN to complete payment."
      );
      setSeconds(0);

      timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);

      let attempts = 0;
      pollRef.current = setInterval(async () => {
        attempts += 1;
        try {
          const sres = await fetch(
            `/api/payments/mpesa-status?checkoutRequestId=${encodeURIComponent(
              checkoutRequestId
            )}`
          );
          const sdata = await sres.json();

          if (sdata.paid) {
            stopTimers();
            setReceipt(sdata.mpesaReceipt);
            setStatus("success");
            setMessage("Payment received. Thank you!");
            onSuccess?.(sdata.mpesaReceipt);
          } else if (
            typeof sdata.resultCode === "number" &&
            sdata.resultCode !== 0 &&
            !sdata.pending
          ) {
            stopTimers();
            setStatus("failed");
            setMessage(
              sdata.resultDesc || "Payment was cancelled or failed."
            );
            setRaw(sdata.daraja || sdata);
          }
        } catch {
          /* keep polling */
        }

        // Give up after ~60s of polling.
        if (attempts >= 20) {
          stopTimers();
          setStatus("failed");
          setMessage(
            "Timed out waiting for confirmation. If you paid, contact us with your M-Pesa code."
          );
        }
      }, 3000);
    } catch (err) {
      setStatus("failed");
      setMessage(
        err instanceof Error ? err.message : "Network error. Try again."
      );
    }
  }

  const busy = status === "initiating" || status === "polling";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-electric/40 bg-electric/5 p-6 text-center">
        <CheckCircle2 size={48} className="mx-auto text-electric" />
        <h3 className="mt-3 font-heading text-2xl font-bold text-white">
          Payment Successful
        </h3>
        <p className="mt-1 text-sm text-white/70">
          {receipt ? `M-Pesa code: ${receipt}` : message}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-white/80">
        M-Pesa Phone Number
      </label>
      <input
        type="tel"
        inputMode="numeric"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="07XX XXX XXX"
        disabled={busy}
        className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white outline-none transition focus:border-electric disabled:opacity-60"
      />

      <button
        onClick={pay}
        disabled={busy}
        className="btn-fire w-full disabled:opacity-70"
      >
        {busy ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Waiting for payment...
          </>
        ) : (
          <>
            <Smartphone size={18} /> Pay {formatKES(amount)} with M-Pesa
          </>
        )}
      </button>

      {message && (
        <div
          className={`flex items-start gap-2 rounded-xl border p-3 text-sm ${
            status === "failed"
              ? "border-fire/40 bg-fire/5 text-fire"
              : "border-electric/30 bg-electric/5 text-white/80"
          }`}
        >
          {status === "failed" ? (
            <XCircle size={18} className="mt-0.5 shrink-0" />
          ) : status === "polling" ? (
            <Loader2 size={18} className="mt-0.5 shrink-0 animate-spin" />
          ) : null}
          <div>
            <p>{message}</p>
            {status === "polling" && countdown > 0 && (
              <p className="mt-1 text-xs text-white/50">
                Confirming payment... {countdown}s
              </p>
            )}
            {status === "polling" && countdown === 0 && (
              <p className="mt-1 text-xs text-white/50">
                Waiting... {seconds}s elapsed
              </p>
            )}
          </div>
        </div>
      )}

      {raw != null && (
        <details className="rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-white/60">
          <summary className="cursor-pointer font-semibold">
            Raw Daraja response (debug)
          </summary>
          <pre className="mt-2 overflow-x-auto whitespace-pre-wrap">
            {JSON.stringify(raw, null, 2)}
          </pre>
        </details>
      )}
    </div>
  );
}
