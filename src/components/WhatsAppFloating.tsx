"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  const whatsappUrl =
    "https://wa.me/919990648881?text=Hello,%20I%20would%20like%20more%20information%20about%20your%20private%20driver%20tours%20in%20India.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="24/7 WhatsApp Chauffeur Concierge"
        className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-300 border-2 border-white"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold tracking-wider text-emerald-100 leading-none">
            Online 24/7
          </p>
          <p className="text-sm font-bold leading-tight">WhatsApp</p>
        </div>
      </a>
    </div>
  );
}
