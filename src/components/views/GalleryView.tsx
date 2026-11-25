"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  GalleryItem,
} from "@/data/gallery";
import {
  Camera,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Compass,
  ArrowRight,
  ZoomIn,
} from "lucide-react";

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Filter items based on active category
  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const selectedItem: GalleryItem | null =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") {
        setSelectedItemIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedItemIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : null
        );
      }
    },
    [selectedItemIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItemIndex]);

  const getWhatsAppUrl = (item: GalleryItem) => {
    const text = `Hello Autista Privato India, I saw your photo of "${item.title}" in ${item.location} on your website photo gallery. I would like information and a private chauffeur quote to visit this destination.`;
    return `https://wa.me/919990648881?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-amber-500/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-6 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Curated Photographic Showcase</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-tight mb-6">
            Moments Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Incredible India</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8">
            Explore authentic sights, UNESCO monuments, desert dunes, and regal palace stays experienced by international travelers in the trusted care of our private English-speaking chauffeurs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Chauffeur-Piloted Circuits
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Tailor-Made Route Freedom
            </span>
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-sky-400" />
              Rajasthan &amp; Golden Triangle Specialists
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-4 no-scrollbar">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
            {GALLERY_CATEGORIES.map((cat) => {
              const count = cat.id === "all"
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedItemIndex(null);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-slate-900 text-amber-400 shadow-md"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-amber-400/20 text-amber-300"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(idx)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Enlarge Hint Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <ZoomIn className="w-4 h-4 text-amber-400" />
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-xs text-xs font-medium text-amber-300 border border-slate-700/60 shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-amber-600 font-semibold group-hover:underline flex items-center gap-1">
                    <span>View Destination</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                    {item.category.replace("-", " ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950 text-white border border-amber-500/30 shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4 max-w-2xl mx-auto">
            Ready to Experience These Sights with Your Private Chauffeur?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Every itinerary is 100% custom-tailored to your timing, group size, and favorite destinations with fixed transparent chauffeur pricing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919990648881?text=Hello,%20I%20would%20like%20to%20plan%20a%20private%20chauffeur%20tour%20in%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Inquire via WhatsApp</span>
            </a>
            <Link
              href="/tour-packages"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
            >
              <span>Explore All Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-hidden"
          onClick={() => setSelectedItemIndex(null)}
        >
          {/* Top Bar with Counter & Close */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-none">
            <span className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-xs text-amber-300 pointer-events-auto">
              Photo {(selectedItemIndex ?? 0) + 1} of {filteredItems.length}
            </span>
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer pointer-events-auto shadow-lg hover:scale-105"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItemIndex((prev) =>
                prev !== null
                  ? (prev - 1 + filteredItems.length) % filteredItems.length
                  : null
              );
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center transition-all cursor-pointer z-20 shadow-xl hover:scale-110"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItemIndex((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : null
              );
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center transition-all cursor-pointer z-20 shadow-xl hover:scale-110"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col z-10 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-16/10 sm:aspect-16/9 w-full bg-black overflow-hidden flex items-center justify-center">
              <Image
                src={selectedItem.image}
                alt={selectedItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Description & Action Bar */}
            <div className="p-6 sm:p-8 bg-slate-900 text-white border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{selectedItem.location}</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-serif font-bold text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {selectedItem.description}
                </p>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl(selectedItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Inquire This Destination</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
