"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatKES } from "@/lib/products";

export default function CartDrawer() {
  const { isOpen, close, items, updateQty, removeItem, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-navy-light shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-white">
                <ShoppingBag size={22} className="text-electric" /> Your Cart
              </h2>
              <button
                onClick={close}
                aria-label="Close cart"
                className="rounded-full p-1 text-white/70 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-white/50">
                  {/* Empty box illustration */}
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    aria-hidden="true"
                    className="mb-5"
                  >
                    <path
                      d="M20 44 L60 24 L100 44 L60 64 Z"
                      stroke="#00D4FF"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      opacity="0.7"
                    />
                    <path
                      d="M20 44 V84 L60 104 V64"
                      stroke="#00D4FF"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      opacity="0.4"
                    />
                    <path
                      d="M100 44 V84 L60 104"
                      stroke="#00D4FF"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      opacity="0.4"
                    />
                    <line
                      x1="40"
                      y1="34"
                      x2="80"
                      y2="54"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      opacity="0.6"
                    />
                  </svg>
                  <p className="font-semibold text-white/70">
                    Your cart is empty.
                  </p>
                  <p className="mt-1 text-sm">Start shopping.</p>
                  <Link
                    href="/shop"
                    onClick={close}
                    className="btn-primary mt-6"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 rounded-xl border border-white/10 bg-navy p-3"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-black/40">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between gap-2">
                          <h3 className="text-sm font-semibold leading-tight text-white">
                            {item.name}
                          </h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label="Remove item"
                            className="text-white/40 hover:text-fire"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <span className="text-sm font-bold text-electric">
                          {formatKES(item.price)}
                        </span>
                        <div className="mt-auto flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            aria-label="Decrease quantity"
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white hover:border-electric"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center text-sm text-white">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            aria-label="Increase quantity"
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white hover:border-electric"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-white/10 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-white/70">Total</span>
                  <span className="font-heading text-2xl font-bold text-electric">
                    {formatKES(total)}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  onClick={close}
                  className="btn-fire w-full"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
