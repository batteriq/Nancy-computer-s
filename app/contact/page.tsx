"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Instagram,
  Music2,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Prototype: no backend mail. Just confirm to the user.
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="container-x py-14">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-[0.3em] text-fire">
          Get In Touch
        </span>
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
          Contact <span className="gradient-text">Firelite</span>
        </h1>
        <p className="mt-3 text-white/60">
          Visit the shop, call us, or drop a message - we reply fast.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Info + form */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-navy-light p-6">
            <h2 className="mb-4 font-heading text-xl font-bold text-white">
              Reach Us
            </h2>
            <ul className="space-y-4 text-white/75">
              <li className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-fire" />
                Moi Avenue, opposite MKU Towers, Central Building, 1st Floor,
                Shop No. 10, Nairobi
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-fire" />
                <a href="tel:+254740949022" className="hover:text-electric">
                  0740 949 022
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="text-fire" />
                <a
                  href="https://instagram.com/all_firecomps._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-electric"
                >
                  @all_firecomps._
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Music2 className="text-fire" />
                <a
                  href="https://tiktok.com/@firelite_computers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-electric"
                >
                  @firelite_computers
                </a>
              </li>
            </ul>

            <a
              href="https://wa.me/254740949022?text=Hi%20Firelite%20Computers%2C%20I%27d%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-heading font-bold uppercase tracking-wide text-white transition hover:brightness-110"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-navy-light p-6"
          >
            <h2 className="mb-4 font-heading text-xl font-bold text-white">
              Send a Message
            </h2>

            {sent ? (
              <div className="flex items-center gap-3 rounded-xl border border-electric/40 bg-electric/5 p-4 text-electric">
                <CheckCircle2 size={22} />
                <span>Thanks! We&apos;ll get back to you shortly.</span>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white outline-none focus:border-electric"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white outline-none focus:border-electric"
                />
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white outline-none focus:border-electric"
                />
                <button type="submit" className="btn-primary w-full">
                  <Send size={18} /> Send Message
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Firelite Computers location"
            src="https://www.google.com/maps?q=Moi%20Avenue%20Nairobi&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-[420px] grayscale-[20%]"
          />
        </div>
      </div>
    </div>
  );
}
