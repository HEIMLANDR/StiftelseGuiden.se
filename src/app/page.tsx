import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "StiftelseGuiden.se | Sveriges mest kompletta guide om stiftelser",
  description:
    "Allt du behöver veta om att starta, driva och förvalta stiftelser i Sverige. Komplett guide med juridik, skatteregler, kapitalberäkning, dokumentmallar och databas med 100+ aktiva stiftelser.",
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
  alternates: {
    canonical: "https://stiftelseguiden.se/",
  },
};

export default function Home() {
  return <HomeContent />;
}
