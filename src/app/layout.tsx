import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export const metadata: Metadata = {
  metadataBase: new URL("https://autistaprivatoindia.it"),
  title: {
    default: "Private Driver India | Hire Car with Chauffeur for Rajasthan & Golden Triangle Tours",
    template: "%s | Autista Privato India",
  },
  description:
    "Hire a licensed English-speaking private driver in India. Certified chauffeured car rental for Rajasthan, Golden Triangle, Agra, Varanasi, and Himalayas with 100% transparent pricing & 24/7 WhatsApp concierge.",
  keywords: [
    "private driver india",
    "hire driver in india",
    "car rental with driver india",
    "rajasthan tour with private driver",
    "hire car and driver rajasthan",
    "golden triangle tour with private driver",
    "private driver india cost",
    "innova crysta rental with driver india",
    "chauffeur service north india",
    "delhi agra jaipur private car driver"
  ],
  authors: [{ name: "Autista Privato India" }],
  creator: "Autista Privato India",
  publisher: "Autista Privato India",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autistaprivatoindia.it",
    siteName: "Autista Privato India",
    title: "Private Driver India | Hire Car with Chauffeur for Rajasthan & Golden Triangle Tours",
    description:
      "Explore North India in complete comfort with a private air-conditioned vehicle and vetted English-speaking chauffeur. Custom tours in Rajasthan and the Golden Triangle.",
    images: [
      {
        url: "/images/brand-logo.jpg",
        width: 800,
        height: 800,
        alt: "Autista Privato India - Private Driver in India",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const agencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Autista Privato India",
  alternateName: "Private Driver India",
  url: "https://autistaprivatoindia.it",
  logo: "https://autistaprivatoindia.it/images/brand-logo.jpg",
  image: "https://autistaprivatoindia.it/images/brand-logo.jpg",
  description:
    "Premier private chauffeur and car rental service in India for international travelers. Certified English-speaking drivers for Rajasthan, Golden Triangle, Agra, Varanasi, and North India tours.",
  telephone: "+919990648881",
  priceRange: "$$",
  currenciesAccepted: "EUR, USD, GBP, INR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer, PayPal",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Connaught Place",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6315",
    longitude: "77.2167",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.96",
    reviewCount: "348",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Rajasthan" },
    { "@type": "AdministrativeArea", name: "Delhi" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    { "@type": "AdministrativeArea", name: "Himachal Pradesh" },
    { "@type": "AdministrativeArea", name: "Uttarakhand" },
  ],
  sameAs: [
    "https://www.tripadvisor.com/Attraction_Review-g304551-d28509247-Reviews-Golden_Triangle_Tour_With_Ranthambore_Autista_Privato_India-New_Delhi_National_C.html",
    "https://www.facebook.com/profile.php?id=61562343674477",
    "https://www.instagram.com/autistaprivatoindia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (document.cookie.indexOf('googtrans') !== -1) {
                  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname + ';';
                  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname + ';';
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
