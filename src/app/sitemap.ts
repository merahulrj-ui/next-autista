import { MetadataRoute } from "next";
import { TOURS } from "@/data/tours";
import { DESTINATIONS } from "@/data/destinations";
import { BLOGS } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://autistaprivatoindia.it";
  const now = new Date();

  // 1. Core Landing Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tour-packages`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/golden-triangle-tour-package`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/rajasthan-tour-package`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/india-intercity-car-transfer-private-driver`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/toyota-innova-crysta-rental-india-private-driver`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/hiring-private-driver-in-india-cost-guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // 2. All 30 Tour Packages
  const tourPages: MetadataRoute.Sitemap = TOURS.map((tour) => ({
    url: `${baseUrl}/${tour.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: tour.category === "bestseller" || tour.category === "rajasthan" ? 0.9 : 0.85,
  }));

  // 3. Destinations
  const destPages: MetadataRoute.Sitemap = DESTINATIONS.map((d) => ({
    url: `${baseUrl}/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 4. Blogs & Guides
  const blogPages: MetadataRoute.Sitemap = BLOGS.map((b) => ({
    url: `${baseUrl}/${b.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticPages, ...tourPages, ...destPages, ...blogPages];
}
