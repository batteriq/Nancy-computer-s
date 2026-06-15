"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const tabs = [
  { id: "all", label: "All" },
  { id: "laptops", label: "Laptops" },
  { id: "monitors", label: "Monitors" },
  { id: "accessories", label: "Accessories" },
  { id: "desktops", label: "Desktops" },
] as const;

export default function ShopPage() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div className="container-x py-14">
      <div className="mb-10 text-center">
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
          Shop <span className="gradient-text">Firelite</span>
        </h1>
        <p className="mt-3 text-white/60">
          Genuine gadgets at wholesale prices. Nationwide delivery.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`rounded-full px-5 py-2 font-heading text-sm font-bold uppercase tracking-wide transition ${
              active === tab.id
                ? "bg-electric text-navy shadow-glow"
                : "border border-white/15 text-white/70 hover:border-electric hover:text-electric"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-white/50">
          No products in this category yet.
        </p>
      )}
    </div>
  );
}
