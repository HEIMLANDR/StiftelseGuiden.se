import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
  type BreadcrumbItem,
  type CollectionItem,
  type FAQItem,
} from "@/lib/seo";

type PageSchemaProps = {
  title: string;
  description: string;
  path: string;
  pageType?: "WebPage" | "CollectionPage" | "ContactPage";
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
  collectionItems?: CollectionItem[];
  dateModified?: string;
};

function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SitewideSchema() {
  return (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            description: SITE_DESCRIPTION,
            inLanguage: "sv-SE",
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: SITE_URL,
            description: SITE_DESCRIPTION,
            foundingDate: "2025",
          },
        ],
      }}
    />
  );
}

export function PageSchema({
  title,
  description,
  path,
  pageType = "WebPage",
  breadcrumbs = [],
  faq = [],
  collectionItems = [],
  dateModified,
}: PageSchemaProps) {
  const pageUrl = toAbsoluteUrl(path);
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": pageType,
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: "sv-SE",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
      },
    },
  ];

  if (dateModified) {
    graph[0].dateModified = dateModified;
  }

  if (breadcrumbs.length > 0) {
    graph[0].breadcrumb = { "@id": breadcrumbId };

    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hem",
          item: SITE_URL,
        },
        ...breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: item.label,
          item:
            index === breadcrumbs.length - 1
              ? pageUrl
              : toAbsoluteUrl(item.href || path),
        })),
      ],
    });
  }

  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (collectionItems.length > 0) {
    graph.push({
      "@type": "ItemList",
      "@id": `${pageUrl}#items`,
      name: title,
      numberOfItems: collectionItems.length,
      itemListElement: collectionItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
        ...(item.url ? { item: toAbsoluteUrl(item.url) } : {}),
      })),
    });
  }

  return <StructuredData data={{ "@context": "https://schema.org", "@graph": graph }} />;
}