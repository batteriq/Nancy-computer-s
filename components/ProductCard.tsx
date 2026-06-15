"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Zap } from "lucide-react";
import { Product, formatKES } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({
  product,
  index = 0,
  ribbon = false,
}: {
  product: Product;
  index?: number;
  ribbon?: boolean;
}) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-light transition-shadow duration-300 hover:border-electric/40 hover:shadow-glow"
    >
      {/* Electric blue top border, revealed on hover */}
      <span className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-electric shadow-glow transition-transform duration-300 group-hover:scale-x-100" />

      {ribbon && product.bestSeller && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-fire px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white shadow-glow-fire">
          Best Seller
        </span>
      )}

      <Link
        href={`/shop/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-black/40"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-fire/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-heading text-lg font-bold leading-tight text-white transition group-hover:text-electric">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-white/55">{product.specs}</p>

        <div className="mt-3">
          <span className="font-heading text-2xl font-bold text-electric [text-shadow:0_0_12px_rgba(0,212,255,0.35)]">
            {formatKES(product.price)}
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => addItem(product)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-electric bg-navy py-2 text-xs font-bold uppercase tracking-wide text-electric transition hover:bg-electric hover:text-navy"
          >
            <ShoppingCart size={15} /> Add
          </button>
          <Link
            href={`/shop/${product.slug}`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-electric py-2 text-xs font-bold uppercase tracking-wide text-navy transition hover:brightness-110 active:scale-95 hover:scale-[1.03]"
          >
            <Zap size={15} /> Buy Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
