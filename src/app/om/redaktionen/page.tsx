import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import { PageSchema } from "@/components/SeoSchema";
import {
  SITE_NAME,
  SITE_URL,
  createPageMetadata,
  toAbsoluteUrl,
} from "@/lib/seo";

const TITLE = "Om redaktionen";
const DESCRIPTION =
  "StiftelseGuiden-redaktionen står bakom innehållet på sajten. Här beskriver vi hur vi arbetar, hur vi använder AI-stöd och vem som tar redaktionellt ansvar.";
const PAGE_PATH = "/om/redaktionen/";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "om stiftelseguiden, redaktionen stiftelseguiden, redaktionellt ansvar, ansvarig utgivare, AI-assisterat innehåll",
  path: PAGE_PATH,
});

function RedaktionenSchema() {
  const pageUrl = toAbsoluteUrl(PAGE_PATH);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${pageUrl}#redaktionen`,
        name: "StiftelseGuiden-redaktionen",
        description:
          "Redaktionen bakom StiftelseGuiden — Sveriges guide till stiftelser, fonder och bidrag.",
        url: pageUrl,
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        publishingPrinciples: pageUrl,
        knowsAbout: [
          "Stiftelser",
          "Fonder",
          "Bidrag",
          "Stiftelselagen",
          "Skatteregler för stiftelser",
          "Filantropi",
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RedaktionenPage() {
  return (
    <>
      <PageSchema
        title={TITLE}
        description={DESCRIPTION}
        path={PAGE_PATH}
        breadcrumbs={[
          { label: "Om", href: "/om/" },
          { label: "Redaktionen" },
        ]}
      />
      <RedaktionenSchema />

      <Hero
        title="Om redaktionen"
        subtitle="StiftelseGuiden-redaktionen står bakom innehållet på sajten — så här arbetar vi."
        size="small"
        pattern="dots"
      />

      <Breadcrumb
        items={[{ label: "Om", href: "/om" }, { label: "Redaktionen" }]}
      />

      <div className="container-padded">
        <div className="max-w-3xl mx-auto py-8 md:py-12 article-prose">
          <h2>Vilka vi är</h2>
          <p>
            StiftelseGuiden är en oberoende guide till svenska stiftelser, fonder och
            bidrag. Redaktionen bevakar löpande utvecklingen inom stiftelseförvaltning,
            stiftelselagen, skatteregler och filantropi i Sverige — och översätter den
            till praktiska guider, analyser och insikter för stiftelsebildare,
            styrelseledamöter, förvaltare och bidragssökande.
          </p>

          <h2>Hur vi arbetar</h2>
          <p>
            Innehållet på <Link href="/insikter/">Insikter</Link> tas fram med en kombination
            av AI-driven research och redaktionell granskning. Varje artikel utgår
            från aktuella nyheter, offentliga register och etablerad praxis inom
            stiftelseområdet. Vi hämtar källor i realtid från svenska och internationella
            nyhetsflöden, identifierar relevanta vinklar för svenska stiftelser, och
            genererar utkast som sedan struktureras enligt en redaktionell mall.
          </p>
          <p>
            AI-stöd används för datainsamling, sammanställning och utkast. Det
            redaktionella ansvaret — vilka ämnen som täcks, hur de presenteras och
            att innehållet är förenligt med svenska stiftelsers verklighet — ligger
            hos StiftelseGuiden-redaktionen. Vi anger AI-stöd öppet på varje artikel.
          </p>

          <h2>Vad du kan förvänta dig</h2>
          <ul>
            <li>
              <strong>Saklighet före åsikter.</strong> Vi prioriterar verifierbara
              fakta, lagrum och offentlig statistik framför subjektiva omdömen.
            </li>
            <li>
              <strong>Svenskt perspektiv.</strong> Innehållet utgår från svensk
              stiftelselag, Skatteverkets och Kammarkollegiets praxis, samt
              länsstyrelsens tillsynsroll.
            </li>
            <li>
              <strong>Inte juridisk rådgivning.</strong> Materialet är vägledande och
              ersätter inte rådgivning från en kvalificerad jurist eller revisor i
              det enskilda fallet.
            </li>
            <li>
              <strong>Transparens om AI-stöd.</strong> Vi berättar öppet att artiklar
              produceras med AI-assistans under redaktionell granskning.
            </li>
          </ul>

          <h2>Felaktigheter eller frågor</h2>
          <p>
            Hittar du något som verkar fel, eller vill du tipsa redaktionen om en
            vinkel? Hör av dig via <Link href="/kontakt/">kontaktsidan</Link> — vi
            uppskattar tips och rättelser.
          </p>

          <h2>Bakom sajten</h2>
          <p>
            {SITE_NAME} drivs av{" "}
            <a
              href="https://heimlandr.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              HEIMLANDR
            </a>
            . För frågor om redaktionellt innehåll, samarbeten eller partnerskap,
            använd <Link href="/kontakt/">kontaktsidan</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
