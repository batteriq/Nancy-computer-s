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

// Thin SVG wave divider so sections flow into each other without harsh borders.
// `fill` should match the colour of the section that follows below it.
export function WaveDivider({
  fill = "#0A0F1E",
  className = "",
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none -mt-px w-full leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-[44px] w-full"
      >
        <path
          d="M0 30 C 240 60 480 0 720 24 C 960 48 1200 12 1440 36 L 1440 60 L 0 60 Z"
          fill={fill}
        />
      </svg>
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
