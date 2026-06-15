import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/Section";
import {
  ShieldCheck,
  BadgeDollarSign,
  Heart,
  Users,
  Truck,
  GraduationCap,
  Headphones,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Nancy Fire Computers",
  description:
    "Nancy Fire Computers is Nairobi's trusted technology partner since 2018. Genuine laptops, monitors and gadgets at wholesale prices with nationwide delivery.",
};

const stats = [
  { value: "2,000+", label: "Customers Served" },
  { value: "47", label: "Counties Reached" },
  { value: "500+", label: "Products in Stock" },
  { value: "6+", label: "Years in Business" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We sell only genuine, verified products. What you see is what you get, every single time.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordability",
    desc: "We buy in bulk and pass the savings to you. Quality technology should fit every budget.",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Your satisfaction drives everything we do. We are here before, during, and after your purchase.",
  },
];

const team = [
  {
    name: "Nancy Wanjiru",
    role: "Founder and CEO",
    bio: "Built Nancy Fire Computers from a single Moi Avenue stall into a trusted brand.",
  },
  {
    name: "David Otieno",
    role: "Sales Manager",
    bio: "Helps every customer find the right device for their budget and needs.",
  },
  {
    name: "Grace Muthoni",
    role: "Customer Support Lead",
    bio: "Ensures every order and after-sale enquiry is handled with care.",
  },
];

const whyShop = [
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    desc: "Every item we sell is verified genuine, no counterfeits, ever. Each device is tested and graded before it reaches our shelves.",
  },
  {
    icon: BadgeDollarSign,
    title: "Wholesale Prices",
    desc: "We buy in bulk so you pay less. We consistently offer the best prices in Nairobi's Central Business District.",
  },
  {
    icon: GraduationCap,
    title: "Student Deals",
    desc: "Special pricing for university and college students. Bring your student ID and unlock dedicated discounts.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    desc: "We deliver to all 47 counties in Kenya. Order online and we will bring it straight to your door.",
  },
  {
    icon: Users,
    title: "Expert Advice",
    desc: "Our knowledgeable team guides you to the right device, so you never overspend or buy the wrong thing.",
  },
  {
    icon: Headphones,
    title: "After-Sale Support",
    desc: "We support you long after your purchase. If there is any issue, bring it back and we will make it right.",
  },
];

function TeamAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`av-${initials}`} x1="0" y1="0" x2="96" y2="96">
          <stop offset="0" stopColor="#00D4FF" />
          <stop offset="1" stopColor="#FF6B00" />
        </linearGradient>
      </defs>
      <circle
        cx="48"
        cy="48"
        r="46"
        fill="#111831"
        stroke={`url(#av-${initials})`}
        strokeWidth="3"
      />
      <polygon
        points="48,18 70,34 70,62 48,78 26,62 26,34"
        fill={`url(#av-${initials})`}
        opacity="0.12"
      />
      <text
        x="48"
        y="56"
        textAnchor="middle"
        fontFamily="Rajdhani, sans-serif"
        fontSize="30"
        fontWeight="700"
        fill="#00D4FF"
      >
        {initials}
      </text>
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero banner with circuit pattern */}
      <section className="relative overflow-hidden border-b border-white/10 bg-navy-light py-24">
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.1]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="aboutCircuit"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40h26m28 0h26M40 0v26m0 28v26"
                stroke="#00D4FF"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="40" cy="40" r="2.5" fill="#00D4FF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutCircuit)" />
        </svg>
        <div className="container-x relative text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            About <span className="gradient-text">Nancy Fire Computers</span>
          </h1>
          <p className="mt-4 text-lg text-white/65">
            Your trusted technology partner in Nairobi since 2018.
          </p>
        </div>
      </section>

      {/* Our story */}
      <section className="container-x py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format"
                alt="Nancy Fire Computers workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <div>
            <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-[0.3em] text-fire">
              Our Story
            </span>
            <div className="space-y-4 leading-relaxed text-white/70">
              <p>
                Nancy Fire Computers was founded in Nairobi with a simple
                mission: make quality technology accessible to every Kenyan.
                Starting from a small stall on Moi Avenue, we have grown into one
                of the most trusted electronics shops in Nairobi&apos;s Central
                Business District.
              </p>
              <p>
                We specialize in refurbished and new laptops, monitors,
                desktops, and accessories. Our stock includes brands trusted
                worldwide - HP, Dell, and Lenovo - sourced directly and verified
                for quality before they reach our shelves.
              </p>
              <p>
                We are especially passionate about supporting students.
                University and college students form a large part of our
                customer base, and we work hard to ensure there is always a
                quality laptop available at a price that fits a student budget.
              </p>
              <p>
                Today, Nancy Fire Computers serves customers from all 47 counties
                of Kenya through our nationwide delivery service. Walk into our
                shop at Moi Avenue or order online - we are here to help you
                power your world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our numbers */}
      <section className="border-y border-white/10 bg-navy-light py-16">
        <div className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <div>
                <p className="font-heading text-4xl font-bold text-electric sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wide text-white/60">
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Our values */}
      <section className="container-x py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-[0.3em] text-fire">
            What We Stand For
          </span>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Our Values
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-navy-light p-8 text-center transition hover:border-electric/40 hover:shadow-glow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fire/10 text-fire">
                  <v.icon size={30} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {v.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-white/10 bg-navy-light py-20">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-[0.3em] text-fire">
              The People
            </span>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Meet the Team
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy p-8 text-center transition hover:border-electric/40">
                  <div className="mb-4 flex justify-center">
                    <TeamAvatar name={member.name} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-fire">{member.role}</p>
                  <p className="mt-3 text-sm text-white/60">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why shop with us */}
      <section className="container-x py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.3em] text-fire">
            <Award size={16} /> Why Shop With Us
          </span>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            The Nancy Fire Advantage
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyShop.map((f, i) => (
            <FadeIn key={f.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-navy-light p-7 transition hover:border-electric/40 hover:shadow-glow">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <f.icon size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {f.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/shop" className="btn-primary">
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
