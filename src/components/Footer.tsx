import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, HeartHandshake, Clock, Car, Sparkles } from "lucide-react";
import { TOURS } from "@/data/tours";
import { DESTINATIONS } from "@/data/destinations";

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/919990648881?text=Hello,%20I%20would%20like%20more%20information%20about%20your%20private%20driver%20tours%20in%20India.";

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Value Proposition Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-800/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-1">Zero Commission Shops</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                No forced stops or souvenir shopping scams. Travel with complete freedom and respect.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-1">24/7 Dedicated Support</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated coordinator on WhatsApp for any assistance before and during your journey.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-1">Transparent Prices</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fuel, tolls, state border permits, and driver accommodation are always 100% included.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-1">Recent &amp; Sanitized Vehicles</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Owned fleet of air-conditioned Toyota Innova Crysta SUVs and Sedans with vetted drivers.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Col 1: About & Contacts */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold text-white">
                Private Driver <span className="text-amber-500">India</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Specialists in professional chauffeured car rental and tailor-made travel itineraries in Rajasthan, the Golden Triangle, Varanasi, and North India for international travelers.
            </p>
            <div className="space-y-3 text-xs">
              <a
                href="tel:+919990648881"
                className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 9990648881 (Calls &amp; WhatsApp)</span>
              </a>
              <a
                href="mailto:autistaprivatoindia@gmail.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>autistaprivatoindia@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>C 8/82, 3rd Floor, East Of Kailash, Sriniwaspuri, New Delhi - 110065, India</span>
              </div>
            </div>
          </div>

          {/* Col 2: Top Tours Packages */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Featured Tours
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/golden-triangle-tour-package"
                  className="hover:text-amber-400 transition-colors"
                >
                  Classic Golden Triangle (6 Days)
                </Link>
              </li>
              <li>
                <Link
                  href="/rajasthan-tour-package"
                  className="hover:text-amber-400 transition-colors"
                >
                  Rajasthan Grand Tour (14 Days)
                </Link>
              </li>
              <li>
                <Link
                  href="/same-day-agra-mathura-vrindavan-tour-by-car"
                  className="hover:text-amber-400 transition-colors"
                >
                  Same Day Taj Mahal Excursion from Delhi
                </Link>
              </li>
              <li>
                <Link
                  href="/delhi-agra-varanasi-tour-package"
                  className="hover:text-amber-400 transition-colors"
                >
                  Golden Triangle &amp; Sacred Varanasi
                </Link>
              </li>
              <li>
                <Link
                  href="/taj-and-tiger-an-encounter-tour-package"
                  className="hover:text-amber-400 transition-colors"
                >
                  Taj Mahal &amp; Ranthambore Tiger Safari
                </Link>
              </li>
              <li>
                <Link
                  href="/jodhpur-jaisalmer-tour-package"
                  className="hover:text-amber-400 transition-colors"
                >
                  Jodhpur &amp; Jaisalmer Desert Tour
                </Link>
              </li>
              <li>
                <Link
                  href="/tour-packages"
                  className="text-amber-400 font-semibold inline-flex items-center gap-1 hover:underline pt-1"
                >
                  View all 23 Tour Packages &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Guide Città del Rajasthan */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Rajasthan City Guides
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {DESTINATIONS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/${d.slug}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-slate-800">
              <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Transfers &amp; Fleet
              </h5>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link
                    href="/india-intercity-car-transfer-private-driver"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Intercity Car Transfers Delhi-Agra-Jaipur
                  </Link>
                </li>
                <li>
                  <Link
                    href="/toyota-innova-crysta-rental-india-private-driver"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Toyota Innova Crysta Rental
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Useful Guides & Booking */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Useful Information
            </h4>
            <ul className="space-y-2 text-xs mb-6">
              <li>
                <Link
                  href="/hiring-private-driver-in-india-cost-guide"
                  className="hover:text-amber-400 transition-colors"
                >
                  How Much Does a Driver Cost in India? (2026 Guide)
                </Link>
              </li>
              <li>
                <Link
                  href="/golden-triangle-ranthambore-rajasthan-heritage-tour-by-car"
                  className="hover:text-amber-400 transition-colors"
                >
                  12-Day Golden Triangle &amp; Safari Itinerary
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us &amp; Travel Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Request a Custom Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation-policy"
                  className="hover:text-amber-400 transition-colors"
                >
                  Terms &amp; Cancellation Policy
                </Link>
              </li>
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Sitewide Comprehensive Directory of all 23 Tours (for SEO internal juice) */}
        <div className="py-6 border-t border-b border-slate-800/80 my-8">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3">
            All 23 Tour Packages &amp; Private Chauffeur Itineraries:
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-slate-400">
            {TOURS.map((t) => (
              <Link
                key={t.slug}
                href={`/${t.slug}`}
                className="hover:text-amber-400 transition-colors"
              >
                {t.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Private Driver India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/cancellation-policy" className="hover:text-slate-300">
              Privacy &amp; Terms
            </Link>
            <Link href="/about-us" className="hover:text-slate-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-slate-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
