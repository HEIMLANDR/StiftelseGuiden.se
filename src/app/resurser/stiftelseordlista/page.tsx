import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiftelseordlista | Termer och begrepp | StiftelseGuiden",
  description: "Omfattande ordlista med förklaringar av termer och begrepp inom stiftelsevärlden. Juridiska, ekonomiska och administrativa termer förklarade på ett enkelt sätt.",
  keywords: "stiftelseordlista, stiftelsetermer, stiftelsebegrepp, stiftelselag, stiftelseterminologi, stiftelsejuridik, stiftelseekonomi, stiftelseguiden",
};

export default function GlossaryPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Stiftelseordlista"
        subtitle="Omfattande ordlista med förklaringar av termer och begrepp inom stiftelsevärlden"
        size="small"
        pattern="dots"
      />

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Resurser", href: "/resurser" },
          { label: "Stiftelseordlista" }
        ]} 
      />

      {/* Content */}
      <div className="container-padded">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Stiftelseordlista</h2>
            <p className="mb-6 text-lg">
              Stiftelsevärlden har sin egen terminologi med juridiska, ekonomiska och administrativa begrepp. 
              Denna ordlista förklarar de viktigaste termerna på ett enkelt och lättförståeligt sätt för att 
              hjälpa dig navigera i stiftelsevärlden.
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-l-primary-400 mb-8">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Hur du använder ordlistan</h3>
              <p>
                Ordlistan är organiserad alfabetiskt. Du kan antingen bläddra genom hela listan eller använda 
                snabblänkarna nedan för att hoppa till en specifik bokstav. För mer detaljerad information om 
                specifika juridiska aspekter, se vår <Link href="/juridik" className="text-primary-600 hover:underline">juridiska guide</Link>.
              </p>
            </div>
            
            {/* Alphabet Quick Links */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['A', 'F', 'I', 'K', 'P', 'S', 'V', 'Ä'].map(letter => (
                <a 
                  key={letter}
                  href={`#${letter}`}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-primary-100 rounded-md text-gray-700 hover:text-primary-700 font-medium transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </section>
          
          {/* Glossary Terms */}
          <section className="mb-16">
            {/* A */}
            <div id="A" className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">A</span>
                A-termer
              </h2>
              
              <div className="space-y-6 pl-14">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Allmännyttig stiftelse</h3>
                  <p>
                    En stiftelse som främjar ett allmännyttigt ändamål som t.ex. vetenskap, utbildning, kultur eller välgörenhet. 
                    Allmännyttiga stiftelser kan få inskränkt skattskyldighet om de uppfyller vissa krav.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Anknuten förvaltning</h3>
                  <p>
                    En förvaltningsform där stiftelsen inte har en egen styrelse utan förvaltas av en juridisk person, 
                    t.ex. en kommun, ett företag eller en förening. Den juridiska personen ansvarar för att förvalta 
                    stiftelsens tillgångar och verkställa dess ändamål.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Avkastningsstiftelse</h3>
                  <p>
                    En stiftelse som använder avkastningen från sitt kapital för att främja sitt ändamål, 
                    medan själva kapitalet (grundkapitalet) bevaras intakt.
                  </p>
                </div>
              </div>
            </div>
            
            {/* F */}
            <div id="F" className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">F</span>
                F-termer
              </h2>
              
              <div className="space-y-6 pl-14">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Familjestiftelse</h3>
                  <p>
                    En stiftelse vars ändamål är att gynna medlemmar av en viss familj eller släkt. Familjestiftelser 
                    har inte rätt till skattelättnader och beskattas fullt ut för sina inkomster.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Förvaltare</h3>
                  <p>
                    Den juridiska person som ansvarar för förvaltningen av en stiftelse med anknuten förvaltning.
                  </p>
                </div>
              </div>
            </div>
            
            {/* I */}
            <div id="I" className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">I</span>
                I-termer
              </h2>
              
              <div className="space-y-6 pl-14">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Insamlingsstiftelse</h3>
                  <p>
                    En stiftelse som bildas för att samla in medel för ett visst ändamål och som inte har ett eget 
                    grundkapital av betydande storlek. Insamlingsstiftelser regleras särskilt i stiftelselagen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Inskränkt skattskyldighet</h3>
                  <p>
                    En skattemässig status som innebär att stiftelsen endast beskattas för vissa inkomster, främst 
                    inkomst av näringsverksamhet. Allmännyttiga stiftelser kan få inskränkt skattskyldighet om de 
                    uppfyller vissa krav.
                  </p>
                </div>
              </div>
            </div>
            
            {/* K */}
            <div id="K" className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">K</span>
                K-termer
              </h2>
              
              <div className="space-y-6 pl-14">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Kollektivavtalsstiftelse</h3>
                  <p>
                    En stiftelse som bildas genom kollektivavtal mellan arbetsmarknadens parter för att främja 
                    intressen för anställda inom en viss bransch eller sektor.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Kammarkollegiet</h3>
                  <p>
                    Statlig myndighet som bland annat prövar ansökningar om permutation (ändring av stiftelseförordnande) 
                    och registrerar stiftelser som bedriver näringsverksamhet.
                  </p>
                </div>
              </div>
            </div>
            
            {/* P */}
            <div id="P" className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">P</span>
                P-termer
              </h2>
              
              <div className="space-y-6 pl-14">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Pensionsstiftelse</h3>
                  <p>
                    En stiftelse som bildas av en arbetsgivare för att trygga utfästelser om pension till arbetstagare 
                    eller deras efterlevande. Pensionsstiftelser regleras i tryggandelagen, inte i stiftelselagen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Permutation</h3>
                  <p>
                    Ändring av stiftelseförordnandet, särskilt ändamålsbestämmelsen, som kräver tillstånd från 
                    Kammarkollegiet eller, i vissa fall, länsstyrelsen.
                  </p>
                </div>
              </div>
            </div>
            
            {/* S */}
            <div id="S" className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">S</span>
                S-termer
              </h2>
              
              <div className="space-y-6 pl-14">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Stadgar</h3>
                  <p>
                    Dokument som innehåller bestämmelser om stiftelsens ändamål, förvaltning och verksamhet. 
                    Stadgarna ingår i stiftelseförordnandet.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Stiftare</h3>
                  <p>
                    Den fysiska eller juridiska person som bildar en stiftelse genom att avskilja egendom för ett bestämt ändamål.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Stiftelseförordnande</h3>
                  <p>
                    Den viljeförklaring genom vilken en stiftare förordnar att egendom ska avskiljas för att varaktigt 
                    förvaltas som en självständig förmögenhet för ett bestämt ändamål. Stiftelseförordnandet kan bestå 
                    av stadgar, testamente eller gåvobrev.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Stiftelselagen</h3>
                  <p>
                    Den lag (1994:1220) som reglerar stiftelser i Sverige. Lagen innehåller bestämmelser om bildande, 
                    förvaltning, tillsyn, bokföring och revision av stiftelser.
                  </p>
                </div>
              </div>
            </div>
            
            {/* V */}
            <div id="V" className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">V</span>
                V-termer
              </h2>
              
              <div className="space-y-6 pl-14">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Vinstandelsstiftelse</h3>
                  <p>
                    En stiftelse som bildas av ett företag för att förvalta vinstandelar för de anställda. 
                    Vinstandelsstiftelser har särskilda skatteregler.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Verksamhetsstiftelse</h3>
                  <p>
                    En stiftelse som främjar sitt ändamål genom att bedriva egen verksamhet, till skillnad från 
                    anslagsgivande stiftelser som delar ut bidrag.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Ä */}
            <div id="Ä" className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">Ä</span>
                Ä-termer
              </h2>
              
              <div className="space-y-6 pl-14">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Ändamål</h3>
                  <p>
                    Det syfte som stiftelsen ska främja enligt stiftelseförordnandet. Ändamålet är stiftelsens 
                    grundläggande element och styr hela stiftelsens verksamhet.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary-700">Ändamålsbestämmelse</h3>
                  <p>
                    Den del av stiftelseförordnandet som anger stiftelsens ändamål. Ändamålsbestämmelsen är 
                    i princip oföränderlig utan permutation.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Additional Resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b border-primary-100 pb-2">Ytterligare resurser</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-primary-700">Juridiska resurser</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <a href="/dokument/stiftelselagen.pdf" target="_blank" className="text-primary-600 hover:underline">Stiftelselagen (1994:1220)</a>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <a href="/dokument/stiftelseförordningen.pdf" target="_blank" className="text-primary-600 hover:underline">Stiftelseförordningen (1995:1280)</a>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/juridik" className="text-primary-600 hover:underline">Juridisk guide för stiftelser</Link>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 text-primary-700">Hitta stiftelser</h3>
                <p className="mb-4">
                  För att hitta stiftelser som matchar ditt ändamål, använd vår samarbetspartner SökaStiftelseMedel.se:
                </p>
                <a 
                  href="https://www.sokastiftelsemedel.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium inline-flex items-center hover:bg-primary-700 transition-colors"
                >
                  Besök SökaStiftelseMedel.se
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
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
              <h3 className="text-2xl font-bold mb-4">Behöver du hjälp med stiftelsefrågor?</h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                SökaStiftelseMedel.se erbjuder professionell hjälp med att hitta rätt stiftelser och skräddarsy dina ansökningar för att maximera dina chanser att få stöd.
              </p>
              <a 
                href="https://www.sokastiftelsemedel.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-white/90 transition-colors"
              >
                Besök SökaStiftelseMedel.se
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
