import type { Metadata, MetadataRoute } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://stiftelseguiden.se";
export const SITE_NAME = "StiftelseGuiden.se";
export const SITE_DESCRIPTION =
  "Sveriges ledande resurs om stiftelser. Komplett guide om att starta, driva och förvalta stiftelser i Sverige.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/pictures/image.png`;
export const LAST_MAJOR_UPDATE = "2026-04-14";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type CollectionItem = {
  name: string;
  url?: string;
  description?: string;
};

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

type SeoRoute = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
};

export const SEO_ROUTES: SeoRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/starta-stiftelse/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/driva-stiftelse/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/stiftelser/", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/stiftelser/aktiva-stiftelser/",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/juridik/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resurser/", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/resurser/ansokningsguide/",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/resurser/skatteoptimering/",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/resurser/stiftelseordlista/",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/resurser/tips-och-trix/",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  { path: "/dokument/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/verktyg/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/kontakt/", priority: 0.5, changeFrequency: "yearly" },
];

export function normalizePath(path: string) {
  if (!path || path === "/") return "/";

  return `/${path.replace(/^\/+|\/+$/g, "")}/`;
}

export function toAbsoluteUrl(path: string) {
  return new URL(normalizePath(path), `${SITE_URL}/`).toString();
}

type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[] | string;
  openGraphType?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  openGraphType = "website",
}: CreatePageMetadataInput): Metadata {
  const canonical = toAbsoluteUrl(path);
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: openGraphType,
      locale: "sv_SE",
      url: canonical,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1069,
          height: 376,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}