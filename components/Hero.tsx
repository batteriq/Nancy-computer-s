"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, MapPin } from "lucide-react";

const phrases = [
  "Power Your World with Firelite",
  "Budget Laptops from KES 10,000",
  "Wholesale Prices. Genuine Products.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = deleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  return (
    <section className="hero-glow relative overflow-hidden">
      <div className="grid-overlay absolute inset-0 opacity-60" />
      <div className="container-x relative z-10 flex min-h-[88vh] flex-col items-center justify-center py-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric"
        >
          <Zap size={14} /> Nairobi&apos;s #1 Gadget &amp; Electronics Destination
        </motion.span>

        <h1 className="min-h-[2.4em] max-w-4xl font-heading text-4xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
          <span className="gradient-text">{text}</span>
          <span className="ml-1 inline-block w-1 animate-pulse bg-electric align-middle">
            &nbsp;
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          Laptops, monitors, desktops and accessories at unbeatable wholesale
          prices. Genuine products with nationwide delivery across Kenya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/shop" className="btn-primary">
            <Zap size={18} /> Shop Now
          </Link>
          <Link href="/contact" className="btn-ghost">
            <MapPin size={18} /> Visit Our Store
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
