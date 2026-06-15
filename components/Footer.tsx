import Link from "next/link";
import { Phone, MapPin, Instagram, Music2, Truck } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-light">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
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

        <div>
          <h4 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-white">
            Visit Us
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
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-white">
            Follow Us
          </h4>
          <div className="space-y-3 text-sm text-white/70">
            <a
              href="https://instagram.com/all_firecomps._"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-electric"
            >
              <Instagram size={18} className="text-fire" />
              @all_firecomps._
            </a>
            <a
              href="https://tiktok.com/@firelite_computers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-electric"
            >
              <Music2 size={18} className="text-fire" />
              @firelite_computers
            </a>
            <a
              href="https://wa.me/254740949022"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-electric"
            >
              <Phone size={18} className="text-fire" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2025 Firelite Computers. All rights reserved. Built in Nairobi 🇰🇪
      </div>
    </footer>
  );
}
