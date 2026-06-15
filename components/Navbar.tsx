"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart, Search, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/lib/cart-context";
import { products, formatKES } from "@/lib/products";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/deals", label: "Deals" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const { count, open: openCart } = useCart();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu / search on route change.
  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
    setQuery("");
  }, [pathname]);

  // Focus the search field when it opens; Escape closes it.
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  const matches = query.trim()
    ? products
        .filter((p) =>
          p.name.toLowerCase().includes(query.trim().toLowerCase())
        )
        .slice(0, 6)
    : [];

  function goToProduct(slug: string) {
    setSearchOpen(false);
    setQuery("");
    router.push(`/shop/${slug}`);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-electric/40 bg-black/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* Center links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                data-active={active}
                className={`nav-link font-heading text-sm font-semibold uppercase tracking-wide transition ${
                  active ? "text-electric" : "text-white/90 hover:text-electric"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search products"
            className="rounded-full p-2 text-white transition hover:text-electric"
          >
            <Search size={20} />
          </button>

          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative rounded-full p-2 text-white transition hover:text-electric"
          >
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-electric text-[0.65rem] font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <a
            href="tel:+254740949022"
            className="hidden items-center gap-1.5 rounded-full border border-electric/40 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-electric/10 xl:flex"
          >
            <Phone size={14} className="text-electric" />
            Call Us: 0740 949 022
          </a>

          {/* Animated hamburger / X */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative h-9 w-9 lg:hidden"
          >
            <span
              className={`absolute left-1.5 right-1.5 top-2.5 h-0.5 rounded bg-white transition-all duration-300 ${
                open ? "top-4 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-1.5 right-1.5 top-4 h-0.5 rounded bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-2.5 left-1.5 right-1.5 h-0.5 rounded bg-white transition-all duration-300 ${
                open ? "bottom-4 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Inline expanding search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black/85 backdrop-blur-md"
          >
            <div className="container-x py-4">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search laptops, monitors, accessories..."
                  className="w-full rounded-xl border border-white/15 bg-navy py-3 pl-11 pr-4 text-white outline-none focus:border-electric"
                />
                {matches.length > 0 && (
                  <ul className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-xl border border-white/15 bg-navy-light shadow-2xl">
                    {matches.map((p) => (
                      <li key={p.id}>
                        <button
                          onClick={() => goToProduct(p.slug)}
                          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-electric/10"
                        >
                          <span className="text-sm text-white">{p.name}</span>
                          <span className="text-sm font-bold text-electric">
                            {formatKES(p.price)}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {query.trim() && matches.length === 0 && (
                  <p className="absolute left-0 right-0 top-full mt-2 rounded-xl border border-white/15 bg-navy-light px-4 py-3 text-sm text-white/50">
                    No products match &ldquo;{query}&rdquo;.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-2 bg-navy/98 backdrop-blur-xl lg:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.07 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-heading text-3xl font-bold uppercase tracking-wide transition ${
                    pathname === l.href
                      ? "text-electric"
                      : "text-white hover:text-electric"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="tel:+254740949022"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + links.length * 0.07 }}
              className="mt-6 flex items-center gap-2 rounded-full border border-electric px-6 py-3 font-heading font-bold text-electric"
            >
              <Phone size={18} /> 0740 949 022
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
