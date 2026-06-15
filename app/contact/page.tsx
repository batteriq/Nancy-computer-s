"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-fire">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-fire">
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3c.6 2.5 2.3 4.2 4.8 4.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const subjects = [
  "General Enquiry",
  "Product Question",
  "Bulk Order",
  "Delivery",
  "After-Sale Support",
];

const faqs = [
  {
    q: "Do you offer delivery outside Nairobi?",
    a: "Yes, we deliver to all 47 counties in Kenya. Delivery takes 1 to 3 business days depending on location.",
  },
  {
    q: "Are your laptops genuine?",
    a: "All our products are verified genuine. Refurbished units are tested and graded before sale.",
  },
  {
    q: "Can I pay with M-Pesa?",
    a: "Yes. You can pay via M-Pesa Lipa Na M-Pesa using a till number or via STK Push on our website.",
  },
  {
    q: "Do you have student discounts?",
    a: "Yes. Students with a valid student ID get special pricing on selected laptops and accessories.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 7 days of purchase if the product is faulty. Bring the receipt and original packaging.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subjects[0],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, "")))
      e.phone = "Phone must be 10 digits.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: subjects[0],
        message: "",
      });
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-navy px-4 py-3 text-white outline-none focus:border-electric";

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-white/10 bg-navy-light py-16">
        <div className="container-x text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="mt-3 text-white/60">
            We are available Monday to Saturday. Walk in or reach out online.
          </p>
        </div>
      </section>

      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-white/10 bg-navy-light p-6"
          >
            <h2 className="mb-5 font-heading text-xl font-bold text-white">
              Send a Message
            </h2>

            {sent && (
              <div className="mb-5 flex items-center gap-3 rounded-xl border border-electric/40 bg-electric/5 p-4 text-electric">
                <CheckCircle2 size={22} />
                <span>Thank you. We will get back to you within 24 hours.</span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full Name"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-fire">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email Address"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-fire">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  inputMode="numeric"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Phone Number"
                  className={inputClass}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-fire">{errors.phone}</p>
                )}
              </div>
              <div className="relative">
                <select
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className={`${inputClass} appearance-none pr-10`}
                >
                  {subjects.map((s) => (
                    <option key={s} value={s} className="bg-navy">
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Your message"
                  className={inputClass}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-fire">{errors.message}</p>
                )}
              </div>
              <button type="submit" className="btn-primary w-full">
                <Send size={18} /> Send Message
              </button>
            </div>
          </form>

          {/* Details */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-navy-light p-6">
              <h2 className="mb-5 font-heading text-xl font-bold text-white">
                Contact Details
              </h2>
              <ul className="space-y-5 text-white/75">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-electric" />
                  <span>
                    Moi Avenue, opposite MKU Towers, Central Building, 1st Floor,
                    Shop No. 10, Nairobi
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="shrink-0 text-electric" />
                  <a href="tel:+254740949022" className="hover:text-electric">
                    0740 949 022
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 shrink-0 text-electric" />
                  <div className="text-sm">
                    <p>Monday to Friday: 8:00 AM to 7:00 PM</p>
                    <p>Saturday: 9:00 AM to 6:00 PM</p>
                    <p>Sunday: 10:00 AM to 4:00 PM</p>
                  </div>
                </li>
              </ul>

              <a
                href="https://wa.me/254740949022?text=Hi%20Nancy%20Fire%20Computers%2C%20I%27d%20like%20to%20make%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-heading font-bold uppercase tracking-wide text-white transition hover:brightness-110"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
                <a
                  href="https://instagram.com/all_firecomps._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-electric"
                >
                  <InstagramIcon /> @all_firecomps._
                </a>
                <a
                  href="https://tiktok.com/@firelite_computers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-electric"
                >
                  <TikTokIcon /> @firelite_computers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="overflow-hidden border-y border-white/10">
        <iframe
          title="Nancy Fire Computers location"
          src="https://www.google.com/maps?q=Moi%20Avenue%20Nairobi&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[20%]"
        />
      </div>

      {/* FAQ */}
      <section className="container-x py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-xl border border-white/10 bg-navy-light"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-heading font-semibold text-white">
                      {f.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-electric transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm leading-relaxed text-white/65">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
