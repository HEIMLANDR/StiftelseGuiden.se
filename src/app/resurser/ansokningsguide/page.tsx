import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import PartnerCTA from "@/components/PartnerCTA";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";
import { sokUrl } from "@/lib/partner";

export const metadata = createPageMetadata({
  title: "Ansökningsguide för stiftelser",
  description: "Komplett guide för att söka stiftelsemedel: skriv framgångsrika ansökningar, undvik vanliga misstag och maximera chanserna till bidrag från svenska stiftelser.",
  keywords: "stiftelseansökan, ansöka stiftelsemedel, ansökningsguide, stiftelsebidrag, ansökningsmall, ansökningstips, stiftelseguiden",
  path: "/resurser/ansokningsguide/",
  openGraphType: "article",
});

export default function ApplicationGuidePage() {
  return (
    <>
      <PageSchema
        title="Ansökningsguide för stiftelser"
        description="Komplett guide för att söka stiftelsemedel: skriv framgångsrika ansökningar, undvik vanliga misstag och maximera chanserna till bidrag från svenska stiftelser."
        path="/resurser/ansokningsguide/"
        breadcrumbs={[
          { label: "Resurser", href: "/resurser" },
          { label: "Ansökningsguide" },
        ]}
      />
      {/* Hero Section */}
      <Hero
        title="Ansökningsguide för stiftelser"
        subtitle="Steg för steg-guide för att skriva framgångsrika ansökningar och maximera dina chanser att få stiftelsemedel"
        size="small"
        kicker="Resurser"
      />

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Resurser", href: "/resurser" },
          { label: "Ansökningsguide" }
        ]} 
      />

      {/* Content */}
      <div className="container-padded">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Att söka stiftelsemedel</h2>
            <p className="mb-4 text-lg text-gray-600">
              Att söka stiftelsemedel kan vara en komplex process, men med rätt förberedelser och kunskap kan du avsevärt öka dina chanser att få din ansökan beviljad. Denna guide tar dig genom hela processen från förberedelse till uppföljning.
            </p>
            <p className="mb-6 text-gray-600">
              Varje år delar svenska stiftelser ut miljardbelopp till forskning, utbildning, kultur, sociala ändamål och mycket mer. Många av dessa medel förblir dock outnyttjade på grund av brist på kvalificerade ansökningar. Med denna guide vill vi hjälpa dig att ta del av dessa resurser.
            </p>
            
            <div className="callout callout-info mb-8">
              <h3 className="font-semibold text-gray-900 mb-1">Viktigt att tänka på</h3>
              <p className="text-sm text-gray-700">
                Varje stiftelse har sina egna specifika krav och processer. Denna guide ger generella riktlinjer, men det är alltid viktigt att noggrant läsa och följa varje enskild stiftelses instruktioner. För mer specifik hjälp med att hitta rätt stiftelser och skräddarsy dina ansökningar, besök <a href={sokUrl("ansokningsguide", "inline")} className="text-primary-700 hover:text-primary-800 hover:underline" target="_blank" rel="noopener noreferrer">SökaStiftelseMedel.se</a>.
              </p>
            </div>
          </section>
          
          {/* Step 1: Preparation */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-4">1</div>
              <h2 className="text-2xl font-semibold tracking-tight">Förberedelse</h2>
            </div>
            
            <div className="pl-12">
              <h3 className="text-xl font-semibold mb-3">Definiera ditt projekt tydligt</h3>
              <p className="mb-4">
                Innan du börjar söka efter stiftelser, se till att du har en klar och tydlig definition av ditt projekt eller ändamål:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Vad är det specifika målet eller syftet?</li>
                <li>Vilka konkreta aktiviteter eller insatser planerar du?</li>
                <li>Vilken målgrupp eller vilket område kommer att gynnas?</li>
                <li>Vilken budget behövs och hur är den fördelad?</li>
                <li>Vilken tidsram har projektet?</li>
                <li>Vilka mätbara resultat förväntar du dig?</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Hitta rätt stiftelser</h3>
              <p className="mb-4">
                Att hitta stiftelser vars ändamål matchar ditt projekt är avgörande. Sök inte slumpmässigt utan fokusera på stiftelser där ditt projekt passar in:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Använd <a href={sokUrl("ansokningsguide", "inline")} className="text-primary-700 hover:text-primary-800 hover:underline" target="_blank" rel="noopener noreferrer">SökaStiftelseMedel.se</a> för att hitta stiftelser som matchar dina kriterier</li>
                <li>Bläddra bland <Link href="/stiftelser/aktiva-stiftelser/" className="text-primary-700 hover:text-primary-800 hover:underline">aktiva stiftelser som delar ut medel</Link> för att få en överblick</li>
                <li>Läs noggrant igenom stiftelsens stadgar och ändamål</li>
                <li>Kontrollera tidigare beviljade ansökningar för att förstå vad stiftelsen prioriterar</li>
                <li>Verifiera ansökningsperioder och deadlines</li>
                <li>Undersök om stiftelsen har specifika ansökningsformulär eller mallar</li>
              </ul>
              
              <div className="callout callout-info mb-6">
                <h4 className="font-semibold text-gray-900 mb-1">Tips: Skapa en ansökningskalender</h4>
                <p className="text-sm text-gray-700">
                  Många stiftelser har specifika ansökningsperioder som återkommer årligen. Skapa en kalender med deadlines för de stiftelser du planerar att söka från. Detta hjälper dig att planera ditt arbete och undvika att missa viktiga datum.
                </p>
              </div>
            </div>
          </section>
          
          {/* Step 2: Writing the Application */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-4">2</div>
              <h2 className="text-2xl font-semibold tracking-tight">Skriva ansökan</h2>
            </div>
            
            <div className="pl-12">
              <h3 className="text-xl font-semibold mb-3">Grundläggande struktur</h3>
              <p className="mb-4">
                En välstrukturerad ansökan innehåller vanligtvis följande delar:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Rubrik/titel</strong> - Koncis och beskrivande</li>
                <li><strong>Sammanfattning</strong> - Kort översikt av hela projektet (max 200 ord)</li>
                <li><strong>Bakgrund och syfte</strong> - Varför projektet behövs och vad det ska uppnå</li>
                <li><strong>Målgrupp</strong> - Vilka som kommer att gynnas av projektet</li>
                <li><strong>Metod/genomförande</strong> - Hur projektet ska genomföras</li>
                <li><strong>Tidsplan</strong> - När olika aktiviteter ska genomföras</li>
                <li><strong>Budget</strong> - Detaljerad kostnadsplan</li>
                <li><strong>Förväntade resultat</strong> - Konkreta och mätbara utfall</li>
                <li><strong>Utvärdering</strong> - Hur resultaten ska mätas och utvärderas</li>
                <li><strong>Om sökanden</strong> - Relevant information om dig/din organisation</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Anpassa till stiftelsens ändamål</h3>
              <p className="mb-4">
                En av de viktigaste aspekterna av en framgångsrik ansökan är att tydligt visa hur ditt projekt överensstämmer med stiftelsens ändamål:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Använd nyckelord och formuleringar från stiftelsens egna beskrivningar</li>
                <li>Framhäv de aspekter av ditt projekt som bäst matchar stiftelsens fokusområden</li>
                <li>Visa hur ditt projekt bidrar till att uppfylla stiftelsens vision och mål</li>
                <li>Undvik att "tänja" på sanningen - var ärlig med projektets syfte</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Språk och presentation</h3>
              <p className="mb-4">
                Hur du formulerar din ansökan är nästan lika viktigt som innehållet:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Använd ett klart, koncist och professionellt språk</li>
                <li>Undvik jargong och överdriven användning av facktermer</li>
                <li>Var specifik och konkret - undvik vaga formuleringar</li>
                <li>Använd aktiva verb och positiva formuleringar</li>
                <li>Strukturera texten med tydliga rubriker och korta stycken</li>
                <li>Inkludera endast relevant information</li>
              </ul>
              
              <div className="callout callout-warning mb-6">
                <h4 className="font-semibold text-gray-900 mb-1">Vanliga misstag att undvika</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
                  <li>Att skicka samma generiska ansökan till flera stiftelser</li>
                  <li>Att ansöka om mer pengar än vad stiftelsen vanligtvis beviljar</li>
                  <li>Att ha en otydlig eller orealistisk budget</li>
                  <li>Att använda ett alltför emotionellt eller säljande språk</li>
                  <li>Att inkludera irrelevant information som distraherar från huvudsyftet</li>
                  <li>Att ha språkliga eller grammatiska fel</li>
                </ul>
              </div>
              
              <div className="callout callout-info my-8 text-sm text-gray-700">
                Vår mall för projektansökan är under uppdatering och publiceras inom kort. Se <Link href="/dokument/" className="text-primary-700 hover:text-primary-800 font-medium hover:underline">Dokument & mallar</Link> för aktuella resurser.
              </div>
            </div>
          </section>
          
          {/* Step 3: Budget */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-4">3</div>
              <h2 className="text-2xl font-semibold tracking-tight">Budget</h2>
            </div>
            
            <div className="pl-12">
              <p className="mb-4">
                En välutformad budget är avgörande för en framgångsrik ansökan. Den visar att du har tänkt igenom projektets ekonomiska aspekter noggrant:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Var detaljerad och specifik - bryt ner kostnader i tydliga kategorier</li>
                <li>Se till att budgeten är realistisk och motiverad</li>
                <li>Inkludera både direkta kostnader (material, personal) och indirekta kostnader (administration)</li>
                <li>Om du söker delfinansiering, ange tydligt vilka andra finansieringskällor du har eller planerar att söka från</li>
                <li>Förklara eventuella ovanliga eller stora kostnadsposter</li>
              </ul>
              
              <div className="card mb-6">
                <h4 className="font-semibold mb-2">Exempel på budgetkategorier</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                  <li>Personalkostnader (löner, arvoden, sociala avgifter)</li>
                  <li>Material och utrustning</li>
                  <li>Lokalkostnader</li>
                  <li>Resekostnader</li>
                  <li>Marknadsföring och kommunikation</li>
                  <li>Administrativa kostnader</li>
                  <li>Utvärdering och dokumentation</li>
                  <li>Oförutsedda utgifter (vanligtvis 5-10% av totalbudgeten)</li>
                </ul>
              </div>
              
              <div className="callout callout-info my-8 text-sm text-gray-700">
                Vår budgetmall är under uppdatering och publiceras inom kort. Se <Link href="/dokument/" className="text-primary-700 hover:text-primary-800 font-medium hover:underline">Dokument & mallar</Link> för aktuella resurser.
              </div>
            </div>
          </section>
          
          {/* Step 4: Submission and Follow-up */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-700 text-white text-sm font-semibold mr-4">4</div>
              <h2 className="text-2xl font-semibold tracking-tight">Inlämning och uppföljning</h2>
            </div>
            
            <div className="pl-12">
              <h3 className="text-xl font-semibold mb-3">Inlämning</h3>
              <p className="mb-4">
                När du lämnar in din ansökan, tänk på följande:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Följ stiftelsens instruktioner exakt - format, bilagor, etc.</li>
                <li>Skicka in i god tid före deadline</li>
                <li>Behåll en kopia av allt du skickar in</li>
                <li>Om möjligt, bekräfta att ansökan har mottagits</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Uppföljning</h3>
              <p className="mb-4">
                Efter inlämning:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Var beredd att svara på eventuella frågor från stiftelsen</li>
                <li>Respektera stiftelsens beslutsprocess och tidsram</li>
                <li>Om din ansökan avslås, be om feedback för framtida ansökningar</li>
                <li>Om din ansökan beviljas, följ stiftelsens riktlinjer för rapportering och redovisning</li>
              </ul>
              
              <div className="card mb-6">
                <h4 className="font-semibold mb-2">Om du får avslag</h4>
                <p className="mb-2 text-sm text-gray-600">
                  Avslag är vanliga och betyder inte nödvändigtvis att ditt projekt inte är värdefullt. Det kan bero på:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                  <li>Hög konkurrens om begränsade medel</li>
                  <li>Att projektet inte helt matchade stiftelsens prioriteringar</li>
                  <li>Brister i ansökans utformning</li>
                </ul>
                <p className="mt-2 text-sm text-gray-600">
                  Använd avslag som en möjlighet att förbättra framtida ansökningar. Be om feedback och överväg att omarbeta ansökan för andra stiftelser.
                </p>
              </div>
            </div>
          </section>
          
          {/* Additional Resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Ytterligare resurser</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold mb-3">Mallar och checklistor</h3>
                <p className="mb-4">
                  Våra mallar och checklistor för ansökningar, forskningsmedel och stipendier är under uppdatering och publiceras inom kort.
                </p>
                <Link href="/dokument/" className="text-primary-700 hover:text-primary-800 font-medium hover:underline inline-flex items-center">
                  Till Dokument & mallar
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-3">Fördjupa dig vidare</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/resurser/stiftelseordlista/" className="text-primary-700 hover:text-primary-800 hover:underline">Stiftelseordlista – termer och begrepp förklarade</Link>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/stiftelser/aktiva-stiftelser/" className="text-primary-700 hover:text-primary-800 hover:underline">Aktiva stiftelser som delar ut medel</Link>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <Link href="/dokument/" className="text-primary-700 hover:text-primary-800 hover:underline">Dokument & mallar</Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Partner CTA */}
          <PartnerCTA campaign="ansokningsguide" placement="bottom" className="mb-16" />
        </div>
      </div>
    </>
  );
}