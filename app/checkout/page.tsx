"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatKES } from "@/lib/products";
import MpesaPayment, { isValidKenyanPhone } from "@/components/MpesaPayment";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState<{ order: string; receipt?: string } | null>(
    null
  );

  const phoneValid = isValidKenyanPhone(form.phone);
  const formValid =
    form.name.trim().length > 1 &&
    phoneValid &&
    form.address.trim().length > 3;

  const orderNumber = useMemo(
    () => "FL-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
    []
  );

  function handleSuccess(receipt?: string) {
    setDone({ order: orderNumber, receipt });
    clear();
  }

  if (done) {
    return (
      <div className="container-x flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <CheckCircle2 size={64} className="text-electric" />
        <h1 className="mt-6 font-heading text-3xl font-bold text-white">
          Order Confirmed!
        </h1>
        <p className="mt-3 max-w-md text-white/70">
          Thank you, {form.name.split(" ")[0] || "customer"}! Your payment was
          received and your order is being processed.
        </p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-navy-light px-8 py-5">
          <p className="text-sm text-white/50">Order Number</p>
          <p className="font-heading text-2xl font-bold text-electric">
            {done.order}
          </p>
          {done.receipt && (
            <p className="mt-2 text-xs text-white/50">
              M-Pesa code: {done.receipt}
            </p>
          )}
        </div>
        <p className="mt-6 text-sm text-white/60">
          We&apos;ll deliver to: {form.address}
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center text-white/60">
        <ShoppingBag size={56} className="mb-4 opacity-40" />
        <h1 className="font-heading text-2xl font-bold text-white">
          Your cart is empty
        </h1>
        <p className="mt-2">Add some gadgets before checking out.</p>
        <Link href="/shop" className="btn-primary mt-6">
          Browse Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container-x py-12">
      <h1 className="mb-10 font-heading text-3xl font-bold text-white sm:text-4xl">
        Checkout
      </h1>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Customer details + payment */}
        <div className="order-2 lg:order-1">
          <div className="rounded-2xl border border-white/10 bg-navy-light p-6">
            <h2 className="mb-5 font-heading text-xl font-bold text-white">
              Delivery Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-white/70">
                  Full Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  onBlur={() => setTouched(true)}
                  placeholder="e.g. John Kamau"
                  className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white outline-none focus:border-electric"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-white/70">
                  Phone Number (M-Pesa)
                </label>
                <input
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  onBlur={() => setTouched(true)}
                  inputMode="numeric"
                  placeholder="07XX XXX XXX"
                  className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white outline-none focus:border-electric"
                />
                {touched && form.phone && !phoneValid && (
                  <p className="mt-1 text-xs text-fire">
                    Enter a valid number (07XX or 01XX, 10 digits).
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm text-white/70">
                  Delivery Address
                </label>
                <textarea
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  onBlur={() => setTouched(true)}
                  rows={3}
                  placeholder="Town, estate, building..."
                  className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white outline-none focus:border-electric"
                />
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <h3 className="mb-4 font-heading text-lg font-bold text-white">
                Pay with M-Pesa
              </h3>
              {!formValid && (
                <p className="mb-3 text-sm text-white/50">
                  Fill in your name, valid phone and address to pay.
                </p>
              )}
              <div className={formValid ? "" : "pointer-events-none opacity-50"}>
                <MpesaPayment
                  amount={total}
                  reference={orderNumber}
                  defaultPhone={form.phone}
                  onSuccess={handleSuccess}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="order-1 lg:order-2">
          <div className="sticky top-24 rounded-2xl border border-white/10 bg-navy-light p-6">
            <h2 className="mb-5 font-heading text-xl font-bold text-white">
              Order Summary
            </h2>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.name}
                      </p>
                      <p className="text-xs text-white/50">
                        Qty: {item.qty}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-electric">
                      {formatKES(item.price * item.qty)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span>{formatKES(total)}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Delivery</span>
                <span className="text-electric">FREE</span>
              </div>
              <div className="flex justify-between pt-2 font-heading text-xl font-bold text-white">
                <span>Total</span>
                <span className="text-electric">{formatKES(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
