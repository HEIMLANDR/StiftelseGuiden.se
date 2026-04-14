import type { MetadataRoute } from "next";
import { LAST_MAJOR_UPDATE, SEO_ROUTES, toAbsoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return SEO_ROUTES.map((route) => ({
    url: toAbsoluteUrl(route.path),
    lastModified: LAST_MAJOR_UPDATE,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}