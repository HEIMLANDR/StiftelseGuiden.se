import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import PartnerCTA from "@/components/PartnerCTA";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Starta en stiftelse i Sverige",
  description: "Komplett guide om hur du startar en stiftelse i Sverige: juridiska krav, kostnader, beskattning och steg-för-steg process från planering till registrering.",
  keywords: "starta stiftelse, stiftelsebildning, stiftelseförordnande, stiftelsestyrelse, stiftelsekapital",
  path: "/starta-stiftelse/",
  openGraphType: "article",
});

export default function StartFoundation() {
  return (
    <>
      <PageSchema
        title="Starta en stiftelse i Sverige"
        description="Komplett guide om hur du startar en stiftelse i Sverige: juridiska krav, kostnader, beskattning och steg-för-steg process från planering till registrering."
        path="/starta-stiftelse/"
        breadcrumbs={[{ label: "Starta stiftelse" }]}
      />
      {/* Hero Section */}
      <Hero
        title="Starta en stiftelse i Sverige"
        subtitle="En komplett guide till stiftelsebildning - från planering till registrering"
        size="small"
        kicker="Starta stiftelse"
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Starta stiftelse" }
        ]}
      />

      {/* Content */}
      <div className="container-padded">
        {/* Table of Contents */}
        <div className="card mb-12">
          <h2 className="text-xl font-semibold mb-4">Innehåll</h2>
          <ul className="space-y-2">
            <li>
              <a href="#steg-för-steg" className="text-primary-700 hover:text-primary-800 hover:underline inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Steg-för-steg guide
              </a>
            </li>
            <li>
              <a href="#förutsättningar" className="text-primary-700 hover:text-primary-800 hover:underline inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Förutsättningar
              </a>
            </li>
            <li>
              <a href="#stiftelseförordnande" className="text-primary-700 hover:text-primary-800 hover:underline inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Stiftelseförordnandet
              </a>
            </li>
            <li>
              <a href="#förmögenhet" className="text-primary-700 hover:text-primary-800 hover:underline inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Förmögenhetskrav
              </a>
            </li>
            <li>
              <a href="#registrering" className="text-primary-700 hover:text-primary-800 hover:underline inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Registrering & Tillsyn
              </a>
            </li>
            <li>
              <a href="#kostnad" className="text-primary-700 hover:text-primary-800 hover:underline inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Vad kostar det?
              </a>
            </li>
            <li>
              <a href="#skattefrågor" className="text-primary-700 hover:text-primary-800 hover:underline inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Skattefrågor
              </a>
            </li>
          </ul>
        </div>

        <section id="steg-för-steg" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Steg-för-steg guide</h2>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-3">1</span>
              Definiera stiftelsens ändamål
            </h3>
            <p className="ml-11">
              Det första och viktigaste steget är att tydligt definiera vilket ändamål stiftelsen ska ha. Detta måste vara konkret
              och detaljerat för att senare kunna verkställas. Ändamålet blir stiftelsens grundläggande syfte och kan vara svårt
              att ändra i efterhand.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Tips för att formulera ändamål:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Var specifik - undvik alltför breda eller vaga formuleringar</li>
                <li>Definiera målgruppen tydligt (t.ex. "studenter inom naturvetenskap")</li>
                <li>Ange geografisk avgränsning om relevant (t.ex. "i Stockholms län")</li>
                <li>Specificera hur medlen ska användas (t.ex. "för stipendier till forskning inom...")</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-3">2</span>
              Samla stiftelsekapital
            </h3>
            <p className="ml-11">
              Stiftelser kräver ett kapital för att kunna genomföra sina ändamål. Något lagstadgat minimibelopp finns inte,
              men en vanlig tumregel bland rådgivare är minst 350 000 - 400 000 kr för att stiftelsen ska kunna täcka sina
              administrativa kostnader och samtidigt generera avkastning för utdelning under lång tid.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Vanliga former av stiftelsekapital:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Kontanta medel</li>
                <li>Värdepapper (aktier, obligationer)</li>
                <li>Fast egendom (fastigheter, mark)</li>
                <li>Immateriella tillgångar (patent, upphovsrätter)</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-3">3</span>
              Upprätta stiftelseförordnande
            </h3>
            <p className="ml-11">
              Stiftelseförordnandet är det juridiska dokument som formellt bildar stiftelsen. Det måste innehålla en tydlig
              förklaring om att stiftaren avskiljer viss egendom för ett bestämt ändamål. Detta dokument bör upprättas skriftligt
              och med juridisk precision.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Viktiga komponenter:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Stiftelsens namn</li>
                <li>Detaljerad ändamålsbeskrivning</li>
                <li>Beskrivning av den egendom som avskiljs</li>
                <li>Förvaltningsform (egen eller anknuten)</li>
                <li>Regler för styrelsetillsättning</li>
                <li>Riktlinjer för kapitalförvaltning</li>
                <li>Regler för utdelning av medel</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-3">4</span>
              Utse styrelse eller förvaltare
            </h3>
            <p className="ml-11">
              En stiftelse måste ha antingen en egen styrelse (egen förvaltning) eller en juridisk person som förvaltare (anknuten förvaltning).
              Styrelsen eller förvaltaren ansvarar för att stiftelsens ändamål uppfylls och att förmögenheten förvaltas korrekt.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Att tänka på vid val av styrelse:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Kompetens inom relevanta områden (ekonomi, juridik, stiftelsens verksamhetsområde)</li>
                <li>Minst en person bör ha erfarenhet av stiftelseförvaltning</li>
                <li>Lämpligt antal ledamöter (vanligtvis 3-7 personer)</li>
                <li>Plan för succession och förnyelse av styrelsen över tid</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-3">5</span>
              Registrera stiftelsen
            </h3>
            <p className="ml-11">
              I princip alla stiftelser ska anmälas för registrering i stiftelseregistret hos Länsstyrelsen inom sex månader
              från bildandet. Undantaget är stiftelser vars tillgångar enligt stiftelseförordnandet endast får användas till
              förmån för bestämda fysiska personer - typiskt sett familjestiftelser. De registreras inte hos Länsstyrelsen
              utan ansöker i stället om organisationsnummer hos Skatteverket.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Registreringsprocessen:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Ansökan skickas till den länsstyrelse som handlägger stiftelseärenden för det län där stiftelsen har sitt säte</li>
                <li>Bifoga stiftelseförordnande och stadgar</li>
                <li>Ange styrelsens sammansättning eller förvaltare</li>
                <li>Registreringen är avgiftsfri - ingen registreringsavgift tas ut</li>
                <li>Handläggningstiden varierar mellan länsstyrelserna</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-3">6</span>
              Upprätta förvaltningsrutiner
            </h3>
            <p className="ml-11">
              För att säkerställa god förvaltning behöver stiftelsen etablera tydliga rutiner för ekonomi, beslutsfattande,
              dokumentation och uppföljning. Detta är viktigt för att uppfylla lagkrav och för att stiftelsen ska fungera effektivt.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Viktiga rutiner att etablera:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Bokföring och årsredovisning</li>
                <li>Placeringspolicy för kapitalförvaltning</li>
                <li>Process för ansökningar och utdelning</li>
                <li>Protokollföring av styrelsemöten</li>
                <li>Rutiner för att följa stiftelselagen och andra relevanta lagar</li>
                <li>Hantering av jävsituationer</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-3">7</span>
              Skapa ansökningsprocess
            </h3>
            <p className="ml-11">
              Om stiftelsen ska dela ut medel till externa mottagare behöver en strukturerad ansökningsprocess skapas.
              Detta säkerställer att utdelningar sker i enlighet med stiftelsens ändamål och på ett transparent sätt.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Komponenter i en ansökningsprocess:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Ansökningsformulär med tydliga kriterier</li>
                <li>Fastställda ansökningsperioder</li>
                <li>Bedömningskriterier för ansökningar</li>
                <li>Process för beslut och kommunikation</li>
                <li>Uppföljning av beviljade medel</li>
                <li>Dokumentation av beslut och motiveringar</li>
              </ul>
            </div>
          </div>

          <p className="text-center my-10">
            <a
              href="#förutsättningar"
              className="btn btn-primary inline-flex items-center"
            >
              Läs vidare om förutsättningar
              <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 110-2h6.586l-3.293-3.293a1 1 0 111.414-1.414l4 4z" clipRule="evenodd" />
              </svg>
            </a>
          </p>
        </section>

        <section id="förutsättningar" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Förutsättningar</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="card">
              <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Förordnande</h3>
              <p className="text-gray-600">En skriftlig förklaring från stiftaren med tydligt definierat ändamål för stiftelsen.</p>
            </div>

            <div className="card">
              <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Förmögenhet</h3>
              <p className="text-gray-600">Kapital som avskiljs för stiftelsens ändamål och blir en självständig förmögenhetsmassa.</p>
            </div>

            <div className="card">
              <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ändamål</h3>
              <p className="text-gray-600">Ett bestämt syfte som ska vara tillräckligt preciserat för att kunna verkställas.</p>
            </div>
          </div>

          <div className="callout callout-info mb-8">
            <h4 className="font-semibold text-gray-900 mb-1">Viktig juridisk information</h4>
            <p className="text-sm text-gray-700">
              För att en giltig stiftelse ska uppstå krävs att alla tre rekvisit är uppfyllda. Saknas något av dem kan
              stiftelsen inte bildas enligt stiftelselagen (1994:1220). Vill du fördjupa dig i lagens krav finns{" "}
              <Link href="/juridik/stiftelselagen/" className="font-medium text-primary-700 underline hover:text-primary-800">
                vår kompletta guide till stiftelselagen
              </Link>.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <PartnerCTA campaign="starta-stiftelse" placement="mid" className="mb-16" />

        <section id="stiftelseförordnande" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Stiftelseförordnandet</h2>

          <p className="mb-6">
            Stiftelseförordnandet är stiftelsens grunddokument som motsvarar bolagsordningen i ett aktiebolag eller stadgarna i en förening.
            Detta dokument styr stiftelsens verksamhet och kan vara svårt att ändra i efterhand.
          </p>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4">Obligatoriska delar i ett stiftelseförordnande</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><span className="font-medium">Stiftelsens namn</span> - Ett unikt namn som inte kan förväxlas med andra</li>
              <li><span className="font-medium">Ändamålsbestämmelse</span> - Detaljerad beskrivning av stiftelsens syfte</li>
              <li><span className="font-medium">Förklaring om avsättande av egendom</span> - Vilken egendom som avskiljs</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Rekommenderade tillägg</h3>
              <p className="mb-4">
                Utöver de obligatoriska delarna bör ett välskrivet stiftelseförordnande även innehålla:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><span className="font-medium">Förvaltningsform</span> - Egen eller anknuten förvaltning</li>
                <li><span className="font-medium">Styrelsens sammansättning</span> - Antal ledamöter, mandatperiod, etc.</li>
                <li><span className="font-medium">Placeringspolicy</span> - Riktlinjer för kapitalförvaltning</li>
                <li><span className="font-medium">Utdelningsregler</span> - När och hur medel ska delas ut</li>
                <li><span className="font-medium">Ändringsförbehåll</span> - Vilka delar som får ändras och under vilka omständigheter</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Exempel på ändamålsformulering</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="italic text-gray-700">
                  "Stiftelsens ändamål är att främja vetenskaplig forskning inom området förnybar energi genom att årligen dela ut
                  forskningsstipendier till doktorander och forskare vid svenska universitet och högskolor. Särskild prioritet ska
                  ges till innovativa projekt med potential att bidra till minskade koldioxidutsläpp."
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Denna formulering är specifik gällande både område (förnybar energi), målgrupp (doktorander och forskare),
                geografisk avgränsning (svenska universitet) och prioriteringskriterier (innovativa projekt med miljönytta).
              </p>
            </div>
          </div>

          <div className="callout callout-info mb-8">
            <h4 className="font-semibold text-gray-900 mb-1">Juridisk rådgivning rekommenderas</h4>
            <p className="text-sm text-gray-700">
              Eftersom stiftelseförordnandet är svårt att ändra efter att stiftelsen bildats, rekommenderas starkt att anlita
              juridisk expertis med erfarenhet av stiftelserätt vid upprättandet av detta dokument. En välformulerad stiftelseurkund
              förebygger framtida problem och säkerställer att stiftarens intentioner kan förverkligas.
            </p>
          </div>
        </section>

        <section id="förmögenhet" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Förmögenhetskrav</h2>

          <p className="mb-6">
            En stiftelse måste ha tillräcklig förmögenhet för att kunna uppfylla sitt ändamål långsiktigt. Det finns inget formellt
            minimikrav i lagen, men förmögenheten måste vara tillräcklig för att stiftelsen ska kunna främja sitt ändamål över tid.
          </p>

          <div className="callout callout-info mb-8">
            <h4 className="font-semibold text-gray-900 mb-1">Tumregel för stiftelsekapitalets storlek</h4>
            <p className="text-sm text-gray-700">
              Det finns varken något lagstadgat minimikapital eller någon officiell beloppsgräns från Länsstyrelsen. En vanlig
              tumregel bland rådgivare är dock ett startkapital på minst 350 000 - 400 000 kr, för att stiftelsen ska kunna
              täcka sina administrativa kostnader och samtidigt generera tillräcklig avkastning för att varaktigt främja sitt
              ändamål. Vill du räkna på hur långt ett visst kapital räcker kan du använda kapitalberäknaren bland{" "}
              <Link href="/verktyg/" className="font-medium text-primary-700 underline hover:text-primary-800">våra verktyg för stiftelser</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Kapitalförvaltning</h3>
              <p className="mb-4">
                När stiftelsen väl är bildad är det viktigt att förvalta kapitalet på ett sätt som ger god avkastning samtidigt
                som det finns en betryggande säkerhet. Vanliga placeringsalternativ inkluderar:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Räntebärande värdepapper</li>
                <li>Aktier och aktiefonder</li>
                <li>Blandfonder</li>
                <li>Fastigheter</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Stiftelsens styrelse bör upprätta en placeringspolicy som anger hur kapitalet ska förvaltas.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Exempel: Kulturstiftelse</h3>
              <p className="mb-4">
                Följande exempel är fiktivt och illustrerar ett typiskt upplägg. Tänk dig att{" "}
                <span className="font-medium">Stiftelsen Kulturarv Sverige</span> bildas med ett startkapital på
                500 000 kr och med ändamålet att främja bevarandet av svenskt kulturarv.
              </p>
              <p className="mb-4">
                Kapitalet placeras enligt följande:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>60% i en diversifierad aktieportfölj</li>
                <li>30% i företagsobligationer</li>
                <li>10% i likvida medel</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Med en antagen genomsnittlig årlig avkastning på 5-7% skulle en sådan fördelning möjliggöra utdelning av
                ca 25 000 kr årligen till kulturbevarande projekt.
              </p>
            </div>
          </div>
        </section>

        <section id="praktiska-exempel" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Praktiska exempel</h2>

          <p className="mb-6">
            Följande exempel är fiktiva och illustrerar typiska upplägg för olika typer av stiftelser.
          </p>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-3">1</span>
              Exempel: Familjestiftelse
            </h3>
            <p className="ml-11 mb-4">
              I detta fiktiva exempel bildar en entreprenör <span className="font-medium">Andersson Familjestiftelse</span> för
              att säkerställa ekonomiskt stöd till sina efterkommande för utbildning och vid sjukdom.
            </p>
            <div className="ml-11 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Nyckelkomponenter:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Startkapital: 2 miljoner kronor</li>
                <li>Förvaltning: Egen styrelse bestående av familjemedlemmar och en extern jurist</li>
                <li>Utdelning: Årliga stipendier för högskolestudier och stöd vid sjukdom</li>
                <li>Skattekonsekvenser: Oinskränkt skattskyldighet - stiftelsen betalar 20,6% statlig inkomstskatt och utbetalningarna beskattas som periodiskt understöd hos mottagarna</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-3">2</span>
              Exempel: Allmännyttig stiftelse
            </h3>
            <p className="ml-11 mb-4">
              I detta fiktiva exempel bildar ett läkemedelsföretag <span className="font-medium">Stiftelsen Framtidens
              Forskare</span> för att stödja medicinsk forskning inom neurologi.
            </p>
            <div className="ml-11 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Nyckelkomponenter:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Startkapital: 5 miljoner kronor</li>
                <li>Förvaltning: Professionell styrelse med experter inom medicin och ekonomi</li>
                <li>Utdelning: Årliga forskningsstipendier efter ansökningsförfarande</li>
                <li>Skattekonsekvenser: Inskränkt skattskyldighet då stiftelsen uppfyller kraven för allmännyttigt ändamål</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="registrering" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Registrering & Tillsyn</h2>

          <p className="mb-6">
            Stiftelser i Sverige står under tillsyn av Länsstyrelsen och ska som huvudregel registreras i stiftelseregistret.
            Sedan den 1 januari 2025 är stiftelseärenden koncentrerade till sex länsstyrelser: Stockholm, Östergötland, Skåne,
            Västra Götaland, Örebro och Norrbotten. Registrering och tillsyn säkerställer att stiftelsen förvaltas enligt
            stiftelselagen och stiftarens intentioner.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Registreringsplikt</h3>
              <p className="mb-4">
                Huvudregeln är att alla stiftelser ska registreras i stiftelseregistret hos Länsstyrelsen inom sex månader
                från bildandet. Det enda undantaget är stiftelser vars tillgångar enligt stiftelseförordnandet endast får
                användas till förmån för bestämda fysiska personer - typiskt sett familjestiftelser. De registreras inte hos
                Länsstyrelsen utan ansöker i stället om organisationsnummer hos Skatteverket.
              </p>
              <p className="mb-4">
                Beloppsgränsen på 1,5 miljoner kronor styr alltså inte registreringsplikten, utan bokföringsskyldigheten:
                stiftelser med tillgångar som överstiger 1,5 miljoner kr är bokföringsskyldiga och ska upprätta årsredovisning.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Alla stiftelser - även familjestiftelser - ska dessutom anmäla verklig huvudman till Bolagsverket.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Tillsynsmyndighet</h3>
              <p className="mb-4">
                Länsstyrelsen är tillsynsmyndighet för stiftelser och har följande uppgifter:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Granska årsredovisningar och förvaltning</li>
                <li>Säkerställa att stiftelsens ändamål uppfylls</li>
                <li>Godkänna stadgeändringar</li>
                <li>Utse nya styrelseledamöter om stadgarna inte reglerar detta</li>
                <li>Besluta om permutation (ändring av ändamål) i vissa fall</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Tillsynen är till för att skydda stiftelsens ändamål och säkerställa att förvaltningen sker korrekt.
              </p>
            </div>
          </div>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4">Registreringsprocessen</h3>
            <p className="mb-4">
              För att registrera en stiftelse behöver du skicka in följande handlingar till Länsstyrelsen i det län där
              stiftelsen har sitt säte:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
              <li>Ifylld ansökningsblankett (finns på Länsstyrelsens hemsida)</li>
              <li>Bestyrkt kopia av stiftelseförordnandet</li>
              <li>Stadgar (om sådana finns utöver stiftelseförordnandet)</li>
              <li>Protokoll som visar styrelsens sammansättning eller vem som är förvaltare</li>
            </ol>
            <p className="mt-4 text-gray-600">
              Registreringen är avgiftsfri, och stiftelsen tilldelas ett organisationsnummer i samband med att den förs in i
              stiftelseregistret. Familjestiftelser, som inte registreras hos Länsstyrelsen, ansöker i stället om
              organisationsnummer hos Skatteverket.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Handläggningstiden varierar mellan länsstyrelserna. Under handläggningen kan Länsstyrelsen begära
              kompletteringar om ansökan är ofullständig.
            </p>
          </div>

          <div className="callout callout-warning mb-8">
            <h4 className="font-semibold text-gray-900 mb-1">Nya regler från 2025: årsredovisningen ska ges in</h4>
            <p className="text-sm text-gray-700">
              Sedan den 1 januari 2025 (SFS 2024:1114) ska årsredovisningsskyldiga stiftelser ge in årsredovisning och
              revisionsberättelse till Länsstyrelsen inom sex månader från räkenskapsårets utgång. Den som missar fristen
              får betala en förseningsavgift på 7 500 kr, och ytterligare 15 000 kr tillkommer om handlingarna är mer än
              fyra månader försenade. Läs mer om styrelsens löpande skyldigheter i vår guide om att{" "}
              <Link href="/driva-stiftelse/" className="font-medium text-primary-700 underline hover:text-primary-800">driva en stiftelse</Link>.
            </p>
          </div>
        </section>

        <section id="kostnad" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Vad kostar det att starta en stiftelse?</h2>

          <p className="mb-6">
            Själva registreringen är gratis - Länsstyrelsen tar inte ut någon registreringsavgift när stiftelsen förs in i
            stiftelseregistret. De kostnader som ändå uppstår handlar i stället om kapitalet som ska avsättas, eventuell
            rådgivning vid bildandet samt de årliga avgifter och arvoden som följer med driften.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Engångskostnader vid bildandet</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <span className="font-medium">Registrering hos Länsstyrelsen</span> - gratis, ingen avgift tas ut
                </li>
                <li>
                  <span className="font-medium">Juridisk rådgivning</span> - att låta en jurist upprätta stiftelseförordnande
                  och stadgar är ofta den största engångskostnaden; en bra utgångspunkt är vår översikt av{" "}
                  <Link href="/juridik/" className="text-primary-700 underline hover:text-primary-800">juridiken kring stiftelser</Link>
                </li>
                <li>
                  <span className="font-medium">Bankkostnader</span> - eventuella avgifter för att öppna konto och depå i
                  stiftelsens namn
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Löpande kostnader</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <span className="font-medium">Revisor</span> - en stiftelse ska alltid ha minst en revisor, och en
                  auktoriserad eller godkänd revisor krävs om stiftelsen är skyldig att upprätta årsredovisning
                </li>
                <li>
                  <span className="font-medium">Förvaltning</span> - kostnader för kapitalförvaltning, bokföring och
                  administration
                </li>
                <li>
                  <span className="font-medium">Årliga avgifter till Länsstyrelsen</span> - tillsynsavgift och
                  registerhållningsavgift enligt tabellen nedan
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Årliga avgifter enligt stiftelseförordningen (1995:1280)</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Avgift</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Gäller för</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Belopp per år</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Tillsynsavgift</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">Näringsdrivande stiftelser</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">600 kr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Tillsynsavgift</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">Övriga stiftelser under full tillsyn</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">400 kr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Tillsynsavgift</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">Stiftelser under begränsad tillsyn</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">200 kr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Registerhållningsavgift</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">Näringsdrivande stiftelser</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">600 kr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Registerhållningsavgift</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">Övriga stiftelser med tillgångar över 1,5 miljoner kr</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">425 kr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Registerhållningsavgift</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">Övriga stiftelser</td>
                    <td className="px-4 py-3 border-t border-gray-100 text-gray-700">200 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="callout callout-info mb-8">
            <h4 className="font-semibold text-gray-900 mb-1">Glöm inte kapitalet</h4>
            <p className="text-sm text-gray-700">
              Den största ekonomiska insatsen är stiftelsekapitalet i sig. Något lagstadgat minimibelopp finns inte, men en
              vanlig tumregel bland rådgivare är minst 350 000 - 400 000 kr för att avkastningen varaktigt ska räcka till
              både administration och utdelningar enligt ändamålet.
            </p>
          </div>
        </section>

        <section id="skattefrågor" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Skattefrågor</h2>

          <p className="mb-6">
            Stiftelser i Sverige kan ha olika skattemässig status beroende på deras ändamål och verksamhet.
            Vissa stiftelser kan få inskränkt skattskyldighet, vilket innebär betydande skattelättnader.
          </p>

          <div className="card mb-8">
            <h3 className="text-xl font-semibold mb-4">Inskränkt skattskyldighet</h3>
            <p className="mb-4">
              För att en stiftelse ska få inskränkt skattskyldighet måste den uppfylla följande krav:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><span className="font-medium">Ändamålskravet</span> - Stiftelsen måste ha ett eller flera allmännyttiga ändamål som t.ex. främjande av vetenskap, utbildning, kultur eller sociala hjälpinsatser</li>
              <li><span className="font-medium">Verksamhetskravet</span> - Stiftelsen måste uteslutande eller så gott som uteslutande (i praxis ca 90-95% eller mer) bedriva verksamhet som främjar det allmännyttiga ändamålet</li>
              <li><span className="font-medium">Fullföljdskravet</span> - Stiftelsen ska använda sin avkastning i skälig omfattning för det allmännyttiga ändamålet, vilket i praxis brukar innebära ca 75-80% av avkastningen. Bedömningen görs i första hand per år, men det finns viss möjlighet att se till flera år i följd</li>
              <li><span className="font-medium">Öppenhetskravet</span> - Stiftelsen får inte begränsa kretsen av destinatärer till en alltför snäv grupp</li>
            </ul>
            <div className="callout callout-info mt-4">
              <p className="text-sm text-gray-700">
                Stiftelser med inskränkt skattskyldighet betalar endast skatt på inkomst från näringsverksamhet,
                inte på kapitalinkomster som räntor, utdelningar och kapitalvinster.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Familjestiftelser</h3>
              <p className="mb-4">
                Familjestiftelser har alltid oinskränkt skattskyldighet, vilket innebär att de beskattas för alla inkomster.
                En familjestiftelse kännetecknas av att destinatärerna är begränsade till:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Medlemmar av en eller flera familjer</li>
                <li>Släktingar till stiftaren</li>
                <li>En bestämd personkrets som kan identifieras utifrån släktskap</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Familjestiftelser betalar 20,6% statlig inkomstskatt på sina skattepliktiga inkomster. Utbetalningar till
                destinatärerna beskattas som periodiskt understöd (inkomst av tjänst) hos mottagaren, och stiftelsen har
                avdragsrätt endast för periodiskt understöd till mottagare som har fyllt 18 år och avslutat sin utbildning.
                Läs mer i vår{" "}
                <Link href="/stiftelser/familjestiftelse/" className="text-primary-700 underline hover:text-primary-800">guide om familjestiftelser</Link>.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Deklarationsskyldighet</h3>
              <p className="mb-4">
                Alla stiftelser ska ha ett organisationsnummer - registrerade stiftelser tilldelas det i samband med
                registreringen hos Länsstyrelsen, medan familjestiftelser ansöker hos Skatteverket.
                Deklarationsskyldigheten varierar beroende på stiftelsens status:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><span className="font-medium">Stiftelser med oinskränkt skattskyldighet</span> - Måste lämna inkomstdeklaration varje år</li>
                <li><span className="font-medium">Stiftelser med inskränkt skattskyldighet</span> - Måste lämna särskild uppgift vart femte år samt inkomstdeklaration om de har skattepliktiga inkomster</li>
                <li><span className="font-medium">Näringsdrivande stiftelser</span> - Måste lämna inkomstdeklaration varje år oavsett skattemässig status</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Tidpunkten för att lämna deklarationen beror på när stiftelsens räkenskapsår slutar - aktuella datum
                finns hos Skatteverket.
              </p>
            </div>
          </div>

          <div className="callout callout-info mb-8">
            <h4 className="font-semibold text-gray-900 mb-1">Skatterådgivning rekommenderas</h4>
            <p className="text-sm text-gray-700">
              Skattelagstiftningen för stiftelser är komplex och kan vara svår att navigera. Det rekommenderas starkt att
              anlita skatterådgivare med erfarenhet av stiftelser för att säkerställa att stiftelsen uppfyller alla krav
              och utnyttjar möjliga skattelättnader.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
