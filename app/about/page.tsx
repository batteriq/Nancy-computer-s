import type { Metadata } from "next";
import { SectionHeading, FadeIn } from "@/components/Section";
import { BadgeCheck, Truck, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Firelite Computers",
  description:
    "The story of Firelite Computers — Nairobi's trusted destination for affordable, genuine laptops, monitors and gadgets.",
};

const values = [
  {
    icon: BadgeCheck,
    title: "Affordable",
    desc: "Wholesale pricing that puts quality tech within everyone's reach.",
  },
  {
    icon: Zap,
    title: "Genuine",
    desc: "Every device is tested and certified before it reaches you.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Same-day dispatch and nationwide delivery across Kenya.",
  },
];

const team = [
  { name: "David Mwangi", role: "Founder & CEO", emoji: "👨🏾‍💼" },
  { name: "Aisha Hassan", role: "Sales Manager", emoji: "👩🏾‍💼" },
  { name: "Kevin Ouma", role: "Technical Lead", emoji: "👨🏾‍🔧" },
  { name: "Grace Njeri", role: "Customer Care", emoji: "👩🏾‍💻" },
];

export default function AboutPage() {
  return (
    <div className="py-14">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-[0.3em] text-fire">
            Our Story
          </span>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Powering Kenya, <span className="gradient-text">One Gadget</span> at
            a Time
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Firelite Computers started as a small stall on Moi Avenue with one
            simple mission: make quality technology affordable for every
            Kenyan. From students hunting for their first laptop to businesses
            kitting out an entire office, we&apos;ve grown into Nairobi&apos;s
            go-to destination for genuine gadgets at wholesale prices.
          </p>
          <p className="mt-4 leading-relaxed text-white/60">
            Today, we ship laptops, monitors, desktops and accessories to every
            corner of the country — backed by honest advice, fair prices and
            the hustle that built us. When you buy from Firelite, you&apos;re
            buying from people who genuinely care about getting you the right
            machine for your budget.
          </p>
        </div>

        {/* Store photos placeholder */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {["Our Storefront", "Inside The Shop", "Ready For Delivery"].map(
            (label) => (
              <FadeIn key={label}>
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-navy-light text-center text-sm text-white/40">
                  <div>
                    <div className="mb-2 text-3xl">📸</div>
                    {label}
                  </div>
                </div>
              </FadeIn>
            )
          )}
        </div>
      </div>

      {/* Values */}
      <section className="mt-20 border-y border-white/10 bg-navy-light py-20">
        <div className="container-x">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fire/10 text-fire">
                    <v.icon size={30} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-20">
        <SectionHeading
          eyebrow="The People"
          title="Meet The Team"
          subtitle="The Nairobi crew that keeps Firelite firing."
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-navy-light p-6 text-center transition hover:border-electric/40">
                <div className="mb-3 flex justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-electric/10 text-4xl">
                    {member.emoji}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-fire">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-3 text-white/50">
          <Users size={20} />
          <span>Serving thousands of happy customers across Kenya.</span>
        </div>
      </section>
    </div>
  );
}
