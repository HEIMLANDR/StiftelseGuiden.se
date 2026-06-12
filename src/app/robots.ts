import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/form.html"],
    },
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      // Networkr's always-fresh blog sitemap — the static export's own sitemap
      // only updates on rebuild, which proxy delivery no longer triggers.
      "https://api.networkr.dev/api/blog/stiftelseguiden-se/sitemap.xml",
    ],
    host: SITE_URL,
  };
}