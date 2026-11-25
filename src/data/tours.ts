export interface Tour {
  slug: string;
  legacyUrl: string;
  title: string;
  italianTitle: string;
  subtitle: string;
  duration: string;
  days: number;
  nights: number;
  priceEUR: number;
  priceNote: string;
  category: 'bestseller' | 'rajasthan' | 'heritage' | 'wildlife' | 'spiritual' | 'train' | 'hills';
  image: string;
  route: string[];
  routeString: string;
  overview: string;
  highlights: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
  }>;
  inclusions: string[];
  exclusions: string[];
  faqs: Array<{
    q: string;
    a: string;
  }>;
  rating: number;
  reviewsCount: number;
}

export const TOURS: Tour[] = [
  {
    slug: 'golden-triangle-tour-package',
    legacyUrl: 'golden-triangle-tour-package.html',
    title: 'Classic Golden Triangle Tour',
    italianTitle: 'Classic Golden Triangle Tour',
    subtitle: 'Delhi, Agra, Taj Mahal & Jaipur with personal English-speaking chauffeur',
    duration: '6 Days / 5 Nights',
    days: 6,
    nights: 5,
    priceEUR: 390,
    priceNote: 'total rate per private vehicle (1-3 persons)',
    category: 'bestseller',
    image: '/images/tour/jaipur.webp',
    route: ['Delhi', 'Agra', 'Fatehpur Sikri', 'Abhaneri', 'Jaipur', 'Delhi'],
    routeString: 'Delhi · Agra · Fatehpur Sikri · Abhaneri · Jaipur · Delhi',
    overview: "North India's most iconic and celebrated travel circuit. Journey in complete comfort aboard a modern air-conditioned vehicle with a seasoned chauffeur to discover the monumental splendors of Delhi, the ethereal beauty of the Taj Mahal at sunrise in Agra, the UNESCO ghost city of Fatehpur Sikri, and the regal pink palaces and hill forts of Jaipur.",
    highlights: [
      'Sunrise visit to the Taj Mahal with zero queues and best photography angles',
      'Ascent to the majestic Amber Fort in Jaipur with panoramic valley views',
      'Stopover at the ancient 1,000-year-old Chand Baori stepwell in Abhaneri',
      'Old Delhi heritage exploration including Jama Masjid and spice bazaars',
      'Modern executive air-conditioned vehicle at your exclusive disposal throughout'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi & Private Meet-and-Greet',
        description: 'Meet your personal chauffeur at Delhi International Airport (DEL) holding a signboard with your name. Hotel transfer, followed by an introductory afternoon tour of India Gate, Parliament House, and the towering Qutub Minar.'
      },
      {
        day: 2,
        title: 'Historic Delhi & Scenic Drive to Agra',
        description: 'Morning exploration of Old Delhi: Jama Masjid, Raj Ghat memorial, and a rickshaw ride through Chandni Chowk. Afternoon scenic drive along the smooth Yamuna Expressway to Agra. Sunset vista over the Taj Mahal from Mehtab Bagh gardens.'
      },
      {
        day: 3,
        title: 'Sunrise Taj Mahal, Agra Fort & Fatehpur Sikri',
        description: 'Early morning entrance to the Taj Mahal to watch the white Makrana marble glow with the first rays of dawn. Return to hotel for breakfast, visit the massive red sandstone Agra Fort, and drive to Jaipur stopping at the imperial Mughal city of Fatehpur Sikri.'
      },
      {
        day: 4,
        title: 'Jaipur: The Pink City & Amber Fort Ramparts',
        description: 'Full day exploring Jaipur. Ascend the ramparts of Amber Fort, take photos at the honeycomb facade of Hawa Mahal (Palace of Winds), and tour the royal City Palace and Jantar Mantar UNESCO astronomical observatory.'
      },
      {
        day: 5,
        title: 'Artisan Jaipur, Jaigarh Fort & Royal Shrines',
        description: 'Visit the scenic hilltop Jaigarh Fort and the tranquil Galta Ji (Monkey Temple). Free afternoon to explore traditional handicraft bazaars celebrated for block-printed cottons, carpets, and blue pottery.'
      },
      {
        day: 6,
        title: 'Return Drive to Delhi & International Airport Transfer',
        description: 'After a leisurely breakfast, relax on the return highway journey to Delhi along the modern expressway. Direct transfer to Delhi International Airport in time for your flight home.'
      }
    ],
    inclusions: [
      'Exclusive air-conditioned vehicle (Sedan or Toyota Innova Crysta)',
      'Licensed professional English-speaking tourist chauffeur',
      'All fuel, expressway tolls, interstate border permits, and monument parking',
      'Chauffeur meals and overnight lodging allowances fully covered',
      'Complimentary chilled bottled mineral water and phone charging on board',
      '24/7 dedicated guest concierge support on WhatsApp'
    ],
    exclusions: [
      'Hotel accommodations (can be arranged on request)',
      'Monument entrance tickets and optional local site guides',
      'Meals and personal expenses',
      'Driver tips (at your personal discretion)'
    ],
    faqs: [
      {
        q: 'Is the price per person or for the entire car?',
        a: 'All our quoted rates are for the entire private vehicle, not per person. Whether you are 1, 2, or 3 travelers, the total vehicle price remains the same.'
      },
      {
        q: 'Does the chauffeur wait for us during monument visits?',
        a: 'Yes, absolutely. Your driver drops you at the entrance, keeps your luggage safe inside the vehicle, and waits for you at the gate whenever you finish.'
      },
      {
        q: 'Can we customize departure times and roadside stops?',
        a: 'Yes, 100%. As a private bespoke tour, you set your preferred morning departure time and can pause at any highway cafe or scenic village along the route.'
      }
    ],
    rating: 4.95,
    reviewsCount: 128
  },
  {
    slug: 'rajasthan-tour-package',
    legacyUrl: 'rajasthan-tour-package.html',
    title: 'Classic Rajasthan Grand Heritage Tour',
    italianTitle: 'Classic Rajasthan Grand Heritage Tour',
    subtitle: 'The legendary circuit of the Maharajas: Mandawa, Bikaner, Jaisalmer, Jodhpur, Udaipur, Pushkar & Jaipur',
    duration: '14 Days / 13 Nights',
    days: 14,
    nights: 13,
    priceEUR: 890,
    priceNote: 'total rate per private vehicle (1-3 persons)',
    category: 'rajasthan',
    image: '/images/tour/jodhpur.webp',
    route: ['Delhi', 'Mandawa', 'Bikaner', 'Jaisalmer', 'Jodhpur', 'Ranakpur', 'Udaipur', 'Pushkar', 'Jaipur', 'Agra', 'Delhi'],
    routeString: 'Delhi · Mandawa · Bikaner · Jaisalmer · Jodhpur · Ranakpur · Udaipur · Pushkar · Jaipur · Agra · Delhi',
    overview: "The definitive overland expedition across the Land of Kings. From the richly frescoed merchant havelis of Shekhawati to the shimmering golden dunes of the Thar Desert in Jaisalmer, from the towering blue bastion of Mehrangarh in Jodhpur to the fairy-tale romance of Lake Pichola in Udaipur. Experience the magic of Rajasthan with complete peace of mind with a seasoned private chauffeur.",
    highlights: [
      'Sunset camel safari and overnight camp among Sam Sand Dunes in the Thar Desert',
      'The breathtaking 1,444 hand-carved marble pillars of Ranakpur Jain Temple',
      'Sunset boat cruise on Lake Pichola overlooking Udaipur City Palace',
      'Tour of the impregnable Mehrangarh Fort towering above the Blue City of Jodhpur',
      'Frescoed open-air art gallery havelis in the Shekhawati desert region'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', description: 'Airport meet-and-greet and private transfer to your hotel. Leisure time or introductory city drive.' },
      { day: 2, title: 'Delhi to Mandawa (Shekhawati)', description: 'Morning departure toward the semi-desert Shekhawati region. Afternoon walking tour of the painted havelis of Mandawa.' },
      { day: 3, title: 'Mandawa to Bikaner', description: 'Scenic drive to Bikaner. Tour the unconquered red sandstone Junagarh Fort and the National Camel Research Farm.' },
      { day: 4, title: 'Bikaner to Jaisalmer (The Golden City)', description: 'Journey through the Thar Desert to Jaisalmer. En-route visit to the sacred Karni Mata Temple in Deshnoke. Sunset at Bada Bagh royal cenotaphs.' },
      { day: 5, title: 'Jaisalmer Fort & Sam Sand Dunes Desert Safari', description: 'Explore Jaisalmer Living Fort and the ornate Patwon Ki Haveli. Afternoon transfer to the desert dunes of Sam for a camel safari, sunset, and live folk music.' },
      { day: 6, title: 'Jaisalmer to Jodhpur (The Blue City)', description: 'Highway drive to Jodhpur. Afternoon tour of Mehrangarh Fort and a stroll through the sapphire-blue Brahmin alleys of Brahmapuri.' },
      { day: 7, title: 'Jodhpur - Ranakpur - Udaipur', description: 'Drive toward Udaipur through the Aravalli hills, stopping at the world-renowned marble Ranakpur Jain Temple.' },
      { day: 8, title: 'Udaipur: City of Lakes', description: 'Full day exploring the City Palace, Jagdish Temple, Saheliyon Ki Bari, and an evening boat cruise on Lake Pichola.' },
      { day: 9, title: 'Udaipur - Chittorgarh - Pushkar', description: 'Visit Asia\'s largest fortress at Chittorgarh, then drive to the sacred desert oasis of Pushkar.' },
      { day: 10, title: 'Pushkar to Jaipur', description: 'Morning visit to the holy Brahma Temple and lake ghats. Scenic afternoon highway drive to the Pink City of Jaipur.' },
      { day: 11, title: 'Jaipur (Amber Fort & Royal Palaces)', description: 'Full day in Jaipur: Amber Fort, Hawa Mahal photo stop, City Palace museum, and Jantar Mantar observatory.' },
      { day: 12, title: 'Jaipur - Abhaneri - Fatehpur Sikri - Agra', description: 'Drive to Agra stopping at Chand Baori stepwell in Abhaneri and the red sandstone Mughal capital of Fatehpur Sikri.' },
      { day: 13, title: 'Agra (Taj Mahal & Agra Fort)', description: 'Sunrise at the Taj Mahal. Explore Agra Fort and the exquisite tomb of Itimad-ud-Daulah (Baby Taj).' },
      { day: 14, title: 'Agra to Delhi & International Departure', description: 'Comfortable return expressway drive to Delhi. Direct transfer to Delhi Airport for your return flight home.' }
    ],
    inclusions: [
      'Private air-conditioned vehicle for all 14 days',
      'Experienced English-speaking chauffeur specialized in Rajasthan highways',
      'All fuel, expressway tolls, interstate permits, and monument parking fees',
      'Driver meals and lodging expenses fully covered',
      'Complimentary chilled bottled water every day on board',
      '24/7 dedicated WhatsApp concierge support'
    ],
    exclusions: ['Hotel accommodations and meals', 'Monument entry fees and safari permits', 'Personal expenses and tipping'],
    faqs: [
      { q: 'What is the best time of year for this grand tour?', a: 'October through early April is ideal, featuring mild desert temperatures, clear blue skies, and cool evenings.' },
      { q: 'Can we start this tour from Jaipur instead of Delhi?', a: 'Yes, we can customize the starting and ending city to match your flight itinerary.' }
    ],
    rating: 4.98,
    reviewsCount: 164
  },
  {
    slug: 'delhi-agra-varanasi-tour-package',
    legacyUrl: 'delhi-agra-varanasi-tour-package.html',
    title: 'Delhi Agra & Sacred Varanasi Tour',
    italianTitle: 'Delhi Agra & Sacred Varanasi Tour',
    subtitle: 'Mughal architectural masterworks combined with the profound spiritual energy of Mother Ganga',
    duration: '8 Days / 7 Nights',
    days: 8,
    nights: 7,
    priceEUR: 520,
    priceNote: 'rate for private vehicle (domestic flights not included)',
    category: 'spiritual',
    image: '/images/tour/3.webp',
    route: ['Delhi', 'Agra', 'Varanasi', 'Sarnath', 'Delhi'],
    routeString: 'Delhi · Agra · Varanasi · Sarnath · Delhi',
    overview: "A deeply moving spiritual and cultural pilgrimage uniting North India's Mughal crown jewels (Delhi and the Taj Mahal in Agra) with the ancient sacred heart of Hindu civilization in Varanasi. Witness the evening Ganga Aarti fire ceremonies from a private boat and experience silent dawn boat rides along the sacred ghats.",
    highlights: [
      'Private boat cruise on the River Ganges for the evening Ganga Aarti ceremony',
      'Sunrise rowing boat journey along the historic bathing ghats of Varanasi',
      'Excursion to Sarnath, where Lord Buddha preached his first sermon',
      'Sunrise viewing of the Taj Mahal in Agra with dedicated chauffeur',
      'Seamless coordination for domestic flight or high-speed express train connections'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi & Private Chauffeur Meet-and-Greet",
            description: "Your professional English-speaking private driver warmly welcomes you at Delhi International Airport (DEL) with a personalized name board. Direct transfer in an air-conditioned executive vehicle to your hotel. Afternoon introductory drive passing India Gate, Rashtrapati Bhavan, and the 73-meter medieval minaret of Qutub Minar."
      },
      {
            day: 2,
            title: "Old Delhi Heritage & Scenic Expressway Drive to Agra",
            description: "Explore the bustling lanes of Old Delhi with a visit to the colossal Jama Masjid and a cycle-rickshaw ride through Chandni Chowk spice bazaars. In the afternoon, relax aboard your private car along the smooth 6-lane Yamuna Expressway to Agra. Enjoy a serene sunset view of the Taj Mahal from Mehtab Bagh gardens across the Yamuna River."
      },
      {
            day: 3,
            title: "Sunrise Taj Mahal, Imperial Agra Fort & Express Transit to Varanasi",
            description: "Experience the ethereal beauty of the Taj Mahal at sunrise with your private driver ensuring prompt arrival before crowds gather. Tour the majestic red sandstone Agra Fort, once the seat of Mughal power. Later, your chauffeur transfers you comfortably to Delhi Airport or the railway station for your onward journey to the holy city of Varanasi."
      },
      {
            day: 4,
            title: "Arrival in Sacred Varanasi & Grand Ganga Aarti Ceremony",
            description: "Arrive in Varanasi, the spiritual heart of India. Meet your local private driver and transfer to your riverside hotel. In the evening, embark on a private boat on the River Ganges to witness the mesmerizing Ganga Aarti ceremony at Dashashwamedh Ghat, accompanied by rhythmic chanting, brass lamps, and floating flower diyas."
      },
      {
            day: 5,
            title: "Dawn Rowing Boat on the Ganges & Sarnath Excursion",
            description: "At dawn, experience a serene boat journey along Varanasi's historic bathing ghats as pilgrims perform morning prayers and sacred rituals. Afternoon private excursion to Sarnath, the revered deer park where Lord Buddha preached his first sermon after attaining enlightenment, followed by a visit to the Sarnath Archaeological Museum."
      },
      {
            day: 6,
            title: "Ancient Temples & Handloom Silk Weaving Quarters",
            description: "Discover Varanasi's spiritual architecture including the revered Kashi Vishwanath Golden Temple and the red-hued Durga Temple. Walk through ancient narrow alleyways with your driver guiding you to authentic silk weaving workshops celebrated globally for hand-woven Banarasi brocade sarees."
      },
      {
            day: 7,
            title: "Varanasi to Delhi & Afternoon Cultural Sightseeing",
            description: "Your private chauffeur escorts you to Varanasi Airport for your return flight to Delhi. Upon arrival in the capital, enjoy an afternoon visiting the magnificent Akshardham Temple or indulging in souvenir shopping in Delhi's government-approved handicraft emporiums with full vehicle luggage safety."
      },
      {
            day: 8,
            title: "Delhi Sightseeing & International Departure",
            description: "After breakfast, spend your remaining hours exploring the tranquil gardens of Humayun's Tomb or the Lotus Temple. Your private driver provides seamless, timely transit to Delhi International Airport in time for your return international flight."
      }
],
    inclusions: [
      'Private air-conditioned car for all transfers in Delhi, Agra, and Varanasi',
      'Experienced chauffeur and all road transport expenses included',
      'Private boat rides in Varanasi at sunrise and sunset for Aarti',
      '24/7 dedicated WhatsApp concierge support'
    ],
    exclusions: ['Domestic flights (Delhi-Varanasi-Delhi)', 'Hotels and meals', 'Monument entrance fees'],
    faqs: [
      {
            q: "How do we travel between Agra and Varanasi?",
            a: "We recommend a quick 1.5-hour direct flight from Delhi to Varanasi, or the comfortable modern daytime Vande Bharat Express train. Your private chauffeur handles all station/airport transfers seamlessly."
      },
      {
            q: "Are boat rides on the Ganges in Varanasi private or shared?",
            a: "All boat excursions included in our tours are 100% private. You have an exclusive rowing or motor boat for both the dawn ghats cruise and the evening Ganga Aarti fire ceremony."
      },
      {
            q: "Is Varanasi safe for international travelers and solo female tourists?",
            a: "Yes, Varanasi is deeply welcoming and spiritual. Having a dedicated private driver and vetted local coordinator ensures you navigate the bustling ghats with complete comfort and peace of mind."
      }
],
    rating: 4.92,
    reviewsCount: 92
  },
  {
    slug: 'same-day-agra-mathura-vrindavan-tour-by-car',
    legacyUrl: 'same-day-agra-mathura-vrindavan-tour-by-car.html',
    title: 'Same Day Agra Taj Mahal by Private Car',
    italianTitle: 'Same Day Agra Taj Mahal by Private Car',
    subtitle: 'Early morning departure from Delhi via Yamuna Expressway: Taj Mahal, Agra Fort & evening return',
    duration: '1 Day (12-14 Hours)',
    days: 1,
    nights: 0,
    priceEUR: 85,
    priceNote: 'total rate for entire private vehicle (1-3 persons)',
    category: 'bestseller',
    image: '/images/tour/taj-mahal.webp',
    route: ['Delhi', 'Yamuna Expressway', 'Agra Taj Mahal', 'Agra Fort', 'Delhi'],
    routeString: 'Delhi · Agra Taj Mahal · Agra Fort · Delhi',
    overview: "The perfect excursion for travelers short on time in Delhi who refuse to miss the greatest wonder of the world. Enjoy direct pickup from your hotel or Delhi Airport at 06:00 AM, a smooth 3-hour journey on the Yamuna Expressway, comprehensive exploration of the Taj Mahal and Agra Fort, and a relaxed return to Delhi by evening.",
    highlights: [
      'Door-to-door pickup and return at your hotel or Delhi Airport',
      'Rapid, comfortable transit along the modern 6-lane Yamuna Expressway',
      'Comprehensive visits to the Taj Mahal and Agra Fort without rush',
      'Optional spiritual stopover in Mathura or Vrindavan on the return drive',
      'Exclusive vehicle and dedicated chauffeur with zero rigid group tour schedules'
    ],
    itinerary: [
      { day: 1, title: '06:00 AM - Delhi Pickup & Drive to Agra', description: 'Chauffeur meets you at your Delhi accommodation in a sanitized AC sedan or SUV. Smooth highway journey along the Yamuna Expressway.' },
      { day: 1, title: '09:30 AM - Arrival in Agra & Taj Mahal Tour', description: 'Enter the Taj Mahal complex. Marvel at the symmetry and craftsmanship of the white marble mausoleum and capture memorable photos.' },
      { day: 1, title: '12:30 PM - Lunch & Agra Fort Exploration', description: 'Lunch at a recommended local restaurant, followed by a guided tour of the massive red sandstone Agra Fort, historic seat of the Mughal emperors.' },
      { day: 1, title: '04:00 PM - Return Drive to Delhi', description: 'Depart Agra for Delhi with estimated arrival by 07:30 PM. Drop-off directly at your hotel or airport terminal.' }
    ],
    inclusions: [
      'Private air-conditioned car for the entire day',
      'Licensed professional English-speaking chauffeur',
      'All Yamuna Expressway tolls, fuel, state border permits, and parking charges',
      'Complimentary chilled bottled water on board'
    ],
    exclusions: ['Entrance tickets to the Taj Mahal and Agra Fort', 'Meals and personal expenses'],
    faqs: [
      { q: 'Is the Taj Mahal open every day?', a: 'Important note: The Taj Mahal is CLOSED every Friday for prayers. It is open on all other days of the week.' }
    ],
    rating: 4.97,
    reviewsCount: 142
  },
  {
    slug: 'jodhpur-jaisalmer-tour-package',
    legacyUrl: 'jodhpur-jaisalmer-tour-package.html',
    title: 'Jodhpur & Jaisalmer Desert Safari Tour',
    italianTitle: 'Jodhpur & Jaisalmer Desert Safari Tour',
    subtitle: 'The Blue City & The Golden City: towering hill fortresses, desert dunes & starlit nights',
    duration: '5 Days / 4 Nights',
    days: 5,
    nights: 4,
    priceEUR: 360,
    priceNote: 'rate per private vehicle (1-3 persons)',
    category: 'rajasthan',
    image: '/images/tour/jaisalmer.webp',
    route: ['Jodhpur', 'Osian', 'Jaisalmer', 'Sam Dunes', 'Jodhpur'],
    routeString: 'Jodhpur · Osian · Jaisalmer · Sam Dunes · Jodhpur',
    overview: "A spectacular expedition into the western reaches of Rajasthan. From the sheer ramparts of Mehrangarh Fort to the ancient desert temple oasis of Osian, leading to the living golden sandstone citadel of Jaisalmer, camel treks across Sam Dunes, and live folk music under the starlit desert sky.",
    highlights: [
      'Sunset camel trek across the undulating Sam Sand Dunes in Jaisalmer',
      'Exploration of the UNESCO living Golden Fort and ornate Patwon Haveli',
      'Tour of Mehrangarh Fort and walking through the indigo alleys of Jodhpur',
      'Visit to the 8th-century Jain and Hindu desert temples at Osian'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Jodhpur (The Blue City) & Mehrangarh Fort Ramparts",
            description: "Meet your private chauffeur at Jodhpur Airport or Railway Station. Check in to your heritage hotel and begin your exploration of the Blue City at Mehrangarh Fort, towering 400 feet above the indigo-washed houses. Visit the white marble royal cenotaph of Jaswant Thada and stroll through the vibrant Clock Tower spice market."
      },
      {
            day: 2,
            title: "Jodhpur to Jaisalmer via Ancient Osian Desert Temples",
            description: "Embark on a scenic highway drive through the Thar Desert aboard your air-conditioned private vehicle. Stop at the ancient 8th-century temple oasis of Osian to admire intricately carved Hindu and Jain architecture. Continue toward the Golden City of Jaisalmer, pausing at Bada Bagh royal cenotaphs for a radiant desert sunset photo."
      },
      {
            day: 3,
            title: "Jaisalmer Living Fort Citadel & Sam Sand Dunes Luxury Camp",
            description: "Morning walking tour inside the UNESCO World Heritage Jaisalmer Fort (Sonar Qila), one of the world's few living forts where locals still reside. Marvel at the delicate stone filigree of Patwon Ki Haveli and Salim Singh Ki Haveli. In the afternoon, your driver whisks you to the undulating golden sands of Sam for a camel safari, sunset dune photography, and live Kalbelia folk dances around a campfire."
      },
      {
            day: 4,
            title: "Kuldhara Ghost Village & Scenic Return to Jodhpur",
            description: "After breakfast amidst the dunes, visit the mysterious abandoned 13th-century ghost village of Kuldhara. Relax aboard your private vehicle on the smooth highway drive back to Jodhpur. In the evening, explore Toorji Ka Jhalra stepwell and enjoy rooftop dining overlooking the illuminated ramparts of Mehrangarh Fort."
      },
      {
            day: 5,
            title: "Umaid Bhawan Palace & Jodhpur Departure",
            description: "Visit the grand Art Deco marvel of Umaid Bhawan Palace, one of the world's largest private royal residences, housing a museum of vintage cars and royal artifacts. Your private chauffeur provides direct transfer to Jodhpur Airport or Railway Station for your onward journey."
      }
],
    inclusions: ['Private car and dedicated chauffeur for the entire circuit', 'All fuel, highway tolls, and parking included', '24/7 dedicated WhatsApp support'],
    exclusions: ['Hotel and desert camp accommodations', 'Meals and entrance fees'],
    faqs: [
      {
            q: "What type of accommodation is provided in Sam Sand Dunes?",
            a: "Our desert safaris feature luxury Swiss cottage tents equipped with comfortable beds, electricity, air-cooling, attached modern western bathrooms, and 24/7 security."
      },
      {
            q: "Can we extend this tour to include Udaipur?",
            a: "Yes, 100%! We can easily customize this itinerary into a 7-day circuit covering Jodhpur, Jaisalmer, Ranakpur Jain Temple, and lakeside Udaipur with private chauffeur."
      },
      {
            q: "What is the road condition between Jodhpur and Jaisalmer?",
            a: "The highways between Jodhpur and Jaisalmer are smooth, modern, and scenic national highways, making the 4 to 5-hour drive comfortable and relaxing in our air-conditioned vehicles."
      }
],
    rating: 4.94,
    reviewsCount: 76
  },
  {
    slug: 'pushkar-with-golden-triangle-tour-package',
    legacyUrl: 'pushkar-with-golden-triangle-tour-package.html',
    title: 'Pushkar with Golden Triangle Tour',
    italianTitle: 'Pushkar with Golden Triangle Tour',
    subtitle: 'Delhi, Agra, Jaipur & the sacred oasis of Pushkar with its pilgrimage lake and rare Brahma Temple',
    duration: '7 Days / 6 Nights',
    days: 7,
    nights: 6,
    priceEUR: 460,
    priceNote: 'rate per private vehicle',
    category: 'spiritual',
    image: '/images/tour/5.webp',
    route: ['Delhi', 'Agra', 'Fatehpur Sikri', 'Jaipur', 'Pushkar', 'Delhi'],
    routeString: 'Delhi · Agra · Fatehpur Sikri · Jaipur · Pushkar · Delhi',
    overview: "A natural spiritual expansion of the classic Golden Triangle. After exploring the imperial monuments of Delhi, the Taj Mahal in Agra, and the royal forts of Jaipur, continue to the mystical desert oasis of Pushkar, celebrated worldwide for the serene meditative ambiance of its 52 holy bathing ghats and the sacred temple of Lord Brahma.",
    highlights: [
      'Peaceful morning walk along the 52 holy bathing ghats of Pushkar Lake',
      'Visit to the rare and ancient temple dedicated to Creator deity Lord Brahma',
      'Sunrise at the Taj Mahal and elephant ramparts of Amber Fort in Jaipur',
      'Scenic, comfortable highway travel with your private chauffeur'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi & Private Meet-and-Greet",
            description: "Meet your private chauffeur at Delhi International Airport (DEL) with a warm welcome. Transfer to your hotel in an air-conditioned executive vehicle. Afternoon orientation drive around Central Delhi, viewing India Gate and Parliament House."
      },
      {
            day: 2,
            title: "Historic Delhi Sightseeing & Drive to Agra",
            description: "Morning tour of Old Delhi: Jama Masjid, Raj Ghat memorial, and Chandni Chowk bazaars. In the afternoon, enjoy a relaxing highway drive along the Yamuna Expressway to Agra. Sunset photography of the Taj Mahal from Mehtab Bagh gardens."
      },
      {
            day: 3,
            title: "Sunrise Taj Mahal, Fatehpur Sikri & Drive to Jaipur",
            description: "Early morning entrance to the Taj Mahal to admire the white marble wonder at dawn. Return for breakfast, tour the red sandstone Agra Fort, and continue toward Jaipur with a stop at the UNESCO Mughal ghost city of Fatehpur Sikri and the Abhaneri stepwell."
      },
      {
            day: 4,
            title: "Jaipur Pink City & Amber Fort Ramparts",
            description: "Ascend the hilltop Amber Fort, photograph the intricate facade of Hawa Mahal, and explore City Palace museum and Jantar Mantar observatory. Evening free for shopping in Jaipur's celebrated artisan markets for block-printed linens and blue pottery."
      },
      {
            day: 5,
            title: "Jaipur to Sacred Pushkar Oasis",
            description: "Scenic 3-hour morning drive in your private car to the holy desert town of Pushkar. Check in to your hotel and spend the afternoon walking along the 52 sacred bathing ghats of Pushkar Lake. Climb or take the cable car to Savitri Temple for a panoramic sunset over the desert hills."
      },
      {
            day: 6,
            title: "Pushkar Brahma Temple, Desert Rose Farms & Drive toward Delhi",
            description: "Visit the rare and revered 14th-century Lord Brahma Temple, one of the few shrines dedicated to the Creator deity in the world. Walk through Pushkar's famous rose gardens producing pure rose water and essential oils. In the afternoon, relax aboard your private vehicle on the return drive toward Delhi."
      },
      {
            day: 7,
            title: "Delhi Sightseeing & Airport Drop-off",
            description: "Spend your final morning visiting Humayun's Tomb or the peaceful Lotus Temple. Your private driver ensures timely and luggage-assisted transfer directly to Delhi International Airport for your departure."
      }
],
    inclusions: ['Private vehicle and dedicated chauffeur for all 7 days', 'All fuel, tolls, and parking included', '24/7 dedicated WhatsApp support'],
    exclusions: ['Hotels, monument tickets, and meals'],
    faqs: [
      {
            q: "What makes Pushkar so unique compared to other cities in Rajasthan?",
            a: "Pushkar is one of India's most sacred pilgrimage sites, famous for its holy lake surrounded by 52 ghats, the rare Brahma Temple, vibrant spiritual culture, and tranquil, slow-paced desert atmosphere."
      },
      {
            q: "Are alcohol and non-vegetarian food available in Pushkar?",
            a: "Because Pushkar is a strictly sacred temple town, all meat, fish, and alcohol are banned within municipal limits. The town offers world-class vegetarian and vegan international cuisines in charming rooftop cafes."
      },
      {
            q: "Can this tour be combined with the annual Pushkar Camel Fair?",
            a: "Yes! If you travel in October or November during the Kartik Purnima full moon, we coordinate your visit to witness the world's greatest camel and livestock trading fair."
      }
],
    rating: 4.91,
    reviewsCount: 88
  },
  {
    slug: 'taj-and-tiger-an-encounter-tour-package',
    legacyUrl: 'taj-and-tiger-an-encounter-tour-package.html',
    title: 'Taj Mahal & Tiger Safari Tour',
    italianTitle: 'Taj Mahal & Tiger Safari Tour',
    subtitle: 'The splendor of the Taj Mahal combined with thrilling 4x4 open-top jeep safaris in Ranthambore',
    duration: '7 Days / 6 Nights',
    days: 7,
    nights: 6,
    priceEUR: 490,
    priceNote: 'rate per private vehicle (safari permits arranged on request)',
    category: 'wildlife',
    image: '/images/tour/tour-208.webp',
    route: ['Delhi', 'Agra', 'Ranthambore National Park', 'Jaipur', 'Delhi'],
    routeString: 'Delhi · Agra · Ranthambore · Jaipur · Delhi',
    overview: "The ideal blend of Mughal architecture, regal Rajput palaces, and exhilarating wilderness. After the wonders of the Taj Mahal in Agra, journey into the historic royal hunting preserves of Ranthambore to track Royal Bengal tigers, leopards, and diverse wildlife in their natural jungle habitat.",
    highlights: [
      'Dual open 4x4 jeep safaris in the core zones of Ranthambore National Park',
      'High probability of sighting Royal Bengal tigers, sloth bears, and marsh crocodiles',
      'Sunrise at the Taj Mahal in Agra with your private chauffeur',
      'Explore the palaces and hill forts of the Pink City of Jaipur'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi & Introductory City Exploration",
            description: "Your private chauffeur welcomes you at Delhi Airport (DEL) with a personalized placard. Enjoy a smooth transfer to your hotel and an introductory afternoon tour of Delhi, visiting the stately India Gate, President's Palace, and the towering 12th-century Qutub Minar."
      },
      {
            day: 2,
            title: "Old Delhi Heritage & Scenic Expressway Journey to Agra",
            description: "Morning exploration of Old Delhi including the grand Jama Masjid and a rickshaw ride through the bustling spice bazaars of Chandni Chowk. Afternoon scenic drive along the Yamuna Expressway in your air-conditioned car to Agra. Evening sunset vista of the Taj Mahal from across the river at Mehtab Bagh."
      },
      {
            day: 3,
            title: "Sunrise Taj Mahal, Agra Fort & Drive to Ranthambore Tiger Reserve",
            description: "Witness the Taj Mahal at dawn as the first morning light illuminates its Makrana white marble facade. Explore Agra Fort's grand halls and pavilions. Later, relax on the scenic highway journey toward Sawai Madhopur, the gateway to Ranthambore National Park, checking in to your wildlife jungle resort."
      },
      {
            day: 4,
            title: "Ranthambore Jungle Safari Drives: Tracking Royal Bengal Tigers",
            description: "Embark on an exhilarating dawn 4x4 open-top Gypsy safari deep into the dense deciduous forests of Ranthambore, guided by an authorized naturalist and park ranger. Return to your resort for breakfast and relaxation. Afternoon second safari game drive tracking tigers, leopards, sloth bears, sambar deer, and marsh crocodiles around historic park lakes."
      },
      {
            day: 5,
            title: "Ranthambore to Jaipur (The Pink City) via Rural Countryside",
            description: "Enjoy a leisurely morning breakfast at your jungle lodge before a comfortable drive to Jaipur in your private vehicle. En route, observe rural Rajasthani agricultural life and camel carts. Arrive in Jaipur with an evening visit to the luminous Birla Temple."
      },
      {
            day: 6,
            title: "Jaipur: Amber Fort Ramparts & Royal City Palace",
            description: "Full day exploring Rajasthan's royal capital. Ascend the majestic ramparts of Amber Fort, take photos at the honeycomb facade of Hawa Mahal (Palace of Winds), and tour the Maharaja's City Palace and Jantar Mantar UNESCO astronomical observatory. Evening free to explore colorful textile and gemstone bazaars."
      },
      {
            day: 7,
            title: "Jaipur to Delhi & International Airport Transfer",
            description: "After breakfast, relax on the smooth return expressway drive back to Delhi. Your private chauffeur drops you off directly at Delhi International Airport in time for your flight home, concluding an unforgettable monuments and wildlife expedition."
      }
],
    inclusions: ['Private air-conditioned car and chauffeur for all journeys', 'Fuel, highway tolls, and parking fees', '24/7 dedicated concierge assistance'],
    exclusions: ['Government safari permits (early booking recommended)', 'Hotels and meals'],
    faqs: [
      {
            q: "When is Ranthambore National Park open for tiger safaris?",
            a: "Ranthambore National Park is open from October 1st to June 30th each year. Peak tiger sighting months are November through May when animals frequent water holes."
      },
      {
            q: "What vehicle is used for the jungle tiger safaris?",
            a: "We arrange 6-seater open-top 4x4 Maruti Suzuki Gypsies accompanied by government-certified naturalists and park trackers for the best wildlife photography angles."
      },
      {
            q: "Is advance booking required for Ranthambore safari permits?",
            a: "Yes! Ranthambore tiger safari permits are strictly regulated by the Rajasthan Forest Department and sell out months in advance. We handle complete advance permit reservations for all our guests."
      }
],
    rating: 4.96,
    reviewsCount: 110
  },
  {
    slug: 'rajasthan-heritage-tour-package',
    legacyUrl: 'rajasthan-heritage-tour-package.html',
    title: 'Royal Heritage Tour of Rajasthan',
    italianTitle: 'Royal Heritage Tour of Rajasthan',
    subtitle: 'Delhi, Agra, Jaipur, Jodhpur & Udaipur with authentic heritage palace and haveli stays',
    duration: '10 Days / 9 Nights',
    days: 10,
    nights: 9,
    priceEUR: 680,
    priceNote: 'total rate for entire private vehicle',
    category: 'heritage',
    image: '/images/tour/8.webp',
    route: ['Delhi', 'Agra', 'Jaipur', 'Pushkar', 'Jodhpur', 'Ranakpur', 'Udaipur', 'Delhi'],
    routeString: 'Delhi · Agra · Jaipur · Pushkar · Jodhpur · Ranakpur · Udaipur · Delhi',
    overview: "An itinerary crafted for admirers of history, royal architecture, and aristocratic charm. Traverse the three iconic crown cities of Rajasthan (Pink Jaipur, Blue Jodhpur, and White Udaipur), exploring grand palaces and staying in atmospheric heritage havelis.",
    highlights: [
      'Exploration of the finest royal palaces and hill forts of North India',
      'The breathtaking 1,444 carved marble pillars of Ranakpur Jain Temple',
      'Private sunset boat cruise on Lake Pichola in romantic Udaipur',
      'Executive private vehicle with courteous English-speaking chauffeur'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi & Historic Orientation",
            description: "Your private chauffeur meets you at Delhi Airport (DEL) with personalized signboard assistance. Transfer to hotel and introductory tour of New Delhi, including India Gate and Qutub Minar."
      },
      {
            day: 2,
            title: "Delhi to Agra & Sunset over the Taj Mahal",
            description: "Morning tour of Old Delhi (Jama Masjid and Chandni Chowk). Afternoon expressway drive to Agra in your comfortable air-conditioned car. Sunset vista over the Taj Mahal from Mehtab Bagh across the Yamuna River."
      },
      {
            day: 3,
            title: "Sunrise Taj Mahal, Fatehpur Sikri & Drive to Jaipur",
            description: "Dawn visit to the Taj Mahal at sunrise. Explore Agra Fort's royal halls. Scenic drive to the Pink City of Jaipur, stopping en route at the ancient 1,000-year-old Chand Baori stepwell in Abhaneri and the imperial ruins of Fatehpur Sikri."
      },
      {
            day: 4,
            title: "Jaipur: Amber Fort & Palaces of the Maharajas",
            description: "Full day in Jaipur: ascend the ramparts of Amber Fort, photograph the iconic Palace of Winds (Hawa Mahal), and tour the royal City Palace museum and Jantar Mantar astronomical observatory."
      },
      {
            day: 5,
            title: "Jaipur to Sacred Pushkar Oasis",
            description: "Scenic morning highway drive to the holy town of Pushkar. Stroll along the 52 sacred lake ghats and visit the rare 14th-century temple of Lord Brahma. Sunset views from the hilltop Savitri Temple."
      },
      {
            day: 6,
            title: "Pushkar to Jodhpur (The Blue City)",
            description: "Drive through the desert landscape to Jodhpur in your private vehicle. Check in to your hotel and spend the afternoon exploring the blue-painted lanes of Brahmapuri and the bustling Clock Tower market."
      },
      {
            day: 7,
            title: "Jodhpur Mehrangarh Fort & Drive to Udaipur via Ranakpur",
            description: "Morning visit to the colossal Mehrangarh Fort and Jaswant Thada marble cenotaph. Scenic mountain drive through the Aravalli hills to Udaipur, stopping to marvel at the 1,444 intricately carved marble pillars of Ranakpur Jain Temple."
      },
      {
            day: 8,
            title: "Udaipur: City of Lakes & Lake Pichola Cruise",
            description: "Explore the lakeside City Palace complex, Jagdish Temple, and the ornamental gardens of Saheliyon Ki Bari. In the late afternoon, embark on a private sunset boat ride on Lake Pichola with breathtaking views of the Lake Palace."
      },
      {
            day: 9,
            title: "Udaipur Cultural Exploration & Monsoon Palace",
            description: "Visit the hilltop Monsoon Palace (Sajjangarh) offering panoramic views over the lakes and hills of Mewar. Afternoon free for local artisan handicraft and miniature painting workshops."
      },
      {
            day: 10,
            title: "Udaipur Departure / Return Transit to Delhi",
            description: "After breakfast, your private chauffeur transfers you to Udaipur Airport for a quick flight to Delhi or coordinates your scenic return highway journey according to your travel preferences."
      }
],
    inclusions: ['Private vehicle and chauffeur for the full 10-day tour', 'All road taxes, tolls, and fuel included', 'Continuous English-speaking concierge support'],
    exclusions: ['Hotel stays, monument tickets, and personal meals'],
    faqs: [
      {
            q: "Is 10 days sufficient to see the best of Rajasthan?",
            a: "Yes! This 10-day circuit is our most popular express itinerary because it perfectly covers the Golden Triangle (Delhi, Agra, Jaipur) along with the royal highlights of Pushkar, Jodhpur, and Udaipur."
      },
      {
            q: "What vehicle is best for this 10-day tour?",
            a: "For couples and solo travelers, a comfortable sedan (Toyota Etios / Dzire) is excellent. For families or travelers with multiple suitcases, we strongly recommend the Toyota Innova Crysta for premium suspension and space."
      },
      {
            q: "Can we modify the stops along the route?",
            a: "Yes, 100%. All our chauffeur tours are private and customizable. You can request additional stops at local stepwells, countryside cafes, or craft villages anytime."
      }
],
    rating: 4.95,
    reviewsCount: 95
  },
  {
    slug: 'arena-of-maharaja-tour-package',
    legacyUrl: 'arena-of-maharaja-tour-package.html',
    title: 'Arena of Maharaja Grand Tour',
    italianTitle: 'Arena of Maharaja Grand Tour',
    subtitle: 'The complete 16-day royal expedition: Shekhawati, Bikaner, Jaisalmer, Jodhpur, Mount Abu, Udaipur, Pushkar & Jaipur',
    duration: '16 Days / 15 Nights',
    days: 16,
    nights: 15,
    priceEUR: 990,
    priceNote: 'rate per private vehicle',
    category: 'rajasthan',
    image: '/images/tour/1.webp',
    route: ['Delhi', 'Mandawa', 'Bikaner', 'Jaisalmer', 'Jodhpur', 'Mount Abu', 'Udaipur', 'Pushkar', 'Jaipur', 'Agra', 'Delhi'],
    routeString: 'Delhi · Mandawa · Bikaner · Jaisalmer · Jodhpur · Mount Abu · Udaipur · Pushkar · Jaipur · Agra · Delhi',
    overview: "The most comprehensive and spectacular grand overland crossing of North-Western India. Missing nothing: from the golden Thar Desert to Rajasthan's only hill station at Mount Abu, the tiger forests of Ranthambore, and the sublime Taj Mahal.",
    highlights: [
      'Comprehensive 360-degree circuit of royal Rajasthan',
      'Mount Abu hill station featuring the exquisite Dilwara marble temples',
      'Overnight desert camp and camel trek at Sam Sand Dunes in Jaisalmer',
      'Supreme day-to-day flexibility with your trusted private chauffeur'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi",
            description: "Private meet-and-greet at Delhi Airport (DEL) by your chauffeur. Hotel transfer and introductory drive around New Delhi."
      },
      {
            day: 2,
            title: "Delhi to Shekhawati (Mandawa)",
            description: "Drive into the open-air art gallery of Shekhawati. Walking tour of painted merchant havelis adorned with vibrant frescoes."
      },
      {
            day: 3,
            title: "Mandawa to Bikaner",
            description: "Desert drive to Bikaner; visit the unconquered Junagarh Fort, Lalgarh Palace, and the camel research farm."
      },
      {
            day: 4,
            title: "Bikaner to Jaisalmer (The Golden City)",
            description: "Highway journey through the Thar Desert to Jaisalmer, stopping at Karni Mata Temple. Sunset over Bada Bagh royal cenotaphs."
      },
      {
            day: 5,
            title: "Jaisalmer Fort & Sam Sand Dunes Safari",
            description: "Explore Jaisalmer Living Fort and Patwon Ki Haveli. Afternoon camel safari and desert tent camp stay in Sam Sand Dunes."
      },
      {
            day: 6,
            title: "Jaisalmer to Jodhpur (The Blue City)",
            description: "Drive to Jodhpur; visit the colossal Mehrangarh Fort, Jaswant Thada, and blue Brahmin alleys."
      },
      {
            day: 7,
            title: "Jodhpur to Mount Abu via Ranakpur",
            description: "Drive through Aravalli hills, marveling at the 1,444 marble pillars of Ranakpur Jain Temple before ascending Mount Abu."
      },
      {
            day: 8,
            title: "Mount Abu to Udaipur",
            description: "Visit Dilwara Jain Temples and Nakki Lake, then descend into the romantic City of Lakes (Udaipur)."
      },
      {
            day: 9,
            title: "Udaipur City of Lakes",
            description: "City Palace, Jagdish Temple, Saheliyon Ki Bari, and a private sunset boat cruise on Lake Pichola."
      },
      {
            day: 10,
            title: "Udaipur to Chittorgarh Fort",
            description: "Drive to Chittorgarh to explore Asia's largest fortress of Rajput honor, Vijay Stambha, and Padmini Palace."
      },
      {
            day: 11,
            title: "Chittorgarh to Bundi",
            description: "Explore the painted Taragarh Fort, ancient stepwells (baoris), and royal palace murals of Bundi."
      },
      {
            day: 12,
            title: "Bundi to Ranthambore Tiger Reserve",
            description: "Drive to Sawai Madhopur; check in to your wildlife resort and prepare for national park safaris."
      },
      {
            day: 13,
            title: "Ranthambore Jungle Safaris",
            description: "Morning and afternoon 4x4 open Gypsy safaris tracking Royal Bengal Tigers and wildlife in Ranthambore."
      },
      {
            day: 14,
            title: "Ranthambore to Jaipur",
            description: "Scenic drive to Jaipur; afternoon at leisure exploring local bazaars and Birla Temple."
      },
      {
            day: 15,
            title: "Jaipur Pink City & Amber Fort",
            description: "Full day: Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar UNESCO observatory."
      },
      {
            day: 16,
            title: "Jaipur to Agra & Return to Delhi",
            description: "Drive to Agra via Fatehpur Sikri; visit the Taj Mahal and Agra Fort, then expressway drive back to Delhi Airport."
      }
],
    inclusions: ['Exclusive vehicle with dedicated chauffeur for all 16 days', 'All transport and road expenses included', '24/7 dedicated WhatsApp support'],
    exclusions: ['Hotels, meals, and monument tickets'],
    faqs: [
      {
            q: "What makes the 16-Day Arena of Maharaja tour unique?",
            a: "This grand expedition covers the entire royal state of Rajasthan: desert dunes, hill stations, lake palaces, tiger safaris, and World Wonder monuments in complete comfort with a private chauffeur."
      },
      {
            q: "Can the pace of this 16-day tour be relaxed with extra nights?",
            a: "Yes, 100%. We can easily add extra days in Udaipur, Jaisalmer, or Jaipur to match your exact pace and holiday preferences."
      }
],
    rating: 4.99,
    reviewsCount: 71
  },
  {
    slug: 'desert-circuit-tour-package',
    legacyUrl: 'desert-circuit-tour-package.html',
    title: 'Desert Circuit Rajasthan Tour',
    italianTitle: 'Desert Circuit Rajasthan Tour',
    subtitle: 'Delhi, Bikaner, Jaisalmer, Jodhpur & Jaipur among historic caravan forts and golden sands',
    duration: '9 Days / 8 Nights',
    days: 9,
    nights: 8,
    priceEUR: 610,
    priceNote: 'rate per private vehicle',
    category: 'rajasthan',
    image: '/images/tour/2.webp',
    route: ['Delhi', 'Bikaner', 'Jaisalmer', 'Jodhpur', 'Jaipur', 'Delhi'],
    routeString: 'Delhi · Bikaner · Jaisalmer · Jodhpur · Jaipur · Delhi',
    overview: "A journey dedicated to the silence, mystique, and vast horizons of the Great Thar Desert. Explore fortified sandstone citadels, rich desert nomad folklore, and historic silk-and-spice trading posts in royal comfort.",
    highlights: [
      'Camel safari across Sam Sand Dunes in Jaisalmer',
      'Junagarh Fort and camel research center in Bikaner',
      'Mehrangarh Fort in Jodhpur and Amber Fort in Jaipur'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi & Heritage Welcome",
            description: "Meet your private chauffeur at Delhi International Airport. Transfer to your hotel and enjoy an introductory drive to India Gate and Connaught Place."
      },
      {
            day: 2,
            title: "Delhi to Shekhawati (Mandawa)",
            description: "Morning scenic drive to Mandawa in the semi-arid Shekhawati region. Walking tour of painted merchant havelis covered with colorful historic frescoes."
      },
      {
            day: 3,
            title: "Mandawa to Bikaner (Camel Country)",
            description: "Drive across desert highways to Bikaner. Tour the magnificent red sandstone Junagarh Fort and the National Camel Breeding Farm."
      },
      {
            day: 4,
            title: "Bikaner to Jaisalmer (The Golden City)",
            description: "Journey deep into the Thar Desert. Visit Karni Mata Temple in Deshnoke, continuing to Jaisalmer to watch the sunset at Bada Bagh cenotaphs."
      },
      {
            day: 5,
            title: "Jaisalmer Fort & Sam Dunes Desert Safari",
            description: "Explore the living golden citadel of Jaisalmer Fort and Patwon Ki Haveli. In the afternoon, transfer to Sam Sand Dunes for camel riding and a cultural folk music camp."
      },
      {
            day: 6,
            title: "Jaisalmer to Jodhpur (The Blue City)",
            description: "Scenic highway drive to Jodhpur. Tour the towering Mehrangarh Fort and walk through the blue Brahmin streets of the Old City."
      },
      {
            day: 7,
            title: "Jodhpur to Jaipur via Pushkar",
            description: "Drive toward Jaipur, stopping at the sacred oasis of Pushkar to visit the holy lake and rare Brahma Temple. Evening arrival in the Pink City."
      },
      {
            day: 8,
            title: "Jaipur Pink City & Amber Fort",
            description: "Ascend the ramparts of Amber Fort, photograph Hawa Mahal, and explore City Palace museum and Jantar Mantar UNESCO observatory."
      },
      {
            day: 9,
            title: "Jaipur to Delhi & Departure",
            description: "After breakfast, relax on the expressway journey back to Delhi. Direct transfer to Delhi International Airport for your departure."
      }
],
    inclusions: ['Private car with chauffeur and all road travel costs included'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
            q: "What is the best vehicle for the Desert Circuit tour?",
            a: "We recommend the Toyota Innova Crysta for this 9-day desert journey, as it offers superior suspension, high road clearance, and spacious air-conditioned comfort on desert highways."
      },
      {
            q: "Are roadside stops and photography breaks allowed?",
            a: "Yes, 100%. All tours are private and tailor-made. You can ask your chauffeur to pause at any scenic point, roadside cafe, or local handicraft workshop."
      }
],
    rating: 4.9,
    reviewsCount: 65
  },
  {
    slug: 'exotic-rajasthan-tour-package',
    legacyUrl: 'exotic-rajasthan-tour-package.html',
    title: 'Exotic Rajasthan Heritage Circuit',
    italianTitle: 'Exotic Rajasthan Heritage Circuit',
    subtitle: 'Delhi, Jaipur, Pushkar, Udaipur, Jodhpur & Agra in total elegance and comfort',
    duration: '11 Days / 10 Nights',
    days: 11,
    nights: 10,
    priceEUR: 730,
    priceNote: 'rate per private vehicle',
    category: 'heritage',
    image: '/images/tour/4.webp',
    route: ['Delhi', 'Jaipur', 'Pushkar', 'Udaipur', 'Jodhpur', 'Agra', 'Delhi'],
    routeString: 'Delhi · Jaipur · Pushkar · Udaipur · Jodhpur · Agra · Delhi',
    overview: "A balanced, richly nuanced journey designed for travelers seeking India's most celebrated landscapes: Udaipur's shimmering lakes, Jodhpur's blue cupolas, and the ethereal marble symmetry of the Taj Mahal.",
    highlights: [
      'Romantic Udaipur with private boat cruise on Lake Pichola',
      'Sacred pilgrimage temples of Pushkar and Ranakpur',
      'Sunrise Taj Mahal in Agra and Amber Fort in Jaipur'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi",
            description: "Private airport meet-and-greet with your chauffeur. Hotel transfer and orientation drive."
      },
      {
            day: 2,
            title: "Delhi to Mandawa",
            description: "Drive into Shekhawati; walking tour of open-air frescoed merchant havelis."
      },
      {
            day: 3,
            title: "Mandawa to Bikaner",
            description: "Scenic desert drive; explore the unconquered Junagarh Fort and old markets."
      },
      {
            day: 4,
            title: "Bikaner to Jaisalmer",
            description: "Drive across the Thar Desert to the golden citadel of Jaisalmer; sunset at Bada Bagh."
      },
      {
            day: 5,
            title: "Jaisalmer Fort & Sam Sand Dunes",
            description: "Tour Jaisalmer Living Fort, Jain temples, and Patwon Haveli. Evening camel safari in the dunes."
      },
      {
            day: 6,
            title: "Jaisalmer to Jodhpur",
            description: "Drive to the Blue City; tour the colossal Mehrangarh Fort and Jaswant Thada cenotaph."
      },
      {
            day: 7,
            title: "Jodhpur to Udaipur via Ranakpur",
            description: "Scenic drive through Aravalli hills, visiting the 1,444 marble pillars of Ranakpur Jain Temple."
      },
      {
            day: 8,
            title: "Udaipur City of Lakes",
            description: "Explore City Palace, Jagdish Temple, and enjoy a private sunset boat ride on Lake Pichola."
      },
      {
            day: 9,
            title: "Udaipur to Pushkar",
            description: "Drive to sacred Pushkar; visit the 52 holy lake ghats and Brahma Temple."
      },
      {
            day: 10,
            title: "Pushkar to Jaipur",
            description: "Morning drive to Jaipur; afternoon visiting Amber Fort ramparts and Hawa Mahal."
      },
      {
            day: 11,
            title: "Jaipur to Delhi & Departure",
            description: "Expressway drive back to Delhi; direct transfer to Delhi International Airport."
      }
],
    inclusions: ['Dedicated private car and chauffeur for all 11 days'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
            q: "Is this 11-day tour customizable?",
            a: "Yes, 100%. You can add extra days in Udaipur, swap destinations, or modify departure timings to match your flight schedule."
      },
      {
            q: "Are all highway tolls and driver allowances included?",
            a: "Yes, all fuel, state border transit taxes, expressway tolls, parking fees, and driver lodging allowances are fully covered."
      }
],
    rating: 4.93,
    reviewsCount: 82
  },
  {
    slug: 'forts-&-palaces-tour-package',
    legacyUrl: 'forts-&-palaces-tour-package.html',
    title: 'Forts & Palaces of Rajasthan Tour',
    italianTitle: 'Forts & Palaces of Rajasthan Tour',
    subtitle: 'Delhi, Agra, Jaipur, Chittorgarh, Udaipur & Jodhpur tracing the warrior valor of Rajput kings',
    duration: '10 Days / 9 Nights',
    days: 10,
    nights: 9,
    priceEUR: 690,
    priceNote: 'rate per private vehicle',
    category: 'heritage',
    image: '/images/tour/7.webp',
    route: ['Delhi', 'Agra', 'Jaipur', 'Chittorgarh', 'Udaipur', 'Jodhpur', 'Delhi'],
    routeString: 'Delhi · Agra · Jaipur · Chittorgarh · Udaipur · Jodhpur · Delhi',
    overview: "A journey dedicated to the legendary defensive architecture and imperial palace residences of feudal India. Explore the colossal UNESCO fort of Chittorgarh, the Great Wall ramparts of Kumbhalgarh, and towering Mehrangarh in Jodhpur.",
    highlights: [
      'The colossal hill fort of Chittorgarh (UNESCO World Heritage)',
      'Mehrangarh Fort in Jodhpur and Amber Fort in Jaipur',
      'The red sandstone Agra Fort and the Taj Mahal'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi",
            description: "Chauffeur welcome at Delhi Airport. Transfer to hotel and introductory monument drive."
      },
      {
            day: 2,
            title: "Delhi to Agra & Sunset Taj Mahal",
            description: "Drive via Yamuna Expressway to Agra; explore Agra Fort and view the Taj Mahal from Mehtab Bagh at sunset."
      },
      {
            day: 3,
            title: "Sunrise Taj Mahal, Fatehpur Sikri & Jaipur",
            description: "Sunrise entrance to the Taj Mahal. Drive to Jaipur with stops at Fatehpur Sikri and Chand Baori stepwell."
      },
      {
            day: 4,
            title: "Jaipur Pink City & Amber Fort",
            description: "Full day in Jaipur: Amber Fort, Palace of Winds (Hawa Mahal), City Palace, and Jantar Mantar."
      },
      {
            day: 5,
            title: "Jaipur to Pushkar",
            description: "Drive to sacred Pushkar Lake; visit Brahma Temple and enjoy desert views from Savitri Temple."
      },
      {
            day: 6,
            title: "Pushkar to Jodhpur (The Blue City)",
            description: "Drive to Jodhpur; explore the massive Mehrangarh Fort and the blue Brahmin lanes."
      },
      {
            day: 7,
            title: "Jodhpur to Udaipur via Ranakpur",
            description: "Scenic mountain drive through Aravalli hills with stop at Ranakpur Jain Temple."
      },
      {
            day: 8,
            title: "Udaipur: City of Lakes",
            description: "City Palace complex, Jagdish Temple, and a romantic private boat cruise on Lake Pichola."
      },
      {
            day: 9,
            title: "Udaipur Heritage & Crafts",
            description: "Visit Monsoon Palace and artisan craft markets celebrated for miniature paintings."
      },
      {
            day: 10,
            title: "Udaipur Departure or Delhi Transit",
            description: "Transfer to Udaipur Airport or scenic highway return journey to Delhi."
      }
],
    inclusions: ['Private car with chauffeur for all 10 days'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
            q: "Which forts are included in this tour?",
            a: "This tour covers India's grandest royal fortresses: Agra Fort, Amber Fort in Jaipur, Mehrangarh Fort in Jodhpur, and City Palace in Udaipur."
      },
      {
            q: "Can we book an Innova Crysta for this trip?",
            a: "Yes, our modern Toyota Innova Crysta fleet is available for this entire circuit, providing executive comfort."
      }
],
    rating: 4.92,
    reviewsCount: 78
  },
  {
    slug: 'romantic-rajasthan-tour-package',
    legacyUrl: 'romantic-rajasthan-tour-package.html',
    title: 'Romantic Rajasthan & Lakes Tour',
    italianTitle: 'Romantic Rajasthan & Lakes Tour',
    subtitle: 'Delhi, Agra, Jaipur, Udaipur & Mount Abu: lakeside palaces, candlelit dinners & sunsets',
    duration: '10 Days / 9 Nights',
    days: 10,
    nights: 9,
    priceEUR: 710,
    priceNote: 'rate per private vehicle',
    category: 'heritage',
    image: '/images/tour/6.webp',
    route: ['Delhi', 'Agra', 'Jaipur', 'Udaipur', 'Mount Abu', 'Delhi'],
    routeString: 'Delhi · Agra · Jaipur · Udaipur · Mount Abu · Delhi',
    overview: "Specially designed for couples and honeymooners. An unhurried pace, charming boutique heritage hotels, breathtaking lakeside vistas in Udaipur, and the cool mountain breezes of Mount Abu.",
    highlights: [
      'Private romantic boat cruise on Lake Pichola',
      'Hand-in-hand sunrise viewing at the Taj Mahal',
      'Intimate dining recommendations at panoramic rooftop terraces',
      'Discreet, professional chauffeur on standby at all times'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi",
            description: "Meet your private chauffeur; transfer to hotel and orientation drive around India Gate."
      },
      {
            day: 2,
            title: "Delhi to Agra & Mehtab Bagh Sunset",
            description: "Scenic drive to Agra along Yamuna Expressway; visit Agra Fort and sunset vista of the Taj Mahal."
      },
      {
            day: 3,
            title: "Sunrise Taj Mahal & Drive to Jaipur",
            description: "Sunrise entrance to the Taj Mahal, the monument of eternal love. Drive to Jaipur via Fatehpur Sikri."
      },
      {
            day: 4,
            title: "Jaipur: Amber Fort & Royal Palaces",
            description: "Ascend Amber Fort ramparts, photograph Hawa Mahal, and explore royal City Palace courtyards."
      },
      {
            day: 5,
            title: "Jaipur to Pushkar Oasis",
            description: "Drive to holy Pushkar; walk along sacred lake ghats and witness peaceful evening prayer ceremonies."
      },
      {
            day: 6,
            title: "Pushkar to Jodhpur (The Blue City)",
            description: "Drive to Jodhpur; explore Mehrangarh Fort and enjoy rooftop candlelight dining overlooking the fort."
      },
      {
            day: 7,
            title: "Jodhpur to Udaipur via Ranakpur",
            description: "Drive through Aravalli hills, visiting Ranakpur Jain Temple, arriving in romantic Udaipur."
      },
      {
            day: 8,
            title: "Udaipur: Venice of the East",
            description: "Tour City Palace, Saheliyon Ki Bari, and embark on a private sunset boat ride on Lake Pichola."
      },
      {
            day: 9,
            title: "Romantic Udaipur Day at Leisure",
            description: "Visit Monsoon Palace (Sajjangarh) for sunset vistas and enjoy lakeside cafe dining."
      },
      {
            day: 10,
            title: "Udaipur Departure / Delhi Transfer",
            description: "Transfer to Udaipur Airport or coordinated highway transit to Delhi."
      }
],
    inclusions: ['Executive private vehicle with dedicated chauffeur'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
            q: "Is this tour suitable for couples and honeymooners?",
            a: "Yes, this is our premier romantic circuit, featuring luxury heritage stays, private sunset boat rides in Udaipur, and scenic drives with a private chauffeur."
      }
],
    rating: 4.96,
    reviewsCount: 84
  },
  {
    slug: 'best-of-india-tour-package',
    legacyUrl: 'best-of-india-tour-package.html',
    title: 'Best of India: Golden Triangle, Rajasthan & Goa',
    italianTitle: 'Best of India: Golden Triangle, Rajasthan & Goa',
    subtitle: 'The complete grand tour: Delhi, Agra, Jaipur, Udaipur, Mumbai & tropical beaches of Goa',
    duration: '15 Days / 14 Nights',
    days: 15,
    nights: 14,
    priceEUR: 950,
    priceNote: 'rate for private chauffeured road transfers in North India',
    category: 'bestseller',
    image: '/images/tour/header-1920x1135-10.webp',
    route: ['Delhi', 'Agra', 'Jaipur', 'Udaipur', 'Mumbai', 'Goa'],
    routeString: 'Delhi · Agra · Jaipur · Udaipur · Mumbai · Goa',
    overview: "The ultimate journey for travelers who want to explore the imperial wonders of North India before concluding with pure tropical relaxation under coconut palms and sunny skies in Goa.",
    highlights: [
      'The Golden Triangle and Rajasthan\'s majestic hill fortresses',
      'The vibrant coastal metropolis of Mumbai',
      'Days of peaceful tropical beach relaxation in Goa'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi",
            description: "Airport pickup by private driver and hotel transfer."
      },
      {
            day: 2,
            title: "Delhi Sightseeing",
            description: "Tour Old and New Delhi: Jama Masjid, Chandni Chowk, Qutub Minar, and India Gate."
      },
      {
            day: 3,
            title: "Delhi to Agra",
            description: "Expressway drive to Agra; visit Agra Fort and sunset view of the Taj Mahal."
      },
      {
            day: 4,
            title: "Taj Mahal to Jaipur via Fatehpur Sikri",
            description: "Sunrise Taj Mahal, followed by drive to Jaipur stopping at Fatehpur Sikri."
      },
      {
            day: 5,
            title: "Jaipur Pink City",
            description: "Full day in Jaipur: Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar."
      },
      {
            day: 6,
            title: "Jaipur to Pushkar",
            description: "Drive to sacred Pushkar Lake; visit Brahma Temple and desert sunset point."
      },
      {
            day: 7,
            title: "Pushkar to Jodhpur",
            description: "Drive to Jodhpur; explore Mehrangarh Fort and Jaswant Thada cenotaph."
      },
      {
            day: 8,
            title: "Jodhpur to Udaipur via Ranakpur",
            description: "Scenic mountain drive visiting the carved marble pillars of Ranakpur Temple."
      },
      {
            day: 9,
            title: "Udaipur City of Lakes",
            description: "City Palace, Jagdish Temple, and sunset boat ride on Lake Pichola."
      },
      {
            day: 10,
            title: "Udaipur to Goa (Flight)",
            description: "Transfer to Udaipur Airport for domestic flight to tropical Goa. Check in to beach resort."
      },
      {
            day: 11,
            title: "Goa Beach Relaxation",
            description: "Full day of sun, sea, and relaxation on golden South Goa beaches."
      },
      {
            day: 12,
            title: "Old Goa Heritage Churches & Spice Plantation",
            description: "Visit UNESCO Portuguese heritage churches in Old Goa and organic spice farm."
      },
      {
            day: 13,
            title: "Coastal Goa Leisure",
            description: "Day at leisure enjoying water sports, coastal dining, and sunset strolls."
      },
      {
            day: 14,
            title: "Goa to Delhi (Flight)",
            description: "Fly from Goa back to Delhi; evening free for artisan shopping."
      },
      {
            day: 15,
            title: "Delhi Departure",
            description: "Chauffeur transfer to Delhi International Airport for your flight home."
      }
],
    inclusions: ['Dedicated car and chauffeur for all North India road transfers'],
    exclusions: ['Domestic flight tickets and hotel stays'],
    faqs: [
      {
            q: "Are domestic flights included in this package?",
            a: "We coordinate and book all domestic flight connections (Udaipur to Goa and Goa to Delhi) seamlessly with private airport chauffeur transfers included."
      }
],
    rating: 4.95,
    reviewsCount: 104
  },
  {
    slug: 'verdent-oasis-tour-package',
    legacyUrl: 'verdent-oasis-tour-package.html',
    title: 'Verdant Oasis Mount Abu & Dilwara Tour',
    italianTitle: 'Verdant Oasis Mount Abu & Dilwara Tour',
    subtitle: 'Rajasthan\'s mountain hill station featuring the world\'s finest marble temples & Nakki Lake',
    duration: '5 Days / 4 Nights',
    days: 5,
    nights: 4,
    priceEUR: 370,
    priceNote: 'rate per private vehicle',
    category: 'heritage',
    image: '/images/tour/mount-abu.webp',
    route: ['Udaipur', 'Ranakpur', 'Mount Abu', 'Dilwara', 'Udaipur'],
    routeString: 'Udaipur · Ranakpur · Mount Abu · Dilwara · Udaipur',
    overview: "A refreshing green sanctuary among the ancient Aravalli Hills. Ideal for escaping the desert heat and exploring the Dilwara Temples, celebrated as the world\'s pinnacle of white marble craftsmanship.",
    highlights: [
      'Dilwara marble temples carved with microscopic gossamer delicacy',
      'Sunset at Nakki Lake and sweeping vistas from Sunset Point',
      'Guru Shikhar peak, the highest mountain summit in Rajasthan'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Udaipur & Scenic Drive to Mount Abu",
            description: "Meet your private chauffeur in Udaipur. Scenic mountain climb into the lush green Aravalli range toward Mount Abu, Rajasthan's only hill station. Evening boating on serene Nakki Lake."
      },
      {
            day: 2,
            title: "World-Renowned Dilwara Jain Temples",
            description: "Full morning admiring the 11th-century Dilwara Marble Temples, globally celebrated for the world's most intricate and delicate stone carvings. Afternoon visit to Guru Shikhar peak."
      },
      {
            day: 3,
            title: "Mount Abu to Ranakpur & Kumbhalgarh Fort",
            description: "Scenic mountain descent to Ranakpur Jain Temple (1,444 marble pillars). Continue to Kumbhalgarh Fort, home to the second-longest wall in the world after the Great Wall of China."
      },
      {
            day: 4,
            title: "Kumbhalgarh to Udaipur City of Lakes",
            description: "Drive to Udaipur; explore the City Palace overlooking Lake Pichola, Jagdish Temple, and Saheliyon Ki Bari royal gardens."
      },
      {
            day: 5,
            title: "Udaipur & Departure",
            description: "Morning boat cruise on Lake Pichola with views of the Lake Palace. Private chauffeur transfer to Udaipur Airport or Railway Station."
      }
],
    inclusions: ['Private vehicle with experienced mountain driver'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
            q: "Why visit Mount Abu?",
            a: "Mount Abu offers a refreshing, cool climate amidst lush green hills and houses the Dilwara Temples, widely regarded as the finest marble craftsmanship on earth."
      }
],
    rating: 4.88,
    reviewsCount: 52
  },
  {
    slug: 'camel-safari-tour-package',
    legacyUrl: 'camel-safari-tour-package.html',
    title: 'Thar Desert Camel Caravan Expedition',
    italianTitle: 'Thar Desert Camel Caravan Expedition',
    subtitle: 'Bikaner, Jaisalmer, untouched sand dunes of Khuri and Sam with camel caravans & folk music',
    duration: '6 Days / 5 Nights',
    days: 6,
    nights: 5,
    priceEUR: 420,
    priceNote: 'rate per private vehicle',
    category: 'rajasthan',
    image: '/images/tour/desert.webp',
    route: ['Jodhpur', 'Bikaner', 'Jaisalmer', 'Khuri Dunes', 'Jodhpur'],
    routeString: 'Jodhpur · Bikaner · Jaisalmer · Khuri Dunes · Jodhpur',
    overview: "An authentic immersion into traditional desert nomad culture. From ancient trade caravan routes to starlit evenings around the campfire listening to the resonant songs of Manganiyar folk musicians.",
    highlights: [
      'Sunset camel trek across pristine undulating desert dunes',
      'Jaisalmer Fort and ancient sandstone merchant havelis',
      'Traditional Rajasthani feast cooked over open embers'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Jodhpur",
            description: "Private airport meet-and-greet with your chauffeur. Hotel transfer and afternoon tour of Mehrangarh Fort."
      },
      {
            day: 2,
            title: "Jodhpur to Bikaner",
            description: "Scenic desert drive in your private vehicle to Bikaner; visit Junagarh Fort and Karni Mata Temple."
      },
      {
            day: 3,
            title: "Bikaner to Jaisalmer (The Golden City)",
            description: "Highway journey across Thar Desert to Jaisalmer; sunset photography at Bada Bagh royal cenotaphs."
      },
      {
            day: 4,
            title: "Jaisalmer Fort & Thar Desert Camel Caravan",
            description: "Morning tour of Jaisalmer Living Fort and Patwon Haveli. Afternoon camel caravan trek into the dunes of Sam with private tent camp stay."
      },
      {
            day: 5,
            title: "Sam Dunes - Kuldhara - Jodhpur",
            description: "Visit the abandoned ghost village of Kuldhara and relax on the return highway journey to Jodhpur."
      },
      {
            day: 6,
            title: "Jodhpur Departure",
            description: "Explore the Clock Tower spice markets and transfer to Jodhpur Airport or Railway Station."
      }
],
    inclusions: ['Private car and dedicated chauffeur for the entire journey'],
    exclusions: ['Tent accommodations and meals'],
    faqs: [
      {
            q: "Is camel safari suitable for all ages?",
            a: "Yes, our camel safaris are slow-paced, gentle, and fully guided by local desert herdsmen. Camel carts are also available for maximum comfort."
      }
],
    rating: 4.93,
    reviewsCount: 68
  },
  {
    slug: 'rajasthan-wild-tour-package',
    legacyUrl: 'rajasthan-wild-tour-package.html',
    title: 'Wild Rajasthan: Sariska, Ranthambore & Bharatpur',
    italianTitle: 'Wild Rajasthan: Sariska, Ranthambore & Bharatpur',
    subtitle: 'The premier wildlife safari circuit: Bengal tigers, leopards & UNESCO wetland bird sanctuary',
    duration: '8 Days / 7 Nights',
    days: 8,
    nights: 7,
    priceEUR: 560,
    priceNote: 'rate per private vehicle',
    category: 'wildlife',
    image: '/images/tour/wildlife.webp',
    route: ['Delhi', 'Sariska', 'Jaipur', 'Ranthambore', 'Bharatpur', 'Agra', 'Delhi'],
    routeString: 'Delhi · Sariska · Jaipur · Ranthambore · Bharatpur · Agra · Delhi',
    overview: "North India's premier naturalist expedition. Connecting the forested valleys of Sariska, the world-famous tiger reserve of Ranthambore, and the Keoladeo wetland bird sanctuary in Bharatpur, ending with the Taj Mahal.",
    highlights: [
      'Tiger safaris in Ranthambore National Park',
      'Eco-rickshaw birdwatching through Keoladeo wetland sanctuary in Bharatpur',
      'Sunrise at the Taj Mahal in Agra'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi",
            description: "Chauffeur pickup at Delhi Airport and transfer to hotel."
      },
      {
            day: 2,
            title: "Delhi to Sariska Tiger Reserve",
            description: "Scenic drive into the Aravalli hills of Alwar to Sariska National Park; afternoon 4x4 jungle safari."
      },
      {
            day: 3,
            title: "Sariska to Jaipur",
            description: "Morning safari drive in Sariska. Afternoon drive to Jaipur; evening visit to Birla Temple."
      },
      {
            day: 4,
            title: "Jaipur Pink City & Amber Fort",
            description: "Full day in Jaipur: Amber Fort, Palace of Winds (Hawa Mahal), City Palace, and Jantar Mantar."
      },
      {
            day: 5,
            title: "Jaipur to Ranthambore Tiger Reserve",
            description: "Drive to Sawai Madhopur; check in to your wildlife jungle resort."
      },
      {
            day: 6,
            title: "Ranthambore Tiger Safaris",
            description: "Morning and afternoon 4x4 open Gypsy safaris tracking Royal Bengal Tigers in Ranthambore."
      },
      {
            day: 7,
            title: "Ranthambore to Bharatpur Bird Sanctuary & Agra",
            description: "Drive to Keoladeo National Park (Bharatpur), a UNESCO wetland sanctuary home to over 370 bird species. Continue to Agra."
      },
      {
            day: 8,
            title: "Sunrise Taj Mahal & Return to Delhi",
            description: "Early morning entrance to the Taj Mahal at dawn. Visit Agra Fort, then expressway drive back to Delhi Airport."
      }
],
    inclusions: ['Private air-conditioned car and chauffeur for all 8 days'],
    exclusions: ['Park entrance permits and hotel accommodations'],
    faqs: [
      {
            q: "What wildlife can we see on this tour?",
            a: "This tour covers Royal Bengal tigers, leopards, striped hyenas, sambar deer, marsh crocodiles in Ranthambore and Sariska, plus Siberian cranes and rare migratory birds in Bharatpur."
      }
],
    rating: 4.92,
    reviewsCount: 79
  },
  {
    slug: 'rajasthan-culture-tour-package',
    legacyUrl: 'rajasthan-culture-tour-package.html',
    title: 'Rajasthan Cultural Safari & Bishnoi Villages',
    italianTitle: 'Rajasthan Cultural Safari & Bishnoi Villages',
    subtitle: 'Shekhawati, Bikaner, Jodhpur, tribal Bishnoi villages, master potters & weavers of Jaipur',
    duration: '10 Days / 9 Nights',
    days: 10,
    nights: 9,
    priceEUR: 670,
    priceNote: 'rate per private vehicle',
    category: 'rajasthan',
    image: '/images/tour/culture.webp',
    route: ['Delhi', 'Mandawa', 'Bikaner', 'Jodhpur', 'Bishnoi Villages', 'Jaipur', 'Delhi'],
    routeString: 'Delhi · Mandawa · Bikaner · Jodhpur · Bishnoi · Jaipur · Delhi',
    overview: "A unique ethnographic and cultural journey. Beyond the palaces, interact with the extraordinary Bishnoi community—history's first conservationists—who protect blackbucks, gazelles, and sacred trees with their lives.",
    highlights: [
      'Authentic jeep tour through rural Bishnoi tribal villages near Jodhpur',
      'Traditional wooden block-printing workshops in Sanganer',
      'Interacting directly with traditional potters and silversmiths'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi",
            description: "Private airport meet-and-greet with your chauffeur and transfer to hotel."
      },
      {
            day: 2,
            title: "Delhi to Shekhawati (Mandawa)",
            description: "Drive to Mandawa; walking tour of open-air art gallery merchant havelis with colorful frescoes."
      },
      {
            day: 3,
            title: "Mandawa to Bikaner",
            description: "Drive across desert highways; explore Junagarh Fort and local camel farm."
      },
      {
            day: 4,
            title: "Bikaner to Jaisalmer",
            description: "Scenic drive across Thar Desert to Jaisalmer; sunset over the golden sandstone city."
      },
      {
            day: 5,
            title: "Jaisalmer Fort & Desert Folk Festival Night",
            description: "Tour Jaisalmer Fort and Jain temples. Afternoon camel trek in Sam Dunes with live folk music."
      },
      {
            day: 6,
            title: "Jaisalmer to Jodhpur (Bishnoi Village Safari)",
            description: "Drive to Jodhpur; take a private village safari to Bishnoi settlements, famous for wildlife conservation, pottery, and durry rug weaving."
      },
      {
            day: 7,
            title: "Jodhpur Mehrangarh Fort & Drive to Pushkar",
            description: "Tour Mehrangarh Fort, Jaswant Thada, then drive to holy Pushkar Lake."
      },
      {
            day: 8,
            title: "Pushkar to Jaipur",
            description: "Visit Brahma Temple and lake ghats; drive to Jaipur with evening artisan bazaar visit."
      },
      {
            day: 9,
            title: "Jaipur Pink City & Amber Fort",
            description: "Full day: Amber Fort ramparts, Hawa Mahal, City Palace, and Jantar Mantar observatory."
      },
      {
            day: 10,
            title: "Jaipur to Delhi & Departure",
            description: "Return drive to Delhi; direct transfer to Delhi International Airport."
      }
],
    inclusions: ['Private vehicle with dedicated chauffeur for all 10 days'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
            q: "What is the Bishnoi Village Safari?",
            a: "The Bishnoi are India's pioneering eco-conservationists. You visit their pristine rural hamlets to observe blackbuck deer, traditional pottery, and hand-woven carpet making."
      }
],
    rating: 4.96,
    reviewsCount: 89
  },
  {
    slug: 'colourful-rajasthan-tour-package',
    legacyUrl: 'colourful-rajasthan-tour-package.html',
    title: 'Colourful Rajasthan Heritage Tour',
    italianTitle: 'Colourful Rajasthan Heritage Tour',
    subtitle: 'Delhi, Jaipur, Pushkar, Udaipur & Agra: a symphony of vibrant colors, aromas & royal landmarks',
    duration: '9 Days / 8 Nights',
    days: 9,
    nights: 8,
    priceEUR: 590,
    priceNote: 'rate per private vehicle',
    category: 'rajasthan',
    image: '/images/tour/jodhpur.webp',
    route: ['Delhi', 'Jaipur', 'Pushkar', 'Udaipur', 'Agra', 'Delhi'],
    routeString: 'Delhi · Jaipur · Pushkar · Udaipur · Agra · Delhi',
    overview: "The chromatic marvels of Rajasthan woven into an unhurried 9-day journey: Pink Jaipur, White Udaipur, Sacred Pushkar, and the marble wonder of Agra's Taj Mahal. Unmatched visual beauty and road comfort.",
    highlights: [
      'Jaipur (Pink City), Udaipur (White City), Agra & Taj Mahal',
      'Comfortable private road transfers with regular refreshment pauses'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi",
            description: "Chauffeur welcome at Delhi Airport and hotel transfer."
      },
      {
            day: 2,
            title: "Delhi to Mandawa",
            description: "Scenic drive into Shekhawati; walking tour of frescoed mansions."
      },
      {
            day: 3,
            title: "Mandawa to Bikaner",
            description: "Drive across desert; explore Junagarh Fort and old bazaars."
      },
      {
            day: 4,
            title: "Bikaner to Jodhpur",
            description: "Drive to the Blue City; visit Mehrangarh Fort and indigo alleys."
      },
      {
            day: 5,
            title: "Jodhpur to Udaipur via Ranakpur",
            description: "Scenic mountain drive visiting the 1,444 marble pillars of Ranakpur Temple."
      },
      {
            day: 6,
            title: "Udaipur City of Lakes",
            description: "City Palace, Jagdish Temple, and sunset boat ride on Lake Pichola."
      },
      {
            day: 7,
            title: "Udaipur to Pushkar",
            description: "Drive to sacred Pushkar Lake; visit Brahma Temple and rose gardens."
      },
      {
            day: 8,
            title: "Pushkar to Jaipur",
            description: "Drive to the Pink City; visit Amber Fort, Hawa Mahal, and local markets."
      },
      {
            day: 9,
            title: "Jaipur to Delhi & Departure",
            description: "Expressway return journey to Delhi; transfer to Delhi Airport."
      }
],
    inclusions: ['Private air-conditioned car with dedicated chauffeur for 9 days'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
            q: "Why is Rajasthan called Colorful?",
            a: "Rajasthan's royal cities each showcase a unique color identity: Jaipur (The Pink City), Jodhpur (The Blue City), Jaisalmer (The Golden City), and Udaipur (The White City)."
      }
],
    rating: 4.94,
    reviewsCount: 115
  },
  {
    slug: 'mewar-circuit-tour-package',
    legacyUrl: 'mewar-circuit-tour-package.html',
    title: 'Mewar Circuit & Royal Lakes Tour',
    italianTitle: 'Mewar Circuit & Royal Lakes Tour',
    subtitle: 'Udaipur, Ranakpur, Kumbhalgarh & Jodhpur through the historic kingdom of Mewar',
    duration: '5 Days / 4 Nights',
    days: 5,
    nights: 4,
    priceEUR: 350,
    priceNote: 'rate per private vehicle',
    category: 'heritage',
    image: '/images/tour/udaipur.webp',
    route: ['Udaipur', 'Kumbhalgarh', 'Ranakpur', 'Jodhpur', 'Udaipur'],
    routeString: 'Udaipur · Kumbhalgarh · Ranakpur · Jodhpur · Udaipur',
    overview: "A concentrated journey highlighting the most prestigious destinations of the historic Mewar kingdom. From lakeside palaces in Udaipur to the mountain fortress wall of Kumbhalgarh and the marble columns of Ranakpur.",
    highlights: [
      'Udaipur City Palace and Lake Pichola boat cruise',
      'Kumbhalgarh Fort and its colossal 36-kilometer stone wall',
      'Ranakpur Jain Temples with 1,444 individually carved marble pillars'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Udaipur (City of Lakes)",
            description: "Chauffeur welcome at Udaipur Airport. Check in to lakeside hotel and evening boat cruise on Lake Pichola."
      },
      {
            day: 2,
            title: "Udaipur Royal Palaces & Temples",
            description: "Comprehensive tour of City Palace, Jagdish Temple, Saheliyon Ki Bari, and vintage car collection."
      },
      {
            day: 3,
            title: "Udaipur to Chittorgarh Fort & Kumbhalgarh",
            description: "Excursion to Chittorgarh Fort (Vijay Stambha, Padmini Palace), continuing to Kumbhalgarh Fort."
      },
      {
            day: 4,
            title: "Kumbhalgarh to Ranakpur & Mount Abu",
            description: "Tour Ranakpur Jain Temple, then ascend into the cool pine-scented hills of Mount Abu."
      },
      {
            day: 5,
            title: "Dilwara Temples & Udaipur Departure",
            description: "Marvel at Dilwara marble carvings, Nakki Lake, and descend to Udaipur Airport for departure."
      }
],
    inclusions: ['Private vehicle and chauffeur for the entire circuit'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
            q: "What is the historical significance of Mewar?",
            a: "Mewar is the proudest dynasty of Rajasthan, famous for legendary warriors Maharana Pratap and Rana Sanga who defended their freedom from the hill fortresses of Chittorgarh and Kumbhalgarh."
      }
],
    rating: 4.93,
    reviewsCount: 57
  },
  {
    slug: 'wildlife-encounter-tour-package',
    legacyUrl: 'wildlife-encounter-tour-package.html',
    title: 'Wildlife Encounter & Tiger Safari',
    italianTitle: 'Wildlife Encounter & Tiger Safari',
    subtitle: 'Delhi, Agra Taj Mahal & extensive jungle safaris in Ranthambore National Park',
    duration: '6 Days / 5 Nights',
    days: 6,
    nights: 5,
    priceEUR: 440,
    priceNote: 'rate per private vehicle',
    category: 'wildlife',
    image: '/images/tour/tour-208.webp',
    route: ['Delhi', 'Agra', 'Ranthambore', 'Jaipur', 'Delhi'],
    routeString: 'Delhi · Agra · Ranthambore · Jaipur · Delhi',
    overview: "Engineered for wildlife enthusiasts who wish to experience the wonder of the Taj Mahal and maximize their chances of spotting Royal Bengal tigers in Ranthambore within a 6-day timeframe.",
    highlights: [
      'Two dedicated open jeep safaris in the core zones of Ranthambore',
      'Sunrise at the Taj Mahal in Agra',
      'Palace of Winds and Amber Fort in Jaipur'
    ],
    itinerary: [
      {
            day: 1,
            title: "Arrival in Delhi",
            description: "Chauffeur welcome at Delhi Airport and hotel transfer."
      },
      {
            day: 2,
            title: "Delhi to Agra & Sunset Taj Mahal",
            description: "Drive along Yamuna Expressway to Agra; explore Agra Fort and sunset Taj Mahal view."
      },
      {
            day: 3,
            title: "Taj Mahal to Ranthambore Tiger Reserve",
            description: "Sunrise entrance to the Taj Mahal. Drive to Sawai Madhopur; check in to jungle lodge."
      },
      {
            day: 4,
            title: "Ranthambore Jungle Safari Drives",
            description: "Morning and afternoon 4x4 open-top Gypsy safaris tracking Royal Bengal Tigers."
      },
      {
            day: 5,
            title: "Ranthambore to Jaipur",
            description: "Drive to Jaipur; explore Amber Fort, Hawa Mahal, and City Palace."
      },
      {
            day: 6,
            title: "Jaipur to Delhi & Departure",
            description: "Expressway return drive to Delhi; airport drop-off for return flight."
      }
],
    inclusions: ['Private car with chauffeur for all journeys'],
    exclusions: ['Safari permits and hotel stays'],
    faqs: [
      {
            q: "Can we see tigers on a short 6-day tour?",
            a: "Yes! Ranthambore is India's most accessible tiger reserve, located just 3.5 hours from Jaipur, making it ideal for combining with the Golden Triangle."
      }
],
    rating: 4.91,
    reviewsCount: 64
  },
  {
    slug: 'palace-on-wheels-train-tour',
    legacyUrl: 'palace-on-wheels-train-tour.html',
    title: 'Palace on Wheels Luxury Train Tour',
    italianTitle: 'Palace on Wheels Luxury Train Tour',
    subtitle: 'Aristocratic rail experience on India\'s most famous luxury train with private transfers before and after',
    duration: '8 Days / 7 Nights',
    days: 8,
    nights: 7,
    priceEUR: 280,
    priceNote: 'rate for private transfers & Delhi tour before and after train journey',
    category: 'train',
    image: '/images/tour/palace-on-wheels.webp',
    route: ['Delhi', 'Jaipur', 'Sawai Madhopur', 'Chittorgarh', 'Udaipur', 'Jaisalmer', 'Jodhpur', 'Bharatpur', 'Agra', 'Delhi'],
    routeString: 'Delhi · Jaipur · Sawai Madhopur · Udaipur · Jaisalmer · Jodhpur · Agra · Delhi',
    overview: "Travel like British viceroys and royal Maharajas of the past. The legendary Palace on Wheels travels overnight while you rest in opulent staterooms, waking up each morning in a new historic city.",
    highlights: [
      'A globally acclaimed, award-winning luxury heritage rail journey',
      'Private royal cabins attended by dedicated uniformed khidmatgars (butlers)',
      'Personalized meet-and-greet chauffeur assistance in Delhi upon arrival and departure'
    ],
    itinerary: [
      { day: 1, title: 'Delhi - Embark on Palace on Wheels', description: 'Red carpet reception at Safdarjung Railway Station in Delhi.' },
      { day: 2, title: 'Jaipur', description: 'Pink City tour and royal dinner.' },
      { day: 3, title: 'Ranthambore & Chittorgarh', description: 'Morning tiger safari and Chittorgarh Fort.' },
      { day: 4, title: 'Udaipur', description: 'City of Lakes and lunch at Jag Mandir Island.' },
      { day: 5, title: 'Jaisalmer', description: 'The Golden City and sunset in the dunes.' },
      { day: 6, title: 'Jodhpur', description: 'Mehrangarh Fort and royal market.' },
      { day: 7, title: 'Bharatpur & Agra', description: 'Keoladeo bird sanctuary and sunrise Taj Mahal.' },
      { day: 8, title: 'Delhi Disembarkation', description: 'Arrival back in Delhi and transfer to airport by our private car.' }
    ],
    inclusions: [
      'Exclusive private transfers in Delhi (airport, hotel, railway station)',
      'Luggage assistance and 24/7 concierge support'
    ],
    exclusions: ['Official Palace on Wheels rail carriage journey ticket'],
    faqs: [{ q: 'Can you assist with purchasing train tickets?', a: 'Yes, we assist guests with official ticketing through the Rajasthan Tourism Development Corporation.' }],
    rating: 4.98,
    reviewsCount: 46
  },
  {
    slug: 'pushkar-fair',
    legacyUrl: 'pushkar-fair.html',
    title: 'Exclusively Pushkar Camel Fair Tour',
    italianTitle: 'Exclusively Pushkar Camel Fair Tour',
    subtitle: 'The world\'s greatest desert folk festival: camel trading, folk dancers, turban contests & sacred rituals',
    duration: '7 Days / 6 Nights',
    days: 7,
    nights: 6,
    priceEUR: 480,
    priceNote: 'rate per private vehicle (festival dates: November)',
    category: 'rajasthan',
    image: '/images/tour/pushkar.webp',
    route: ['Delhi', 'Jaipur', 'Pushkar Fair', 'Ajmer', 'Delhi'],
    routeString: 'Delhi · Jaipur · Pushkar Fair · Ajmer · Delhi',
    overview: "One of the most photogenic and vibrant cultural gatherings on earth. Tens of thousands of decorated camels and horses arrive across the Thar Desert alongside nomadic herdsmen wearing crimson turbans.",
    highlights: [
      'Attend the colorful competitions and folk spectacles of Pushkar Fair',
      'Camel beauty contests, bridal competitions, and dune races',
      'The sacred full-moon pilgrimage bath in Pushkar Lake at Kartik Purnima'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', description: 'Meet and greet, hotel transfer.' },
      { day: 2, title: 'Delhi to Jaipur', description: 'Drive to the Pink City.' },
      { day: 3, title: 'Jaipur to Pushkar', description: 'Arrive at the Pushkar Fair camping grounds.' },
      { day: 4, title: 'Pushkar Fair: Heart of the Festival', description: 'Full day exploring trading grounds, folk events, and turban competitions.' },
      { day: 5, title: 'Pushkar Fair & Sacred Lake', description: 'Dawn photography among the dunes and temple visits.' },
      { day: 6, title: 'Pushkar - Ajmer - Delhi', description: 'Visit Ajmer Sharif Sufi shrine and drive toward Delhi.' },
      { day: 7, title: 'Delhi & International Departure', description: 'Airport transfer for your return flight.' }
    ],
    inclusions: ['Private car with dedicated chauffeur for all 7 days', 'All vehicle and highway costs included'],
    exclusions: ['Hotels, luxury tents, and meals'],
    faqs: [{ q: 'When is the Pushkar Fair held?', a: 'The fair takes place annually in October or November during the Kartik Purnima full moon. Booking months in advance is essential.' }],
    rating: 4.97,
    reviewsCount: 118
  },
  {
    slug: 'rajasthan-20-days-tour-package',
    legacyUrl: 'rajasthan-20-days-tour-package.html',
    title: '20 Days Grand Rajasthan & Desert Odyssey Tour',
    italianTitle: '20 Days Grand Rajasthan & Desert Odyssey Tour',
    subtitle: 'The ultimate royal immersion across every fort, sand dune, and lake palace in Rajasthan',
    duration: '20 Days / 19 Nights',
    days: 20,
    nights: 19,
    priceEUR: 1350,
    priceNote: 'total rate per private vehicle with private chauffeur for 20 days (1-3 persons)',
    category: 'rajasthan',
    image: '/images/tour/jaisalmer.webp',
    route: ['Delhi', 'Mandawa', 'Bikaner', 'Jaisalmer', 'Jodhpur', 'Mount Abu', 'Ranakpur', 'Udaipur', 'Chittorgarh', 'Bundi', 'Ranthambore', 'Pushkar', 'Jaipur', 'Fatehpur Sikri', 'Agra', 'Delhi'],
    routeString: 'Delhi · Mandawa · Bikaner · Jaisalmer · Jodhpur · Mount Abu · Udaipur · Bundi · Ranthambore · Pushkar · Jaipur · Agra · Delhi',
    overview: "Our most comprehensive royal road expedition. Across 20 unforgettable days with your private English-speaking chauffeur, traverse every dimension of royal Rajasthan: the painted havelis of Shekhawati, the golden desert citadel of Jaisalmer, the blue streets of Jodhpur, tranquil Mount Abu, romantic Udaipur lakes, Bundi stepwells, wild tiger safaris in Ranthambore, and the majestic Taj Mahal in Agra.",
    highlights: [
      'Sunset camel safari and overnight luxury camp in Thar Desert dunes',
      'Boat cruise on Lake Pichola in Udaipur with views of the Lake Palace',
      'Morning and afternoon tiger safari drives in Ranthambore National Park',
      'Exploration of massive Mehrangarh Fort in Jodhpur and Amber Fort in Jaipur',
      'Private air-conditioned vehicle and veteran chauffeur at your service throughout'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', description: 'VIP airport pickup by your chauffeur, transfer to hotel and Delhi monuments orientation.' },
      { day: 2, title: 'Delhi Heritage Tour', description: 'Old Delhi, Jama Masjid, Chandni Chowk rickshaw ride, and Qutub Minar.' },
      { day: 3, title: 'Delhi to Mandawa (Shekhawati)', description: 'Drive into the open-air art gallery of Shekhawati and explore frescoed merchant havelis.' },
      { day: 4, title: 'Mandawa to Bikaner', description: 'Scenic desert drive to Bikaner; visit Junagarh Fort and the royal camel breeding farm.' },
      { day: 5, title: 'Bikaner to Jaisalmer (The Golden City)', description: 'Drive across the Thar Desert towards Jaisalmer; sunset view over the golden sandstone city.' },
      { day: 6, title: 'Jaisalmer Fort & Sam Sand Dunes', description: 'Explore the living Jaisalmer Fort, Patwon Ki Haveli, followed by evening camel safari in the dunes.' },
      { day: 7, title: 'Jaisalmer to Jodhpur (The Blue City)', description: 'Highway drive to Jodhpur; visit Jaswant Thada marble cenotaph and the old clock tower market.' },
      { day: 8, title: 'Jodhpur Forts & Stepwells', description: 'Full morning at Mehrangarh Fort and Toorji Ka Jhalra stepwell; afternoon Bishnoi village visit.' },
      { day: 9, title: 'Jodhpur to Mount Abu via Ranakpur', description: 'Marvel at the 1,444 marble pillars of Ranakpur Jain Temple, then ascend to Mount Abu.' },
      { day: 10, title: 'Mount Abu to Udaipur', description: 'Visit Dilwara Jain Temples and Nakki Lake, then descend into the romantic City of Lakes.' },
      { day: 11, title: 'Udaipur City of Lakes', description: 'City Palace, Jagdish Temple, Saheliyon Ki Bari, and a scenic sunset boat cruise on Lake Pichola.' },
      { day: 12, title: 'Udaipur to Chittorgarh', description: 'Drive to the legendary Chittorgarh Fort, India\'s largest fortress of Rajput valor.' },
      { day: 13, title: 'Chittorgarh to Bundi', description: 'Explore the painted Taragarh Fort, stepwells, and ancient water tanks of Bundi.' },
      { day: 14, title: 'Bundi to Ranthambore Tiger Reserve', description: 'Drive to Sawai Madhopur; relax and prepare for national park wildlife safaris.' },
      { day: 15, title: 'Ranthambore Jungle Safaris', description: 'Early morning and afternoon game drives in open 4x4 Gypsy in search of Royal Bengal Tigers.' },
      { day: 16, title: 'Ranthambore to Pushkar', description: 'Drive to the holy town of Pushkar; visit the sacred lake and rare Brahma Temple.' },
      { day: 17, title: 'Pushkar to Jaipur (The Pink City)', description: 'Scenic drive to Jaipur; afternoon check-in and visit to Birla Mandir.' },
      { day: 18, title: 'Jaipur Full Day Exploration', description: 'Amber Fort ramparts, Jal Mahal, Hawa Mahal, City Palace, and Jantar Mantar UNESCO observatory.' },
      { day: 19, title: 'Jaipur to Agra via Fatehpur Sikri', description: 'Stop at the Chand Baori stepwell and UNESCO Mughal ruins of Fatehpur Sikri; sunset at Mehtab Bagh.' },
      { day: 20, title: 'Sunrise Taj Mahal, Agra Fort & Return to Delhi', description: 'Early morning visit to the Taj Mahal; explore Agra Fort, then expressway drive back to Delhi airport.' }
    ],
    inclusions: [
      'Exclusive private vehicle (Sedan / Innova Crysta) for all 20 days',
      'Professional licensed English-speaking chauffeur',
      'All fuel, expressway tolls, state border road taxes, and monument parking',
      'Driver lodging, meals, and overnight allowances',
      'Complimentary chilled bottled water and mobile phone chargers in vehicle'
    ],
    exclusions: ['Hotels and meals', 'Monument entrance tickets and local guide fees', 'Safari permits in Ranthambore'],
    faqs: [
      { q: 'Can this 20-day tour itinerary be customized?', a: 'Yes, 100%! You can add extra days in Udaipur, swap destinations, or adjust your travel pace anytime.' }
    ],
    rating: 4.99,
    reviewsCount: 84
  },
  {
    slug: 'rajasthan-15-days-tour-package',
    legacyUrl: 'rajasthan-15-days-tour-package.html',
    title: '15 Days Classic Rajasthan Royal Heritage Tour',
    italianTitle: '15 Days Classic Rajasthan Royal Heritage Tour',
    subtitle: 'Comprehensive forts, sand dunes, and lake palaces circuit with personal English-speaking chauffeur',
    duration: '15 Days / 14 Nights',
    days: 15,
    nights: 14,
    priceEUR: 990,
    priceNote: 'total rate per private vehicle for 15 days (1-3 persons)',
    category: 'rajasthan',
    image: '/images/tour/tour-14.webp',
    route: ['Delhi', 'Mandawa', 'Bikaner', 'Jaisalmer', 'Jodhpur', 'Ranakpur', 'Udaipur', 'Pushkar', 'Jaipur', 'Fatehpur Sikri', 'Agra', 'Delhi'],
    routeString: 'Delhi · Mandawa · Bikaner · Jaisalmer · Jodhpur · Ranakpur · Udaipur · Pushkar · Jaipur · Agra · Delhi',
    overview: "The quintessential two-week Rajasthan grand journey. Travel in supreme comfort from the historic lanes of Delhi through the painted havelis of Shekhawati, the golden desert dunes of Jaisalmer, the blue houses of Jodhpur, the romantic lakeside palaces of Udaipur, the sacred lake of Pushkar, the pink ramparts of Jaipur, and the world-famous Taj Mahal in Agra.",
    highlights: [
      'Full Rajasthan circuit covering every premier royal citadel and palace',
      'Desert sunset camel ride and folk dance evening in Thar Desert dunes',
      'Marvel at Ranakpur’s intricate marble Jain temple carvings',
      'Sunset boat ride on Lake Pichola in Udaipur',
      'Sunrise private visit to the world-wonder Taj Mahal in Agra'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', description: 'Meet and greet by your chauffeur; transfer to hotel.' },
      { day: 2, title: 'Delhi Sightseeing', description: 'Jama Masjid, Chandni Chowk, India Gate, and Qutub Minar.' },
      { day: 3, title: 'Delhi to Mandawa', description: 'Drive into Shekhawati and walk through frescoed open-air mansions.' },
      { day: 4, title: 'Mandawa to Bikaner', description: 'Junagarh Fort and Karni Mata Temple.' },
      { day: 5, title: 'Bikaner to Jaisalmer', description: 'Desert road trip to the Golden City of Jaisalmer.' },
      { day: 6, title: 'Jaisalmer Fort & Sam Dunes', description: 'Jaisalmer Fort, Patwon Ki Haveli, and evening camel safari in the dunes.' },
      { day: 7, title: 'Jaisalmer to Jodhpur', description: 'Drive to the Blue City; visit Mehrangarh Fort and Jaswant Thada.' },
      { day: 8, title: 'Jodhpur to Udaipur via Ranakpur', description: 'Visit the 1,444 marble pillars of Ranakpur Jain Temple on the way to Udaipur.' },
      { day: 9, title: 'Udaipur City of Lakes', description: 'City Palace, Jagdish Temple, and Lake Pichola sunset boat ride.' },
      { day: 10, title: 'Udaipur to Pushkar', description: 'Drive to sacred Pushkar; visit the holy lake and Brahma Temple.' },
      { day: 11, title: 'Pushkar to Jaipur', description: 'Drive to the Pink City; visit Birla Mandir and evening bazaars.' },
      { day: 12, title: 'Jaipur Pink City & Amber Fort', description: 'Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar.' },
      { day: 13, title: 'Jaipur to Agra via Fatehpur Sikri', description: 'Chand Baori stepwell and the imperial ruins of Fatehpur Sikri.' },
      { day: 14, title: 'Sunrise Taj Mahal & Agra Fort', description: 'Marvel at the Taj Mahal at dawn, explore Agra Fort, and visit Mehtab Bagh.' },
      { day: 15, title: 'Agra to Delhi & International Airport', description: 'Expressway return drive to Delhi International Airport for your departure flight.' }
    ],
    inclusions: [
      'Private car with personal English-speaking chauffeur for all 15 days',
      'All fuel, road tolls, state border taxes, and parking fees included',
      'Driver meal and accommodation allowances fully covered',
      '24/7 dedicated guest concierge support'
    ],
    exclusions: ['Hotels and meals', 'Monument entrance tickets and safari fees'],
    faqs: [
      { q: 'Is 15 days enough to see Rajasthan?', a: 'Yes! 15 days is the ideal duration to comfortably experience all major royal highlights of Rajasthan without feeling rushed.' }
    ],
    rating: 4.98,
    reviewsCount: 92
  },
  {
    slug: 'rajasthan-12-days-tour-package',
    legacyUrl: 'rajasthan-12-days-tour-package.html',
    title: '12 Days Golden Triangle & Royal Rajasthan Tour',
    italianTitle: '12 Days Golden Triangle & Royal Rajasthan Tour',
    subtitle: 'The perfect combination of iconic Golden Triangle monuments with Jodhpur and Udaipur lake palaces',
    duration: '12 Days / 11 Nights',
    days: 12,
    nights: 11,
    priceEUR: 790,
    priceNote: 'total rate per private vehicle for 12 days (1-3 persons)',
    category: 'rajasthan',
    image: '/images/tour/udaipur.webp',
    route: ['Delhi', 'Agra', 'Fatehpur Sikri', 'Jaipur', 'Pushkar', 'Jodhpur', 'Ranakpur', 'Udaipur', 'Delhi'],
    routeString: 'Delhi · Agra · Fatehpur Sikri · Jaipur · Pushkar · Jodhpur · Ranakpur · Udaipur · Delhi',
    overview: "Designed for travelers who want to see both the world-famous Golden Triangle (Delhi, Agra, Taj Mahal, Jaipur) and the greatest highlights of royal Rajasthan (Pushkar, Jodhpur Blue City, and Udaipur Lake Palace) in less than two weeks. Travel with a dedicated private chauffeur at your exclusive pace.",
    highlights: [
      'Comprehensive Golden Triangle combined with Rajasthan\'s most photogenic cities',
      'Dawn visit to the Taj Mahal at sunrise with best photo guidance',
      'Amber Fort in Jaipur and Mehrangarh Fort in Jodhpur',
      'Marble pillars of Ranakpur and romantic boat cruise in Udaipur',
      'Comfortable executive vehicle throughout your entire tour'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', description: 'Meet and greet, hotel transfer, and afternoon city orientation.' },
      { day: 2, title: 'Delhi to Agra via Yamuna Expressway', description: 'Old Delhi monuments and scenic afternoon drive to Agra; sunset at Mehtab Bagh.' },
      { day: 3, title: 'Sunrise Taj Mahal, Agra Fort & Drive to Jaipur', description: 'Sunrise Taj Mahal, Agra Fort, and drive to Jaipur via Fatehpur Sikri.' },
      { day: 4, title: 'Jaipur The Pink City', description: 'Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar observatory.' },
      { day: 5, title: 'Jaipur to Pushkar', description: 'Scenic drive to sacred Pushkar Lake and Brahma Temple.' },
      { day: 6, title: 'Pushkar to Jodhpur (The Blue City)', description: 'Drive to Jodhpur; visit Jaswant Thada and the bustling clock tower market.' },
      { day: 7, title: 'Jodhpur Mehrangarh Fort & Palaces', description: 'Explore Mehrangarh Fort, Umaid Bhawan Palace, and old blue alleys.' },
      { day: 8, title: 'Jodhpur to Udaipur via Ranakpur', description: 'Scenic drive through the Aravalli hills with stop at Ranakpur Jain Temple.' },
      { day: 9, title: 'Udaipur: Venice of the East', description: 'City Palace, Jagdish Temple, Saheliyon Ki Bari, and sunset boat ride on Lake Pichola.' },
      { day: 10, title: 'Udaipur Cultural Exploration', description: 'Monsoon Palace (Sajjangarh) and artisan handicraft markets.' },
      { day: 11, title: 'Udaipur to Pushkar / Ajmer or Return Leg', description: 'Scenic highway drive relaxing through rural Rajasthan towards Delhi.' },
      { day: 12, title: 'Return Drive to Delhi & Airport Transfer', description: 'Chauffeur transfer directly to Delhi International Airport for your flight.' }
    ],
    inclusions: [
      'Exclusive private car with licensed English-speaking chauffeur',
      'All fuel, tolls, state taxes, and vehicle parking included',
      'Chauffeur expenses fully covered with 24/7 guest support'
    ],
    exclusions: ['Hotel bookings and monument entry tickets'],
    faqs: [
      { q: 'Can we fly back from Udaipur to Delhi on Day 12?', a: 'Yes! You can either take the scenic highway drive back or take a 1-hour flight from Udaipur to Delhi.' }
    ],
    rating: 4.96,
    reviewsCount: 71
  },
  {
    slug: 'golden-triangle-haridwar-rishikesh-tour-package',
    legacyUrl: 'golden-triangle-haridwar-rishikesh-tour-package.html',
    title: 'Golden Triangle Tour with Haridwar & Rishikesh',
    italianTitle: 'Golden Triangle Tour with Haridwar & Rishikesh',
    subtitle: 'Mughal monuments, Rajput palaces, holy Ganges evening Aarti & yoga capital of the world',
    duration: '8 Days / 7 Nights',
    days: 8,
    nights: 7,
    priceEUR: 520,
    priceNote: 'total rate per private vehicle (1-3 persons)',
    category: 'spiritual',
    image: '/images/tour/tour-10.webp',
    route: ['Delhi', 'Haridwar', 'Rishikesh', 'Agra', 'Fatehpur Sikri', 'Jaipur', 'Delhi'],
    routeString: 'Delhi · Haridwar · Rishikesh · Agra · Fatehpur Sikri · Jaipur · Delhi',
    overview: "Merge North India's premier monument circuit with the deep spiritual serenity of the Himalayas. Experience the grand monuments of Delhi, witness the mesmerizing evening Ganga Aarti at Har Ki Pauri in Haridwar, visit ashrams in Rishikesh, view the Taj Mahal in Agra at sunrise, and explore the pink hill forts of Jaipur.",
    highlights: [
      'Sacred evening Ganga Aarti ceremony with floating lamps in Haridwar',
      'Iconic suspension bridges (Ram Jhula & Laxman Jhula) and Beatles Ashram in Rishikesh',
      'Sunrise Taj Mahal visit with zero queues and best viewpoints',
      'Majestic Amber Fort and City Palace in Jaipur',
      'Seamless private transfers with experienced English-speaking chauffeur'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi & Drive to Haridwar', description: 'Chauffeur pickup in Delhi; scenic highway drive to sacred Haridwar. Attend evening Ganga Aarti at Har Ki Pauri.' },
      { day: 2, title: 'Haridwar to Rishikesh (Yoga Capital)', description: 'Explore Rishikesh: Ram Jhula, Laxman Jhula, Beatles Ashram, and evening Triveni Ghat Aarti.' },
      { day: 3, title: 'Rishikesh to Delhi / Agra', description: 'Scenic drive down from the Himalayan foothills towards Agra along modern expressways.' },
      { day: 4, title: 'Sunrise Taj Mahal, Agra Fort & Drive to Jaipur', description: 'Sunrise Taj Mahal entrance, explore Agra Fort, and drive to Jaipur via Fatehpur Sikri.' },
      { day: 5, title: 'Jaipur The Pink City', description: 'Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar observatory.' },
      { day: 6, title: 'Jaipur Artisans & Royal Shrines', description: 'Jaigarh Fort, Nahargarh sunset view, and traditional jewelry and textile bazaars.' },
      { day: 7, title: 'Jaipur to Delhi', description: 'Comfortable return highway drive to Delhi; afternoon visit to Qutub Minar and India Gate.' },
      { day: 8, title: 'Delhi International Airport Transfer', description: 'Direct chauffeur transfer to Delhi International Airport for your departure.' }
    ],
    inclusions: [
      'Private air-conditioned vehicle with professional chauffeur throughout',
      'All fuel, expressway tolls, interstate taxes, and parking fees',
      'Complimentary bottled water and phone charging in car'
    ],
    exclusions: ['Hotels, monument tickets, and personal expenses'],
    faqs: [
      { q: 'Is this tour suitable for yoga lovers and spiritual seekers?', a: 'Absolutely! Rishikesh is the yoga capital of the world, and Haridwar provides an authentic immersion into sacred Indian spiritual rituals.' }
    ],
    rating: 4.97,
    reviewsCount: 58
  },
  {
    slug: 'shimla-manali-tour-package',
    legacyUrl: 'shimla-manali-tour-package.html',
    title: 'Shimla Manali Hill Station Tour Package',
    italianTitle: 'Shimla Manali Hill Station Tour Package',
    subtitle: 'Scenic Himalayan road trip: colonial Shimla, Solang Valley, Rohtang Pass & Kullu rapids',
    duration: '7 Days / 6 Nights',
    days: 7,
    nights: 6,
    priceEUR: 480,
    priceNote: 'total private vehicle rate with veteran mountain chauffeur (1-3 persons)',
    category: 'hills',
    image: '/images/tour/tour-11.webp',
    route: ['Delhi', 'Shimla', 'Kufri', 'Kullu Valley', 'Manali', 'Solang Valley', 'Delhi'],
    routeString: 'Delhi · Shimla · Kufri · Kullu Valley · Manali · Solang Valley · Delhi',
    overview: "Escape to the cool pine forests and snow-capped peaks of Himachal Pradesh. Journey from Delhi aboard a private mountain-certified vehicle to explore the British colonial heritage of Shimla, panoramic views at Kufri, the apple orchards of Kullu, the ancient wooden temples of Manali, and the high-altitude thrills of Solang Valley.",
    highlights: [
      'Stroll along the historic Mall Road and Ridge in colonial Shimla',
      'Snow-capped Himalayan views and adventure activities in Solang Valley',
      'Ancient wooden architecture of Hadimba Temple in Manali',
      'Scenic drive through the lush Beas River valley and Kullu shawl markets',
      'Experienced hill-certified chauffeur ensuring maximum comfort and safety'
    ],
    itinerary: [
      { day: 1, title: 'Delhi to Shimla Scenic Drive', description: 'Morning pickup in Delhi; scenic mountain climb via Himalayan Expressway to Shimla. Evening stroll on Mall Road.' },
      { day: 2, title: 'Shimla & Kufri Excursion', description: 'Visit Kufri cedar forests, panoramic viewpoints, Jakhoo Temple, and Christ Church on the Ridge.' },
      { day: 3, title: 'Shimla to Manali via Kullu Valley', description: 'Scenic mountain drive alongside the Beas River through Mandi, Pandoh Dam, and Kullu Valley.' },
      { day: 4, title: 'Manali Local Sightseeing', description: 'Visit Hadimba Devi Temple, Vashisht hot springs, Tibetan Monastery, and Old Manali cafes.' },
      { day: 5, title: 'Solang Valley & Rohtang Pass Excursion', description: 'Day trip to Solang Valley for paragliding, snow views, and Atal Tunnel excursion.' },
      { day: 6, title: 'Manali to Chandigarh / Delhi Foothills', description: 'Scenic descent through the Himalayan foothills; evening arrival at hotel.' },
      { day: 7, title: 'Return Drive to Delhi & Departure', description: 'Transfer to Delhi International Airport or railway station for onward journey.' }
    ],
    inclusions: [
      'Private air-conditioned vehicle with veteran mountain driver',
      'All mountain toll permits, state border green taxes, and parking',
      'Driver allowances, meals, and overnight accommodation fully covered'
    ],
    exclusions: ['Hotels and meals', 'Adventure activity charges (paragliding, skiing)'],
    faqs: [
      { q: 'Is the drive safe on mountain roads?', a: 'Yes! Our drivers are specially trained and certified for Himalayan mountain terrain with over 10+ years of driving experience.' }
    ],
    rating: 4.95,
    reviewsCount: 63
  },
  {
    slug: 'delhi-mussoorie-jim-corbett-nainital-tour-package',
    legacyUrl: 'delhi-mussoorie-jim-corbett-nainital-tour-package.html',
    title: 'Delhi Mussoorie Jim Corbett Nainital Tour Package',
    italianTitle: 'Delhi Mussoorie Jim Corbett Nainital Tour Package',
    subtitle: 'Queen of Hills, Royal Bengal Tiger safari in Corbett, and sparkling Kumaon lakes',
    duration: '8 Days / 7 Nights',
    days: 8,
    nights: 7,
    priceEUR: 560,
    priceNote: 'total rate per private vehicle with mountain & forest permits (1-3 persons)',
    category: 'hills',
    image: '/images/tour/wildlife.webp',
    route: ['Delhi', 'Mussoorie', 'Dhanaulti', 'Jim Corbett National Park', 'Nainital', 'Bhimtal', 'Delhi'],
    routeString: 'Delhi · Mussoorie · Jim Corbett · Nainital · Bhimtal · Delhi',
    overview: "The quintessential Uttarakhand triangle of mountains and wildlife. From Delhi, travel by private car to Mussoorie (Queen of Hills) with panoramic Himalayan views, venture deep into India's oldest national park (Jim Corbett) on 4x4 open Gypsy safaris in search of wild elephants and Bengal tigers, and relax beside the emerald waters of Naini Lake in Nainital.",
    highlights: [
      'Panoramic Garhwal Himalayan vistas from Gun Hill and Kempty Falls in Mussoorie',
      '4x4 Jeep Safari in Jim Corbett National Park, home of the Royal Bengal Tiger',
      'Yachting and boat ride on Naini Lake and scenic Naina Peak in Nainital',
      'Eco-park walking trails among tall deodar and oak trees in Dhanaulti',
      'Dedicated mountain vehicle and chauffeur for the entire 8-day itinerary'
    ],
    itinerary: [
      { day: 1, title: 'Delhi to Mussoorie (Queen of Hills)', description: 'Chauffeur pickup in Delhi; scenic highway drive to Mussoorie via Dehradun. Evening on Mall Road.' },
      { day: 2, title: 'Mussoorie & Dhanaulti Excursion', description: 'Visit Kempty Falls, Gun Hill cable car point, and the deodar forests of Dhanaulti.' },
      { day: 3, title: 'Mussoorie to Jim Corbett National Park', description: 'Scenic foothill drive through Kotdwar into the tiger country of Corbett. Check in to jungle resort.' },
      { day: 4, title: 'Jim Corbett Tiger Safari & Wildlife', description: 'Morning and afternoon open 4x4 Gypsy jungle safari in search of tigers, deer, and wild elephants.' },
      { day: 5, title: 'Jim Corbett to Nainital (Lake District)', description: 'Drive into Kumaon hills to Nainital. Afternoon boat ride on emerald Naini Lake.' },
      { day: 6, title: 'Nainital Lake Tour & Viewpoints', description: 'Visit Bhimtal, Sattal, Naukuchiatal, Naina Devi Temple, and Snow View Point.' },
      { day: 7, title: 'Nainital to Delhi Foothills', description: 'Scenic descent down the hills; relaxing highway drive towards Delhi.' },
      { day: 8, title: 'Arrival in Delhi & Airport Drop-off', description: 'Direct transfer to Delhi International Airport for your flight.' }
    ],
    inclusions: [
      'Exclusive private car with licensed hill chauffeur for 8 days',
      'All fuel, road tolls, mountain taxes, and vehicle parking included',
      'Chauffeur overnight lodging and food allowances fully covered'
    ],
    exclusions: ['Resorts and meals', 'Corbett Jeep safari permit tickets and guide fees'],
    faqs: [
      { q: 'When is the best time to visit Corbett and Nainital?', a: 'October to June is the best time. The safari zones in Corbett are open and weather in Nainital is delightful.' }
    ],
    rating: 4.96,
    reviewsCount: 52
  },
  {
    slug: 'char-dham-tour-package',
    legacyUrl: 'char-dham-tour-package.html',
    title: 'Sacred Char Dham Yatra Tour Package',
    italianTitle: 'Sacred Char Dham Yatra Tour Package',
    subtitle: 'The holiest Himalayan pilgrimage: Yamunotri, Gangotri, Kedarnath & Badrinath by private mountain SUV',
    duration: '12 Days / 11 Nights',
    days: 12,
    nights: 11,
    priceEUR: 890,
    priceNote: 'total rate for private mountain SUV with veteran Himalayan hill chauffeur',
    category: 'spiritual',
    image: '/images/tour/tour-15.webp',
    route: ['Haridwar', 'Barkot', 'Yamunotri', 'Uttarkashi', 'Gangotri', 'Guptkashi', 'Kedarnath', 'Pipalkoti', 'Badrinath', 'Rishikesh'],
    routeString: 'Haridwar · Yamunotri · Gangotri · Kedarnath · Badrinath · Rishikesh',
    overview: "The supreme spiritual journey of Hinduism in the high Garhwal Himalayas. Journey with an experienced Himalayan mountain chauffeur aboard a high-clearance SUV to visit the four sacred shrines: Yamunotri (origin of Yamuna), Gangotri (origin of Ganges), Kedarnath (sacred Jyotirlinga of Lord Shiva amidst glacial peaks), and Badrinath (abode of Lord Vishnu).",
    highlights: [
      'Complete sacred Darshan of all 4 sacred Himalayan Dham shrines',
      'Helicopter or trek assistance coordination for Kedarnath Temple',
      'Dip in the holy thermal hot springs of Surya Kund and Tapt Kund',
      'Experienced Himalayan mountain chauffeur with 15+ years of Char Dham driving',
      '24/7 dedicated pilgrimage assistance on WhatsApp'
    ],
    itinerary: [
      { day: 1, title: 'Haridwar to Barkot', description: 'Chauffeur pickup in Haridwar; scenic mountain drive to Barkot via Mussoorie and Kempty Falls.' },
      { day: 2, title: 'Barkot - Yamunotri - Barkot', description: 'Drive to Janki Chatti; trek or pony ride to Yamunotri Temple, Darshan, and return to Barkot.' },
      { day: 3, title: 'Barkot to Uttarkashi', description: 'Scenic drive along the Bhagirathi river to Uttarkashi; visit ancient Vishwanath Temple.' },
      { day: 4, title: 'Uttarkashi - Gangotri - Uttarkashi', description: 'Drive through beautiful Harsil Valley to sacred Gangotri Temple for holy bath and Darshan.' },
      { day: 5, title: 'Uttarkashi to Guptkashi', description: 'Mountain drive through Tehri Dam region into the Mandakini river valley of Guptkashi.' },
      { day: 6, title: 'Guptkashi to Kedarnath', description: 'Drive to Sonprayag/Gaurikund; trek or helicopter transfer to Kedarnath Temple for evening Aarti.' },
      { day: 7, title: 'Kedarnath to Guptkashi', description: 'Morning temple Darshan amidst snow peaks; trek down to Gaurikund and return to Guptkashi.' },
      { day: 8, title: 'Guptkashi to Badrinath', description: 'Scenic drive via Chopta and Joshimath to the holy shrine of Badrinath; attend evening Aarti.' },
      { day: 9, title: 'Badrinath Sightseeing & Pipalkoti', description: 'Morning bath in Tapt Kund, visit Mana Village (last village before Tibet), then drive to Pipalkoti.' },
      { day: 10, title: 'Pipalkoti to Srinagar / Devprayag', description: 'Descend along the Alaknanda river, witnessing the sacred confluence of rivers at Devprayag.' },
      { day: 11, title: 'Devprayag to Rishikesh', description: 'Drive to Rishikesh; visit Ram Jhula, Triveni Ghat, and attend the world-famous evening Ganga Aarti.' },
      { day: 12, title: 'Rishikesh to Haridwar / Delhi & Departure', description: 'Direct chauffeur transfer to Haridwar railway station or Delhi airport for your onward journey.' }
    ],
    inclusions: [
      'Private high-ground-clearance SUV (Innova Crysta / Scorpio) for all 12 days',
      'Veteran Himalayan mountain driver with over 15+ years of Char Dham experience',
      'All mountain toll taxes, green permits, parking fees, and driver allowances fully included'
    ],
    exclusions: ['Hotel and ashram stays', 'Helicopter / pony / doli charges for Kedarnath and Yamunotri'],
    faqs: [
      { q: 'When is the Char Dham Yatra open?', a: 'The temples open annually on Akshaya Tritiya (late April or early May) and close around Diwali (October/November).' },
      { q: 'Is bio-metric registration required?', a: 'Yes, Uttarakhand government registration is mandatory. We assist all our guests with complete advance registration.' }
    ],
    rating: 4.99,
    reviewsCount: 128
  }
];
