import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import PartnerCTA from "@/components/PartnerCTA";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Driva stiftelse i Sverige",
  description: "Guide till förvaltning, administration och utveckling av stiftelser i Sverige. Information om styrelsearbete, bokföring, kapitalförvaltning, och rapportering.",
  keywords: "driva stiftelse, stiftelseförvaltning, stiftelsestyrelse, kapitalförvaltning, utdelning stiftelse",
  path: "/driva-stiftelse/",
  openGraphType: "article",
});

export default function ManageFoundation() {
  return (
    <>
      <PageSchema
        title="Driva stiftelse i Sverige"
        description="Guide till förvaltning, administration och utveckling av stiftelser i Sverige. Information om styrelsearbete, bokföring, kapitalförvaltning och rapportering."
        path="/driva-stiftelse/"
        breadcrumbs={[{ label: "Driva stiftelse" }]}
      />
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
            uppfylls och att stiftelsens tillgångar förvaltas väl. Styrelsearbetet regleras både av{" "}
            <Link href="/juridik/stiftelselagen/" className="text-primary-600 hover:underline">stiftelselagen</Link> och
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
        <div className="mb-16">
          <PartnerCTA campaign="driva-stiftelse" placement="mid" />
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
              Bokföringsskyldiga stiftelser ska upprätta årsredovisningen och lämna den till stiftelsens revisor senast
              fyra månader efter räkenskapsårets utgång. Sedan 2025 gäller dessutom att årsredovisningen tillsammans med
              revisionsberättelsen ska ha kommit in till Länsstyrelsen senast sex månader efter räkenskapsårets utgång.
            </p>
            <p className="text-warning-700">
              Även stiftelser som inte är bokföringsskyldiga måste föra räkenskaper över betalningar och upprätta en
              sammanställning över stiftelsens räkenskaper för varje räkenskapsår.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-l-red-400 p-6 mb-8">
            <h4 className="font-semibold text-red-800 mb-2">Nytt från 2025: inlämningsplikt med förseningsavgifter</h4>
            <p className="text-red-700">
              Genom nya regler i stiftelselagen (SFS 2024:1114) ska årsredovisning och revisionsberättelse ha kommit in
              till Länsstyrelsen senast sex månader efter räkenskapsårets utgång. Missas fristen tas en förseningsavgift
              på 7 500 kronor ut, och vid mer än fyra månaders ytterligare försening tillkommer 15 000 kronor. Detta är
              en ny skyldighet som många styrelser missar. Läs mer om{" "}
              <Link href="/juridik/#nya-regler-2025" className="text-red-800 underline hover:text-red-900">
                de nya reglerna för stiftelser 2025
              </Link>.
            </p>
          </div>
        </section>

        <section id="utdelning" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Utdelning av medel</h2>
          
          <p className="mb-6">
            Utdelning av stiftelsens medel ska ske i enlighet med stiftelsens ändamål som det är formulerat i stiftelseförordnandet.
            Styrelsen måste säkerställa att utdelningen uppfyller ändamålet och att den följer god stiftelsesed. För allmännyttiga
            stiftelser påverkar utdelningsnivån dessutom skattestatusen genom fullföljdskravet – läs mer i vår guide om{" "}
            <Link href="/resurser/skatteoptimering/" className="text-primary-600 hover:underline">skatteoptimering för stiftelser</Link>.
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
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Typexempel på framgångsrik förvaltning</h2>

          <p className="mb-6">
            Exemplen nedan är illustrativa typfall, inte beskrivningar av verkliga, namngivna stiftelser. De bygger på
            vanliga mönster i väl fungerande stiftelser och visar hur styrelsearbete, kapitalförvaltning och
            utdelningsprocesser kan samspela i praktiken. Funderar du på att bilda en egen stiftelse hittar du hela
            processen i vår guide om att{" "}
            <Link href="/starta-stiftelse/" className="text-primary-600 hover:underline">starta stiftelse</Link>.
          </p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fadeInUp">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary-700">Exempel: forskningsstiftelse med fokus på innovation</h3>
                <p className="text-sm text-gray-500 mb-4">Illustrativt typexempel | Kapital: ca 120 miljoner kr</p>

                <p className="mb-4">
                  Tänk dig en forskningsstiftelse med omkring 120 miljoner kronor i kapital som under många år byggt upp
                  en effektiv organisation. Genom en kombination av strategisk kapitalförvaltning och strukturerade
                  utdelningsprocesser kan en sådan stiftelse stödja ett stort antal innovationsprojekt över tid.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-primary-700 mb-2">Typiska framgångsfaktorer:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Diversifierad investeringsportfölj, till exempel 60% aktier, 30% räntebärande papper och 10% alternativa investeringar</li>
                    <li>Styrelse med kompletterande kompetenser inom teknik, ekonomi och juridik</li>
                    <li>Digitaliserad ansöknings- och uppföljningsprocess</li>
                    <li>Aktivt nätverkande med universitet och näringsliv</li>
                  </ul>
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
                <h3 className="text-xl font-semibold mb-2 text-accent-700">Exempel: kulturstiftelse som ställer om förvaltningen</h3>
                <p className="text-sm text-gray-500 mb-4">Illustrativt typexempel | Kapital: ca 85 miljoner kr</p>

                <p className="mb-4">
                  Ett annat typfall är en äldre kulturstiftelse med cirka 85 miljoner kronor i kapital som under en period
                  av låg avkastning behöver ställa om sin förvaltning för att kunna fortsätta dela ut medel i samma
                  omfattning som tidigare.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-accent-700 mb-2">Möjlig strategisk omställning:</h4>
                  <p className="mb-2">
                    När avkastningen på traditionella placeringar sjunker kan en sådan stiftelse exempelvis:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Ombalansera portföljen med ökat fokus på utdelande aktier</li>
                    <li>Utveckla kompletterande intäktsströmmar genom publikationer och utbildningar</li>
                    <li>Etablera samarbeten med andra kulturinstitutioner för kostnadsdelning</li>
                    <li>Effektivisera de administrativa processerna</li>
                  </ul>
                </div>

                <p className="text-gray-700">
                  I ett sådant scenario kan stiftelsen gradvis stärka sin utdelningskapacitet trots ett utmanande
                  marknadsläge. Omställningen förutsätter dock att styrelsen dokumenterar sina beslut och håller sig inom
                  ramarna i stiftelseförordnandet och{" "}
                  <Link href="/juridik/" className="text-primary-600 hover:underline">de juridiska regler som gäller för stiftelser</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
