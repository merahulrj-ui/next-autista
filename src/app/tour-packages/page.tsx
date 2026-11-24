import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, MapPin, ShieldCheck, MessageCircle, Star } from "lucide-react";
import { TOURS } from "@/data/tours";
import TourCard from "@/components/TourCard";

export const metadata: Metadata = {
  title: "All India Private Chauffeur Tour Packages | Golden Triangle & Rajasthan",
  description:
    "Explore our 30 exclusive private road tour itineraries across Rajasthan, the Golden Triangle, Varanasi, and the Thar Desert. All-inclusive luxury vehicle and dedicated licensed chauffeur service.",
  alternates: {
    canonical: "https://autistaprivatoindia.it/tour-packages.html",
  },
};

export default function TourPackagesPage() {
  const whatsappUrl =
    "https://wa.me/919990648881?text=Hello,%20I%20would%20like%20information%20and%20advice%20about%20your%20private%20driver%20tour%20packages%20in%20India.";

  const tourListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Complete Private Chauffeur Tour Itineraries Across India",
    description: "23 bespoke road tour itineraries across Rajasthan, the Golden Triangle, Varanasi, and the Great Thar Desert.",
    numberOfItems: TOURS.length,
    itemListElement: TOURS.map((t, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: t.title,
      url: `https://autistaprivatoindia.it/${t.legacyUrl}`,
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourListSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <nav className="text-xs text-slate-500 mb-3 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-amber-600">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">All Tour Packages</span>
          </nav>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            2026 Complete Travel Catalog
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 mb-4">
            Private Car &amp; Chauffeur Tours Across India
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From the classic <strong>6-Day Golden Triangle</strong> to <strong>16-Day Grand Rajasthan Expeditions</strong> across the Thar Desert and royal palaces. Every itinerary is 100% tailor-made to your personal pace with an exclusive air-conditioned vehicle and vetted English-speaking chauffeur.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Zero Commission Shopping Traps
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              4.96/5 Guest Satisfaction Rating
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              24/7 Dedicated Concierge Support
            </span>
          </div>
        </div>

        {/* 23 Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        {/* Custom Trip Banner */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Bespoke Tailor-Made Itinerary
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
              Looking for a custom combination of cities or dates?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              We design custom point-to-point road itineraries across India: simply share your arrival dates, trip duration, preferred vehicle category, and desired destinations. We will deliver a complete kilometer breakdown with transparent, guaranteed fixed pricing.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg hover:shadow-emerald-600/30 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Customize on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
