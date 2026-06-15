"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-[0.3em] text-fire">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-white/60">{subtitle}</p>}
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
