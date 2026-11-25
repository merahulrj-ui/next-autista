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
    overview: "Experience the sacred spirituality of Braj Bhoomi and the timeless romance of the Taj Mahal on this private 4-day overland chauffeur tour from Delhi. Travel along the Yamuna Expressway in an air-conditioned private vehicle to visit the sacred birthplace of Lord Krishna in Mathura, the evening temple bells and Banke Bihari aarti in Vrindavan, the UNESCO World Heritage Taj Mahal and Agra Fort, and the deserted Mughal red sandstone city of Fatehpur Sikri.",
    highlights: [
      'Door-to-door pickup and return at your hotel or Delhi Airport',
      'Rapid, comfortable transit along the modern 6-lane Yamuna Expressway',
      'Comprehensive visits to the Taj Mahal and Agra Fort without rush',
      'Optional spiritual stopover in Mathura or Vrindavan on the return drive',
      'Exclusive vehicle and dedicated chauffeur with zero rigid group tour schedules'
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Mathura & Sacred Vrindavan Temple Trail",
        description: "Your dedicated chauffeur greets you at your Delhi hotel or airport for a smooth morning departure along the Yamuna Expressway. Arrive in Mathura to explore Shri Krishna Janmasthan, Dwarkadhish Temple along the Yamuna Ghats, and the serene Vishram Ghat. In the afternoon, proceed to Vrindavan to experience Prem Mandir illuminated with evening light shows, Banke Bihari Temple, and ISKCON Temple amidst resonant devotional hymns."
      },
      {
        day: 2,
        title: "Vrindavan to Agra & Sunset at Mehtab Bagh",
        description: "After breakfast, enjoy a peaceful morning exploration of Vrindavan's Radha Raman Temple and Nidhivan grove before driving onwards to Agra (approx. 1.5 hours). Check into your Agra hotel and relax. In the late afternoon, your chauffeur escorts you to Mehtab Bagh (the Moonlight Garden) across the Yamuna River for a breathtaking sunset perspective of the Taj Mahal glowing in amber reflections without crowds."
      },
      {
        day: 3,
        title: "Sunrise at Taj Mahal, Agra Fort & Itimad-ud-Daulah",
        description: "Experience an unforgettable early dawn sunrise at the world-famous Taj Mahal as the morning mist lifts from the white Makrana marble dome. Return to your hotel for breakfast. Later, visit the imposing red sandstone ramparts of Agra Fort, where Mughal emperors ruled and Shah Jahan spent his final years gazing across the river. Conclude with a visit to the exquisite jewel-box tomb of Itimad-ud-Daulah (Baby Taj)."
      },
      {
        day: 4,
        title: "Fatehpur Sikri Imperial Citadels & Return to Delhi",
        description: "Depart Agra for the deserted 16th-century Mughal capital of Fatehpur Sikri, built by Emperor Akbar. Marvel at the soaring Buland Darwaza (Gate of Magnificence), the white marble tomb of Sufi saint Salim Chishti, and the red sandstone courtyards of Panch Mahal and Jodha Bai's Palace. In the afternoon, relax as your chauffeur drives you comfortably back to Delhi for your evening flight or hotel drop-off."
      }
    ],
    inclusions: [
      'Private air-conditioned car for the entire day',
      'Licensed professional English-speaking chauffeur',
      'All Yamuna Expressway tolls, fuel, state border permits, and parking charges',
      'Complimentary chilled bottled water on board'
    ],
    exclusions: ['Entrance tickets to the Taj Mahal and Agra Fort', 'Meals and personal expenses'],
    faqs: [
      {
        q: "Can the itinerary be completed as an express 2-day or 3-day tour instead?",
        a: "Yes, absolutely. Because this is a private chauffeur-driven tour, our concierge can compress this itinerary into an express 2-day or 3-day journey, or extend it to include Bharatpur bird sanctuary based on your flight schedule."
      },
      {
        q: "Is the Taj Mahal open every day of the week?",
        a: "The Taj Mahal is closed to visitors every Friday for prayers. Our travel planners ensure that your travel dates are arranged so your Agra sightseeing lands on an open day (Saturday through Thursday)."
      },
      {
        q: "Are highway tolls, state border permits, and parking included?",
        a: "Yes, 100%. Every tailor-made quote we provide includes all Yamuna Expressway toll plazas, Uttar Pradesh state tourist permits, parking charges, fuel, and driver allowances. Zero hidden road surcharges."
      }
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
    overview: "An all-encompassing 11-day overland royal circuit linking Delhi, the frescoed havelis of Mandawa, the desert citadel of Bikaner, the golden living fort of Jaisalmer, the indigo streets of Jodhpur, the marble wonders of Ranakpur, romantic Udaipur, and the Pink City of Jaipur.",
    highlights: [
      'Romantic Udaipur with private boat cruise on Lake Pichola',
      'Sacred pilgrimage temples of Pushkar and Ranakpur',
      'Sunrise Taj Mahal in Agra and Amber Fort in Jaipur'
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival & Private Chauffeur Greeting",
        description: "Warm airport welcome by your personal chauffeur and transfer to your hotel. Afternoon orientation drive around New Delhi's grand colonial landmarks."
      },
      {
        day: 2,
        title: "Delhi to Shekhawati (Mandawa Painted Havelis)",
        description: "Drive northwest to Mandawa. Explore the open-air art gallery of Shekhawati, marveling at hand-painted frescoes adorning centuries-old merchant mansions."
      },
      {
        day: 3,
        title: "Mandawa to Bikaner: Junagarh Fort & Camel Research Centre",
        description: "Overland drive across the Thar desert to Bikaner. Tour the unconquered red sandstone Junagarh Fort and visit the National Camel Research Farm."
      },
      {
        day: 4,
        title: "Bikaner to Jaisalmer: The Golden Desert Citadel",
        description: "Travel across the Thar desert highway to Jaisalmer. Enjoy sunset at Vyas Chhatri overlooking the golden limestone bastion of Sonar Qila."
      },
      {
        day: 5,
        title: "Sonar Qila, Intricate Havelis & Sunset Camel Trek",
        description: "Explore the living fort of Jaisalmer, carved Jain temples, and Patwon ki Haveli. Late afternoon camel safari and cultural music across the Sam Sand Dunes."
      },
      {
        day: 6,
        title: "Jaisalmer to Jodhpur: The Blue City",
        description: "Drive east to the Sun City of Jodhpur. Tour the massive Mehrangarh Fort perched 400 feet above the indigo city skyline, and visit Jaswant Thada cenotaphs."
      },
      {
        day: 7,
        title: "Jodhpur to Ranakpur Jain Temples & Lakeside Udaipur",
        description: "Scenic drive into the Aravali Range to visit the 1,444 uniquely carved marble pillars of Ranakpur. Continue to the romantic city of Udaipur."
      },
      {
        day: 8,
        title: "Udaipur Royal City Palace & Lake Pichola Cruise",
        description: "Comprehensive sightseeing of the grand City Palace, Saheliyon-ki-Bari gardens, and a sunset private boat cruise on Lake Pichola past Jag Mandir."
      },
      {
        day: 9,
        title: "Udaipur to the Pink City of Jaipur",
        description: "Comfortable highway drive northeast to Jaipur. Check into your heritage hotel and explore the bustling evening handicraft and jewelry bazaars."
      },
      {
        day: 10,
        title: "Jaipur Amber Fort, City Palace & Hawa Mahal",
        description: "Morning visit to Amber Fort, photo stop at the water palace Jal Mahal, and guided tours of City Palace courtyards and Jantar Mantar observatory."
      },
      {
        day: 11,
        title: "Jaipur to Delhi & International Airport Transfer",
        description: "Smooth morning highway drive back to Delhi with your chauffeur providing a punctual drop-off at Delhi International Airport for your departure flight."
      }
    ],
    inclusions: ['Dedicated private car and chauffeur for all 11 days'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
        q: "Why is this 11-day itinerary considered the definitive Rajasthan circuit?",
        a: "It combines all four major cultural realms of Rajasthan—Shekhawati frescoes, Thar desert dunes, Mewar lakes, and the royal capitals of Jaipur and Jodhpur—in one seamless, well-paced overland journey."
      },
      {
        q: "Can we upgrade our vehicle to a Toyota Innova Crysta?",
        a: "Yes. The Toyota Innova Crysta is our most recommended vehicle for this 11-day route due to its exceptional suspension, high ground clearance, and spacious dual-zone air conditioning."
      },
      {
        q: "Are all highway tolls, state border permits, and parking included?",
        a: "Yes, 100%. Every tailor-made quote covers all highway toll plazas, state commercial tourist taxes, parking charges, fuel, and driver allowances."
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
    overview: "Walk in the footsteps of Rajput kings and Mughal emperors on this definitive 10-day architectural pilgrimage. Explore India's most unconquered fortifications: the imposing ramparts of Delhi's Red Fort, the Taj Mahal and Agra Fort, Jaipur's Amber Fort, the impregnable cliff of Jodhpur's Mehrangarh, the lakeside grandeur of Udaipur, and the colossal bastion of Chittorgarh.",
    highlights: [
      'The colossal hill fort of Chittorgarh (UNESCO World Heritage)',
      'Mehrangarh Fort in Jodhpur and Amber Fort in Jaipur',
      'The red sandstone Agra Fort and the Taj Mahal'
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Imperial Heritage & Moghul Bastions",
        description: "Your chauffeur greets you at Delhi airport. Tour the monumental Red Fort (Lal Qila), Jama Masjid, and Humayun's Tomb, the architectural precursor to the Taj Mahal."
      },
      {
        day: 2,
        title: "Delhi to Agra & Agra Fort Royal Palaces",
        description: "Cruise along the Yamuna Expressway to Agra. Tour the massive red sandstone Agra Fort, visiting the Jahangiri Mahal, Diwan-i-Khas, and the marble balcony where Shah Jahan was imprisoned."
      },
      {
        day: 3,
        title: "Sunrise at Taj Mahal, Fatehpur Sikri & Drive to Jaipur",
        description: "Dawn sunrise visit to the Taj Mahal. Continue to the abandoned red sandstone Mughal capital of Fatehpur Sikri and the ancient stepwell of Abhaneri en route to Jaipur."
      },
      {
        day: 4,
        title: "Jaipur Fortresses: Amber Fort, Jaigarh & Nahargarh",
        description: "A full day dedicated to Rajput military architecture: the royal palaces of Amber Fort, the cannon foundry of Jaigarh Fort with the world's largest wheeled cannon (Jaivana), and the sunset battlements of Nahargarh Fort overlooking the Pink City."
      },
      {
        day: 5,
        title: "Jaipur to Jodhpur via Sacred Pushkar",
        description: "Drive through the Aravali foothills, pausing at the sacred lake and temples of Pushkar before reaching the Sun City of Jodhpur. Evening view of illuminated Mehrangarh."
      },
      {
        day: 6,
        title: "Mehrangarh Fort: The Citadel of the Sun",
        description: "Explore the sheer rocky ramparts and museum treasures of Mehrangarh Fort, Jaswant Thada marble cenotaphs, and the Art Deco royal palace of Umaid Bhawan."
      },
      {
        day: 7,
        title: "Jodhpur to Kumbhalgarh Fort & Udaipur",
        description: "Overland drive to Kumbhalgarh Fort to walk along the 36-kilometer-long stone rampart—the second longest wall in the world—and the carved marble temples of Ranakpur, arriving in Udaipur."
      },
      {
        day: 8,
        title: "Udaipur Royal City Palace Complex & Lake Pichola",
        description: "Full day exploring the colossal City Palace of Udaipur overlooking Lake Pichola, followed by an evening private boat cruise past the floating Lake Palace."
      },
      {
        day: 9,
        title: "Chittorgarh Fort: The Legend of Rajput Chivalry",
        description: "Day excursion to the 700-acre clifftop bastion of Chittorgarh Fort (UNESCO World Heritage). Marvel at the Tower of Victory (Vijay Stambh), Kirti Stambh, and Padmini's Palace."
      },
      {
        day: 10,
        title: "Udaipur / Delhi Departure Transfer",
        description: "Transfer to Udaipur Airport or relax as your private chauffeur drives you comfortably back to Delhi for your international return flight."
      }
    ],
    inclusions: ['Private car with chauffeur for all 10 days'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
        q: "Are monument entry tickets included or can we buy them on the spot?",
        a: "Monument tickets can be purchased directly at ticket windows or booked online via the ASI portal. Your chauffeur drops you right at the monument entrance and assists you with ticket guidance."
      },
      {
        q: "How much walking is required to explore these historical forts?",
        a: "Forts like Amber, Mehrangarh, and Chittorgarh have paved paths and golf carts or elevators where available. We recommend wearing comfortable walking shoes."
      },
      {
        q: "Are all vehicle highway tolls, parking fees, and interstate taxes included?",
        a: "Yes, 100%. All highway toll plazas, state commercial tourist taxes, parking charges, fuel, and driver lodging are included with zero surprise surcharges."
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
    overview: "Designed specifically for honeymooners and couples seeking an intimate, unrushed exploration of India's royal grandeur. Journey through Delhi, the sunrise romance of the Taj Mahal in Agra, the pink-hued palaces of Jaipur, the sacred lakeside ghats of Pushkar, the mighty indigo fortress of Jodhpur, romantic sunset boat cruises on Udaipur's Lake Pichola, and the misty hills of Mount Abu.",
    highlights: [
      'Private romantic boat cruise on Lake Pichola',
      'Hand-in-hand sunrise viewing at the Taj Mahal',
      'Intimate dining recommendations at panoramic rooftop terraces',
      'Discreet, professional chauffeur on standby at all times'
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Heritage Welcome",
        description: "Your professional English-speaking chauffeur warmly welcomes you at Delhi International Airport with a personalized placard and transfers you to your luxury hotel. Spend the afternoon resting from your flight or taking a gentle evening drive past India Gate and the illuminated President's Palace along Rajpath."
      },
      {
        day: 2,
        title: "Delhi to Agra & Romantic Sunset at Mehtab Bagh",
        description: "Depart Delhi in your private air-conditioned vehicle along the Yamuna Expressway to Agra. Check into your hotel and freshen up. In the late afternoon, enjoy an exclusive sunset visit to Mehtab Bagh, admiring the romantic silhouette of the Taj Mahal reflected across the quiet waters of the Yamuna River."
      },
      {
        day: 3,
        title: "Sunrise at the Taj Mahal, Agra Fort & Drive to Jaipur",
        description: "Witness the awe-inspiring sunrise over the ivory-white marble domes of the Taj Mahal. Return for a leisurely champagne breakfast, followed by a visit to Agra Fort. Continue your journey to Jaipur via the ghost city of Fatehpur Sikri and the ancient stepwell of Abhaneri (Chand Baori), arriving in the Pink City by evening."
      },
      {
        day: 4,
        title: "Jaipur Royal Palaces & Romantic Hilltop Fortresses",
        description: "Explore the regal splendors of the Pink City starting with the golden ramparts of Amber Fort, followed by panoramic photo stops at Jal Mahal (Water Palace) floating in Man Sagar Lake. Tour the City Palace courtyards, the astronomical observatory Jantar Mantar, and the honeycomb facade of Hawa Mahal."
      },
      {
        day: 5,
        title: "Jaipur to Sacred Pushkar Lake & Rose Valley",
        description: "Drive through scenic rural Aravali hills toward sacred Pushkar, surrounded by tranquil rose plantations. Check into your heritage resort. Stroll hand-in-hand around the 52 sacred bathing ghats, attend the evocative evening Maha Aarti ceremony with ringing brass bells, and visit the rare 14th-century Lord Brahma Temple."
      },
      {
        day: 6,
        title: "Pushkar to Jodhpur Blue City & Sunset at Mehrangarh",
        description: "Travel west toward the Sun City of Jodhpur. Arrive and check into your boutique heritage haveli. In the late afternoon, visit the monumental Mehrangarh Fort perched on a sheer rocky cliff 400 feet above the skyline, witnessing the indigo-painted houses of the old quarter turn violet at dusk."
      },
      {
        day: 7,
        title: "Jodhpur to Romantic Lakeside Udaipur via Ranakpur",
        description: "Drive south through the scenic valleys of the Aravali Range to Ranakpur, home to the breathtaking 15th-century white marble Jain Temple supported by 1,444 uniquely carved pillars. Continue onward to romantic Udaipur, the 'Venice of the East', checking into your lakeside palace hotel."
      },
      {
        day: 8,
        title: "Udaipur Royal City Palace & Private Lake Pichola Boat Cruise",
        description: "Spend an enchanting day exploring the massive City Palace complex overlooking Lake Pichola, the ornamental fountains of Saheliyon-ki-Bari, and Jagdish Temple. Conclude the evening with an exclusive private boat cruise on Lake Pichola, gliding past Jag Mandir Island and the floating Taj Lake Palace."
      },
      {
        day: 9,
        title: "Udaipur to Mount Abu Hilltop Oasis & Sunset Point",
        description: "Ascend the cool winding ghats to Rajasthan's only hill station, Mount Abu (1,220m altitude). Check into your colonial resort. Enjoy a relaxing afternoon boat ride on serene Nakki Lake, surrounded by curious rock formations, and witness a magnificent panoramic sunset from Sunset Point overlooking the deep plains."
      },
      {
        day: 10,
        title: "Dilwara Marble Temples & Departure Transfer",
        description: "Visit the world-renowned Dilwara Jain Temples, legendary for their delicate marble carvings resembling translucent lace. After a scenic descent, your chauffeur drives you to Udaipur or Ahmedabad airport for your onward romantic journey or international flight."
      }
    ],
    inclusions: ['Executive private vehicle with dedicated chauffeur'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
        q: "Can we arrange special honeymoon heritage hotel stays and lake-view dinners?",
        a: "Yes, absolutely. Our concierge specializes in curating bespoke romantic stays, including candlelit dinners overlooking Lake Pichola, heritage palace room upgrades, and private boat charters."
      },
      {
        q: "Is the travel pacing suitable for couples who want to relax rather than rush?",
        a: "Yes, 100%. This tour is specifically designed with relaxed morning departure times, scenic pauses, and 2-night stays in key romantic cities like Jaipur and Udaipur so you never feel hurried."
      },
      {
        q: "Which vehicle is recommended for a comfortable couples tour in Rajasthan?",
        a: "For couples, we recommend either the comfortable Toyota Innova Crysta for supreme highway suspension and luggage room, or an executive sedan like the Maruti Dzire."
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
    overview: "Escape into the cool, lush heights of Mount Abu—Rajasthan's solitary hilltop sanctuary set at 1,220 meters amidst the Aravali mountain range. This 5-day overland journey blends the miraculous 11th-century marble filigree of the Dilwara Temples, scenic boat rides across sacred Nakki Lake, dramatic sunsets over rugged granite cliffs, and ancient fortifications at Achalgarh.",
    highlights: [
      'Dilwara marble temples carved with microscopic gossamer delicacy',
      'Sunset at Nakki Lake and sweeping vistas from Sunset Point',
      'Guru Shikhar peak, the highest mountain summit in Rajasthan'
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ahmedabad / Udaipur & Scenic Mountain Drive to Mount Abu",
        description: "Your private chauffeur welcomes you at Ahmedabad or Udaipur airport/railway station. Leave the desert plains behind as your air-conditioned vehicle climbs the winding mountain pass of the Aravali Range into the verdant pine-scented hills of Mount Abu. Check into your heritage hotel and enjoy a tranquil mountain evening stroll along Nakki Lake."
      },
      {
        day: 2,
        title: "World-Famous Dilwara Temples & Nakki Lake Boat Cruise",
        description: "Dedicate the morning to the architectural wonder of the Dilwara Jain Temples (Vimal Vasahi and Luna Vasahi), revered globally for their intricate marble ceilings that resemble carved ivory lace. In the afternoon, enjoy a relaxing pedal or shikara boat cruise on Nakki Lake, followed by a visit to the famous Toad Rock for scenic views."
      },
      {
        day: 3,
        title: "Achalgarh Fort, Guru Shikhar Peak & Sunset Point",
        description: "Journey to Guru Shikhar, the highest peak in Rajasthan and the Aravali Range (1,722 meters), offering panoramic vistas above the clouds. Explore the ancient 15th-century Achalgarh Fort built by Maharana Kumbha and the sacred Achaleshwar Mahadev Shiva Temple. In the late afternoon, head to Sunset Point as the sun dips into the crimson desert horizons."
      },
      {
        day: 4,
        title: "Trevor's Tank Wildlife Sanctuary & Peace Park",
        description: "Visit Trevor's Tank, a secluded nature reserve nestled in dense deciduous forest, renowned for birdwatching and crocodile sightings in their natural habitat. Continue to the Brahma Kumaris Peace Park for quiet contemplation among landscaped floral terraces and organic orchards, experiencing the restorative spiritual atmosphere of the hills."
      },
      {
        day: 5,
        title: "Scenic Descent & Airport / Station Departure Transfer",
        description: "Enjoy a peaceful breakfast amidst crisp mountain air before your chauffeur navigates the smooth downhill expressway return drive. Arrive comfortably at Udaipur Airport (approx. 3 hours) or Ahmedabad Airport (approx. 4.5 hours) with ample time for your scheduled onward flight."
      }
    ],
    inclusions: ['Private vehicle with experienced mountain driver'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
        q: "What is the best time of year to visit Mount Abu?",
        a: "Mount Abu is a pleasant year-round destination. It offers a refreshing escape from the summer heat between March and June, breathtaking green mist during the monsoon (July-September), and crisp, cool winters (October-February)."
      },
      {
        q: "Can this tour start from Ahmedabad instead of Udaipur?",
        a: "Yes. We offer seamless door-to-door private chauffeur pickups and drops from either Ahmedabad, Udaipur, or Abu Road railway station depending on your travel plans."
      },
      {
        q: "Are highway tolls and mountain permit taxes included in our quote?",
        a: "Yes, 100%. All highway toll plazas, Mount Abu municipal entry taxes, parking fees, vehicle fuel, and driver allowances are fully covered in your personalized all-inclusive quote."
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
    overview: "Venture deep into the mystical golden dunes of the Great Thar Desert on this 6-day overland adventure. Beginning in the Sun City of Jodhpur, journey to the living golden citadel of Jaisalmer, traverse ancient silk route caravan trails on camelback, spend an unforgettable starlit night in luxury desert tents at Sam Sand Dunes, and explore abandoned sandstone ghost towns.",
    highlights: [
      'Sunset camel trek across pristine undulating desert dunes',
      'Jaisalmer Fort and ancient sandstone merchant havelis',
      'Traditional Rajasthani feast cooked over open embers'
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jodhpur & Transfer to the Blue City Haveli",
        description: "Your dedicated chauffeur meets you at Jodhpur Airport or Railway Station and transfers you to your boutique heritage haveli in the old quarter. After settling in, take a walk through the bustling clock tower spice market and Sardar Bazaar, soaking in the sights, aromas, and vibrant indigo-washed alleys."
      },
      {
        day: 2,
        title: "Mehrangarh Fort & Overland Journey to Jaisalmer Golden City",
        description: "Ascend to the majestic Mehrangarh Fort and Jaswant Thada marble cenotaphs in Jodhpur. Following a traditional Rajasthani lunch, embark on a scenic 4.5-hour highway drive across the arid scrublands of the Thar Desert to Jaisalmer, watching the desert sunset tint the sandstone fortifications in molten gold."
      },
      {
        day: 3,
        title: "Sonar Qila Living Citadel & Intricate Merchant Havelis",
        description: "Discover the golden jewel of Jaisalmer—Sonar Qila (Golden Fort), one of the world's only living citadels where 3,000 residents still reside inside the medieval bastions. Tour the 12th-century Jain temples, Patwon ki Haveli with its delicate sandstone lattices, Salim Singh ki Haveli, and serene Gadisar Lake."
      },
      {
        day: 4,
        title: "Ghost Town of Kuldhara, Camel Caravan & Sam Sand Dunes Camp",
        description: "Leave the city behind to visit the eerie ruins of Kuldhara, a 13th-century Brahmin village abandoned overnight in protest of royal tyranny. Continue deep into the rolling golden dunes of Sam. Mount your camel for a mesmerizing 2-hour sunset caravan across the rippling sand dunes, followed by traditional Rajasthani folk dance, music, and an authentic dinner around a desert campfire under the Milky Way."
      },
      {
        day: 5,
        title: "Desert Sunrise & Return Drive to Jodhpur",
        description: "Wake early for a magical desert sunrise painting the dunes in pale copper and rose. Enjoy a hearty camp breakfast before your chauffeur drives you back across the desert highway toward Jodhpur. Check into your hotel and enjoy an evening at leisure, perhaps dining on a rooftop terrace with floodlit views of Mehrangarh Fort."
      },
      {
        day: 6,
        title: "Umaid Bhawan Palace & Departure Transfer",
        description: "Conclude your desert journey with a visit to Umaid Bhawan Palace, one of the world's largest private residences and an Art Deco masterpiece. Your chauffeur transfers you promptly to Jodhpur Airport or Railway Station for your departure flight."
      }
    ],
    inclusions: ['Private car and dedicated chauffeur for the entire journey'],
    exclusions: ['Tent accommodations and meals'],
    faqs: [
      {
        q: "Are the desert tents at Sam Sand Dunes equipped with modern amenities?",
        a: "Yes. We partner exclusively with premium desert camps featuring private luxury swiss tents with attached western bathrooms, hot water showers, comfortable beds, electricity, and clean linen."
      },
      {
        q: "Is camel riding mandatory, or can we do a 4x4 Jeep Safari instead?",
        a: "Both options are available. If you prefer not to ride a camel, you can enjoy an exhilarating 4x4 Jeep Dune Bashing safari across the sand crests to reach the sunset viewpoint in complete comfort."
      },
      {
        q: "Is drinking water and vehicle air conditioning provided during the desert drive?",
        a: "Yes. Our vehicles carry complimentary bottled mineral water throughout the journey, and high-output dual-zone air conditioning ensures total comfort even during warm afternoon desert stretches."
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
    overview: "A premier 8-day wildlife and heritage overland expedition connecting North India's three greatest sanctuaries: Sariska Tiger Reserve, Ranthambore National Park, and Keoladeo Ghana UNESCO Bird Sanctuary in Bharatpur, culminating at the Taj Mahal in Agra and the royal monuments of Jaipur.",
    highlights: [
      'Tiger safaris in Ranthambore National Park',
      'Eco-rickshaw birdwatching through Keoladeo wetland sanctuary in Bharatpur',
      'Sunrise at the Taj Mahal in Agra'
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Sariska Tiger Reserve & Aravali Wilderness",
        description: "Morning pickup in Delhi by your private chauffeur and a smooth drive south toward Sariska Tiger Reserve in the Aravali Hills (approx. 4 hours). Check into your wilderness resort. In the afternoon, enjoy a quiet safari drive through deciduous teak forests, tracking leopards, striped hyenas, sambar deer, and the majestic Bengal tiger."
      },
      {
        day: 2,
        title: "Sariska to the Pink City of Jaipur",
        description: "Take an optional dawn jungle drive before breakfast. Proceed through scenic rural routes to Jaipur, the Pink City. In the afternoon, tour the astronomical observatory Jantar Mantar and the royal City Palace, home to museum galleries of Rajput warrior armor, royal textiles, and gilded courtyards."
      },
      {
        day: 3,
        title: "Amber Fort, Jal Mahal & Overland to Ranthambore",
        description: "Visit the towering Amber Fort early in the morning before crowds arrive, admiring the dazzling mirror work of Sheesh Mahal. Following lunch, your chauffeur drives you southeast across the Rajasthan countryside to Sawai Madhopur, the gateway to world-renowned Ranthambore National Park."
      },
      {
        day: 4,
        title: "Full Day Tiger Tracking Game Drives in Ranthambore",
        description: "Embark on exhilarating dawn and afternoon game drives in an open 4x4 forest vehicle accompanied by an expert government-certified naturalist. Track apex predators among ancient banyan trees, crumbling medieval ruins, and scenic lakes where Royal Bengal Tigers hunt in broad daylight."
      },
      {
        day: 5,
        title: "Ranthambore Fort & Drive to Bharatpur Bird Sanctuary",
        description: "Ascend to the 10th-century Ranthambore Fort within the park for panoramic views across tiger territory. Later, drive northeast to Bharatpur (approx. 3.5 hours). Check into your hotel near Keoladeo Ghana National Park, a UNESCO World Heritage wetland recognized as one of the world's supreme waterfowl habitats."
      },
      {
        day: 6,
        title: "Cycle Rickshaw Bird Safari in Keoladeo & Drive to Agra",
        description: "Experience a tranquil morning cycle-rickshaw safari steered by expert local ornithologist guides. Spot painted storks, Siberian cranes, kingfishers, and pelicans. In the afternoon, drive 1 hour to Agra, stopping en route at the abandoned red sandstone Mughal city of Fatehpur Sikri."
      },
      {
        day: 7,
        title: "Sunrise at Taj Mahal, Agra Fort & Return to Delhi",
        description: "Witness the breathtaking sunrise over the pearlescent marble dome of the Taj Mahal. Return to your hotel for breakfast, followed by an exploration of Agra Fort. In the afternoon, drive along the Yamuna Expressway back to Delhi, checking into your hotel."
      },
      {
        day: 8,
        title: "Delhi Sightseeing & Airport Departure Transfer",
        description: "Explore Humayun's Tomb and Qutub Minar in New Delhi before your chauffeur provides a punctual transfer to Delhi International Airport for your return flight."
      }
    ],
    inclusions: ['Private air-conditioned car and chauffeur for all 8 days'],
    exclusions: ['Park entrance permits and hotel accommodations'],
    faqs: [
      {
        q: "How are the wildlife safari bookings handled for Ranthambore and Sariska?",
        a: "Forest department safari permits in Ranthambore are strictly regulated and released in limited quotas. Our concierge handles all advance permit reservations, vehicle allotments, and naturalist guides on your behalf."
      },
      {
        q: "When is the best season to spot Bengal Tigers in Ranthambore?",
        a: "The park is open from October 1st to June 30th. Tiger sightings are good throughout the season, but peak between February and May when animals congregate around diminishing waterholes."
      },
      {
        q: "Are the jungle safaris conducted in our private chauffeur car or in park vehicles?",
        a: "By forest regulation, safaris inside national park zones are conducted in official open 4x4 Maruti Gypsy jeeps or 20-seater canters accompanied by certified forest guides. Your private chauffeur transfers you between cities and parks in total comfort."
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
    overview: "Immerse yourself in the living traditions, sacred rituals, folk artistry, and desert heritage of Rajasthan on this 10-day cultural overland journey. From the frescoed merchant havelis of Shekhawati and the camel breeding plains of Bikaner to the desert bards of Jaisalmer, eco-conscious Bishnoi tribal hamlets, and the artisan bazaars of Jaipur.",
    highlights: [
      'Authentic jeep tour through rural Bishnoi tribal villages near Jodhpur',
      'Traditional wooden block-printing workshops in Sanganer',
      'Interacting directly with traditional potters and silversmiths'
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival & Cultural Orientation",
        description: "Warm airport greeting by your English-speaking chauffeur and private transfer to your hotel. Evening orientation drive around the grand colonial boulevards of New Delhi."
      },
      {
        day: 2,
        title: "Delhi to Shekhawati: The Open-Air Art Gallery",
        description: "Drive northwest into the semi-arid Shekhawati region to Mandawa. Wander through winding heritage lanes adorned with magnificent 18th-century painted merchant havelis, depicting mythological legends, European trains, and intricate gold-leaf frescoes."
      },
      {
        day: 3,
        title: "Shekhawati to Bikaner: Desert Citadels & Camel Culture",
        description: "Travel west across the Thar sands to Bikaner. Tour the unconquered Junagarh Fort with its lavish Anup Mahal gold leafwork, and visit the National Research Centre on Camels to sample fresh camel milk ice cream and observe working desert herds."
      },
      {
        day: 4,
        title: "Bikaner to Jaisalmer Across the Golden Sands",
        description: "Overland drive across the desert highway to Jaisalmer, stopping at the historic battlements of Pokhran. Arrive in Jaisalmer as the evening sun transforms the sandstone fort into glowing amber."
      },
      {
        day: 5,
        title: "Living Fort Heritage, Artisan Bazaars & Sunset Sand Dunes",
        description: "Walk the medieval stone alleys inside the living fort of Jaisalmer, visiting hand-carved Jain temples and vibrant leatherwork and mirror-embroidered textile shops. In the late afternoon, enjoy a camel trek across the Sam Sand Dunes."
      },
      {
        day: 6,
        title: "Jaisalmer to Jodhpur: The Blue City & Bishnoi Safari",
        description: "Drive eastward to Jodhpur. In the afternoon, embark on an authentic rural 4x4 safari to visit the indigenous Bishnoi villages—India's first environmentalists—witnessing traditional pottery, opium rituals, and roaming blackbuck antelopes."
      },
      {
        day: 7,
        title: "Mehrangarh Fort & Overland to Udaipur via Ranakpur",
        description: "Explore the regal Mehrangarh Fort in Jodhpur before driving south through the green valleys of Ranakpur to marvel at the 1,444 intricately carved marble pillars of the 15th-century Jain temple. Arrive in lakeside Udaipur by evening."
      },
      {
        day: 8,
        title: "Udaipur Royal City Palace & Folk Dance at Bagore ki Haveli",
        description: "Tour the sprawling waterfront City Palace of Udaipur, followed by a romantic sunset boat cruise on Lake Pichola. In the evening, attend the vibrant Dharohar Rajasthani folk dance and puppet performance at historic Bagore ki Haveli."
      },
      {
        day: 9,
        title: "Udaipur to Jaipur: Pink City Artisan Workshops",
        description: "Drive northeast to Jaipur (approx. 6 hours). In the afternoon, visit traditional hand-block printing workshops in Sanganer and observe master gemstone cutters and blue pottery artisans practicing centuries-old crafts."
      },
      {
        day: 10,
        title: "Amber Fort Morning Glory & Return Drive to Delhi",
        description: "Visit Amber Fort and Hawa Mahal before embarking on a comfortable afternoon highway drive along the Delhi-Jaipur Expressway back to Delhi for your evening flight."
      }
    ],
    inclusions: ['Private vehicle with dedicated chauffeur for all 10 days'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
        q: "Are the cultural village visits authentic and respectful?",
        a: "Yes. Our village experiences, particularly among the Bishnoi community, are conducted in close partnership with local elders, ensuring cultural dignity, genuine interaction, and zero commercial pressure."
      },
      {
        q: "Does this tour allow time for authentic souvenir shopping without traps?",
        a: "Yes, absolutely. Under our strict zero-commission policy, your chauffeur never forces you into commission shops. If you wish to purchase authentic textiles or jewellery, your driver takes you to government-certified cooperatives."
      },
      {
        q: "Can we extend this tour to include the Taj Mahal in Agra?",
        a: "Yes, very easily. We can seamlessly add a 1-night stop in Agra between Jaipur and Delhi so you can experience sunrise at the Taj Mahal."
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
    overview: "A vibrant 9-day overland journey celebrating the kaleidoscopic palette of Rajasthan: the Pink City of Jaipur, the Blue City of Jodhpur, the Golden Citadel of Jaisalmer, the Lake City of Udaipur, and the sacred white marble ghats of Pushkar.",
    highlights: [
      'Jaipur (Pink City), Udaipur (White City), Agra & Taj Mahal',
      'Comfortable private road transfers with regular refreshment pauses'
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to the Pink City of Jaipur",
        description: "Private chauffeur pickup in Delhi and a smooth morning highway transfer to Jaipur along the Delhi-Mumbai Expressway. Afternoon exploration of the bustling Pink City bazaars (Johari and Bapu Bazaars)."
      },
      {
        day: 2,
        title: "Jaipur Forts, Palaces & Floating Pavilions",
        description: "Comprehensive sightseeing of Amber Fort, Jal Mahal, City Palace, Hawa Mahal, and the astronomical dials of Jantar Mantar."
      },
      {
        day: 3,
        title: "Jaipur to Sacred Pushkar Lake",
        description: "Drive through rural hills to the holy pilgrimage town of Pushkar. Visit the sacred lake ghats and the world-renowned Brahma Temple, experiencing serene evening chants."
      },
      {
        day: 4,
        title: "Pushkar to Jodhpur: The Blue City",
        description: "Drive west to Jodhpur. Explore the sheer cliffs and royal galleries of Mehrangarh Fort and Jaswant Thada, overlooking the sea of indigo-blue painted houses."
      },
      {
        day: 5,
        title: "Jodhpur to Jaisalmer: The Golden Citadel",
        description: "Cross the Thar scrublands to Jaisalmer. Enjoy sunset at Vyas Chhatri, overlooking the golden yellow sandstone fort glowing against the evening sky."
      },
      {
        day: 6,
        title: "Jaisalmer Fort, Havelis & Sam Sand Dunes",
        description: "Tour Sonar Qila and Patwon ki Haveli in the morning, followed by an afternoon camel safari across the golden dunes of Sam with sunset views."
      },
      {
        day: 7,
        title: "Jaisalmer to Ranakpur Marble Temples & Udaipur",
        description: "Drive south through the Aravalis to the masterwork Jain temple at Ranakpur, continuing onwards to the romantic lake city of Udaipur."
      },
      {
        day: 8,
        title: "Udaipur Royal City Palace & Lake Pichola Cruise",
        description: "Explore Udaipur City Palace, Saheliyon-ki-Bari gardens, and enjoy an evening sunset boat cruise on Lake Pichola past Jag Mandir Island."
      },
      {
        day: 9,
        title: "Udaipur Departure or Return Drive",
        description: "Transfer to Udaipur Airport for your onward flight, or relax as your private chauffeur drives you comfortably back to Delhi or Ahmedabad."
      }
    ],
    inclusions: ['Private air-conditioned car with dedicated chauffeur for 9 days'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
        q: "Is this 9-day itinerary suitable for first-time visitors to India?",
        a: "Yes, this is one of our most popular overland circuits for first-time travelers because it covers all major color-themed cities of Rajasthan with a seasoned driver taking care of all navigation, luggage, and road safety."
      },
      {
        q: "Can we choose the vehicle model for this tour?",
        a: "Yes. You can select between an executive sedan (Swift Dzire / Etios) for 1-2 passengers or a spacious luxury crossover SUV (Toyota Innova Crysta) for up to 5 passengers."
      },
      {
        q: "Are all toll plazas and state tourist border permits included?",
        a: "Yes, 100%. All highway tolls, interstate tourist taxes, parking charges, fuel, and driver lodging are included with zero surprise surcharges."
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
    overview: "Discover the valor, chivalry, and unyielding romance of the Mewar Kingdom on this intensive 5-day overland tour. Explore the white marble palaces and shimmering waters of Udaipur, the towering Great Wall of Kumbhalgarh Fort, the 1,444 carved pillars of Ranakpur, and the colossal clifftop bastion of Chittorgarh Fort.",
    highlights: [
      'Udaipur City Palace and Lake Pichola boat cruise',
      'Kumbhalgarh Fort and its colossal 36-kilometer stone wall',
      'Ranakpur Jain Temples with 1,444 individually carved marble pillars'
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Udaipur: City of Lakes & Palaces",
        description: "Your private chauffeur welcomes you at Udaipur Airport or Railway Station and escorts you to your lakeside hotel. In the evening, take a leisurely stroll through the heritage alleys around Jagdish Temple and enjoy sunset views across Lake Pichola."
      },
      {
        day: 2,
        title: "Udaipur City Palace & Private Lake Pichola Boat Cruise",
        description: "Tour the grand City Palace complex, the largest royal palace in Rajasthan, housing crystal galleries, mirror mosaics, and the Maharana's royal court. Visit the maidens' gardens at Saheliyon-ki-Bari and conclude the day with a sunset private boat cruise on Lake Pichola."
      },
      {
        day: 3,
        title: "Kumbhalgarh Fort (The Great Wall of India) & Ranakpur",
        description: "Scenic drive into the rugged Aravali ranges to Kumbhalgarh Fort, whose 36-kilometer-long stone rampart is the second longest continuous wall in the world after the Great Wall of China. Continue downhill to Ranakpur to admire the breathtaking 15th-century white marble Jain Temple supported by 1,444 uniquely carved pillars."
      },
      {
        day: 4,
        title: "Day Excursion to Chittorgarh Fort: Cradle of Rajput Valor",
        description: "Embark on an overland excursion to Chittorgarh Fort (UNESCO World Heritage), the legendary capital of Mewar spanning 700 acres atop a high cliff. Visit the towering Vijay Stambh (Tower of Victory), Kirti Stambh, Padmini's Palace surrounded by lotus ponds, and the solemn site of historic Jauhar sacrifices."
      },
      {
        day: 5,
        title: "Sajjangarh Monsoon Palace & Departure Transfer",
        description: "Ascend to Sajjangarh (Monsoon Palace) perched high on Bansdara mountain for spectacular 360-degree panoramic views of Udaipur's lakes and countryside. Your chauffeur provides a prompt transfer to Udaipur Airport for your onward flight."
      }
    ],
    inclusions: ['Private vehicle and chauffeur for the entire circuit'],
    exclusions: ['Hotels and meals'],
    faqs: [
      {
        q: "How strenuous is the walking inside Chittorgarh and Kumbhalgarh Forts?",
        a: "Both forts are massive, but your private car drives you directly between major internal monuments inside Chittorgarh. In Kumbhalgarh, comfortable walking shoes are recommended for the ramparts."
      },
      {
        q: "Can this Mewar tour be extended to Jodhpur or Jaipur?",
        a: "Yes. Our concierge can effortlessly connect this Mewar circuit northward to Jodhpur (approx. 4.5 hours from Ranakpur) or Jaipur based on your holiday duration."
      },
      {
        q: "Are the vehicle and driver private for our group exclusively?",
        a: "Yes, 100%. You enjoy a private, dedicated vehicle and seasoned English-speaking chauffeur for your party alone, with total itinerary flexibility."
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
    overview: "An exhilarating 6-day private wildlife and wilderness circuit connecting the world-famous Royal Bengal Tigers of Ranthambore National Park with the exotic migratory bird wetlands of Keoladeo National Park in Bharatpur and the monumental wonders of the Golden Triangle (Delhi and Agra).",
    highlights: [
      'Two dedicated open jeep safaris in the core zones of Ranthambore',
      'Sunrise at the Taj Mahal in Agra',
      'Palace of Winds and Amber Fort in Jaipur'
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Ranthambore National Park Overland Transfer",
        description: "Meet your private chauffeur in Delhi and relax in your air-conditioned car as you travel south via the modern Delhi-Mumbai Expressway directly to Sawai Madhopur (approx. 5.5 hours). Check into your wilderness lodge and enjoy an evening wildlife documentary and campfire dinner."
      },
      {
        day: 2,
        title: "Morning & Afternoon Tiger Tracking Safaris in Ranthambore",
        description: "Experience two thrilling open 4x4 game drives in Ranthambore National Park led by certified forest naturalists. Track Bengal tigers along ancient banyan trails, medieval hunting lodges, and lake shores alongside leopards, marsh crocodiles, and sloth bears."
      },
      {
        day: 3,
        title: "Ranthambore Fort & Drive to Bharatpur Bird Wetland",
        description: "Visit the 10th-century Ranthambore Fort within the tiger reserve for breathtaking panoramic views over the forest canopy. Following lunch, drive 3.5 hours northeast to Bharatpur and check into your lodge near Keoladeo Ghana National Park."
      },
      {
        day: 4,
        title: "Keoladeo Bird Safari by Cycle Rickshaw & Drive to Agra",
        description: "Explore the UNESCO World Heritage wetlands of Bharatpur on quiet cycle rickshaws guided by trained ornithologists, spotting thousands of migratory waterfowl. In the afternoon, drive 1 hour to Agra, stopping en route at Emperor Akbar's abandoned capital of Fatehpur Sikri."
      },
      {
        day: 5,
        title: "Sunrise at the Taj Mahal & Agra Fort",
        description: "Witness the breathtaking dawn sunrise at the Taj Mahal as the marble turns from soft pink to radiant pearl. Tour the imposing halls of Agra Fort, followed by an afternoon visit to the delicate marble jewel-box tomb of Itimad-ud-Daulah."
      },
      {
        day: 6,
        title: "Yamuna Expressway Return Drive to Delhi",
        description: "Enjoy a relaxed breakfast before cruising smoothly along the Yamuna Expressway back to Delhi (approx. 3.5 hours) for your onward flight or hotel drop-off."
      }
    ],
    inclusions: ['Private car with chauffeur for all journeys'],
    exclusions: ['Safari permits and hotel stays'],
    faqs: [
      {
        q: "How many wildlife safaris are included in Ranthambore?",
        a: "This itinerary includes two distinct game drives (morning and afternoon) across different park zones to maximize your chances of spotting Royal Bengal Tigers in their natural environment."
      },
      {
        q: "Are the jungle safaris private in 4x4 Gypsy jeeps?",
        a: "We prioritize private 6-seater 4x4 open Gypsy vehicles for our guests, which offer superior photography angles and maneuverability compared to large canters."
      },
      {
        q: "Are all vehicle highway tolls and inter-state permits covered?",
        a: "Yes, 100%. All highway tolls, Rajasthan and Uttar Pradesh state commercial tourist taxes, fuel, parking, and driver lodging are included."
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
    overview: "Experience the golden age of aristocratic Indian travel. This 8-day package provides private luxury chauffeur liaison and overland coordination for the legendary Palace on Wheels royal heritage circuit across Delhi, Jaipur, Ranthambore, Chittorgarh, Udaipur, Jaisalmer, Jodhpur, Bharatpur, and Agra.",
    highlights: [
      'A globally acclaimed, award-winning luxury heritage rail journey',
      'Private royal cabins attended by dedicated uniformed khidmatgars (butlers)',
      'Personalized meet-and-greet chauffeur assistance in Delhi upon arrival and departure'
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Imperial Welcome & Boarding Liaison",
        description: "Private chauffeur pickup from Delhi International Airport. Enjoy a morning orientation tour of New Delhi (India Gate, Humayun's Tomb) before a seamless VIP escort to Safdarjung Railway Station for the royal red-carpet boarding welcome of the Palace on Wheels."
      },
      {
        day: 2,
        title: "Jaipur: The Pink City Royal Reception",
        description: "Arrive in Jaipur to a traditional royal greeting with elephant procession and Shehnai music. Sightseeing of Amber Fort, Hawa Mahal, and the royal observatories with private overland transfers."
      },
      {
        day: 3,
        title: "Sawai Madhopur (Ranthambore) & Chittorgarh Bastion",
        description: "Morning jungle game drive in Ranthambore Tiger Reserve tracking Royal Bengal Tigers, followed by an afternoon overland visit to the dramatic clifftop citadel of Chittorgarh Fort."
      },
      {
        day: 4,
        title: "Udaipur: City of Lakes & Lake Pichola Cruise",
        description: "Arrive in romantic Udaipur for exclusive visits to the City Palace courtyards, Saheliyon-ki-Bari gardens, and a boat ride past the floating Lake Palace."
      },
      {
        day: 5,
        title: "Jaisalmer: Desert Jewel & Sam Sand Dunes",
        description: "Discover the golden sandstone bastion of Sonar Qila, carved merchant havelis, and enjoy an evening camel safari across the sand dunes of Sam."
      },
      {
        day: 6,
        title: "Jodhpur: The Sun City & Mehrangarh Fort",
        description: "Explore the mighty ramparts of Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace in the Blue City of Jodhpur."
      },
      {
        day: 7,
        title: "Bharatpur Bird Sanctuary & Agra Taj Mahal",
        description: "Morning birdwatching in Keoladeo National Park Bharatpur, followed by an afternoon visit to the sublime white marble Taj Mahal and Agra Fort."
      },
      {
        day: 8,
        title: "Return to Delhi & Onward Airport Transfer",
        description: "The luxury train pulls into Delhi's Safdarjung Station. Your private chauffeur warmly greets you at the carriage platform and transfers you in an executive air-conditioned car to your hotel or Delhi International Airport."
      }
    ],
    inclusions: [
      'Exclusive private transfers in Delhi (airport, hotel, railway station)',
      'Luggage assistance and 24/7 concierge support'
    ],
    exclusions: ['Official Palace on Wheels rail carriage journey ticket'],
    faqs: [
      {
        q: "What does the chauffeur service provide for this luxury rail tour?",
        a: "Our service provides VIP private airport transfers, seamless station luggage liaison, pre- and post-tour Delhi hotel transfers, and dedicated local coordination throughout your royal journey."
      },
      {
        q: "Can we extend our stay with private overland touring before or after the train?",
        a: "Yes. Many of our guests choose to add extra days in Delhi, Varanasi, or the Himalayan foothills with our dedicated private chauffeur before boarding or after disembarking."
      },
      {
        q: "Are the station pickups flight-tracked and guaranteed?",
        a: "Yes, 100%. We monitor all international flight arrivals and train schedules in real time, ensuring your chauffeur is waiting for you with a personalized name placard at the platform."
      }
    ],
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
    overview: "Experience the world's most spectacular cultural congregation on this 7-day private overland tour to the annual Pushkar Camel Fair. Witness 50,000 decorated camels, horses, and cattle, desert turban-tying contests, holy sunrise dips in Pushkar Lake, devotional Maha Aarti ceremonies, and royal heritage touring across Delhi and Jaipur.",
    highlights: [
      'Attend the colorful competitions and folk spectacles of Pushkar Fair',
      'Camel beauty contests, bridal competitions, and dune races',
      'The sacred full-moon pilgrimage bath in Pushkar Lake at Kartik Purnima'
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival & Private Chauffeur Welcome",
        description: "Your dedicated chauffeur welcomes you at Delhi International Airport and transfers you to your hotel. Rest from your flight or enjoy an afternoon drive through New Delhi's wide tree-lined avenues."
      },
      {
        day: 2,
        title: "Delhi to the Pink City of Jaipur",
        description: "Depart Delhi in your private air-conditioned vehicle along the expressway to Jaipur. Tour the City Palace complex and explore the bustling evening artisan bazaars."
      },
      {
        day: 3,
        title: "Amber Fort, Hawa Mahal & Drive to Pushkar Fairgrounds",
        description: "Visit Amber Fort and Jal Mahal in the morning before driving westward through the Aravali foothills to the sacred pilgrimage town of Pushkar. Check into your heritage hotel or luxury fair tent camp."
      },
      {
        day: 4,
        title: "Pushkar Camel & Livestock Fair Immersion",
        description: "Spend a thrilling full day at the fairgrounds observing the trading of thousands of camels adorned with colorful beads and pom-poms, camel beauty contests, mustache competitions, and vibrant Rajasthani folk musicians."
      },
      {
        day: 5,
        title: "Sacred Ghats, Maha Aarti & Lord Brahma Temple",
        description: "Experience the deeply spiritual side of Pushkar. Walk the 52 sacred lake ghats during dawn prayers, visit the rare 14th-century Jagatpita Brahma Temple, and participate in the evening Maha Aarti with hundreds of oil lamps."
      },
      {
        day: 6,
        title: "Ajmer Dargah Sharif & Return Drive to Jaipur",
        description: "Visit the revered Sufi shrine of Khwaja Moinuddin Chishti in neighboring Ajmer (Dargah Sharif) before driving back to Jaipur. Relax in your hotel or enjoy fine dining at a palace restaurant."
      },
      {
        day: 7,
        title: "Jaipur to Delhi & International Airport Transfer",
        description: "Comfortable morning highway drive back to Delhi with your chauffeur providing a punctual drop-off at Delhi International Airport for your return flight."
      }
    ],
    inclusions: ['Private car with dedicated chauffeur for all 7 days', 'All vehicle and highway costs included'],
    exclusions: ['Hotels, luxury tents, and meals'],
    faqs: [
      {
        q: "When does the annual Pushkar Camel Fair take place?",
        a: "The Pushkar Fair takes place annually during the auspicious Hindu lunar month of Kartik (usually October or November) culminating on Kartik Purnima (full moon night). Our concierge confirms the exact festival dates for your travel year."
      },
      {
        q: "Is photography welcomed at the fairgrounds?",
        a: "Yes! The Pushkar Camel Fair is a world-renowned paradise for cultural, portrait, and documentary photographers. The local camel herders and musicians are famously warm and welcoming."
      },
      {
        q: "Are highway tolls, parking fees, and festival taxes included?",
        a: "Yes, 100%. All highway toll plazas, fairground parking fees, state commercial tourist taxes, fuel, and driver allowances are fully covered in your all-inclusive quote."
      }
    ],
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
    overview: "Ascend into the breathtaking snowy panoramas and pine-scented valleys of the Western Himalayas on this 7-day private overland mountain tour. Travel from Delhi past Chandigarh into the colonial summer capital of Shimla, through the apple orchards of Kullu Valley, and into the adventure-filled alpine wonderland of Manali and Solang Valley.",
    highlights: [
      'Stroll along the historic Mall Road and Ridge in colonial Shimla',
      'Snow-capped Himalayan views and adventure activities in Solang Valley',
      'Ancient wooden architecture of Hadimba Temple in Manali',
      'Scenic drive through the lush Beas River valley and Kullu shawl markets',
      'Experienced hill-certified chauffeur ensuring maximum comfort and safety'
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Shimla via the Himalayan Foothills",
        description: "Your private chauffeur picks you up from your Delhi hotel or airport for a scenic mountain drive northward past Chandigarh and into the foothills of Himachal Pradesh (approx. 7 hours). Check into your Shimla resort and enjoy the cool mountain air."
      },
      {
        day: 2,
        title: "Colonial Shimla, Mall Road & Kufri Snow Viewpoint",
        description: "Explore the British colonial heritage of Shimla: the neo-Gothic Christ Church on the Ridge, the historic Viceregal Lodge, and vibrant Mall Road. In the afternoon, drive to Kufri (2,500m) for panoramic views of snow-capped Himalayan peaks."
      },
      {
        day: 3,
        title: "Shimla to Manali Through Scenic Kullu Valley",
        description: "Embark on an enchanting 7-hour mountain drive following the rushing Beas River through the emerald Kullu Valley. Pause at local handloom shawls weaving centers and the Pandoh Dam before arriving in picturesque Manali."
      },
      {
        day: 4,
        title: "Manali Local Heritage: Hadimba Temple & Vashisht Hot Springs",
        description: "Visit the ancient 16th-century wooden Hadimba Temple surrounded by towering deodar cedar forests, the Tibetan Monastery, the riverside nature park, and the natural therapeutic sulfur hot springs at Vashisht village."
      },
      {
        day: 5,
        title: "Solang Valley Alpine Adventures & Atal Tunnel Gateway",
        description: "Excursion to the stunning Solang Valley, renowned for paragliding, zorbing, and alpine walks. Drive through the engineering marvel of the Atal Tunnel (9.02 km long) to witness the stark, dramatic high-altitude landscapes of the Lahaul Valley."
      },
      {
        day: 6,
        title: "Manali to Chandigarh via Beas River Valley",
        description: "Begin the scenic descent from the Himalayas along the riverside highway to the modernist planned city of Chandigarh (approx. 7.5 hours). Check into your hotel and relax."
      },
      {
        day: 7,
        title: "Chandigarh Rock Garden & Return Drive to Delhi",
        description: "Visit the unique Rock Garden created by Nek Chand from recycled urban and industrial waste, followed by a tranquil stroll at Sukhna Lake. Your chauffeur drives you smoothly back along NH44 to Delhi for your evening airport drop-off."
      }
    ],
    inclusions: [
      'Private air-conditioned vehicle with veteran mountain driver',
      'All mountain toll permits, state border green taxes, and parking',
      'Driver allowances, meals, and overnight accommodation fully covered'
    ],
    exclusions: ['Hotels and meals', 'Adventure activity charges (paragliding, skiing)'],
    faqs: [
      {
        q: "Are the chauffeurs experienced in mountain driving on narrow Himalayan roads?",
        a: "Yes, absolutely. Our drivers assigned to Himachal circuits possess over 8 years of specialized mountain driving experience, holding commercial hill driving licenses and adhering to strict defensive driving practices."
      },
      {
        q: "Can this tour be arranged in winter to experience snowfall?",
        a: "Yes! From December to February, Shimla, Kufri, and Manali receive regular snowfall, transforming the valleys into a winter wonderland. Our vehicles are equipped with all-weather heating."
      },
      {
        q: "Are all interstate road taxes, green fees, and tolls included?",
        a: "Yes, 100%. All highway toll plazas, Himachal Pradesh commercial tourist entry taxes, environmental green cess fees, parking, and driver lodging are included."
      }
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
