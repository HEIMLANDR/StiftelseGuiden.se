import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driva stiftelse i Sverige | StiftelseGuiden",
  description: "Guide till förvaltning, administration och utveckling av stiftelser i Sverige. Information om styrelsearbete, bokföring, kapitalförvaltning, och rapportering.",
  keywords: "driva stiftelse, stiftelseförvaltning, stiftelsestyrelse, kapitalförvaltning, utdelning stiftelse",
};

export default function ManageFoundation() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Driva stiftelse i Sverige"
        subtitle="Guide till förvaltning, administration och utveckling av stiftelser"
        size="small"
        pattern="dots"
      />

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Driva stiftelse" }
        ]} 
      />

      {/* Content */}
      <div className="container-padded">
        {/* Table of Contents */}
        <div className="card bg-gray-50 mb-12">
          <h2 className="text-xl font-bold mb-4">Innehåll</h2>
          <ul className="space-y-2 text-primary-600 stagger-children">
            <li>
              <a href="#styrelse" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Styrelsearbete
              </a>
            </li>
            <li>
              <a href="#förvaltning" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Kapitalförvaltning
              </a>
            </li>
            <li>
              <a href="#rapportering" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Årlig rapportering
              </a>
            </li>
            <li>
              <a href="#utdelning" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Utdelning av medel
              </a>
            </li>
          </ul>
        </div>

        <section id="styrelse" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Styrelsearbete i stiftelser</h2>
          
          <p className="mb-6">
            Styrelsen har det övergripande ansvaret för stiftelsens förvaltning och ska se till att stiftelsens ändamål 
            uppfylls och att stiftelsens tillgångar förvaltas väl. Styrelsearbetet regleras både av stiftelselagen och 
            av stiftelsens förordnande.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Styrelsens sammansättning</h3>
              <p className="mb-4">
                Styrelsens sammansättning bestäms av stiftaren i stiftelseförordnandet. En stiftelse med egen förvaltning 
                måste ha minst en styrelseledamot. För större stiftelser rekommenderas flera ledamöter med kompletterande 
                kompetenser.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Styrelseledamöter ska vara myndiga och får inte vara i konkurs</li>
                <li>Det är fördelaktigt att ha ledamöter med olika kompetenser</li>
                <li>Ledamöterna bör ha god kännedom om stiftelsens ändamål</li>
              </ul>
            </div>
            
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Styrelsemöten</h3>
              <p className="mb-4">
                Styrelsen ska hålla regelbundna möten där man fattar beslut om stiftelsens angelägenheter. Alla möten ska 
                protokollföras och väsentliga beslut ska dokumenteras.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Protokoll ska upprättas vid varje styrelsemöte</li>
                <li>Beslut om placeringar och utdelningar ska dokumenteras</li>
                <li>Styrelsens beslut ska följa stiftelsens ändamål</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary-50 border-l-4 border-l-primary-400 p-6 mb-8">
            <h4 className="font-semibold text-primary-800 mb-2">Viktigt att tänka på</h4>
            <p className="text-primary-700">
              Styrelseledamöter kan bli personligt skadeståndsansvariga om de uppsåtligen eller av oaktsamhet orsakar 
              stiftelsen skada. Var därför noggrann med att följa stiftelselagen och stiftelseförordnandet.
            </p>
          </div>
        </section>

        <section id="förvaltning" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Kapitalförvaltning</h2>
          
          <p className="mb-6">
            Stiftelsens kapital ska förvaltas så att det ger en god avkastning samtidigt som det finns en betryggande säkerhet. 
            Förvaltningen ska sträva efter att stiftelsens ändamål kan uppfyllas både på kort och lång sikt.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Placeringsriktlinjer</h3>
            <p className="mb-4">
              Styrelsen bör upprätta och regelbundet uppdatera placeringsriktlinjer för stiftelsens kapital. 
              Riktlinjerna ska ta hänsyn till:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Avkastningsmål</h4>
                <p className="text-sm">Definiera vilken avkastning stiftelsen behöver för att uppfylla sitt ändamål</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Riskprofil</h4>
                <p className="text-sm">Fastställ vilken risknivå som är acceptabel för stiftelsens placeringar</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Tillgångsfördelning</h4>
                <p className="text-sm">Bestäm hur kapitalet ska fördelas mellan olika tillgångsslag</p>
              </div>
            </div>
          </div>
          
          <div className="bg-accent-50 border border-accent-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-accent-800">Tips för god kapitalförvaltning</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-accent-700">Diversifiera placeringarna för att sprida riskerna</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-accent-700">Utvärdera förvaltningsresultatet regelbundet, minst årligen</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-accent-700">Ta hänsyn till både avkastning och inflation vid planeringen</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-accent-700">Överväg att anlita professionell förvaltning för större stiftelser</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg mb-16 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -left-24 -top-24 w-64 h-64 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Behöver du hjälp med stiftelseförvaltning?</h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Besök vår partner för professionell hjälp med kapitalförvaltning, administration och juridisk rådgivning för stiftelser
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

        <section id="rapportering" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Årlig rapportering</h2>
          
          <p className="mb-6">
            Alla stiftelser har krav på sig att regelbundet rapportera sin verksamhet och ekonomi, men omfattningen av kraven 
            varierar beroende på stiftelsens storlek och verksamhet.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Bokföringsskyldighet</h3>
            <p className="mb-4">En stiftelse är bokföringsskyldig om något av följande kriterier är uppfyllda:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Värdet av tillgångarna överstiger 1,5 miljoner kronor</li>
              <li>Stiftelsen bedriver näringsverksamhet</li>
              <li>Stiftelsen är moderstiftelse</li>
              <li>Det framgår av stiftelseförordnandet att stiftelsen ska vara bokföringsskyldig</li>
            </ul>
          </div>
          
          <div className="bg-warning-50 border-l-4 border-warning-400 p-6 mb-8">
            <h4 className="font-semibold text-warning-800 mb-2">Viktiga tidsfrister</h4>
            <p className="text-warning-700 mb-3">
              Bokföringsskyldiga stiftelser ska upprätta årsredovisning inom sex månader efter räkenskapsårets utgång. 
              Årsredovisningen ska lämnas till stiftelsens revisor senast fyra månader efter räkenskapsårets utgång.
            </p>
            <p className="text-warning-700">
              Även stiftelser som inte är bokföringsskyldiga måste föra räkenskaper över betalningar och upprätta en 
              sammanställning över stiftelsens räkenskaper för varje räkenskapsår.
            </p>
          </div>
        </section>

        <section id="utdelning" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Utdelning av medel</h2>
          
          <p className="mb-6">
            Utdelning av stiftelsens medel ska ske i enlighet med stiftelsens ändamål som det är formulerat i stiftelseförordnandet.
            Styrelsen måste säkerställa att utdelningen uppfyller ändamålet och att den följer god stiftelsesed.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Process för utdelning</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Fastställ vilka medel som finns tillgängliga för utdelning</li>
                <li>Identifiera potentiella mottagare enligt stiftelsens ändamål</li>
                <li>Besluta om tilldelning och dokumentera beslutet</li>
                <li>Informera mottagarna och genomför utbetalningar</li>
                <li>Följ upp att medlen använts enligt stiftelsens syfte</li>
              </ol>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-accent-700">Ansökningsförfarande</h3>
              <p className="mb-4">
                För många stiftelser är det lämpligt att ha ett formellt ansökningsförfarande för att identifiera
                potentiella mottagare av stiftelsens medel. Viktiga komponenter i processen:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Tydliga kriterier för vilka som kan söka</li>
                <li>Strukturerad ansökningsblankett</li>
                <li>Transparent bedömningsprocess</li>
                <li>Dokumentation av alla beslut</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="framgangsexempel" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Framgångsrika stiftelser</h2>
          
          <p className="mb-6">
            Här presenterar vi några exempel på stiftelser som lyckats särskilt väl med sin förvaltning och verksamhet.
            Dessa kan tjäna som inspiration och ge praktiska insikter i framgångsrik stiftelseförvaltning.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fadeInUp">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">Stiftelsen Innovativa Sverige</h3>
                <p className="text-sm text-gray-500 mb-4">Grundad 2005 | Kapital: 120 miljoner kr | Fokus: Teknisk innovation</p>
                
                <p className="mb-4">
                  Stiftelsen Innovativa Sverige har under de senaste 15 åren utvecklats till en av landets mest framgångsrika
                  stiftelser inom sitt område. Genom en kombination av strategisk kapitalförvaltning och effektiva utdelningsprocesser
                  har stiftelsen kunnat stödja över 200 innovationsprojekt.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-primary-700 mb-2">Framgångsfaktorer:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Diversifierad investeringsportfölj med 60% aktier, 30% räntebärande papper och 10% alternativa investeringar</li>
                    <li>Professionell styrelse med kompletterande kompetenser inom teknik, ekonomi och juridik</li>
                    <li>Digitaliserad ansöknings- och uppföljningsprocess</li>
                    <li>Aktivt nätverkande med universitet och näringsliv</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-l-primary-400 pl-4">
                  <p className="italic text-gray-700">
                    "Vår framgång bygger på en kombination av långsiktig kapitalförvaltning och ett genuint engagemang för
                    innovation. Vi ser oss inte bara som finansiärer utan som aktiva partners i de projekt vi stödjer."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">— Maria Bergström, Styrelseordförande</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-accent-700">Kulturarvet</h3>
                <p className="text-sm text-gray-500 mb-4">Grundad 1978 | Kapital: 85 miljoner kr | Fokus: Kulturbevarande</p>
                
                <p className="mb-4">
                  Stiftelsen Kulturarvet har under fyra decennier arbetat med att bevara och tillgängliggöra svenskt kulturarv.
                  Trots utmaningar med låga räntor och förändrade förutsättningar har stiftelsen lyckats öka sitt kapital samtidigt
                  som man utökat sin verksamhet.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-accent-700 mb-2">Strategisk omställning:</h4>
                  <p className="mb-2">
                    När avkastningen på traditionella placeringar sjönk 2015-2018 genomförde stiftelsen en strategisk omställning:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Ombalanserade portföljen med ökat fokus på utdelande aktier</li>
                    <li>Utvecklade kompletterande intäktsströmmar genom publikationer och utbildningar</li>
                    <li>Etablerade samarbeten med andra kulturinstitutioner för kostnadsdelning</li>
                    <li>Implementerade effektivare administrativa processer</li>
                  </ul>
                </div>
                
                <p className="text-gray-700">
                  Resultatet blev att stiftelsen kunde öka sina årliga utdelningar med 15% under en femårsperiod,
                  trots det utmanande ränteläget. Idag stödjer Kulturarvet över 30 projekt årligen och har etablerat
                  sig som en central aktör inom svenskt kulturbevarande.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
