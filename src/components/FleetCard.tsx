"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Car } from "lucide-react";
import { Vehicle } from "@/data/fleet";
import { useCurrency } from "@/context/CurrencyContext";

export default function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  const { currency, formatPrice } = useCurrency();

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <span className="text-[11px] uppercase font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 tracking-wider inline-block">
          {vehicle.category}
        </span>
        <h3 className="text-xl font-serif font-bold text-slate-900 mt-2 mb-2">
          {vehicle.name}
        </h3>
        <p className="text-xs text-slate-600 mb-4 leading-relaxed">{vehicle.tagline}</p>

        <div className="space-y-2 py-4 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-600" />
            <span>Up to {vehicle.capacityPassengers} passengers</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-amber-600" />
            <span>Luggage capacity: {vehicle.capacityLuggage}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-slate-400 block uppercase font-semibold">Average Daily Fare</span>
          <div className="flex items-baseline gap-1 text-2xl font-serif font-bold text-slate-900">
            <span className="text-sm font-sans font-medium text-slate-500">from</span>
            <span key={currency} className="notranslate" translate="no">
              {formatPrice(vehicle.dayRateEUR)}
            </span>
            <span className="text-xs font-normal text-slate-500">/ day</span>
          </div>
        </div>
        <Link
          href="/toyota-innova-crysta-rental-india-private-driver"
          className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white text-xs font-semibold shadow-sm transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
