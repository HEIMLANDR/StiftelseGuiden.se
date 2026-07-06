import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import PartnerCTA from "@/components/PartnerCTA";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Skatteoptimering för stiftelser",
  description: "Guide till skatteoptimering för stiftelser: skatteregler, inskränkt skattskyldighet, avdragsmöjligheter och hur du sänker skattebördan lagligt.",
  keywords: "stiftelseskatt, skatteoptimering stiftelse, inskränkt skattskyldighet, stiftelsebeskattning, skatteregler stiftelser, skattefri stiftelse, stiftelseguiden",
  path: "/resurser/skatteoptimering/",
  openGraphType: "article",
});

export default function TaxOptimizationPage() {
  return (
    <>
      <PageSchema
        title="Skatteoptimering för stiftelser"
        description="Guide till skatteoptimering för stiftelser: skatteregler, inskränkt skattskyldighet, avdragsmöjligheter och hur du sänker skattebördan lagligt."
        path="/resurser/skatteoptimering/"
        breadcrumbs={[
          { label: "Resurser", href: "/resurser" },
          { label: "Skatteoptimering" },
        ]}
      />
      {/* Hero Section */}
      <Hero
        title="Skatteoptimering för Stiftelser"
        subtitle="Guide till skatteregler, inskränkt skattskyldighet och lagliga sätt att minimera skattebördan för din stiftelse"
        size="small"
        pattern="dots"
      />

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Resurser", href: "/resurser" },
          { label: "Skatteoptimering" }
        ]} 
      />

      {/* Content */}
      <div className="container-padded">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Skatteoptimering för stiftelser</h2>
            <p className="mb-4 text-lg">
              Stiftelser i Sverige omfattas av särskilda skatteregler som skiljer sig från beskattningen av andra juridiska personer. 
              Med rätt kunskap och planering kan stiftelser optimera sin skattesituation på lagligt sätt och därmed maximera de 
              resurser som kan användas för att främja stiftelsens ändamål.
            </p>
            <p className="mb-6">
              Denna guide ger en översikt över de viktigaste skatteaspekterna för stiftelser och presenterar lagliga strategier 
              för att minimera skattebördan. Observera att skatteregler kan ändras och att det alltid är viktigt att konsultera 
              en skatterådgivare med expertis inom stiftelseområdet för specifik rådgivning.
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-l-primary-400 mb-8">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Viktigt att tänka på</h3>
              <p>
                Skatteoptimering handlar om att använda lagliga metoder för att minimera skatt, inte om skatteflykt eller skatteundandragande. 
                Alla åtgärder som beskrivs i denna guide är förenliga med svensk skattelagstiftning. Stiftelser har ett särskilt ansvar 
                att förvalta sina tillgångar ansvarsfullt och i enlighet med stiftelsens ändamål och gällande lagar.
              </p>
            </div>
          </section>
          
          {/* Grundläggande skatteregler för stiftelser */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Grundläggande skatteregler för stiftelser</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Obegränsad skattskyldighet</h3>
                <p className="mb-4">
                  Utgångspunkten i svensk skattelagstiftning är att stiftelser, liksom andra juridiska personer, har obegränsad 
                  skattskyldighet. Detta innebär att stiftelsen beskattas för alla sina inkomster, inklusive:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Kapitalinkomster (räntor, utdelningar, kapitalvinster)</li>
                  <li>Inkomster från näringsverksamhet</li>
                  <li>Hyresinkomster och andra fastighetsinkomster</li>
                </ul>
                <p>
                  Skattesatsen för stiftelser är samma som för aktiebolag, vilket för närvarande är 20,6%.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Inskränkt skattskyldighet</h3>
                <p className="mb-4">
                  Vissa stiftelser kan dock kvalificera för inskränkt skattskyldighet enligt 7 kap. inkomstskattelagen. 
                  Detta innebär att stiftelsen endast beskattas för inkomst av näringsverksamhet och inkomst från fastigheter 
                  som inte används i den allmännyttiga verksamheten.
                </p>
                <p className="mb-4">
                  För att kvalificera för inskränkt skattskyldighet måste stiftelsen uppfylla följande krav:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Ändamålskravet: Stiftelsen ska ha ett eller flera allmännyttiga ändamål, såsom att främja vård och uppfostran av barn, lämna bidrag för undervisning eller utbildning, främja vetenskaplig forskning, etc.</li>
                  <li>Verksamhetskravet (7 kap. 5 § inkomstskattelagen): Stiftelsen ska i den verksamhet som bedrivs uteslutande eller så gott som uteslutande – i praxis 90–95 procent eller mer – tillgodose det allmännyttiga ändamålet.</li>
                  <li>Fullföljdskravet (7 kap. 6 § inkomstskattelagen): Stiftelsen ska använda sin avkastning i skälig omfattning för det allmännyttiga ändamålet, i praxis cirka 75–80 procent av avkastningen. Bedömningen görs i första hand per år, men med möjlighet till en flerårsbedömning.</li>
                  <li>Öppenhetskravet: Stiftelsen får inte begränsa kretsen av destinatärer till en alltför snäv krets av personer.</li>
                </ul>
                <p className="mb-4">
                  Verksamhetskravet och fullföljdskravet blandas ofta ihop, men är två skilda krav: verksamhetskravet
                  handlar om vad stiftelsens verksamhet går ut på, medan fullföljdskravet handlar om hur stor del av
                  avkastningen som faktiskt används för ändamålet.
                </p>
                <p>
                  <Link href="/stiftelser/familjestiftelse/" className="text-primary-600 hover:underline">Familjestiftelser</Link>{" "}
                  och näringsdrivande stiftelser uppfyller vanligtvis inte dessa krav och har därför
                  obegränsad skattskyldighet.
                </p>
              </div>
            </div>
          </section>
          
          {/* Strategier för skatteoptimering */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Strategier för skatteoptimering</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">1. Säkerställ inskränkt skattskyldighet</h3>
                <p className="mb-4">
                  Den mest effektiva skatteoptimeringen för en stiftelse är att kvalificera för inskränkt skattskyldighet. 
                  För att uppnå detta:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Formulera stiftelsens ändamål tydligt i stadgarna så att det framgår att det är allmännyttigt</li>
                  <li>Dokumentera noggrant hur stiftelsens verksamhet främjar det allmännyttiga ändamålet</li>
                  <li>Planera utdelningar så att fullföljdskravet uppfylls (avkastningen ska användas i skälig omfattning för ändamålet, i praxis cirka 75–80 procent)</li>
                  <li>Undvik att begränsa destinatärskretsen till en alltför snäv grupp</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm italic">
                    <strong>Exempel:</strong> En forskningsstiftelse med inskränkt skattskyldighet har kapitalinkomster på 1 miljon kr. 
                    Utan inskränkt skattskyldighet skulle stiftelsen betala cirka 206 000 kr i skatt. Med inskränkt skattskyldighet 
                    betalar stiftelsen ingen skatt på dessa inkomster, vilket innebär att hela beloppet kan användas för att främja 
                    forskning.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">2. Optimera kapitalförvaltningen</h3>
                <p className="mb-4">
                  Även för stiftelser med inskränkt skattskyldighet är det viktigt att optimera kapitalförvaltningen:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Balansera portföljen mellan tillgångar som ger löpande avkastning (utdelningar, räntor) och tillgångar med potential för värdetillväxt</li>
                  <li>För stiftelser med obegränsad skattskyldighet, överväg skatteeffektiva investeringar som skattegynnade investeringssparkonton (ISK) där det är möjligt</li>
                  <li>Planera realisationer av värdepapper för att jämna ut kapitalvinster och kapitalförluster</li>
                  <li>Överväg investeringar i onoterade bolag som kan ge skattefri utdelning under vissa förutsättningar</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">3. Hantera fastigheter effektivt</h3>
                <p className="mb-4">
                  För stiftelser som äger fastigheter:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Använd fastigheter direkt i den allmännyttiga verksamheten när det är möjligt, eftersom inkomster från sådana fastigheter kan vara skattefria för stiftelser med inskränkt skattskyldighet</li>
                  <li>Planera underhåll och renoveringar strategiskt för att optimera avdragsmöjligheter</li>
                  <li>Överväg att placera fastigheter som inte används i den allmännyttiga verksamheten i ett separat dotterbolag</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">4. Optimera näringsverksamhet</h3>
                <p className="mb-4">
                  För stiftelser som bedriver näringsverksamhet:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Överväg att bedriva näringsverksamhet i ett dotterbolag för att separera den från stiftelsens övriga verksamhet</li>
                  <li>Säkerställ att näringsverksamheten har en naturlig koppling till stiftelsens ändamål</li>
                  <li>Utnyttja möjligheten till koncernbidrag mellan helägda dotterbolag för att utjämna resultat</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">5. Planera utdelningar strategiskt</h3>
                <p className="mb-4">
                  För stiftelser med inskränkt skattskyldighet:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Planera utdelningarna så att fullföljdskravet uppfylls – avkastningen ska användas i skälig omfattning för ändamålet, i praxis cirka 75–80 procent, i första hand bedömt per år</li>
                  <li>Balansera utdelningar mellan olika år för att hantera variationer i avkastning</li>
                  <li>Dokumentera noggrant hur utdelningar främjar stiftelsens allmännyttiga ändamål</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm italic">
                    <strong>Exempel:</strong> En stiftelse med inskränkt skattskyldighet har en årlig avkastning på 5 miljoner kr.
                    Enligt den tumregel som vuxit fram i praxis behöver stiftelsen använda minst omkring fyra miljoner kronor
                    (cirka 75–80 procent) för det allmännyttiga ändamålet. Bedömningen görs i första hand per år, men ett
                    enstaka år med lägre utdelning kan vägas upp av högre utdelning närliggande år, eftersom det finns utrymme
                    för en flerårsbedömning.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Särskilda skattefrågor */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Särskilda skattefrågor</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Mervärdesskatt (moms)</h3>
                <p className="mb-4">
                  Stiftelser är normalt inte momsregistrerade om de inte bedriver momspliktig verksamhet. Några viktiga punkter:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Bidrag och gåvor till stiftelser är normalt inte momspliktiga</li>
                  <li>Om stiftelsen bedriver näringsverksamhet kan den vara momspliktig för denna del</li>
                  <li>Vissa verksamheter är undantagna från momsplikt, t.ex. utbildning, sjukvård och social omsorg</li>
                  <li>Stiftelser som bedriver momspliktig verksamhet kan dra av ingående moms på inköp relaterade till denna verksamhet</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Arbetsgivaravgifter och personalskatter</h3>
                <p className="mb-4">
                  Stiftelser som har anställda eller betalar ut ersättningar:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Måste betala arbetsgivaravgifter och göra skatteavdrag på samma sätt som andra arbetsgivare</li>
                  <li>Kan i vissa fall använda sig av särskilda regler för ideella organisationer, t.ex. skattefria ersättningar till ideellt arbetande personer</li>
                  <li>Bör överväga förmåner som är skattemässigt fördelaktiga för både stiftelsen och de anställda</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Gåvor och donationer</h3>
                <p className="mb-4">
                  För gåvor och donationer gäller:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Gåvor till stiftelser är normalt inte avdragsgilla för givaren, med vissa undantag för gåvor till forskning och välgörenhet</li>
                  <li>Stiftelser betalar inte inkomstskatt på mottagna gåvor och donationer</li>
                  <li>Stiftelser är inte skyldiga att betala gåvoskatt (gåvoskatten är avskaffad i Sverige)</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Rapportering och dokumentation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Rapportering och dokumentation</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Deklarationsskyldighet</h3>
                <p className="mb-4">
                  Stiftelser är skyldiga att lämna inkomstdeklaration om de:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Har skattepliktiga inkomster</li>
                  <li>Har tillgångar över 1,5 miljoner kronor</li>
                  <li>Är bokföringsskyldiga enligt bokföringslagen</li>
                </ul>
                <p>
                  Även stiftelser med inskränkt skattskyldighet måste normalt lämna inkomstdeklaration för att styrka sin rätt till skattelättnader.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Dokumentation för inskränkt skattskyldighet</h3>
                <p className="mb-4">
                  För att styrka rätten till inskränkt skattskyldighet bör stiftelsen dokumentera:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Hur verksamheten främjar det allmännyttiga ändamålet</li>
                  <li>Hur fullföljdskravet uppfylls över tid</li>
                  <li>Att destinatärskretsen inte är för snäv</li>
                  <li>Att stiftelsens medel används för det avsedda ändamålet</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Särskild uppgift</h3>
                <p>
                  Stiftelser som är undantagna från inkomstbeskattning ska lämna särskild uppgift till Skatteverket. 
                  Denna uppgift innehåller information om stiftelsens tillgångar, skulder, intäkter och kostnader.
                </p>
              </div>
            </div>
          </section>
          
          {/* Aktuella förändringar i skattelagstiftningen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Aktuella förändringar i skattelagstiftningen</h2>
            
            <p className="mb-4">
              Skattelagstiftningen förändras kontinuerligt, och det är viktigt för stiftelser att hålla sig uppdaterade 
              om förändringar som kan påverka deras skattesituation. Några aktuella förändringar och trender:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Skärpta krav på transparens och rapportering för stiftelser</li>
              <li>Ökad granskning av stiftelser med inskränkt skattskyldighet</li>
              <li>Förändringar i reglerna för näringsverksamhet bedriven av stiftelser</li>
              <li>Internationella skattefrågor för stiftelser med verksamhet eller tillgångar i flera länder</li>
            </ul>

            <div className="bg-primary-50 border-l-4 border-l-primary-400 p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2 text-primary-800">Nya regler från 2025: inlämningsplikt och förseningsavgifter</h3>
              <p className="text-primary-700">
                Sedan 2025 gäller skärpta regler i{" "}
                <Link href="/juridik/stiftelselagen/" className="text-primary-800 underline hover:text-primary-900">stiftelselagen</Link>{" "}
                (SFS 2024:1114): årsredovisning och revisionsberättelse ska ha kommit in till Länsstyrelsen senast sex
                månader efter räkenskapsårets utgång. Missas fristen tas en förseningsavgift på 7 500 kronor ut, och vid
                mer än fyra månaders ytterligare försening tillkommer 15 000 kronor. För styrelsen är detta i praktiken
                en ny administrativ deadline att planera in vid sidan av deklarationen. Läs mer om{" "}
                <Link href="/juridik/#nya-regler-2025" className="text-primary-800 underline hover:text-primary-900">de nya reglerna för stiftelser 2025</Link>.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">Håll dig uppdaterad</h4>
              <p>
                För att hålla dig uppdaterad om förändringar i skattelagstiftningen som påverkar stiftelser, 
                rekommenderar vi att du regelbundet besöker Skatteverkets webbplats, prenumererar på nyhetsbrev 
                från branschorganisationer och konsulterar skatterådgivare med expertis inom stiftelseområdet.
              </p>
            </div>
          </section>
          
          {/* Sammanfattning */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Sammanfattning</h2>
            
            <p className="mb-4">
              Effektiv skatteoptimering för stiftelser handlar om att:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Säkerställa inskränkt skattskyldighet för stiftelser med allmännyttiga ändamål</li>
              <li>Optimera kapitalförvaltningen med hänsyn till skatteeffekter</li>
              <li>Hantera fastigheter och näringsverksamhet på ett skatteeffektivt sätt</li>
              <li>Planera utdelningar strategiskt för att uppfylla fullföljdskravet</li>
              <li>Hålla sig uppdaterad om förändringar i skattelagstiftningen</li>
            </ul>
            
            <p>
              Genom att implementera dessa strategier kan stiftelser minimera sin skattebörda på lagligt sätt och 
              maximera de resurser som kan användas för att främja stiftelsens ändamål.
            </p>
          </section>
          
          {/* CTA Section */}
          <div className="mb-16">
            <PartnerCTA campaign="skatteoptimering" placement="bottom" />
          </div>
        </div>
      </div>
    </>
  );
}