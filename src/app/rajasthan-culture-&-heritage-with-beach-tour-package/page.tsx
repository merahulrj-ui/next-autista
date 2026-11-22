import React from "react";
import type { Metadata } from "next";
import TourDetailView from "@/components/views/TourDetailView";
import { Tour } from "@/data/tours";

const beachTour: Tour = {
  slug: "rajasthan-culture-&-heritage-with-beach-tour-package",
  legacyUrl: "rajasthan-culture-&-heritage-with-beach-tour-package.html",
  title: "Rajasthan Culture, Imperial Palaces & Goa Beach Tour",
  italianTitle: "Rajasthan Culture, Imperial Palaces & Goa Beach Tour",
  subtitle: "The ultimate North India grand road tour paired with the tropical, sun-kissed beaches of Goa",
  duration: "14 Days / 13 Nights",
  days: 14,
  nights: 13,
  priceEUR: 890,
  priceNote: "rate for private air-conditioned car & chauffeur in North India (domestic flights not included)",
  category: "bestseller",
  image: "/images/tour/tour-23.jpg",
  route: ["Delhi", "Agra", "Jaipur", "Jodhpur", "Udaipur", "Goa"],
  routeString: "Delhi · Agra Taj Mahal · Jaipur · Jodhpur · Udaipur · Goa Tropical Beaches",
  overview: "A comprehensive holiday combining the aristocratic splendor of Rajput hill forts and the Taj Mahal with well-deserved coastal relaxation along the golden palm-fringed sands of Goa. Enjoy seamless, door-to-door road travel with your private chauffeur throughout North India.",
  highlights: [
    "Unforgettable sunrise visit to the Taj Mahal in Agra with personal chauffeur",
    "Amber Fort in Jaipur and the towering Mehrangarh Fort in Jodhpur",
    "Romantic private boat cruise on Lake Pichola at sunset in Udaipur",
    "Days of blissful tropical beach relaxation along the Arabian Sea in Goa",
    "24/7 dedicated concierge assistance and executive air-conditioned vehicle"
  ],
  itinerary: [
    { day: 1, title: "Arrival in Delhi", description: "Personal meet-and-greet with your chauffeur at Delhi Airport, followed by an introductory tour of India Gate and Old Delhi." },
    { day: 2, title: "Delhi to Agra", description: "Scenic expressway drive to Agra via Yamuna Expressway. Sunset vista over the Taj Mahal from Mehtab Bagh gardens." },
    { day: 3, title: "Taj Mahal - Fatehpur Sikri - Jaipur", description: "Sunrise at the Taj Mahal, exploration of Agra Fort, and drive to the Pink City of Jaipur stopping at Fatehpur Sikri." },
    { day: 4, title: "Monumental Jaipur", description: "Ascend Amber Fort, photograph the iconic Hawa Mahal, and explore City Palace and Jantar Mantar observatory." },
    { day: 5, title: "Jaipur to Jodhpur", description: "Scenic highway drive to the Blue City of Jodhpur. Evening stroll through the spice markets of Sardar Bazaar." },
    { day: 6, title: "Jodhpur - Ranakpur - Udaipur", description: "Morning visit to Mehrangarh Fort. Drive to Udaipur through the Aravalli hills, visiting the 1,444-pillar Ranakpur Jain Temple." },
    { day: 7, title: "Lakeside Udaipur", description: "Explore the City Palace complex, Saheliyon Ki Bari gardens, and embark on a private sunset boat ride on Lake Pichola." },
    { day: 8, title: "Udaipur to Goa (Flight)", description: "Transfer to Udaipur Airport for your domestic flight to tropical Goa. Check in to your beach resort." },
    { day: 9, title: "Goa Beach Leisure", description: "Full day of sun, sea, and relaxation on the soft golden sands of South Goa." },
    { day: 10, title: "Historic Old Goa & Spice Plantations", description: "Visit UNESCO Portuguese heritage churches in Old Goa and tour an organic tropical spice plantation with lunch." },
    { day: 11, title: "Coastal Goa & Sunset Beach Dining", description: "Leisure day along the beaches, enjoying fresh coastal seafood at beachfront dining shacks." },
    { day: 12, title: "Goa Watersports & Leisure", description: "Optional catamaran sailing, water sports, or spa rejuvenation at your beach resort." },
    { day: 13, title: "Goa to Delhi (Flight)", description: "Fly from Goa to Delhi. Evening at leisure for souvenir shopping in Delhi's artisan emporiums." },
    { day: 14, title: "Delhi International Departure", description: "Private airport transfer to Delhi International Airport (DEL) in time for your return flight home." }
  ],
  inclusions: [
    "Private modern air-conditioned vehicle and licensed dedicated chauffeur for all days in North India",
    "All fuel, highway expressway tolls, state border permits, and parking charges",
    "Driver food and accommodation expenses fully covered",
    "Airport meet-and-greet transfers in Delhi and Goa",
    "24/7 dedicated WhatsApp guest concierge support"
  ],
  exclusions: ["Domestic and international flight tickets", "Hotel accommodations and meals", "Monument entry tickets and guide fees"],
  faqs: [
    { q: "What is the best season to combine Rajasthan and Goa?", a: "November through March is ideal, when the Rajasthan desert is pleasantly cool and the tropical waters of Goa are warm and calm." }
  ],
  rating: 4.96,
  reviewsCount: 74
};

export const metadata: Metadata = {
  title: `${beachTour.title} (${beachTour.duration}) | Private Driver India`,
  description: beachTour.subtitle,
  alternates: {
    canonical: "https://autistaprivatoindia.it/rajasthan-culture-&-heritage-with-beach-tour-package.html",
  },
  openGraph: {
    title: beachTour.title,
    description: beachTour.subtitle,
    images: [{ url: beachTour.image }],
  },
};

export default function BeachTourPage() {
  return <TourDetailView tour={beachTour} />;
}
