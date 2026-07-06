import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import PartnerCTA from "@/components/PartnerCTA";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Juridik för stiftelser",
  description: "Juridisk information om stiftelselagen, tillsyn, skatteregler och andra rättsliga aspekter av stiftelser i Sverige.",
  keywords: "stiftelsejuridik, stiftelselagen, stiftelsestyrelse, stiftelseskatt, tillsyn stiftelse",
  path: "/juridik/",
  openGraphType: "article",
});

export default function LegalPage() {
  return (
    <>
      <PageSchema
        title="Juridik för stiftelser"
        description="Juridisk information om stiftelselagen, tillsyn, skatteregler och andra rättsliga aspekter av stiftelser i Sverige."
        path="/juridik/"
        breadcrumbs={[{ label: "Juridik" }]}
      />
      {/* Hero Section */}
      <Hero
        title="Juridiska aspekter för stiftelser"
        subtitle="Information om stiftelselagen, tillsyn, skatteregler och andra juridiska frågor"
        size="small"
        kicker="Juridik"
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Juridik" }
        ]}
      />

      {/* Content */}
      <div className="container-padded">
        {/* Table of Contents */}
        <div className="card mb-12">
          <h2 className="text-xl font-semibold mb-4">Innehåll</h2>
          <ul className="space-y-2">
            <li>
              <a href="#lagar" className="inline-flex items-center text-primary-700 hover:text-primary-800 hover:underline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Stiftelselagen
              </a>
            </li>
            <li>
              <a href="#tillsyn" className="inline-flex items-center text-primary-700 hover:text-primary-800 hover:underline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Tillsyn och kontroll
              </a>
            </li>
            <li>
              <a href="#nya-regler-2025" className="inline-flex items-center text-primary-700 hover:text-primary-800 hover:underline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Nya regler för stiftelser 2025
              </a>
            </li>
            <li>
              <a href="#skatt" className="inline-flex items-center text-primary-700 hover:text-primary-800 hover:underline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Beskattning
              </a>
            </li>
            <li>
              <a href="#andring" className="inline-flex items-center text-primary-700 hover:text-primary-800 hover:underline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Ändring av förordnandet
              </a>
            </li>
          </ul>
        </div>

        <section id="lagar" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Stiftelselagen</h2>

          <p className="mb-6 text-gray-600">
            Stiftelser i Sverige regleras huvudsakligen av stiftelselagen (1994:1220), som trädde i kraft
            den 1 januari 1996. Lagen innehåller bestämmelser om bildande, förvaltning, tillsyn och
            upphörande av stiftelser.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Stiftelsers bildande</h3>
              <p className="mb-4 text-gray-600">
                Enligt stiftelselagen bildas en stiftelse genom att:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Egendom avskiljs från stiftaren</li>
                <li>Egendomen ställs under självständig förvaltning</li>
                <li>Förvaltningen sker för ett bestämt ändamål</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Alla tre kriterier måste vara uppfyllda för att en stiftelse ska anses vara bildad.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Stiftelsers förvaltning</h3>
              <p className="mb-4 text-gray-600">
                Stiftelselagen skiljer mellan två typer av förvaltning:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <span className="font-medium">Egen förvaltning</span> - Stiftelsen har en styrelse som
                  ansvarar för förvaltningen
                </li>
                <li>
                  <span className="font-medium">Anknuten förvaltning</span> - En juridisk person förvaltar
                  stiftelsen enligt stiftelseförordnandet
                </li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h4 className="font-semibold text-gray-900 mb-2">Stiftelselagens kapitel</h4>
            <p className="text-gray-600 mb-3">
              Stiftelselagen är indelad i elva kapitel:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>1 kap. - Inledande bestämmelser och bildande</li>
              <li>2 kap. - Förvaltning</li>
              <li>3 kap. - Bokföring och årsredovisning</li>
              <li>4 kap. - Revision</li>
              <li>5 kap. - Skadestånd</li>
              <li>6 kap. - Ändring av föreskrifter i ett stiftelseförordnande</li>
              <li>7 kap. - Likvidation och upplösning</li>
              <li>8 kap. - Stiftelses företagsnamn</li>
              <li>9 kap. - Tillsyn</li>
              <li>10 kap. - Registrering</li>
              <li>11 kap. - Insamlings- och kollektivavtalsstiftelser</li>
            </ul>
          </div>

          <div className="card mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Vill du fördjupa dig i lagen?</h4>
              <p className="text-gray-600">
                Vi har gått igenom stiftelselagen kapitel för kapitel - från bildande till upplösning.
              </p>
            </div>
            <Link
              href="/juridik/stiftelselagen/"
              className="btn btn-primary flex-shrink-0"
            >
              Läs vår kompletta guide till stiftelselagen
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>

        <section id="tillsyn" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Tillsyn och kontroll</h2>

          <p className="mb-6 text-gray-600">
            Stiftelser står under tillsyn av Länsstyrelsen, som ska se till att stiftelsens förvaltning
            sker i enlighet med stiftelseförordnandet och stiftelselagen. Sedan den 1 januari 2025 är
            stiftelseärendena koncentrerade till sex länsstyrelser i landet. Kammarkollegiet är däremot
            inte någon tillsynsmyndighet - dess roll är att besluta om permutation, det vill säga ändring
            av föreskrifter i stiftelseförordnandet.
          </p>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4">Länsstyrelsens tillsyn</h3>
            <p className="mb-4 text-gray-600">
              Länsstyrelsen är tillsynsmyndighet för stiftelser. Tillsynen omfattar bland annat:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Kontroll av att stiftelsens ändamål fullföljs</li>
              <li>Översyn av förvaltning och räkenskaper</li>
              <li>Beslut om vissa ändringar av föreskrifter, till exempel stiftelsens namn och säte</li>
              <li>Ingripande vid missförhållanden</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Läs mer om styrelsens löpande skyldigheter i vår guide till att{" "}
              <Link href="/driva-stiftelse/" className="text-primary-700 hover:text-primary-800 underline">
                driva en stiftelse
              </Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Registrering</h3>
              <p className="mb-4 text-gray-600">
                Alla stiftelser ska registreras i stiftelseregistret hos Länsstyrelsen inom sex månader
                från bildandet. Undantaget är stiftelser vars tillgångar enligt stiftelseförordnandet
                endast får användas till förmån för bestämda fysiska personer - typiskt sett
                familjestiftelser - som i stället får sitt organisationsnummer via Skatteverket.
              </p>
              <p className="text-gray-600">
                Gränsen på 1,5 miljoner kronor i tillgångar styr inte registreringen utan om stiftelsen
                är bokföringsskyldig och ska upprätta årsredovisning. Registrerade stiftelser får ett
                organisationsnummer och uppgifterna om stiftelsen blir offentliga. Se vår guide till att{" "}
                <Link href="/starta-stiftelse/" className="text-primary-700 hover:text-primary-800 underline">
                  starta en stiftelse
                </Link>{" "}
                för hela processen steg för steg.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Revision</h3>
              <p className="mb-4 text-gray-600">
                Varje stiftelse ska ha minst en revisor. För stiftelser som är skyldiga att upprätta
                årsredovisning gäller dessutom att minst en revisor ska vara auktoriserad eller godkänd.
              </p>
              <p className="text-gray-600">
                Revisorn granskar stiftelsens årsredovisning, räkenskaper och förvaltning.
              </p>
            </div>
          </div>
        </section>

        <section id="nya-regler-2025" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Nya regler för stiftelser 2025</h2>

          <p className="mb-6 text-gray-600">
            Den 1 januari 2025 trädde flera viktiga lagändringar i kraft för stiftelser
            (SFS 2024:1114, prop. 2023/24:151). Ändringarna skärper kraven på rapportering och
            intern kontroll, och samtidigt koncentrerades tillsynen till färre länsstyrelser.
            Här är det viktigaste som styrelser och förvaltare behöver känna till.
          </p>

          <div className="callout callout-warning mb-8">
            <h3 className="font-semibold text-gray-900 mb-1">
              Förseningsavgift för sent inlämnad årsredovisning
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Årsredovisningen och revisionsberättelsen ska ha kommit in till Länsstyrelsen senast
              sex månader efter räkenskapsårets utgång. En stiftelse som lämnar in för sent påförs en
              förseningsavgift på 7 500 kronor, och vid mer än fyra månaders försening tillkommer
              ytterligare 15 000 kronor.
            </p>
            <p className="text-sm text-gray-700">
              För stiftelser med kalenderår som räkenskapsår inföll den första deadlinen den
              30 juni 2026. Rutiner för bokslut och revision behöver därför vara på plats i god tid -
              mer om det i vår guide till att{" "}
              <Link href="/driva-stiftelse/" className="font-medium text-primary-700 hover:text-primary-800 underline">
                driva en stiftelse
              </Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Förbud mot ställföreträdarjäv</h3>
              <p className="text-gray-600">
                De nya reglerna innehåller ett uttryckligt förbud mot ställföreträdarjäv. Den som
                företräder stiftelsen får inte handlägga frågor där han eller hon har ett väsentligt
                intresse som kan strida mot stiftelsens.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Skärpt roll för revisorn</h3>
              <p className="text-gray-600">
                Stiftelsens revisor är numera skyldig att agera vid misstanke om ekonomisk brottslighet
                i stiftelsen. Det stärker den externa kontrollen och ställer högre krav på samspelet
                mellan styrelse och revisor.
              </p>
            </div>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4">Sex länsstyrelser hanterar stiftelseärenden</h3>
            <p className="mb-4 text-gray-600">
              Sedan den 1 januari 2025 är stiftelseärendena koncentrerade till sex länsstyrelser:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><span className="font-medium">Stockholm</span> - Stockholms och Gotlands län</li>
              <li><span className="font-medium">Östergötland</span> - Östergötlands, Jönköpings och Kalmar län</li>
              <li><span className="font-medium">Skåne</span> - Skåne, Blekinge och Kronobergs län</li>
              <li><span className="font-medium">Västra Götaland</span> - Västra Götalands och Hallands län</li>
              <li><span className="font-medium">Örebro</span> - Örebro, Dalarnas, Gävleborgs, Värmlands, Västmanlands, Södermanlands och Uppsala län</li>
              <li><span className="font-medium">Norrbotten</span> - Norrbottens, Västerbottens, Västernorrlands och Jämtlands län</li>
            </ul>
          </div>

          <div className="callout callout-info">
            <h3 className="font-semibold text-gray-900 mb-1">Anmälan om verklig huvudman</h3>
            <p className="text-sm text-gray-700">
              Alla stiftelser - även familjestiftelser - ska anmäla verklig huvudman till Bolagsverket.
              Anmälan ska hållas uppdaterad när förhållandena ändras, till exempel vid byte av
              styrelseledamöter eller förvaltare.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mb-16">
          <PartnerCTA campaign="juridik" placement="mid" />
        </div>

        <section id="skatt" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Beskattning av stiftelser</h2>

          <p className="mb-6 text-gray-600">
            Stiftelser i Sverige är i princip skattskyldiga för all inkomst och betalar statlig
            inkomstskatt med 20,6 procent. För allmännyttiga stiftelser finns dock omfattande undantag
            genom reglerna om inskränkt skattskyldighet i 7 kap. inkomstskattelagen.
          </p>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4">Inskränkt skattskyldighet - fyra krav</h3>
            <p className="mb-4 text-gray-600">
              För att en stiftelse ska bli inskränkt skattskyldig måste fyra krav vara uppfyllda:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>
                <span className="font-medium">Ändamålskravet</span> - stiftelsen ska ha ett eller flera
                allmännyttiga ändamål
              </li>
              <li>
                <span className="font-medium">Verksamhetskravet</span> (7 kap. 5 § IL) - verksamheten ska
                uteslutande eller så gott som uteslutande främja det allmännyttiga ändamålet, i praxis
                omkring 90-95 procent eller mer
              </li>
              <li>
                <span className="font-medium">Fullföljdskravet</span> (7 kap. 6 § IL) - avkastningen ska
                användas för ändamålet i skälig omfattning, i praxis cirka 75-80 procent av avkastningen
                sett över en period av år
              </li>
              <li>
                <span className="font-medium">Öppenhetskravet</span> - kretsen av mottagare får inte vara
                alltför snävt bestämd
              </li>
            </ol>
            <p className="mt-4 text-gray-600">
              Verksamhetskravet och fullföljdskravet är alltså två skilda krav: det ena handlar om vad
              verksamheten är inriktad på, det andra om hur stor del av avkastningen som faktiskt
              används. Stiftelser med inskränkt skattskyldighet betalar endast skatt på inkomst från
              näringsverksamhet och fastigheter som inte används i den allmännyttiga verksamheten.
              Läs mer i vår guide om{" "}
              <Link href="/resurser/skatteoptimering/" className="text-primary-700 hover:text-primary-800 underline">
                skatteoptimering för stiftelser
              </Link>.
            </p>
          </div>

          <div className="card mb-8">
            <h3 className="text-lg font-semibold mb-3">Kvalificerade ändamål enligt Inkomstskattelagen</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Främjande av vetenskap</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Främjande av undervisning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Hjälpverksamhet bland behövande</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Främjande av social hjälpverksamhet</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Främjande av kulturella ändamål</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Främjande av idrottslig verksamhet</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Politiska, miljövårdande, religiösa ändamål</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Stärkande av Sveriges försvar</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="callout callout-warning mb-8">
            <h4 className="font-semibold text-gray-900 mb-1">Varning om familjestiftelser</h4>
            <p className="text-sm text-gray-700">
              <Link href="/stiftelser/familjestiftelse/" className="font-medium text-primary-700 hover:text-primary-800 underline">
                Familjestiftelser
              </Link>{" "}
              kan inte få inskränkt skattskyldighet och måste därför betala skatt på all inkomst.
              Detta inkluderar även avkastning på kapital som normalt är skattefri för allmännyttiga stiftelser.
            </p>
          </div>
        </section>

        <section id="andring" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Ändring av förordnandet</h2>

          <p className="mb-6 text-gray-600">
            Stiftelseförordnandet är stiftelsens grunddokument och är i princip oföränderligt. I vissa fall
            kan dock ändringar tillåtas genom så kallad permutation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Permutation</h3>
              <p className="mb-4 text-gray-600">
                Permutation innebär att man med tillstånd får ändra, upphäva eller i särskilda fall
                åsidosätta föreskrifter i stiftelseförordnandet. Kammarkollegiet beslutar om ändring av
                de föreskrifter som räknas upp i 6 kap. 1 § stiftelselagen, bland annat stiftelsens
                ändamål, hur förmögenheten ska vara placerad, förvaltningsform, styrelsens
                sammansättning, arvoden samt räkenskaper och revision. Länsstyrelsen beslutar om övriga
                ändringar, till exempel stiftelsens namn och säte.
              </p>
              <p className="text-gray-600">
                Permutation kan beviljas om föreskriften på grund av ändrade förhållanden:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Inte längre kan följas</li>
                <li>Har blivit uppenbart onyttig</li>
                <li>Har blivit uppenbart stridande mot stiftarens avsikter</li>
              </ul>
              <p className="mt-4 text-gray-600">
                För ändring av själva ändamålet krävs dessutom synnerliga skäl.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Processen för ändring</h3>
              <p className="mb-4 text-gray-600">
                Så går en ansökan om permutation hos Kammarkollegiet till:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Styrelsen eller förvaltaren skickar ansökan till Kammarkollegiet</li>
                <li>Kammarkollegiet prövar ärendet och fattar beslut</li>
                <li>Besluten kan överklagas</li>
              </ol>
              <p className="mt-4 text-gray-600">
                Ansökningsavgiften hos Kammarkollegiet är 12 200 kronor. För små stiftelser, vars
                tillgångar haft ett marknadsvärde under ett prisbasbelopp (59 200 kronor år 2026) vid
                utgången av vart och ett av de tre senaste räkenskapsåren, är avgiften i stället
                3 300 kronor. Handläggningstiden varierar, och ansökan kräver noggrann dokumentation
                som visar att kriterierna för permutation är uppfyllda.
              </p>
            </div>
          </div>

          <div className="card mt-8">
            <h3 className="text-xl font-semibold mb-4">Permutation i praktiken</h3>
            <p className="mb-4 text-gray-600">
              Behovet av permutation uppstår ofta i äldre stiftelser där tiden sprungit ifrån
              förordnandet. Några typiska situationer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>
                Stipendie- eller understödsbelopp som på grund av inflation blivit så små att
                utdelningarna framstår som obetydliga
              </li>
              <li>
                Ändamål som inte längre kan uppfyllas, till exempel för att den institution,
                yrkesgrupp eller mottagarkrets som pekas ut i förordnandet inte längre finns kvar
              </li>
              <li>
                Placeringsföreskrifter som blivit olämpliga eller omöjliga att följa med dagens
                kapitalmarknad
              </li>
              <li>
                En alltför snäv mottagarkrets som gör det svårt att hitta kvalificerade mottagare
              </li>
            </ul>
            <div className="rounded-lg bg-gray-50 border border-gray-100 p-4">
              <h4 className="font-medium text-gray-900 mb-2">Att tänka på inför en ansökan:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Dokumentera tydligt varför föreskriften inte längre kan följas</li>
                <li>Visa hur den föreslagna ändringen ligger i linje med stiftarens ursprungliga avsikt</li>
                <li>Underbygg argumentationen med konkreta uppgifter om stiftelsens förhållanden</li>
                <li>Konsultera juridisk expertis med erfarenhet av stiftelserätt</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="avveckling" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Avveckling av stiftelser</h2>

          <p className="mb-6 text-gray-600">
            Under vissa omständigheter kan en stiftelse avvecklas eller upplösas. Detta är en komplex process som
            regleras i stiftelselagen och kräver ofta tillstånd från tillsynsmyndigheten.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Förutsättningar för avveckling</h3>
              <p className="mb-4 text-gray-600">
                En stiftelse kan avvecklas om:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Stiftelsens tillgångar är otillräckliga för att tillgodose ändamålet</li>
                <li>Stiftelsens ändamål har blivit omöjligt att uppfylla</li>
                <li>Stiftelsen bildades för viss tid som nu löpt ut</li>
                <li>Stiftelsen bildades för ett specifikt ändamål som nu uppnåtts</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Avvecklingsprocessen</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Styrelsen fattar beslut om att ansöka om avveckling</li>
                <li>Ansökan skickas till tillsynsmyndigheten (oftast länsstyrelsen)</li>
                <li>Vid godkännande ska kvarvarande tillgångar användas enligt förordnandet</li>
                <li>Om förordnandet saknar bestämmelser om detta, ska tillgångarna användas för ett ändamål som ligger nära stiftelsens ursprungliga syfte</li>
              </ol>
            </div>
          </div>

          <div className="callout callout-warning mt-8">
            <h4 className="font-semibold text-gray-900 mb-1">Viktigt att tänka på</h4>
            <p className="text-sm text-gray-700">
              Avveckling av en stiftelse är en sista utväg och bör endast övervägas när alla andra alternativ
              uttömts. Konsultera alltid juridisk expertis innan en avvecklingsprocess påbörjas, då felaktigt
              genomförd avveckling kan leda till personligt ansvar för styrelseledamöterna.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
