import type { MetadataRoute } from "next";
import { LAST_MAJOR_UPDATE, SEO_ROUTES, toAbsoluteUrl } from "@/lib/seo";
import { getPosts } from "@/lib/networkr";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = SEO_ROUTES.map((route) => ({
    url: toAbsoluteUrl(route.path),
    lastModified: LAST_MAJOR_UPDATE,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPosts();
    postEntries = posts.map((post) => ({
      url: toAbsoluteUrl(`/insikter/${post.slug}/`),
      lastModified: new Date(post.published_at.replace(" ", "T")),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch (err) {
    console.warn("[sitemap] failed to fetch Networkr posts:", (err as Error).message);
  }

  return [...staticEntries, ...postEntries];
}
