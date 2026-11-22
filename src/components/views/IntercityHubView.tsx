"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Car,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { INTERCITY_ROUTES } from "@/data/intercity";
import InquiryForm from "@/components/InquiryForm";
import { useCurrency } from "@/context/CurrencyContext";

export default function IntercityHubView() {
  const { currency, formatPrice } = useCurrency();
  const whatsappUrl =
    "https://wa.me/919990648881?text=Hello,%20I%20would%20like%20to%20book%20an%20intercity%20private%20car%20transfer.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Private Intercity Car Transfers with Chauffeur in India",
    description:
      "Point-to-point private transfers between Delhi, Agra, Jaipur, Jodhpur, and Udaipur in modern air-conditioned cars with licensed chauffeurs.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "25",
      highPrice: "165",
      offerCount: INTERCITY_ROUTES.length.toString(),
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Banner - Vibrant Fleet Showcase with Royal Vignette */}
      <section className="relative bg-slate-900 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fleet/innova-crysta.jpg"
            alt="Private car transfer with chauffeur in India"
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
            <span className="text-amber-300 font-semibold">Intercity Car Transfers</span>
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider mb-4">
            Fixed Guaranteed Rates Without Surprises
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white max-w-4xl leading-tight mb-4">
            Private Intercity Car Transfers Across India with Chauffeur
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-light mb-8">
            Avoid crowded transit and train delays. Travel in total comfort, privacy, and safety from hotel to hotel between Delhi, Agra, Jaipur, Jodhpur, and Udaipur in modern air-conditioned cars with vetted professional drivers.
          </p>

          <div className="flex flex-wrap items-center gap-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-2xl text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Tolls, Parking &amp; State Taxes 100% Included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Monumental sightseeing stops en route at no extra charge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-600 block mb-1">
              Most Requested Routes
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Popular Intercity Chauffeur Transfers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INTERCITY_ROUTES.map((route) => {
              const routeWhatsappUrl = `https://wa.me/919990648881?text=Hello,%20I%20would%20like%20to%20book%20the%20intercity%20transfer:%20${encodeURIComponent(
                route.title
              )}`;

              return (
                <div
                  key={route.slug}
                  className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                        {route.distanceKm} km • {route.durationHours}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        All-Inclusive
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-slate-900 mb-2 leading-snug">
                      {route.title}
                    </h3>

                    <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                      {route.description}
                    </p>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 mb-4 space-y-1">
                      <div className="font-semibold text-slate-800">Recommended stops en-route:</div>
                      {route.sightseeingEnRoute.map((s, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing table */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] text-slate-500 block">Sedan</span>
                        <span key={currency} className="font-bold text-slate-900 text-sm notranslate" translate="no">{formatPrice(route.priceSedanEUR)}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-amber-50 border border-amber-200">
                        <span className="text-[10px] text-amber-700 block font-semibold">Innova SUV</span>
                        <span key={currency} className="font-bold text-amber-900 text-sm notranslate" translate="no">{formatPrice(route.priceSuvEUR)}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] text-slate-500 block">Minivan</span>
                        <span key={currency} className="font-bold text-slate-900 text-sm notranslate" translate="no">{formatPrice(route.priceVanEUR)}</span>
                      </div>
                    </div>

                    <a
                      href={routeWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book Transfer on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
