"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, GraduationCap, Boxes, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const flashDeals = products.slice(0, 4);
const studentDeals = products
  .filter((p) => p.price <= 18000)
  .slice(0, 4);

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function Countdown() {
  // 24-hour countdown that resets each day, computed from a fixed target.
  const [remaining, setRemaining] = useState(24 * 60 * 60);

  useEffect(() => {
    const target = Date.now() + 24 * 60 * 60 * 1000;
    const tick = () => {
      const diff = Math.max(0, Math.floor((target - Date.now()) / 1000));
      setRemaining(diff);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  const blocks = [
    { value: pad(hours), label: "Hours" },
    { value: pad(minutes), label: "Minutes" },
    { value: pad(seconds), label: "Seconds" },
  ];

  return (
    <div className="flex items-center gap-3">
      {blocks.map((b, i) => (
        <div key={b.label} className="flex items-center gap-3">
          <div className="flex w-16 flex-col items-center rounded-xl border border-electric/40 bg-navy py-2">
            <span className="font-heading text-2xl font-bold text-electric">
              {b.value}
            </span>
            <span className="text-[0.6rem] uppercase tracking-wide text-white/50">
              {b.label}
            </span>
          </div>
          {i < blocks.length - 1 && (
            <span className="font-heading text-2xl font-bold text-white/40">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function DealsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-white/10 bg-navy-light py-16">
        <div className="container-x text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Exclusive <span className="gradient-text">Deals</span>
          </h1>
          <p className="mt-3 text-white/60">
            Limited time offers updated weekly.
          </p>
        </div>
      </section>

      {/* Flash deals */}
      <section className="container-x py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="border-l-4 border-fire pl-5">
            <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-white sm:text-3xl">
              <Clock className="text-fire" /> Flash Deals
            </h2>
            <p className="mt-1 text-sm text-white/60">
              Grab them before the timer runs out.
            </p>
          </div>
          <Countdown />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flashDeals.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Student deals */}
      <section className="border-y border-white/10 bg-navy-light py-16">
        <div className="container-x">
          <div className="mb-8 border-l-4 border-electric pl-5">
            <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-white sm:text-3xl">
              <GraduationCap className="text-electric" /> Student Deals
            </h2>
            <p className="mt-1 text-sm text-white/60">
              Special pricing for students. Valid student ID required.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {studentDeals.map((p, i) => (
              <div key={p.id} className="relative">
                <span className="absolute -top-2 left-1/2 z-20 -translate-x-1/2 rounded-full bg-electric px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-navy shadow-glow">
                  Student ID Required
                </span>
                <ProductCard product={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk order deals */}
      <section className="container-x py-16">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-light to-navy p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-white sm:text-3xl">
                <Boxes className="text-fire" /> Bulk Order Deals
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                Buying for a school, office, cyber cafe, or business? We offer
                special wholesale pricing on bulk orders of laptops, monitors,
                and accessories. The more you order, the more you save. Our team
                will prepare a custom quote tailored to your needs and arrange
                nationwide delivery.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                <li>Discounted per-unit pricing on orders of 5 or more</li>
                <li>Dedicated account manager for your order</li>
                <li>Flexible payment and delivery options</li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <Link href="/contact" className="btn-primary">
                Request a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
