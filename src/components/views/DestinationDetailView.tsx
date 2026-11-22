import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  Star,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Destination } from "@/data/destinations";
import { TOURS } from "@/data/tours";
import TourCard from "@/components/TourCard";
import InquiryForm from "@/components/InquiryForm";

interface DestinationDetailViewProps {
  destination: Destination;
}

export default function DestinationDetailView({ destination }: DestinationDetailViewProps) {
  // Find tours that include this destination in their route
  const relatedTours = TOURS.filter((t) =>
    t.route.some((r) => r.toLowerCase().includes(destination.name.toLowerCase()))
  ).slice(0, 3);

  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    alternateName: `${destination.name}, Rajasthan`,
    description: destination.description,
    image: `https://autistaprivatoindia.it${destination.image}`,
    touristType: ["Cultural Explorer", "Heritage Enthusiast"],
    includesAttraction: destination.topAttractions.map((a) => ({
      "@type": "TouristAttraction",
      name: a.name,
      description: a.desc,
    })),
  };

  return (
    <div>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }}
      />

      {/* Hero Banner - Vibrant Sunlit Landmark with Royal Vignette */}
      <section className="relative bg-slate-900 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={destination.image}
            alt={destination.name}
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
            <span className="text-slate-400">Rajasthan Guides</span>
            <span>/</span>
            <span className="text-amber-300 font-semibold">{destination.name}</span>
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider mb-4">
            Travel Guide with Private Chauffeur
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white max-w-4xl leading-tight mb-4">
            {destination.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-light mb-8">
            {destination.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-2xl text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Best Time to Visit: <strong>{destination.bestTimeToVisit}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Recommended Duration: <strong>{destination.recommendedDuration}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left 8 Cols */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                Discovering {destination.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {destination.description}
              </p>
            </div>

            {/* Top Attractions */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                Must-See Attractions in {destination.name}
              </h2>
              <div className="space-y-4">
                {destination.topAttractions.map((att, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-500/40 transition-colors flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 mb-1">{att.name}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{att.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Car Rental & Private Driver Tips */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Car className="w-6 h-6 text-amber-600" />
                <span>Getting Around {destination.name} with a Private Driver</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {destination.carRentalTips}
              </p>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/70 text-xs text-emerald-900 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Our Local Advantage:</strong> Our professional chauffeurs know the exact official monument parking gates, saving you long walks in the heat and protecting you from touts and unaccredited guides.
                </div>
              </div>
            </div>

            {/* Related Tours Passing Through */}
            {relatedTours.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif font-bold text-slate-900">
                    Recommended Tours Including {destination.name}
                  </h2>
                  <Link
                    href="/tour-packages"
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    <span>All Tours</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedTours.map((t) => (
                    <TourCard key={t.slug} tour={t} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right 4 Cols: Inquiry Sticky */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <InquiryForm defaultTourTitle={`Tour with stop in ${destination.name}`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
