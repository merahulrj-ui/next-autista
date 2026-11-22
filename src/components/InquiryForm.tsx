"use client";

import React, { useState } from "react";
import { MessageCircle, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { TOURS } from "@/data/tours";

interface InquiryFormProps {
  defaultTourTitle?: string;
}

export default function InquiryForm({ defaultTourTitle }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [tour, setTour] = useState(defaultTourTitle || TOURS[0].title);
  const [dates, setDates] = useState("");
  const [passengers, setPassengers] = useState("2 Persons");
  const [notes, setNotes] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*PRIVATE DRIVER INDIA - TOUR INQUIRY*%0A%0A*Name:* ${name}%0A*WhatsApp / Phone:* ${phone}%0A*Email:* ${email}%0A*Selected Tour:* ${tour}%0A*Travel Dates:* ${dates}%0A*Passengers:* ${passengers}%0A*Special Requests:* ${notes || "None"}`;
    const url = `https://wa.me/919990648881?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl">
      <div className="mb-6">
        <span className="text-xs uppercase font-bold tracking-wider text-amber-600 block mb-1">
          Free No-Obligation Inquiry
        </span>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
          Customize Your Tour with Private Chauffeur
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          We respond within 30 minutes with a transparent, all-inclusive quote.
        </p>
      </div>

      <form onSubmit={handleWhatsAppSubmit} className="space-y-4 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Smith"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Mobile / WhatsApp *</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +1 (555) 234-5678 / +44 7911 123456"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-slate-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Passengers</label>
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-slate-900 bg-white"
            >
              <option value="1 Person">1 Person (Sedan)</option>
              <option value="2 Persons">2 Persons (Sedan)</option>
              <option value="3 Persons">3 Persons (Sedan or Innova)</option>
              <option value="4-5 Persons">4 - 5 Persons (Toyota Innova Crysta)</option>
              <option value="6-10 Persons">6 - 10 Persons (Tempo Traveller Minivan)</option>
              <option value="10+ Persons">10+ Persons (Luxury Minibus)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tour or Desired Route</label>
            <select
              value={tour}
              onChange={(e) => setTour(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-slate-900 bg-white"
            >
              {TOURS.map((t) => (
                <option key={t.slug} value={t.title}>
                  {t.title} ({t.duration})
                </option>
              ))}
              <option value="100% Custom Tailor-Made Itinerary">100% Custom Tailor-Made Itinerary</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Approximate Travel Dates</label>
            <input
              type="text"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              placeholder="e.g. Nov 10 - Nov 24, 2026"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-slate-900"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">Special Requests or Preferred Cities</label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Mention any specific destinations, hotel preferences, or special requests..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-slate-900"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 cursor-pointer"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Get Instant WhatsApp Quote</span>
        </button>

        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            No Obligation
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
            100% Privacy Protected
          </span>
        </div>
      </form>
    </div>
  );
}
