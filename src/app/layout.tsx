import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://stiftelseguiden.se";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A7AFF",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "StiftelseGuiden.se | Sveriges mest kompletta guide om stiftelser",
    template: "%s | StiftelseGuiden.se",
  },
  description:
    "Sveriges ledande resurs om stiftelser. Komplett guide om att starta, driva och förvalta stiftelser. Juridik, skatteregler, kapitalberäkning, dokumentmallar och databas med 100+ aktiva stiftelser.",
  keywords: [
    "stiftelse",
    "starta stiftelse",
    "svensk stiftelse",
    "stiftelsebildning",
    "stiftelsejuridik",
    "skatt stiftelse",
    "stiftelselagen",
    "stiftelseförordningen",
    "stiftelsemedel",
    "familjestiftelse",
    "allmännyttig stiftelse",
    "stiftelse Sverige",
    "stiftelsekapital",
    "stiftelseförvaltning",
    "driva stiftelse",
    "ansöka stiftelsemedel",
  ],
  authors: [{ name: "heimlandr.io", url: "https://heimlandr.io" }],
  creator: "heimlandr.io",
  publisher: "StiftelseGuiden.se",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: siteUrl,
    siteName: "StiftelseGuiden.se",
    title: "StiftelseGuiden.se | Sveriges mest kompletta guide om stiftelser",
    description:
      "Allt du behöver veta om att starta, driva och förvalta stiftelser i Sverige. Juridik, skatt, kapitalberäkning, mallar och 100+ aktiva stiftelser.",
  },
  twitter: {
    card: "summary_large_image",
    title: "StiftelseGuiden.se | Sveriges mest kompletta guide om stiftelser",
    description:
      "Allt du behöver veta om att starta, driva och förvalta stiftelser i Sverige.",
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
  category: "education",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "StiftelseGuiden.se",
      description:
        "Sveriges mest kompletta guide om stiftelser - starta, driva och förvalta stiftelser.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "sv-SE",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "StiftelseGuiden.se",
      url: siteUrl,
      description:
        "Sveriges ledande informationsresurs om stiftelser, stiftelsebildning och stiftelseförvaltning.",
      foundingDate: "2025",
      sameAs: [],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "StiftelseGuiden.se | Sveriges mest kompletta guide om stiftelser",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "Komplett guide om att starta, driva och förvalta stiftelser i Sverige. Juridik, skatteregler, kapitalberäkning och dokumentmallar.",
      inLanguage: "sv-SE",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-gray-50 text-primary-900 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
