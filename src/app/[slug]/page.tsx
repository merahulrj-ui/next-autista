import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TOURS } from "@/data/tours";
import { DESTINATIONS } from "@/data/destinations";
import { BLOGS } from "@/data/blogs";
import TourDetailView from "@/components/views/TourDetailView";
import DestinationDetailView from "@/components/views/DestinationDetailView";
import BlogDetailView from "@/components/views/BlogDetailView";
import IntercityHubView from "@/components/views/IntercityHubView";
import {
  AboutUsView,
  ContactView,
  PolicyView,
  GenericRegionalTourView,
} from "@/components/views/UtilityViews";

// Extra Google-indexed legacy regional tours dictionary with rich International English content
const REGIONAL_TOURS_DATA: Record<
  string,
  {
    title: string;
    route: string;
    duration: string;
    overview: string;
    highlights: string[];
  }
> = {
  "royal-glories-tour-package": {
    title: "Royal Glories of Rajasthan Private Tour",
    route: "Delhi · Agra · Jaipur · Jodhpur · Udaipur",
    duration: "10 Days / 9 Nights",
    overview:
      "Experience the regal majesty of Rajasthan on this premier chauffeur-driven overland circuit. Journey from the monumental heritage of Delhi and sunrise at the Taj Mahal to the Pink City of Jaipur, the Blue City of Jodhpur, and romantic lakeside Udaipur. Travel at your own personal pace in a modern, air-conditioned vehicle with a seasoned English-speaking chauffeur.",
    highlights: [
      "Sunrise at the Taj Mahal in Agra with personal chauffeur",
      "Amber Fort and Palace of Winds in Jaipur",
      "Towering Mehrangarh Fort and indigo alleys in Jodhpur",
      "Romantic private sunset boat cruise on Lake Pichola in Udaipur",
      "All highway expressway tolls, fuel, and border permits 100% included",
    ],
  },
  "surat-delhi-agra-jaipur-tour-package": {
    title: "Golden Triangle Tour with Surat Connection",
    route: "Surat · Delhi · Agra · Jaipur · Delhi",
    duration: "7 Days / 6 Nights",
    overview:
      "A dedicated private tour circuit tailored for business travelers and visitors connecting from Surat to the world-famous Golden Triangle (Delhi, Agra, and Jaipur). Enjoy seamless airport or station pickup in Delhi, private highway transfers along the Yamuna Expressway, and comprehensive sightseeing of North India's greatest royal monuments.",
    highlights: [
      "Convenient airport meet-and-greet pickup in Delhi",
      "VIP sunrise access to the Taj Mahal without crowds",
      "Guided exploration of Amber Fort, City Palace, and Jantar Mantar in Jaipur",
      "Executive vehicle with USB charging and complimentary bottled mineral water",
    ],
  },
  "pushkar-with-desert-circuit-tour-package": {
    title: "Pushkar with Desert Circuit Tour Package",
    route: "Delhi · Pushkar · Bikaner · Jaisalmer · Jodhpur",
    duration: "9 Days / 8 Nights",
    overview:
      "An evocative journey bridging the sacred ghats of Pushkar Lake with the deep golden sands of the Thar Desert. Explore unconquered desert forts in Bikaner, living sandstone citadels in Jaisalmer, thrilling camel treks at Sam Sand Dunes, and the indigo lanes of Jodhpur.",
    highlights: [
      "Spiritual evening aarti ceremony at sacred Pushkar Lake",
      "Opulent mirror work at Junagarh Fort in Bikaner",
      "Sunset camel safari across Sam Sand Dunes in Jaisalmer",
      "Breathtaking views from Mehrangarh Fort in Jodhpur",
    ],
  },
  "pune-delhi-agra-jaipur-tour-package": {
    title: "Golden Triangle Chauffeur Tour for Pune Travelers",
    route: "Pune / Delhi · Agra · Jaipur · Delhi",
    duration: "6 Days / 5 Nights",
    overview:
      "Specifically organized for travelers arriving on direct flights from Pune to Delhi. Your private chauffeur meets you at Delhi Airport (DEL) with a personalized name board and whisks you away to explore the Taj Mahal, Jaipur's royal palaces, and Old Delhi's vibrant bazaars.",
    highlights: [
      "Direct airport pickup at Delhi Terminal 3 with flight delay tracking",
      "Early morning Taj Mahal photo opportunities at dawn",
      "UNESCO World Heritage sites of Fatehpur Sikri and Jaipur",
      "100% transparent pricing with zero surprise extra charges",
    ],
  },
  "nashik-delhi-agra-jaipur-tour-package": {
    title: "Golden Triangle Tour for Nashik Travelers",
    route: "Nashik / Delhi · Agra · Jaipur · Delhi",
    duration: "6 Days / 5 Nights",
    overview:
      "The premier chauffeured road tour connecting travelers departing from Maharashtra with North India's Golden Triangle. Experience world-class comfort in a private Toyota Innova Crysta or Sedan with a licensed English-speaking chauffeur managing all driving and parking.",
    highlights: [
      "Seamless pickup and return at Delhi International Airport",
      "Taj Mahal and Agra Fort discovery",
      "Jaipur's Palace of Winds and Amber Fort",
      "Dedicated 24/7 guest support on WhatsApp",
    ],
  },
  "mumbai-delhi-agra-Jaipur-tour-package": {
    title: "Mumbai to Golden Triangle Luxury Tour by Car",
    route: "Mumbai / Delhi · Agra · Jaipur · Delhi",
    duration: "6 Days / 5 Nights",
    overview:
      "The most popular inbound route for international visitors landing in Mumbai who wish to discover the Golden Triangle in complete luxury. Fly into Delhi where your private chauffeur awaits to guide you through the Taj Mahal, Fatehpur Sikri, and Jaipur before your return flight.",
    highlights: [
      "Effortless airport coordination at Delhi DEL Terminal 3",
      "Private chauffeured travel along the modern Yamuna Expressway",
      "Exploration of the Pink City and sunrise Taj Mahal",
      "Zero-commission shopping policy guaranteeing authentic travel",
    ],
  },
  "hotels-in-pushkar": {
    title: "Best Luxury & Heritage Hotels in Pushkar (Travel Guide)",
    route: "Pushkar · Ajmer · Rajasthan",
    duration: "Travel Guide & Private Car Services",
    overview:
      "A curated guide to the finest heritage havelis, luxury tented camps, and boutique lakeside resorts in Pushkar, Rajasthan. Whether you are visiting for the sacred Kartik Purnima Camel Fair or looking for a peaceful wellness retreat, our private chauffeur service provides effortless door-to-door transit to all Pushkar hotels and desert resorts.",
    highlights: [
      "Curated recommendations for luxury heritage resorts and desert camps",
      "Seamless private car transfers from Jaipur, Delhi, or Ajmer",
      "Comfortable transit to Savitri Temple ropeway and Pushkar Lake ghats",
      "24/7 luggage security and certified English-speaking drivers",
    ],
  },
  "industrial-development-of-rajasthan": {
    title: "Industrial Heritage, Crafts & Trade in Rajasthan (Travel Guide)",
    route: "Jaipur · Jodhpur · Makrana · Kishangarh · Rajasthan",
    duration: "Trade & Industrial Heritage Road Guide",
    overview:
      "Explore the commercial and industrial craftsmanship that makes Rajasthan famous across the globe: the pristine white marble quarries of Makrana, Kishangarh marble trade hubs, Jaipur's renowned gemstone and handcrafted block-printed textile industries, and Jodhpur's handcrafted wooden furniture exports. Ideal for business travelers and cultural craft enthusiasts seeking reliable private chauffeur transport between industrial centers.",
    highlights: [
      "Private executive chauffeur transfers between industrial centers and craft hubs",
      "Direct transit to Makrana marble mines and Kishangarh marble market",
      "Visits to authentic Jaipur block-printing and gemstone cutting workshops",
      "Reliable door-to-door corporate road travel across North India",
    ],
  },
};

export async function generateStaticParams() {
  const params: Array<{ slug: string }> = [];
  const isDev = process.env.NODE_ENV !== "production";

  // 1. All Tours (filter out dedicated routes with '&')
  TOURS.filter((t) => !t.slug.includes("&")).forEach((t) => {
    params.push({ slug: t.slug });
    if (isDev) {
      params.push({ slug: `${t.slug}.html` });
    }
  });

  // 2. All Destinations
  DESTINATIONS.forEach((d) => {
    params.push({ slug: d.slug });
    if (isDev) {
      params.push({ slug: `${d.slug}.html` });
    }
  });

  // 3. All Blogs
  BLOGS.forEach((b) => {
    params.push({ slug: b.slug });
    if (isDev) {
      params.push({ slug: `${b.slug}.html` });
    }
  });

  // 4. Intercity Hub
  params.push({ slug: "india-intercity-car-transfer-private-driver" });
  if (isDev) {
    params.push({ slug: "india-intercity-car-transfer-private-driver.html" });
  }

  // 5. Utilities
  const utilities = ["about-us", "contact", "cancellation-policy"];
  utilities.forEach((u) => {
    params.push({ slug: u });
    if (isDev) {
      params.push({ slug: `${u}.html` });
    }
  });

  // Support tour-packages.html alias in dev
  if (isDev) {
    params.push({ slug: "tour-packages.html" });
  }

  // 6. Regional Legacy Indexed URLs
  Object.keys(REGIONAL_TOURS_DATA).forEach((slug) => {
    params.push({ slug });
    if (isDev) {
      params.push({ slug: `${slug}.html` });
    }
  });

  return params;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const clean = slug.replace(/\.html$/, "");

  // Check Tour
  const tour = TOURS.find((t) => t.slug === clean || t.slug === slug);
  if (tour) {
    return {
      title: `${tour.title} (${tour.duration})`,
      description: tour.subtitle,
      alternates: {
        canonical: `https://autistaprivatoindia.it/${tour.legacyUrl}`,
      },
      openGraph: {
        title: tour.title,
        description: tour.subtitle,
        images: [{ url: tour.image }],
      },
    };
  }

  // Check Destination
  const dest = DESTINATIONS.find((d) => d.slug === clean || d.slug === slug);
  if (dest) {
    return {
      title: `${dest.name} Travel Guide with Private Driver | Best Attractions & Tips`,
      description: `Complete travel guide to ${dest.name}, Rajasthan with private chauffeur. Top monuments, recommended duration, and local road travel tips.`,
      alternates: {
        canonical: `https://autistaprivatoindia.it/${dest.legacyUrl}`,
      },
      openGraph: {
        title: `${dest.name} Travel Guide | Private Driver India`,
        description: dest.tagline,
        images: [{ url: dest.image }],
      },
    };
  }

  // Check Blog
  const blog = BLOGS.find((b) => b.slug === clean || b.slug === slug);
  if (blog) {
    const blogTitles: Record<string, { title: string; desc: string }> = {
      "hiring-private-driver-in-india-cost-guide": {
        title: "How Much Does a Private Driver in India Cost? (2026 Complete Price Guide)",
        desc: "Transparent guide to hiring a private car and driver in India for 2026. Daily rates for Sedans & Innova Crysta, all inclusions, highway tolls, and tips to avoid commission traps.",
      },
      "toyota-innova-crysta-rental-india-private-driver": {
        title: "Toyota Innova Crysta Rental in India with Private Driver | Rates & Review",
        desc: "Why the Toyota Innova Crysta is the gold standard for road travel in India: captain seats, AC performance, luggage space, suspension, and all-inclusive chauffeur fares.",
      },
      "same-day-agra-mathura-vrindavan-tour-by-car": {
        title: "Same Day Agra, Mathura & Vrindavan Tour by Car from Delhi",
        desc: "Private same-day car excursion to the Taj Mahal at dawn, Agra Fort, and the sacred temples of Mathura & Vrindavan with personal chauffeur.",
      },
      "golden-triangle-ranthambore-rajasthan-heritage-tour-by-car": {
        title: "12-Day Golden Triangle, Ranthambore Tiger Safari & Heritage Rajasthan Tour",
        desc: "Comprehensive 12-day private car itinerary covering Delhi, Agra, Ranthambore National Park, Jaipur, and the royal heritage of Rajasthan.",
      },
    };

    const info = blogTitles[clean] || {
      title: blog.title,
      desc: blog.excerpt,
    };

    return {
      title: info.title,
      description: info.desc,
      alternates: {
        canonical: `https://autistaprivatoindia.it/${blog.legacyUrl}`,
      },
      openGraph: {
        title: info.title,
        description: info.desc,
        images: [{ url: blog.image }],
      },
    };
  }

  // Intercity Hub
  if (clean === "india-intercity-car-transfer-private-driver") {
    return {
      title: "Private Intercity Car Transfers in India with Chauffeur | Fixed Rates",
      description:
        "Guaranteed fixed-rate private car transfers between Delhi, Agra, Jaipur, Jodhpur, and Udaipur with licensed English-speaking drivers.",
      alternates: {
        canonical:
          "https://autistaprivatoindia.it/india-intercity-car-transfer-private-driver.html",
      },
    };
  }

  // Utility Defaults
  if (clean === "about-us") {
    return {
      title: "About Us | Private Driver India",
      description:
        "Learn about Private Driver India, your premier chauffeured car rental and tailor-made tour specialist in North India. 24/7 dedicated assistance.",
      alternates: {
        canonical: "https://autistaprivatoindia.it/about-us.html",
      },
    };
  }

  if (clean === "contact") {
    return {
      title: "Contact Us for Free Instant Quote | Private Driver India",
      description:
        "Request a custom all-inclusive quote for your journey across India with a private chauffeur via WhatsApp or email.",
      alternates: {
        canonical: "https://autistaprivatoindia.it/contact.html",
      },
    };
  }

  if (clean === "cancellation-policy") {
    return {
      title: "Terms & Cancellation Policy | Private Driver India",
      description:
        "Transparent booking conditions, cancellation terms, and refund policies for private chauffeur tours in India.",
      alternates: {
        canonical: "https://autistaprivatoindia.it/cancellation-policy.html",
      },
    };
  }

  // Regional tour metadata
  if (REGIONAL_TOURS_DATA[clean]) {
    return {
      title: `${REGIONAL_TOURS_DATA[clean].title} with Private Driver`,
      description: REGIONAL_TOURS_DATA[clean].overview,
      alternates: {
        canonical: `https://autistaprivatoindia.it/${clean}.html`,
      },
    };
  }

  return {
    title: "Private Driver India",
  };
}

export default async function DynamicSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const clean = slug.replace(/\.html$/, "");

  // 1. Tour Page
  const tour = TOURS.find((t) => t.slug === clean || t.slug === slug);
  if (tour) {
    return <TourDetailView tour={tour} />;
  }

  // 2. Destination Guide Page
  const dest = DESTINATIONS.find((d) => d.slug === clean || d.slug === slug);
  if (dest) {
    return <DestinationDetailView destination={dest} />;
  }

  // 3. Blog Article Page
  const blog = BLOGS.find((b) => b.slug === clean || b.slug === slug);
  if (blog) {
    return <BlogDetailView post={blog} />;
  }

  // 4. Intercity Transfers Hub
  if (clean === "india-intercity-car-transfer-private-driver") {
    return <IntercityHubView />;
  }

  // 5. Utility Pages
  if (clean === "about-us") return <AboutUsView />;
  if (clean === "contact") return <ContactView />;
  if (clean === "cancellation-policy") return <PolicyView />;

  // 6. Regional Legacy Tours
  if (REGIONAL_TOURS_DATA[clean]) {
    const data = REGIONAL_TOURS_DATA[clean];
    return (
      <GenericRegionalTourView
        slug={clean}
        title={data.title}
        route={data.route}
        duration={data.duration}
        overview={data.overview}
        highlights={data.highlights}
      />
    );
  }

  notFound();
}
