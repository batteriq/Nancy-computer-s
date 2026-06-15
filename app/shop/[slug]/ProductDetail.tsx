"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Check,
  Truck,
  Star,
  Minus,
  Plus,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { Product, formatKES, getSpecRows, categoryLabels } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import MpesaPayment from "@/components/MpesaPayment";
import ProductCard from "@/components/ProductCard";

type Tab = "description" | "specifications" | "reviews";

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5 text-fire">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          className={i < Math.round(rating) ? "" : "text-white/25"}
        />
      ))}
    </div>
  );
}

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<Tab>("description");

  // Thumbnail variants: same Unsplash image with different crop params.
  const images = [
    product.image,
    `${product.image}&fit=crop&crop=top`,
    `${product.image}&fit=crop&crop=bottom`,
  ];
  const [mainImage, setMainImage] = useState(images[0]);

  const rating = product.rating ?? 4.6;
  const reviews = product.reviews ?? 24;
  const specRows = getSpecRows(product);

  const customerReviews = [
    {
      name: "Peter Kariuki",
      rating: 5,
      text: "Exactly as described and delivered on time. Works perfectly, very happy with my purchase.",
    },
    {
      name: "Mercy Achieng",
      rating: 4,
      text: "Good value for the price. The team was helpful and answered all my questions before I bought.",
    },
    {
      name: "Samuel Kiptoo",
      rating: 5,
      text: "Genuine product and great after-sale support. Would buy from Nancy Fire Computers again.",
    },
  ];

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="container-x py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex flex-wrap items-center gap-1 text-sm text-white/50">
        <Link href="/" className="hover:text-electric">
          Home
        </Link>
        <ChevronRight size={14} />
        <Link href="/shop" className="hover:text-electric">
          Shop
        </Link>
        <ChevronRight size={14} />
        <span className="text-white/70">
          {categoryLabels[product.category]}
        </span>
        <ChevronRight size={14} />
        <span className="text-electric">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left: images */}
        <div>
          <motion.div
            key={mainImage}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-black/40"
          >
            <Image
              src={mainImage}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <span className="absolute left-4 top-4 rounded-full bg-fire/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              {categoryLabels[product.category]}
            </span>
          </motion.div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(img)}
                className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-black/40 transition ${
                  mainImage === img
                    ? "border-electric"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} view ${i + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: details */}
        <div>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <Stars rating={rating} />
            <span className="text-sm text-white/55">
              {rating.toFixed(1)} ({reviews} reviews)
            </span>
          </div>

          <p className="mt-4 font-heading text-4xl font-bold text-electric [text-shadow:0_0_14px_rgba(0,212,255,0.35)]">
            {formatKES(product.price)}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-sm text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            In Stock
          </div>

          {/* Spec table */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <tbody>
                {specRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-navy-light" : "bg-navy"}
                  >
                    <td className="w-1/3 px-4 py-3 font-semibold text-white/60">
                      {row.label}
                    </td>
                    <td className="px-4 py-3 text-white">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quantity selector */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-semibold text-white/70">Quantity</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:border-electric"
              >
                <Minus size={16} />
              </button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-14 rounded-lg border border-white/15 bg-navy py-1.5 text-center text-white outline-none focus:border-electric"
              />
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:border-electric"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <button onClick={handleAdd} className="btn-ghost mt-6 w-full">
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

          <div className="mt-4 rounded-2xl border border-white/10 bg-navy-light p-5">
            <h3 className="mb-4 font-heading text-lg font-bold text-white">
              Pay Instantly with M-Pesa
            </h3>
            <MpesaPayment
              amount={product.price * qty}
              reference={product.slug}
            />
          </div>

          <div className="my-6 h-px bg-white/10" />

          <p className="flex items-start gap-2 text-sm text-white/70">
            <Truck size={18} className="mt-0.5 shrink-0 text-electric" />
            Nationwide delivery available. Order before 2 PM for same-day
            dispatch in Nairobi.
          </p>

          <a
            href={`https://wa.me/254740949022?text=${encodeURIComponent(
              `Hi Nancy Fire Computers, I have a question about the ${product.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-heading font-bold uppercase tracking-wide text-white transition hover:brightness-110"
          >
            <MessageCircle size={18} /> Ask About This Product
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex flex-wrap gap-2 border-b border-white/10">
          {(
            [
              ["description", "Product Description"],
              ["specifications", "Specifications"],
              ["reviews", "Reviews"],
            ] as [Tab, string][]
          ).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`relative px-5 py-3 font-heading text-sm font-bold uppercase tracking-wide transition ${
                tab === id ? "text-electric" : "text-white/60 hover:text-white"
              }`}
            >
              {label}
              {tab === id && (
                <motion.span
                  layoutId="detailTab"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-electric"
                />
              )}
            </button>
          ))}
        </div>

        <div className="py-8">
          {tab === "description" && (
            <div className="max-w-3xl space-y-4 leading-relaxed text-white/75">
              <p>{product.description}</p>
              <p>
                At Nancy Fire Computers, every device is inspected and tested by
                our technicians before it reaches you. We stand behind the
                quality of what we sell, which is why thousands of customers
                across Kenya trust us for their technology needs.
              </p>
              <p>
                Need help deciding if this is the right product for you? Walk
                into our shop on Moi Avenue or reach out on WhatsApp and our
                team will be glad to advise you based on your budget and use
                case.
              </p>
            </div>
          )}

          {tab === "specifications" && (
            <div className="max-w-2xl overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <tbody>
                  {specRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-navy-light" : "bg-navy"}
                    >
                      <td className="w-1/3 px-4 py-3 font-semibold text-white/60">
                        {row.label}
                      </td>
                      <td className="px-4 py-3 text-white">{row.value}</td>
                    </tr>
                  ))}
                  <tr className="bg-navy-light">
                    <td className="px-4 py-3 font-semibold text-white/60">
                      Summary
                    </td>
                    <td className="px-4 py-3 text-white">{product.specs}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {tab === "reviews" && (
            <div className="max-w-3xl space-y-5">
              {customerReviews.map((r) => (
                <div
                  key={r.name}
                  className="rounded-2xl border border-white/10 bg-navy-light p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-heading font-bold text-white">
                      {r.name}
                    </p>
                    <Stars rating={r.rating} size={14} />
                  </div>
                  <p className="mt-2 text-sm text-white/70">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-8 font-heading text-2xl font-bold text-white">
            Related Products
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
