export interface Landmark {
  city: string;
  title: string;
  image: string;
  alt: string;
}

export const CITY_LANDMARK_MAP: Record<string, Landmark> = {
  delhi: {
    city: "Delhi",
    title: "Imperial Monuments & Mughal Heritage",
    image: "/images/historical.webp",
    alt: "Imperial Delhi monuments and red sandstone architecture",
  },
  agra: {
    city: "Agra",
    title: "Sunrise at the Taj Mahal",
    image: "/images/tour/taj-mahal.webp",
    alt: "Ivory marble Taj Mahal in Agra with private chauffeur",
  },
  jaipur: {
    city: "Jaipur",
    title: "Hawa Mahal & Amber Fort",
    image: "/images/tour/jaipur.webp",
    alt: "Hawa Mahal Palace of Winds and Amber Fort in Jaipur Pink City",
  },
  jodhpur: {
    city: "Jodhpur",
    title: "Mehrangarh Fort & Blue City",
    image: "/images/tour/jodhpur.webp",
    alt: "Mehrangarh Fort towering over the blue houses of Jodhpur",
  },
  udaipur: {
    city: "Udaipur",
    title: "City Palace & Lake Pichola",
    image: "/images/tour/udaipur.webp",
    alt: "Udaipur Lake Palace and City Palace over shimmering water",
  },
  jaisalmer: {
    city: "Jaisalmer",
    title: "Golden Citadel & Thar Sand Dunes",
    image: "/images/tour/jaisalmer.webp",
    alt: "Golden Sandstone Fort and desert dunes in Jaisalmer",
  },
  bikaner: {
    city: "Bikaner",
    title: "Junagarh Fort & Camel Country",
    image: "/images/tour/bikaner.webp",
    alt: "Junagarh Fort in Bikaner with royal mirror palaces",
  },
  pushkar: {
    city: "Pushkar",
    title: "Sacred Lake & Brahma Temple",
    image: "/images/tour/pushkar.webp",
    alt: "Sacred Pushkar Lake ghats and desert temples",
  },
  ajmer: {
    city: "Ajmer",
    title: "Ajmer Sharif Sufi Dargah",
    image: "/images/tour/ajmer.webp",
    alt: "Ajmer Sharif Dargah sacred shrine",
  },
  "mount abu": {
    city: "Mount Abu",
    title: "Dilwara Marble Temples",
    image: "/images/tour/mount-abu.webp",
    alt: "Dilwara marble temples in the hills of Mount Abu",
  },
  varanasi: {
    city: "Varanasi",
    title: "Sacred Ganga Ghats Sunrise",
    image: "/images/tour/1.webp",
    alt: "Varanasi morning boat cruise along holy bathing ghats",
  },
  ranthambore: {
    city: "Ranthambore",
    title: "Royal Bengal Tiger Jungle Safari",
    image: "/images/tour/wildlife.webp",
    alt: "Wild Bengal Tiger in Ranthambore National Park",
  },
  mathura: {
    city: "Mathura",
    title: "Krishna Janmabhoomi & Yamuna Ghats",
    image: "/images/tour/11.webp",
    alt: "Sacred Krishna Janmabhoomi temple in Mathura",
  },
  vrindavan: {
    city: "Vrindavan",
    title: "Banke Bihari & Sacred Temples",
    image: "/images/tour/22.webp",
    alt: "Holy Banke Bihari temple and evening aarti in Vrindavan",
  },
  haridwar: {
    city: "Haridwar",
    title: "Har Ki Pauri Evening Aarti",
    image: "/images/tour/33.webp",
    alt: "Har Ki Pauri sacred evening Ganga aarti in Haridwar",
  },
  rishikesh: {
    city: "Rishikesh",
    title: "Himalayan Yoga & Ganga Bridges",
    image: "/images/tour/44.webp",
    alt: "Rishikesh Ganga river suspension bridge and ashrams",
  },
  shimla: {
    city: "Shimla",
    title: "Colonial Ridge & Pine Forests",
    image: "/images/tour/55.webp",
    alt: "Shimla colonial Ridge and Himalayan pine hills",
  },
  manali: {
    city: "Manali",
    title: "Solang Valley & Alpine Vistas",
    image: "/images/tour/66.webp",
    alt: "Manali Solang Valley snowy peaks and cedar trees",
  },
};

export function getLandmarkForCity(text: string): Landmark | null {
  const normalized = text.toLowerCase();
  for (const [key, landmark] of Object.entries(CITY_LANDMARK_MAP)) {
    if (normalized.includes(key)) {
      return landmark;
    }
  }
  return null;
}

export function getRouteVisualHighlights(route: string[]): Landmark[] {
  const highlights: Landmark[] = [];
  const seen = new Set<string>();

  for (const city of route) {
    const landmark = getLandmarkForCity(city);
    if (landmark && !seen.has(landmark.city)) {
      seen.add(landmark.city);
      highlights.push(landmark);
    }
  }

  // Always include chauffeur vehicle showcase
  if (!seen.has("Private Chauffeur")) {
    highlights.push({
      city: "Private Chauffeur",
      title: "Toyota Innova Crysta Luxury Tourer",
      image: "/images/fleet/innova-crysta.webp",
      alt: "Toyota Innova Crysta luxury air-conditioned touring vehicle",
    });
  }

  // If still less than 4, add heritage haveli stay showcase
  if (highlights.length < 4) {
    highlights.push({
      city: "Heritage Stay",
      title: "Royal Rajput Haveli Retreat",
      image: "/images/alsisar-haveli.webp",
      alt: "Royal Rajput heritage palace and haveli accommodations",
    });
  }

  return highlights.slice(0, 4);
}
