import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Star,
  MapPin,
  Calendar,
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  Car,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Users
} from "lucide-react";
import { TOURS } from "@/data/tours";
import { DESTINATIONS } from "@/data/destinations";
import { FLEET } from "@/data/fleet";
import { BLOGS } from "@/data/blogs";
import TourCard from "@/components/TourCard";
import FleetCard from "@/components/FleetCard";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Private Driver India | Luxury Car Rental with Chauffeur in Rajasthan",
  description:
    "Premier private car rental with licensed chauffeur in India for international travelers. Tailor-made tours in Rajasthan, Golden Triangle & Varanasi with transparent all-inclusive rates and 24/7 support.",
  alternates: {
    canonical: "https://autistaprivatoindia.it/",
  },
};

export default function HomePage() {
  const featuredTours = TOURS.slice(0, 6);
  const whatsappUrl =
    "https://wa.me/919990648881?text=Hello,%20I%20would%20like%20more%20information%20about%20your%20private%20driver%20tours%20in%20India.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Private Driver India",
    alternateName: "Private Chauffeur Service India",
    url: "https://autistaprivatoindia.it",
    logo: "https://autistaprivatoindia.it/images/tour/jaipur.jpg",
    image: "https://autistaprivatoindia.it/images/tour/jaipur.jpg",
    description:
      "Professional chauffeured car rental service and bespoke private tours across Rajasthan and the Golden Triangle for international travelers.",
    telephone: "+919990648881",
    email: "autistaprivatoindia@gmail.com",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C 8/82, 3rd Floor, East Of Kailash, Sriniwaspuri",
      addressLocality: "New Delhi",
      postalCode: "110065",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.5638",
      longitude: "77.2546",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.96",
      reviewCount: "284",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <div>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section - 5-Star Ultra Luxury Panoramic Rajasthan Showcase */}
      <section className="relative bg-[#070b14] text-white min-h-[92vh] flex items-center overflow-hidden">
        {/* Ultra-HD Royal Rajasthan Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header-1920x1135-1.jpg"
            alt="Royal palaces of Rajasthan and chauffeured private car rental in India"
            fill
            priority
            className="object-cover opacity-90 scale-100 hover:scale-105 transition-transform duration-1000"
          />
          {/* Subtle Royal Vignette - Crisp & Crystal Clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 lg:py-32 flex flex-col justify-between min-h-[88vh]">
          {/* Hero Main Content */}
          <div className="max-w-3xl space-y-6 pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/70 border border-amber-400/50 text-amber-300 text-xs font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Private Chauffeur &amp; Car Rental Service in India</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
              Experience Royal <span className="text-amber-400 italic font-serif">Rajasthan</span> with a Private Chauffeur
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light drop-shadow-md">
              Tailor-made private journeys across the <strong>Golden Triangle</strong>, <strong>Rajasthan</strong>, and <strong>Varanasi</strong> with luxury air-conditioned sedans, SUVs, vetted English-speaking chauffeurs, and 24/7 dedicated support.
            </p>

            {/* Trust Bullet Pills */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-slate-200 pt-2 font-medium">
              <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-200/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Guaranteed All-Inclusive Rates
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-200/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Commission Shopping Stops
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-200/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                24/7 Dedicated WhatsApp Support
              </span>
            </div>

            {/* Primary CTAs */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-500 hover:to-teal-700 text-white font-bold text-sm shadow-xl shadow-emerald-950/40 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>Request Quick WhatsApp Quote</span>
              </a>

              <Link
                href="/tour-packages"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all shadow-lg hover:-translate-y-0.5"
              >
                <span>Explore All 23 Tour Packages</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>

          {/* Floating Luxury Concierge Quick Selector Bar */}
          <div className="mt-12 backdrop-blur-xl bg-slate-900/80 border border-amber-400/30 p-4 sm:p-5 rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              <div className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block mb-0.5">
                  1. Preferred Destination
                </span>
                <span className="text-xs font-semibold text-white block">
                  Golden Triangle &middot; Rajasthan &middot; Varanasi
                </span>
              </div>

              <div className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block mb-0.5">
                  2. Ideal Duration
                </span>
                <span className="text-xs font-semibold text-white block">
                  From 1 Day to 14+ Days Tailor-Made
                </span>
              </div>

              <div className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block mb-0.5">
                  3. Selected Vehicle
                </span>
                <span className="text-xs font-semibold text-white block">
                  Toyota Innova Crysta &middot; Executive Sedan
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Custom Itinerary</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Guarantees Banner */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Zero Commission Policy</h4>
                <p className="text-xs text-slate-500">No forced stops at tourist souvenir shops</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">24/7 Dedicated Support</h4>
                <p className="text-xs text-slate-500">Dedicated coordinator available anytime on WhatsApp</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200/60">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Private Owned Fleet</h4>
                <p className="text-xs text-slate-500">Toyota Innova Crysta &amp; AC Sedans with licensed drivers</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200/60">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Guaranteed Fixed Rates</h4>
                <p className="text-xs text-slate-500">Fuel, tolls, parking, and state taxes 100% included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bestseller Tours */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-600 block mb-1">
                Most Loved by International Travelers
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
                Our Bestseller India Tour Packages
              </h2>
            </div>
            <Link
              href="/tour-packages"
              className="inline-flex items-center gap-2 font-bold text-sm text-amber-600 hover:text-amber-700"
            >
              <span>View All 23 Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tour-packages"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Browse the Complete Catalog of 23 Itineraries</span>
              <ChevronRight className="w-4 h-4 text-amber-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bespoke Luxury Concierge & Custom Itinerary Section */}
      <section className="py-24 bg-gradient-to-b from-amber-50/60 via-white to-amber-50/40 text-slate-900 relative overflow-hidden border-y border-amber-200/60">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700 block">
              Bespoke Luxury Travel Concierge
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Design Your Custom India Tour with Our Team
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Every traveler is unique. Whether you wish to stay in authentic Maharaja heritage palaces, witness sunrise at the Taj Mahal, or embark on a tiger safari in Ranthambore, our local team crafts your perfect private itinerary.
            </p>
            <div className="space-y-3.5 pt-2 text-xs text-slate-700 font-medium">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Detailed itinerary and transparent quote within 30 minutes with guaranteed all-inclusive rates.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Personalized vehicle selection: Toyota Innova Crysta SUV or Executive Sedan.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zero advance fee for initial consultation: total transparency and peace of mind.</span>
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-white border border-amber-200/80 shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  24h
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Dedicated WhatsApp Concierge</span>
                  <span className="text-slate-500 text-[11px]">+91 9990648881 (Instant response)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <InquiryForm defaultTourTitle="Custom Bespoke India Tour" />
          </div>
        </div>
      </section>

      {/* Destinations Grid (Explore Rajasthan) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-600 block mb-1">
              Rajasthan Travel Guides &amp; Iconic Cities
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
              Explore the Wonders of North India
            </h2>
            <p className="text-sm text-slate-600">
              Each city in Rajasthan holds a unique cultural and historical identity: discover our recommended visit durations, top monuments, and scenic driving routes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((dest) => (
              <Link
                key={dest.slug}
                href={`/${dest.slug}`}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                    {dest.recommendedDuration}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                    {dest.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section - Luxury Ivory & Warm Champagne Aesthetic */}
      <section className="py-20 bg-gradient-to-b from-amber-50/40 via-white to-slate-50 border-y border-amber-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-600 block mb-1">
              Our Private Owned Fleet
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
              Modern, Sanitized &amp; Comfortable Vehicles for Every Journey
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              All our vehicles feature high-output air conditioning, commercial tourist permits across all Indian states, and experienced chauffeurs with years of driving expertise on Rajasthan roads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEET.map((vehicle) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Blogs & Cost Guides Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-600 block mb-1">
                Travel Guides &amp; Local Tips
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
                Everything You Need to Know About Traveling in India
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2">
                      <span>{blog.datePublished}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-base font-serif font-bold text-slate-900 hover:text-amber-600 transition-colors mb-2 leading-snug">
                      <Link href={`/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/${blog.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    <span>Read full guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final WhatsApp Callout */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-emerald-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            Free Custom Quotes in 30 Minutes
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Have Your Own Itinerary in Mind or Need Local Advice?
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
            Message us directly on WhatsApp with your flight dates, desired cities to visit, and group size. We will respond promptly with a personalized, all-inclusive proposal.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-emerald-900 font-bold text-sm shadow-xl hover:bg-emerald-50 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>Contact Us on WhatsApp (+91 9990648881)</span>
            </a>

            <a
              href="mailto:autistaprivatoindia@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-700/60 hover:bg-emerald-700 text-white font-semibold text-sm border border-emerald-400/30 transition-all"
            >
              <span>Send an Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
