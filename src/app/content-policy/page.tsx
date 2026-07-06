import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Innehållspolicy",
  description:
    "Så arbetar StiftelseGuiden.se med innehåll: källor, faktagranskning, användning av AI-stöd och hur du rapporterar felaktigheter.",
  path: "/content-policy/",
});

export default function ContentPolicyPage() {
  return (
    <>
      <PageSchema
        title="Innehållspolicy"
        description="Så arbetar StiftelseGuiden.se med innehåll: källor, faktagranskning, användning av AI-stöd och hur du rapporterar felaktigheter."
        path="/content-policy/"
        breadcrumbs={[{ label: "Innehållspolicy" }]}
      />

      <Hero
        title="Innehållspolicy"
        subtitle="Så tar vi fram, granskar och uppdaterar innehållet på StiftelseGuiden.se"
        size="small"
        pattern="dots"
      />

      <Breadcrumb items={[{ label: "Innehållspolicy" }]} />

      <div className="container-padded">
        <div className="max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Vårt uppdrag</h2>
            <p className="mb-4">
              StiftelseGuiden.se är en oberoende informationsresurs om svenska stiftelser. Vårt mål
              är att göra stiftelsejuridik, skatteregler och praktisk förvaltning begriplig för
              stiftare, styrelseledamöter och den som söker stiftelsemedel.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Källor och faktagranskning</h2>
            <p className="mb-4">
              Innehållet bygger på officiella källor: författningstexter från Sveriges riksdag
              (bland annat stiftelselagen 1994:1220 och inkomstskattelagen 1999:1229), Skatteverkets
              rättsliga vägledning samt information från länsstyrelserna, Kammarkollegiet och
              Bolagsverket. Där rättsläget bygger på praxis snarare än lagtext – till exempel
              tumregler om lämpligt stiftelsekapital – anger vi det uttryckligen.
            </p>
            <p className="mb-4">
              Vi ser regelbundet över innehållet när reglerna ändras, senast med anledning av
              ändringarna i stiftelselagen som trädde i kraft den 1 januari 2025. Läs mer i vår{" "}
              <Link href="/juridik/stiftelselagen/" className="text-primary-600 hover:underline">
                guide till stiftelselagen
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Användning av AI-stöd</h2>
            <p className="mb-4">
              Delar av innehållet tas fram med stöd av AI-verktyg och granskas redaktionellt före
              publicering. Mer om hur vi arbetar finns på sidan{" "}
              <Link href="/om/redaktionen/" className="text-primary-600 hover:underline">
                om redaktionen
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Inte rådgivning</h2>
            <p className="mb-4">
              Innehållet på StiftelseGuiden.se är allmän information och ersätter inte juridisk,
              skattemässig eller ekonomisk rådgivning. Kontakta alltid en kvalificerad rådgivare
              innan du fattar beslut i enskilda fall.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Annonsering och partnerskap</h2>
            <p className="mb-4">
              StiftelseGuiden.se samarbetar med SökaStiftelseMedel.se, en söktjänst för
              stiftelsemedel. Länkar till samarbetspartners är tydligt markerade. Samarbeten
              påverkar inte det redaktionella innehållets saklighet.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Rapportera felaktigheter</h2>
            <p className="mb-4">
              Hittar du något som är fel, inaktuellt eller otydligt? Hör av dig via{" "}
              <Link href="/kontakt/" className="text-primary-600 hover:underline">
                kontaktsidan
              </Link>{" "}
              så rättar vi skyndsamt.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
