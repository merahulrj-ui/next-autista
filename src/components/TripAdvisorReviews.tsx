"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle, ExternalLink, Quote, Shield } from "lucide-react";

export const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g304551-d28509247-Reviews-Golden_Triangle_Tour_With_Ranthambore_Autista_Privato_India-New_Delhi_National_C.html";

interface ReviewItem {
  name: string;
  location: string;
  countryFlag: string;
  tour: string;
  language: string;
  quote: string;
  date: string;
}

const REVIEWS: ReviewItem[] = [
  {
    name: "Marco & Elena",
    location: "Milan, Italy",
    countryFlag: "🇮🇹",
    tour: "14-Day Rajasthan Royal Heritage Tour",
    language: "Italian",
    quote:
      "Un'esperienza indimenticabile attraverso il Rajasthan! Il nostro autista è stato eccezionale: puntualissimo, guida sempre sicura e prudente nel traffico indiano, e Toyota Innova pulitissima ogni giorno. Cosa fondamentale: nessun tentativo di portarci nei soliti negozi per turisti per prendere commissioni. Concierge WhatsApp sempre presente. Consigliatissimo a tutti i viaggiatori italiani!",
    date: "Verified Review",
  },
  {
    name: "David & Sarah Jenkins",
    location: "London, United Kingdom",
    countryFlag: "🇬🇧",
    tour: "Golden Triangle & Ranthambore Safari",
    language: "English",
    quote:
      "First time visiting India and having a private chauffeur made all the difference. Spotless air-conditioned vehicle, chilled bottled water daily, and seamless airport meet-and-greet in Delhi. Our driver was polite, respectful, and navigated the Agra and Jaipur highways effortlessly. Transparent quote with zero surprise fees.",
    date: "Verified Review",
  },
  {
    name: "Sophie Dubois",
    location: "Paris, France",
    countryFlag: "🇫🇷",
    tour: "Delhi, Agra, Jaipur & Varanasi Circuit",
    language: "French",
    quote:
      "Voyage magique en toute sérénité ! En tant que voyageuse solo, la sécurité était ma priorité absolue. Mon chauffeur a été un véritable ange gardien, toujours ponctuel, courtois et respectueux. La coordination WhatsApp 24/7 m'a donné une tranquillité d'esprit totale. Une agence remarquable et honnête.",
    date: "Verified Review",
  },
  {
    name: "Larry Thompson & Family",
    location: "California, USA",
    countryFlag: "🇺🇸",
    tour: "10-Day Rajasthan Forts & Palaces Tour",
    language: "English",
    quote:
      "Outstanding chauffeur service from arrival to departure. Traveling with teenagers can be challenging, but our driver made long overland legs relaxing and enjoyable with great hygienic rest stops and photo viewpoints. 100% transparent pricing and unmatched professionalism.",
    date: "Verified Review",
  },
];

export default function TripAdvisorReviews() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-[#0b1329] to-slate-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00aa6c]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
            <Image
              src="/images/tripad.png"
              alt="TripAdvisor Logo"
              width={26}
              height={26}
              className="w-6 h-6 object-contain"
            />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full bg-[#00aa6c] inline-block"
                ></span>
              ))}
            </div>
            <span className="text-xs font-bold text-white tracking-wide">
              5.0 / 5.0 TripAdvisor Rating
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            What Our International Guests Say
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Real, unfiltered traveler feedback from visitors across Europe, North America, and Australia who trusted our vetted chauffeurs across India.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-slate-800/70 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-slate-700/80 hover:border-[#00aa6c]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-4">
                {/* Header Rating & Flag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#00aa6c]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="w-2.5 h-2.5 rounded-full bg-[#00aa6c] inline-block"
                      ></span>
                    ))}
                  </div>
                  <span
                    className="text-lg"
                    title={review.location}
                  >
                    {review.countryFlag}
                  </span>
                </div>

                {/* Tour Badge */}
                <span className="inline-block text-[11px] font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  {review.tour}
                </span>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-slate-600/40 absolute -top-2 -left-1 -z-0" />
                  <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed italic relative z-10 font-normal">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author & Verification */}
              <div className="pt-5 mt-5 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">{review.location}</p>
                </div>
                <div className="flex items-center gap-1 text-[#00aa6c] text-[10px] font-semibold bg-[#00aa6c]/10 px-2 py-0.5 rounded-full border border-[#00aa6c]/20">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to View TripAdvisor Listing */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Read all reviews on TripAdvisor"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#00aa6c] hover:bg-[#00925d] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#00aa6c]/30 transition-all cursor-pointer"
          >
            <Image
              src="/images/tripad.png"
              alt="TripAdvisor"
              width={20}
              height={20}
              className="w-5 h-5 object-contain brightness-0 invert"
            />
            <span>Read All Reviews on TripAdvisor</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>100% Genuine, Independent Guest Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
