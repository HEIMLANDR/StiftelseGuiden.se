import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tips och trix för stiftelser och företag | Dolda fördelar | StiftelseGuiden",
  description: "Avancerade strategier och dolda fördelar med stiftelser och företag. Upptäck lagliga kryphål, skattefördelar och optimeringsstrategier som få känner till.",
  keywords: "stiftelsetips, skatteplanering stiftelse, stiftelse skatteparadis, förmögenhetsplanering, stiftelse kryphål, stiftelse skattefördelar, stiftelse företag kombination, stiftelseguiden",
};

export default function TipsAndTricksPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Tips och trix för stiftelser och företag"
        subtitle="Avancerade strategier och dolda fördelar som få känner till"
        size="small"
        pattern="dots"
      />

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Resurser", href: "/resurser" },
          { label: "Tips och trix" }
        ]} 
      />

      {/* Content */}
      <div className="container-padded">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Dolda fördelar och avancerade strategier</h2>
            <p className="mb-4 text-lg">
              Stiftelser och företag erbjuder många fördelar som sällan diskuteras öppet. På denna sida utforskar vi avancerade 
              strategier och mindre kända möjligheter som kan ge betydande fördelar för den som vet hur man navigerar i regelverket.
            </p>
            <p className="mb-6">
              Observera att alla strategier som presenteras här är lagliga, men de befinner sig ibland i gråzoner där 
              regelverket är öppet för tolkning. Vi rekommenderar alltid att du konsulterar med juridiska och skattemässiga 
              experter innan du implementerar någon av dessa strategier.
            </p>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-l-red-400 mb-8">
              <h3 className="text-xl font-semibold mb-2 text-red-700">Viktigt att tänka på</h3>
              <p>
                Denna information är endast avsedd för utbildningssyfte. Skattelagstiftningen ändras kontinuerligt, och 
                vad som är lagligt idag kan bli olagligt imorgon. Dessutom kan Skatteverket och domstolar göra olika 
                bedömningar i enskilda fall. Använd alltid professionell rådgivning innan du implementerar avancerade 
                skatteplaneringsstrategier.
              </p>
            </div>
          </section>
          
          {/* Stiftelser som skatteplaneringsverktyg */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Stiftelser som skatteplaneringsverktyg</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">1. Familjestiftelser och förmögenhetsplanering</h3>
                <p className="mb-4">
                  Familjestiftelser har länge använts av förmögna familjer för att bevara och skydda tillgångar över generationer. 
                  Här är några mindre kända fördelar:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Skydd mot arvsskatt i andra länder:</strong> Även om Sverige har avskaffat arvs- och gåvoskatten, 
                    kan en svensk familjestiftelse användas för att skydda tillgångar från arvsskatt i andra länder där 
                    familjemedlemmar är bosatta.
                  </li>
                  <li>
                    <strong>Skydd mot skilsmässa och fordringsägare:</strong> Tillgångar i en stiftelse ingår inte i en 
                    destinatärs giftorättsgods eller konkursbo, vilket ger ett starkt skydd vid skilsmässa eller ekonomiska problem.
                  </li>
                  <li>
                    <strong>Kontroll utan ägande:</strong> Som stiftare kan du utforma stadgarna så att du behåller betydande 
                    inflytande över tillgångarna utan att formellt äga dem, genom att t.ex. utse dig själv till styrelseledamot 
                    på livstid eller specificera detaljerade förvaltningsdirektiv.
                  </li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm italic">
                    <strong>Exempel:</strong> En förmögen entreprenör bildar en familjestiftelse och överför aktier i sitt 
                    företag till stiftelsen. Stiftelsens ändamål är att stödja familjemedlemmars utbildning och företagande. 
                    Entreprenören sitter i stiftelsens styrelse och kan därmed fortsätta att indirekt kontrollera företaget, 
                    samtidigt som tillgångarna är skyddade från eventuella framtida fordringsägare.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">2. Internationella stiftelsestrukturer</h3>
                <p className="mb-4">
                  Genom att kombinera svenska stiftelser med internationella strukturer kan man uppnå betydande skattefördelar:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Stiftelse med dotterbolag i lågskattejurisdiktioner:</strong> En svensk stiftelse kan äga 
                    dotterbolag i länder med fördelaktiga skatteavtal. Vinster kan ackumuleras i dotterbolagen och 
                    återinvesteras utan att först beskattas i Sverige.
                  </li>
                  <li>
                    <strong>Dubbla stiftelsestrukturer:</strong> Genom att kombinera en svensk stiftelse med en stiftelse 
                    i ett annat land (t.ex. Liechtenstein eller Panama) kan man skapa strukturer där tillgångar och inkomster 
                    flödar mellan jurisdiktioner på skatteeffektiva sätt.
                  </li>
                  <li>
                    <strong>Stiftelser i gränslandet:</strong> Vissa jurisdiktioner erbjuder stiftelseliknande strukturer 
                    som inte alltid automatiskt erkänns som stiftelser enligt svensk rätt, vilket kan skapa möjligheter 
                    för skatteplanering i gråzonen.
                  </li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm italic">
                    <strong>Observera:</strong> Internationella stiftelsestrukturer är komplexa och kräver noggrann planering 
                    för att undvika att klassificeras som skatteflykt enligt CFC-reglerna eller lagen mot skatteflykt. 
                    Skatteverket granskar sådana strukturer noggrant.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">3. Allmännyttiga stiftelser med privata fördelar</h3>
                <p className="mb-4">
                  Allmännyttiga stiftelser kan under vissa omständigheter kombineras med privata fördelar:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Anställning och arvoden:</strong> Stiftare eller närstående kan anställas av stiftelsen eller 
                    få styrelsearvoden, så länge ersättningen är marknadsmässig. Detta kan vara ett sätt att få inkomst 
                    från stiftelsen samtidigt som stiftelsen behåller sin inskränkta skattskyldighet.
                  </li>
                  <li>
                    <strong>Forskningsstiftelser med kommersiell potential:</strong> En stiftelse med forskningsändamål 
                    kan finansiera forskning som senare kan kommersialiseras genom ett separat bolag där stiftaren har intressen.
                  </li>
                  <li>
                    <strong>Fastighetsägande stiftelser:</strong> En allmännyttig stiftelse kan äga fastigheter som delvis 
                    används för allmännyttiga ändamål och delvis hyrs ut till närstående till stiftaren till marknadsmässiga villkor.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Kombinationer av stiftelser och företag */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Kombinationer av stiftelser och företag</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">1. Stiftelse som ägare till företag</h3>
                <p className="mb-4">
                  Att låta en stiftelse äga ett företag kan ge flera fördelar:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Långsiktigt och skyddat ägande:</strong> Företaget skyddas från fientliga uppköp och kortsiktiga 
                    vinstintressen, vilket möjliggör långsiktiga investeringar och strategier.
                  </li>
                  <li>
                    <strong>Skatteeffektiv vinstöverföring:</strong> Vinster från företaget kan överföras till stiftelsen 
                    genom utdelning. Om stiftelsen har inskränkt skattskyldighet beskattas inte dessa utdelningar.
                  </li>
                  <li>
                    <strong>Dubbla strukturer:</strong> Genom att kombinera en näringsdrivande stiftelse med ett holdingbolag 
                    och operativa dotterbolag kan man skapa strukturer där vinster och tillgångar flödar på skatteeffektiva sätt.
                  </li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm italic">
                    <strong>Exempel:</strong> Flera av Sveriges största företag, som H&M, IKEA och Tetra Pak, kontrolleras 
                    helt eller delvis av stiftelser, vilket har bidragit till deras långsiktiga framgång och skatteeffektiva struktur.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">2. Parallella strukturer</h3>
                <p className="mb-4">
                  Genom att skapa parallella strukturer med både stiftelser och företag kan man optimera både kontroll och skatteeffektivitet:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Delat ägande:</strong> Ett företag kan ägas delvis av en stiftelse och delvis av privatpersoner, 
                    vilket ger möjlighet till både kontroll och flexibilitet i vinstuttag.
                  </li>
                  <li>
                    <strong>Korsägande:</strong> Komplexa strukturer med korsägande mellan stiftelser och företag kan skapa 
                    situationer där ingen enskild person har formell kontroll, men där en familj eller grupp ändå har 
                    betydande inflytande.
                  </li>
                  <li>
                    <strong>Röstdifferentiering:</strong> Genom att kombinera aktier med olika röstvärde med stiftelseägande 
                    kan man skapa strukturer där kontrollen är separerad från det ekonomiska ägandet.
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">3. Stiftelser för immateriella rättigheter</h3>
                <p className="mb-4">
                  En särskilt effektiv strategi är att placera immateriella rättigheter i stiftelser:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>IP-stiftelser:</strong> Genom att placera patent, varumärken eller andra immateriella rättigheter 
                    i en stiftelse, som sedan licensierar dessa till operativa företag, kan man skapa skatteeffektiva strukturer.
                  </li>
                  <li>
                    <strong>Forskningsstiftelser:</strong> En stiftelse kan finansiera forskning och utveckling och sedan 
                    äga de resulterande immateriella rättigheterna, vilket kan ge skattefördelar jämfört med om ett 
                    vinstdrivande företag skulle göra samma investering.
                  </li>
                  <li>
                    <strong>Internationella IP-strukturer:</strong> Genom att kombinera svenska stiftelser med utländska 
                    dotterbolag kan man skapa strukturer där royaltyflöden optimeras ur ett skatteperspektiv.
                  </li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm italic">
                    <strong>Observera:</strong> Sedan införandet av BEPS (Base Erosion and Profit Shifting) och andra 
                    internationella initiativ mot skatteplanering har möjligheterna att använda IP-strukturer för 
                    aggressiv skatteplanering begränsats, men lagliga möjligheter finns fortfarande.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Gråzoner och vad man bör se upp med */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Gråzoner och vad man bör se upp med</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Riskområden att vara medveten om</h3>
                <p className="mb-4">
                  Följande områden befinner sig ofta i gråzoner och bör hanteras med särskild försiktighet:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Skenarrangemang:</strong> Strukturer som saknar affärsmässig substans och vars huvudsakliga 
                    syfte är skatteundandragande kan angripas med lagen mot skatteflykt.
                  </li>
                  <li>
                    <strong>Närståendetransaktioner:</strong> Transaktioner mellan stiftelser och närstående till stiftaren 
                    granskas särskilt noga av Skatteverket. Alla sådana transaktioner måste ske på marknadsmässiga villkor.
                  </li>
                  <li>
                    <strong>Fullföljdskravet:</strong> Allmännyttiga stiftelser måste använda minst 80% av avkastningen för 
                    det allmännyttiga ändamålet över en femårsperiod. Kreativa tolkningar av detta krav kan leda till att 
                    stiftelsen förlorar sin inskränkta skattskyldighet.
                  </li>
                  <li>
                    <strong>CFC-regler:</strong> Kontrollerade utländska bolag (CFC) som ägs av svenska stiftelser kan 
                    under vissa omständigheter leda till beskattning i Sverige, trots att de är baserade utomlands.
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Skatteverkets fokusområden</h3>
                <p className="mb-4">
                  Skatteverket fokuserar särskilt på följande områden när det gäller stiftelser och skatteplanering:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Internationella strukturer:</strong> Stiftelser med kopplingar till lågskattejurisdiktioner 
                    granskas särskilt noga.
                  </li>
                  <li>
                    <strong>Destinatärskretsen:</strong> Stiftelser som påstår sig vara allmännyttiga men som i praktiken 
                    gynnar en begränsad krets av personer.
                  </li>
                  <li>
                    <strong>Förtäckta förmåner:</strong> Situationer där stiftare eller närstående får förmåner från 
                    stiftelsen som inte är marknadsmässiga eller som inte är förenliga med stiftelsens ändamål.
                  </li>
                  <li>
                    <strong>Värdeöverföringar:</strong> Transaktioner där värden förs över mellan stiftelser och närstående 
                    företag eller personer på sätt som inte är marknadsmässiga.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Framtida trender och möjligheter */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Framtida trender och möjligheter</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Nya möjligheter att hålla ögonen på</h3>
                <p className="mb-4">
                  Följande områden kan erbjuda nya möjligheter för skatteeffektiv förmögenhetsplanering med stiftelser:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Digitala tillgångar:</strong> Stiftelser som förvaltar kryptovalutor och andra digitala tillgångar 
                    befinner sig i ett område där regelverket fortfarande utvecklas, vilket kan skapa möjligheter.
                  </li>
                  <li>
                    <strong>Impact investing:</strong> Allmännyttiga stiftelser som investerar i företag med socialt eller 
                    miljömässigt syfte kan kombinera skattefördelar med affärsmöjligheter.
                  </li>
                  <li>
                    <strong>Nya jurisdiktioner:</strong> Länder som försöker attrahera kapital genom fördelaktiga regler 
                    för stiftelser och liknande strukturer.
                  </li>
                  <li>
                    <strong>Hybridstrukturer:</strong> Nya typer av juridiska personer som kombinerar egenskaper från 
                    stiftelser, företag och andra organisationsformer.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Sammanfattning */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Sammanfattning</h2>
            
            <p className="mb-4">
              Stiftelser och företag erbjuder många möjligheter för skatteeffektiv förmögenhetsplanering och långsiktig 
              förvaltning av tillgångar. Genom att kombinera olika strukturer och utnyttja de möjligheter som lagstiftningen 
              erbjuder kan man uppnå betydande fördelar.
            </p>
            
            <p className="mb-4">
              Samtidigt är det viktigt att vara medveten om riskerna och gråzonerna. Skatteplanering som går över gränsen 
              till skatteflykt kan leda till betydande ekonomiska och juridiska konsekvenser.
            </p>
            
            <p>
              För att navigera säkert i detta komplexa område rekommenderar vi att du alltid konsulterar med experter 
              som har djup kunskap om både stiftelserätt och skatterätt, och som kan hjälpa dig att utforma strukturer 
              som är både lagliga och effektiva.
            </p>
          </section>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg mb-16 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-white/10 rounded-full"></div>
              <div className="absolute -left-24 -top-24 w-64 h-64 bg-white/5 rounded-full"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-4">Behöver du experthjälp med avancerad skatteplanering?</h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                SökaStiftelseMedel.se kan koppla dig till experter inom stiftelserätt och skatteplanering som kan hjälpa 
                dig att utforma skräddarsydda lösningar för dina specifika behov.
              </p>
              <a 
                href="https://www.sokastiftelsemedel.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-white/90 transition-colors"
              >
                Kontakta oss för experthjälp
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