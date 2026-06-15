"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Zap } from "lucide-react";
import { Product, formatKES } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-light transition hover:border-electric/50 hover:shadow-glow"
    >
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

        <div className="mt-3 flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-electric">
            {formatKES(product.price)}
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => addItem(product)}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/20 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:border-electric hover:text-electric"
          >
            <ShoppingCart size={15} /> Add
          </button>
          <Link
            href={`/shop/${product.slug}`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-fire py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:brightness-110"
          >
            <Zap size={15} /> Buy Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
