import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import PartnerCTA from "@/components/PartnerCTA";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata, type FAQItem } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Familjestiftelse – regler, skatt och när den passar",
  description:
    "Vad är en familjestiftelse? Så bildas den, så beskattas stiftelsen och mottagarna, och så skiljer den sig från allmännyttiga stiftelser. Komplett guide.",
  keywords:
    "familjestiftelse, familjestiftelse skatt, starta familjestiftelse, familjestiftelse beskattning, periodiskt understöd",
  path: "/stiftelser/familjestiftelse/",
  openGraphType: "article",
});

const faqItems: FAQItem[] = [
  {
    question: "Vad är en familjestiftelse?",
    answer:
      "En familjestiftelse är en stiftelse vars ändamål är att gynna en viss familj, vissa släktled eller andra bestämda fysiska personer. Den bildas på samma sätt som andra stiftelser – genom ett stiftelseförordnande och avskild egendom – men skiljer sig framför allt i skattereglerna och i att den normalt inte registreras i länsstyrelsens stiftelseregister.",
  },
  {
    question: "Hur beskattas en familjestiftelse?",
    answer:
      "En familjestiftelse är oinskränkt skattskyldig och betalar 20,6 procent statlig inkomstskatt på sina skattepliktiga inkomster, inklusive kapitalinkomster. Utbetalningar till familjemedlemmar behandlas som periodiskt understöd och beskattas som inkomst av tjänst hos mottagaren. Stiftelsen får normalt dra av periodiskt understöd till mottagare som fyllt 18 år och avslutat sin utbildning.",
  },
  {
    question: "Måste en familjestiftelse registreras?",
    answer:
      "En stiftelse vars tillgångar enligt förordnandet endast får användas till förmån för bestämda fysiska personer behöver inte registreras i stiftelseregistret hos länsstyrelsen. Den får i stället organisationsnummer från Skatteverket. Däremot måste även familjestiftelser anmäla verklig huvudman till Bolagsverket.",
  },
  {
    question: "Kan en familjestiftelse få skattelättnader?",
    answer:
      "Nej. Skattelättnaderna i 7 kap. inkomstskattelagen (inskränkt skattskyldighet) förutsätter ett allmännyttigt ändamål. En stiftelse som gynnar bestämda personer eller en familj uppfyller inte ändamålskravet och beskattas därför fullt ut.",
  },
  {
    question: "När är en familjestiftelse ett bra val?",
    answer:
      "Främst när man vill skydda och hålla ihop en förmögenhet över flera generationer, säkerställa långsiktigt stöd till familjemedlemmar eller skapa en struktur som inte kan påverkas av enskilda arvingars beslut. Eftersom arvs- och gåvoskatten är avskaffad i Sverige och stiftelsebildningen är oåterkallelig bör alternativen alltid utvärderas med professionell rådgivning först.",
  },
];

export default function FamiljestiftelsePage() {
  return (
    <>
      <PageSchema
        title="Familjestiftelse – regler, skatt och när den passar"
        description="Vad är en familjestiftelse? Så bildas den, så beskattas stiftelsen och mottagarna, och så skiljer den sig från allmännyttiga stiftelser."
        path="/stiftelser/familjestiftelse/"
        breadcrumbs={[
          { label: "Stiftelser", href: "/stiftelser/" },
          { label: "Familjestiftelse" },
        ]}
        faq={faqItems}
      />

      <Hero
        title="Familjestiftelse – så fungerar den"
        subtitle="Regler, beskattning och för- och nackdelar när stiftelsens ändamål är att gynna en familj eller bestämda personer"
        size="small"
        pattern="dots"
      />

      <Breadcrumb
        items={[
          { label: "Stiftelser", href: "/stiftelser/" },
          { label: "Familjestiftelse" },
        ]}
      />

      <div className="container-padded">
        {/* Table of Contents */}
        <div className="card bg-gray-50 mb-12">
          <h2 className="text-xl font-bold mb-4">Innehåll</h2>
          <ul className="space-y-2 text-primary-600">
            <li><a href="#vad-ar" className="hover:underline hover:text-primary-700">Vad är en familjestiftelse?</a></li>
            <li><a href="#bilda" className="hover:underline hover:text-primary-700">Så bildas en familjestiftelse</a></li>
            <li><a href="#skatt" className="hover:underline hover:text-primary-700">Beskattning av familjestiftelser</a></li>
            <li><a href="#anvandning" className="hover:underline hover:text-primary-700">När passar en familjestiftelse?</a></li>
            <li><a href="#jamforelse" className="hover:underline hover:text-primary-700">Familjestiftelse vs allmännyttig stiftelse</a></li>
            <li><a href="#vanliga-fragor" className="hover:underline hover:text-primary-700">Vanliga frågor</a></li>
          </ul>
        </div>

        <section id="vad-ar" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Vad är en familjestiftelse?
          </h2>
          <p className="mb-6">
            En familjestiftelse är en stiftelse vars ändamål är att gynna medlemmar av en viss
            familj, vissa släktled eller andra bestämda fysiska personer – till exempel att bekosta
            utbildning för stiftarens efterkommande eller ge ekonomiskt stöd till familjemedlemmar.
            Juridiskt är den en vanlig stiftelse enligt{" "}
            <Link href="/juridik/stiftelselagen/" className="text-primary-600 hover:underline">
              stiftelselagen (1994:1220)
            </Link>
            : egendom avskiljs genom ett stiftelseförordnande för att varaktigt förvaltas för det
            bestämda ändamålet, utan ägare och utan medlemmar.
          </p>
          <p className="mb-6">
            Det som skiljer familjestiftelsen från andra stiftelser är framför allt två saker:
            skattereglerna – familjestiftelser beskattas fullt ut – och undantaget från
            registrering i länsstyrelsens stiftelseregister.
          </p>
        </section>

        <section id="bilda" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Så bildas en familjestiftelse
          </h2>
          <p className="mb-6">
            En familjestiftelse bildas på samma sätt som andra stiftelser: genom ett skriftligt
            stiftelseförordnande (till exempel gåvobrev eller testamente) där egendom avskiljs för
            ändamålet, och genom att någon åtar sig att förvalta egendomen. Hela processen
            beskriver vi steg för steg i guiden{" "}
            <Link href="/starta-stiftelse/" className="text-primary-600 hover:underline">
              starta stiftelse
            </Link>
            . Några punkter är särskilt viktiga just för familjestiftelser:
          </p>
          <div className="space-y-4 mb-8">
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Destinatärkretsen ska vara tydlig</h3>
              <p className="text-gray-700 text-sm">
                Förordnandet bör tydligt ange vilka som kan få medel (t.ex. &quot;stiftarens
                bröstarvingar och deras avkomlingar&quot;), vad medlen får användas till och hur
                utbetalningar ska beslutas. Otydliga skrivningar skapar konflikter och kan i värsta
                fall göra förordnandet overkställbart.
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Ingen registrering hos länsstyrelsen – men Skatteverket och Bolagsverket</h3>
              <p className="text-gray-700 text-sm">
                En stiftelse vars tillgångar endast får användas till förmån för bestämda fysiska
                personer är undantagen från registreringsskyldigheten i stiftelseregistret. Den
                ansöker i stället om organisationsnummer hos Skatteverket – och måste liksom alla
                stiftelser anmäla verklig huvudman till Bolagsverket.
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Beslutet är oåterkalleligt</h3>
              <p className="text-gray-700 text-sm">
                Egendomen som avskiljs tillhör stiftelsen för alltid. Stiftaren kan inte ta
                tillbaka kapitalet, och ändamålet kan bara ändras genom permutation hos
                Kammarkollegiet – vilket kräver synnerliga skäl.
              </p>
            </div>
          </div>
        </section>

        <section id="skatt" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Beskattning av familjestiftelser
          </h2>
          <p className="mb-6">
            Skatten är den viktigaste skillnaden mot allmännyttiga stiftelser. Eftersom en
            familjestiftelse gynnar bestämda personer uppfyller den inte ändamålskravet i 7 kap.
            inkomstskattelagen och kan aldrig bli inskränkt skattskyldig:
          </p>
          <div className="space-y-4 mb-8">
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Stiftelsens skatt</h3>
              <p className="text-gray-700 text-sm">
                Familjestiftelsen är oinskränkt skattskyldig och betalar 20,6 % statlig
                inkomstskatt på sina skattepliktiga inkomster – räntor, utdelningar, kapitalvinster
                och eventuell näringsverksamhet. Någon schablonbeskattning av förmögenheten
                förekommer inte.
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Mottagarnas skatt</h3>
              <p className="text-gray-700 text-sm">
                Utbetalningar från en familjestiftelse behandlas som periodiskt understöd och
                beskattas som inkomst av tjänst hos mottagaren – det gäller även
                engångsutbetalningar. Mottagaren betalar alltså sin marginalskatt på beloppet.
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Stiftelsens avdragsrätt</h3>
              <p className="text-gray-700 text-sm">
                Stiftelsen får normalt göra avdrag för periodiskt understöd – men bara för
                utbetalningar till mottagare som har fyllt 18 år och som inte längre går i skola
                eller studerar. Stöd till minderåriga eller studerande familjemedlemmar är därmed
                inte avdragsgillt för stiftelsen.
              </p>
            </div>
            <div className="card bg-warning-50 border border-warning-100">
              <h3 className="text-lg font-semibold mb-2 text-primary-900">Dubbel skatteeffekt i praktiken</h3>
              <p className="text-gray-700 text-sm">
                Kombinationen av stiftelsens inkomstskatt och tjänstebeskattningen hos mottagarna
                gör att det totala skatteuttaget kan bli högt. Kalkylera alltid helheten – och läs
                gärna vår genomgång av{" "}
                <Link href="/resurser/skatteoptimering/" className="text-primary-600 hover:underline">
                  skatteregler för stiftelser
                </Link>{" "}
                – innan du väljer strukturen.
              </p>
            </div>
          </div>
        </section>

        <section id="anvandning" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            När passar en familjestiftelse?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-3 text-success-600">Styrkor</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>Håller ihop en förmögenhet över generationer – kapitalet kan inte skingras genom arv eller skilsmässor</li>
                <li>Långsiktigt, förutsägbart stöd till familjemedlemmar enligt stiftarens vilja</li>
                <li>Skydd mot enskilda familjemedlemmars borgenärer och impulsbeslut</li>
                <li>Professionell förvaltning kan säkras genom förordnandets föreskrifter</li>
              </ul>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-3 text-error-600">Svagheter</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                <li>Oåterkalleligt – stiftaren avstår kapitalet för alltid</li>
                <li>Full beskattning av stiftelsen plus tjänstebeskattning hos mottagarna</li>
                <li>Ingen flexibilitet: ändamålet kan bara ändras genom permutation med synnerliga skäl</li>
                <li>Eftersom arvs- och gåvoskatten är avskaffad kan direktöverföringar eller andra strukturer ofta vara enklare och billigare</li>
              </ul>
            </div>
          </div>
          <p className="mb-6 text-sm text-gray-600">
            Upplägg med familjestiftelser – särskilt utländska – prövas återkommande mot bland
            annat skatteflyktslagen. Ta alltid hjälp av skattejurist innan du bildar en
            familjestiftelse.
          </p>
        </section>

        <section id="jamforelse" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Familjestiftelse vs allmännyttig stiftelse
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold"></th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Familjestiftelse</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Allmännyttig stiftelse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                <tr>
                  <td className="px-4 py-3 font-medium text-primary-900">Ändamål</td>
                  <td className="px-4 py-3">Bestämda personer/familj</td>
                  <td className="px-4 py-3">Allmännyttigt (forskning, utbildning, hjälpverksamhet m.m.)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-primary-900">Skattskyldighet</td>
                  <td className="px-4 py-3">Oinskränkt – 20,6 % på alla skattepliktiga inkomster</td>
                  <td className="px-4 py-3">Kan bli inskränkt skattskyldig – kapitalinkomster skattefria</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-primary-900">Mottagarens skatt</td>
                  <td className="px-4 py-3">Inkomst av tjänst (periodiskt understöd)</td>
                  <td className="px-4 py-3">Stipendier för utbildning är normalt skattefria</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-primary-900">Registrering</td>
                  <td className="px-4 py-3">Undantagen stiftelseregistret; org.nr via Skatteverket</td>
                  <td className="px-4 py-3">Registreras hos länsstyrelsen inom sex månader</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-primary-900">Verklig huvudman</td>
                  <td className="px-4 py-3">Ska anmälas till Bolagsverket</td>
                  <td className="px-4 py-3">Ska anmälas till Bolagsverket</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-6">
            Vill du jämföra fler stiftelsetyper sida vid sida kan du använda vårt{" "}
            <Link href="/verktyg/" className="text-primary-600 hover:underline">
              interaktiva jämförelseverktyg
            </Link>{" "}
            eller läsa översikten över{" "}
            <Link href="/stiftelser/" className="text-primary-600 hover:underline">
              olika typer av stiftelser
            </Link>
            .
          </p>
        </section>

        <section id="vanliga-fragor" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Vanliga frågor om familjestiftelser
          </h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="card bg-white">
                <h3 className="text-lg font-semibold mb-2 text-primary-900">{item.question}</h3>
                <p className="text-gray-700 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-16">
          <PartnerCTA
            campaign="familjestiftelse"
            placement="bottom"
            heading="Letar du i stället efter stipendier och bidrag?"
            body="Tusentals svenska stiftelser delar varje år ut medel till privatpersoner, studerande och organisationer. Sök gratis bland över 17 000 stiftelser och hitta stöd som passar dig."
          />
        </div>
      </div>
    </>
  );
}
