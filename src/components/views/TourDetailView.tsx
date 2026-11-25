"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Star,
  MapPin,
  CheckCircle2,
  XCircle,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  Calendar,
  Car,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Tour } from "@/data/tours";
import { getRouteVisualHighlights, getLandmarkForCity } from "@/data/landmarks";
import InquiryForm from "@/components/InquiryForm";

interface TourDetailViewProps {
  tour: Tour;
}

export default function TourDetailView({ tour }: TourDetailViewProps) {
  const whatsappUrl = `https://wa.me/919990648881?text=Hello,%20I%20would%20like%20information%20and%20a%20quote%20for%20the%20tour:%20${encodeURIComponent(
    tour.title
  )}%20(${tour.duration})`;

  const routeVisualHighlights = getRouteVisualHighlights(tour.route);

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": ["TouristTrip", "Product"],
    name: tour.title,
    description: tour.overview,
    image: `https://autistaprivatoindia.it${tour.image}`,
    touristType: ["Family", "Couple", "Solo Traveler", "Cultural Explorer"],
    itinerary: {
      "@type": "ItemList",
      numberOfItems: tour.itinerary.length,
      itemListElement: tour.itinerary.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristAttraction",
          name: item.title,
          description: item.description,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      price: tour.priceEUR,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
      url: `https://autistaprivatoindia.it/${tour.legacyUrl}`,
      priceValidUntil: "2027-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating.toString(),
      reviewCount: tour.reviewsCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tour.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner - Radiant Landmark Photography with Royal Vignette */}
      <section className="relative bg-slate-900 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="object-cover opacity-85 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <nav className="text-xs text-slate-400 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <Link href="/tour-packages" className="hover:text-amber-400">Tours</Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold truncate">{tour.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
              {tour.duration}
            </span>
            <span className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{tour.rating.toFixed(2)}</span>
              <span className="text-slate-400 font-normal">({tour.reviewsCount} reviews)</span>
            </span>
            <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold">
              All-Inclusive Rate per Private Vehicle
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white max-w-4xl leading-tight mb-4">
            {tour.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-light mb-8">
            {tour.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-3xl">
            <div>
              <span className="text-[11px] text-slate-400 uppercase block font-semibold">
                Private Vehicle &amp; Dedicated Chauffeur
              </span>
              <span className="text-2xl font-serif font-extrabold text-amber-400">
                Custom Tailor-Made Itinerary
              </span>
              <span className="text-xs text-slate-300 ml-2 block sm:inline">(All fuel, tolls, permits &amp; chauffeur stay included)</span>
            </div>

            <div className="h-8 w-px bg-white/20 hidden sm:block" />

            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left 8 Columns: Details, Highlights, Itinerary, Inclusions */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                Tour Overview
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {tour.overview}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Trip Route:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-800">
                  {tour.route.map((city, idx) => (
                    <React.Fragment key={idx}>
                      <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                        {city}
                      </span>
                      {idx < tour.route.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                Day by Day Itinerary
              </h2>
              <p className="text-xs text-slate-500 mb-8">
                All timings, routes, and stops are completely flexible based on your personal preferences.
              </p>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                {tour.itinerary.map((day, idx) => {
                  const dayLandmark = getLandmarkForCity(day.title);
                  return (
                    <div key={`${day.day}-${idx}`} className="relative pl-10">
                      <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center border-2 border-white shadow-sm">
                        {day.day}
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-500/40 transition-colors flex flex-col sm:flex-row gap-4 items-start justify-between">
                        <div className="flex-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                            Day {day.day}
                          </span>
                          <h3 className="text-base font-serif font-bold text-slate-900 mb-2">
                            {day.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {day.description}
                          </p>
                        </div>
                        {dayLandmark && (
                          <div className="relative w-full sm:w-28 aspect-16/10 sm:aspect-square rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-2xs group/thumb">
                            <Image
                              src={dayLandmark.image}
                              alt={dayLandmark.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 112px"
                              className="object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                            <span className="absolute bottom-1.5 left-2 right-2 text-[10px] font-bold text-amber-300 truncate">
                              {dayLandmark.city}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Route Visual Highlights & Landmarks */}
            {routeVisualHighlights.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                      Route Landmarks &amp; Visual Sights
                    </h2>
                    <p className="text-xs text-slate-500">
                      Iconic destinations and private chauffeur experiences on this circuit.
                    </p>
                  </div>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    <span>View All Travel Photos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {routeVisualHighlights.map((vh, i) => (
                    <div
                      key={i}
                      className="group relative rounded-2xl overflow-hidden border border-slate-200/80 aspect-4/3 bg-slate-900 shadow-2xs"
                    >
                      <Image
                        src={vh.image}
                        alt={vh.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block truncate">
                          {vh.city}
                        </span>
                        <span className="text-xs font-serif font-semibold text-white block truncate">
                          {vh.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                What&apos;s Included &amp; Excluded
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-2 mb-4 pb-2 border-b border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Included in the Rate</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {tour.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-rose-700 flex items-center gap-2 mb-4 pb-2 border-b border-rose-100">
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Not Included</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {tour.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQs */}
            {tour.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-amber-500" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-4">
                  {tour.faqs.map((f, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <h3 className="font-bold text-sm text-slate-900 mb-1.5">{f.q}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right 4 Columns: Sticky Booking Form */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <InquiryForm defaultTourTitle={tour.title} />

              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800">
                <h4 className="font-serif font-bold text-base mb-2 text-white">
                  Why Travel With Us?
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Government-certified licensed commercial chauffeurs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Direct booking with fleet owners: zero middlemen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>24/7 dedicated guest concierge support on WhatsApp</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
