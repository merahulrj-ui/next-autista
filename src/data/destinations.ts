export interface Destination {
  slug: string;
  legacyUrl: string;
  name: string;
  italianName: string;
  tagline: string;
  description: string;
  image: string;
  topAttractions: Array<{
    name: string;
    desc: string;
  }>;
  bestTimeToVisit: string;
  recommendedDuration: string;
  carRentalTips: string;
  metaTitle: string;
  metaDesc: string;
}

export const DESTINATIONS: Destination[] = [
  {
    slug: "jaipur",
    legacyUrl: "jaipur.html",
    name: "Jaipur",
    italianName: "Jaipur (The Pink City)",
    tagline: "The Royal Capital of Rajasthan, famed for majestic hill forts and terracotta palaces",
    description: "Founded in 1727 by the visionary astronomer-king Maharaja Sawai Jai Singh II, Jaipur is the vibrant capital of Rajasthan and a cornerstone of India's world-famous Golden Triangle. Renowned for its distinctive terracotta-pink facades—painted in 1876 to welcome Prince Albert—the city blends regal Rajput architecture with grand Mughal design, bustling open-air craft bazaars, and opulent heritage palace hotels.",
    image: "/images/tour/jaipur.jpg",
    topAttractions: [
      { name: "Amber Fort & Palace", desc: "A colossal hilltop fortress featuring the shimmering Sheesh Mahal (Mirror Palace) and breathtaking views over Maota Lake." },
      { name: "Hawa Mahal (Palace of Winds)", desc: "The five-story iconic honeycomb facade with 953 finely latticed jharokha windows designed for royal women to observe city street life." },
      { name: "City Palace Complex", desc: "A sprawling royal residence blending Rajput, Mughal, and European architecture, still home to the titular Maharaja of Jaipur." },
      { name: "Jantar Mantar Astronomical Observatory", desc: "A UNESCO World Heritage site housing nineteen colossal architectural astronomical instruments, including the world's largest stone sundial." },
      { name: "Nahargarh & Jaigarh Forts", desc: "Perched on the rugged Aravalli ridge, offering unbeatable sunset vistas over the Pink City and housing the world's largest cannon on wheels." }
    ],
    bestTimeToVisit: "October to March (crisp, pleasant desert winter weather)",
    recommendedDuration: "2 - 3 Days",
    carRentalTips: "Navigating Jaipur's dense Old City gates and bustling bazaars is seamless with a private chauffeur. Your driver drops you directly at monument gates, safeguards your luggage, and coordinates effortless transfers between hill forts without parking stress.",
    metaTitle: "Jaipur Travel Guide with Private Chauffeur | The Pink City Rajasthan",
    metaDesc: "Complete travel guide to Jaipur with private chauffeur. Explore Amber Fort, Hawa Mahal, City Palace, and local craft bazaars in air-conditioned luxury."
  },
  {
    slug: "udaipur",
    legacyUrl: "udaipur.html",
    name: "Udaipur",
    italianName: "Udaipur (The City of Lakes)",
    tagline: "The Venice of the East: floating marble palaces, tranquil waters, and timeless romance",
    description: "Cradled by the ancient Aravalli Hills and reflected in the silvery waters of Lake Pichola, Udaipur is widely celebrated as the most romantic city in Asia. Built by Maharana Udai Singh II in 1559 as the capital of the Mewar Kingdom, Udaipur captivates international travelers with its gleaming white marble palaces, tranquil lakeside ghats, ornate havelis, and lush royal garden courtyards.",
    image: "/images/tour/udaipur.jpg",
    topAttractions: [
      { name: "City Palace of Udaipur", desc: "Rajasthan's largest royal palace complex, featuring ornate mirrored halls, peacock courtyards, and panoramic terraces overlooking Lake Pichola." },
      { name: "Lake Pichola & Jag Mandir Island", desc: "A tranquil sunset cruise on the historic lake, offering close-up views of the iconic floating Lake Palace (Taj Lake Palace)." },
      { name: "Jagdish Temple", desc: "A richly sculpted 1651 Hindu temple dedicated to Lord Vishnu, featuring continuous stone-carved friezes in the heart of the old town." },
      { name: "Saheliyon Ki Bari (Garden of the Maidens)", desc: "A serene royal pleasure garden designed with marble pavilions, lotus ponds, and natural elephant-shaped fountains." },
      { name: "Bagore Ki Haveli & Cultural Show", desc: "An 18th-century lakeside mansion hosting vibrant evening Rajasthani folk dance and puppet performances at Gangaur Ghat." }
    ],
    bestTimeToVisit: "September to March (lakes are full and sparkling following the monsoon season)",
    recommendedDuration: "2 - 3 Days",
    carRentalTips: "The alleys surrounding the lakeside ghats are narrow and pedestrian-friendly. Your chauffeur will drop you at the prime ghat access points and provide convenient door-to-door transit for day trips to Monsoon Palace (Sajjangarh) and Ranakpur.",
    metaTitle: "Udaipur Private Chauffeur Guide | City of Lakes & Lake Pichola Tours",
    metaDesc: "Discover Udaipur with a dedicated private chauffeur. Explore the City Palace, Lake Pichola boat cruises, and scenic day tours to Ranakpur & Kumbhalgarh."
  },
  {
    slug: "jodhpur",
    legacyUrl: "jodhpur.html",
    name: "Jodhpur",
    italianName: "Jodhpur (The Blue City)",
    tagline: "In the shadow of the mighty Mehrangarh Fort and indigo-painted historic alleys",
    description: "Rising dramatically above the Thar Desert on a 400-foot rocky precipice, Jodhpur is anchored by the titanic Mehrangarh Fort. Known worldwide as the 'Blue City' for the sea of indigo-washed Brahmin houses in the Brahmapuri district, Jodhpur offers a rich tapestry of warrior heritage, traditional spice bazaars, antique timber crafts, and warm Marwari hospitality.",
    image: "/images/tour/jodhpur.jpg",
    topAttractions: [
      { name: "Mehrangarh Fort", desc: "One of India's largest and best-preserved hill fortresses, described by Rudyard Kipling as 'the work of giants' with an extraordinary royal museum." },
      { name: "Jaswant Thada Memorial", desc: "A 19th-century royal marble cenotaph carved from translucent Makrana marble, surrounded by landscaped gardens and a peaceful lake." },
      { name: "Umaid Bhawan Palace", desc: "One of the world's largest private royal residences, designed in Art Deco style, housing a luxury hotel, private museum, and the current royal family." },
      { name: "Sardar Market & Ghanta Ghar (Clock Tower)", desc: "A bustling open bazaar filled with fragrant Mathania red chillies, royal blend teas, silver jewellery, and handcrafted textiles." },
      { name: "Brahmapuri Blue City Heritage Walk", desc: "A photographer's paradise of quiet, azure-painted alleyways tucked directly beneath the towering battlements of the fort." }
    ],
    bestTimeToVisit: "October to March (cool mornings and sunny desert afternoons)",
    recommendedDuration: "1 - 2 Days",
    carRentalTips: "Jodhpur serves as the perfect highway springboard for scenic road journeys toward Jaisalmer through the Thar desert, or south toward Udaipur via Ranakpur and Kumbhalgarh.",
    metaTitle: "Jodhpur Private Driver Tour | Blue City & Mehrangarh Fort Travel",
    metaDesc: "Explore Jodhpur with a private driver. Visit Mehrangarh Fort, Jaswant Thada, blue streets, and spice markets with our licensed English-speaking chauffeurs."
  },
  {
    slug: "jaisalmer",
    legacyUrl: "jaisalmer.html",
    name: "Jaisalmer",
    italianName: "Jaisalmer (The Golden City)",
    tagline: "A living medieval sandstone citadel rising dramatically from the golden dunes of the Thar",
    description: "Perched near the western edge of the Great Thar Desert, Jaisalmer looks as if it were plucked directly from the pages of Arabian Nights. Constructed from rich yellow sandstone that glows like pure honey in the late afternoon sun, it is home to one of the world's few remaining living forts, surrounded by ornate merchant havelis carved with lace-like precision and rolling desert dunes.",
    image: "/images/tour/jaisalmer.jpg",
    topAttractions: [
      { name: "Jaisalmer Living Fort (Sonar Qila)", desc: "A UNESCO World Heritage fortress housing one-fourth of the city's population, medieval Jain temples, and ornate palace quarters." },
      { name: "Patwon Ki Haveli", desc: "The grandest five-story cluster of merchant mansions, featuring intricately sculpted sandstone jharokhas and antique murals." },
      { name: "Sam & Khuri Sand Dunes", desc: "The classic undulating desert sand sea, famous for authentic camel treks, jeep dune bashing, and starlit desert camping." },
      { name: "Gadisar Lake", desc: "A 14th-century rainwater reservoir ringed by ornate Hindu shrines, pavilions, and the delicate arched gateway of Tillon Ki Pol." },
      { name: "Bada Bagh Royal Cenotaphs", desc: "Historic sandstone chhatris built in memory of the Maharajas of Jaisalmer, offering an evocative sunset photography backdrop." }
    ],
    bestTimeToVisit: "November to February (mild desert days and cool starry nights; avoid hot summer months)",
    recommendedDuration: "2 - 3 Days",
    carRentalTips: "The long highway stretches connecting Jodhpur or Bikaner to Jaisalmer cross vast desert expanses. Traveling in a well-maintained, air-conditioned Toyota Innova ensures supreme comfort, reliable speed, and safety.",
    metaTitle: "Jaisalmer Private Driver Tour | Thar Desert Safari & Golden Fort",
    metaDesc: "Plan your Jaisalmer tour with a professional private driver. Visit the Golden Fort, Patwon Haveli, and enjoy Sam Dunes desert safaris in complete comfort."
  },
  {
    slug: "bikaner",
    legacyUrl: "bikaner.html",
    name: "Bikaner",
    italianName: "Bikaner (The Caravan City)",
    tagline: "Unconquered desert citadels, red sandstone palaces, and ancient caravan trading traditions",
    description: "Founded in 1488 by Rajput warrior Rao Bika, Bikaner is an authentic desert outpost that escaped mass commercialization while preserving its aristocratic heritage. Junagarh Fort stands as one of the very few major fortresses in Rajasthan never captured by enemy forces, housing remarkably preserved royal chambers adorned with gold leaf, Bohemian crystal, and Italian tiles.",
    image: "/images/tour/bikaner.jpg",
    topAttractions: [
      { name: "Junagarh Fort Complex", desc: "A formidable 16th-century fortress complex with opulent interiors including the Anup Mahal, Badal Mahal, and Chandra Mahal." },
      { name: "Lalgarh Palace & Heritage Museum", desc: "An imposing red sandstone palace designed by Sir Swinton Jacob, blending Indo-Saracenic grandeur with lush lawns." },
      { name: "National Research Centre on Camel", desc: "Asia's premier scientific camel breeding center, where guests can observe different camel breeds and taste fresh camel milk ice cream." },
      { name: "Karni Mata Temple (Deshnoke)", desc: "The famous 600-year-old temple where over twenty thousand sacred rats (kabbas) are protected and revered by devotees." }
    ],
    bestTimeToVisit: "October to March",
    recommendedDuration: "1 - 2 Days",
    carRentalTips: "Bikaner is the ideal midpoint to break the drive between Delhi/Shekhawati and Jaisalmer. Having a private driver allows you to stop easily at Deshnoke on the highway without detours.",
    metaTitle: "Bikaner Private Chauffeur Tour | Junagarh Fort & Camel Desert Guide",
    metaDesc: "Discover Bikaner with a private driver in India. Visit Junagarh Fort, Deshnoke Temple, and Lalgarh Palace on your tailor-made Rajasthan road trip."
  },
  {
    slug: "pushkar",
    legacyUrl: "pushkar.html",
    name: "Pushkar",
    italianName: "Pushkar (The Sacred Oasis & Camel Fair)",
    tagline: "The mystical energy of the holy lake, the rare Brahma Temple, and the world-famous Autumn Fair",
    description: "Pushkar is one of the most sacred pilgrimage centers in Hinduism. Encircled by 52 bathing ghats around a sacred desert lake—mythologically created when Lord Brahma dropped a lotus petal to earth—the town exudes timeless spiritual serenity. It is home to the world's most prominent temple dedicated to Lord Brahma and hosts the internationally renowned Pushkar Camel Fair every November.",
    image: "/images/tour/pushkar.jpg",
    topAttractions: [
      { name: "Pushkar Holy Lake & 52 Bathing Ghats", desc: "The spiritual heart of Pushkar, where pilgrims participate in evening aarti ceremonies amid ringing bells and chanting." },
      { name: "Jagatpita Brahma Mandir", desc: "The rare 14th-century temple dedicated to the Creator deity Lord Brahma, identifiable by its red spire and marble swan emblem." },
      { name: "Savitri Devi Temple (Ratnagiri Hill)", desc: "Perched atop a commanding hill overlooking the lake and desert basin, accessible via a short hike or scenic ropeway cable car." },
      { name: "Pushkar Camel Fair (Kartik Purnima)", desc: "An epic annual cultural extravaganza bringing together over 50,000 camels, horses, and desert nomads for trading and festivities." }
    ],
    bestTimeToVisit: "October to March (especially in November during the Pushkar Camel Fair)",
    recommendedDuration: "1 - 2 Days",
    carRentalTips: "Pushkar is a strictly vegetarian and alcohol-free sacred town. It is compact and easily walked, while your chauffeur is ready to drive you to nearby Ajmer, Savitri ropeway, or desert sunset points.",
    metaTitle: "Pushkar Travel Guide with Private Driver | Sacred Lake & Brahma Temple",
    metaDesc: "Travel to Pushkar with a private chauffeur. Experience the holy ghats, Brahma Temple, and the world-famous Camel Fair with transparent, all-inclusive car rates."
  },
  {
    slug: "mount-abu",
    legacyUrl: "mount-abu.html",
    name: "Mount Abu",
    italianName: "Mount Abu (The Hill Station of Rajasthan)",
    tagline: "The only mountain sanctuary in Rajasthan: pine-scented forests, alpine lakes, and world-class marble temples",
    description: "Situated at an altitude of 1,220 meters among the highest peaks of the southern Aravalli range, Mount Abu is Rajasthan's only hill station. Famed for its cool microclimate, alpine Nakki Lake, and scenic forested ridgelines, it is internationally renowned for the Dilwara Jain Temples—widely considered the zenith of human marble craftsmanship.",
    image: "/images/tour/mount-abu.jpg",
    topAttractions: [
      { name: "Dilwara Jain Temples", desc: "Five 11th–13th century marble temples with ceilings, pillars, and arches carved with unbelievable gossamer-like delicacy." },
      { name: "Nakki Lake & Toad Rock", desc: "A picturesque alpine lake surrounded by lush hills, legendary rock formations, and boating facilities." },
      { name: "Guru Shikhar Peak", desc: "The highest mountain summit in the Aravalli Range (1,722 m), providing 360-degree panoramic views over Rajasthan and Gujarat." },
      { name: "Sunset Point", desc: "A cliffside scenic viewpoint offering dramatic sunset vistas over the forested valleys below." }
    ],
    bestTimeToVisit: "Year-round (a wonderful cool mountain retreat during warmer months)",
    recommendedDuration: "1 - 2 Days",
    carRentalTips: "The mountain ascent to Mount Abu involves winding hairpin bends. Our experienced drivers and heavy-duty vehicles ensure smooth, comfortable, and motion-sickness-free mountain travel.",
    metaTitle: "Mount Abu Private Driver Tour | Dilwara Marble Temples & Nakki Lake",
    metaDesc: "Visit Mount Abu with an experienced private driver. Explore the Dilwara Jain Temples, Nakki Lake, and Guru Shikhar on your customized Rajasthan journey."
  },
  {
    slug: "ajmer",
    legacyUrl: "ajmer.html",
    name: "Ajmer",
    italianName: "Ajmer (The Sufi Shrine of Khwaja Garib Nawaz)",
    tagline: "The historic epicentre of Sufi spirituality and communal harmony in India",
    description: "Just 14 kilometers from Pushkar across the Nag Pahar hills lies the historic city of Ajmer, founded in the 7th century. It is celebrated worldwide across the Islamic and Indian world for the Dargah Sharif—the sacred tomb of Sufi saint Khwaja Moinuddin Chishti—drawing millions of pilgrims of all religions and walks of life every year.",
    image: "/images/tour/5.jpg",
    topAttractions: [
      { name: "Ajmer Sharif Dargah", desc: "The revered Sufi shrine where soulful live Qawwali devotional music echoes through silver-inlaid marble courtyards." },
      { name: "Adhai Din Ka Jhonpra", desc: "An extraordinary 12th-century monument constructed with arched sandstone screens and intricately carved pillars." },
      { name: "Ana Sagar Lake & Marble Baradaris", desc: "A scenic 12th-century artificial lake lined with elegant white marble pavilions built by Mughal Emperor Shah Jahan." },
      { name: "Taragarh Fort (Star Fort)", desc: "One of India's oldest hill forts, perched high on the crest overlooking the historic basin of Ajmer." }
    ],
    bestTimeToVisit: "October to March",
    recommendedDuration: "Half Day to 1 Day (effortlessly combined with Pushkar)",
    carRentalTips: "Ajmer and Pushkar are only 25 minutes apart by road. Having your private chauffeur on standby allows you to seamlessly visit both sacred destinations on the same day without transport hassle.",
    metaTitle: "Ajmer Private Driver Tour | Dargah Sharif & Ana Sagar Lake Visit",
    metaDesc: "Explore Ajmer with a private driver in India. Visit the world-famous Sufi shrine of Dargah Sharif and historic Mughal monuments with licensed chauffeurs."
  }
];
