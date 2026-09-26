import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/black-screen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/black-screen`,
          de: `${SITE_URL}/de`,
        },
      },
    },
    {
      url: `${SITE_URL}/white-screen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/white-screen`,
          de: `${SITE_URL}/de`,
        },
      },
    },
    {
      url: `${SITE_URL}/de`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${SITE_URL}/de`,
          en: `${SITE_URL}/black-screen`,
        },
      },
    },
  ];
}
