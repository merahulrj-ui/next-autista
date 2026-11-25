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
    overview: "India's premier cultural touring route, the Classic Golden Triangle, links the historic national capital of Delhi, the timeless Mughal seat of Agra, and the regal Rajput stronghold of Jaipur in Rajasthan. Covering approximately 750 kilometers of modern four-lane expressways, this private chauffeur-driven expedition is meticulously engineered for international travelers who demand supreme comfort, complete itinerary independence, and deep cultural immersion. Experience the contrasting atmospheres of historic Old Delhi and colonial New Delhi, witness the ethereal ivory-white marble Taj Mahal bathed in the golden hues of dawn, marvel at the abandoned sandstone ghost city of Fatehpur Sikri, and climb the battlements of Amber Fort overlooking the Pink City. Traveling with your private English-speaking chauffeur guarantees seamless point-to-point transfers, freedom from persistent street vendors, and the flexibility to adjust your daily timetable on a whim.",
    highlights: [
      "Private sunrise excursion to the Taj Mahal with expedited entry and optimal photography perspectives",
      "Extensive walking tour through Old Delhi's labyrinthine Chandni Chowk bazaars and Jama Masjid",
      "Ascent to the fortified hilltop ramparts of Amber Fort and the honeycomb facade of Hawa Mahal in Jaipur",
      "Guided exploration of the UNESCO-inscribed red sandstone palaces of Agra Fort and Fatehpur Sikri",
      "Stopover at the monumental 1,000-year-old Chand Baori geometric stepwell in rural Abhaneri",
      "Smooth highway transit via the Yamuna Expressway and Delhi-Mumbai Expressway in an executive vehicle",
      "Total flexibility to pause for roadside spiced chai, local handicraft workshops, and farm-fresh lunches"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi, Meet-and-Greet & Historic Lutyens Delhi Tour",
        description: "Your personal chauffeur greets you directly at the terminal exit of Indira Gandhi International Airport (DEL) with a customized name board and luggage assistance. Settle into your pristine air-conditioned vehicle as we navigate into the heart of New Delhi. Depending on your arrival time, your private tour begins with the tranquil garden tomb of Mughal Emperor Humayun, followed by the towering 12th-century victory minaret of Qutub Minar. Drive past the British colonial architectural masterworks of Sir Edwin Lutyens, including India Gate, the President's Palace (Rashtrapati Bhavan), and the Parliament House. Check into your hotel for an evening of rest, with your chauffeur remaining on call for local dining transfers."
      },
      {
        day: 2,
        title: "Old Delhi Heritage Immersion & Express Highway Drive to Agra (~230 km / 3.5 hrs)",
        description: "After a leisurely breakfast, immerse yourself in the vibrant history of Old Delhi. Visit the imposing red sandstone Jama Masjid, one of Asia's largest congregational mosques. Experience the pulse of the 17th-century spice and silver market with a private cycle-rickshaw exploration of Chandni Chowk and Dariba Kalan. Pay respectful tribute at Raj Ghat, the tranquil black marble memorial to Mahatma Gandhi. By mid-day, your chauffeur maneuvers onto the smooth six-lane Yamuna Expressway for a relaxing 3.5-hour drive to Agra. Check into your Agra hotel before heading to the riverside gardens of Mehtab Bagh at sunset, where you enjoy a serene crowd-free view of the Taj Mahal reflecting upon the calm waters of the Yamuna River."
      },
      {
        day: 3,
        title: "Sunrise Taj Mahal, Imperial Agra Fort & Drive to Jaipur via Fatehpur Sikri (~240 km / 4.5 hrs)",
        description: "Depart your hotel before dawn for the highlight of the circuit: the Taj Mahal at sunrise. Witness the ivory-white Makrana marble change from soft lilac to shimmering gold as the sun breaks the horizon, while your chauffeur coordinates optimal entrance timing. Return to your hotel for breakfast and check out. Visit the colossal 16th-century Agra Fort, exploring the Jahangiri Mahal, Diwan-i-Khas, and the octagonal tower where Shah Jahan spent his final years gazing toward his beloved monument. En route to Jaipur, stop at the UNESCO World Heritage ghost citadel of Fatehpur Sikri, built by Emperor Akbar in 1571 and abandoned shortly thereafter. Cross into Rajasthan and arrive in the Pink City by evening."
      },
      {
        day: 4,
        title: "Jaipur: Amber Fort, Royal Palaces & UNESCO Astronomical Observatory",
        description: "Dedicate a full day to exploring Jaipur, the vibrant capital of Rajasthan founded in 1727 by Maharaja Sawai Jai Singh II. Begin your morning at the majestic Amber Fort, perched atop the rugged Aravalli hills overlooking Maota Lake; explore its Sheesh Mahal (Hall of Mirrors) and marble courtyards. Descend the hill and pause for photography in front of the floating Jal Mahal (Water Palace). Continue into the walled city to photograph the ornate five-story sandstone facade of Hawa Mahal (Palace of Winds). Tour the City Palace museum complex, which remains the residence of the former Maharaja, and discover the massive precision stone measuring instruments at the UNESCO-inscribed Jantar Mantar observatory."
      },
      {
        day: 5,
        title: "Jaipur Hilltop Forts, Artisan Craft Bazaars & Galta Ji Temple",
        description: "Ascend to the hilltop Jaigarh Fort, home to the world's largest historic wheeled cannon, the Jaivana, offering breathtaking panoramic vistas across the entire Jaipur valley. Continue to the ancient Galta Ji temple complex (known as the Monkey Temple), nestled between dramatic rocky granite cliffs with sacred natural water springs. Spend your afternoon discovering Jaipur's peerless heritage craft traditions: observe master block-printers in Sanganer, fine gem-cutters, and cobalt-blue pottery studios. Your chauffeur is at your disposal to take you to authentic government-certified artisan cooperatives where you can observe age-old craft techniques without any sales pressure."
      },
      {
        day: 6,
        title: "Jaipur to Delhi Return Drive & International Airport Transfer (~260 km / 4.5 hrs)",
        description: "Following breakfast, check out of your hotel and embark on a comfortable return highway journey to Delhi via the modern national expressway. Enjoy peaceful comfort breaks at clean highway service plazas along the route. Arrive in New Delhi by late afternoon. Your chauffeur can accommodate last-minute souvenir shopping or a farewell dinner at Khan Market or Connaught Place before delivering you smoothly to Indira Gandhi International Airport terminal for your onward journey or flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Can this Golden Triangle tour be customized with different hotel tiers or extra days?",
        a: "Yes, 100%. Our tours are entirely private and tailor-made. You have complete freedom to choose your own boutique heritage havelis, 5-star luxury hotels, or budget-friendly accommodations. You can also add extra days in Jaipur, Agra, or Delhi, or include side trips like the Abhaneri stepwell or Ranthambore tiger safari."
      },
      {
        q: "What vehicle type is provided, and what is the luggage capacity?",
        a: "For 1 to 2 passengers, we typically provide a spacious, late-model air-conditioned sedan (such as a Maruti Suzuki Dzire or Toyota Etios) that holds 2 large suitcases and 2 carry-on bags. For 3 to 4 travelers, we provide a premium Toyota Innova Crysta MPV with generous captain seats and room for 4-5 large suitcases."
      },
      {
        q: "Are highway tolls, driver meals, and border taxes included in the quoted rate?",
        a: "Yes, all operational transport charges are 100% all-inclusive. You will never be asked for additional fuel costs, toll booth charges, state border tax receipts, or parking fees. Your driver's daily food and overnight lodging allowances are entirely covered by us."
      },
      {
        q: "What is the best time of year to undertake the Golden Triangle tour?",
        a: "The ideal travel window is between October and late March, when northern India experiences mild, sunny days and cool evenings (temperatures between 12°C and 28°C). October and November offer crystal-clear skies, while February and March bring delightful spring blooms."
      },
      {
        q: "How does meeting our chauffeur at Delhi Airport work on Day 1?",
        a: "We track your incoming flight status in real time. Your chauffeur will be waiting outside the arrivals terminal exit gate holding an official paging placard displaying your name. You will also receive the chauffeur's direct mobile number, photograph, and vehicle registration via WhatsApp prior to departure."
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
    overview: "The Grand Rajasthan Heritage Odyssey is the definitive two-week expedition through the royal state of India, traversing legendary fortress citadels, gilded desert outposts, romantic lakeside palaces, and sacred pilgrim towns. Piloted by a dedicated English-speaking chauffeur in an executive air-conditioned vehicle, this 14-day overland journey weaves through Delhi, the frescoed open-air gallery of Mandawa in Shekhawati, the desert outpost of Bikaner, the golden sandstone dunes of Jaisalmer, the indigo Blue City of Jodhpur, the romantic waters of Udaipur, the sacred lake of Pushkar, the pink monumental boulevards of Jaipur, and the world-renowned Taj Mahal in Agra. Experience the freedom of travelling at your own pace, stopping to photograph camel caravans across barren desert plains, staying in authentic heritage havelis, and savoring authentic Rajasthani cuisine while leaving all highway navigation and logistics to your seasoned private chauffeur.",
    highlights: [
      "Comprehensive 14-day overland circuit covering all five royal capitals of Rajasthan",
      "Fresco-painted merchant havelis and stepwells of Mandawa and the Shekhawati region",
      "Desert camel safari and overnight luxury tented camp experience among the Sam Sand Dunes in Jaisalmer",
      "Towering Mehrangarh Fort and indigo alleys of the old Brahmin quarter in Jodhpur",
      "Romantic sunset boat cruise on Lake Pichola past Udaipur's floating white marble palaces",
      "Sacred lake ghats and the world's rare Lord Brahma Temple in holy Pushkar",
      "The monumental hill ramparts of Amber Fort and the pink royal avenues of Jaipur",
      "Private dawn excursion to the Taj Mahal and the red sandstone fortifications of Agra"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Chauffeur Meet-and-Greet",
        description: "Arrive at New Delhi's international airport where your dedicated chauffeur welcomes you warmly. Enjoy an effortless private transfer to your hotel. Depending on your arrival schedule, take a relaxing orientation drive through the grand tree-lined avenues of New Delhi, viewing India Gate and the President's Palace before an evening of rest."
      },
      {
        day: 2,
        title: "Delhi to Mandawa & The Painted Haveli Country (~260 km / 5 hrs)",
        description: "Leave the bustling capital behind as your chauffeur steers west into the semi-arid Shekhawati region, often hailed as the world's largest open-air art gallery. Arrive in the historic silk-route town of Mandawa and check into a beautifully restored heritage haveli. Spend the afternoon exploring the painted mansions of wealthy 18th-century Marwari merchants, adorned with intricate, colorful wall frescoes depicting mythological scenes, royal processions, and early European inventions."
      },
      {
        day: 3,
        title: "Mandawa to Bikaner & Junagarh Fort Tour (~190 km / 3.5 hrs)",
        description: "Drive across desert scrublands toward the ancient desert trading citadel of Bikaner, founded in 1488 by Rao Bika. Check into your hotel and embark on a private tour of Junagarh Fort, an unvanquished architectural marvel boasting sumptuously decorated mirror palaces, gilded audience halls, and ancient royal weaponry. In the late afternoon, visit the National Camel Research Center or the historic old bazaar famous for Bikaneri savory snacks."
      },
      {
        day: 4,
        title: "Bikaner to Jaisalmer: Journey into the Great Thar Desert (~330 km / 5.5 hrs)",
        description: "Embark on an expansive desert drive west toward Jaisalmer, the Golden City rising like a mirage from the Thar Desert. Pass desert hamlets, grazing camel herds, and ancient stone memorials along smooth highway tarmac. Arrive in Jaisalmer by late afternoon as the setting sun illuminates the yellow sandstone fortifications of the hilltop fort. Check into your hotel and enjoy a tranquil desert evening."
      },
      {
        day: 5,
        title: "Jaisalmer Fort, Havelis & Sunset Camel Safari at Sam Sand Dunes (~45 km)",
        description: "Spend the morning exploring the living medieval citadel of Jaisalmer Fort (Sonar Qila), where one-fourth of the old city's population still resides within ancient ramparts. Visit the ornate 12th-century Jain temples carved from yellow limestone and tour the palatial mansions of Patwon Ki Haveli and Salim Singh Ki Haveli. In the afternoon, your chauffeur drives you into the undulating Sam Sand Dunes for an unforgettable sunset camel ride, traditional Rajasthani folk music, and starlit desert dining."
      },
      {
        day: 6,
        title: "Jaisalmer to Jodhpur: The Sun City & Blue Quarter (~280 km / 4.5 hrs)",
        description: "Drive southeast across desert plains to Jodhpur, the historic capital of Marwar, famed for its brilliant indigo-painted houses and imposing cliff-top citadel. Arrive and check into your hotel. In the late afternoon, stroll through the vibrant Sardar Market surrounding the historic Clock Tower, experiencing the scents of traditional spices, hand-woven textiles, and famous Jodhpuri sweets."
      },
      {
        day: 7,
        title: "Jodhpur Citadel, Jaswant Thada & Bishnoi Village Experience",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the city skyline on a sheer perpendicular rock cliff. Tour its museum palaces exhibiting royal palanquins, ivory cribs, and miniature paintings, and take in the iconic sweeping vista of the Blue City below. Visit the nearby royal marble cenotaph of Jaswant Thada. In the afternoon, take a cultural Jeep excursion into surrounding Bishnoi villages to observe traditional potters, weavers, and wildlife conservationists protecting wild blackbucks."
      },
      {
        day: 8,
        title: "Jodhpur to Udaipur via the Marble Wonder of Ranakpur (~260 km / 5 hrs)",
        description: "Journey south through the rugged granite valleys of the Aravalli hills toward Udaipur. En route, stop at Ranakpur to tour the breathtaking 15th-century Chaumukha Jain Temple, supported by 1,444 uniquely hand-carved marble pillars where no two carvings are identical. Continue winding through scenic mountain passes to Udaipur, the romantic 'City of Lakes', checking into your lakeside hotel by evening."
      },
      {
        day: 9,
        title: "Udaipur: City Palace, Jagdish Temple & Lake Pichola Boat Cruise",
        description: "Dedicate a full day to exploring romantic Udaipur. Tour the sprawling City Palace complex, Rajasthan's largest royal palace, marveling at its mosaic courtyards, mirror chambers, and panoramic vistas overlooking Lake Pichola. Visit the 17th-century Jagdish Temple and the ornate royal fountains of Saheliyon Ki Bari (Garden of the Maids of Honor). End the day with a private sunset boat cruise on Lake Pichola, sailing past the floating white marble Lake Palace and Jag Mandir island."
      },
      {
        day: 10,
        title: "Udaipur to Pushkar via Chittorgarh Fort Citadel (~280 km / 5.5 hrs)",
        description: "Depart Udaipur for the sacred pilgrimage town of Pushkar. Along the way, visit the mammoth UNESCO-inscribed Chittorgarh Fort, the historic seat of Mewar valor, featuring the towering Victory Tower (Vijay Stambh), Kirti Stambh, and the water palace of Queen Padmini. Continue to Pushkar, check into your heritage resort, and stroll down to the sacred 52 bathing ghats as evening temple bells echo across the water."
      },
      {
        day: 11,
        title: "Pushkar Brahma Temple & Scenic Highway Drive to Jaipur (~145 km / 2.5 hrs)",
        description: "In the morning, visit the revered 14th-century Lord Brahma Temple, one of the few shrines in the world dedicated to the Hindu Creator God. Explore the vibrant market lanes filled with rose water, silver jewelry, and vibrant desert textiles. In the late morning, your chauffeur navigates the smooth national highway to Jaipur, the Pink City. Check in and enjoy an afternoon exploring the royal City Palace museum and astronomical instruments of Jantar Mantar."
      },
      {
        day: 12,
        title: "Jaipur: Amber Fort, Hawa Mahal & Heritage Artisans",
        description: "A full day of royal Jaipur sightseeing. Ascend to the hill fortress of Amber Fort, exploring its intricate Sheesh Mahal (Mirror Palace) and garden courtyards. Stop at the water-surrounded Jal Mahal and photograph the iconic honeycomb windows of Hawa Mahal. In the afternoon, discover Jaipur's world-famous artisanal block-printing and blue pottery workshops with your chauffeur at your service."
      },
      {
        day: 13,
        title: "Jaipur to Agra via Fatehpur Sikri & Sunset Taj Mahal (~240 km / 4 hrs)",
        description: "Drive east from Jaipur toward Agra, stopping at the magnificent ghost city of Fatehpur Sikri, Emperor Akbar's abandoned sandstone capital boasting the colossal Buland Darwaza gate. Arrive in Agra, check into your hotel, and spend the late afternoon at Mehtab Bagh, enjoying a tranquil sunset view of the Taj Mahal across the Yamuna River without the crowds."
      },
      {
        day: 14,
        title: "Sunrise Taj Mahal, Agra Fort & Return to Delhi / Airport Transfer (~230 km / 3.5 hrs)",
        description: "Rise early for the defining moment: the Taj Mahal bathed in the ethereal morning dawn light. After exploring the monument, return to your hotel for breakfast, followed by a tour of the formidable Agra Fort. By midday, travel comfortably along the Yamuna Expressway back to New Delhi. Your chauffeur delivers you directly to Delhi International Airport for your return flight home, concluding an unforgettable royal odyssey."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Is 14 days enough time to comfortably experience Rajasthan without rushing?",
        a: "Yes, 14 days is widely considered the golden duration for Rajasthan. It allows for relaxed 2-night stays in Jaisalmer, Jodhpur, Udaipur, and Jaipur, preventing road fatigue while ensuring you cover all primary desert, heritage, and monument highlights."
      },
      {
        q: "Can we upgrade our vehicle to a Toyota Innova Crysta for extra legroom on this 14-day trip?",
        a: "Absolutely. We highly recommend the Toyota Innova Crysta for our 14-day Rajasthan tours. With independent rear air-conditioning, executive captain seats, and exceptional highway suspension, it provides peerless comfort across long desert highway stretches."
      },
      {
        q: "Are we free to stop for photos, tea, or bathroom breaks whenever we want along the highway?",
        a: "Yes, 100%. Having a dedicated private driver means you control the pace of your journey. You can ask your chauffeur to stop anytime for panoramic photos, roadside chai, clean modern restroom plazas, or fruit stalls."
      },
      {
        q: "What clothing should we pack for a two-week Rajasthan trip?",
        a: "Pack breathable, modest cotton clothing suitable for warm daytime sunshine, comfortable walking shoes for fortress cobbles, sunglasses, and a hat. If traveling between November and February, pack warm layers, a fleece, or a light jacket, as desert nights in Jaisalmer and Bikaner can drop to 8°C–10°C."
      },
      {
        q: "Are the Sam Sand Dunes in Jaisalmer safe and suitable for families and senior travelers?",
        a: "Yes, completely. Our desert camp partners provide private luxury Swiss cottage tents equipped with proper beds, attached tiled bathrooms, hot running water, and reliable electricity. Camel rides are gentle and escorted by experienced local handlers, with 4x4 Jeep options also available."
      }
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
    overview: "Uniting the imperial monuments of Delhi, the architectural perfection of the Taj Mahal in Agra, and the ancient spiritual heart of Hinduism along the sacred River Ganges in Varanasi, this 8-day private chauffeur journey is North India's most emotionally moving cultural route. Designed for travelers seeking both architectural grandeur and deep spiritual contemplation, this itinerary combines overland highway cruising in a private air-conditioned vehicle with the sacred riverside rhythms of Varanasi. From walking the centuries-old alleyways of Old Delhi and marveling at the white marble symmetry of the Taj Mahal at dawn, to boarding a wooden rowing boat at sunrise past the chanting pilgrims of Dashashwamedh Ghat, this tour delivers an authentic, safe, and deeply enriching immersion into India's living cultural heritage.",
    highlights: [
      "Seamless private overland chauffeur touring from Delhi to Agra and Varanasi",
      "Mesmerizing dawn boat cruise on the River Ganges past ancient cremation and bathing ghats in Varanasi",
      "VIP vantage points for the evening Ganga Aarti ceremony with floating brass lamps and chanting priests",
      "Excursion to sacred Sarnath, where Lord Buddha preached his first sermon after attaining enlightenment",
      "Sunrise excursion to the Taj Mahal with zero queues and expert local historical perspectives",
      "The monumental red sandstone citadels of Agra Fort and Delhi's UNESCO-inscribed Humayun's Tomb",
      "Private cycle-rickshaw exploration through the historic spice markets of Old Delhi"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of New Delhi",
        description: "Your private chauffeur warmly welcomes you upon arrival at Indira Gandhi International Airport in New Delhi. Relax during the transfer to your hotel. In the afternoon, embark on an orientation tour of New Delhi, visiting the magnificent 12th-century Qutub Minar complex, Humayun's Tomb, and the grand colonial avenues of Rajpath, India Gate, and the President's House before a restful evening."
      },
      {
        day: 2,
        title: "Old Delhi Heritage Tour & Expressway Drive to Agra (~230 km / 3.5 hrs)",
        description: "Explore the vibrant historical core of Old Delhi in the morning. Visit the 17th-century Jama Masjid, take a cycle-rickshaw through the bustling alleyways of Chandni Chowk, and pay respects at Raj Ghat. After lunch, your chauffeur navigates the smooth Yamuna Expressway to Agra. Check into your hotel and enjoy a serene sunset view of the Taj Mahal across the river from the gardens of Mehtab Bagh."
      },
      {
        day: 3,
        title: "Sunrise Taj Mahal, Agra Fort & Express Transit / Train to Sacred Varanasi",
        description: "Witness the breathtaking sunrise over the Taj Mahal as the morning mist rises from the Yamuna River. Return to your hotel for breakfast, followed by a tour of the immense Agra Fort. Depending on your preferred transit option, board the high-speed Vande Bharat Express train or an evening direct flight accompanied by private station/airport chauffeur transfers to the eternal city of Varanasi."
      },
      {
        day: 4,
        title: "Varanasi: Arrival, Sacred Ghats & The Mesmerizing Evening Ganga Aarti",
        description: "Welcome to Varanasi (Kashi), the spiritual capital of India and one of the oldest living cities in the world. Check into your heritage riverside hotel. In the afternoon, walk through the ancient winding alleys of the old city with your guide. At dusk, take your reserved front-row seat on a private wooden boat at Dashashwamedh Ghat to witness the sacred Ganga Aarti, where priests perform synchronized rituals with multi-tiered brass oil lamps, conch shells, and devotional chanting."
      },
      {
        day: 5,
        title: "Sunrise Ganges Boat Cruise, Old City Temples & Sarnath Buddhist Pilgrimage",
        description: "Rise before dawn for a mystical rowing boat journey along the sacred Ganges. Observe thousands of devout pilgrims performing morning prayers, yoga, and ritual baths in the holy waters as the golden sun rises over the eastern horizon. Glide past Manikarnika Ghat, the eternal cremation ghat reflecting the Hindu cycle of life and liberation. After breakfast, visit Kashi Vishwanath Temple corridor and drive to Sarnath, where Gautama Buddha delivered his first sermon in the Deer Park after attaining enlightenment under the Bodhi tree."
      },
      {
        day: 6,
        title: "Varanasi Spiritual Immersion, Silk Weavers & Artisans",
        description: "Spend a deep day discovering Varanasi's unique cultural tapestry. Visit the sprawling campus of Banaras Hindu University (BHU) and the serene new Vishwanath Temple. In the afternoon, visit ancient Muslim weaver colonies where generations of master craftsmen hand-weave the world-famous Banarasi silk brocades and sarees on wooden pit looms. Enjoy a quiet evening on the ghats contemplating the eternal river."
      },
      {
        day: 7,
        title: "Varanasi to Delhi Flight & Leisure / Shopping Afternoon",
        description: "After a tranquil breakfast by the Ganges, your private chauffeur transfers you to Lal Bahadur Shastri Airport in Varanasi for your short domestic flight back to New Delhi. Your Delhi chauffeur meets you on arrival and transfers you to your hotel. Enjoy an afternoon exploring Delhi's premier boutique markets like Dilli Haat or Khan Market for authentic textiles, tea, and handicrafts."
      },
      {
        day: 8,
        title: "Delhi City Heritage Highlights & International Airport Transfer",
        description: "Enjoy a relaxed final morning in Delhi. Visit the lotus-shaped Bahá'í House of Worship (Lotus Temple) or the National Museum housing treasures from the ancient Indus Valley Civilization. Your chauffeur ensures a timely, comfortable transfer to Indira Gandhi International Airport for your departure flight, concluding a profound spiritual and historical journey."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "How is travel between Agra and Varanasi handled in this itinerary?",
        a: "We offer two comfortable options: either the premium, clean, high-speed Vande Bharat Express train (with air-conditioned executive chair cars) or a short direct flight from Agra/Delhi to Varanasi. Private chauffeur transfers are seamlessly coordinated at both ends."
      },
      {
        q: "Is Varanasi appropriate for first-time visitors to India?",
        a: "Yes, especially when traveling with a private chauffeur and verified local guides. Having a dedicated vehicle, pre-booked private boats, and curated heritage hotels provides a peaceful sanctuary to experience Varanasi's profound spirituality without feeling overwhelmed."
      },
      {
        q: "Can we take photographs during the evening Ganga Aarti and sunrise boat ride?",
        a: "Photography is welcome and encouraged during the boat rides and evening Ganga Aarti ceremonies. The only restriction is at Manikarnika Ghat (the cremation ghat), where out of deep respect for mourning families, photography is strictly prohibited."
      },
      {
        q: "What is the dress code for visiting temples and ghats in Varanasi?",
        a: "Dress modestly out of cultural respect: shoulders and knees should be covered for both men and women. Slip-on shoes or sandals are recommended, as you will need to remove your footwear before entering temples and sacred ghat enclosures."
      },
      {
        q: "Are the boat rides on the Ganges safe for seniors and non-swimmers?",
        a: "Yes, completely safe. We use sturdy, wide-bottomed private wooden boats steered by licensed, experienced local boatmen. Coast guard-approved life jackets are provided on board for every passenger."
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
    overview: "Experience the divine spiritual heartland of Braj Bhoomi and the peerless Mughal splendor of the Taj Mahal on this private 4-day overland chauffeur tour from Delhi. Journeying along the high-speed Yamuna Expressway in a modern, air-conditioned vehicle, this itinerary is tailored for travelers who wish to combine sacred Hindu pilgrimage heritage with iconic Mughal architectural wonders. Explore the sacred birthplace of Lord Krishna at the Krishna Janmabhoomi temple in Mathura, witness the mesmerizing evening temple bells and floral Banke Bihari aarti in Vrindavan, and proceed seamlessly to Agra for an unforgettable sunrise at the world-famous Taj Mahal and the red sandstone ramparts of Agra Fort. With your private English-speaking chauffeur managing all driving, expressway tolls, and parking logistics, you enjoy an unhurried, comfortable, and spiritually enriching journey.",
    highlights: [
      "Seamless highway travel from Delhi along the modern Yamuna Expressway in an air-conditioned executive car",
      "Darshan at the sacred Krishna Janmasthan Temple Complex and historical Vishram Ghat on the holy Yamuna in Mathura",
      "Evening temple bells and devotional floral aarti at the revered Banke Bihari Temple and ISKCON Temple in Vrindavan",
      "Private dawn excursion to the Taj Mahal to admire the white Makrana marble in optimal natural light with zero queues",
      "Guided exploration of the massive UNESCO World Heritage Agra Fort, including the Diwan-i-Am and Diwan-i-Khas",
      "Stopover at the peaceful riverbank gardens of Mehtab Bagh for panoramic sunset views across the river to the Taj Mahal",
      "Total flexibility to pause for authentic local sweets like Mathura ke Pede and fresh roadside masala chai"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Mathura & Sacred Krishna Janmabhoomi Pilgrimage (~160 km / 2.5 hrs)",
        description: "Your private chauffeur picks you up from your Delhi residence, hotel, or Indira Gandhi International Airport. Settle into your air-conditioned vehicle as we cruise down the smooth Yamuna Expressway. Arrive in Mathura, the revered birthplace of Lord Krishna, and check into your hotel. In the afternoon, visit the historic Shri Krishna Janmasthan Temple Complex, exploring the sacred prison cell (Garbha Griha) where Lord Krishna was born. Proceed to the ancient Vishram Ghat on the banks of the Yamuna River, where Lord Krishna is believed to have rested after slaying the tyrant Kamsa, and witness the atmospheric evening Yamuna Aarti ceremony with floating brass lamps."
      },
      {
        day: 2,
        title: "Vrindavan Temples, Banke Bihari Aarti & Drive to Agra (~75 km / 1.5 hrs)",
        description: "After breakfast, take a short drive to nearby Vrindavan, the legendary forest town where Lord Krishna spent his playful youth. Visit the famous Banke Bihari Temple, celebrated for its curtain-revealing 'jhulan' darshan, followed by the magnificent white Italian marble Prem Mandir and the peaceful Sri Krishna Balaram Temple (ISKCON). Savor famous local Mathura peda sweets before your chauffeur drives you south to Agra. Check into your Agra hotel and spend your late afternoon at Mehtab Bagh, enjoying a tranquil sunset view of the Taj Mahal reflecting upon the calm waters of the Yamuna River."
      },
      {
        day: 3,
        title: "Sunrise Taj Mahal, Imperial Agra Fort & Historic Mughal Heritage",
        description: "Begin your day before dawn as your chauffeur escorts you to the eastern gate of the Taj Mahal. Enter as the morning gates open to witness the breathtaking sunrise over the white marble dome, watching the pristine marble transform through soft pink and brilliant gold hues. Return to your hotel for a hearty breakfast and check-out. Tour the colossal Agra Fort, the red sandstone seat of Mughal emperors for generations, exploring the Jahangiri Mahal, Khas Mahal, and Sheesh Mahal. In the afternoon, visit the exquisite tomb of I'timād-ud-Daulah, affectionately known as the 'Baby Taj' for its delicate marble inlay craftsmanship."
      },
      {
        day: 4,
        title: "Sikandra Akbar's Tomb & Return Highway Drive to Delhi (~230 km / 3.5 hrs)",
        description: "Enjoy a relaxed breakfast before checking out. On your departure from Agra, stop at Sikandra to explore the imposing red sandstone and white marble tomb of Emperor Akbar the Great, set within serene parklands where blackbucks and peacocks roam freely. Rejoin the Yamuna Expressway for a smooth return drive to Delhi. Your chauffeur delivers you directly to your hotel, residence, or Delhi International Airport in time for your onward evening flight, concluding a harmonious spiritual and cultural retreat."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Can this Mathura, Vrindavan, and Agra tour be completed in fewer days?",
        a: "Yes. While this 4-day itinerary offers the most relaxed pace, we also customize this into an intensive 2-day or 3-day private chauffeur tour for travelers with tight travel schedules."
      },
      {
        q: "What should we wear when visiting temples in Mathura and Vrindavan?",
        a: "Modest dress is required out of respect for holy sanctums: shoulders and knees must be covered. You will need to remove your shoes at temple entrances; wearing socks is recommended as marble and stone courtyards can become warm under the sun."
      },
      {
        q: "Are highway tolls on the Yamuna Expressway included in our tour quote?",
        a: "Yes, 100%. All Yamuna Expressway multi-axle toll plaza charges, green taxes, parking slips, fuel costs, and driver allowances are fully covered in your quote with zero hidden fees."
      },
      {
        q: "Can we make spontaneous stops along the expressway for refreshments or photography?",
        a: "Absolutely. Your private car and chauffeur are at your exclusive disposal. The Yamuna Expressway features modern highway service plazas with clean restrooms, popular fast-food cafes, and authentic Indian tea stalls."
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
    overview: "Immerse yourself in the timeless romance and formidable desert architecture of Western Rajasthan on this 5-day private chauffeur-driven expedition through Jodhpur and Jaisalmer. Journeying between the indigo-hued alleys of the 'Blue City' and the sun-drenched golden ramparts of the 'Golden City', this tour showcases the most dramatic landscapes of the Great Thar Desert. Marvel at the sheer cliff-top walls of Mehrangarh Fort, explore the lace-like filigree sandstone balconies of Patwon Ki Haveli, ride camels across wind-sculpted sand dunes at sunset, and sleep under starlit desert skies in a luxury tented camp. With a dedicated private driver and air-conditioned vehicle, you cross wide-open desert horizons with absolute ease, flexibility, and safety.",
    highlights: [
      "Comprehensive desert discovery covering the twin historic kingdoms of Marwar (Jodhpur) and Bhati (Jaisalmer)",
      "Ascent to the colossal Mehrangarh Fort towering 400 feet above Jodhpur's blue Brahmin quarter",
      "Tour of the living yellow sandstone citadel of Jaisalmer Fort (Sonar Qila) with its ancient Jain temples",
      "Exquisite 19th-century merchant mansions: Patwon Ki Haveli, Salim Singh Ki Haveli, and Nathmal Ki Haveli",
      "Sunset camel safari and traditional folk dance performances amidst the undulating Sam Sand Dunes",
      "Overnight luxury tented camp stay in the Thar Desert with attached modern bathroom facilities",
      "Visit to the royal marble cenotaphs of Jaswant Thada and the peaceful oasis of Gadisar Lake"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jodhpur: The Blue City & Umaid Bhawan Palace",
        description: "Your private chauffeur welcomes you at Jodhpur Airport or Railway Station and transfers you to your hotel. Begin your exploration of the Sun City with a visit to the grand Umaid Bhawan Palace, one of the world's largest private royal residences, part of which is maintained as a museum showcasing vintage automobiles and Art Deco clocks. In the late afternoon, wander through the bustling Sardar Market surrounding the historic Clock Tower, sampling famous Jodhpuri mirchi vadas and sweet makhaniya lassi."
      },
      {
        day: 2,
        title: "Mehrangarh Fort, Jaswant Thada & Drive to Jaisalmer (~280 km / 4.5 hrs)",
        description: "Ascend the winding road to Mehrangarh Fort, a 15th-century stronghold perched on a perpendicular cliff overlooking thousands of indigo-painted houses. Tour the Daulat Khana, Sheesh Mahal, and Moti Mahal palaces with their preserved royal palanquins and armory. Visit the nearby royal marble cenotaph of Jaswant Thada, known as the 'Taj Mahal of Marwar'. By late morning, embark on a scenic highway drive west across the Thar Desert scrublands to Jaisalmer, arriving as the afternoon sun turns the sandstone citadel to gleaming gold. Check into your hotel."
      },
      {
        day: 3,
        title: "Jaisalmer Fort, Carved Havelis & Desert Sunset Safari at Sam Dunes (~45 km)",
        description: "Explore Jaisalmer Fort (Sonar Qila), the only living fort in India, where families have lived for 800 years within defensive bastions. Discover its intricately carved 12th-century Jain temples and narrow cobblestone alleys. Visit the magnificent five-story Patwon Ki Haveli, renowned for its lace-like stone filigree jharokha balconies. In the afternoon, your chauffeur drives you into the deep Thar Desert to the Sam Sand Dunes. Enjoy a camel ride across the crests of the golden dunes as the sun sets, followed by an evening of Kalbelia folk dance, music, and an authentic Rajasthani dinner at your luxury desert camp."
      },
      {
        day: 4,
        title: "Kuldhara Abandoned Ghost Village, Gadisar Lake & Jaisalmer Bazaars",
        description: "Wake to a tranquil desert sunrise over the dunes before returning toward Jaisalmer city. En route, explore the eerie ruins of Kuldhara, an 18th-century Paliwal Brahmin village abandoned overnight under a legendary curse. In Jaisalmer, visit the peaceful 14th-century Gadisar Lake, ringed by sacred temples and royal ghats. Spend the afternoon browsing local bazaars for camel-leather goods, mirror-work textiles, and yellow sandstone handicrafts, with your chauffeur on hand for all transfers."
      },
      {
        day: 5,
        title: "Jaisalmer to Jodhpur Return Drive & Airport Departure (~280 km / 4.5 hrs)",
        description: "After breakfast, relax in your air-conditioned vehicle as your chauffeur pilots the smooth return highway drive back toward Jodhpur. Stop for lunch and refreshments at scenic highway outposts along the route. Arrive in Jodhpur in time for your scheduled departure flight from Jodhpur Airport or train from Jodhpur Junction, concluding a magical desert adventure."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Can this tour start in Jodhpur and end in Jaisalmer (or vice versa)?",
        a: "Yes, absolutely. We can easily customize the itinerary as a one-way tour (starting in Jodhpur and ending with a flight out of Jaisalmer Airport), or round-trip back to Jodhpur depending on your flight connections."
      },
      {
        q: "How cold does the Thar Desert get at night during winter months?",
        a: "Between November and February, desert daytime temperatures are pleasant (22°C–26°C), but night temperatures can drop to 7°C–10°C. We recommend bringing a warm jacket, fleece, or shawl for evening campfire cultural shows."
      },
      {
        q: "Is the camel safari suitable for elderly travelers or children?",
        a: "Yes. The camels are led by experienced local handlers at a very gentle walking pace. For guests who prefer not to ride a camel, we can arrange an exciting 4x4 open-top Jeep dune safari directly to the sunset point."
      },
      {
        q: "Are desert camp tents comfortable with western amenities?",
        a: "Yes. Our partner desert camps provide luxury Swiss cottage tents featuring proper raised beds, high-quality mattresses, fresh linens, electricity, and private attached bathrooms with western flush toilets and running hot water."
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
    overview: "Expand the classic cultural wonders of the Golden Triangle with the tranquil spiritual energy and colorful desert oasis of Pushkar on this comprehensive 7-day private chauffeur tour. Connecting Delhi, Agra, Jaipur, and holy Pushkar, this itinerary provides an optimal balance between monumental Mughal architecture, vibrant Rajput palaces, and ancient Hindu spirituality. After marveling at Old Delhi's historic monuments, sunrise over the Taj Mahal in Agra, and the pink fortifications of Amber Fort in Jaipur, travel deeper into the desert fringe of the Aravalli hills to holy Pushkar. Ringed by 52 sacred bathing ghats, whitewashed temples, and the world's rare Lord Brahma Temple, Pushkar offers an unforgettable bohemian, peaceful contrast to the bustling royal cities.",
    highlights: [
      "The complete Golden Triangle circuit enriched with the spiritual pilgrimage oasis of Pushkar",
      "Sunrise excursion to the Taj Mahal with pre-arranged tickets and optimal photography angles",
      "Ascent to Amber Fort ramparts and panoramic photography at Hawa Mahal in the Pink City of Jaipur",
      "Darshan at the sacred 14th-century Lord Brahma Temple and peaceful walking tour along Pushkar Lake ghats",
      "Guided exploration of the UNESCO World Heritage citadels of Agra Fort and Fatehpur Sikri",
      "Stopover at the ancient 1,000-year-old Chand Baori geometric stepwell in Abhaneri",
      "Smooth four-lane expressway transit in an executive air-conditioned vehicle with dedicated English chauffeur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of Historic New Delhi",
        description: "Your personal chauffeur greets you at Indira Gandhi International Airport or your Delhi hotel with luggage assistance. Settle into your clean, air-conditioned vehicle for an afternoon tour of New Delhi. Visit the 12th-century victory tower of Qutub Minar, set amidst ancient ruins, followed by Humayun's Tomb, the architectural forerunner to the Taj Mahal. Drive along the grand avenues of Rajpath past India Gate and Parliament House before resting at your hotel."
      },
      {
        day: 2,
        title: "Old Delhi Heritage Walk & Yamuna Expressway Drive to Agra (~230 km / 3.5 hrs)",
        description: "Spend the morning exploring Old Delhi. Visit the grand red sandstone Jama Masjid, experience an exhilarating cycle-rickshaw ride through the bustling spice and silver alleys of Chandni Chowk, and pause at the Raj Ghat memorial. After lunch, cruise down the Yamuna Expressway to Agra. Check into your hotel and enjoy a tranquil sunset view of the Taj Mahal across the river from Mehtab Bagh gardens."
      },
      {
        day: 3,
        title: "Sunrise Taj Mahal, Agra Fort & Drive to Jaipur via Fatehpur Sikri (~240 km / 4.5 hrs)",
        description: "Experience the ethereal beauty of the Taj Mahal at sunrise as the morning mist lifts and the white Makrana marble glows with soft golden light. Return to your hotel for breakfast, followed by an exploration of the imposing Agra Fort. Drive toward Jaipur, stopping en route to explore Emperor Akbar's abandoned sandstone capital at Fatehpur Sikri and the deep geometric stepwell of Chand Baori in Abhaneri. Arrive in the Pink City by evening."
      },
      {
        day: 4,
        title: "Jaipur: Amber Fort, Hawa Mahal & Royal City Palace",
        description: "A full day dedicated to the splendors of Jaipur. Ascend the rugged Aravalli hill to Amber Fort, exploring the dazzling Sheesh Mahal (Mirror Palace) and royal courtyards. Stop at the floating Jal Mahal and photograph the five-story honeycomb facade of Hawa Mahal. Visit the City Palace museum and the UNESCO-inscribed precision stone astronomical instruments of Jantar Mantar. Spend the evening browsing Jaipur's famous textile and jewelry bazaars."
      },
      {
        day: 5,
        title: "Jaipur to Sacred Pushkar via Ajmer Sharif Dargah (~145 km / 2.5 hrs)",
        description: "After breakfast, depart Jaipur for the sacred oasis of Pushkar. Along the way, visit the historic city of Ajmer to pay respects at the world-famous Ajmer Sharif Dargah, the 13th-century Sufi shrine of Saint Khwaja Moinuddin Chishti. Continue over the scenic mountain pass into the peaceful valley of Pushkar. Check into your resort and spend a tranquil evening strolling along the 52 sacred lake ghats as temple bells ring and oil lamps float upon the waters."
      },
      {
        day: 6,
        title: "Pushkar Brahma Temple, Desert Rose Gardens & Return to Jaipur (~145 km / 2.5 hrs)",
        description: "Begin your morning with a visit to the revered Lord Brahma Temple, one of the few shrines in the world dedicated to the Hindu Creator God. Explore Pushkar's colorful bazaar lanes, famous for rose essential oils, silver tribal jewelry, and desert textiles. In the afternoon, your chauffeur navigates the smooth highway back to Jaipur. Enjoy a relaxed evening in Jaipur at your leisure, perhaps dining at a traditional rooftop restaurant."
      },
      {
        day: 7,
        title: "Jaipur to Delhi Highway Drive & International Airport Transfer (~260 km / 4.5 hrs)",
        description: "Following a leisurely breakfast, check out of your hotel and embark on a smooth expressway drive back to New Delhi. Enjoy comfortable rest stops along the route. Arrive in Delhi by late afternoon, where your chauffeur provides seamless drop-off directly at Indira Gandhi International Airport terminal for your flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Is Pushkar worth adding to the standard Golden Triangle route?",
        a: "Yes, highly recommended. Pushkar is only 2.5 hours from Jaipur and adds a peaceful, spiritual, and bohemian dimension to the trip that contrasts beautifully with the busy royal monuments of Delhi, Agra, and Jaipur."
      },
      {
        q: "Is Pushkar a vegetarian and alcohol-free town?",
        a: "Yes. Due to its status as one of Hinduism's most sacred pilgrimage sites, municipal regulations strictly prohibit meat, fish, eggs, and alcohol within the holy town boundaries. However, Pushkar boasts world-famous cafes serving delicious vegetarian Italian, Israeli, and Indian cuisine."
      },
      {
        q: "Can we visit the famous Pushkar Camel Fair on this tour?",
        a: "If you travel during the annual Pushkar Fair (held in October or November based on the lunar calendar), this tour perfectly coincides with the festival. Thousands of decorated camels, horse traders, and folk musicians gather on the fairgrounds, creating an extraordinary cultural spectacle."
      },
      {
        q: "Are the road conditions between Jaipur and Pushkar comfortable?",
        a: "Yes. The route follows National Highway 48, a smooth, modern, multi-lane divided expressway that ensures a comfortable and swift journey of approximately 2.5 hours."
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
    overview: "Combine India's most celebrated architectural monument with the thrill of tracking the Royal Bengal Tiger in the wild on this extraordinary 7-day private chauffeur expedition. Linking Delhi, the Mughal splendors of Agra, the jungle wilderness of Ranthambore National Park, and the royal pink forts of Jaipur, this tour delivers an exhilarating blend of world-class history and high-adrenaline wildlife safaris. Travel in executive air-conditioned comfort across northern India's scenic landscapes, witness the dawn glow on the white marble dome of the Taj Mahal, and embark on open-top 4x4 Jeep safaris through dense teak forests where majestic tigers roam amidst 1,000-year-old fortress ruins. Your private English-speaking chauffeur guarantees seamless transfers between hotels, national parks, and monuments.",
    highlights: [
      "The ultimate fusion of UNESCO World Heritage cultural monuments and world-class wildlife safaris",
      "Private dawn excursion to the Taj Mahal in Agra to experience the world's most romantic monument",
      "Two thrilling open-top 4x4 Jeep/Canter jungle safaris inside Ranthambore National Park with expert naturalists",
      "High probability of tracking wild Royal Bengal Tigers, leopards, sloth bears, marsh crocodiles, and spotted deer",
      "Ascent to the fortified battlements of Amber Fort and the photogenic honeycomb facade of Hawa Mahal in Jaipur",
      "Stopover at the monumental 16th-century ghost city of Fatehpur Sikri",
      "Seamless highway navigation in a private executive vehicle with dedicated chauffeur and luggage assistance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of Mughal & Colonial Landmarks",
        description: "Your personal chauffeur greets you at Indira Gandhi International Airport or your Delhi hotel. Begin your Indian journey with an orientation tour of New Delhi, visiting the 12th-century victory tower of Qutub Minar and the serene Mughal garden tomb of Humayun. Cruise down the ceremonial avenue of Rajpath past India Gate and Parliament House before checking into your hotel for a relaxing evening."
      },
      {
        day: 2,
        title: "Old Delhi Heritage Immersion & Drive to Agra via Yamuna Expressway (~230 km / 3.5 hrs)",
        description: "Explore the vibrant historical quarter of Old Delhi in the morning. Visit the magnificent 17th-century Jama Masjid, take a traditional cycle-rickshaw ride through the aromatic spice alleys of Chandni Chowk, and pause at the Raj Ghat memorial. After lunch, your chauffeur navigates the smooth Yamuna Expressway to Agra. Check into your hotel and enjoy sunset views of the Taj Mahal from the riverside gardens of Mehtab Bagh."
      },
      {
        day: 3,
        title: "Sunrise Taj Mahal, Agra Fort & Drive to Ranthambore via Fatehpur Sikri (~260 km / 5.5 hrs)",
        description: "Experience the breathtaking sunrise over the Taj Mahal as the ivory-white Makrana marble glows in soft dawn hues. Return to your hotel for breakfast, followed by a guided tour of the massive red sandstone Agra Fort. Drive west toward Ranthambore National Park, stopping en route to explore the UNESCO ghost city of Fatehpur Sikri. Arrive in the scenic wilderness foothills of Sawai Madhopur by late afternoon and check into your jungle wildlife resort."
      },
      {
        day: 4,
        title: "Morning & Afternoon Jungle Safaris in Ranthambore National Park",
        description: "Embark on an early morning open-top safari through Ranthambore's designated core zones with an experienced forest department naturalist and driver. Track the majestic Royal Bengal Tiger through ancient banyan groves, dry deciduous forests, and around medieval stone ruins. Return to the lodge for a hearty breakfast and relaxation by the pool. In the afternoon, head out on your second jungle safari for another opportunity to spot tigers, leopards, sambar deer, blue bulls, and vibrant birdlife."
      },
      {
        day: 5,
        title: "Ranthambore to Jaipur: The Pink City (~160 km / 3.5 hrs)",
        description: "Enjoy a leisurely morning breakfast amidst the sounds of birdcall at your jungle lodge. Settle into your air-conditioned vehicle as your chauffeur drives through rural Rajasthani countryside to Jaipur. Arrive in the Pink City by early afternoon and check into your hotel. In the late afternoon, visit the royal City Palace museum and the UNESCO-listed astronomical observatory of Jantar Mantar, followed by a stroll through vibrant artisan bazaars."
      },
      {
        day: 6,
        title: "Jaipur: Amber Fort, Hawa Mahal & Hilltop Fortress Panoramas",
        description: "A full day of royal Jaipur sightseeing. Ascend to the hilltop Amber Fort, marveling at the mirror-inlaid Sheesh Mahal, royal courtyards, and panoramic valley views. Pause at the water-locked Jal Mahal and photograph the honeycomb sandstone facade of Hawa Mahal (Palace of Winds). Visit Jaigarh Fort to view the world's largest wheeled historic cannon and enjoy sweeping views across the Pink City before an evening of leisure."
      },
      {
        day: 7,
        title: "Jaipur to Delhi Return Drive & International Airport Transfer (~260 km / 4.5 hrs)",
        description: "After breakfast, check out of your hotel for the smooth highway journey back to New Delhi. Relax in your private vehicle with clean highway rest stops along the route. Arrive at Indira Gandhi International Airport in time for your evening flight home, concluding an extraordinary holiday blending imperial monuments and thrilling wildlife encounters."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "What are the chances of seeing a tiger in Ranthambore National Park?",
        a: "Ranthambore has one of the highest tiger densities in the world, and tiger sightings are very frequent, especially during the dry season (October through May). Taking two separate safaris in different zones significantly boosts your sighting probability."
      },
      {
        q: "What is the difference between a Jeep and a Canter safari in Ranthambore?",
        a: "Jeeps (Gypsys) are 6-seater 4x4 open-top vehicles that offer greater maneuverability, intimacy, and photographic flexibility. Canters are 20-seater open-top safari buses that offer an elevated vantage point and are great for families and larger groups."
      },
      {
        q: "When is Ranthambore National Park open during the year?",
        a: "The core safari zones of Ranthambore are open to visitors from October 1st through June 30th each year. The park is closed during the monsoon months of July, August, and September."
      },
      {
        q: "Do we need to book safari permits in advance?",
        a: "Yes, absolutely. The Rajasthan Forest Department strictly limits daily vehicle permits for each zone. We strongly recommend booking your tour at least 30 to 60 days in advance to secure preferred core safari zones."
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
    overview: "Experience the architectural grandeur, heroic chivalry, and timeless royalty of India's desert state on this premier 10-day private chauffeur tour through Royal Rajasthan. Connecting Delhi, the monumental Mughal seat of Agra, the pink avenues of Jaipur, the indigo Brahmin quarter of Jodhpur, and the romantic lake palaces of Udaipur, this overland itinerary is the definitive royal circuit. Travel in air-conditioned executive comfort across well-maintained four-lane national expressways, climbing into ancient hilltop fortresses, admiring mirror-inlaid palaces, and taking sunset boat cruises across tranquil waters. With your dedicated English-speaking chauffeur handling all driving, interstate border taxes, and luggage care, you enjoy total flexibility to explore at your personal rhythm.",
    highlights: [
      "The quintessential 10-day royal circuit linking Delhi, Agra, Jaipur, Jodhpur, and Udaipur",
      "Sunrise Taj Mahal excursion with pre-booked entry and optimal photography angles",
      "The monumental hill ramparts of Amber Fort and the photogenic facade of Hawa Mahal in Jaipur",
      "Sheer cliff-top battlements of Mehrangarh Fort commanding the Blue City of Jodhpur",
      "Private sunset boat cruise on Lake Pichola past Udaipur's floating white marble palaces",
      "Stopover at the world-renowned 15th-century carved marble Jain temples of Ranakpur",
      "Explore the UNESCO ghost city of Fatehpur Sikri and the 1,000-year-old Chand Baori stepwell in Abhaneri"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of New Delhi",
        description: "Your private chauffeur welcomes you upon arrival at Indira Gandhi International Airport (DEL) with a personalized name placard and luggage assistance. Transfer to your hotel for check-in. In the afternoon, embark on an orientation tour of New Delhi, visiting the 12th-century victory minaret of Qutub Minar, the Mughal garden tomb of Humayun, and driving past India Gate and Parliament House before an evening of rest."
      },
      {
        day: 2,
        title: "Old Delhi Heritage Tour & Yamuna Expressway Drive to Agra (~230 km / 3.5 hrs)",
        description: "Explore Old Delhi's historic core: visit the colossal 17th-century Jama Masjid, take a cycle-rickshaw through the sensory alleys of Chandni Chowk spice bazaar, and pause at Mahatma Gandhi's memorial at Raj Ghat. After lunch, cruise down the smooth six-lane Yamuna Expressway to Agra. Check into your hotel and enjoy sunset views of the Taj Mahal from Mehtab Bagh riverside gardens."
      },
      {
        day: 3,
        title: "Sunrise Taj Mahal, Agra Fort & Drive to Jaipur via Fatehpur Sikri (~240 km / 4.5 hrs)",
        description: "Witness the breathtaking sunrise over the ivory-white Taj Mahal as the first rays of dawn illuminate the marble dome. Return to your hotel for breakfast, followed by a tour of the red sandstone Agra Fort. Drive west toward Jaipur, stopping to explore Emperor Akbar's abandoned ghost citadel of Fatehpur Sikri and the geometric Chand Baori stepwell in Abhaneri. Arrive in the Pink City by evening."
      },
      {
        day: 4,
        title: "Jaipur: Amber Fort, Hawa Mahal & City Palace Museum",
        description: "A full day dedicated to the splendors of Jaipur. Ascend to the hilltop Amber Fort, exploring the mirror-inlaid Sheesh Mahal and royal courtyards overlooking Maota Lake. Stop at the water-surrounded Jal Mahal and photograph the honeycomb facade of Hawa Mahal (Palace of Winds). Tour the City Palace museum complex and the precision stone astronomical instruments of UNESCO-listed Jantar Mantar."
      },
      {
        day: 5,
        title: "Jaipur Hilltop Forts & Traditional Artisan Workshops",
        description: "Ascend to Jaigarh Fort to view the world's largest wheeled cannon and enjoy sweeping panoramic vistas across the Pink City. In the afternoon, discover Jaipur's living handicraft traditions, visiting certified block-printing studios, gem-cutting workshops, and blue pottery centers with your chauffeur at your service."
      },
      {
        day: 6,
        title: "Jaipur to Jodhpur via Sacred Pushkar Oasis (~335 km / 6 hrs)",
        description: "Depart Jaipur for the Blue City of Jodhpur, stopping en route in the holy town of Pushkar. Visit the sacred Lord Brahma Temple and stroll along the tranquil lake ghats. Continue across the desert plains to Jodhpur, arriving by late afternoon. Check into your hotel and enjoy an evening stroll around the historic Clock Tower and bustling Sardar Market."
      },
      {
        day: 7,
        title: "Jodhpur: Mehrangarh Fort, Jaswant Thada & Blue Quarter",
        description: "Ascend to Mehrangarh Fort, perched 400 feet above the city on a sheer cliff. Tour its museum palaces exhibiting royal palanquins, miniature paintings, and armory, and take in the iconic sweeping vista of thousands of blue Brahmin houses below. Visit the nearby royal marble cenotaph of Jaswant Thada and explore the serene gardens of Mandore."
      },
      {
        day: 8,
        title: "Jodhpur to Udaipur via Ranakpur Marble Jain Temples (~260 km / 5 hrs)",
        description: "Drive south through the rugged granite valleys of the Aravalli hills toward Udaipur. Stop at Ranakpur to tour the breathtaking 15th-century Chaumukha Jain Temple, supported by 1,444 uniquely hand-carved marble pillars. Continue winding through scenic mountain passes to Udaipur, the romantic 'City of Lakes', checking into your lakeside hotel by evening."
      },
      {
        day: 9,
        title: "Udaipur: City Palace, Saheliyon Ki Bari & Sunset Lake Pichola Boat Cruise",
        description: "Spend a full day exploring romantic Udaipur. Tour the sprawling City Palace complex overlooking Lake Pichola, marveling at its mosaic courtyards and peacock balconies. Visit the 17th-century Jagdish Temple and the royal fountains of Saheliyon Ki Bari. Conclude with a private sunset boat cruise on Lake Pichola, sailing past the floating Lake Palace and Jag Mandir."
      },
      {
        day: 10,
        title: "Udaipur Airport Transfer or Highway Return Transit",
        description: "After a leisurely lakeside breakfast, your chauffeur provides an effortless transfer to Udaipur's Maharana Pratap Airport (UDR) for your onward flight to Delhi, Mumbai, or your international connection, concluding a memorable 10-day royal journey."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Can this 10-day tour end in Udaipur instead of driving back to Delhi?",
        a: "Yes, that is the most recommended and popular option. Ending in Udaipur saves a long 12-hour return drive to Delhi. You can easily catch a 1-hour direct flight from Udaipur Airport back to Delhi or Mumbai."
      },
      {
        q: "Is this tour suitable for couples and honeymooners?",
        a: "Absolutely. The combination of the romantic Taj Mahal, the pink palaces of Jaipur, and the fairy-tale lakeside scenery of Udaipur makes this India's premier romantic journey."
      },
      {
        q: "What vehicle model is recommended for this 10-day route?",
        a: "We highly recommend the Toyota Innova Crysta for this circuit. It offers exceptional highway comfort, powerful dual-zone air-conditioning, and smooth suspension across both expressways and scenic Aravalli mountain passes."
      },
      {
        q: "Are highway tolls, parking, and driver allowances included?",
        a: "Yes, 100%. All highway toll plazas, state border entry taxes, fuel, parking fees, and driver lodging allowances are fully covered with zero unexpected expenses."
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
    overview: "The Arena of Maharaja Grand Tour is our most expansive and deeply immersive 16-day overland journey across Rajasthan and the Golden Triangle. Piloted by a master English-speaking chauffeur in an executive air-conditioned vehicle, this epic circuit traverses every historic kingdom, desert bastion, wildlife jungle, and sacred pilgrimage site in northwestern India. From the painted haveli mansions of Mandawa in Shekhawati, the golden desert dunes of Jaisalmer, and the royal citadel of Bikaner, to the blue quarter of Jodhpur, the misty hills of Mount Abu, the romantic lakes of Udaipur, the tiger forests of Ranthambore, the pink ramparts of Jaipur, and the sunrise Taj Mahal in Agra, this tour delivers an unhurried, peerless exploration of India's royal heartland.",
    highlights: [
      "Comprehensive 16-day grand royal circuit covering all major kingdoms and hidden gems of Rajasthan",
      "Open-air fresco gallery of painted merchant mansions and stepwells in Mandawa and Shekhawati",
      "Desert camel caravan and luxury tented camp experience among the Sam Sand Dunes in Jaisalmer",
      "Ascent to the fortified hilltop citadels of Mehrangarh, Junagarh, Amber, and Chittorgarh",
      "Verdant hill station retreat to Mount Abu and the microscopic marble filigree of Dilwara Temples",
      "Two open-top 4x4 Jeep safaris inside Ranthambore National Park tracking wild Royal Bengal Tigers",
      "Romantic sunset boat cruise on Lake Pichola past Udaipur's floating white palaces",
      "Sunrise excursion to the Taj Mahal and the red sandstone fortifications of Agra Fort"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of Historic New Delhi",
        description: "Meet your private chauffeur at Delhi International Airport. Enjoy a comfortable transfer to your hotel, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and the grand colonial boulevards of Rajpath, India Gate, and Parliament House."
      },
      {
        day: 2,
        title: "Delhi to Mandawa (Shekhawati Open-Air Art Gallery) (~260 km / 5 hrs)",
        description: "Drive west into the semi-arid Shekhawati region. Check into a restored heritage haveli in Mandawa and spend the afternoon exploring the painted mansions of 18th-century Marwari merchants, adorned with colorful frescoes depicting mythological scenes and royal legends."
      },
      {
        day: 3,
        title: "Mandawa to Bikaner & Junagarh Fort Tour (~190 km / 3.5 hrs)",
        description: "Travel across desert scrubland to the desert trading citadel of Bikaner. Tour the unconquered Junagarh Fort, exploring its opulent mirror-inlaid palaces, gilded courtrooms, and royal armory. In the evening, visit the old bazaar famous for Bikaneri savory snacks."
      },
      {
        day: 4,
        title: "Bikaner to Jaisalmer: Deep Thar Desert Crossing (~330 km / 5.5 hrs)",
        description: "Embark on an expansive desert highway drive west toward Jaisalmer. Watch the landscape transform into golden sand plains as you approach the desert citadel. Arrive in Jaisalmer by late afternoon and check into your hotel."
      },
      {
        day: 5,
        title: "Jaisalmer Fort, Carved Havelis & Sam Sand Dunes Safari (~45 km)",
        description: "Explore the living medieval citadel of Jaisalmer Fort (Sonar Qila) with its ancient Jain temples. Visit the intricately carved Patwon Ki Haveli. In the afternoon, head into the Thar Desert to the Sam Sand Dunes for a sunset camel safari, folk dance performances, and an authentic dinner at your luxury desert camp."
      },
      {
        day: 6,
        title: "Jaisalmer to Jodhpur: The Blue City (~280 km / 4.5 hrs)",
        description: "Drive southeast across desert plains to Jodhpur, the historic capital of Marwar. Arrive and check into your hotel. In the late afternoon, explore the bustling Sardar Market surrounding the historic Clock Tower, filled with traditional textiles and spices."
      },
      {
        day: 7,
        title: "Jodhpur: Mehrangarh Fort & Jaswant Thada Cenotaph",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the city on a sheer perpendicular rock cliff. Tour its museum palaces exhibiting royal palanquins and armory, and admire the iconic vista of the Blue City below. Visit the royal marble cenotaph of Jaswant Thada."
      },
      {
        day: 8,
        title: "Jodhpur to Mount Abu Hill Station (~260 km / 5 hrs)",
        description: "Leave the desert plains behind as your chauffeur climbs the winding scenic passes of the Aravalli Range into Mount Abu, Rajasthan's solitary hill station. Check into your hotel and enjoy a tranquil evening boat ride on Nakki Lake, followed by sunset views from Sunset Point."
      },
      {
        day: 9,
        title: "Dilwara Temples & Drive to Udaipur via Ranakpur (~185 km / 4 hrs)",
        description: "Marvel at the world-renowned 11th-century Dilwara Jain Temples, celebrated for their gossamer marble filigree carvings. Drive downhill toward Udaipur, stopping at Ranakpur to tour the Chaumukha Temple with its 1,444 uniquely carved pillars. Arrive in lakeside Udaipur by evening."
      },
      {
        day: 10,
        title: "Udaipur: City Palace, Jagdish Temple & Lake Pichola Boat Cruise",
        description: "A full day exploring romantic Udaipur. Tour the sprawling City Palace complex overlooking Lake Pichola, visit the 17th-century Jagdish Temple, and stroll through the royal fountain gardens of Saheliyon Ki Bari. Enjoy a private sunset boat cruise past the floating Lake Palace."
      },
      {
        day: 11,
        title: "Udaipur to Pushkar via Chittorgarh Fort (~280 km / 5.5 hrs)",
        description: "Drive to the sacred town of Pushkar, stopping en route to explore the colossal UNESCO-inscribed Chittorgarh Fort, the historic seat of Mewar valor with its famous Victory Tower. Arrive in Pushkar and stroll along the 52 sacred bathing ghats at sunset."
      },
      {
        day: 12,
        title: "Pushkar Brahma Temple & Highway Drive to Jaipur (~145 km / 2.5 hrs)",
        description: "Visit the revered 14th-century Lord Brahma Temple and explore Pushkar's colorful bazaar lanes. Drive along the smooth national highway to Jaipur. Check in and spend your afternoon exploring the royal City Palace and Jantar Mantar astronomical observatory."
      },
      {
        day: 13,
        title: "Jaipur: Amber Fort, Hawa Mahal & Artisan Workshops",
        description: "Explore the royal capital of Jaipur. Ascend to the hilltop Amber Fort, marveling at the mirror-inlaid Sheesh Mahal. Pause at the floating Jal Mahal and photograph the honeycomb windows of Hawa Mahal. Discover traditional block-printing and blue pottery workshops in the afternoon."
      },
      {
        day: 14,
        title: "Jaipur to Ranthambore Tiger Reserve (~160 km / 3.5 hrs)",
        description: "Drive southeast to Ranthambore National Park, one of the premier tiger reserves in the world. Check into your wildlife jungle lodge and embark on an afternoon open-top 4x4 Jeep safari tracking wild Royal Bengal Tigers, leopards, and spotted deer through ancient forest ruins."
      },
      {
        day: 15,
        title: "Morning Safari & Drive to Agra via Fatehpur Sikri (~260 km / 5 hrs)",
        description: "Enjoy an early morning jungle safari in Ranthambore for another opportunity to observe apex predators in the wild. Return to the lodge for breakfast, then drive to Agra, stopping en route at the imperial ghost city of Fatehpur Sikri. Arrive in Agra by evening."
      },
      {
        day: 16,
        title: "Sunrise Taj Mahal, Agra Fort & Return to Delhi / Airport Transfer (~230 km / 3.5 hrs)",
        description: "Rise early for the grand finale: sunrise at the Taj Mahal as the ivory-white marble glows in golden dawn light. Tour the red sandstone Agra Fort, then travel along the Yamuna Expressway back to Delhi International Airport for your departure flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Is this 16-day tour physically demanding?",
        a: "No. While it covers significant ground, having a dedicated private air-conditioned vehicle ensures you travel in complete comfort with flexible rest breaks, luggage handling, and unhurried multi-night stays in key cities."
      },
      {
        q: "Can we customize the route or add extra days?",
        a: "Yes, 100%. Our tours are fully tailor-made. You can add extra days in Udaipur, Jaipur, or Ranthambore, or modify hotel categories according to your preferences."
      },
      {
        q: "Are the jungle safaris in Ranthambore guaranteed?",
        a: "Safari vehicle permits are strictly regulated by the Forest Department. When you book your tour in advance, we secure confirmed 4x4 Jeep or Canter permits for the best core zones."
      },
      {
        q: "What is the best vehicle for a 16-day expedition?",
        a: "We strongly recommend the Toyota Innova Crysta for this grand tour. Its spacious interior, executive captain seats, powerful dual air-conditioning, and superior suspension ensure total comfort across diverse highway and desert terrains."
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
    overview: "Venture into the heart of the Great Thar Desert on this captivating 9-day private chauffeur tour through Rajasthan's legendary desert circuit. Connecting Delhi, the camel city of Bikaner, the golden sandstone mirage of Jaisalmer, the indigo Blue City of Jodhpur, and the royal pink capital of Jaipur, this itinerary reveals the raw, majestic beauty of India's western frontier. Witness sun-sculpted golden sand dunes, explore living medieval fortress citadels, marvel at intricately carved filigree merchant havelis, and experience sunset camel safaris with traditional folk music around starlit campfires. Your private English-speaking chauffeur provides seamless, safe, and comfortable highway travel throughout.",
    highlights: [
      "The quintessential 9-day desert expedition through Bikaner, Jaisalmer, Jodhpur, and Jaipur",
      "Camel safari across the golden ripples of Sam Sand Dunes with overnight luxury desert camping",
      "Living medieval citadel of Jaisalmer Fort (Sonar Qila) with its ancient Jain temples",
      "Unconquered Junagarh Fort in Bikaner with sumptuously decorated mirror palaces",
      "Formidable cliff-top ramparts of Mehrangarh Fort commanding sweeping vistas over Jodhpur's Blue City",
      "Hilltop Amber Fort and the photogenic honeycomb facade of Hawa Mahal in Jaipur",
      "Smooth four-lane highway cruising in an air-conditioned executive vehicle with dedicated chauffeur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of New Delhi",
        description: "Your chauffeur greets you at Indira Gandhi International Airport or your Delhi hotel. Enjoy a comfortable private transfer, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and the grand avenues of Rajpath past India Gate before resting at your hotel."
      },
      {
        day: 2,
        title: "Delhi to Bikaner (The Camel City) (~450 km / 7.5 hrs)",
        description: "Begin your westward journey into Rajasthan. Relax in air-conditioned comfort as your chauffeur navigates modern highways across rural Rajasthan toward Bikaner. Enjoy scenic highway comfort breaks along the route. Arrive in Bikaner by late afternoon and check into your heritage hotel."
      },
      {
        day: 3,
        title: "Bikaner Fort & Highway Drive to Jaisalmer (~330 km / 5.5 hrs)",
        description: "Tour the magnificent Junagarh Fort, built in 1589, admiring its gilded audience halls, mirror palaces, and royal palanquins. In the late morning, drive across desert plains toward Jaisalmer. Arrive as the setting sun turns the sandstone citadel to gleaming gold and check into your hotel."
      },
      {
        day: 4,
        title: "Jaisalmer Fort, Carved Havelis & Sunset Sam Sand Dunes Safari (~45 km)",
        description: "Explore the living fortress of Jaisalmer Fort (Sonar Qila), wandering through ancient cobblestone alleys and 12th-century carved Jain temples. Tour the exquisite five-story Patwon Ki Haveli. In the afternoon, head into the Thar Desert for a sunset camel ride over the golden Sam Sand Dunes, followed by cultural folk music, dance, and dining at your desert camp."
      },
      {
        day: 5,
        title: "Kuldhara Ghost Village & Highway Drive to Jodhpur (~280 km / 4.5 hrs)",
        description: "Visit the eerie 18th-century abandoned ruins of Kuldhara village before driving southeast to Jodhpur, the Blue City of Marwar. Check into your hotel and spend the late afternoon exploring the colorful Sardar Market surrounding the historic Clock Tower."
      },
      {
        day: 6,
        title: "Jodhpur: Mehrangarh Fort & Drive to Jaipur (~335 km / 5.5 hrs)",
        description: "Ascend to the towering Mehrangarh Fort, exploring its museum palaces and admiring the sweeping view of thousands of blue Brahmin houses below. Visit the white marble cenotaph of Jaswant Thada. In the afternoon, drive east across smooth highways to Jaipur, arriving by evening."
      },
      {
        day: 7,
        title: "Jaipur: Amber Fort, Hawa Mahal & City Palace",
        description: "A full day exploring royal Jaipur. Ascend to the hilltop Amber Fort, exploring its dazzling Sheesh Mahal (Mirror Palace). Stop at the water-surrounded Jal Mahal and photograph Hawa Mahal (Palace of Winds). Tour the City Palace museum and Jantar Mantar astronomical observatory."
      },
      {
        day: 8,
        title: "Jaipur Hill Forts, Artisan Bazaars & Cultural Exploration",
        description: "Visit the scenic hilltop Jaigarh Fort and the peaceful Galta Ji monkey temple. In the afternoon, explore Jaipur's famous block-printing and blue pottery workshops with your chauffeur on hand for all transfers."
      },
      {
        day: 9,
        title: "Jaipur to Delhi Return Drive & Airport Transfer (~260 km / 4.5 hrs)",
        description: "After a relaxed breakfast, take the smooth expressway drive back to New Delhi. Arrive in Delhi by late afternoon, where your chauffeur provides seamless drop-off directly at Indira Gandhi International Airport for your flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "How long are the driving days on this desert circuit?",
        a: "Most driving days average 4.5 to 5.5 hours along well-paved national highways. Day 2 is the longest drive (~7.5 hrs), but our private vehicle allows flexible rest and meal stops whenever you desire."
      },
      {
        q: "Is an overnight stay at the desert camp included?",
        a: "Yes, Day 4 includes an overnight stay in a luxury Swiss cottage tent in the Sam Sand Dunes, complete with private attached bathroom, electricity, dinner, and cultural performances."
      },
      {
        q: "What clothing is recommended for the desert?",
        a: "Pack lightweight cotton clothing for warm sunny daytime sightseeing, and a warm fleece, sweater, or jacket for the cool desert nights (which can drop to 8°C–10°C in winter)."
      },
      {
        q: "Are all toll taxes, interstate permits, and fuel included?",
        a: "Yes, 100%. All highway toll plazas, Rajasthan interstate border permits, parking fees, fuel, and driver allowances are fully covered in your quote."
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
    overview: "Discover the captivating allure of royal Rajasthan on this immersive 11-day private chauffeur journey through painted merchant towns, Thar Desert dunes, formidable hill forts, and the romantic Taj Mahal. Traveling comfortably in an air-conditioned private vehicle with a seasoned English-speaking driver, this circuit weaves from Delhi to the open-air fresco galleries of Mandawa in Shekhawati, the desert outposts of Bikaner and golden Jaisalmer, the indigo alleys of Jodhpur, the pink royal palaces of Jaipur, and the imperial Mughal citadels of Agra. Experience the freedom of tailor-made travel, stopping for sunset camel rides over desert dunes, staying in authentic heritage havelis, and marveling at the marble wonder of the Taj Mahal at dawn.",
    highlights: [
      "Comprehensive 11-day overland circuit connecting Delhi, Shekhawati, Bikaner, Jaisalmer, Jodhpur, Jaipur, and Agra",
      "Fresco-painted merchant havelis and stepwells of Mandawa and the Shekhawati region",
      "Sunset camel safari and overnight luxury tented camp experience among the Sam Sand Dunes in Jaisalmer",
      "Living medieval citadel of Jaisalmer Fort (Sonar Qila) with its ancient Jain temples",
      "Towering Mehrangarh Fort commanding the indigo Blue City of Jodhpur",
      "Hilltop Amber Fort and the photogenic honeycomb facade of Hawa Mahal in Jaipur",
      "Private sunrise excursion to the Taj Mahal and guided tour of the massive red sandstone Agra Fort"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of New Delhi",
        description: "Meet your private chauffeur at Indira Gandhi International Airport. Enjoy a comfortable private transfer, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and driving past India Gate and Parliament House before resting at your hotel."
      },
      {
        day: 2,
        title: "Delhi to Mandawa (Shekhawati Painted Haveli Country) (~260 km / 5 hrs)",
        description: "Drive west into the semi-arid Shekhawati region. Check into a restored heritage haveli in Mandawa and spend the afternoon exploring the painted mansions of 18th-century Marwari merchants, adorned with colorful frescoes depicting mythological scenes and royal legends."
      },
      {
        day: 3,
        title: "Mandawa to Bikaner & Junagarh Fort Tour (~190 km / 3.5 hrs)",
        description: "Travel across desert scrubland to the desert trading citadel of Bikaner. Tour the unconquered Junagarh Fort, exploring its opulent mirror-inlaid palaces, gilded courtrooms, and royal armory. In the evening, visit the old bazaar famous for Bikaneri savory snacks."
      },
      {
        day: 4,
        title: "Bikaner to Jaisalmer: Deep Thar Desert Crossing (~330 km / 5.5 hrs)",
        description: "Embark on an expansive desert highway drive west toward Jaisalmer. Watch the landscape transform into golden sand plains as you approach the desert citadel. Arrive in Jaisalmer by late afternoon and check into your hotel."
      },
      {
        day: 5,
        title: "Jaisalmer Fort, Carved Havelis & Sam Sand Dunes Safari (~45 km)",
        description: "Explore the living medieval citadel of Jaisalmer Fort (Sonar Qila) with its ancient Jain temples. Visit the intricately carved Patwon Ki Haveli. In the afternoon, head into the Thar Desert to the Sam Sand Dunes for a sunset camel safari, folk dance performances, and an authentic dinner at your luxury desert camp."
      },
      {
        day: 6,
        title: "Jaisalmer to Jodhpur: The Blue City (~280 km / 4.5 hrs)",
        description: "Drive southeast across desert plains to Jodhpur, the historic capital of Marwar. Arrive and check into your hotel. In the late afternoon, explore the bustling Sardar Market surrounding the historic Clock Tower, filled with traditional textiles and spices."
      },
      {
        day: 7,
        title: "Jodhpur: Mehrangarh Fort & Jaswant Thada Cenotaph",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the city on a sheer perpendicular rock cliff. Tour its museum palaces exhibiting royal palanquins and armory, and admire the iconic vista of the Blue City below. Visit the royal marble cenotaph of Jaswant Thada."
      },
      {
        day: 8,
        title: "Jodhpur to Jaipur: Highway Drive to the Pink City (~335 km / 5.5 hrs)",
        description: "Drive east along modern national highways to Jaipur, the Pink City. Arrive by afternoon, check into your hotel, and spend the late afternoon visiting the royal City Palace museum and the precision stone astronomical instruments of Jantar Mantar."
      },
      {
        day: 9,
        title: "Jaipur: Amber Fort, Hawa Mahal & Artisan Bazaars",
        description: "A full day of royal Jaipur sightseeing. Ascend to the hilltop Amber Fort, exploring its mirror-inlaid Sheesh Mahal and royal courtyards. Stop at the floating Jal Mahal and photograph the honeycomb facade of Hawa Mahal. In the afternoon, discover traditional block-printing and blue pottery workshops."
      },
      {
        day: 10,
        title: "Jaipur to Agra via Fatehpur Sikri & Sunset Taj Mahal (~240 km / 4 hrs)",
        description: "Drive east toward Agra, stopping en route to explore the imperial ghost city of Fatehpur Sikri, Emperor Akbar's abandoned sandstone capital. Arrive in Agra, check into your hotel, and enjoy a peaceful sunset view of the Taj Mahal across the river from Mehtab Bagh gardens."
      },
      {
        day: 11,
        title: "Sunrise Taj Mahal, Agra Fort & Return to Delhi / Airport Transfer (~230 km / 3.5 hrs)",
        description: "Rise early for the grand finale: sunrise at the Taj Mahal as the ivory-white marble glows in golden dawn light. Tour the red sandstone Agra Fort, then travel along the Yamuna Expressway back to Delhi International Airport for your departure flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "What makes this 11-day itinerary 'Exotic'?",
        a: "It combines the remote painted towns of Shekhawati and the deep desert sands of Jaisalmer with the classic royal monuments of Jaipur, Agra, and Delhi, offering an extraordinary variety of cultural landscapes."
      },
      {
        q: "Are meals included at the desert camp in Jaisalmer?",
        a: "Yes. The overnight desert camp experience includes evening tea and snacks, a traditional Rajasthani buffet dinner around the campfire, and breakfast the following morning."
      },
      {
        q: "Can this tour be done in reverse?",
        a: "Yes, we can arrange the tour starting from Agra or Delhi in reverse order, depending on your preferred pacing and flight schedules."
      },
      {
        q: "Are all vehicle expenses and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver boarding allowances are all fully covered."
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
    overview: "Step into the architectural grandeur of India's royal dynasties on this specialized 10-day private chauffeur tour celebrating the Forts and Palaces of Rajasthan. Traveling in an executive air-conditioned vehicle with a seasoned English-speaking chauffeur, this itinerary focuses on the most formidable hill fortresses, gilded royal residences, painted merchant havelis, and desert citadels in northern India. From the fresco-adorned town of Samode and the open-air galleries of Mandawa, to the unconquered bastions of Junagarh in Bikaner, the golden sandstone living fort of Jaisalmer, the sheer cliff-top walls of Mehrangarh in Jodhpur, and the pink ramparts of Amber Fort in Jaipur, this tour is a masterclass in regal Indian architecture, military chivalry, and royal hospitality.",
    highlights: [
      "Specialized architectural tour covering 8 world-famous forts and royal palace complexes across Rajasthan",
      "Opulent frescoed halls and heritage hospitality at the historic Samode Palace and Mandawa havelis",
      "Unvanquished Junagarh Fort in Bikaner with museum-grade mirror palaces and gold leaf ceilings",
      "Living medieval citadel of Jaisalmer Fort (Sonar Qila) and lace-like stone carvings of Patwon Ki Haveli",
      "Towering cliff-top Mehrangarh Fort commanding sweeping vistas over the Blue City of Jodhpur",
      "Ascent to the fortified hilltop ramparts of Amber Fort and the photogenic facade of Hawa Mahal in Jaipur",
      "Seamless highway transit in an air-conditioned executive vehicle with dedicated private chauffeur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of Historic New Delhi",
        description: "Meet your private chauffeur at Indira Gandhi International Airport. Enjoy a comfortable transfer to your hotel, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and the grand colonial avenues of Rajpath past India Gate before resting at your hotel."
      },
      {
        day: 2,
        title: "Delhi to Samode Palace & Mandawa Havelis (~260 km / 5 hrs)",
        description: "Drive into rural Rajasthan, stopping at the magnificent 475-year-old Samode Palace to admire its famous Sheesh Mahal (Hall of Mirrors). Continue into the Shekhawati region to Mandawa, checking into a restored heritage haveli and spending the afternoon exploring its fresco-painted merchant mansions."
      },
      {
        day: 3,
        title: "Mandawa to Bikaner & Junagarh Fort Palace Tour (~190 km / 3.5 hrs)",
        description: "Drive across desert scrublands to Bikaner. Tour the unconquered 16th-century Junagarh Fort, exploring its lavishly decorated royal audience chambers, mirror-inlaid palaces, and ancient armory. In the evening, visit the historic old town and its famous sweet shops."
      },
      {
        day: 4,
        title: "Bikaner to Jaisalmer: Journey to the Golden Citadel (~330 km / 5.5 hrs)",
        description: "Embark on an expansive desert highway drive west toward Jaisalmer. Arrive in the late afternoon as the setting sun illuminates the golden sandstone citadel rising from the Thar Desert. Check into your hotel and enjoy a peaceful evening."
      },
      {
        day: 5,
        title: "Jaisalmer Fort, Carved Palatial Havelis & Sam Dunes Safari (~45 km)",
        description: "Explore Jaisalmer Fort (Sonar Qila), the living citadel with its ancient Jain temples. Tour the palatial Patwon Ki Haveli and Salim Singh Ki Haveli with their intricate filigree balconies. In the afternoon, head to Sam Sand Dunes for a sunset camel ride and desert cultural performances."
      },
      {
        day: 6,
        title: "Jaisalmer to Jodhpur: The Blue City Citadel (~280 km / 4.5 hrs)",
        description: "Drive southeast across desert plains to Jodhpur, the historic capital of Marwar. Arrive and check into your hotel. In the late afternoon, explore the bustling Sardar Market surrounding the historic Clock Tower, filled with traditional spices and textiles."
      },
      {
        day: 7,
        title: "Jodhpur: Mehrangarh Fort & Jaswant Thada Cenotaph",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the city on a perpendicular rock cliff. Tour its museum palaces exhibiting royal palanquins and armory, and admire the iconic vista of the Blue City below. Visit the royal marble cenotaph of Jaswant Thada."
      },
      {
        day: 8,
        title: "Jodhpur to Jaipur: Highway Drive to the Pink City (~335 km / 5.5 hrs)",
        description: "Drive east along modern national highways to Jaipur. Arrive by afternoon, check into your hotel, and spend the late afternoon visiting the royal City Palace museum and the precision stone astronomical instruments of Jantar Mantar."
      },
      {
        day: 9,
        title: "Jaipur: Amber Fort, Jaigarh Hill Citadel & Hawa Mahal",
        description: "A full day of royal Jaipur sightseeing. Ascend to the hilltop Amber Fort, exploring its mirror-inlaid Sheesh Mahal and royal courtyards. Stop at the water-surrounded Jal Mahal and photograph the honeycomb facade of Hawa Mahal. Visit Jaigarh Fort to view the world's largest wheeled cannon."
      },
      {
        day: 10,
        title: "Jaipur to Delhi Highway Drive & Airport Transfer (~260 km / 4.5 hrs)",
        description: "After a relaxed breakfast, take the smooth expressway drive back to New Delhi. Arrive in Delhi by late afternoon, where your chauffeur provides seamless drop-off directly at Indira Gandhi International Airport for your departure flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Can we stay inside actual heritage palaces on this tour?",
        a: "Yes! We specialize in booking authentic heritage properties, ranging from historic noble havelis to royal palaces like Samode Palace, Alsisar Haveli, and Ajit Bhawan."
      },
      {
        q: "Are the forts physically strenuous to walk through?",
        a: "Most major forts (like Mehrangarh, Amber, and Junagarh) have well-paved pathways, gentle ramps, and modern elevators (such as in Mehrangarh) for guests with limited mobility."
      },
      {
        q: "Can we add the Taj Mahal to this forts and palaces circuit?",
        a: "Yes. We can easily add a 1-night extension to Agra to include the Taj Mahal and Agra Fort before returning to Delhi."
      },
      {
        q: "Are all toll taxes, interstate permits, and fuel included?",
        a: "Yes, 100%. All highway toll plazas, state border entry taxes, parking fees, fuel, and driver allowances are fully covered."
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
    overview: "Celebrate the timeless romance of northern India on this enchanting 10-day private chauffeur journey crafted especially for couples and honeymooners. Weaving through the world's greatest monument of eternal love—the Taj Mahal in Agra—to the pink royal avenues of Jaipur, the fairy-tale lakeside palaces of Udaipur, and the blue quarter of Jodhpur, this overland tour combines royal indulgence with serene intimacy. Travel at an unhurried, romantic pace in an executive air-conditioned private vehicle with your discreet, courteous English-speaking chauffeur. Sail on private sunset boat cruises across Lake Pichola past floating white marble palaces, dine by candlelight in secluded courtyard havelis, and marvel at the golden sunrise over the Taj Mahal.",
    highlights: [
      "The premier romantic itinerary linking Agra, Jaipur, Udaipur, and Jodhpur for couples and honeymooners",
      "Private dawn excursion to the Taj Mahal to experience the world's most romantic monument in peaceful morning light",
      "Exclusive private sunset boat cruise on Lake Pichola past Udaipur's floating Lake Palace and Jag Mandir",
      "Ascent to the fortified hilltop ramparts of Amber Fort and the photogenic facade of Hawa Mahal in Jaipur",
      "Romantic candlelit dining in restored royal courtyards and lakeside rooftop heritage restaurants",
      "Stopover at the world-renowned 15th-century carved marble Jain temples of Ranakpur",
      "Formidable cliff-top battlements of Mehrangarh Fort commanding sweeping vistas over Jodhpur's Blue City"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of New Delhi",
        description: "Your private chauffeur welcomes you at Indira Gandhi International Airport with personalized meet-and-greet service and luggage assistance. Enjoy a comfortable transfer to your hotel, followed by an introductory tour of Humayun's Tomb, Qutub Minar, and driving past India Gate before a restful evening."
      },
      {
        day: 2,
        title: "Delhi to Agra via Yamuna Expressway & Sunset Taj View (~230 km / 3.5 hrs)",
        description: "After breakfast, cruise down the smooth Yamuna Expressway to Agra. Check into your hotel and enjoy an intimate afternoon visiting the red sandstone Agra Fort. At sunset, visit Mehtab Bagh gardens across the river for a tranquil, romantic view of the Taj Mahal reflecting in the calm waters of the Yamuna."
      },
      {
        day: 3,
        title: "Sunrise Taj Mahal & Scenic Drive to Jaipur via Fatehpur Sikri (~240 km / 4.5 hrs)",
        description: "Experience the defining romantic moment: sunrise at the Taj Mahal as the ivory-white Makrana marble glows in soft golden light. Return to your hotel for breakfast, then drive to Jaipur, stopping en route at the imperial ghost city of Fatehpur Sikri and the ancient Chand Baori stepwell. Arrive in the Pink City by evening."
      },
      {
        day: 4,
        title: "Jaipur: Amber Fort, Hawa Mahal & Royal City Palace",
        description: "A full day of royal Jaipur sightseeing. Ascend to the hilltop Amber Fort, exploring its mirror-inlaid Sheesh Mahal and royal courtyards. Stop at the floating Jal Mahal and photograph the honeycomb facade of Hawa Mahal. Tour the City Palace museum and Jantar Mantar astronomical observatory."
      },
      {
        day: 5,
        title: "Jaipur to Jodhpur via Sacred Pushkar Lake (~335 km / 6 hrs)",
        description: "Depart Jaipur for Jodhpur, stopping en route in the holy town of Pushkar. Visit the sacred Lord Brahma Temple and stroll along the tranquil lake ghats. Continue across the desert plains to Jodhpur, arriving by late afternoon. Check into your hotel and enjoy an evening stroll around the historic Clock Tower."
      },
      {
        day: 6,
        title: "Jodhpur: Mehrangarh Fort, Jaswant Thada & Blue Quarter",
        description: "Ascend to Mehrangarh Fort, perched 400 feet above the city on a sheer cliff. Tour its museum palaces exhibiting royal palanquins and armory, and admire the iconic vista of the Blue City below. Visit the royal marble cenotaph of Jaswant Thada and enjoy a romantic dinner overlooking the illuminated fort."
      },
      {
        day: 7,
        title: "Jodhpur to Udaipur via Ranakpur Marble Jain Temples (~260 km / 5 hrs)",
        description: "Drive south through the rugged granite valleys of the Aravalli hills toward Udaipur. Stop at Ranakpur to tour the breathtaking 15th-century Chaumukha Jain Temple with its 1,444 uniquely hand-carved marble pillars. Continue to Udaipur, the romantic 'City of Lakes', checking into your lakeside hotel by evening."
      },
      {
        day: 8,
        title: "Udaipur: City Palace, Saheliyon Ki Bari & Sunset Lake Pichola Boat Cruise",
        description: "Spend a full day exploring romantic Udaipur. Tour the sprawling City Palace complex overlooking Lake Pichola, marveling at its mosaic courtyards and peacock balconies. Visit Saheliyon Ki Bari gardens and conclude with an exclusive private sunset boat cruise on Lake Pichola past the floating Lake Palace."
      },
      {
        day: 9,
        title: "Udaipur: Monsoon Palace Sunset & Leisure Afternoon",
        description: "Enjoy an unhurried, romantic morning at your hotel. In the afternoon, visit the hilltop Sajjan Garh (Monsoon Palace) perched high in the Aravalli hills, offering sweeping panoramic sunset views over the lakes and surrounding countryside. Enjoy a farewell romantic dinner by the water."
      },
      {
        day: 10,
        title: "Udaipur Airport Transfer for Departure Flight",
        description: "After a leisurely lakeside breakfast, your chauffeur provides an effortless transfer to Udaipur's Maharana Pratap Airport (UDR) for your onward flight to Delhi, Mumbai, or your international connection, concluding an unforgettable romantic journey."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Can special romantic experiences (like candlelit dinners or flower setups) be arranged?",
        a: "Yes, absolutely! We frequently coordinate private sunset boat charters on Lake Pichola, rooftop candlelight dinners with fort views, and special anniversary celebrations."
      },
      {
        q: "Is ending the tour in Udaipur more convenient than driving back to Delhi?",
        a: "Yes, highly recommended. Flying out of Udaipur Airport saves a 12-hour return road journey, giving you more time to relax and enjoy the romantic ambiance of Udaipur."
      },
      {
        q: "What vehicle model is recommended for couples on this tour?",
        a: "For couples, both our premium executive sedans (such as the Maruti Dzire) and the spacious Toyota Innova Crysta provide supreme comfort and privacy throughout the journey."
      },
      {
        q: "Are highway tolls, parking, and driver allowances included?",
        a: "Yes, 100%. All highway toll plazas, state border entry taxes, fuel, parking fees, and driver allowances are fully covered."
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
    overview: "Experience the multifaceted splendor of India on this grand 15-day private chauffeur expedition combining the monumental Golden Triangle, the royal desert heritage of Rajasthan, the bustling financial capital of Mumbai, and the sun-kissed beaches of Goa. Designed for international travelers who want to experience the complete spectrum of Indian culture, this overland and coastal itinerary brings together historic Mughal monuments, majestic Rajput hill fortresses, vibrant cosmopolitan energy, and tropical relaxation. Travel with a dedicated private driver in an executive air-conditioned vehicle through Delhi, Agra, Jaipur, and Udaipur, followed by seamless flight transfers to Mumbai and coastal Goa.",
    highlights: [
      "Grand 15-day multi-destination tour covering North India, Rajasthan, Mumbai, and Goa",
      "Sunrise excursion to the Taj Mahal in Agra with expedited entry and optimal photography angles",
      "The monumental hill ramparts of Amber Fort and the photogenic honeycomb facade of Hawa Mahal in Jaipur",
      "Private sunset boat cruise on Lake Pichola past Udaipur's floating white marble palaces",
      "Cosmopolitan heritage tour of Mumbai including the Gateway of India, Marine Drive, and Dhobi Ghat",
      "Relaxing coastal retreat along the palm-fringed golden sand beaches and Portuguese heritage churches of Goa",
      "Seamless coordination of private chauffeur road touring and domestic flight transfers"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of New Delhi",
        description: "Meet your private chauffeur at Indira Gandhi International Airport. Enjoy a comfortable private transfer, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and driving past India Gate and Parliament House before resting at your hotel."
      },
      {
        day: 2,
        title: "Old Delhi Heritage Tour & Drive to Agra via Yamuna Expressway (~230 km / 3.5 hrs)",
        description: "Explore Old Delhi's historic core: visit Jama Masjid, take a cycle-rickshaw through Chandni Chowk spice bazaar, and pause at Raj Ghat. After lunch, cruise down the Yamuna Expressway to Agra. Check into your hotel and enjoy sunset views of the Taj Mahal from Mehtab Bagh."
      },
      {
        day: 3,
        title: "Sunrise Taj Mahal, Agra Fort & Drive to Jaipur via Fatehpur Sikri (~240 km / 4.5 hrs)",
        description: "Witness the sunrise over the Taj Mahal as the ivory-white marble glows in dawn light. Tour Agra Fort, then drive to Jaipur, stopping en route at the imperial ghost city of Fatehpur Sikri and the geometric Chand Baori stepwell. Arrive in the Pink City by evening."
      },
      {
        day: 4,
        title: "Jaipur: Amber Fort, Hawa Mahal & City Palace Museum",
        description: "A full day dedicated to the splendors of Jaipur. Ascend to the hilltop Amber Fort, exploring its mirror-inlaid Sheesh Mahal and royal courtyards. Stop at the water-surrounded Jal Mahal and photograph Hawa Mahal. Tour the City Palace museum and Jantar Mantar observatory."
      },
      {
        day: 5,
        title: "Jaipur to Jodhpur via Sacred Pushkar Lake (~335 km / 6 hrs)",
        description: "Depart Jaipur for Jodhpur, stopping en route in the holy town of Pushkar. Visit the sacred Lord Brahma Temple and stroll along the tranquil lake ghats. Continue across the desert plains to Jodhpur, arriving by late afternoon. Check into your hotel."
      },
      {
        day: 6,
        title: "Jodhpur: Mehrangarh Fort & Drive to Udaipur via Ranakpur (~260 km / 5 hrs)",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the Blue City. Tour its museum palaces, then drive south through the Aravalli hills to Udaipur, stopping at Ranakpur to tour the Chaumukha Jain Temple with its 1,444 carved marble pillars. Arrive in Udaipur by evening."
      },
      {
        day: 7,
        title: "Udaipur: City Palace, Saheliyon Ki Bari & Sunset Lake Pichola Boat Cruise",
        description: "Explore romantic Udaipur. Tour the sprawling City Palace complex overlooking Lake Pichola, visit the Jagdish Temple, and stroll through Saheliyon Ki Bari gardens. Conclude with an exclusive private sunset boat cruise past the floating Lake Palace."
      },
      {
        day: 8,
        title: "Udaipur to Mumbai Flight & Marine Drive Sunset",
        description: "Your chauffeur transfers you to Udaipur Airport for your short flight to Mumbai. Meet your private Mumbai chauffeur upon arrival and transfer to your hotel. In the evening, enjoy a sunset stroll along the famous Marine Drive promenade (the Queen's Necklace)."
      },
      {
        day: 9,
        title: "Mumbai: Gateway of India, Elephanta Caves & City Heritage",
        description: "Take a morning boat to Elephanta Island to explore the 7th-century rock-cut Shiva caves. Back in the city, visit the Gateway of India, the Victorian Gothic Chhatrapati Shivaji Maharaj Terminus (CST), the open-air laundry of Dhobi Ghat, and the historic docks."
      },
      {
        day: 10,
        title: "Mumbai to Goa Flight & Beach Resort Check-in",
        description: "Transfer to Mumbai Airport for your flight to the tropical coastal paradise of Goa. Meet your private Goa chauffeur and transfer to your beach resort. Spend the afternoon relaxing on the golden sands and enjoying the warm Arabian Sea breezes."
      },
      {
        day: 11,
        title: "North Goa: Portuguese Forts, Anjuna & Calangute Beaches",
        description: "Explore North Goa with your chauffeur. Visit the 17th-century Portuguese coastal fortification of Fort Aguada, explore the vibrant flea markets of Anjuna, and enjoy fresh seafood at beach shacks along Candolim and Calangute."
      },
      {
        day: 12,
        title: "South Goa: Old Goa Heritage Churches & Spice Plantation Tour",
        description: "Visit UNESCO-listed Old Goa to tour the magnificent Basilica of Bom Jesus (housing the sacred relics of St. Francis Xavier) and the Se Cathedral. Continue into the lush green hinterland for a guided walk through an organic spice plantation followed by an authentic Goan buffet lunch."
      },
      {
        day: 13,
        title: "Goa: Coastal Leisure & Water Sports",
        description: "A full day at leisure to relax on Goa's pristine beaches, indulge in ayurvedic spa treatments, or enjoy optional water sports like parasailing and jet-skiing with your vehicle and chauffeur on standby for local dining transfers."
      },
      {
        day: 14,
        title: "Goa: Latin Quarter (Fontainhas) Heritage Walk",
        description: "Visit Panaji's historic Latin Quarter of Fontainhas, characterized by narrow cobblestone streets, brightly painted Portuguese colonial villas, and art cafes. Enjoy a farewell coastal sunset and dinner."
      },
      {
        day: 15,
        title: "Goa Airport Transfer for Departure Flight",
        description: "After breakfast, your chauffeur provides a comfortable transfer to Goa International Airport (Dabolim or Mopa) for your onward flight connection, concluding an extraordinary 15-day pan-Indian journey."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "How are internal domestic flights booked on this tour?",
        a: "Domestic flights (Udaipur to Mumbai, and Mumbai to Goa) can either be booked by us as part of an all-inclusive flight+chauffeur package, or you can book them independently based on our flight timing recommendations."
      },
      {
        q: "Is a private vehicle and chauffeur provided in Mumbai and Goa as well?",
        a: "Yes! We coordinate dedicated local air-conditioned private vehicles and professional drivers in North India (Delhi to Udaipur), in Mumbai, and throughout your stay in Goa."
      },
      {
        q: "What is the best time of year for this North & South India combination?",
        a: "Between October and March is the ideal season. Northern India is pleasantly cool and sunny, and Goa experiences dry, sunny beach weather with calm waters."
      },
      {
        q: "Can we customize the number of days spent in Goa or Rajasthan?",
        a: "Yes, 100%. You can extend your beach stay in Goa, add extra nights in Udaipur or Jaipur, or adjust the itinerary to match your holiday schedule."
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
    overview: "Escape into the cool, lush heights of Mount Abu—Rajasthan's solitary hilltop sanctuary set at 1,220 meters amidst the ancient granite peaks of the Aravalli mountain range. This specialized 5-day overland journey blends the miraculous 11th-century marble filigree of the Dilwara Jain Temples, scenic boat rides across sacred Nakki Lake, dramatic sunsets over rugged cliffs, and ancient fortifications at Achalgarh. Traveling in executive air-conditioned comfort with a seasoned mountain chauffeur, this itinerary provides a refreshing, tranquil retreat that contrasts dramatically with Rajasthan's desert plains, combined with the romantic lakeside allure of Udaipur.",
    highlights: [
      "Serene 5-day mountain and lake circuit covering Mount Abu, Dilwara, Ranakpur, and Udaipur",
      "World-renowned 11th-century Dilwara Jain Temples carved with microscopic gossamer marble delicacy",
      "Sunset boat cruise on sacred Nakki Lake and sweeping panoramic vistas from Sunset Point",
      "Excursion to Guru Shikhar peak (1,722 meters), the highest mountain summit in Rajasthan",
      "Ancient 15th-century Achalgarh Fort and sacred Achaleshwar Mahadev Shiva Temple",
      "Guided tour of the 1,444 uniquely carved marble pillars of the Ranakpur Chaumukha Temple",
      "Scenic mountain pass driving in an air-conditioned private vehicle with experienced mountain driver"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Udaipur / Ahmedabad & Scenic Mountain Drive to Mount Abu (~160 km / 3.5 hrs)",
        description: "Your private chauffeur welcomes you at Udaipur Airport/Station (or Ahmedabad Airport) with personalized luggage assistance. Leave the plains behind as your air-conditioned vehicle ascends the winding mountain pass of the Aravalli Range into the verdant pine-scented hills of Mount Abu. Check into your heritage resort and enjoy a tranquil evening stroll along Nakki Lake, browsing local tribal markets."
      },
      {
        day: 2,
        title: "World-Famous Dilwara Temples & Nakki Lake Boat Cruise",
        description: "Dedicate the morning to the architectural wonder of the Dilwara Jain Temples (Vimal Vasahi and Luna Vasahi), revered globally for their intricate marble ceilings that resemble carved ivory lace. In the afternoon, enjoy a relaxing pedal or shikara boat cruise on Nakki Lake, followed by a visit to the famous Toad Rock for scenic views."
      },
      {
        day: 3,
        title: "Achalgarh Fort, Guru Shikhar Peak & Sunset Point",
        description: "Journey to Guru Shikhar, the highest peak in Rajasthan and the Aravalli Range (1,722 meters), offering panoramic vistas above the clouds. Explore the ancient 15th-century Achalgarh Fort built by Maharana Kumbha and the sacred Achaleshwar Mahadev Shiva Temple. In the late afternoon, head to Sunset Point as the sun dips into the crimson desert horizons."
      },
      {
        day: 4,
        title: "Trevor's Tank Wildlife Sanctuary & Mountain Drive to Udaipur (~160 km / 3.5 hrs)",
        description: "Visit Trevor's Tank, a secluded nature reserve nestled in dense deciduous forest, renowned for birdwatching and crocodile sightings. Descend the mountain pass and travel through rural Rajasthan to Udaipur, the 'City of Lakes'. Check into your lakeside hotel and enjoy an evening sunset boat cruise on Lake Pichola past the floating Lake Palace."
      },
      {
        day: 5,
        title: "Udaipur City Palace Tour & Airport / Station Departure",
        description: "Tour the magnificent Udaipur City Palace complex overlooking Lake Pichola, marveling at its peacock courtyards and crystal gallery. Visit the Jagdish Temple before your chauffeur provides a comfortable transfer to Udaipur Airport (UDR) for your onward flight, concluding a refreshing mountain and heritage getaway."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "What is the best time of year to visit Mount Abu?",
        a: "Mount Abu is a pleasant year-round destination. It offers a refreshing escape from summer heat (March–June), lush green waterfalls and mist during monsoon (July–September), and crisp, cool weather in winter (October–February)."
      },
      {
        q: "Can this tour start and end in Ahmedabad instead of Udaipur?",
        a: "Yes. Mount Abu is located approximately 220 km (4.5 hours) from Ahmedabad Airport, making Ahmedabad a very convenient entry and exit point for this tour."
      },
      {
        q: "Are the mountain roads safe to drive?",
        a: "Yes. The road up to Mount Abu is a well-paved, wide, two-lane scenic mountain highway. Our chauffeurs are licensed commercial mountain drivers with years of experience navigating hill curves safely."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and parking fees included?",
        a: "Yes, 100%. All expressway tolls, Mount Abu municipal entry taxes, parking fees, fuel, and driver allowances are fully covered."
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
    overview: "Journey deep into the golden heart of the Great Thar Desert on this specialized 6-day private chauffeur camel caravan expedition across Western Rajasthan. Connecting the sun-drenched citadel of Jodhpur, the camel country of Bikaner, and the remote sand dunes of Jaisalmer and Khuri, this tour is designed for travelers seeking an authentic, uncommercialized desert immersion. Experience nomadic desert life, ride through quiet dunes far from tourist crowds, sleep in luxury Swiss cottage tents under brilliant starlit skies, and explore living medieval fortresses and lace-carved sandstone havelis with your dedicated English-speaking chauffeur.",
    highlights: [
      "Authentic 6-day desert immersion covering Jodhpur, Bikaner, Jaisalmer, and the untouched Khuri Dunes",
      "Extended camel caravan safari across pristine, uncommercialized desert ripples with experienced local handlers",
      "Overnight luxury tented camp experience under clear desert stars with Kalbelia folk dance and campfire dining",
      "Living medieval citadel of Jaisalmer Fort (Sonar Qila) with its ancient yellow limestone Jain temples",
      "Lace-like sandstone filigree balconies of Patwon Ki Haveli, Salim Singh Ki Haveli, and Nathmal Ki Haveli",
      "Unconquered Junagarh Fort in Bikaner with museum-grade mirror palaces and royal armory",
      "Towering cliff-top battlements of Mehrangarh Fort commanding Jodhpur's Blue City"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jodhpur & Transfer to Bikaner (The Camel City) (~250 km / 4.5 hrs)",
        description: "Meet your private chauffeur at Jodhpur Airport or Railway Station. Settle into your air-conditioned vehicle as we drive north across desert scrublands to Bikaner. Arrive and check into your heritage hotel. In the afternoon, visit the National Camel Research Center to observe desert breeding herds, and stroll through the historic old bazaar famous for Bikaneri savory snacks and sweets."
      },
      {
        day: 2,
        title: "Junagarh Fort Tour & Desert Drive to Jaisalmer (~330 km / 5.5 hrs)",
        description: "Tour the magnificent 16th-century Junagarh Fort in Bikaner, admiring its gilded audience halls, mirror palaces, and royal weaponry. In the late morning, embark on an expansive highway drive west across the Thar Desert toward Jaisalmer. Arrive as the setting sun turns the sandstone citadel to gleaming gold and check into your hotel."
      },
      {
        day: 3,
        title: "Jaisalmer Fort, Carved Merchant Havelis & Gadisar Lake",
        description: "Spend the morning exploring the living fortress of Jaisalmer Fort (Sonar Qila), wandering through ancient cobblestone alleys and 12th-century carved Jain temples. Tour the exquisite five-story Patwon Ki Haveli and the peaceful 14th-century Gadisar Lake, ringed by sacred temples and royal ghats. Enjoy a relaxed afternoon at leisure."
      },
      {
        day: 4,
        title: "Kuldhara Ghost Village & Deep Desert Camel Safari at Khuri Dunes (~50 km)",
        description: "Visit the eerie 18th-century abandoned ruins of Kuldhara village before your chauffeur drives you into the deep, tranquil sand dunes of Khuri, known for its pristine natural desert ambiance. Embark on an extended camel safari into the dunes to watch the desert sunset, followed by traditional folk music, fire dancers, and an authentic dinner at your luxury desert camp."
      },
      {
        day: 5,
        title: "Khuri Dunes to Jodhpur (The Blue City) (~310 km / 5 hrs)",
        description: "Wake to a peaceful desert sunrise over the dunes before enjoying breakfast at camp. Your chauffeur navigates smooth desert highways back toward Jodhpur. Arrive in the Blue City by afternoon, check into your hotel, and explore the bustling Sardar Market surrounding the historic Clock Tower."
      },
      {
        day: 6,
        title: "Jodhpur: Mehrangarh Fort & Airport Departure Transfer",
        description: "Ascend to the towering Mehrangarh Fort, exploring its museum palaces and admiring the sweeping view of thousands of blue Brahmin houses below. Visit the white marble cenotaph of Jaswant Thada before your chauffeur transfers you to Jodhpur Airport or Railway Station for your departure flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "What makes the Khuri Dunes different from the Sam Sand Dunes?",
        a: "Khuri Dunes offer a much quieter, more authentic, and less commercialized desert experience with pristine dunes, fewer vehicles, and intimate traditional village hospitality."
      },
      {
        q: "Are the camel rides safe for beginners?",
        a: "Yes. Every camel is led on foot by an experienced local handler at a gentle walking pace, with comfortable padded saddles provided."
      },
      {
        q: "Can we do a 4x4 Jeep safari instead of riding a camel?",
        a: "Yes, 4x4 open-top Jeep dune-bashing safaris are readily available for guests who prefer motorized desert transport."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
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
    overview: "Experience the thrilling biodiversity and royal wildlife sanctuaries of northern India on this specialized 8-day private chauffeur expedition through Wild Rajasthan. Connecting Delhi, the leopard-rich deciduous hills of Sariska, the world-renowned tiger reserve of Ranthambore, the UNESCO bird paradise of Keoladeo Ghana National Park in Bharatpur, and the iconic Taj Mahal in Agra, this itinerary brings together supreme wilderness encounters and monumental Mughal history. Guided by expert forest naturalists in open-top 4x4 safari vehicles and piloted between parks by your private English-speaking chauffeur, you track Royal Bengal Tigers, leopards, and migratory Siberian waterbirds in complete comfort and safety.",
    highlights: [
      "Specialized 8-day wildlife and heritage circuit covering 3 premier national parks and the Taj Mahal",
      "Multiple open-top 4x4 Jeep safaris inside Ranthambore National Park tracking wild Royal Bengal Tigers",
      "Jungle safari in Sariska Tiger Reserve amidst ancient Aravalli valleys and 10th-century temple ruins",
      "Cycle-rickshaw birdwatching safari inside the UNESCO World Heritage Keoladeo National Park in Bharatpur",
      "Sunrise excursion to the Taj Mahal in Agra with expedited entry and optimal photography angles",
      "Guided exploration of the massive red sandstone fortifications of Agra Fort",
      "Smooth highway navigation in an executive air-conditioned vehicle with dedicated private chauffeur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Drive to Sariska Tiger Reserve (~200 km / 4 hrs)",
        description: "Your private chauffeur welcomes you at Delhi International Airport or your Delhi hotel. Settle into your air-conditioned vehicle as we drive south toward Sariska Tiger Reserve in the Aravalli hills of Alwar. Check into your jungle wildlife resort and enjoy an evening nature walk around the lodge grounds."
      },
      {
        day: 2,
        title: "Sariska Jungle Safari & Drive to Ranthambore (~220 km / 4.5 hrs)",
        description: "Embark on an early morning 4x4 Jeep safari through Sariska's rugged valleys and scrub forest, tracking leopards, tigers, striped hyenas, and sambar deer amidst ancient ruined temples. Return for breakfast, then drive south through rural Rajasthan to Ranthambore National Park, checking into your wildlife lodge by late afternoon."
      },
      {
        day: 3,
        title: "Morning & Afternoon Jungle Safaris in Ranthambore",
        description: "A full day of thrilling wildlife tracking. Take an early morning open-top safari into Ranthambore's designated core zones with an expert forest naturalist. Return to the lodge for lunch and relaxation by the pool, followed by an afternoon safari for another opportunity to spot Royal Bengal Tigers, sloth bears, marsh crocodiles, and diverse birdlife."
      },
      {
        day: 4,
        title: "Morning Safari in Ranthambore & Ranthambore Fort Exploration",
        description: "Enjoy a morning jungle safari in a different park zone. In the afternoon, take a cultural excursion to the 10th-century UNESCO-inscribed Ranthambore Fort, perched high above the jungle canopy, offering sweeping panoramic views of the forest lakes and royal hunting ruins."
      },
      {
        day: 5,
        title: "Ranthambore to Bharatpur Bird Sanctuary via Abhaneri Stepwell (~210 km / 4.5 hrs)",
        description: "Drive toward Bharatpur, stopping en route to explore the ancient 1,000-year-old Chand Baori geometric stepwell in Abhaneri. Arrive in Bharatpur, check into your heritage resort, and take a tranquil afternoon cycle-rickshaw birdwatching tour inside Keoladeo National Park, observing hundreds of resident and migratory wetland birds."
      },
      {
        day: 6,
        title: "Morning Birdwatching Safari & Drive to Agra via Fatehpur Sikri (~60 km / 1.5 hrs)",
        description: "Enjoy a peaceful early morning birding safari in Keoladeo with an expert government naturalist. Depart for Agra, stopping en route to tour the imperial ghost city of Fatehpur Sikri, Emperor Akbar's abandoned sandstone capital. Arrive in Agra and spend sunset viewing the Taj Mahal from Mehtab Bagh gardens."
      },
      {
        day: 7,
        title: "Sunrise Taj Mahal, Agra Fort & Imperial Heritage",
        description: "Experience sunrise at the Taj Mahal as the white marble dome glows in golden dawn light. Return to your hotel for breakfast, followed by an in-depth tour of the colossal red sandstone Agra Fort, exploring the Jahangiri Mahal, Diwan-i-Am, and Diwan-i-Khas."
      },
      {
        day: 8,
        title: "Agra to Delhi via Yamuna Expressway & Airport Transfer (~230 km / 3.5 hrs)",
        description: "After a leisurely breakfast, cruise down the modern Yamuna Expressway back to New Delhi. Your chauffeur delivers you directly to Indira Gandhi International Airport for your departure flight home, concluding an unforgettable wildlife expedition."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "What is the best time of year for birdwatching in Bharatpur?",
        a: "Between November and February, when thousands of migratory waterfowl, pelicans, cranes, and storks arrive from Siberia and Central Asia."
      },
      {
        q: "Are the jungle safaris safe for children?",
        a: "Yes. Safaris are conducted in sturdy, department-approved vehicles accompanied by licensed forest guides who strictly enforce wildlife safety protocols."
      },
      {
        q: "How many total safaris are included in this tour?",
        a: "This itinerary includes 1 safari in Sariska, 3 separate safaris in Ranthambore, and 2 birdwatching safaris in Bharatpur."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
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
    overview: "Immerse yourself in the living traditions, indigenous crafts, and vibrant rural soul of northern India on this specialized 10-day private chauffeur Cultural Safari across Rajasthan. Connecting Delhi, the frescoed havelis of Mandawa, the desert citadel of Bikaner, golden Jaisalmer, the indigo quarter of Jodhpur, the eco-guardian Bishnoi villages of Rohet, and the royal artisan workshops of Jaipur, this itinerary goes far beyond tourist monuments. Meet master block-printers, cobalt blue pottery artisans, and nomadic musicians; witness sacred wildlife conservation in tribal desert hamlets; and stay in authentic heritage havelis with your dedicated English-speaking chauffeur.",
    highlights: [
      "Specialized 10-day cultural immersion focusing on living artisan traditions, folklore, and rural heritage",
      "Fresco-painted merchant havelis and stepwells of Mandawa and the Shekhawati open-air gallery",
      "Desert camel safari and overnight luxury tented camp experience among the Sam Sand Dunes in Jaisalmer",
      "Living medieval citadel of Jaisalmer Fort (Sonar Qila) with its ancient Jain temples",
      "Cultural Jeep safari into the eco-guardian Bishnoi tribal villages around Rohet and Jodhpur",
      "Towering cliff-top battlements of Mehrangarh Fort commanding Jodhpur's Blue City",
      "Artisan workshops in Jaipur: Sanganeri hand block-printing, miniature painting, and blue pottery"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of Historic New Delhi",
        description: "Meet your private chauffeur at Indira Gandhi International Airport. Enjoy a comfortable private transfer, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and driving past India Gate and Parliament House before resting at your hotel."
      },
      {
        day: 2,
        title: "Delhi to Mandawa (Shekhawati Open-Air Art Gallery) (~260 km / 5 hrs)",
        description: "Drive west into the semi-arid Shekhawati region. Check into a restored heritage haveli in Mandawa and spend the afternoon exploring the painted mansions of 18th-century Marwari merchants, adorned with colorful frescoes depicting mythological scenes and royal legends."
      },
      {
        day: 3,
        title: "Mandawa to Bikaner & Junagarh Fort Tour (~190 km / 3.5 hrs)",
        description: "Travel across desert scrubland to the desert trading citadel of Bikaner. Tour the unconquered Junagarh Fort, exploring its opulent mirror-inlaid palaces, gilded courtrooms, and royal armory. In the evening, visit the old bazaar famous for Bikaneri savory snacks."
      },
      {
        day: 4,
        title: "Bikaner to Jaisalmer: Deep Thar Desert Crossing (~330 km / 5.5 hrs)",
        description: "Embark on an expansive desert highway drive west toward Jaisalmer. Watch the landscape transform into golden sand plains as you approach the desert citadel. Arrive in Jaisalmer by late afternoon and check into your hotel."
      },
      {
        day: 5,
        title: "Jaisalmer Fort, Carved Havelis & Sam Sand Dunes Safari (~45 km)",
        description: "Explore the living medieval citadel of Jaisalmer Fort (Sonar Qila) with its ancient Jain temples. Visit the intricately carved Patwon Ki Haveli. In the afternoon, head into the Thar Desert to the Sam Sand Dunes for a sunset camel safari, folk dance performances, and an authentic dinner at your luxury desert camp."
      },
      {
        day: 6,
        title: "Jaisalmer to Jodhpur: The Blue City (~280 km / 4.5 hrs)",
        description: "Drive southeast across desert plains to Jodhpur, the historic capital of Marwar. Arrive and check into your hotel. In the late afternoon, explore the bustling Sardar Market surrounding the historic Clock Tower, filled with traditional textiles and spices."
      },
      {
        day: 7,
        title: "Jodhpur: Mehrangarh Fort & Bishnoi Village Cultural Safari (~40 km)",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the Blue City. In the afternoon, take a cultural Jeep safari into surrounding Bishnoi villages to observe traditional potters, weavers, and wildlife conservationists protecting wild blackbucks and deer."
      },
      {
        day: 8,
        title: "Jodhpur to Jaipur via Rural Craft Hamlets (~335 km / 5.5 hrs)",
        description: "Drive east along modern national highways to Jaipur, the Pink City. Arrive by afternoon, check into your hotel, and spend the late afternoon visiting the royal City Palace museum and the precision stone astronomical instruments of Jantar Mantar."
      },
      {
        day: 9,
        title: "Jaipur: Amber Fort, Hawa Mahal & Artisan Workshops",
        description: "A full day of royal Jaipur sightseeing. Ascend to the hilltop Amber Fort, exploring its mirror-inlaid Sheesh Mahal and royal courtyards. Stop at the water-surrounded Jal Mahal and photograph the honeycomb facade of Hawa Mahal. In the afternoon, discover traditional block-printing and blue pottery workshops."
      },
      {
        day: 10,
        title: "Jaipur to Delhi Highway Drive & Airport Transfer (~260 km / 4.5 hrs)",
        description: "After a relaxed breakfast, take the smooth expressway drive back to New Delhi. Arrive in Delhi by late afternoon, where your chauffeur provides seamless drop-off directly at Indira Gandhi International Airport for your departure flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "What is the Bishnoi village community known for?",
        a: "The Bishnois are considered the world's first environmentalists. For over 500 years, their spiritual principles have strictly mandated the protection of all trees and wildlife, particularly the endangered blackbuck antelope."
      },
      {
        q: "Can we interact directly with craftsmen and artists on this tour?",
        a: "Yes! This itinerary is designed to give you direct, respectful access to master block-printers, weavers, potters, and musicians in their authentic family workshops."
      },
      {
        q: "Can we add the Taj Mahal to this cultural itinerary?",
        a: "Yes, we can easily add a 1-day extension to Agra to include the Taj Mahal and Agra Fort before returning to Delhi."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
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
    overview: "Experience the dazzling hues, vibrant markets, and royal grandeur of India's most photogenic state on this 9-day private chauffeur tour through Colourful Rajasthan. Connecting Delhi, the Pink City of Jaipur, the sacred whitewashed oasis of Pushkar, the indigo Blue City of Jodhpur, and the romantic white marble palaces of lakeside Udaipur, this itinerary is a feast for the senses. Traveling comfortably in an air-conditioned private vehicle with your seasoned English-speaking chauffeur, you cross the scenic Aravalli hills, explore ancient hilltop fortresses, wander through kaleidoscopic textile bazaars, and take sunset boat cruises across shimmering waters.",
    highlights: [
      "The quintessential 9-day colourful circuit covering Jaipur, Pushkar, Jodhpur, and Udaipur",
      "The monumental hill ramparts of Amber Fort and the photogenic honeycomb facade of Hawa Mahal in Jaipur",
      "Sacred lake ghats and the world's rare Lord Brahma Temple in holy Pushkar",
      "Sheer cliff-top battlements of Mehrangarh Fort commanding sweeping vistas over Jodhpur's Blue City",
      "Private sunset boat cruise on Lake Pichola past Udaipur's floating white marble palaces",
      "Stopover at the world-renowned 15th-century carved marble Jain temples of Ranakpur",
      "Smooth four-lane highway cruising in an air-conditioned executive vehicle with dedicated private chauffeur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of New Delhi",
        description: "Meet your private chauffeur at Indira Gandhi International Airport. Enjoy a comfortable private transfer, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and driving past India Gate and Parliament House before resting at your hotel."
      },
      {
        day: 2,
        title: "Delhi to Jaipur: Highway Drive to the Pink City (~260 km / 4.5 hrs)",
        description: "After breakfast, your chauffeur navigates the smooth national expressway to Jaipur. Arrive by afternoon and check into your hotel. In the late afternoon, visit the royal City Palace museum and the precision stone astronomical instruments of Jantar Mantar, followed by an evening stroll through colorful bazaars."
      },
      {
        day: 3,
        title: "Jaipur: Amber Fort, Hawa Mahal & Hilltop Fortresses",
        description: "A full day of royal Jaipur sightseeing. Ascend to the hilltop Amber Fort, exploring its mirror-inlaid Sheesh Mahal and royal courtyards. Stop at the water-surrounded Jal Mahal and photograph the honeycomb facade of Hawa Mahal. Visit Jaigarh Fort to view the world's largest wheeled cannon."
      },
      {
        day: 4,
        title: "Jaipur to Sacred Pushkar via Ajmer Sharif Dargah (~145 km / 2.5 hrs)",
        description: "Depart Jaipur for the holy town of Pushkar, stopping en route in Ajmer to visit the revered Sufi shrine of Ajmer Sharif Dargah. Continue over the scenic mountain pass into the peaceful valley of Pushkar. Check into your resort and stroll along the 52 sacred lake ghats as evening temple bells ring."
      },
      {
        day: 5,
        title: "Pushkar Brahma Temple & Highway Drive to Jodhpur (~190 km / 3.5 hrs)",
        description: "Visit the sacred 14th-century Lord Brahma Temple and explore Pushkar's colorful bazaar lanes. Drive west across desert plains to Jodhpur, the Blue City. Arrive and check into your hotel. Spend the late afternoon exploring the bustling Sardar Market surrounding the historic Clock Tower."
      },
      {
        day: 6,
        title: "Jodhpur: Mehrangarh Fort, Jaswant Thada & Blue Quarter",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the city on a sheer cliff. Tour its museum palaces exhibiting royal palanquins and armory, and admire the iconic vista of the Blue City below. Visit the royal marble cenotaph of Jaswant Thada."
      },
      {
        day: 7,
        title: "Jodhpur to Udaipur via Ranakpur Marble Jain Temples (~260 km / 5 hrs)",
        description: "Drive south through the rugged granite valleys of the Aravalli hills toward Udaipur. Stop at Ranakpur to tour the breathtaking 15th-century Chaumukha Jain Temple with its 1,444 uniquely hand-carved marble pillars. Continue to Udaipur, the 'City of Lakes', checking into your lakeside hotel by evening."
      },
      {
        day: 8,
        title: "Udaipur: City Palace, Saheliyon Ki Bari & Sunset Lake Pichola Boat Cruise",
        description: "Spend a full day exploring romantic Udaipur. Tour the sprawling City Palace complex overlooking Lake Pichola, marveling at its mosaic courtyards and peacock balconies. Visit Saheliyon Ki Bari gardens and conclude with an exclusive private sunset boat cruise on Lake Pichola past the floating Lake Palace."
      },
      {
        day: 9,
        title: "Udaipur Airport Transfer for Departure Flight",
        description: "After a leisurely lakeside breakfast, your chauffeur provides an effortless transfer to Udaipur's Maharana Pratap Airport (UDR) for your onward flight to Delhi, Mumbai, or your international connection, concluding a colorful royal odyssey."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Can this tour end with a flight out of Udaipur?",
        a: "Yes! Ending in Udaipur is the most convenient option, saving a long return road journey to Delhi. Udaipur Airport offers multiple daily flights to Delhi and Mumbai."
      },
      {
        q: "What colors represent the cities on this tour?",
        a: "Jaipur is the 'Pink City' (terracotta pink), Jodhpur is the 'Blue City' (indigo blue), Udaipur is the 'White City' (white marble palaces), and Pushkar is renowned for vibrant rainbow desert turbans and roses."
      },
      {
        q: "Can we add the Taj Mahal to this tour?",
        a: "Yes, we can easily add a 1-night stop in Agra at the start of the tour before proceeding to Jaipur."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
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
    overview: "Immerse yourself in the heroic chivalry, impregnable fortress bastions, and romantic lakeside beauty of southern Rajasthan on this 5-day private chauffeur tour through the Historic Mewar Circuit. Covering Udaipur, the colossal UNESCO-inscribed wall of Kumbhalgarh Fort, the exquisite marble filigree of Ranakpur, and the mammoth citadel of Chittorgarh, this overland itinerary celebrates the proudest kingdom in Rajput history. Traveling in executive air-conditioned comfort with a seasoned local chauffeur, you explore the second-longest continuous defensive wall in the world, marvel at 1,444 hand-carved marble pillars, and cruise across tranquil lake waters at sunset.",
    highlights: [
      "Specialized 5-day historical expedition covering the legendary Mewar kingdom fortresses and temples",
      "Tour of the sprawling Udaipur City Palace complex and private sunset boat cruise on Lake Pichola",
      "Ascent to Kumbhalgarh Fort, featuring the world's second-longest continuous wall (36 km) after the Great Wall of China",
      "World-renowned 15th-century Chaumukha Jain Temple at Ranakpur with 1,444 uniquely carved marble pillars",
      "Guided exploration of Chittorgarh Fort, the historic seat of Mewar valor with the iconic Victory Tower",
      "Scenic mountain pass driving through the granite ridges of the Aravalli hills in an executive vehicle",
      "Personalized English-speaking chauffeur with deep historical expertise and luggage care throughout"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Udaipur & Sunset Lake Pichola Boat Cruise",
        description: "Your private chauffeur welcomes you upon arrival at Udaipur's Maharana Pratap Airport (UDR) or Railway Station. Transfer to your lakeside hotel. In the late afternoon, enjoy an introductory private boat cruise on Lake Pichola, sailing past the floating Lake Palace, Jag Mandir island, and the illuminated City Palace as dusk falls over the water."
      },
      {
        day: 2,
        title: "Udaipur City Palace, Jagdish Temple & Saheliyon Ki Bari",
        description: "Dedicate a full day to exploring Udaipur. Tour the sprawling City Palace complex overlooking Lake Pichola, marveling at its mosaic courtyards, mirror chambers, and royal crystal gallery. Visit the 17th-century Jagdish Temple and the serene royal fountain gardens of Saheliyon Ki Bari before an evening at leisure."
      },
      {
        day: 3,
        title: "Udaipur to Kumbhalgarh Fort & Ranakpur Jain Temples (~180 km / 4.5 hrs)",
        description: "Drive through the rugged Aravalli hills to the formidable Kumbhalgarh Fort, birthplace of legendary warrior Maharana Pratap. Walk along its monumental 36-kilometer defensive wall and tour Badal Mahal (Palace of Clouds). Continue downhill to Ranakpur to marvel at the 15th-century Chaumukha Temple with its 1,444 uniquely carved marble pillars. Return to Udaipur by evening."
      },
      {
        day: 4,
        title: "Day Excursion to the Mammoth Chittorgarh Fort (~115 km each way / 2.5 hrs)",
        description: "Embark on a day trip to Chittorgarh Fort, the largest fort complex in India and a UNESCO World Heritage Site. Explore the towering 9-story Victory Tower (Vijay Stambh), the Fame Tower (Kirti Stambh), Queen Padmini's historic water palace, and the ancient Meera Bai temple. Return to Udaipur in the late afternoon for a farewell dinner."
      },
      {
        day: 5,
        title: "Udaipur Local Artisans & Airport Departure Transfer",
        description: "Enjoy a relaxed breakfast overlooking the lake. Spend the morning discovering Udaipur's miniature painting studios and silver craft shops with your chauffeur at your service. In the afternoon, your chauffeur transfers you smoothly to Udaipur Airport for your departure flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "What is the historical significance of the Mewar region?",
        a: "Mewar was the only Rajput kingdom that fiercely resisted Mughal subjugation for centuries, personified by legendary warriors like Maharana Pratap and heroic historical sieges at Chittorgarh and Kumbhalgarh."
      },
      {
        q: "Can Kumbhalgarh and Ranakpur be visited in a single day?",
        a: "Yes. They are located close to each other in the Aravalli hills, approximately 2 hours north of Udaipur, making a combined day trip very convenient and scenic."
      },
      {
        q: "Is walking through Chittorgarh Fort strenuous?",
        a: "Chittorgarh is a massive plateau spanning 700 acres, but our private vehicle drives you directly between each monument inside the fort complex, minimizing strenuous walking."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
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
    overview: "Experience the ultimate 6-day wildlife safari expedition across the premier national parks of northern India. Connecting Delhi, the rugged hills of Sariska Tiger Reserve, the world-famous Royal Bengal Tiger territory of Ranthambore, and the UNESCO-inscribed avian paradise of Keoladeo Ghana National Park in Bharatpur, this tour is designed for wildlife enthusiasts, photographers, and nature lovers. Piloted between reserves by your private English-speaking chauffeur in an air-conditioned executive vehicle and escorted inside the parks by expert government-certified naturalists, you enjoy multiple open-top 4x4 Jeep safaris through dense teak forests, rocky gorges, and ancient lake ruins with maximum chances of premier predator sightings.",
    highlights: [
      "Comprehensive 6-day wildlife expedition covering Sariska, Ranthambore, and Bharatpur bird sanctuary",
      "Multiple open-top 4x4 Jeep safaris inside Ranthambore National Park tracking wild Royal Bengal Tigers",
      "Jungle safari in Sariska Tiger Reserve amidst ancient Aravalli valleys and medieval fortress ruins",
      "Guided cycle-rickshaw birdwatching safari inside Keoladeo National Park observing thousands of wetland species",
      "High probability of photographing tigers, leopards, sloth bears, marsh crocodiles, and rare migratory birds",
      "Comfortable stays in selected eco-luxury jungle wildlife lodges with pool and multi-cuisine dining",
      "Private air-conditioned highway transfers between reserves with dedicated chauffeur and luggage assistance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Scenic Drive to Sariska Tiger Reserve (~200 km / 4 hrs)",
        description: "Your private chauffeur welcomes you at Delhi International Airport or your Delhi hotel. Settle into your air-conditioned vehicle as we drive south toward Sariska Tiger Reserve in the Aravalli hills of Alwar. Check into your jungle wildlife resort and enjoy an evening nature walk around the lodge grounds."
      },
      {
        day: 2,
        title: "Sariska Jungle Safari & Drive to Ranthambore (~220 km / 4.5 hrs)",
        description: "Embark on an early morning 4x4 Jeep safari through Sariska's rugged valleys and scrub forest, tracking leopards, tigers, striped hyenas, and sambar deer amidst ancient ruined temples. Return for breakfast, then drive south through rural Rajasthan to Ranthambore National Park, checking into your wildlife lodge by late afternoon."
      },
      {
        day: 3,
        title: "Morning & Afternoon Jungle Safaris in Ranthambore National Park",
        description: "A full day of thrilling wildlife tracking. Take an early morning open-top safari into Ranthambore's designated core zones with an expert forest naturalist. Return to the lodge for lunch and relaxation by the pool, followed by an afternoon safari for another opportunity to spot Royal Bengal Tigers, sloth bears, marsh crocodiles, and diverse birdlife."
      },
      {
        day: 4,
        title: "Morning Safari in Ranthambore & Highway Drive to Bharatpur (~210 km / 4.5 hrs)",
        description: "Enjoy a morning jungle safari in a different park zone. Return to the lodge for breakfast and check out. Drive northeast toward Bharatpur, home to the UNESCO World Heritage Keoladeo National Park. Arrive in the late afternoon, check into your heritage resort, and enjoy a peaceful evening stroll."
      },
      {
        day: 5,
        title: "Morning & Afternoon Birdwatching Safaris in Keoladeo National Park",
        description: "Spend a full day exploring one of the world's most celebrated wetland bird sanctuaries. Guided by an expert naturalist aboard a quiet cycle-rickshaw, spot painted storks, spoonbills, sarus cranes, pelicans, and wintering migratory waterfowl from Siberia and Central Asia."
      },
      {
        day: 6,
        title: "Bharatpur to Delhi Return Highway Drive & Airport Transfer (~220 km / 4 hrs)",
        description: "After breakfast, your chauffeur navigates the smooth national expressway back to New Delhi. Arrive in Delhi in the afternoon, where your chauffeur provides seamless drop-off directly at Indira Gandhi International Airport for your departure flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "How many total wildlife safaris are included?",
        a: "This tour includes 1 safari in Sariska, 3 separate safaris in Ranthambore, and 2 birdwatching safaris in Bharatpur."
      },
      {
        q: "Are the jungle safaris conducted in private 4x4 Jeeps?",
        a: "Yes, when booked in advance, we prioritize private 6-seater 4x4 open-top Gypsys accompanied by a forest department driver and naturalist guide."
      },
      {
        q: "What is the best season for wildlife tracking on this circuit?",
        a: "Between October and May is the optimal wildlife viewing season, with February to April offering the highest tiger sightings around drying waterholes."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
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
    overview: "Experience the golden age of Maharajas on this private luxury 8-day overland circuit following the celebrated itinerary of the world-famous Palace on Wheels. Combining the imperial majesty of Delhi, the Pink City of Jaipur, the tiger wilderness of Ranthambore, the monumental fortresses of Chittorgarh, the romantic lakes of Udaipur, the desert dunes of Jaisalmer, the blue quarter of Jodhpur, and the sunrise Taj Mahal in Agra, this private chauffeur tour gives you the exact royal itinerary with total schedule independence, private stops, and bespoke luxury accommodations.",
    highlights: [
      "The iconic 8-day royal route inspired by India's most celebrated heritage luxury train",
      "Comprehensive circuit connecting Delhi, Jaipur, Ranthambore, Chittorgarh, Udaipur, Jaisalmer, Jodhpur, and Agra",
      "Sunrise excursion to the Taj Mahal with pre-arranged tickets and optimal photography angles",
      "Open-top 4x4 Jeep tiger safari in Ranthambore National Park",
      "Private sunset boat cruise on Lake Pichola past Udaipur's floating Lake Palace",
      "Camel safari across the golden sand dunes of Jaisalmer with luxury tented camp experience",
      "Dedicated private chauffeur in an executive air-conditioned vehicle with total travel flexibility"
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Delhi & Highway Drive to Jaipur (~260 km / 4.5 hrs)",
        description: "Meet your private chauffeur in Delhi. Cruise along the expressway to Jaipur, the Pink City. Check into your heritage hotel and spend the late afternoon visiting the royal City Palace museum and Jantar Mantar astronomical observatory."
      },
      {
        day: 2,
        title: "Jaipur: Amber Fort & Drive to Ranthambore Tiger Reserve (~160 km / 3.5 hrs)",
        description: "Ascend to the hilltop Amber Fort, marveling at the mirror-inlaid Sheesh Mahal. Photograph Hawa Mahal, then drive southeast to Ranthambore National Park, checking into your wildlife jungle lodge by evening."
      },
      {
        day: 3,
        title: "Ranthambore Morning Safari & Drive to Chittorgarh (~280 km / 5 hrs)",
        description: "Embark on an early morning 4x4 Jeep tiger safari in Ranthambore. Return for breakfast, then drive to Chittorgarh to explore the colossal UNESCO-inscribed fort complex with its famous Victory Tower. Check into your hotel."
      },
      {
        day: 4,
        title: "Chittorgarh to Udaipur & Sunset Lake Pichola Boat Cruise (~115 km / 2 hrs)",
        description: "Take a short drive to romantic Udaipur. Check into your lakeside hotel and tour the sprawling City Palace complex. In the late afternoon, enjoy a private sunset boat cruise past the floating Lake Palace."
      },
      {
        day: 5,
        title: "Udaipur to Jaisalmer: Desert Highway Crossing (~500 km / 8 hrs)",
        description: "Embark on an expansive scenic desert drive across western Rajasthan toward the Golden City of Jaisalmer. Arrive by late afternoon as the setting sun illuminates the sandstone citadel. Check into your hotel."
      },
      {
        day: 6,
        title: "Jaisalmer Fort, Carved Havelis & Sam Sand Dunes Safari (~45 km)",
        description: "Explore Jaisalmer Fort (Sonar Qila) with its ancient Jain temples. Tour Patwon Ki Haveli. In the afternoon, head into the Thar Desert for a sunset camel ride over the golden Sam Sand Dunes with folk dance and dinner."
      },
      {
        day: 7,
        title: "Jaisalmer to Jodhpur (The Blue City) (~280 km / 4.5 hrs)",
        description: "Drive southeast across desert plains to Jodhpur. Ascend to Mehrangarh Fort, towering 400 feet above the Blue City. Visit the white marble cenotaph of Jaswant Thada and browse the vibrant Clock Tower bazaar."
      },
      {
        day: 8,
        title: "Jodhpur to Agra & Sunrise Taj Mahal / Delhi Transfer (~580 km / or flight)",
        description: "Conclude the royal circuit with a visit to the Taj Mahal in Agra (accessible via highway transit or express train connection) before smooth airport drop-off in New Delhi for your departure flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "How does this private chauffeur tour compare to the actual Palace on Wheels train?",
        a: "Our private chauffeur tour follows the exact royal route but gives you complete daily schedule freedom, private vehicle comfort, and handpicked luxury heritage hotels at a fraction of the train fare."
      },
      {
        q: "Can the long drive between Udaipur and Jaisalmer be broken up?",
        a: "Yes. We can add an overnight stop in Jodhpur between Udaipur and Jaisalmer to make the driving pacing completely relaxed."
      },
      {
        q: "What vehicle is provided for this extensive route?",
        a: "We provide an executive Toyota Innova Crysta MPV, ensuring supreme highway suspension, individual captain seats, and dual-zone air-conditioning."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
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
    overview: "Witness one of the most vibrant, visually spectacular cultural gatherings on Earth on this specialized 7-day private chauffeur tour designed for the world-famous Pushkar Camel Fair. Coinciding with the auspicious Kartik Purnima full moon, thousands of pastoral camel herders, horse traders, desert nomads, and Hindu pilgrims converge on the sacred desert dunes of Pushkar. In addition to full access to the festival grounds, this overland tour encompasses the complete Golden Triangle, taking you through imperial Old Delhi, the sunrise Taj Mahal in Agra, and the pink hilltop palaces of Jaipur, piloted throughout by your private English-speaking chauffeur in an air-conditioned vehicle.",
    highlights: [
      "Exclusive festival expedition to the world-famous annual Pushkar Camel Fair on the sacred Thar Desert fringe",
      "Front-row access to camel trading, decorated livestock beauty contests, turban-tying competitions, and folk music",
      "Sacred full moon evening dip and lamp-floating rituals along the 52 holy lake bathing ghats of Pushkar",
      "Darshan at the revered 14th-century Lord Brahma Temple, one of the world's few temples dedicated to the Creator",
      "Sunrise excursion to the Taj Mahal in Agra with expedited entry and optimal photography angles",
      "Ascent to the fortified hilltop ramparts of Amber Fort and the photogenic facade of Hawa Mahal in Jaipur",
      "Executive air-conditioned private vehicle at disposal throughout with seasoned private chauffeur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of New Delhi",
        description: "Meet your private chauffeur at Indira Gandhi International Airport. Enjoy a comfortable private transfer, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and driving past India Gate and Parliament House before resting at your hotel."
      },
      {
        day: 2,
        title: "Old Delhi Heritage Tour & Drive to Agra via Yamuna Expressway (~230 km / 3.5 hrs)",
        description: "Explore Old Delhi's historic core: visit Jama Masjid, take a cycle-rickshaw through Chandni Chowk spice bazaar, and pause at Raj Ghat. After lunch, cruise down the Yamuna Expressway to Agra. Check into your hotel and enjoy sunset views of the Taj Mahal from Mehtab Bagh."
      },
      {
        day: 3,
        title: "Sunrise Taj Mahal, Agra Fort & Drive to Jaipur via Fatehpur Sikri (~240 km / 4.5 hrs)",
        description: "Witness the sunrise over the Taj Mahal as the ivory-white marble glows in dawn light. Tour Agra Fort, then drive to Jaipur, stopping en route at the imperial ghost city of Fatehpur Sikri and the geometric Chand Baori stepwell. Arrive in the Pink City by evening."
      },
      {
        day: 4,
        title: "Jaipur: Amber Fort, Hawa Mahal & Drive to Pushkar (~145 km / 2.5 hrs)",
        description: "Ascend to the hilltop Amber Fort, marveling at the mirror-inlaid Sheesh Mahal. Photograph Hawa Mahal, then drive west along the smooth national highway to Pushkar. Arrive as the desert festival comes alive with campfires and music. Check into your heritage camp or resort."
      },
      {
        day: 5,
        title: "Full Day at the Pushkar Camel Fair: Livestock Grounds & Cultural Competitions",
        description: "Spend an extraordinary full day at the fairgrounds. Observe pastoral traders bartering thousands of decorated camels and horses. Enjoy colorful turban-tying contests, mustache competitions, and folk dance performances. In the evening, watch illuminated brass lamps float upon the sacred lake."
      },
      {
        day: 6,
        title: "Pushkar Brahma Temple, Desert Rose Bazaars & Return to Jaipur (~145 km / 2.5 hrs)",
        description: "Visit the revered 14th-century Lord Brahma Temple and wander through the vibrant market lanes filled with desert textiles and silver jewelry. In the afternoon, your chauffeur navigates back to Jaipur for an evening of relaxation or fine dining."
      },
      {
        day: 7,
        title: "Jaipur to Delhi Highway Drive & Airport Transfer (~260 km / 4.5 hrs)",
        description: "After breakfast, enjoy a comfortable expressway drive back to New Delhi. Arrive in the afternoon, where your chauffeur provides seamless drop-off directly at Indira Gandhi International Airport for your departure flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "When is the Pushkar Fair held each year?",
        a: "The Pushkar Fair dates are determined by the Hindu lunar calendar, typically falling in late October or November around the full moon (Kartik Purnima)."
      },
      {
        q: "Is photography permitted at the fairgrounds?",
        a: "Yes! The Pushkar Fair is one of the world's premier photography events. Traders, dancers, and pilgrims are generally welcoming of respectful photography."
      },
      {
        q: "Do we need to book this tour far in advance?",
        a: "Yes, absolutely. Because the fair attracts thousands of global visitors, luxury tented camps and heritage hotels in Pushkar sell out several months in advance."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
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
    overview: "The Grand 20-Day Northern India & Rajasthan Master Odyssey is our ultimate overland expedition, weaving together every royal citadel, desert outpost, tiger jungle, and sacred river ghat from the Great Thar Desert to the sacred Ganges in Varanasi. Piloted by a master English-speaking chauffeur in an executive air-conditioned vehicle, this 3-week journey links Delhi, the painted havelis of Shekhawati, Bikaner, Jaisalmer dunes, the Blue City of Jodhpur, Mount Abu hill station, romantic Udaipur, the medieval bastions of Bundi, Ranthambore tiger reserve, Jaipur, the Taj Mahal in Agra, Gwalior Fort, the medieval river palaces of Orchha, the UNESCO erotic stone temples of Khajuraho, and sacred Varanasi. Designed for travelers who demand the complete, unhurried, authoritative immersion into Indian civilization.",
    highlights: [
      "The definitive 20-day master overland odyssey across Rajasthan, Madhya Pradesh, and the holy Ganges",
      "12 UNESCO World Heritage Sites including the Taj Mahal, Khajuraho, Agra Fort, Fatehpur Sikri, and hill fortresses",
      "Deep desert camel caravan and luxury tented camp experience among the Sam Sand Dunes in Jaisalmer",
      "Two open-top 4x4 Jeep safaris inside Ranthambore National Park tracking wild Royal Bengal Tigers",
      "Private sunset boat cruise on Lake Pichola in Udaipur and dawn rowing boat on the sacred Ganges in Varanasi",
      "Exquisite 10th-century stone temple carvings of Khajuraho and the medieval river palaces of Orchha",
      "The towering clifftop fortresses of Mehrangarh, Junagarh, Amber, Chittorgarh, and Gwalior",
      "Dedicated private chauffeur throughout with total flexibility, luggage handling, and 24/7 concierge monitoring"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of New Delhi",
        description: "Meet your private chauffeur at Indira Gandhi International Airport. Enjoy a comfortable private transfer, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and driving past India Gate and Parliament House before resting at your hotel."
      },
      {
        day: 2,
        title: "Delhi to Mandawa (Shekhawati Open-Air Art Gallery) (~260 km / 5 hrs)",
        description: "Drive west into the semi-arid Shekhawati region. Check into a restored heritage haveli in Mandawa and spend the afternoon exploring the painted mansions of 18th-century Marwari merchants, adorned with colorful frescoes depicting mythological scenes and royal legends."
      },
      {
        day: 3,
        title: "Mandawa to Bikaner & Junagarh Fort Tour (~190 km / 3.5 hrs)",
        description: "Travel across desert scrubland to the desert trading citadel of Bikaner. Tour the unconquered Junagarh Fort, exploring its opulent mirror-inlaid palaces, gilded courtrooms, and royal armory. In the evening, visit the old bazaar famous for Bikaneri savory snacks."
      },
      {
        day: 4,
        title: "Bikaner to Jaisalmer: Deep Thar Desert Crossing (~330 km / 5.5 hrs)",
        description: "Embark on an expansive desert highway drive west toward Jaisalmer. Watch the landscape transform into golden sand plains as you approach the desert citadel. Arrive in Jaisalmer by late afternoon and check into your hotel."
      },
      {
        day: 5,
        title: "Jaisalmer Fort, Carved Havelis & Sam Sand Dunes Safari (~45 km)",
        description: "Explore the living medieval citadel of Jaisalmer Fort (Sonar Qila) with its ancient Jain temples. Visit the intricately carved Patwon Ki Haveli. In the afternoon, head into the Thar Desert to the Sam Sand Dunes for a sunset camel safari, folk dance performances, and an authentic dinner at your luxury desert camp."
      },
      {
        day: 6,
        title: "Jaisalmer to Jodhpur: The Blue City (~280 km / 4.5 hrs)",
        description: "Drive southeast across desert plains to Jodhpur, the historic capital of Marwar. Arrive and check into your hotel. In the late afternoon, explore the bustling Sardar Market surrounding the historic Clock Tower, filled with traditional textiles and spices."
      },
      {
        day: 7,
        title: "Jodhpur: Mehrangarh Fort & Jaswant Thada Cenotaph",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the city on a sheer perpendicular rock cliff. Tour its museum palaces exhibiting royal palanquins and armory, and admire the iconic vista of the Blue City below. Visit the royal marble cenotaph of Jaswant Thada."
      },
      {
        day: 8,
        title: "Jodhpur to Mount Abu Hill Station (~260 km / 5 hrs)",
        description: "Leave the desert plains behind as your chauffeur climbs the winding scenic passes of the Aravalli Range into Mount Abu. Check into your hotel and enjoy a tranquil evening boat ride on Nakki Lake, followed by sunset views from Sunset Point."
      },
      {
        day: 9,
        title: "Dilwara Temples & Drive to Udaipur via Ranakpur (~185 km / 4 hrs)",
        description: "Marvel at the world-renowned 11th-century Dilwara Jain Temples, celebrated for their gossamer marble filigree carvings. Drive downhill toward Udaipur, stopping at Ranakpur to tour the Chaumukha Temple with its 1,444 uniquely carved pillars. Arrive in lakeside Udaipur by evening."
      },
      {
        day: 10,
        title: "Udaipur: City Palace, Jagdish Temple & Lake Pichola Boat Cruise",
        description: "A full day exploring romantic Udaipur. Tour the sprawling City Palace complex overlooking Lake Pichola, visit the 17th-century Jagdish Temple, and stroll through the royal fountain gardens of Saheliyon Ki Bari. Enjoy a private sunset boat cruise past the floating Lake Palace."
      },
      {
        day: 11,
        title: "Udaipur to Historic Bundi via Chittorgarh Fort (~260 km / 5 hrs)",
        description: "Drive to the charming, untouristed town of Bundi, stopping en route to explore the colossal Chittorgarh Fort. Arrive in Bundi, famous for its blue houses, ancient stepwells (baoris), and the atmospheric Taragarh Fort adorned with pristine Bundi-school miniature murals."
      },
      {
        day: 12,
        title: "Bundi to Ranthambore Tiger Reserve (~150 km / 3 hrs)",
        description: "Drive north to Ranthambore National Park. Check into your wildlife jungle lodge and embark on an afternoon open-top 4x4 Jeep safari tracking wild Royal Bengal Tigers, leopards, and spotted deer through ancient forest ruins."
      },
      {
        day: 13,
        title: "Morning Safari & Drive to Jaipur: The Pink City (~160 km / 3.5 hrs)",
        description: "Enjoy a morning jungle safari in Ranthambore for another opportunity to spot apex predators. Drive to Jaipur, arriving by afternoon. Visit the royal City Palace museum and Jantar Mantar astronomical observatory."
      },
      {
        day: 14,
        title: "Jaipur: Amber Fort, Hawa Mahal & Artisan Bazaars",
        description: "A full day of royal Jaipur sightseeing. Ascend to the hilltop Amber Fort, exploring its mirror-inlaid Sheesh Mahal and royal courtyards. Stop at the water-surrounded Jal Mahal and photograph the honeycomb facade of Hawa Mahal. In the afternoon, discover traditional block-printing and blue pottery workshops."
      },
      {
        day: 15,
        title: "Jaipur to Agra via Fatehpur Sikri & Sunset Taj View (~240 km / 4 hrs)",
        description: "Drive east toward Agra, stopping en route to explore the imperial ghost city of Fatehpur Sikri. Arrive in Agra, check into your hotel, and spend the late afternoon at Mehtab Bagh gardens enjoying sunset views of the Taj Mahal across the river."
      },
      {
        day: 16,
        title: "Sunrise Taj Mahal, Agra Fort & Drive to Gwalior (~120 km / 2.5 hrs)",
        description: "Witness sunrise over the Taj Mahal as the white marble dome glows in golden light. Tour Agra Fort, then drive south to Gwalior in Madhya Pradesh. Visit the towering clifftop Gwalior Fort and the opulent Jai Vilas Palace."
      },
      {
        day: 17,
        title: "Gwalior to Medieval Orchha & Khajuraho (~280 km / 5.5 hrs)",
        description: "Drive to the tranquil medieval riverside town of Orchha on the Betwa River. Explore the 16th-century Jahangir Mahal, Raj Mahal, and royal chhatris cenotaphs. Continue to Khajuraho and check into your hotel."
      },
      {
        day: 18,
        title: "Khajuraho UNESCO Temples & Express Transit to Varanasi",
        description: "Spend the morning marveling at the world-renowned UNESCO World Heritage Western and Eastern Group of Temples in Khajuraho, celebrated for their exquisite medieval stone carvings. In the afternoon, board an express transit or short flight to sacred Varanasi."
      },
      {
        day: 19,
        title: "Varanasi: Sunrise Ganges Boat Cruise & Evening Ganga Aarti",
        description: "Rise before dawn for a mystical rowing boat journey along the sacred Ganges, watching morning bathing rituals and temple prayers. Visit Sarnath where Buddha first preached. At dusk, take your reserved private boat seat for the mesmerizing evening Ganga Aarti."
      },
      {
        day: 20,
        title: "Varanasi to Delhi Flight & International Airport Transfer",
        description: "After breakfast, transfer to Varanasi Airport for your flight back to Delhi. Your Delhi chauffeur meets you on arrival and coordinates any final shopping or dining before delivering you to Indira Gandhi International Airport for your flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Is this 20-day tour the most comprehensive itinerary available?",
        a: "Yes. It combines all premier historic kingdoms of Rajasthan with the monumental wonders of Madhya Pradesh (Gwalior, Orchha, Khajuraho) and the ultimate spiritual climax in Varanasi."
      },
      {
        q: "How is travel pacing managed across 20 days?",
        a: "The itinerary is designed with comfortable 2-night stays in Jaisalmer, Jodhpur, Udaipur, Jaipur, and Varanasi, ensuring you never feel rushed and have ample time to relax."
      },
      {
        q: "What vehicle is provided for this 3-week expedition?",
        a: "We provide an executive Toyota Innova Crysta MPV, ensuring supreme highway suspension, individual captain seats, and dual-zone air-conditioning."
      },
      {
        q: "Are all toll taxes, interstate permits, and driver allowances included?",
        a: "Yes, 100%. All highway toll plazas, multi-state border permits (Delhi, Rajasthan, UP, MP), parking fees, fuel, and driver allowances are fully covered."
      }
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
    overview: "The Classic 15-Day Rajasthan Royal Heritage Tour is northern India's definitive fortnight overland expedition. Designed for travelers seeking an in-depth, leisurely immersion into the land of Maharajas, this private chauffeur circuit covers Delhi, the painted havelis of Mandawa, the desert citadel of Bikaner, golden Jaisalmer, the indigo Blue City of Jodhpur, romantic lakeside Udaipur, the sacred lake of Pushkar, the pink palaces of Jaipur, and the timeless Taj Mahal in Agra. With your dedicated English-speaking chauffeur managing all driving and logistics in an executive air-conditioned vehicle, you enjoy total flexibility to explore ancient hill forts, sleep in desert camps, and savor authentic royal hospitality.",
    highlights: [
      "Comprehensive 15-day royal circuit covering all major desert and heritage kingdoms of Rajasthan",
      "Fresco-painted merchant havelis and stepwells of Mandawa and the Shekhawati open-air gallery",
      "Camel safari and overnight luxury tented camp experience among the Sam Sand Dunes in Jaisalmer",
      "Living medieval citadel of Jaisalmer Fort (Sonar Qila) with its ancient Jain temples",
      "Towering cliff-top battlements of Mehrangarh Fort commanding Jodhpur's Blue City",
      "Private sunset boat cruise on Lake Pichola past Udaipur's floating white marble palaces",
      "The monumental hill ramparts of Amber Fort and the photogenic facade of Hawa Mahal in Jaipur",
      "Sunrise excursion to the Taj Mahal and guided tour of the massive red sandstone Agra Fort"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of Historic New Delhi",
        description: "Meet your private chauffeur at Indira Gandhi International Airport. Enjoy a comfortable private transfer, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and driving past India Gate and Parliament House before resting at your hotel."
      },
      {
        day: 2,
        title: "Delhi to Mandawa (Shekhawati Open-Air Art Gallery) (~260 km / 5 hrs)",
        description: "Drive west into the semi-arid Shekhawati region. Check into a restored heritage haveli in Mandawa and spend the afternoon exploring the painted mansions of 18th-century Marwari merchants, adorned with colorful frescoes depicting mythological scenes and royal legends."
      },
      {
        day: 3,
        title: "Mandawa to Bikaner & Junagarh Fort Tour (~190 km / 3.5 hrs)",
        description: "Travel across desert scrubland to the desert trading citadel of Bikaner. Tour the unconquered Junagarh Fort, exploring its opulent mirror-inlaid palaces, gilded courtrooms, and royal armory. In the evening, visit the old bazaar famous for Bikaneri savory snacks."
      },
      {
        day: 4,
        title: "Bikaner to Jaisalmer: Deep Thar Desert Crossing (~330 km / 5.5 hrs)",
        description: "Embark on an expansive desert highway drive west toward Jaisalmer. Watch the landscape transform into golden sand plains as you approach the desert citadel. Arrive in Jaisalmer by late afternoon and check into your hotel."
      },
      {
        day: 5,
        title: "Jaisalmer Fort, Carved Havelis & Sam Sand Dunes Safari (~45 km)",
        description: "Explore the living medieval citadel of Jaisalmer Fort (Sonar Qila) with its ancient Jain temples. Visit the intricately carved Patwon Ki Haveli. In the afternoon, head into the Thar Desert to the Sam Sand Dunes for a sunset camel safari, folk dance performances, and an authentic dinner at your luxury desert camp."
      },
      {
        day: 6,
        title: "Jaisalmer to Jodhpur: The Blue City (~280 km / 4.5 hrs)",
        description: "Drive southeast across desert plains to Jodhpur, the historic capital of Marwar. Arrive and check into your hotel. In the late afternoon, explore the bustling Sardar Market surrounding the historic Clock Tower, filled with traditional textiles and spices."
      },
      {
        day: 7,
        title: "Jodhpur: Mehrangarh Fort & Jaswant Thada Cenotaph",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the city on a sheer perpendicular rock cliff. Tour its museum palaces exhibiting royal palanquins and armory, and admire the iconic vista of the Blue City below. Visit the royal marble cenotaph of Jaswant Thada."
      },
      {
        day: 8,
        title: "Jodhpur to Udaipur via Ranakpur Marble Jain Temples (~260 km / 5 hrs)",
        description: "Drive south through the rugged granite valleys of the Aravalli hills toward Udaipur. Stop at Ranakpur to tour the breathtaking 15th-century Chaumukha Jain Temple with its 1,444 uniquely hand-carved marble pillars. Continue to Udaipur, the 'City of Lakes', checking into your lakeside hotel by evening."
      },
      {
        day: 9,
        title: "Udaipur: City Palace, Saheliyon Ki Bari & Sunset Lake Pichola Boat Cruise",
        description: "Spend a full day exploring romantic Udaipur. Tour the sprawling City Palace complex overlooking Lake Pichola, marveling at its mosaic courtyards and peacock balconies. Visit Saheliyon Ki Bari gardens and conclude with an exclusive private sunset boat cruise on Lake Pichola past the floating Lake Palace."
      },
      {
        day: 10,
        title: "Udaipur: Monsoon Palace & Local Cultural Discovery",
        description: "Enjoy a relaxed morning at your hotel. In the afternoon, visit the hilltop Sajjan Garh (Monsoon Palace) offering panoramic views across the lakes and hills. Visit local miniature painting studios and silver jewelry workshops with your chauffeur on standby."
      },
      {
        day: 11,
        title: "Udaipur to Sacred Pushkar via Chittorgarh Fort (~280 km / 5.5 hrs)",
        description: "Drive to the sacred pilgrimage town of Pushkar, stopping en route to explore the colossal Chittorgarh Fort with its famous Victory Tower. Arrive in Pushkar, check into your heritage resort, and stroll along the 52 sacred bathing ghats at sunset."
      },
      {
        day: 12,
        title: "Pushkar Brahma Temple & Highway Drive to Jaipur (~145 km / 2.5 hrs)",
        description: "Visit the revered 14th-century Lord Brahma Temple and explore Pushkar's colorful bazaar lanes. Drive along the smooth national highway to Jaipur. Check in and spend your afternoon exploring the royal City Palace and Jantar Mantar astronomical observatory."
      },
      {
        day: 13,
        title: "Jaipur: Amber Fort, Hawa Mahal & Artisan Workshops",
        description: "A full day of royal Jaipur sightseeing. Ascend to the hilltop Amber Fort, exploring its mirror-inlaid Sheesh Mahal and royal courtyards. Stop at the water-surrounded Jal Mahal and photograph the honeycomb facade of Hawa Mahal. In the afternoon, discover traditional block-printing and blue pottery workshops."
      },
      {
        day: 14,
        title: "Jaipur to Agra via Fatehpur Sikri & Sunset Taj View (~240 km / 4 hrs)",
        description: "Drive east toward Agra, stopping en route to explore the imperial ghost city of Fatehpur Sikri. Arrive in Agra, check into your hotel, and spend the late afternoon at Mehtab Bagh gardens enjoying sunset views of the Taj Mahal across the river."
      },
      {
        day: 15,
        title: "Sunrise Taj Mahal, Agra Fort & Return to Delhi / Airport Transfer (~230 km / 3.5 hrs)",
        description: "Rise early for sunrise at the Taj Mahal as the ivory-white marble glows in golden dawn light. Tour the red sandstone Agra Fort, then travel along the Yamuna Expressway back to Delhi International Airport for your departure flight home."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Why is 15 days considered the ideal duration for Rajasthan?",
        a: "15 days provides the perfect pacing: 2 nights in Jaisalmer, Jodhpur, and Udaipur, allowing deep cultural exploration without highway rush."
      },
      {
        q: "Can we upgrade our vehicle to a Toyota Innova Crysta?",
        a: "Yes, we strongly recommend the Innova Crysta for this 15-day route for superior comfort and luggage capacity."
      },
      {
        q: "Are all toll taxes, interstate permits, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
      },
      {
        q: "Can we stop for photos and meals whenever we like?",
        a: "Yes, your private chauffeur is at your exclusive service. You can stop whenever and wherever you choose."
      }
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
    overview: "Experience the perfect royal combination of world-class monuments, tiger safaris, and princely palaces on this comprehensive 12-day private chauffeur tour through Royal Rajasthan. Connecting Delhi, the Taj Mahal in Agra, the tiger wilderness of Ranthambore National Park, the Pink City of Jaipur, the Blue City of Jodhpur, and the romantic lake palaces of Udaipur, this itinerary brings together northern India's most celebrated highlights in a single seamless overland journey. Travel in executive air-conditioned comfort with your dedicated English-speaking chauffeur, enjoying complete flexibility and personalized care throughout.",
    highlights: [
      "Seamless 12-day royal circuit linking Delhi, Agra, Ranthambore, Jaipur, Jodhpur, and Udaipur",
      "Sunrise excursion to the Taj Mahal in Agra with expedited entry and optimal photography angles",
      "Two open-top 4x4 Jeep safaris inside Ranthambore National Park tracking wild Royal Bengal Tigers",
      "Ascent to the fortified hilltop ramparts of Amber Fort and the photogenic facade of Hawa Mahal in Jaipur",
      "Sheer cliff-top battlements of Mehrangarh Fort commanding sweeping vistas over Jodhpur's Blue City",
      "Private sunset boat cruise on Lake Pichola past Udaipur's floating white marble palaces",
      "Stopover at the world-renowned 15th-century carved marble Jain temples of Ranakpur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Orientation Tour of New Delhi",
        description: "Meet your private chauffeur at Indira Gandhi International Airport. Enjoy a comfortable private transfer, followed by an introductory tour of Qutub Minar, Humayun's Tomb, and driving past India Gate and Parliament House before resting at your hotel."
      },
      {
        day: 2,
        title: "Old Delhi Heritage Tour & Drive to Agra via Yamuna Expressway (~230 km / 3.5 hrs)",
        description: "Explore Old Delhi's historic core: visit Jama Masjid, take a cycle-rickshaw through Chandni Chowk spice bazaar, and pause at Raj Ghat. After lunch, cruise down the Yamuna Expressway to Agra. Check into your hotel and enjoy sunset views of the Taj Mahal from Mehtab Bagh."
      },
      {
        day: 3,
        title: "Sunrise Taj Mahal, Agra Fort & Drive to Ranthambore via Fatehpur Sikri (~260 km / 5.5 hrs)",
        description: "Witness sunrise over the Taj Mahal as the ivory-white marble glows in dawn light. Tour Agra Fort, then drive to Ranthambore National Park, stopping en route to explore the imperial ghost city of Fatehpur Sikri. Arrive at your wildlife jungle lodge by evening."
      },
      {
        day: 4,
        title: "Morning & Afternoon Jungle Safaris in Ranthambore National Park",
        description: "A full day of thrilling wildlife tracking. Take an early morning open-top safari into Ranthambore's core zones with an expert forest naturalist. Return to the lodge for lunch, followed by an afternoon safari for another opportunity to spot Royal Bengal Tigers, leopards, and spotted deer."
      },
      {
        day: 5,
        title: "Ranthambore to Jaipur: The Pink City (~160 km / 3.5 hrs)",
        description: "Enjoy a relaxed breakfast at your jungle lodge before driving northwest to Jaipur, the Pink City. Check into your hotel and spend the late afternoon visiting the royal City Palace museum and Jantar Mantar astronomical observatory."
      },
      {
        day: 6,
        title: "Jaipur: Amber Fort, Hawa Mahal & Artisan Bazaars",
        description: "A full day of royal Jaipur sightseeing. Ascend to the hilltop Amber Fort, exploring its mirror-inlaid Sheesh Mahal and royal courtyards. Stop at the water-surrounded Jal Mahal and photograph the honeycomb facade of Hawa Mahal. In the afternoon, discover traditional block-printing and blue pottery workshops."
      },
      {
        day: 7,
        title: "Jaipur to Sacred Pushkar via Ajmer Sharif Dargah (~145 km / 2.5 hrs)",
        description: "Depart Jaipur for the holy town of Pushkar, stopping en route in Ajmer to visit the revered Sufi shrine of Ajmer Sharif Dargah. Continue over the scenic mountain pass into Pushkar. Check into your resort and stroll along the 52 sacred lake bathing ghats at sunset."
      },
      {
        day: 8,
        title: "Pushkar Brahma Temple & Highway Drive to Jodhpur (~190 km / 3.5 hrs)",
        description: "Visit the sacred 14th-century Lord Brahma Temple and explore Pushkar's colorful bazaar lanes. Drive west across desert plains to Jodhpur, the Blue City. Arrive and check into your hotel. Spend the late afternoon exploring the bustling Sardar Market surrounding the historic Clock Tower."
      },
      {
        day: 9,
        title: "Jodhpur: Mehrangarh Fort & Jaswant Thada Cenotaph",
        description: "Ascend to Mehrangarh Fort, towering 400 feet above the city on a sheer perpendicular rock cliff. Tour its museum palaces exhibiting royal palanquins and armory, and admire the iconic vista of the Blue City below. Visit the royal marble cenotaph of Jaswant Thada."
      },
      {
        day: 10,
        title: "Jodhpur to Udaipur via Ranakpur Marble Jain Temples (~260 km / 5 hrs)",
        description: "Drive south through the rugged granite valleys of the Aravalli hills toward Udaipur. Stop at Ranakpur to tour the breathtaking 15th-century Chaumukha Jain Temple with its 1,444 uniquely hand-carved marble pillars. Continue to Udaipur, the 'City of Lakes', checking into your lakeside hotel by evening."
      },
      {
        day: 11,
        title: "Udaipur: City Palace, Saheliyon Ki Bari & Sunset Lake Pichola Boat Cruise",
        description: "Spend a full day exploring romantic Udaipur. Tour the sprawling City Palace complex overlooking Lake Pichola, marveling at its mosaic courtyards and peacock balconies. Visit Saheliyon Ki Bari gardens and conclude with an exclusive private sunset boat cruise on Lake Pichola past the floating Lake Palace."
      },
      {
        day: 12,
        title: "Udaipur Airport Transfer for Departure Flight",
        description: "After a leisurely lakeside breakfast, your chauffeur provides an effortless transfer to Udaipur's Maharana Pratap Airport (UDR) for your onward flight to Delhi, Mumbai, or your international connection, concluding an extraordinary 12-day journey."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Can this 12-day tour end in Udaipur?",
        a: "Yes! Ending in Udaipur saves a long 12-hour return road journey to Delhi. Udaipur Airport offers multiple convenient daily flights to Delhi and Mumbai."
      },
      {
        q: "Are the jungle safaris in Ranthambore included in the price?",
        a: "When you book your tour with us, we arrange confirmed 4x4 Jeep/Canter safari permits and naturalist guides through the Forest Department."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
      },
      {
        q: "Can we stop for photos and meals whenever we like?",
        a: "Yes, your private chauffeur is at your exclusive service. You can stop whenever and wherever you choose."
      }
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
    overview: "Merge North India's premier monument circuit with the deep spiritual serenity and yoga heritage of the Himalayas on this transformative 8-day private chauffeur tour. Connecting Delhi, the sacred bathing ghats of Haridwar, the yoga capital of the world in Rishikesh, the eternal romance of the Taj Mahal in Agra, and the pink royal hill fortresses of Jaipur, this overland journey delivers an authentic harmony of sacred rituals and imperial architecture. Witness the mesmerizing evening Ganga Aarti at Har Ki Pauri with thousands of floating brass lamps, explore the ashrams of Rishikesh along the emerald Ganges, marvel at the Taj Mahal at sunrise, and climb the battlements of Amber Fort in Jaipur with your dedicated private English-speaking chauffeur.",
    highlights: [
      "Transformative 8-day circuit combining the Golden Triangle with sacred Haridwar and Rishikesh",
      "Front-row vantage points for the sacred evening Ganga Aarti ceremony at Har Ki Pauri in Haridwar",
      "Walking tour of Rishikesh: iconic suspension bridges of Ram Jhula and Laxman Jhula, and the historic Beatles Ashram",
      "Private dawn excursion to the Taj Mahal in Agra to experience the white marble dome in optimal morning light",
      "Ascent to the fortified hilltop ramparts of Amber Fort and the photogenic facade of Hawa Mahal in Jaipur",
      "Guided exploration of the massive red sandstone fortifications of Agra Fort and Fatehpur Sikri",
      "Smooth highway cruising in an air-conditioned executive vehicle with dedicated private chauffeur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Scenic Highway Drive to Haridwar (~220 km / 4.5 hrs)",
        description: "Your private chauffeur welcomes you at Indira Gandhi International Airport or your Delhi hotel. Settle into your air-conditioned vehicle as we drive north along modern highways toward the Himalayan foothills to the holy city of Haridwar. Check into your riverside hotel. At dusk, your chauffeur escorts you to Har Ki Pauri ghat to witness the mesmerizing evening Ganga Aarti, where priests chant ancient mantras and thousands of devotees float illuminated brass oil lamps upon the rushing holy waters."
      },
      {
        day: 2,
        title: "Haridwar to Rishikesh (The Yoga Capital of the World) (~25 km / 45 mins)",
        description: "Take a short scenic drive north to Rishikesh, nestled in the green forested foothills of the Himalayas along the emerald Ganges. Visit the iconic suspension bridges of Ram Jhula and Laxman Jhula, the historic Maharishi Mahesh Yogi Ashram (Beatles Ashram) with its vibrant graffiti murals, and Swarg Ashram. Attend the soul-stirring evening Ganga Aarti ceremony at Triveni Ghat before returning to your hotel."
      },
      {
        day: 3,
        title: "Rishikesh to Agra via Modern Expressways (~380 km / 6.5 hrs)",
        description: "After a peaceful morning meditation or yoga session by the Ganges, embark on a smooth highway drive south toward Agra. Relax in air-conditioned comfort as your chauffeur navigates the national highway and Yamuna Expressway. Arrive in Agra by late afternoon, check into your hotel, and spend sunset admiring the Taj Mahal from across the river at Mehtab Bagh gardens."
      },
      {
        day: 4,
        title: "Sunrise Taj Mahal, Agra Fort & Drive to Jaipur via Fatehpur Sikri (~240 km / 4.5 hrs)",
        description: "Experience the defining moment: sunrise over the Taj Mahal as the ivory-white Makrana marble glows in soft dawn light. Return to your hotel for breakfast, followed by an exploration of the massive red sandstone Agra Fort. Drive to Jaipur, stopping en route to explore the UNESCO ghost city of Fatehpur Sikri and the geometric Chand Baori stepwell. Arrive in the Pink City by evening."
      },
      {
        day: 5,
        title: "Jaipur: Amber Fort, Hawa Mahal & Royal City Palace",
        description: "A full day dedicated to the splendors of Jaipur. Ascend to the hilltop Amber Fort, exploring its mirror-inlaid Sheesh Mahal and royal courtyards overlooking Maota Lake. Stop at the water-surrounded Jal Mahal and photograph the honeycomb facade of Hawa Mahal. Tour the City Palace museum and Jantar Mantar astronomical observatory."
      },
      {
        day: 6,
        title: "Jaipur Hill Fortresses & Traditional Artisan Workshops",
        description: "Visit Jaigarh Fort to view the world's largest wheeled cannon and enjoy sweeping panoramic vistas across the Pink City. In the afternoon, discover Jaipur's famous block-printing and blue pottery workshops with your chauffeur on hand for all transfers."
      },
      {
        day: 7,
        title: "Jaipur to Delhi Highway Drive & New Delhi Heritage Tour (~260 km / 4.5 hrs)",
        description: "After breakfast, your chauffeur navigates the smooth expressway back to New Delhi. Arrive by afternoon and explore the 12th-century victory tower of Qutub Minar, Humayun's Tomb, and the grand colonial avenues of Rajpath past India Gate before checking into your hotel."
      },
      {
        day: 8,
        title: "Old Delhi Heritage & International Airport Transfer",
        description: "Explore Old Delhi in the morning: visit Jama Masjid and take a cycle-rickshaw through Chandni Chowk spice bazaar. In the afternoon, your chauffeur delivers you directly to Indira Gandhi International Airport for your departure flight home, concluding a spiritually uplifting journey."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Is this tour suitable for yoga lovers and spiritual seekers?",
        a: "Absolutely! Rishikesh is the yoga capital of the world, and Haridwar provides an authentic immersion into sacred Indian spiritual rituals along the Holy Ganges."
      },
      {
        q: "Can we participate in yoga or meditation classes in Rishikesh?",
        a: "Yes. We can coordinate private morning yoga and pranayama sessions with master instructors at reputable ashrams along the river."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
      },
      {
        q: "What is the dress code in Haridwar and Rishikesh?",
        a: "Modest dress is required: shoulders and knees must be covered at all times around temples and river ghats. Slip-on shoes are recommended."
      }
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
    overview: "Escape into the snow-capped Himalayan peaks, colonial hill stations, and verdant cedar valleys of Himachal Pradesh on this premier 7-day private chauffeur tour through Shimla and Manali. Departing from Delhi, this overland mountain journey takes you from the bustling plains of northern India to the British colonial summer capital of Shimla and the alpine adventure paradise of Manali in the Kullu Valley. Ascend winding mountain highways in executive air-conditioned comfort with a licensed mountain chauffeur, strolling along Shimla's historic Mall Road and Ridge, viewing snow-clad Himalayan panoramas from Kufri, and exploring the pine forests, waterfalls, and adventure activities of Solang Valley.",
    highlights: [
      "Comprehensive 7-day Himalayan mountain circuit covering Shimla, Kufri, Kullu, Manali, and Solang Valley",
      "Historic colonial heritage of Shimla: The Ridge, Christ Church, Gaiety Theatre, and the Mall Road promenade",
      "Panoramic snow vistas and mountain activities from Kufri in the Himalayan nature park",
      "Scenic mountain drive through the Beas River valley and Kullu shawl weaving centers",
      "Alpine wonder of Manali: ancient wooden Hadimba Temple, Vashisht hot sulfur springs, and Old Manali cafes",
      "Adventure and alpine vistas in Solang Valley: paragliding, zorbing, and breathtaking views of snow peaks",
      "Safe, skilled mountain pass driving in an executive air-conditioned vehicle with licensed hill chauffeur"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Scenic Drive to Shimla (Queen of Hills) (~340 km / 7 hrs)",
        description: "Your private chauffeur welcomes you at Delhi International Airport or your Delhi hotel. Settle into your air-conditioned vehicle as we cruise north across the plains of Haryana and Punjab before climbing the scenic Himalayan expressway into the pine-clad hills of Himachal Pradesh. Arrive in Shimla by late afternoon, check into your mountain resort, and enjoy an evening stroll along the pedestrianized Mall Road and historic Ridge."
      },
      {
        day: 2,
        title: "Shimla Heritage Walk & Kufri Snow View Excursion (~16 km)",
        description: "Explore the colonial heritage of Shimla in the morning: visit the neo-Gothic Christ Church, the historic Gaiety Theatre, and the scenic Lakkar Bazaar. In the afternoon, take a scenic drive to Kufri (2,630 meters), surrounded by dense deodar pine forests, offering sweeping panoramic vistas of the snow-capped Himalayan peaks."
      },
      {
        day: 3,
        title: "Shimla to Manali: The Valley of Gods via Scenic Kullu Valley (~250 km / 7.5 hrs)",
        description: "Embark on an exhilarating mountain highway drive winding past terraced apple orchards, rushing mountain rivers, and deep river gorges toward Manali. Stop en route in the Kullu Valley to visit traditional Angora wool shawl-weaving cooperatives. Arrive in Manali by late afternoon, check into your riverside alpine resort, and relax by the Beas River."
      },
      {
        day: 4,
        title: "Manali: Ancient Hadimba Temple, Vashisht Springs & Old Manali",
        description: "Spend the day exploring Manali's cultural treasures. Visit the 16th-century wooden Hadimba Devi Temple, nestled within a dense cedar (deodar) forest. Walk to the ancient village of Vashisht to experience its sacred natural hot sulfur springs. Spend the afternoon wandering through Old Manali's bohemian cafes and Tibetan handicraft markets."
      },
      {
        day: 5,
        title: "Solang Valley Alpine Adventure & Snow View Point (~14 km)",
        description: "Dedicate a full day to the breathtaking alpine scenery of Solang Valley. Marvel at the dramatic snowy peaks and glaciers of the Pir Panjal range. Enjoy optional adventure activities such as paragliding, zorbing, or cable car ropeway rides. Return to Manali in the late afternoon for a cozy evening."
      },
      {
        day: 6,
        title: "Manali to Chandigarh via Pandoh Dam & Mandi (~270 km / 7 hrs)",
        description: "Begin your scenic descent from the high Himalayas down through the dramatic Pandoh Dam and the riverside town of Mandi toward the planned city of Chandigarh. Check into your hotel and enjoy a relaxed evening visiting the famous Rock Garden or Sukhna Lake."
      },
      {
        day: 7,
        title: "Chandigarh to Delhi Highway Return & Airport Transfer (~240 km / 4.5 hrs)",
        description: "After breakfast, cruise down the smooth multi-lane national expressway back to New Delhi. Your chauffeur delivers you directly to Indira Gandhi International Airport for your departure flight home, concluding an invigorating Himalayan mountain holiday."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Are the mountain roads between Shimla and Manali safe?",
        a: "Yes. Our chauffeurs are licensed commercial mountain drivers with extensive experience navigating Himachal Pradesh hill routes safely and smoothly."
      },
      {
        q: "Can this tour visit the Atal Tunnel and Rohtang Pass?",
        a: "Yes! During your stay in Manali, we can arrange an excursion through the engineering marvel of the Atal Tunnel into the high-altitude desert of Lahaul Valley."
      },
      {
        q: "What is the best time of year to visit Shimla and Manali?",
        a: "March to June offers delightful cool mountain weather (15°C–25°C). December to February is ideal for snow lovers and winter sports."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
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
    overview: "Experience the breathtaking natural beauty, misty mountain peaks, and wild tiger jungles of Uttarakhand on this premier 8-day private chauffeur tour. Connecting Delhi, the colonial hill station of Mussoorie (the 'Queen of Hills'), the historic wildlife sanctuary of Jim Corbett National Park, and the serene emerald waters of Nainital, this overland itinerary delivers a perfect balance of mountain leisure and wilderness adventure. Piloted throughout by your private English-speaking chauffeur in an executive air-conditioned vehicle, you stroll along colonial hill promenades, take 4x4 open-top Jeep safaris through dense Sal forests tracking Royal Bengal Tigers, and sail on tranquil mountain lakes.",
    highlights: [
      "Comprehensive 8-day Uttarakhand circuit covering Mussoorie, Jim Corbett National Park, and Nainital",
      "Historic colonial hill station charm of Mussoorie: The Mall Road, Kempty Falls, and Gun Hill viewpoints",
      "Thrilling open-top 4x4 Jeep safaris inside Jim Corbett National Park, India's oldest tiger sanctuary",
      "High probability of spotting Royal Bengal Tigers, wild Asian elephants, leopards, and over 600 bird species",
      "Serene yachting and rowing boat rides on the emerald waters of Naini Lake in Nainital",
      "Scenic mountain driving with skilled hill chauffeur in an executive air-conditioned private vehicle",
      "Total flexibility to pause for scenic photography, roadside fruit stalls, and authentic mountain cuisine"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Scenic Highway Drive to Mussoorie (~280 km / 6.5 hrs)",
        description: "Your private chauffeur greets you at Indira Gandhi International Airport or your Delhi hotel. Settle into your air-conditioned vehicle as we drive north across the plains of Uttar Pradesh before ascending the winding green mountain roads of the Shivalik Range to Mussoorie (2,000 meters). Check into your mountain resort and enjoy an evening stroll along the famous Mall Road."
      },
      {
        day: 2,
        title: "Mussoorie: Kempty Falls, Gun Hill & George Everest Peak",
        description: "Spend a full day exploring Mussoorie. Visit the cascading Kempty Falls, take the cable car ropeway up to Gun Hill for sweeping views of the Doon Valley, and take a scenic nature walk to Sir George Everest's historic estate offering 360-degree views of the snow-clad Himalayan peaks."
      },
      {
        day: 3,
        title: "Mussoorie to Jim Corbett National Park (~210 km / 5.5 hrs)",
        description: "Descend the hills and drive through the foothills of the Himalayas to Jim Corbett National Park, India's legendary first tiger reserve established in 1936. Check into your wildlife jungle lodge on the banks of the Kosi River and enjoy an evening listening to the sounds of the jungle around a bonfire."
      },
      {
        day: 4,
        title: "Morning & Afternoon Jungle Safaris in Jim Corbett National Park",
        description: "Embark on an early morning 4x4 Jeep safari through Corbett's dense Sal forests and open grasslands with an expert forest naturalist. Track wild Royal Bengal Tigers, herds of wild Asian elephants, sambar deer, and gharial crocodiles. Enjoy lunch at the lodge, followed by an afternoon safari in another scenic zone."
      },
      {
        day: 5,
        title: "Corbett to Nainital: The Lake District (~150 km / 4 hrs)",
        description: "Enjoy a relaxed breakfast before your chauffeur navigates the scenic winding highway to the charming lake resort of Nainital, set around the eye-shaped emerald Naini Lake. Check into your hotel and spend the afternoon enjoying a peaceful boat ride on the lake, followed by a stroll along the vibrant Mall Road."
      },
      {
        day: 6,
        title: "Nainital: Snow View Point, Naina Devi Temple & Eco Cave Gardens",
        description: "A full day of sightseeing in Nainital. Take the aerial ropeway up to Snow View Point for breathtaking vistas of the high Himalayan peaks including Nanda Devi. Visit the sacred Naina Devi Temple on the lake shore and explore the fascinating Eco Cave Gardens."
      },
      {
        day: 7,
        title: "Nainital Lake Tour: Bhimtal, Sattal & Naukuchiatal (~30 km)",
        description: "Take a scenic excursion around the surrounding lakes of the Kumaon hills. Visit Bhimtal with its picturesque island aquarium, the tranquil interconnected waters of Sattal surrounded by pine forests, and nine-cornered Naukuchiatal before returning to Nainital for a relaxed evening."
      },
      {
        day: 8,
        title: "Nainital to Delhi Highway Return & Airport Transfer (~300 km / 6.5 hrs)",
        description: "After breakfast, descend from the Kumaon hills and cruise down the smooth national highway back to New Delhi. Your chauffeur delivers you directly to Indira Gandhi International Airport for your departure flight home, concluding a refreshing mountain and wildlife retreat."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Are the jungle safaris in Jim Corbett safe?",
        a: "Yes. Safaris are conducted in government-registered open-top 4x4 Gypsys accompanied by certified park naturalists who strictly adhere to safety and wildlife guidelines."
      },
      {
        q: "What is the best time of year for this Uttarakhand tour?",
        a: "March to June offers pleasant mountain weather (15°C–25°C) and excellent tiger viewing in Corbett. September to November offers clear blue Himalayan skies and crisp mountain air."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, interstate road permits, and driver lodging allowances are fully covered."
      },
      {
        q: "Can this tour be customized with different hotel tiers?",
        a: "Yes, 100%. We can customize this itinerary with heritage colonial properties, luxury riverside jungle lodges, or boutique view hotels."
      }
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
    overview: "Embark on the ultimate sacred pilgrimage of Sanatan Dharma on this 12-day private chauffeur-driven Char Dham Yatra through the divine Garhwal Himalayas of Uttarakhand. Connecting the four holy shrines—Yamunotri (source of the Yamuna River), Gangotri (seat of Goddess Ganga), Kedarnath (the sacred 12th Jyotirlinga of Lord Shiva amidst glacial peaks), and Badrinath (the sacred abode of Lord Vishnu)—this spiritually elevating journey is conducted in supreme safety and comfort. Piloted by an experienced, licensed mountain chauffeur in an air-conditioned executive vehicle, you traverse the sacred valleys of Haridwar, Rishikesh, and the holy Panch Prayags (river confluences) with total peace of mind.",
    highlights: [
      "The complete sacred 12-day Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath, and Badrinath",
      "Darshan at the sacred Kedarnath Temple (3,584 meters), one of the twelve divine Jyotirlingas of Lord Shiva",
      "Visit to Badrinath Temple (3,133 meters), the sacred Himalayan abode of Lord Vishnu, and holy Tapt Kund hot springs",
      "Pilgrimage to Gangotri Temple, the origin of the sacred River Bhagirathi, and Yamunotri hot water springs",
      "Attend the mesmerizing evening Ganga Aarti at Har Ki Pauri in Haridwar and explore Rishikesh",
      "Scenic journeys through the sacred Panch Prayags: Devprayag, Rudraprayag, Karnaprayag, and Nandaprayag",
      "Licensed commercial mountain chauffeur with years of Garhwal Himalayan driving experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Scenic Drive to Haridwar (~220 km / 4.5 hrs)",
        description: "Your private chauffeur welcomes you at Delhi International Airport or your hotel. Cruise along the highway toward the Himalayan foothills to the holy gateway city of Haridwar. Check into your hotel and attend the sacred evening Ganga Aarti at Har Ki Pauri ghat with floating brass oil lamps."
      },
      {
        day: 2,
        title: "Haridwar to Barkot via Mussoorie & Kempty Falls (~210 km / 7 hrs)",
        description: "Begin the scenic mountain ascent into the Garhwal Himalayas. Drive through the picturesque hill station of Mussoorie, stopping at Kempty Falls. Continue through scenic alpine valleys to the pilgrimage base town of Barkot. Check into your hotel and rest before your trek to Yamunotri."
      },
      {
        day: 3,
        title: "Barkot to Yamunotri Temple Darshan & Return (~42 km drive + 6 km trek each way)",
        description: "Drive to Janki Chatti, the trekking base for Yamunotri. Trek (or take a pony/palki) 6 km along the scenic mountain trail to the holy Yamunotri Temple. Take a holy dip in the hot thermal waters of Surya Kund and seek divine blessings at the shrine. Return to Barkot for an evening of rest."
      },
      {
        day: 4,
        title: "Barkot to Uttarkashi (Kashi of the North) (~100 km / 4 hrs)",
        description: "Drive through beautiful mountain valleys along the banks of the Bhagirathi River to Uttarkashi. Check into your hotel and visit the ancient Vishwanath Temple, housing a massive copper trident (Trishul) dedicated to Lord Shiva, before an evening of prayer."
      },
      {
        day: 5,
        title: "Uttarkashi to Gangotri Temple Darshan & Return (~100 km each way / 3.5 hrs)",
        description: "Drive along the stunning Bhagirathi river gorge through Harsil Valley to holy Gangotri (3,100 meters). Seek blessings at the historic Gangotri Temple, take a holy dip in the sacred river, and marvel at the submerged natural Shiva Lingam. Return to Uttarkashi by evening."
      },
      {
        day: 6,
        title: "Uttarkashi to Guptkashi / Phata (~220 km / 8 hrs)",
        description: "Embark on an expansive scenic mountain drive across the Garhwal valleys toward Guptkashi, the pilgrimage base for Kedarnath. Pass terraced valleys and rushing mountain streams. Check into your hotel and prepare for your journey to the sacred abode of Lord Shiva."
      },
      {
        day: 7,
        title: "Guptkashi to Kedarnath Temple (Trek or Helicopter Transfer)",
        description: "Travel to Sonprayag/Gaurikund for the 16 km trek (or transfer to Phata/Sersi helipad for a scenic 10-minute helicopter flight) to Kedarnath (3,584 meters). Marvel at the ancient stone temple standing against the towering snow-covered Kedarnath peak. Attend the evening temple aarti and stay overnight."
      },
      {
        day: 8,
        title: "Kedarnath Morning Darshan & Return to Guptkashi",
        description: "Witness the awe-inspiring sunrise over the Kedarnath peak and attend the early morning Maha Abhishek ceremony. Descend back to Gaurikund (or helicopter flight) where your chauffeur meets you and transfers you back to your hotel in Guptkashi for a well-deserved rest."
      },
      {
        day: 9,
        title: "Guptkashi to Badrinath via Chopta & Joshimath (~190 km / 7 hrs)",
        description: "Drive through the breathtaking alpine meadows of Chopta (the 'Mini Switzerland of India') and the spiritual gateway of Joshimath. Climb to Badrinath (3,133 meters) along the Alaknanda River. Check into your hotel and attend the divine evening aarti at Badrinath Temple."
      },
      {
        day: 10,
        title: "Badrinath Darshan, Mana Village & Drive to Rudraprayag (~160 km / 5.5 hrs)",
        description: "Take a holy dip in the natural thermal waters of Tapt Kund before morning darshan at Badrinath Temple. Visit Mana, the last Indian village before the Tibet border, exploring Vyas Gufa and the Bhim Pul natural stone bridge. Drive downhill to Rudraprayag, the holy confluence of the Alaknanda and Mandakini rivers."
      },
      {
        day: 11,
        title: "Rudraprayag to Rishikesh via Devprayag Confluence (~140 km / 4.5 hrs)",
        description: "Drive down through Devprayag, the sacred confluence where the Bhagirathi and Alaknanda rivers unite to form the Holy Ganges. Arrive in Rishikesh, check into your riverside hotel, and attend the peaceful evening Ganga Aarti at Triveni Ghat."
      },
      {
        day: 12,
        title: "Rishikesh to Delhi Return Highway Drive & Airport Transfer (~240 km / 4.5 hrs)",
        description: "After a tranquil morning breakfast by the Ganges, cruise down the modern expressway back to New Delhi. Your chauffeur delivers you directly to Indira Gandhi International Airport for your departure flight home, concluding a sacred life-transforming Yatra."
      }
    ],
    inclusions: [
      "Dedicated private air-conditioned vehicle (Toyota Innova Crysta or Premium Sedan) at exclusive disposal",
      "Professional licensed commercial chauffeur fluent in conversational English with deep regional route expertise",
      "100% all-inclusive transport expenses: fuel, expressway toll plazas, interstate border permits, and parking fees",
      "Driver lodging, daily meal allowances, and interstate commercial passenger road taxes fully covered",
      "Unlimited complimentary chilled bottled mineral water and multi-port fast USB charging stations inside the vehicle",
      "24/7 dedicated trip concierge and WhatsApp monitoring from our central Delhi operations headquarters",
      "Total itinerary flexibility: stop at your leisure for photography pauses, tea breaks, and authentic restaurants with zero shopping pressure"
    ],
    exclusions: [
      "International and domestic flight tickets, visa fees, and train fares",
      "Hotel accommodation bookings and daily breakfast/meals (can be custom-arranged upon request)",
      "Monument entrance fees, camera permits, and mandatory audio guide rentals",
      "Personal expenses such as alcoholic beverages, laundry services, telephone bills, and gratuities/tips",
      "Optional local government-approved monument step-on guides (arranged directly at monument ticket counters)"
    ],
    faqs: [
      {
        q: "Can helicopter tickets for Kedarnath be arranged?",
        a: "Yes! We assist in coordinating government-authorized helicopter shuttle tickets from Phata, Sersi, or Guptkashi directly to Kedarnath helipad."
      },
      {
        q: "What medical preparation is recommended for the Char Dham Yatra?",
        a: "Because shrines like Kedarnath and Badrinath are above 3,000 meters, we recommend carrying basic altitude and warm clothing. Biometric pilgrimage registration (which we help coordinate) is mandatory."
      },
      {
        q: "Are the mountain drivers experienced with Himalayan roads?",
        a: "Yes. We exclusively deploy veteran commercial mountain chauffeurs with over 10 years of experience navigating the Garhwal Himalayan pilgrimage routes."
      },
      {
        q: "Are all vehicle expenses, toll taxes, and driver allowances included?",
        a: "Yes, 100%. Fuel, toll plazas, parking, hill permits, and driver lodging allowances are fully covered."
      }
    ],
    rating: 4.99,
    reviewsCount: 128
  }
];
