import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://moritz-restaurant-binz.de";

  const routes = [
    "",
    "/menu",
    "/about",
    "/contact",
    "/reservation",
    "/impressum",
    "/datenschutz",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}