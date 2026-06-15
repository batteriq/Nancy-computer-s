import Link from "next/link";
import { Phone, MapPin, Truck } from "lucide-react";
import Logo from "./Logo";

// Custom inline social SVGs (no emojis, no external icon images).
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-fire"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-fire"
    >
      <path
        d="M14 3v11.5a3.5 3.5 0 1 1-3-3.46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3c.6 2.5 2.3 4.2 4.8 4.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t-2 border-electric/40 bg-navy-light">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        {/* About */}
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-white/60">
            Nairobi&apos;s #1 Gadget &amp; Electronics Destination. Wholesale
            prices, genuine products, nationwide delivery.
          </p>
          <div className="flex items-center gap-2 text-sm text-electric">
            <Truck size={16} /> Nationwide delivery across Kenya
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-electric">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-electric">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-electric">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-electric">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="hover:text-electric">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-white">
            Contact &amp; Socials
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0 text-fire" />
              Moi Avenue, opposite MKU Towers, Central Building, 1st Floor, Shop
              No. 10, Nairobi
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-fire" />
              <a href="tel:+254740949022" className="hover:text-electric">
                0740 949 022
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/all_firecomps._"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-electric"
              >
                <InstagramIcon />
                @all_firecomps._
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@firelite_computers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-electric"
              >
                <TikTokIcon />
                @firelite_computers
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        2025 Firelite Computers. All rights reserved.
      </div>
    </footer>
  );
}
