import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import LatestInsikter from "@/components/LatestInsikter";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";

const baseMetadata = createPageMetadata({
  title: "Stiftelser i Sverige – komplett guide",
  description:
    "Komplett guide om att starta, driva och förvalta stiftelser i Sverige — stiftelselagen, skatteregler, kapitalberäkning och Sveriges mest aktiva stiftelser.",
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

// Rotsegmentet får inte layoutens title-template, så varumärket sätts explicit här.
export const metadata: Metadata = {
  ...baseMetadata,
  title: { absolute: "Stiftelser i Sverige – komplett guide | StiftelseGuiden.se" },
};

export default function Home() {
  return (
    <>
      <PageSchema
        title="StiftelseGuiden.se"
        description="Komplett guide om att starta, driva och förvalta stiftelser i Sverige — stiftelselagen, skatteregler, kapitalberäkning och Sveriges mest aktiva stiftelser."
        path="/"
      />
      <HomeContent />
      <LatestInsikter />
    </>
  );
}
