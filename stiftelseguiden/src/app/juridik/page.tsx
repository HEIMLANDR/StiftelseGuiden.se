import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juridik för stiftelser | StiftelseGuiden",
  description: "Juridisk information om stiftelselagen, tillsyn, skatteregler och andra rättsliga aspekter av stiftelser i Sverige.",
  keywords: "stiftelsejuridik, stiftelselagen, stiftelsestyrelse, stiftelseskatt, tillsyn stiftelse",
};

export default function LegalPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Juridiska aspekter för stiftelser"
        subtitle="Information om stiftelselagen, tillsyn, skatteregler och andra juridiska frågor"
        size="small"
        pattern="dots"
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
        <div className="card bg-gray-50 mb-12">
          <h2 className="text-xl font-bold mb-4">Innehåll</h2>
          <ul className="space-y-2 text-primary-600 stagger-children">
            <li>
              <a href="#lagar" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Stiftelselagen
              </a>
            </li>
            <li>
              <a href="#tillsyn" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Tillsyn och kontroll
              </a>
            </li>
            <li>
              <a href="#skatt" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Beskattning
              </a>
            </li>
            <li>
              <a href="#andring" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Ändring av förordnandet
              </a>
            </li>
          </ul>
        </div>

        <section id="lagar" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Stiftelselagen</h2>
          
          <p className="mb-6">
            Stiftelser i Sverige regleras huvudsakligen av stiftelselagen (1994:1220), som trädde i kraft 
            den 1 januari 1996. Lagen innehåller bestämmelser om bildande, förvaltning, tillsyn och 
            upphörande av stiftelser.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Stiftelsers bildande</h3>
              <p className="mb-4">
                Enligt stiftelselagen bildas en stiftelse genom att:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Egendom avskiljs från stiftaren</li>
                <li>Egendomen ställs under självständig förvaltning</li>
                <li>Förvaltningen sker för ett bestämt ändamål</li>
              </ul>
              <p className="mt-4">
                Alla tre kriterier måste vara uppfyllda för att en stiftelse ska anses vara bildad.
              </p>
            </div>
            
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Stiftelsers förvaltning</h3>
              <p className="mb-4">
                Stiftelselagen skiljer mellan två typer av förvaltning:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
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
          
          <div className="bg-primary-50 border-l-4 border-l-primary-400 p-6 mb-8">
            <h4 className="font-semibold text-primary-800 mb-2">Viktiga lagrum</h4>
            <p className="text-primary-700 mb-3">
              Några särskilt viktiga delar av stiftelselagen inkluderar:
            </p>
            <ul className="list-disc list-inside space-y-1 text-primary-700">
              <li>1 kap. - Inledande bestämmelser (definitioner)</li>
              <li>2 kap. - Förvaltning</li>
              <li>3 kap. - Bokföring och årsredovisning</li>
              <li>4 kap. - Revision</li>
              <li>9 kap. - Tillsyn</li>
            </ul>
          </div>
        </section>
        
        <section id="tillsyn" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Tillsyn och kontroll</h2>
          
          <p className="mb-6">
            Stiftelser står under tillsyn av antingen länsstyrelsen eller Kammarkollegiet. Tillsynsmyndigheten 
            ska se till att stiftelsens förvaltning sker i enlighet med stiftelseförordnandet och lagen.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Länsstyrelsens tillsyn</h3>
            <p className="mb-4">
              Länsstyrelsen är tillsynsmyndighet för de flesta stiftelser. Tillsynen omfattar:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Kontroll av att stiftelsens ändamål fullföljs</li>
              <li>Översyn av förvaltning och räkenskaper</li>
              <li>Godkännande av permutationer (ändringar i förordnandet)</li>
              <li>Ingripande vid missförhållanden</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Registrering</h3>
              <p className="mb-4">
                Stiftelser som är näringsidkande, har tillgångar överstigande 1,5 miljoner kronor, eller 
                bildats av stat eller kommun måste registreras i stiftelseregistret hos Länsstyrelsen.
              </p>
              <p className="text-gray-700">
                Registrerade stiftelser får ett organisationsnummer och uppgifter om stiftelsen blir offentliga.
              </p>
            </div>
            
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Revision</h3>
              <p className="mb-4">
                Bokföringsskyldiga stiftelser och stiftelser med tillgångar överstigande 10 prisbasbelopp 
                ska ha minst en revisor. För vissa stiftelser krävs en auktoriserad eller godkänd revisor.
              </p>
              <p className="text-gray-700">
                Revisorn granskar stiftelsens årsredovisning, räkenskaper och förvaltning.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg mb-16 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -left-24 -top-24 w-64 h-64 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Behöver du juridisk rådgivning?</h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Besök vår partner för professionell juridisk hjälp med alla frågor som rör stiftelser
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

        <section id="skatt" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Beskattning av stiftelser</h2>
          
          <p className="mb-6">
            Stiftelser i Sverige är i princip skattskyldiga för all inkomst, men det finns omfattande undantag 
            för vissa typer av stiftelser och vissa typer av inkomster.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Inskränkt skattskyldighet</h3>
            <p className="mb-4">
              Stiftelser kan kvalificera för inskränkt skattskyldighet om de uppfyller vissa villkor:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Stiftelsens ändamål ska vara kvalificerat (t.ex. allmännyttigt)</li>
              <li>Verksamheten ska till minst 90-95% främja det kvalificerade ändamålet</li>
              <li>Skälig avkastning på stiftelsens kapital ska delas ut</li>
            </ol>
            <p className="mt-4">
              Stiftelser med inskränkt skattskyldighet betalar endast skatt på inkomst från näringsverksamhet 
              och fastigheter som inte används i den allmännyttiga verksamheten.
            </p>
          </div>
          
          <div className="bg-accent-50 border border-accent-100 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-3 text-accent-800">Kvalificerade ändamål enligt Inkomstskattelagen</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-accent-700">Främjande av vetenskap</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-accent-700">Främjande av undervisning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-accent-700">Hjälpverksamhet bland behövande</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-accent-700">Främjande av social hjälpverksamhet</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-accent-700">Främjande av kulturella ändamål</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-accent-700">Främjande av idrottslig verksamhet</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-accent-700">Politiska, miljövårdande, religiösa ändamål</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-accent-700">Stärkande av Sveriges försvar</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-warning-50 border-l-4 border-warning-400 p-6 mb-8">
            <h4 className="font-semibold text-warning-800 mb-2">Varning om familjestiftelser</h4>
            <p className="text-warning-700">
              Familjestiftelser kan inte få inskränkt skattskyldighet och måste därför betala skatt på all inkomst. 
              Detta inkluderar även avkastning på kapital som normalt är skattefri för allmännyttiga stiftelser.
            </p>
          </div>
        </section>

        <section id="andring" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Ändring av förordnandet</h2>
          
          <p className="mb-6">
            Stiftelseförordnandet är stiftelsens grunddokument och är i princip oföränderligt. I vissa fall
            kan dock ändringar tillåtas genom så kallad permutation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Permutation</h3>
              <p className="mb-4">
                Permutation innebär att man med tillstånd från Kammarkollegiet eller domstol får ändra, upphäva
                eller i särskilda fall åsidosätta föreskrifter i stiftelseförordnandet.
              </p>
              <p className="text-gray-700">
                Permutation kan beviljas om:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                <li>Föreskriften inte längre kan följas</li>
                <li>Föreskriften blivit uppenbart onyttig</li>
                <li>Föreskriften strider mot stiftarens avsikt</li>
              </ul>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Processer för ändring</h3>
              <p className="mb-4">
                Det finns olika vägar att gå för att få en ändring godkänd:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Styrelsen skickar ansökan till Kammarkollegiet</li>
                <li>Kammarkollegiet prövar ärendet och fattar beslut</li>
                <li>Beslutet kan överklagas till förvaltningsrätten</li>
              </ol>
              <p className="mt-4 text-gray-700">
                Processen är vanligen omfattande och kräver noggrann dokumentation för att visa att
                kriterierna för permutation är uppfyllda.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mt-8 animate-fadeInUp">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Rättsfall: Permutation i praktiken</h3>
            <div className="border-l-4 border-l-primary-400 pl-4 mb-4">
              <p className="italic text-gray-700 mb-2">
                "Kammarkollegiet beslutade 2019 att godkänna en ansökan om permutation för Stiftelsen Gamla Studenters Stipendiefond,
                där ändamålet utvidgades från att endast stödja studenter vid en specifik fakultet till att omfatta hela universitetet."
              </p>
              <p className="text-sm text-gray-500">— Kammarkollegiets beslut 2019-05-12, Dnr 9.2-06542-2018</p>
            </div>
            <p className="mb-4">
              I detta fall hade antalet studenter vid den specifika fakulteten minskat drastiskt, vilket gjorde det svårt att hitta
              kvalificerade stipendiater. Kammarkollegiet bedömde att föreskriften blivit "uppenbart onyttig" och att en utvidgning
              av ändamålet låg i linje med stiftarens ursprungliga avsikt att stödja utbildning.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Viktiga lärdomar från rättsfallet:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Dokumentera tydligt varför föreskriften inte längre kan följas</li>
                <li>Visa hur den föreslagna ändringen ligger i linje med stiftarens ursprungliga avsikt</li>
                <li>Inkludera statistik eller annan data som stödjer argumentationen</li>
                <li>Konsultera juridisk expertis med erfarenhet av stiftelserätt</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="avveckling" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Avveckling av stiftelser</h2>
          
          <p className="mb-6">
            Under vissa omständigheter kan en stiftelse avvecklas eller upplösas. Detta är en komplex process som
            regleras i stiftelselagen och kräver ofta tillstånd från tillsynsmyndigheten.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Förutsättningar för avveckling</h3>
              <p className="mb-4">
                En stiftelse kan avvecklas om:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Stiftelsens tillgångar är otillräckliga för att tillgodose ändamålet</li>
                <li>Stiftelsens ändamål har blivit omöjligt att uppfylla</li>
                <li>Stiftelsen bildades för viss tid som nu löpt ut</li>
                <li>Stiftelsen bildades för ett specifikt ändamål som nu uppnåtts</li>
              </ul>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Avvecklingsprocessen</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Styrelsen fattar beslut om att ansöka om avveckling</li>
                <li>Ansökan skickas till tillsynsmyndigheten (oftast länsstyrelsen)</li>
                <li>Vid godkännande ska kvarvarande tillgångar användas enligt förordnandet</li>
                <li>Om förordnandet saknar bestämmelser om detta, ska tillgångarna användas för ett ändamål som ligger nära stiftelsens ursprungliga syfte</li>
              </ol>
            </div>
          </div>
          
          <div className="bg-warning-50 border-l-4 border-warning-400 p-6 mt-8">
            <h4 className="font-semibold text-warning-800 mb-2">Viktigt att tänka på</h4>
            <p className="text-warning-700">
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
