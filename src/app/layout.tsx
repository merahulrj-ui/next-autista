import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { CurrencyProvider } from "@/context/CurrencyContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://autistaprivatoindia.it"),
  title: {
    default: "Private Driver India | Luxury Car Rental with Chauffeur in Rajasthan",
    template: "%s | Private Driver India",
  },
  description:
    "Official private driver and chauffeured car rental service in India for international travelers. Custom tours in Rajasthan, Golden Triangle, Agra, Varanasi. All-inclusive rates & 24/7 dedicated assistance.",
  keywords: [
    "private driver india",
    "chauffeured car rental india",
    "rajasthan tour with private driver",
    "golden triangle tour car",
    "private driver india cost",
    "toyota innova crysta india rental",
    "reliable chauffeur north india",
    "custom india tour"
  ],
  authors: [{ name: "Private Driver India" }],
  creator: "Private Driver India",
  publisher: "Private Driver India",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autistaprivatoindia.it",
    siteName: "Private Driver India",
    title: "Private Driver India | Tailor-Made Tours & Private Chauffeur Services in India",
    description:
      "Explore North India in complete comfort and peace of mind with a private air-conditioned vehicle and vetted English-speaking chauffeur. 24/7 concierge support.",
    images: [
      {
        url: "/images/tour/jaipur.jpg",
        width: 1200,
        height: 630,
        alt: "Private Driver India - Rajasthan & Golden Triangle Tours",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
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
        <CurrencyProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </CurrencyProvider>
      </body>
    </html>
  );
}
