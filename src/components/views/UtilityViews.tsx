import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  HeartHandshake,
  Clock,
  MessageCircle,
  Star,
  Award,
  CheckCircle2,
  Users,
  Compass,
  ExternalLink,
  Zap,
  Shield,
  Car,
  Sparkles,
  Navigation,
  Globe,
  Check,
} from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

export function AboutUsView() {
  const whatsappUrl =
    "https://wa.me/919990648881?text=Hello,%20I%20would%20like%20more%20information%20about%20your%20company%20and%20chauffeur%20services.";

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us - Autista Privato India | Private Driver in India",
    description:
      "Premier chauffeured car rental and bespoke overland tour agency across Rajasthan, the Golden Triangle, and North India for international travelers. Over 12 years of road experience, licensed commercial fleet, and 100% transparent tailor-made quotes.",
    mainEntity: {
      "@type": "TravelAgency",
      name: "Autista Privato India (Private Driver India)",
      telephone: "+919990648881",
      email: "autistaprivatoindia@gmail.com",
      url: "https://autistaprivatoindia.it/about-us",
      founder: {
        "@type": "Person",
        name: "Rahul Kumar",
        jobTitle: "Founder & Head Concierge",
      },
      areaServed: [
        "Rajasthan",
        "Delhi",
        "Agra",
        "Varanasi",
        "Jaipur",
        "Udaipur",
        "Jodhpur",
        "Pushkar",
        "Amritsar",
        "North India",
      ],
      knowsAbout: [
        "Private Chauffeur Services in India",
        "Rajasthan Overland Tour Packages",
        "Golden Triangle Tours with Private Driver",
        "Luxury Car Rental with Driver in India",
      ],
      publishingPrinciples: "https://autistaprivatoindia.it/cancellation-policy",
      sameAs: [
        "https://www.tripadvisor.com/Attraction_Review-g304551-d28509247-Reviews-Golden_Triangle_Tour_With_Ranthambore_Autista_Privato_India-New_Delhi_National_C.html",
        "https://www.facebook.com/profile.php?id=61562343674477",
        "https://www.instagram.com/autistaprivatoindia",
      ],
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-[#0b1329] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden border border-amber-500/20 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Premier Chauffeured Travel in India · Established 2014
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              About Us: Autista Privato India
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Over a decade of providing international travelers with safe, authentic, and tailor-made chauffeur-driven journeys across Rajasthan, the Golden Triangle, and North India.
            </p>
          </div>

          {/* Stats Metric Grid */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-slate-700/60">
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">12+</span>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Years Highway Experience</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">15,000+</span>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Happy Global Travelers</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">100%</span>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">Commercial Licensed Fleet</p>
            </div>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g304551-d28509247-Reviews-Golden_Triangle_Tour_With_Ranthambore_Autista_Privato_India-New_Delhi_National_C.html"
              target="_blank"
              rel="noopener noreferrer"
              title="View our 5.0 Star Rating on TripAdvisor"
              className="space-y-1 block group hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">5.0 / 5.0</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00aa6c] inline-block mb-1"></span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium group-hover:text-[#00aa6c] transition-colors">
                TripAdvisor Verified Reviews ↗
              </p>
            </a>
          </div>
        </div>

        {/* Section 1: Our Story (Brand Genesis) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
              Our Story &amp; Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Crafted to Liberate Travelers from Middlemen and Tourist Traps
            </h2>
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                <strong>Autista Privato India</strong> was established with a single, uncompromising purpose: to give international visitors an authentic, relaxing, and profoundly safe way to explore India without aggressive commercial shopping traps, stressful taxi cartels, or unpredictable hidden expenses.
              </p>
              <p>
                What began as a boutique private chauffeur initiative in New Delhi has grown into one of North India&apos;s most dependable travel partners, trusted by discerning visitors from Italy, the United States, the United Kingdom, France, Germany, Spain, and Australia.
              </p>
              <p>
                Grounded in the timeless Indian philosophy of <em>&ldquo;Atithi Devo Bhava&rdquo;</em> (The Guest is Equivalent to God), our service goes far beyond standard transportation. We pair every traveler with a seasoned, English-speaking professional chauffeur who acts as your protective guardian, knowledgeable local navigator, and trusted companion along India&apos;s historic routes.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-amber-50/70 border border-amber-200/80 rounded-3xl p-8 space-y-6">
            <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              The Private Driver Guarantee
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No Forced Shopping:</strong> Complete freedom of itinerary with zero visits to high-commission craft bazaars.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>All-Inclusive Quotes:</strong> Every custom quote covers fuel, highway tolls, interstate taxes, and driver lodging.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Vetted Chauffeurs:</strong> Background-checked, non-smoking, police-verified drivers with commercial permits.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>24/7 Concierge:</strong> Continuous WhatsApp trip support from pickup to departure.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Mission, Vision & Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
              Our Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Mission, Vision &amp; Core Values
            </h2>
            <p className="text-slate-600 text-sm">
              The fundamental standards that shape every mile we drive and every guest we welcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl">
                🎯
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To deliver seamless, safe, and deeply immersive private travel journeys across the Indian subcontinent by uniting top-tier modern vehicles, seasoned local chauffeurs, and 100% transparent pricing for every international traveler.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl">
                👁️‍🗨️
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be recognized globally as the gold standard in bespoke chauffeured tourism in North India—celebrated for hospitality excellence, traveler safety, ethical integrity, and zero-compromise comfort.
              </p>
            </div>
          </div>

          {/* 4 Core Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <Shield className="w-8 h-8 text-amber-600" />
              <h4 className="font-bold text-slate-900 text-base">Zero Commission Traps</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We strictly ban driver-directed commercial store stops. Your journey is dedicated solely to historical sightseeing and cultural joy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <Award className="w-8 h-8 text-amber-600" />
              <h4 className="font-bold text-slate-900 text-base">Quote Integrity</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent tailor-made quotes with zero hidden surcharges. All state border permits, tolls, parking, and fuel are locked in advance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <Clock className="w-8 h-8 text-amber-600" />
              <h4 className="font-bold text-slate-900 text-base">Unfailing Punctuality</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Live flight monitoring for international arrivals and early morning departures ensures your chauffeur is always waiting for you.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <HeartHandshake className="w-8 h-8 text-amber-600" />
              <h4 className="font-bold text-slate-900 text-base">Royal Hospitality</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Courteous, non-intrusive personal assistance with chilled mineral water, daily clean interiors, and warm concierge care.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: What We Do – Fleet & Overland Circuits */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
              Fleet &amp; Overland Services
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Modern Fleet &amp; Custom Overland Circuits
            </h2>
            <p className="text-slate-600 text-sm">
              Meticulously maintained, fully air-conditioned vehicles licensed for all-India commercial tourist travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Executive Sedans</h3>
              <p className="text-xs text-slate-500 font-medium">Maruti Suzuki Swift Dzire · Toyota Etios</p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Ideal for solo travelers and couples. Agility in historic city lanes, dual-zone AC, ample trunk capacity for 2 large suitcases, and USB charging.
              </p>
              <div className="text-xs font-semibold text-amber-700 bg-amber-50 rounded-lg py-1.5 px-3 inline-block">
                Capacity: 1 - 2 Passengers
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Luxury Crossover SUVs</h3>
              <p className="text-xs text-slate-500 font-medium">Toyota Innova Crysta · Toyota Fortuner</p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The gold standard for Indian highway travel. High ground clearance, plush captain seats, multi-zone climate control, and whisper-quiet highway ride.
              </p>
              <div className="text-xs font-semibold text-amber-700 bg-amber-50 rounded-lg py-1.5 px-3 inline-block">
                Capacity: 1 - 5 Passengers
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Executive Minivans</h3>
              <p className="text-xs text-slate-500 font-medium">Force Tempo Traveller Luxury Edition</p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Engineered for extended families and small group tours. Reclining captain seating, panoramic side windows, individual AC vents, and massive luggage bays.
              </p>
              <div className="text-xs font-semibold text-amber-700 bg-amber-50 rounded-lg py-1.5 px-3 inline-block">
                Capacity: 6 - 12 Passengers
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Who We Serve */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Tailored for Discerning Travelers
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Who We Serve Across the Globe
            </h2>
            <p className="text-slate-400 text-sm">
              Every travel journey is customized to the specific needs, pacing, and security preferences of our international guests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 space-y-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h4 className="font-bold text-white text-base">Solo Female Travelers</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Specialized safety protocols, door-to-door hotel escorts, vetted senior drivers, and dedicated 24/7 WhatsApp tracking.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 space-y-3">
              <HeartHandshake className="w-6 h-6 text-pink-400" />
              <h4 className="font-bold text-white text-base">Couples &amp; Honeymooners</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Private, relaxed overland pacing, romantic sunset viewpoints, and transfers to Rajasthan&apos;s most secluded heritage palace hotels.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 space-y-3">
              <Users className="w-6 h-6 text-amber-400" />
              <h4 className="font-bold text-white text-base">Families &amp; Seniors</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Gentle highway driving, hygienic restroom stops, spacious seating, and customized itineraries adjusted to children and elderly pacing.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 space-y-3">
              <Compass className="w-6 h-6 text-cyan-400" />
              <h4 className="font-bold text-white text-base">Culture &amp; Photographers</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Early morning sunrise arrivals at monuments, access to hidden rural artisan hamlets, and complete freedom to stop whenever inspiration strikes.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Dedicated Technology & Digital Architecture Credits (Jayanti Cybernetics) */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b1329] text-white rounded-3xl p-8 sm:p-12 border border-amber-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                Digital Architecture &amp; Platform Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Technology Partner: Engineered &amp; Maintained by Jayanti Cybernetics
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Autista Privato India&apos;s high-performance web platform, real-time fleet coordination infrastructure, dynamic tour itinerary engine, and secure international guest reservation system are custom-architected, engineered, and maintained by{" "}
                <strong className="text-white font-semibold">Jayanti Cybernetics</strong>—India&apos;s premier digital engineering and enterprise software firm.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Built on modern Next.js static architecture with enterprise-grade encryption and sub-second page delivery, this technological backbone ensures that our global travelers experience 99.99% platform availability, instant WhatsApp concierge synchronization, and seamless mobile trip planning from any timezone.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  99.99% Cloud Availability
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  End-to-End Guest Data Privacy
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Next.js High-Performance Core
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                href="https://www.jayanticybernetics.in/"
                target="_blank"
                rel="noopener noreferrer"
                title="Jayanti Cybernetics - Custom Software &amp; Digital Solutions Company in India"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-400/20 transition-all cursor-pointer"
              >
                <span>Visit Jayanti Cybernetics</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-slate-400 text-[11px] mt-2 text-left lg:text-right">
                Official Digital Transformation Partner
              </span>
            </div>
          </div>
        </div>

        {/* Section 6: Interactive CTA Consultation Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
              Start Planning Your Journey
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Ready for an Unforgettable Overland Tour in India?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Contact our dedicated guest concierge team for a 100% personalized itinerary and an all-inclusive custom quote. We reply within 30 minutes.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md hover:shadow-emerald-600/20 transition-all cursor-pointer w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 9990648881)</span>
            </a>
            <Link
              href="/tour-packages"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all w-full sm:w-auto"
            >
              <span>Explore All Tour Packages</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactView() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us - Private Driver India",
    description: "Contact Private Driver India for transparent quotes on private chauffeur car rentals in North India.",
    mainEntity: {
      "@type": "TravelAgency",
      name: "Private Driver India",
      telephone: "+919990648881",
      email: "autistaprivatoindia@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "C 8/82, 3rd Floor, East Of Kailash, Sriniwaspuri",
        addressLocality: "New Delhi",
        postalCode: "110065",
        addressCountry: "IN",
      },
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <nav className="text-xs text-slate-500 mb-3 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Contact Us</span>
          </nav>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
            We Are At Your Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mb-3">
            Contact Us for a Free Quote
          </h1>
          <p className="text-sm text-slate-600">
            Plan your tailor-made India tour with dedicated English-speaking concierge assistance. We respond within 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-xl text-slate-900">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-xs text-slate-600">
                <a
                  href="https://wa.me/919990648881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-900 block">WhatsApp 24/7 (Instant Response)</span>
                    <span className="text-emerald-700">+91 9990648881</span>
                  </div>
                </a>

                <a
                  href="tel:+919990648881"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Phone Calls</span>
                    <span className="text-slate-600">+91 9990648881</span>
                  </div>
                </a>

                <a
                  href="mailto:autistaprivatoindia@gmail.com"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Email</span>
                    <span className="text-slate-600">autistaprivatoindia@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Operations Office (New Delhi)</span>
                    <span className="text-slate-600">
                      C 8/82, 3rd Floor, East Of Kailash, Sriniwaspuri, New Delhi - 110065, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PolicyView() {
  const policySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cancellation Policy & Terms - Private Driver India",
    description: "Booking conditions, transparent guarantees, and flexible cancellation policy.",
    url: "https://autistaprivatoindia.it/cancellation-policy.html",
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(policySchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
            Cancellation Policy &amp; Booking Terms
          </h1>
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              At <strong>Private Driver India</strong>, we prioritize peace of mind and flexibility for all international travelers:
            </p>
            <h3 className="font-bold text-slate-900 text-base">1. Booking Confirmation</h3>
            <p>
              To confirm a private car and chauffeur booking, a nominal advance deposit (approx. 15–20% of the vehicle total) is requested to lock in the requested car model and certified chauffeur. The remaining balance is paid directly in India during your journey.
            </p>
            <h3 className="font-bold text-slate-900 text-base">2. Flexible Cancellation Policy</h3>
            <p>
              - For cancellations received up to <strong>7 days prior</strong> to arrival: 100% refund of the advance deposit minus standard banking transfer fees.
              <br />
              - For unforeseen flight cancellations or travel emergencies: travel dates may be rescheduled freely within 12 months with zero penalty fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GenericRegionalTourView({
  slug,
  title,
  route,
  duration,
  overview,
  highlights,
}: {
  slug: string;
  title: string;
  route: string;
  duration?: string;
  overview: string;
  highlights?: string[];
}) {
  const whatsappUrl = `https://wa.me/919990648881?text=Hello,%20I%20would%20like%20information%20and%20a%20quote%20for%20the%20itinerary:%20${encodeURIComponent(
    title
  )}`;

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": ["TouristTrip", "Product"],
    name: title,
    description: overview,
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "490",
      availability: "https://schema.org/InStock",
      url: `https://autistaprivatoindia.it/${slug}.html`,
    },
  };

  const defaultHighlights = [
    "Dedicated licensed commercial chauffeur fluent in conversational English",
    "Air-conditioned luxury vehicle (Toyota Innova Crysta or Sedan) at your exclusive disposal",
    "All expressway tolls, fuel, state border taxes, and parking fees 100% included",
    "Zero commission shopping policy: authentic travel with complete itinerary freedom",
    "24/7 direct WhatsApp concierge assistance throughout your journey in India",
  ];

  const activeHighlights = highlights && highlights.length > 0 ? highlights : defaultHighlights;

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/tour-packages" className="hover:text-amber-600 transition-colors">
            All Tours
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate">{title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main 8 Columns */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-8">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  Chauffeur-Driven Tour Package
                </span>
                {duration && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{duration}</span>
                  </span>
                )}
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>4.96/5 Guest Rating</span>
                </span>
              </div>

              {/* Title & Route */}
              <div>
                <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  {title}
                </h1>
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-slate-700 font-medium">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Planned Route:</strong> {route}
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-bold text-slate-900 border-l-4 border-amber-600 pl-3">
                  Itinerary Overview &amp; Experience
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                  {overview}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-lg font-serif font-bold text-slate-900 border-l-4 border-amber-600 pl-3">
                  Key Journey Highlights
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {activeHighlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4">
                <h4 className="font-serif font-bold text-base text-amber-400">
                  What is 100% Included in This Private Chauffeur Tour:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Private AC car with unlimited fuel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Certified licensed English-speaking chauffeur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>All highway expressway tolls (Fastag)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Interstate border entry permits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>All parking fees at monuments &amp; airports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Driver food and night lodging covered</span>
                  </div>
                </div>
              </div>

              {/* Vehicle Options */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-lg font-serif font-bold text-slate-900 border-l-4 border-amber-600 pl-3">
                  Available Vehicle Fleet for This Route
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-bold text-slate-900 block text-sm">Comfort Sedan</span>
                    <span className="text-amber-700 font-semibold block">Toyota Etios / Dzire</span>
                    <p className="text-slate-500">Ideal for 1-3 passengers with compact luggage.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-300 space-y-1.5">
                    <span className="font-bold text-slate-900 block text-sm">Executive SUV</span>
                    <span className="text-amber-700 font-semibold block">Toyota Innova Crysta</span>
                    <p className="text-slate-500">Captain seats for 3-5 passengers with large luggage.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-bold text-slate-900 block text-sm">Luxury Minivan</span>
                    <span className="text-amber-700 font-semibold block">Tempo / Force Urbania</span>
                    <p className="text-slate-500">Spacious seating for groups of 6 to 10 guests.</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-emerald-950 text-sm">
                    Prefer to plan directly over WhatsApp?
                  </h4>
                  <p className="text-xs text-emerald-700">
                    We respond within 30 minutes with an all-inclusive transparent quote.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Sticky Column (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <InquiryForm defaultTourTitle={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
