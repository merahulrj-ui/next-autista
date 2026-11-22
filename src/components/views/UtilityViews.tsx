import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, HeartHandshake, Clock, MessageCircle, Star } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

export function AboutUsView() {
  const whatsappUrl =
    "https://wa.me/919990648881?text=Hello,%20I%20would%20like%20more%20information%20about%20your%20company%20and%20chauffeur%20services.";

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us - Private Driver India",
    description:
      "Leading chauffeured car rental and tailor-made tour agency across Rajasthan and the Golden Triangle for international travelers.",
    mainEntity: {
      "@type": "TravelAgency",
      name: "Private Driver India",
      telephone: "+919990648881",
      email: "autistaprivatoindia@gmail.com",
      url: "https://autistaprivatoindia.it/about-us.html",
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">About Us</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Experience &amp; Professionalism
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              About Us: Private Driver India
            </h1>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              <strong>Private Driver India</strong> was established with a singular mission: to provide international travelers with an authentic, safe, and deeply relaxing way to explore the wonders of the Indian subcontinent, eliminating unnecessary middlemen, stressful haggling, and unpleasant surprises.
            </p>
            <p>
              Our operational headquarters is based in New Delhi, with dedicated 24/7 guest support. We exclusively employ <strong>vetted, licensed professional chauffeurs</strong> registered with the Ministry of Tourism, holding commercial passenger transport permits and possessing deep geographic expertise in Rajasthan, Uttar Pradesh, Punjab, and North India.
            </p>

            <h3 className="text-xl font-serif font-bold text-slate-900 pt-4">Our Core Values</h3>
            <ul className="space-y-3 pl-4">
              <li>
                <strong>Zero Commission Shopping Traps:</strong> Our chauffeurs have strict instructions never to divert guests to high-pressure souvenir emporiums or commercial tourist stores. Your holiday time and freedom are sacred.
              </li>
              <li>
                <strong>Total Price Transparency:</strong> Every quote we issue includes fuel, highway tolls, state border transit permits, and driver lodging. You never pay unexpected surcharges along the road.
              </li>
              <li>
                <strong>24/7 Dedicated Concierge Support:</strong> Before departure and throughout your trip, our English-speaking coordination team is available on WhatsApp to answer questions, accommodate schedule adjustments, and ensure complete peace of mind.
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact via WhatsApp (+91 9990648881)</span>
            </a>
            <Link
              href="/tour-packages"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all"
            >
              <span>Explore All Tours</span>
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
