import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starta en stiftelse i Sverige | StiftelseGuiden",
  description: "Komplett guide om hur du startar en stiftelse i Sverige, juridiska krav, beskattning och steg-för-steg process från planering till registrering.",
  keywords: "starta stiftelse, stiftelsebildning, stiftelseförordnande, stiftelsestyrelse, stiftelsekapital",
};

export default function StartFoundation() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Starta en stiftelse i Sverige"
        subtitle="En komplett guide till stiftelsebildning - från planering till registrering"
        size="small"
        pattern="dots"
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
        <div className="card bg-gray-50 mb-12">
          <h2 className="text-xl font-bold mb-4">Innehåll</h2>
          <ul className="space-y-2 text-primary-600 stagger-children">
            <li>
              <a href="#steg-för-steg" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Steg-för-steg guide
              </a>
            </li>
            <li>
              <a href="#förutsättningar" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Förutsättningar
              </a>
            </li>
            <li>
              <a href="#stiftelseförordnande" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Stiftelseförordnandet
              </a>
            </li>
            <li>
              <a href="#förmögenhet" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Förmögenhetskrav
              </a>
            </li>
            <li>
              <a href="#registrering" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Registrering & Tillsyn
              </a>
            </li>
            <li>
              <a href="#skattefrågor" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Skattefrågor
              </a>
            </li>
          </ul>
        </div>

        <section id="steg-för-steg" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Steg-för-steg guide</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">1</span>
              Definiera stiftelsens ändamål
            </h3>
            <p className="ml-11">
              Det första och viktigaste steget är att tydligt definiera vilket ändamål stiftelsen ska ha. Detta måste vara konkret
              och detaljerat för att senare kunna verkställas. Ändamålet blir stiftelsens grundläggande syfte och kan vara svårt
              att ändra i efterhand.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Tips för att formulera ändamål:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Var specifik - undvik alltför breda eller vaga formuleringar</li>
                <li>Definiera målgruppen tydligt (t.ex. "studenter inom naturvetenskap")</li>
                <li>Ange geografisk avgränsning om relevant (t.ex. "i Stockholms län")</li>
                <li>Specificera hur medlen ska användas (t.ex. "för stipendier till forskning inom...")</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">2</span>
              Samla stiftelsekapital
            </h3>
            <p className="ml-11">
              Stiftelser kräver ett kapital för att kunna genomföra sina ändamål. För mindre stiftelser rekommenderas minst
              350 000 - 400 000 kr för att täcka administrativa kostnader och samtidigt kunna generera avkastning för utdelning.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Vanliga former av stiftelsekapital:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Kontanta medel</li>
                <li>Värdepapper (aktier, obligationer)</li>
                <li>Fast egendom (fastigheter, mark)</li>
                <li>Immateriella tillgångar (patent, upphovsrätter)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">3</span>
              Upprätta stiftelseförordnande
            </h3>
            <p className="ml-11">
              Stiftelseförordnandet är det juridiska dokument som formellt bildar stiftelsen. Det måste innehålla en tydlig
              förklaring om att stiftaren avskiljer viss egendom för ett bestämt ändamål. Detta dokument bör upprättas skriftligt
              och med juridisk precision.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Viktiga komponenter:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
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
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">4</span>
              Utse styrelse eller förvaltare
            </h3>
            <p className="ml-11">
              En stiftelse måste ha antingen en egen styrelse (egen förvaltning) eller en juridisk person som förvaltare (anknuten förvaltning).
              Styrelsen eller förvaltaren ansvarar för att stiftelsens ändamål uppfylls och att förmögenheten förvaltas korrekt.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Att tänka på vid val av styrelse:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Kompetens inom relevanta områden (ekonomi, juridik, stiftelsens verksamhetsområde)</li>
                <li>Minst en person bör ha erfarenhet av stiftelseförvaltning</li>
                <li>Lämpligt antal ledamöter (vanligtvis 3-7 personer)</li>
                <li>Plan för succession och förnyelse av styrelsen över tid</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">5</span>
              Registrera stiftelsen
            </h3>
            <p className="ml-11">
              Stiftelser med tillgångar överstigande 1,5 miljoner kronor måste registreras hos Länsstyrelsen. Även mindre stiftelser
              kan registreras frivilligt. Registrering ger stiftelsen rättskapacitet och möjlighet att agera som juridisk person.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Registreringsprocessen:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Ansökan skickas till Länsstyrelsen i det län där stiftelsen har sitt säte</li>
                <li>Bifoga stiftelseförordnande och stadgar</li>
                <li>Ange styrelsens sammansättning eller förvaltare</li>
                <li>Betala registreringsavgift (ca 1000 kr)</li>
                <li>Handläggningstid: ca 2-4 månader</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">6</span>
              Upprätta förvaltningsrutiner
            </h3>
            <p className="ml-11">
              För att säkerställa god förvaltning behöver stiftelsen etablera tydliga rutiner för ekonomi, beslutsfattande,
              dokumentation och uppföljning. Detta är viktigt för att uppfylla lagkrav och för att stiftelsen ska fungera effektivt.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Viktiga rutiner att etablera:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Bokföring och årsredovisning</li>
                <li>Placeringspolicy för kapitalförvaltning</li>
                <li>Process för ansökningar och utdelning</li>
                <li>Protokollföring av styrelsemöten</li>
                <li>Rutiner för att följa stiftelselagen och andra relevanta lagar</li>
                <li>Hantering av jävsituationer</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">7</span>
              Skapa ansökningsprocess
            </h3>
            <p className="ml-11">
              Om stiftelsen ska dela ut medel till externa mottagare behöver en strukturerad ansökningsprocess skapas.
              Detta säkerställer att utdelningar sker i enlighet med stiftelsens ändamål och på ett transparent sätt.
            </p>
            <div className="ml-11 mt-4 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Komponenter i en ansökningsprocess:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
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
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Förutsättningar</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="card card-hover bg-white">
              <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Förordnande</h3>
              <p className="text-gray-700">En skriftlig förklaring från stiftaren med tydligt definierat ändamål för stiftelsen.</p>
            </div>
            
            <div className="card card-hover bg-white">
              <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Förmögenhet</h3>
              <p className="text-gray-700">Kapital som avskiljs för stiftelsens ändamål och blir en självständig förmögenhetsmassa.</p>
            </div>
            
            <div className="card card-hover bg-white">
              <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ändamål</h3>
              <p className="text-gray-700">Ett bestämt syfte som ska vara tillräckligt preciserat för att kunna verkställas.</p>
            </div>
          </div>
          
          <div className="bg-secondary-50 border-l-4 border-l-secondary-400 p-6 mb-8">
            <h4 className="font-semibold text-secondary-800 mb-2">Viktig juridisk information</h4>
            <p className="text-secondary-700">
              För att en giltig stiftelse ska uppstå krävs att alla tre rekvisit är uppfyllda. Saknas något av dem kan 
              stiftelsen inte bildas enligt stiftelselagen (1994:1220).
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg mb-16 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -left-24 -top-24 w-64 h-64 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Behöver du professionell hjälp?</h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Besök vår partner för experthjälp med stiftelsebildning, juridisk rådgivning och förvaltning av stiftelser
            </p>
            <a 
              href="https://www.sokastiftelsemedel.se" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-white/90 transition-colors"
            >
              Besök SökaStiftelseMedel.se
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <section id="stiftelseförordnande" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Stiftelseförordnandet</h2>
          
          <p className="mb-6">
            Stiftelseförordnandet är stiftelsens grunddokument som motsvarar bolagsordningen i ett aktiebolag eller stadgarna i en förening.
            Detta dokument styr stiftelsens verksamhet och kan vara svårt att ändra i efterhand.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Obligatoriska delar i ett stiftelseförordnande</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><span className="font-medium">Stiftelsens namn</span> - Ett unikt namn som inte kan förväxlas med andra</li>
              <li><span className="font-medium">Ändamålsbestämmelse</span> - Detaljerad beskrivning av stiftelsens syfte</li>
              <li><span className="font-medium">Förklaring om avsättande av egendom</span> - Vilken egendom som avskiljs</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Rekommenderade tillägg</h3>
              <p className="mb-4">
                Utöver de obligatoriska delarna bör ett välskrivet stiftelseförordnande även innehålla:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><span className="font-medium">Förvaltningsform</span> - Egen eller anknuten förvaltning</li>
                <li><span className="font-medium">Styrelsens sammansättning</span> - Antal ledamöter, mandatperiod, etc.</li>
                <li><span className="font-medium">Placeringspolicy</span> - Riktlinjer för kapitalförvaltning</li>
                <li><span className="font-medium">Utdelningsregler</span> - När och hur medel ska delas ut</li>
                <li><span className="font-medium">Ändringsförbehåll</span> - Vilka delar som får ändras och under vilka omständigheter</li>
              </ul>
            </div>
            
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Exempel på ändamålsformulering</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="italic text-gray-700">
                  "Stiftelsens ändamål är att främja vetenskaplig forskning inom området förnybar energi genom att årligen dela ut
                  forskningsstipendier till doktorander och forskare vid svenska universitet och högskolor. Särskild prioritet ska
                  ges till innovativa projekt med potential att bidra till minskade koldioxidutsläpp."
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Denna formulering är specifik gällande både område (förnybar energi), målgrupp (doktorander och forskare),
                geografisk avgränsning (svenska universitet) och prioriteringskriterier (innovativa projekt med miljönytta).
              </p>
            </div>
          </div>
          
          <div className="bg-secondary-50 border-l-4 border-l-secondary-400 p-6 mb-8">
            <h4 className="font-semibold text-secondary-800 mb-2">Juridisk rådgivning rekommenderas</h4>
            <p className="text-secondary-700">
              Eftersom stiftelseförordnandet är svårt att ändra efter att stiftelsen bildats, rekommenderas starkt att anlita
              juridisk expertis med erfarenhet av stiftelserätt vid upprättandet av detta dokument. En välformulerad stiftelseurkund
              förebygger framtida problem och säkerställer att stiftarens intentioner kan förverkligas.
            </p>
          </div>
        </section>

        <section id="förmögenhet" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Förmögenhetskrav</h2>
          
          <p className="mb-6">
            En stiftelse måste ha tillräcklig förmögenhet för att kunna uppfylla sitt ändamål långsiktigt. Det finns inget formellt
            minimikrav i lagen, men förmögenheten måste vara tillräcklig för att stiftelsen ska kunna främja sitt ändamål över tid.
          </p>
          
          <div className="bg-accent-50 border-l-4 border-accent-400 p-6 mb-8">
            <h4 className="font-medium text-accent-800 mb-2">Rekommenderad storlek på stiftelsekapital</h4>
            <p className="text-accent-700">
              För mindre stiftelser rekommenderas ett startkapital på minst 350 000 - 400 000 kr för att täcka administrativa
              kostnader och samtidigt kunna generera tillräcklig avkastning för utdelning enligt stiftelsens ändamål.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Kapitalförvaltning</h3>
              <p className="mb-4">
                När stiftelsen väl är bildad är det viktigt att förvalta kapitalet på ett sätt som ger god avkastning samtidigt
                som det finns en betryggande säkerhet. Vanliga placeringsalternativ inkluderar:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Räntebärande värdepapper</li>
                <li>Aktier och aktiefonder</li>
                <li>Blandfonder</li>
                <li>Fastigheter</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Stiftelsens styrelse bör upprätta en placeringspolicy som anger hur kapitalet ska förvaltas.
              </p>
            </div>
            
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Exempel: Kulturstiftelse</h3>
              <p className="mb-4">
                <span className="font-medium">Stiftelsen Kulturarv Sverige</span> bildades 2018 med ett startkapital på
                500 000 kr. Stiftelsens ändamål är att främja bevarandet av svenskt kulturarv.
              </p>
              <p className="mb-4">
                Kapitalet placerades enligt följande:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>60% i en diversifierad aktieportfölj</li>
                <li>30% i företagsobligationer</li>
                <li>10% i likvida medel</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Denna fördelning har gett en genomsnittlig årlig avkastning på 5-7%, vilket möjliggör utdelning av
                ca 25 000 kr årligen till kulturbevarande projekt.
              </p>
            </div>
          </div>
        </section>
        
        <section id="praktiska-exempel" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Praktiska exempel</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">1</span>
              Familjestiftelse
            </h3>
            <p className="ml-11 mb-4">
              <span className="font-medium">Andersson Familjestiftelse</span> bildades av entreprenören Erik Andersson för att
              säkerställa ekonomiskt stöd till hans efterkommande för utbildning och vid sjukdom.
            </p>
            <div className="ml-11 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Nyckelkomponenter:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Startkapital: 2 miljoner kronor</li>
                <li>Förvaltning: Egen styrelse bestående av familjemedlemmar och en extern jurist</li>
                <li>Utdelning: Årliga stipendier för högskolestudier och stöd vid sjukdom</li>
                <li>Skattekonsekvenser: Familjestiftelser har inte inskränkt skattskyldighet</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">2</span>
              Allmännyttig stiftelse
            </h3>
            <p className="ml-11 mb-4">
              <span className="font-medium">Stiftelsen Framtidens Forskare</span> bildades av ett läkemedelsföretag för att stödja
              medicinsk forskning inom neurologi.
            </p>
            <div className="ml-11 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Nyckelkomponenter:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Startkapital: 5 miljoner kronor</li>
                <li>Förvaltning: Professionell styrelse med experter inom medicin och ekonomi</li>
                <li>Utdelning: Årliga forskningsstipendier efter ansökningsförfarande</li>
                <li>Skattekonsekvenser: Inskränkt skattskyldighet då stiftelsen uppfyller kraven för allmännyttigt ändamål</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="registrering" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Registrering & Tillsyn</h2>
          
          <p className="mb-6">
            Stiftelser i Sverige står under tillsyn av Länsstyrelsen och måste i vissa fall registreras i stiftelseregistret.
            Registrering och tillsyn säkerställer att stiftelsen förvaltas enligt stiftelselagen och stiftarens intentioner.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Registreringsplikt</h3>
              <p className="mb-4">
                Följande stiftelser måste registreras hos Länsstyrelsen:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Stiftelser med tillgångar överstigande 1,5 miljoner kronor</li>
                <li>Näringsdrivande stiftelser</li>
                <li>Insamlingsstiftelser</li>
                <li>Kollektivavtalsstiftelser</li>
                <li>Pensionsstiftelser</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Även stiftelser som inte har registreringsplikt kan välja att registrera sig frivilligt, vilket ger
                stiftelsen rättskapacitet och möjlighet att agera som juridisk person.
              </p>
            </div>
            
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Tillsynsmyndighet</h3>
              <p className="mb-4">
                Länsstyrelsen är tillsynsmyndighet för stiftelser och har följande uppgifter:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Granska årsredovisningar och förvaltning</li>
                <li>Säkerställa att stiftelsens ändamål uppfylls</li>
                <li>Godkänna stadgeändringar</li>
                <li>Utse nya styrelseledamöter om stadgarna inte reglerar detta</li>
                <li>Besluta om permutation (ändring av ändamål) i vissa fall</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Tillsynen är till för att skydda stiftelsens ändamål och säkerställa att förvaltningen sker korrekt.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Registreringsprocessen</h3>
            <p className="mb-4">
              För att registrera en stiftelse behöver du skicka in följande handlingar till Länsstyrelsen i det län där
              stiftelsen har sitt säte:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Ifylld ansökningsblankett (finns på Länsstyrelsens hemsida)</li>
              <li>Bestyrkt kopia av stiftelseförordnandet</li>
              <li>Stadgar (om sådana finns utöver stiftelseförordnandet)</li>
              <li>Protokoll som visar styrelsens sammansättning eller vem som är förvaltare</li>
              <li>Bevis på att stiftelsen har ett organisationsnummer (ansöks hos Skatteverket)</li>
              <li>Kvitto på betald registreringsavgift (ca 1000 kr)</li>
            </ol>
            <p className="mt-4 text-sm text-gray-600">
              Handläggningstiden för registrering är normalt 2-4 månader. Under denna tid kan Länsstyrelsen begära
              kompletteringar om ansökan är ofullständig.
            </p>
          </div>
        </section>
        
        <section id="skattefrågor" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Skattefrågor</h2>
          
          <p className="mb-6">
            Stiftelser i Sverige kan ha olika skattemässig status beroende på deras ändamål och verksamhet.
            Vissa stiftelser kan få inskränkt skattskyldighet, vilket innebär betydande skattelättnader.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Inskränkt skattskyldighet</h3>
            <p className="mb-4">
              För att en stiftelse ska få inskränkt skattskyldighet måste den uppfylla följande krav:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><span className="font-medium">Ändamålskravet</span> - Stiftelsen måste ha ett eller flera allmännyttiga ändamål som t.ex. främjande av vetenskap, utbildning, kultur eller sociala hjälpinsatser</li>
              <li><span className="font-medium">Verksamhetskravet</span> - Stiftelsen måste uteslutande eller så gott som uteslutande bedriva verksamhet som främjar det allmännyttiga ändamålet</li>
              <li><span className="font-medium">Fullföljdskravet</span> - Stiftelsen måste använda minst 80% av sin avkastning för det allmännyttiga ändamålet (sett över en period av 5 år)</li>
              <li><span className="font-medium">Öppenhetskravet</span> - Stiftelsen får inte begränsa kretsen av destinatärer till en alltför snäv grupp</li>
            </ul>
            <div className="mt-4 bg-accent-50 p-4 rounded-lg">
              <p className="text-accent-700">
                Stiftelser med inskränkt skattskyldighet betalar endast skatt på inkomst från näringsverksamhet,
                inte på kapitalinkomster som räntor, utdelningar och kapitalvinster.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Familjestiftelser</h3>
              <p className="mb-4">
                Familjestiftelser har alltid oinskränkt skattskyldighet, vilket innebär att de beskattas för alla inkomster.
                En familjestiftelse kännetecknas av att destinatärerna är begränsade till:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Medlemmar av en eller flera familjer</li>
                <li>Släktingar till stiftaren</li>
                <li>En bestämd personkrets som kan identifieras utifrån släktskap</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Familjestiftelser beskattas med 21,4% på alla inkomster och måste även betala en årlig schablonintäkt
                på 1,5% av förmögenhetens värde.
              </p>
            </div>
            
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Deklarationsskyldighet</h3>
              <p className="mb-4">
                Alla stiftelser måste registrera sig hos Skatteverket och få ett organisationsnummer.
                Deklarationsskyldigheten varierar beroende på stiftelsens status:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><span className="font-medium">Stiftelser med oinskränkt skattskyldighet</span> - Måste lämna inkomstdeklaration varje år</li>
                <li><span className="font-medium">Stiftelser med inskränkt skattskyldighet</span> - Måste lämna särskild uppgift vart femte år samt inkomstdeklaration om de har skattepliktiga inkomster</li>
                <li><span className="font-medium">Näringsdrivande stiftelser</span> - Måste lämna inkomstdeklaration varje år oavsett skattemässig status</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Deklarationen ska lämnas in senast den 1 juli året efter räkenskapsåret.
              </p>
            </div>
          </div>
          
          <div className="bg-secondary-50 border-l-4 border-l-secondary-400 p-6 mb-8">
            <h4 className="font-semibold text-secondary-800 mb-2">Skatterådgivning rekommenderas</h4>
            <p className="text-secondary-700">
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
