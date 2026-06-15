import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import { FadeIn, WaveDivider } from "@/components/Section";
import { products } from "@/lib/products";
import Link from "next/link";
import {
  Truck,
  BadgeDollarSign,
  ShieldCheck,
  GraduationCap,
  Headphones,
  Users,
  Star,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    desc: "Every item we sell is verified genuine, no counterfeits, ever. Buy with total confidence.",
  },
  {
    icon: BadgeDollarSign,
    title: "Wholesale Prices",
    desc: "We buy in bulk so you pay less. Best prices in Nairobi, guaranteed.",
  },
  {
    icon: GraduationCap,
    title: "Student Deals",
    desc: "Special pricing for university and college students. Bring your student ID and save.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    desc: "We deliver to every county in Kenya. Order online and we bring it to you.",
  },
  {
    icon: Users,
    title: "Expert Advice",
    desc: "Our team helps you pick the right device for your budget and your needs.",
  },
  {
    icon: Headphones,
    title: "After-Sale Support",
    desc: "We support you after your purchase. Bring it back if there is any issue.",
  },
];

const testimonials = [
  {
    name: "James Mwangi",
    location: "Nairobi",
    text: "I bought an HP EliteBook Core i5 for KES 10,000 and it has been perfect for my college work. The team helped me choose the right one for my budget. Delivery was fast and the laptop came clean and fully working.",
  },
  {
    name: "Aisha Odhiambo",
    location: "Mombasa",
    text: "Ordered a Dell 27-inch monitor and it was delivered all the way to Mombasa in two days. Genuine product, well packaged, and exactly as described. I will definitely shop here again.",
  },
  {
    name: "Brian Kamau",
    location: "Kisumu",
    text: "The Dell Latitude i7 at KES 25,500 is a beast. Handles all my design software with ease. Nancy Fire Computers gave me honest advice and a fair price. Highly recommended for professionals.",
  },
  {
    name: "Faith Njeri",
    location: "Nakuru",
    text: "As a student I was on a tight budget. They sorted me out with a Lenovo ThinkPad for 18k and even threw in great advice on care. Genuine shop, genuine people. Five stars.",
  },
];

export default function HomePage() {
  const featured = products.slice(0, 8);
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 6);

  return (
    <>
      <Hero />
      <Marquee />

      {/* Featured products */}
      <section className="container-x py-20">
        <div className="mb-12 border-l-4 border-electric pl-5">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-2 text-white/60">
            Hand-picked deals for students, professionals, and businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/shop" className="btn-primary">
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <WaveDivider fill="#111831" />
      <section className="bg-navy-light py-20">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-[0.3em] text-fire">
              Why Nancy Fire Computers
            </span>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy p-7 transition hover:border-electric/40 hover:shadow-glow">
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
        </div>
      </section>

      {/* Best sellers */}
      <WaveDivider fill="#0A0F1E" />
      <section className="container-x py-20">
        <div className="mb-12 border-l-4 border-fire pl-5">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Best Sellers
          </h2>
          <p className="mt-2 text-white/60">
            Our most popular products, loved by customers across Kenya.
          </p>
        </div>
        {/* Horizontal scroll on mobile, grid on larger screens */}
        <div className="-mx-5 flex snap-x gap-6 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {bestSellers.map((p, i) => (
            <div
              key={p.id}
              className="w-[78%] shrink-0 snap-start sm:w-auto"
            >
              <ProductCard product={p} index={i} ribbon />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <WaveDivider fill="#111831" />
      <section className="bg-navy-light py-20">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-[0.3em] text-fire">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={(i % 4) * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy p-6 transition hover:border-electric/40 hover:shadow-glow">
                  <div className="mb-3 flex gap-1 text-fire">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-white/80">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-5">
                    <p className="font-heading font-bold text-electric">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/50">{t.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Store location */}
      <WaveDivider fill="#0A0F1E" />
      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-[0.3em] text-fire">
              Find Us
            </span>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Visit Us In Store
            </h2>
            <div className="mt-6 space-y-5 text-white/75">
              <p className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-electric" />
                Nairobi, Moi Avenue, opposite MKU Towers, Central Building, 1st
                Floor, Shop No. 10
              </p>
              <p className="flex items-center gap-3">
                <Phone className="shrink-0 text-electric" />
                <a href="tel:+254740949022" className="hover:text-electric">
                  0740 949 022
                </a>
              </p>
              <div className="flex gap-3">
                <Clock className="mt-1 shrink-0 text-electric" />
                <div>
                  <p>Monday to Saturday: 8:00 AM to 7:00 PM</p>
                  <p>Sunday: 10:00 AM to 4:00 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps?q=Moi+Avenue+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MapPin size={18} /> Get Directions
              </a>
              <a
                href="https://wa.me/254740949022"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3 font-heading text-base font-bold uppercase tracking-wide text-white transition hover:brightness-110"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Nancy Fire Computers location"
              src="https://www.google.com/maps?q=Moi%20Avenue%20Nairobi&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
