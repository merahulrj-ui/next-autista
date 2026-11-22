"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Star, MapPin, MessageCircle, ChevronRight, Check } from "lucide-react";
import { Tour } from "@/data/tours";
import { useCurrency } from "@/context/CurrencyContext";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const { currency, formatPrice } = useCurrency();
  const whatsappBookingUrl = `https://wa.me/919990648881?text=Hello,%20I%20would%20like%20information%20and%20a%20quote%20for%20the%20tour:%20${encodeURIComponent(
    tour.title
  )}%20(${tour.duration})`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Tour Image with Badges */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        {/* Duration badge */}
        <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>{tour.duration}</span>
        </div>

        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{tour.rating.toFixed(2)}</span>
          <span className="text-[10px] text-slate-500 font-normal">({tour.reviewsCount})</span>
        </div>

        {/* Route on Image bottom */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <p className="text-[11px] font-medium text-amber-300 flex items-center gap-1 truncate">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{tour.routeString}</span>
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug mb-2">
            <Link href={`/${tour.slug}`}>{tour.title}</Link>
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
            {tour.overview}
          </p>

          {/* Highlights checklist */}
          <div className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
            {tour.highlights.slice(0, 2).map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                Price per vehicle
              </span>
              <div className="flex items-baseline gap-1 text-2xl font-serif font-extrabold text-slate-900">
                <span className="text-sm font-sans font-medium text-slate-500">from</span>
                <span key={currency} className="notranslate" translate="no">
                  {formatPrice(tour.priceEUR)}
                </span>
              </div>
            </div>
            <span className="text-[11px] text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-md">
              All Inclusive
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/${tour.slug}`}
              className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 font-semibold text-xs transition-colors"
            >
              <span>Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm hover:shadow transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
