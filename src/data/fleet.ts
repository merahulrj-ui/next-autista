export interface Vehicle {
  id: string;
  name: string;
  category: string;
  tagline: string;
  capacityPassengers: number;
  capacityLuggage: string;
  acType: string;
  image: string;
  features: string[];
  recommendedFor: string;
  dayRateEUR: number;
}

export const FLEET: Vehicle[] = [
  {
    id: "sedan",
    name: "Comfort Sedan (Toyota Etios / Maruti Suzuki Dzire)",
    category: "Executive 4-Door Sedan",
    tagline: "Agile, highly economical, and ideal for couples or solo travelers",
    capacityPassengers: 3,
    capacityLuggage: "2 Medium Suitcases + 2 Daypacks",
    acType: "Integrated High-Efficiency Digital Air Conditioning",
    image: "/images/fleet/dzire.jpg",
    features: [
      "Whisper-quiet high-capacity air conditioning",
      "Ergonomic reclinable fabric seats with ample knee room",
      "USB charging ports for mobile devices & cameras",
      "Fresh complimentary bottled mineral water on board",
      "Licensed commercial English-speaking chauffeur"
    ],
    recommendedFor: "Solo travelers, couples, or two friends traveling with compact luggage on classic Golden Triangle circuits or intercity transfers.",
    dayRateEUR: 45
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta (Executive SUV)",
    category: "Luxury 7-Seater Executive SUV",
    tagline: "The undisputed gold standard for luxury long-distance road travel across Rajasthan",
    capacityPassengers: 5,
    capacityLuggage: "4 Large Hard-Shell Suitcases + 4 Hand Luggage",
    acType: "Independent Dual Front & Rear High-Power Climate Control with Ceiling Vents",
    image: "/images/fleet/innova-crysta.jpg",
    features: [
      "Executive 2nd-row independent plush 'Captain Seats' with armrests",
      "Superior coil-spring suspension calibrated for varied Indian road conditions",
      "Dedicated overhead AC vents with independent passenger fan speed controls",
      "Expansive modular boot space that never encroaches on passenger legroom",
      "UV-tinted expansive panoramic windows for optimal sightseeing and photography"
    ],
    recommendedFor: "Couples wanting business-class comfort, families with children, or small groups of 3 to 5 travelers undertaking 10 to 15-day Grand Rajasthan journeys.",
    dayRateEUR: 65
  },
  {
    id: "tempo-traveller",
    name: "Luxury Minivan (Force Urbania / Tempo Traveller)",
    category: "Executive Luxury Tourist Minibus",
    tagline: "Unmatched space, full standing height, and premium comfort for extended families and groups",
    capacityPassengers: 10,
    capacityLuggage: "10-12 Large Suitcases + Carry-On Bags",
    acType: "Heavy-Duty Central Ducted High-Capacity AC System with Individual Louvers",
    image: "/images/fleet/tempo-traveller.jpg",
    features: [
      "Individual 1x1 reclinable executive leatherette pushback seats with armrests",
      "Full 6-foot interior ceiling height allowing guests to stand and walk upright",
      "Dedicated separate oversized rear luggage compartment",
      "Modern sound system, mobile charging stations at every row, and PA microphone",
      "Soft ambient interior LED reading lights for night journeys"
    ],
    recommendedFor: "Small group tours, extended multi-generational families (6 to 10 passengers), or photography expeditions carrying heavy gear.",
    dayRateEUR: 95
  }
];
