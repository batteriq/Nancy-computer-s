import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import { SectionHeading, FadeIn, WaveDivider } from "@/components/Section";
import { products } from "@/lib/products";
import Link from "next/link";
import {
  Truck,
  BadgeDollarSign,
  ShieldCheck,
  GraduationCap,
  Star,
  Phone,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Nationwide Delivery",
    desc: "Fast, reliable delivery to every county in Kenya.",
  },
  {
    icon: BadgeDollarSign,
    title: "Wholesale Prices",
    desc: "Buy direct at unbeatable wholesale rates.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    desc: "Tested, certified and warranty-backed gadgets.",
  },
  {
    icon: GraduationCap,
    title: "Student Deals",
    desc: "Special pricing for students from KES 10,000.",
  },
];

const testimonials = [
  {
    name: "Brian Otieno",
    role: "Student, University of Nairobi",
    text: "Got my HP EliteBook for just 10k and it runs perfectly for my coding classes. Firelite is the real deal!",
  },
  {
    name: "Wanjiku Kamau",
    role: "Small Business Owner",
    text: "Ordered a monitor and it was delivered to Nakuru the next day. Genuine product, fair price. Highly recommend.",
  },
  {
    name: "Collins Mwangi",
    role: "Freelance Designer",
    text: "The Dell i7 I bought handles all my design work smoothly. Great service and the M-Pesa checkout was so easy.",
  },
];

export default function HomePage() {
  const featured = products.slice(0, 8);

  return (
    <>
      <Hero />
      <Marquee />

      {/* Featured products */}
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Hot Deals"
          title="Featured Products"
          subtitle="Handpicked gadgets at prices that move fast."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/shop" className="btn-primary">
            View All Products
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <WaveDivider fill="#111831" />
      <section className="bg-navy-light py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Firelite"
            title="Why Choose Us"
            subtitle="Nairobi street-hustle energy meets premium tech service."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy p-6 text-center transition hover:border-electric/40 hover:shadow-glow">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-electric/10 text-electric">
                    <f.icon size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#0A0F1E" />
      {/* Testimonials */}
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="Happy Customers"
          title="What Kenyans Are Saying"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-white/10 bg-navy-light p-6">
                <div className="mb-3 flex gap-1 text-fire">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/80">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-5">
                  <p className="font-heading font-bold text-electric">
                    {t.name}
                  </p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <WaveDivider fill="#111831" />
      {/* Location */}
      <section className="bg-navy-light py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Find Us" title="Visit Our Store" />
            <div className="space-y-5 text-white/75">
              <p className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-fire" />
                Moi Avenue, opposite MKU Towers, Central Building, 1st Floor,
                Shop No. 10, Nairobi
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-fire" />
                <a href="tel:+254740949022" className="hover:text-electric">
                  0740 949 022
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Truck className="text-fire" />
                Nationwide delivery across Kenya
              </p>
              <Link href="/contact" className="btn-fire mt-2">
                Get Directions
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Firelite Computers location"
              src="https://www.google.com/maps?q=Moi%20Avenue%20Nairobi&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
