export interface IntercityRoute {
  slug: string;
  from: string;
  to: string;
  title: string;
  distanceKm: number;
  durationHours: string;
  priceSedanEUR: number;
  priceSuvEUR: number;
  priceVanEUR: number;
  highway: string;
  sightseeingEnRoute: string[];
  description: string;
}

export const INTERCITY_ROUTES: IntercityRoute[] = [
  {
    slug: "delhi-to-agra-car-transfer",
    from: "Delhi",
    to: "Agra",
    title: "Private Car Transfer from Delhi to Agra (Taj Mahal)",
    distanceKm: 210,
    durationHours: "3.5 - 4 Hours",
    priceSedanEUR: 65,
    priceSuvEUR: 85,
    priceVanEUR: 130,
    highway: "Yamuna Expressway (6-Lane High-Speed Controlled Access Highway)",
    sightseeingEnRoute: [
      "Mathura (Birthplace of Lord Krishna)",
      "Vrindavan (Historic ISKCON & Banke Bihari Temples)",
      "Sikandra (Tomb of Mughal Emperor Akbar the Great)"
    ],
    description: "The smoothest, fastest, and most dependable way to travel between the national capital Delhi and Agra, home of the Taj Mahal. Enjoy door-to-door pickup from your hotel in Delhi or Terminal 3 at Delhi International Airport (DEL), cruising along the seamless 6-lane Yamuna Expressway without crowded train stations or train ticket booking stress."
  },
  {
    slug: "delhi-to-jaipur-car-transfer",
    from: "Delhi",
    to: "Jaipur",
    title: "Private Car Transfer from Delhi to Jaipur (Pink City)",
    distanceKm: 270,
    durationHours: "4 - 4.5 Hours",
    priceSedanEUR: 75,
    priceSuvEUR: 95,
    priceVanEUR: 145,
    highway: "New Delhi-Mumbai Expressway (NE-4)",
    sightseeingEnRoute: [
      "Neemrana Fort-Palace (15th-Century Heritage Hill Palace)",
      "Sultanpur National Park Bird Sanctuary"
    ],
    description: "Reach the royal capital of Rajasthan effortlessly via the modern Delhi-Mumbai Expressway. Enjoy high-speed travel with chilled air conditioning, verified commercial chauffeurs, and refreshing stops at clean international expressway plazas equipped with hygienic restrooms, cafes, and restaurants."
  },
  {
    slug: "jodhpur-to-udaipur-via-ranakpur",
    from: "Jodhpur",
    to: "Udaipur",
    title: "Jodhpur to Udaipur Private Transfer via Ranakpur Jain Temple & Kumbhalgarh Fort",
    distanceKm: 260,
    durationHours: "6.5 - 7 Hours (including monument stopovers)",
    priceSedanEUR: 80,
    priceSuvEUR: 105,
    priceVanEUR: 160,
    highway: "Scenic Aravalli Mountain Road",
    sightseeingEnRoute: [
      "Ranakpur Jain Temple (1,444 intricate hand-carved marble pillars)",
      "Kumbhalgarh Fort (The Great Wall of India - 36 km fortress ramparts)"
    ],
    description: "Far more than a simple point-to-point transit: this is one of India's most scenic and culturally rewarding overland drives. Depart Jodhpur in the morning, wind through the lush green valleys of the Aravalli hills, explore the marvel of Ranakpur, and arrive relaxed in lakeside Udaipur in the late afternoon."
  },
  {
    slug: "jaipur-to-agra-via-fatehpur-sikri",
    from: "Jaipur",
    to: "Agra",
    title: "Jaipur to Agra Private Transfer with Abhaneri Stepwell & Fatehpur Sikri",
    distanceKm: 240,
    durationHours: "5 - 6 Hours (including monument sightseeing)",
    priceSedanEUR: 70,
    priceSuvEUR: 90,
    priceVanEUR: 140,
    highway: "National Highway NH-21",
    sightseeingEnRoute: [
      "Chand Baori Stepwell at Abhaneri (1,000-year-old geometric stone well)",
      "Fatehpur Sikri UNESCO Imperial Mughal Ghost City"
    ],
    description: "The classic Golden Triangle connection enriched by North India's two most fascinating halfway monuments: the mesmerizing geometric stairwells of Chand Baori and the preserved red sandstone palace courtyards of Emperor Akbar at Fatehpur Sikri."
  },
  {
    slug: "delhi-airport-transfer",
    from: "Delhi International Airport (DEL)",
    to: "Central Delhi / Gurgaon / Noida Hotels",
    title: "Delhi Airport (DEL) Private Arrival & Departure Chauffeur Transfer",
    distanceKm: 25,
    durationHours: "45 - 60 Minutes",
    priceSedanEUR: 25,
    priceSuvEUR: 35,
    priceVanEUR: 60,
    highway: "Delhi Airport Express Corridor",
    sightseeingEnRoute: [
      "Personalized meet-and-greet with name signboard outside arrivals gate"
    ],
    description: "The safest, most stress-free arrival in India after a long international flight. Your private chauffeur waits directly outside Terminal 3 arrivals holding a sign with your name, tracks flight arrivals in real-time in case of delays, assists with heavy luggage, and whisks you straight to your hotel in air-conditioned calm."
  },
  {
    slug: "delhi-to-haridwar-rishikesh",
    from: "Delhi",
    to: "Rishikesh / Haridwar",
    title: "Private Car Transfer from Delhi to Haridwar & Rishikesh (Yoga Capital of the World)",
    distanceKm: 240,
    durationHours: "4.5 - 5 Hours",
    priceSedanEUR: 85,
    priceSuvEUR: 110,
    priceVanEUR: 165,
    highway: "New Delhi-Dehradun Expressway Corridor",
    sightseeingEnRoute: [
      "Har Ki Pauri Sacred Bathing Ghats in Haridwar",
      "Ram Jhula & Lakshman Jhula Suspension Bridges across the holy Ganges in Rishikesh"
    ],
    description: "Leave the plains of Delhi behind as you journey toward the Himalayan foothills and the sacred banks of Mother Ganga. Enjoy comfortable, scenic private road transit to Rishikesh's premier yoga retreats, ashrams, and the evening Ganga Aarti fire ceremonies of Haridwar."
  }
];
