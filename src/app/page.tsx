import HomeContent from "@/components/HomeContent";
import LatestInsikter from "@/components/LatestInsikter";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sveriges mest kompletta guide om stiftelser",
  description:
    "Komplett guide om att starta, driva och förvalta stiftelser i Sverige — juridik, skatteregler, kapitalberäkning, dokumentmallar och 100+ aktiva stiftelser.",
  keywords: [
    "stiftelse",
    "starta stiftelse",
    "svensk stiftelse",
    "stiftelsebildning",
    "stiftelsejuridik",
    "skatt stiftelse",
    "stiftelselagen",
    "stiftelsemedel",
    "stiftelsekapital",
    "stiftelseförvaltning",
  ],
  path: "/",
});

export default function Home() {
  return (
    <>
      <PageSchema
        title="StiftelseGuiden.se"
        description="Komplett guide om att starta, driva och förvalta stiftelser i Sverige — juridik, skatteregler, kapitalberäkning, dokumentmallar och 100+ aktiva stiftelser."
        path="/"
      />
      <HomeContent />
      <LatestInsikter />
    </>
  );
}
