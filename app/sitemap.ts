import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

const BASE_URL = "https://gwsoochoi.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1.0,
  }));
}
