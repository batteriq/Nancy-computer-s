"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { products } from "@/lib/products";

const tabs = [
  { id: "all", label: "All" },
  { id: "laptops", label: "Laptops" },
  { id: "monitors", label: "Monitors" },
  { id: "desktops", label: "Desktops" },
  { id: "accessories", label: "Accessories" },
] as const;

type SortKey = "featured" | "price-asc" | "price-desc" | "newest";

const sortOptions: { id: SortKey; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "newest", label: "Newest First" },
];

export default function ShopPage() {
  const [active, setActive] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("featured");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(t);
  }, []);

  const visible = useMemo(() => {
    let list =
      active === "all"
        ? [...products]
        : products.filter((p) => p.category === active);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "newest") list.sort((a, b) => b.id - a.id);
    return list;
  }, [active, sort]);

  return (
    <div>
      {/* Hero banner */}
      <section className="border-b border-white/10 bg-navy-light py-16">
        <div className="container-x text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="mt-3 text-white/60">
            Browse our full range of laptops, monitors, desktops, and
            accessories.
          </p>
        </div>
      </section>

      <div className="container-x py-12">
        {/* Filter tabs + sort */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className="relative rounded-full px-5 py-2 font-heading text-sm font-bold uppercase tracking-wide text-white/70 transition hover:text-electric"
                >
                  {isActive && (
                    <motion.span
                      layoutId="shopTab"
                      className="absolute inset-0 -z-10 rounded-full bg-electric shadow-glow"
                    />
                  )}
                  <span className={isActive ? "text-navy" : ""}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative inline-flex items-center">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="appearance-none rounded-full border border-white/15 bg-navy py-2 pl-4 pr-10 text-sm text-white outline-none focus:border-electric"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id} className="bg-navy">
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 text-white/50"
            />
          </div>
        </div>

        <p className="mb-8 text-sm text-white/50">
          Showing {visible.length} product{visible.length === 1 ? "" : "s"}
        </p>

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={p} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && visible.length === 0 && (
          <p className="py-16 text-center text-white/50">
            No products in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
