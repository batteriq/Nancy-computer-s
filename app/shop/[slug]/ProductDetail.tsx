"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Check,
  Truck,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { Product, formatKES } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import MpesaPayment from "@/components/MpesaPayment";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="container-x py-12">
      <Link
        href="/shop"
        className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-electric"
      >
        <ArrowLeft size={16} /> Back to shop
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-black/40"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <span className="absolute left-4 top-4 rounded-full bg-fire/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
            {product.category}
          </span>
        </motion.div>

        <div>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 font-heading text-4xl font-bold text-electric">
            {formatKES(product.price)}
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-navy-light p-5">
            <h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-wide text-fire">
              Specifications
            </h3>
            <p className="text-white/80">{product.specs}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <Truck size={18} className="text-electric" /> Nationwide delivery
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-electric" /> Genuine &amp;
              tested
            </span>
          </div>

          <button
            onClick={handleAdd}
            className="btn-ghost mt-6 w-full"
          >
            {added ? (
              <>
                <Check size={18} /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingCart size={18} /> Add to Cart
              </>
            )}
          </button>

          <div className="mt-8 rounded-2xl border border-white/10 bg-navy-light p-5">
            <h3 className="mb-4 font-heading text-lg font-bold text-white">
              Pay Instantly with M-Pesa
            </h3>
            <MpesaPayment
              amount={product.price}
              reference={product.slug}
            />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="mb-8 font-heading text-2xl font-bold text-white">
            Related Products
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
