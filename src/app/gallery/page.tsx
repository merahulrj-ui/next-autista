import React from "react";
import type { Metadata } from "next";
import GalleryView from "@/components/views/GalleryView";
import { GALLERY_ITEMS } from "@/data/gallery";

export const metadata: Metadata = {
  title: "India Travel Photo Gallery | Private Chauffeur Sights & Heritage Moments",
  description:
    "Browse authentic photographic travel moments captured across Rajasthan, the Taj Mahal, Varanasi, and luxury heritage palace stays with our private English-speaking chauffeur service.",
  alternates: {
    canonical: "https://autistaprivatoindia.it/gallery",
  },
  openGraph: {
    title: "India Travel Photo Gallery | Autista Privato India",
    description:
      "Explore curated travel sights, royal forts, desert dunes, and luxury chauffeur vehicles in India.",
    url: "https://autistaprivatoindia.it/gallery",
    siteName: "Autista Privato India",
    images: [
      {
        url: "https://autistaprivatoindia.it/images/tour/taj-mahal.webp",
        width: 1200,
        height: 800,
        alt: "Taj Mahal sunrise view with private driver in India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function GalleryPage() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Autista Privato India - Curated Travel Photo Gallery",
    description:
      "A photographic collection of iconic Indian monuments, Rajasthan fortresses, desert safaris, and luxury chauffeur fleet.",
    url: "https://autistaprivatoindia.it/gallery",
    publisher: {
      "@type": "Organization",
      name: "Autista Privato India",
      url: "https://autistaprivatoindia.it",
      logo: "https://autistaprivatoindia.it/images/brand-logo.webp",
    },
    hasPart: GALLERY_ITEMS.slice(0, 12).map((item) => ({
      "@type": "ImageObject",
      name: item.title,
      caption: item.description,
      contentUrl: `https://autistaprivatoindia.it${item.image}`,
      thumbnail: `https://autistaprivatoindia.it${item.image}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://autistaprivatoindia.it",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Photo Gallery",
        item: "https://autistaprivatoindia.it/gallery",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GalleryView />
    </>
  );
}
