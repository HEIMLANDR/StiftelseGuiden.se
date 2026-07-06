import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { PageSchema } from "@/components/SeoSchema";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
} from "@/lib/seo";
import {
  absoluteImageUrl,
  EDITORIAL_URL_PATH,
  getPost,
  getPosts,
  type NetworkrPost,
} from "@/lib/networkr";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

const SV_DATE = new Intl.DateTimeFormat("sv-SE", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function formatDate(value: string) {
  const date = new Date(value.replace(" ", "T"));
  if (Number.isNaN(date.getTime())) return value;
  return SV_DATE.format(date);
}

function toIso(value: string) {
  const date = new Date(value.replace(" ", "T"));
  return Number.isNaN(date.getTime()) ? value : date.toISOString();
}

async function loadPost(slug: string): Promise<NetworkrPost | null> {
  try {
    const { post } = await getPost(slug);
    return post;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return {};

  const path = `/insikter/${post.slug}/`;
  const canonical = toAbsoluteUrl(path);
  const description = post.meta_description || post.excerpt;
  const title = post.meta_title || post.title;
  const socialTitle = `${title} | ${SITE_NAME}`;
  const cover = absoluteImageUrl(post.cover_image_url) || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords: post.tags?.join(", "),
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "sv_SE",
      url: canonical,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [{ url: cover, alt: title }],
      publishedTime: toIso(post.published_at),
      modifiedTime: toIso(post.updated_at),
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [cover],
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

function ArticleSchema({ post }: { post: NetworkrPost }) {
  const url = toAbsoluteUrl(`/insikter/${post.slug}/`);
  const cover = absoluteImageUrl(post.cover_image_url) || DEFAULT_OG_IMAGE;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.meta_description || post.excerpt,
    inLanguage: "sv-SE",
    datePublished: toIso(post.published_at),
    dateModified: toIso(post.updated_at),
    wordCount: post.word_count,
    keywords: post.tags?.join(", "),
    image: { "@type": "ImageObject", url: cover },
    author: {
      "@type": "Organization",
      "@id": `${toAbsoluteUrl(EDITORIAL_URL_PATH)}#redaktionen`,
      name: post.author.name,
      url: toAbsoluteUrl(EDITORIAL_URL_PATH),
      ...(post.author.bio ? { description: post.author.bio } : {}),
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}#webpage` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function InsiktPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  const path = `/insikter/${post.slug}/`;
  const cover = absoluteImageUrl(post.cover_image_url);
  const description = post.meta_description || post.excerpt;

  return (
    <>
      <PageSchema
        title={post.title}
        description={description}
        path={path}
        breadcrumbs={[
          { label: "Insikter", href: "/insikter/" },
          { label: post.title },
        ]}
        dateModified={toIso(post.updated_at)}
      />
      <ArticleSchema post={post} />

      <Breadcrumb
        items={[
          { label: "Insikter", href: "/insikter" },
          { label: post.title },
        ]}
      />

      <article className="container-padded">
        <div className="max-w-3xl mx-auto py-8 md:py-12">
          <header className="mb-8">
            <div className="text-xs uppercase tracking-wide text-primary-600 font-semibold mb-3">
              {post.category || "Insikt"} · {post.reading_time} min läsning
            </div>
            <h1 className="mb-4 text-balance">{post.title}</h1>
            <p className="text-lg mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 border-y border-gray-200 py-3">
              <span>Av {post.author.name}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={toIso(post.published_at)}>
                Publicerad {formatDate(post.published_at)}
              </time>
              {post.updated_at && post.updated_at !== post.published_at && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={toIso(post.updated_at)}>
                    Uppdaterad {formatDate(post.updated_at)}
                  </time>
                </>
              )}
            </div>
          </header>

          {cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cover}
              alt={post.title}
              className="w-full rounded-xl border border-gray-200 mb-8"
            />
          )}

          <div
            className="article-prose"
            dangerouslySetInnerHTML={{ __html: post.body_html }}
          />

          {post.tags?.length > 0 && (
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-3">
                Taggar
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-primary-50 text-primary-700 rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {post.transparency?.disclosure && (
            <aside className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600">
              <strong className="block mb-1 text-gray-700">Transparens</strong>
              {post.transparency.disclosure}
            </aside>
          )}

          {(post.prev || post.next) && (
            <nav
              aria-label="Fler artiklar"
              className="mt-10 grid gap-4 md:grid-cols-2"
            >
              {post.prev && (
                <Link
                  href={`/insikter/${post.prev.slug}/`}
                  className="card card-hover"
                >
                  <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                    ← Föregående
                  </div>
                  <div className="font-medium">{post.prev.title}</div>
                </Link>
              )}
              {post.next && (
                <Link
                  href={`/insikter/${post.next.slug}/`}
                  className="card card-hover md:text-right md:ml-auto"
                >
                  <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                    Nästa →
                  </div>
                  <div className="font-medium">{post.next.title}</div>
                </Link>
              )}
            </nav>
          )}

          {post.related?.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Relaterade insikter</h2>
              <ul className="space-y-3">
                {post.related.map((rel) => (
                  <li key={rel.slug}>
                    <Link
                      href={`/insikter/${rel.slug}/`}
                      className="text-primary-700 hover:text-primary-800 hover:underline font-medium"
                    >
                      {rel.title}
                    </Link>
                    {rel.excerpt && (
                      <p className="text-sm text-gray-600 mt-1">{rel.excerpt}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
