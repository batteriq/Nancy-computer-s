import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Logo from "./Logo";

// Custom inline social SVGs (no emojis, no external icon images).
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3c.6 2.5 2.3 4.2 4.8 4.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/deals", label: "Deals" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const categories = [
  "Laptops",
  "Monitors",
  "Desktops",
  "Accessories",
  "Student Deals",
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-electric/40 bg-navy-light">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-white/60">
            Nairobi&apos;s trusted gadget and electronics shop. Genuine products,
            wholesale prices, nationwide delivery.
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/all_firecomps._"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-electric hover:text-electric"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://tiktok.com/@firelite_computers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-electric hover:text-electric"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-electric">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-white">
            Product Categories
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {categories.map((c) => (
              <li key={c}>
                <Link href="/shop" className="hover:text-electric">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-white">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-fire" />
              Moi Avenue, Central Building, 1st Floor, Shop No. 10, Nairobi
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="shrink-0 text-fire" />
              <a href="tel:+254740949022" className="hover:text-electric">
                0740 949 022
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={18} className="shrink-0 text-fire" />
              Mon - Sat: 8AM - 7PM
            </li>
            <li>
              <a
                href="https://wa.me/254740949022"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:brightness-110"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <span>2025 Nancy Fire Computers. All rights reserved.</span>
          <span>Built with care in Nairobi, Kenya.</span>
        </div>
      </div>
    </footer>
  );
}
