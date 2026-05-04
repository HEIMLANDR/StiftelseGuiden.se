const API_BASE = (process.env.NETWORKR_API || "https://api.networkr.dev").replace(/\/$/, "");
const SITE_ID = process.env.NETWORKR_SITE_ID || "stiftelseguiden-se";
const KEY = process.env.NETWORKR_KEY;

// Display byline overrides — Networkr stores "StiftelseGuiden" as a brand
// byline; we present articles as the editorial team for clearer authorship.
export const EDITORIAL_BYLINE = "StiftelseGuiden-redaktionen";
export const EDITORIAL_BIO =
  "Redaktionen bakom StiftelseGuiden — Sveriges guide till stiftelser, fonder och bidrag.";
export const EDITORIAL_URL_PATH = "/om/redaktionen/";

function applyByline<T extends { author?: NetworkrAuthor }>(item: T): T {
  if (!item?.author) return item;
  return {
    ...item,
    author: {
      ...item.author,
      name: EDITORIAL_BYLINE,
      bio: EDITORIAL_BIO,
      website: item.author.website ?? null,
    },
  };
}

export type NetworkrAuthor = {
  name: string;
  slug: string;
  bio: string | null;
  avatar_url: string | null;
  website: string | null;
  twitter: string | null;
  linkedin: string | null;
  github: string | null;
};

export type NetworkrPostSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string | null;
  tags: string[];
  cover_image_url: string | null;
  meta_description: string | null;
  reading_time: number;
  word_count: number;
  published_at: string;
  post_type: string;
  author: NetworkrAuthor;
};

export type NetworkrPost = NetworkrPostSummary & {
  body_html: string;
  meta_title: string | null;
  updated_at: string;
  created_at: string;
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
  related: Array<{ slug: string; title: string; excerpt?: string }>;
  structured_data: unknown[] | Record<string, unknown> | null;
  transparency: {
    ai_assisted: boolean;
    author_name: string;
    site_name: string;
    content_policy_url: string | null;
    disclosure: string;
  } | null;
};

export type NetworkrSiteEnvelope = {
  id: string;
  name: string;
  domain: string;
  blog_path?: string;
  publisher?: { name: string; url: string };
  author: NetworkrAuthor;
};

function ensureKey(): string {
  if (!KEY) {
    throw new Error(
      "NETWORKR_KEY is not set. Add it to .env.local (run `npx networkr install` if missing).",
    );
  }
  return KEY;
}

async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { Authorization: `Bearer ${ensureKey()}` },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`Networkr ${path} → HTTP ${res.status}`);
  }

  return res.json() as Promise<T>;
}

let postsCache: Promise<NetworkrPostSummary[]> | null = null;

export async function getPosts(): Promise<NetworkrPostSummary[]> {
  if (!postsCache) {
    postsCache = request<{ posts: NetworkrPostSummary[] }>(
      `/api/blog/${SITE_ID}/posts?limit=200`,
    ).then((data) => data.posts.map(applyByline));
  }
  return postsCache;
}

export async function getPost(slug: string): Promise<{ site: NetworkrSiteEnvelope; post: NetworkrPost }> {
  const data = await request<{ site: NetworkrSiteEnvelope; post: NetworkrPost }>(
    `/api/blog/${SITE_ID}/posts/${slug}`,
  );
  const post = applyByline(data.post);
  if (post.transparency) {
    post.transparency = {
      ...post.transparency,
      author_name: EDITORIAL_BYLINE,
      disclosure: post.transparency.disclosure.replace(
        /\bStiftelseGuiden\b/g,
        EDITORIAL_BYLINE,
      ),
    };
  }
  return { site: data.site, post };
}

export function absoluteImageUrl(path: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${API_BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}

export const NETWORKR_API_BASE = API_BASE;
