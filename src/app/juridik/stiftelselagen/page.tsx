import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import PartnerCTA from "@/components/PartnerCTA";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata, type FAQItem } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Stiftelselagen (1994:1220) – komplett guide",
  description:
    "Allt om stiftelselagen: hur en stiftelse bildas, styrelsens ansvar, registrering, tillsyn och de nya reglerna från 2025 – kapitel för kapitel, enkelt förklarat.",
  keywords:
    "stiftelselagen, stiftelselag 1994:1220, stiftelselagen sammanfattning, nya regler stiftelser 2025, stiftelseförordningen",
  path: "/juridik/stiftelselagen/",
  openGraphType: "article",
});

const faqItems: FAQItem[] = [
  {
    question: "Vad är stiftelselagen?",
    answer:
      "Stiftelselagen (1994:1220) är den lag som reglerar svenska stiftelser. Den innehåller regler om hur en stiftelse bildas, hur den ska förvaltas, krav på bokföring, årsredovisning och revision, hur föreskrifter kan ändras samt hur stiftelser står under länsstyrelsens tillsyn. Lagen trädde i kraft den 1 januari 1996.",
  },
  {
    question: "Vilka stiftelser omfattas av stiftelselagen?",
    answer:
      "I princip alla svenska stiftelser omfattas, inklusive insamlingsstiftelser och kollektivavtalsstiftelser som regleras särskilt i 11 kap. Pensionsstiftelser och personalstiftelser regleras dock huvudsakligen av tryggandelagen (1967:531) i stället.",
  },
  {
    question: "Vad ändrades i stiftelselagen 2025?",
    answer:
      "Från den 1 januari 2025 gäller flera nyheter: stiftelser som upprättar årsredovisning måste skicka in den och revisionsberättelsen till länsstyrelsen inom sex månader efter räkenskapsårets utgång, annars tas en förseningsavgift på 7 500 kr ut (och ytterligare 15 000 kr vid mer än fyra månaders försening). Dessutom infördes ett förbud mot ställföreträdarjäv och en skyldighet för revisorer att agera vid misstänkt ekonomisk brottslighet. Samtidigt koncentrerades stiftelsetillsynen till sex länsstyrelser.",
  },
  {
    question: "Måste alla stiftelser registreras?",
    answer:
      "Ja, i princip. En stiftelse ska registreras i stiftelseregistret hos länsstyrelsen inom sex månader från bildandet. Undantaget är stiftelser vars tillgångar enligt stiftelseförordnandet endast får användas till förmån för bestämda fysiska personer, till exempel många familjestiftelser – de får i stället organisationsnummer från Skatteverket. Registreringen är kostnadsfri.",
  },
  {
    question: "Kan man ändra en stiftelses ändamål?",
    answer:
      "Bara i undantagsfall. Ändring av ändamålet kräver permutation, det vill säga tillstånd från Kammarkollegiet, och beviljas endast om det finns synnerliga skäl – till exempel att ändamålet inte längre kan uppfyllas. Andra föreskrifter kan i vissa fall ändras efter beslut av länsstyrelsen.",
  },
];

const chapters = [
  {
    number: "1 kap.",
    title: "Inledande bestämmelser",
    text: "Definierar vad en stiftelse är och hur den bildas: egendom avskiljs enligt ett stiftelseförordnande för att varaktigt förvaltas som självständig förmögenhet för ett bestämt ändamål. Här finns också reglerna om egen respektive anknuten förvaltning.",
  },
  {
    number: "2 kap.",
    title: "Förvaltning",
    text: "Styrelsens eller förvaltarens ansvar: att följa stiftelseförordnandet, placera förmögenheten på godtagbart sätt och inte betala ut medel i strid med ändamålet. Sedan 2025 finns här även ett uttryckligt förbud mot ställföreträdarjäv.",
  },
  {
    number: "3 kap.",
    title: "Bokföring och årsredovisning",
    text: "Vilka stiftelser som är bokföringsskyldiga och måste upprätta årsredovisning – bland annat stiftelser med tillgångar över 1,5 miljoner kronor, näringsdrivande stiftelser och insamlingsstiftelser.",
  },
  {
    number: "4 kap.",
    title: "Revision",
    text: "Alla stiftelser ska ha minst en revisor. Stiftelser som är skyldiga att upprätta årsredovisning måste ha en auktoriserad eller godkänd revisor. Sedan 2025 är revisorer också skyldiga att agera vid misstanke om ekonomisk brottslighet.",
  },
  {
    number: "5 kap.",
    title: "Skadestånd",
    text: "Styrelseledamöter, förvaltare och revisorer kan bli personligt skadeståndsskyldiga om de uppsåtligen eller av oaktsamhet skadar stiftelsen.",
  },
  {
    number: "6 kap.",
    title: "Ändring av föreskrifter (permutation)",
    text: "Reglerna för när en stiftelses föreskrifter får ändras. Ändring av ändamålet kräver tillstånd från Kammarkollegiet och synnerliga skäl; vissa andra ändringar prövas av länsstyrelsen.",
  },
  {
    number: "7 kap.",
    title: "Likvidation och upplösning",
    text: "Hur en stiftelse avvecklas, till exempel när tillgångarna inte längre räcker för att främja ändamålet eller när stiftelsen enligt förordnandet ska upphöra.",
  },
  {
    number: "8 kap.",
    title: "Stiftelses företagsnamn",
    text: "Regler om företagsnamn för stiftelser som bedriver näringsverksamhet.",
  },
  {
    number: "9 kap.",
    title: "Tillsyn",
    text: "Länsstyrelsens tillsyn över stiftelser: rätten att begära in handlingar, göra ingripanden och i allvarliga fall entlediga styrelseledamöter.",
  },
  {
    number: "10 kap.",
    title: "Registrering",
    text: "Skyldigheten att registrera stiftelsen i stiftelseregistret hos länsstyrelsen inom sex månader från bildandet, och vilka uppgifter registret innehåller.",
  },
  {
    number: "11 kap.",
    title: "Insamlings- och kollektivavtalsstiftelser",
    text: "Särskilda regler för insamlingsstiftelser (som bildas genom ett upprop) och kollektivavtalsstiftelser. Här finns bland annat kravet att minst tre fjärdedelar av en insamlingsstiftelses intäkter ska användas för ändamålet sett över tre år.",
  },
];

const lansstyrelser = [
  { office: "Länsstyrelsen i Stockholms län", covers: "Stockholms och Gotlands län" },
  { office: "Länsstyrelsen i Östergötlands län", covers: "Östergötlands, Jönköpings och Kalmar län" },
  { office: "Länsstyrelsen i Skåne län", covers: "Skåne, Blekinge och Kronobergs län" },
  { office: "Länsstyrelsen i Västra Götalands län", covers: "Västra Götalands och Hallands län" },
  { office: "Länsstyrelsen i Örebro län", covers: "Örebro, Dalarnas, Gävleborgs, Värmlands, Västmanlands, Södermanlands och Uppsala län" },
  { office: "Länsstyrelsen i Norrbottens län", covers: "Norrbottens, Västerbottens, Västernorrlands och Jämtlands län" },
];

export default function StiftelselagenPage() {
  return (
    <>
      <PageSchema
        title="Stiftelselagen (1994:1220) – komplett guide"
        description="Allt om stiftelselagen: hur en stiftelse bildas, styrelsens ansvar, registrering, tillsyn och de nya reglerna från 2025 – kapitel för kapitel, enkelt förklarat."
        path="/juridik/stiftelselagen/"
        breadcrumbs={[
          { label: "Juridik", href: "/juridik/" },
          { label: "Stiftelselagen" },
        ]}
        faq={faqItems}
      />

      <Hero
        title="Stiftelselagen – en komplett guide"
        subtitle="Så fungerar lagen (1994:1220) som styr svenska stiftelser: bildande, förvaltning, tillsyn och de nya reglerna från 2025"
        size="small"
        pattern="dots"
      />

      <Breadcrumb
        items={[
          { label: "Juridik", href: "/juridik/" },
          { label: "Stiftelselagen" },
        ]}
      />

      <div className="container-padded">
        {/* Table of Contents */}
        <div className="card bg-gray-50 mb-12">
          <h2 className="text-xl font-bold mb-4">Innehåll</h2>
          <ul className="space-y-2 text-primary-600">
            <li><a href="#vad-ar-stiftelselagen" className="hover:underline hover:text-primary-700">Vad är stiftelselagen?</a></li>
            <li><a href="#grundprinciper" className="hover:underline hover:text-primary-700">Grundprinciperna: så bildas en stiftelse</a></li>
            <li><a href="#kapitel" className="hover:underline hover:text-primary-700">Stiftelselagen kapitel för kapitel</a></li>
            <li><a href="#nya-regler-2025" className="hover:underline hover:text-primary-700">Nya regler från 2025</a></li>
            <li><a href="#tillsyn" className="hover:underline hover:text-primary-700">Vilken länsstyrelse har tillsyn?</a></li>
            <li><a href="#relaterade-lagar" className="hover:underline hover:text-primary-700">Relaterade lagar</a></li>
            <li><a href="#vanliga-fragor" className="hover:underline hover:text-primary-700">Vanliga frågor</a></li>
          </ul>
        </div>

        <section id="vad-ar-stiftelselagen" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Vad är stiftelselagen?
          </h2>
          <p className="mb-6">
            Stiftelselagen (1994:1220) är den centrala lagen för svenska stiftelser. Den trädde i
            kraft den 1 januari 1996 och ersatte 1929 års lag om tillsyn över stiftelser. Lagen
            reglerar hela stiftelsens livscykel: hur den bildas, hur styrelsen eller förvaltaren
            ska sköta förmögenheten, vilka krav som ställs på bokföring, årsredovisning och
            revision, hur föreskrifter kan ändras och hur en stiftelse till slut kan avvecklas.
          </p>
          <p className="mb-6">
            Det som gör stiftelsen unik som organisationsform är att den saknar både ägare och
            medlemmar. Stiftelsen &quot;äger sig själv&quot; och styrs av det ändamål som stiftaren
            en gång bestämde i stiftelseförordnandet. Just därför innehåller stiftelselagen
            ovanligt starka skyddsregler: ändamålet är i princip orubbligt, och staten utövar
            tillsyn genom länsstyrelserna. Vill du ha en bredare överblick över stiftelsejuridiken
            hittar du den i vår översikt på{" "}
            <Link href="/juridik/" className="text-primary-600 hover:underline">
              juridiksidan
            </Link>
            .
          </p>
          <div className="card bg-primary-50 border border-primary-100">
            <p className="text-sm text-gray-700">
              <strong>Läs lagtexten i sin helhet:</strong>{" "}
              <a
                href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/stiftelselag-19941220_sfs-1994-1220/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                Stiftelselag (1994:1220) hos Sveriges riksdag
              </a>
              . Kompletterande bestämmelser, bland annat om avgifter, finns i{" "}
              <a
                href="https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/stiftelseforordning-19951280_sfs-1995-1280/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                stiftelseförordningen (1995:1280)
              </a>
              .
            </p>
          </div>
        </section>

        <section id="grundprinciper" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Grundprinciperna: så bildas en stiftelse
          </h2>
          <p className="mb-6">
            Enligt 1 kap. 2 § stiftelselagen bildas en stiftelse genom att egendom enligt ett
            förordnande av en eller flera stiftare avskiljs för att varaktigt förvaltas som en
            självständig förmögenhet för ett bestämt ändamål. Tre saker måste alltså finnas på
            plats:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card card-hover bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">1. Stiftelseförordnande</h3>
              <p className="text-gray-700 text-sm">
                En skriftlig viljeförklaring från stiftaren – till exempel ett gåvobrev eller
                testamente – som anger ändamålet och att egendom avsätts för det.
              </p>
            </div>
            <div className="card card-hover bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">2. Avskild egendom</h3>
              <p className="text-gray-700 text-sm">
                Egendomen ska skiljas från stiftarens förmögenhet och tas om hand av någon som
                åtagit sig att förvalta den enligt förordnandet.
              </p>
            </div>
            <div className="card card-hover bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">3. Bestämt och varaktigt ändamål</h3>
              <p className="text-gray-700 text-sm">
                Ändamålet ska vara så tydligt att det går att verkställa, och förmögenheten ska
                räcka för att främja det varaktigt.
              </p>
            </div>
          </div>
          <p className="mb-6">
            Lagen ställer inget formellt krav på ett lägsta startkapital, men varaktighetskravet
            innebär i praktiken att kapitalet måste stå i rimlig proportion till ändamålet. Hur du
            går tillväga steg för steg – inklusive vad det kostar – beskriver vi i guiden{" "}
            <Link href="/starta-stiftelse/" className="text-primary-600 hover:underline">
              starta stiftelse
            </Link>
            .
          </p>
        </section>

        <section id="kapitel" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Stiftelselagen kapitel för kapitel
          </h2>
          <div className="space-y-4">
            {chapters.map((chapter) => (
              <div key={chapter.number} className="card bg-white">
                <h3 className="text-lg font-semibold text-primary-700 mb-1">
                  {chapter.number} {chapter.title}
                </h3>
                <p className="text-gray-700 text-sm">{chapter.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="nya-regler-2025" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Nya regler från 2025 – det här behöver din stiftelse veta
          </h2>
          <p className="mb-6">
            Den 1 januari 2025 trädde de största ändringarna i stiftelselagen på många år i kraft
            (SFS 2024:1114, prop. 2023/24:151). Syftet är att motverka att stiftelser används för
            ekonomisk brottslighet och att stärka tillsynen. Ändringarna påverkar i praktiken alla
            stiftelser som upprättar årsredovisning:
          </p>
          <div className="space-y-6 mb-8">
            <div className="card bg-warning-50 border border-warning-100">
              <h3 className="text-lg font-semibold mb-2 text-primary-900">
                Årsredovisningen måste skickas in – annars förseningsavgift
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Årsredovisning och revisionsberättelse ska ha kommit in till länsstyrelsen senast
                sex månader efter räkenskapsårets utgång. För stiftelser med kalenderår som
                räkenskapsår inföll den första deadlinen den 30 juni 2026.
              </p>
              <p className="text-gray-700 text-sm">
                Den som missar fristen får en förseningsavgift på <strong>7 500 kronor</strong>,
                och vid mer än fyra månaders försening ytterligare <strong>15 000 kronor</strong>.
                Läs mer om styrelsens löpande skyldigheter i guiden{" "}
                <Link href="/driva-stiftelse/" className="text-primary-600 hover:underline">
                  driva stiftelse
                </Link>
                .
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-900">
                Förbud mot ställföreträdarjäv
              </h3>
              <p className="text-gray-700 text-sm">
                Styrelseledamöter och förvaltare får inte handlägga frågor där de själva har ett
                väsentligt motstående intresse – ett uttryckligt jävsförbud som tidigare saknades i
                lagen.
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-900">
                Revisorer ska agera vid misstänkt brottslighet
              </h3>
              <p className="text-gray-700 text-sm">
                Stiftelsens revisor är numera skyldig att vidta åtgärder vid misstanke om att
                styrelseledamot eller förvaltare gjort sig skyldig till ekonomisk brottslighet inom
                ramen för stiftelsens verksamhet.
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-900">
                Glöm inte verklig huvudman
              </h3>
              <p className="text-gray-700 text-sm">
                Sedan tidigare gäller dessutom att alla stiftelser – även familjestiftelser – ska
                anmäla verklig huvudman till Bolagsverket enligt lagen (2017:631) om registrering
                av verkliga huvudmän.
              </p>
            </div>
          </div>
        </section>

        <section id="tillsyn" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Vilken länsstyrelse har tillsyn över din stiftelse?
          </h2>
          <p className="mb-6">
            Sedan den 1 januari 2025 är stiftelsetillsynen koncentrerad till sex länsstyrelser
            (tidigare sju). Vilken länsstyrelse som är tillsynsmyndighet avgörs av var stiftelsens
            styrelse eller förvaltare har sitt säte:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Tillsynsmyndighet</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Ansvarar för stiftelser i</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {lansstyrelser.map((row) => (
                  <tr key={row.office}>
                    <td className="px-4 py-3 text-sm font-medium text-primary-900">{row.office}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{row.covers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mb-6 text-sm text-gray-600">
            Registrering i stiftelseregistret är kostnadsfri, men stiftelser betalar en årlig
            tillsyns- och registerhållningsavgift enligt stiftelseförordningen (1995:1280).
          </p>
        </section>

        <section id="relaterade-lagar" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Relaterade lagar
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Inkomstskattelagen (1999:1229)</h3>
              <p className="text-gray-700 text-sm">
                7 kap. avgör om en stiftelse är inskränkt skattskyldig – de så kallade ändamåls-,
                verksamhets-, fullföljds- och öppenhetskraven. Läs mer om detta i vår guide om{" "}
                <Link href="/resurser/skatteoptimering/" className="text-primary-600 hover:underline">
                  skatteregler för stiftelser
                </Link>
                .
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Tryggandelagen (1967:531)</h3>
              <p className="text-gray-700 text-sm">
                Pensions- och personalstiftelser regleras huvudsakligen av tryggandelagen, inte av
                stiftelselagen, och står under tillsyn av både länsstyrelsen och
                Finansinspektionen.
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Bokföringslagen (1999:1078)</h3>
              <p className="text-gray-700 text-sm">
                Styr när en stiftelse blir bokföringsskyldig, bland annat vid tillgångar över 1,5
                miljoner kronor eller när stiftelsen bedriver näringsverksamhet.
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold mb-2 text-primary-700">Stiftelseförordningen (1995:1280)</h3>
              <p className="text-gray-700 text-sm">
                Kompletterar stiftelselagen med praktiska bestämmelser om bland annat
                stiftelseregistret samt tillsyns- och registerhållningsavgifter.
              </p>
            </div>
          </div>
        </section>

        <section id="vanliga-fragor" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">
            Vanliga frågor om stiftelselagen
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
            campaign="stiftelselagen"
            placement="bottom"
            heading="Letar du efter stiftelser att söka pengar från?"
            body="Som privatperson eller organisation behöver du inte kunna hela stiftelselagen för att söka medel. Sök gratis bland över 17 000 svenska stiftelser och hitta finansiering som passar ditt ändamål."
          />
        </div>
      </div>
    </>
  );
}
