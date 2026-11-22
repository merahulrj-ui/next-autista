"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Shield, Star, Car } from "lucide-react";
import CurrencySwitcher from "@/components/CurrencySwitcher";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/919990648881?text=Hello,%20I%20would%20like%20more%20information%20about%20your%20private%20driver%20tours%20in%20India.";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Top Utility Bar - Deep Royal Midnight Navy & Warm Gold Accents */}
      <div className="bg-[#0b1329] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-amber-500/20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-amber-200">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Dedicated Chauffeur Service in India
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300 font-normal">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              100% Certified Drivers &amp; Guaranteed Fixed Rates
            </span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-4">
            <CurrencySwitcher />
            <a
              href="tel:+919990648881"
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 9990648881</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-600/20 border border-amber-300/40 group-hover:scale-105 transition-transform">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight block leading-tight">
              Private Driver <span className="text-amber-600 italic">India</span>
            </span>
            <span className="text-[10px] font-sans font-semibold text-slate-400 uppercase tracking-widest block">
              Exclusive Tours &middot; Rajasthan &amp; Golden Triangle
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <Link
            href="/tour-packages"
            className="hover:text-amber-600 transition-colors"
          >
            All Tours
          </Link>
          <Link
            href="/golden-triangle-tour-package"
            className="hover:text-amber-600 transition-colors"
          >
            Golden Triangle
          </Link>
          <Link
            href="/rajasthan-tour-package"
            className="hover:text-amber-600 transition-colors"
          >
            Rajasthan
          </Link>
          <Link
            href="/india-intercity-car-transfer-private-driver"
            className="hover:text-amber-600 transition-colors"
          >
            Car Transfers
          </Link>
          <Link
            href="/toyota-innova-crysta-rental-india-private-driver"
            className="hover:text-amber-600 transition-colors"
          >
            Fleet
          </Link>
          <Link
            href="/hiring-private-driver-in-india-cost-guide"
            className="hover:text-amber-600 transition-colors"
          >
            Cost Guide
          </Link>
          <Link
            href="/contact"
            className="hover:text-amber-600 transition-colors"
          >
            Contacts
          </Link>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-500 hover:to-teal-700 text-white font-semibold text-xs shadow-md shadow-emerald-900/15 hover:scale-[1.02] transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-200" />
            <span>WhatsApp Quote</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              Home
            </Link>
            <Link
              href="/tour-packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              All Tours (23 Itineraries)
            </Link>
            <Link
              href="/golden-triangle-tour-package"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              Classic Golden Triangle Tour
            </Link>
            <Link
              href="/rajasthan-tour-package"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              Rajasthan Grand Tour (14 Days)
            </Link>
            <Link
              href="/india-intercity-car-transfer-private-driver"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              Intercity Car Transfers
            </Link>
            <Link
              href="/toyota-innova-crysta-rental-india-private-driver"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              Our Vehicle Fleet
            </Link>
            <Link
              href="/hiring-private-driver-in-india-cost-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              Driver Cost Guide (2026)
            </Link>
            <Link
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600"
            >
              Contact Us
            </Link>
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-medium text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp (24/7 Support)</span>
            </a>
            <a
              href="tel:+919990648881"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Direct: +91 9990648881</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
