"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, MapPin, ShieldCheck, Truck, GraduationCap } from "lucide-react";
import TechBackground from "./TechBackground";

const trustBadges = [
  { icon: ShieldCheck, label: "Genuine Products" },
  { icon: Truck, label: "Nationwide Delivery" },
  { icon: GraduationCap, label: "Student Prices from KES 10,000" },
];

export default function Hero() {
  return (
    <section className="relative -mt-16 flex min-h-screen items-center overflow-hidden bg-navy pt-16">
      <TechBackground />

      <div className="container-x relative z-10 flex flex-col items-center py-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric"
        >
          <Zap size={14} /> Nancy Fire Computers
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl font-heading text-4xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl"
        >
          Nairobi&apos;s Premier{" "}
          <span className="gradient-text">Tech Destination</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          Genuine laptops, monitors, and accessories at wholesale prices. Student
          deals available. Nationwide delivery across Kenya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/shop" className="btn-primary">
            <Zap size={18} /> Shop Now
          </Link>
          <Link href="/contact" className="btn-ghost">
            <MapPin size={18} /> Visit Our Store
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {trustBadges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 text-sm font-semibold text-white/80"
            >
              <b.icon size={20} className="text-electric" />
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
