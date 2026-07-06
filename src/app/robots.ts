import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

// AI-crawlers tillåts uttryckligen: sajten vill synas i AI-svar (AEO).
// Se även /llms.txt.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "CCBot",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/form.html"],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      // Networkr's always-fresh blog sitemap — the static export's own sitemap
      // only updates on rebuild, which proxy delivery no longer triggers.
      "https://api.networkr.dev/api/blog/stiftelseguiden-se/sitemap.xml",
    ],
    host: SITE_URL,
  };
}
