"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <section className="bg-navy py-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl rounded-3xl border border-electric/20 bg-gradient-to-br from-navy-light to-navy p-10 text-center shadow-glow">
          <Mail size={40} className="mx-auto text-electric" />
          <h2 className="mt-4 font-heading text-3xl font-bold text-white">
            Get Exclusive Deals in Your Inbox
          </h2>
          <p className="mt-3 text-white/60">
            Be the first to know about new arrivals and student discounts.
          </p>

          {subscribed ? (
            <div className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-electric/40 bg-electric/5 px-5 py-4 text-electric">
              <CheckCircle2 size={20} />
              <span>You are now subscribed to Nancy Fire Computers deals.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-white/15 bg-navy px-5 py-3 text-white outline-none focus:border-electric"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
