import React from "react";
import type { Metadata } from "next";
import { TOURS } from "@/data/tours";
import TourDetailView from "@/components/views/TourDetailView";

const tour = TOURS.find((t) => t.slug === "forts-&-palaces-tour-package")!;

export const metadata: Metadata = {
  title: `${tour.title} (${tour.duration}) | Private Driver India`,
  description: tour.subtitle,
  alternates: {
    canonical: "https://autistaprivatoindia.it/forts-&-palaces-tour-package.html",
  },
  openGraph: {
    title: tour.title,
    description: tour.subtitle,
    images: [{ url: tour.image }],
  },
};

export default function FortsAndPalacesPage() {
  return <TourDetailView tour={tour} />;
}
