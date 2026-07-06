import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";
import { sokUrl } from "@/lib/partner";

const faqItems = [
  {
    question: "Vad är skillnaden mellan en stiftelse och en förening?",
    answer:
      "En stiftelse är en självägande förmögenhet som avskilts för ett bestämt ändamål. Till skillnad från en förening har en stiftelse inga medlemmar och styrs av stiftelseförordnandet som upprättades när stiftelsen bildades.",
  },
  {
    question: "Hur mycket kapital behövs för att starta en stiftelse?",
    answer:
      "Det finns inget lagstadgat minimikapital och ingen officiell siffra från myndigheterna. En vanlig informell tumregel bland rådgivare är dock ett startkapital på omkring 350 000 till 400 000 kronor, så att avkastningen räcker till både administrativa kostnader och utdelning för ändamålet.",
  },
  {
    question: "Kan man ändra ändamålet i en befintlig stiftelse?",
    answer:
      "Stiftelseförordnandet är i princip oföränderligt, men ändringar kan i vissa fall tillåtas genom permutation. Ändring av själva ändamålet kräver synnerliga skäl och prövas av Kammarkollegiet, medan Länsstyrelsen beslutar om övriga ändringar. Kammarkollegiets ansökningsavgift är 12 200 kronor (3 300 kronor för små stiftelser).",
  },
  {
    question: "Måste alla stiftelser registreras?",
    answer:
      "Ja, med ett undantag. Alla stiftelser ska registreras hos Länsstyrelsen inom sex månader från bildandet. Undantaget är stiftelser vars tillgångar enligt förordnandet endast får användas för bestämda fysiska personer, typiskt familjestiftelser, som i stället får organisationsnummer från Skatteverket. Registreringen är avgiftsfri, men årliga tillsyns- och registerhållningsavgifter tillkommer.",
  },
  {
    question: "Hur beskattas stiftelser?",
    answer:
      "Stiftelser är i princip skattskyldiga för all inkomst med 20,6 procent statlig inkomstskatt, men allmännyttiga stiftelser kan få inskränkt skattskyldighet och beskattas då endast för vissa inkomster från näringsverksamhet och fastigheter. Familjestiftelser är alltid oinskränkt skattskyldiga.",
  },
  {
    question: "Hur länge kan en stiftelse existera?",
    answer:
      "En stiftelse kan i princip existera för evigt så länge den har tillräckliga medel för att uppfylla sitt ändamål.",
  },
];

export const metadata = createPageMetadata({
  title: "Kontakta StiftelseGuiden",
  description: "Har du frågor om stiftelser i Sverige? Kontakta oss på StiftelseGuiden eller besök vår partner SökaStiftelseMedel.se för professionell rådgivning.",
  keywords: "kontakt stiftelse, frågor stiftelse, stiftelseguiden kontakt, stiftelserådgivning",
  path: "/kontakt/",
});

export default function ContactPage() {
  return (
    <>
      <PageSchema
        title="Kontakta StiftelseGuiden"
        description="Har du frågor om stiftelser i Sverige? Kontakta oss på StiftelseGuiden eller besök vår partner SökaStiftelseMedel.se för professionell rådgivning."
        path="/kontakt/"
        pageType="ContactPage"
        breadcrumbs={[{ label: "Kontakt" }]}
        faq={faqItems}
      />
      {/* Hero Section */}
      <Hero
        title="Kontakta oss"
        subtitle="Har du frågor om stiftelser eller behöver hjälp? Vi finns här för dig."
        size="small"
        kicker="Kontakt"
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Kontakt" }
        ]}
      />

      {/* Content */}
      <div className="container-padded">
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Kontaktformulär</h2>

            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Kontaktinformation</h2>

            <div className="card mb-6">
              <h3 className="text-xl font-semibold mb-4">Kontakta oss</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Kontaktformulär</p>
                    <p className="text-gray-600">Använd formuläret till vänster för att kontakta oss</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Svarstid</p>
                    <p className="text-gray-600">Vi svarar normalt inom 1-2 arbetsdagar</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Professionell hjälp?</h3>
              <p className="mb-4 text-gray-600">
                För mer omfattande hjälp med stiftelser, besök vår samarbetspartner som erbjuder professionell rådgivning.
              </p>
              <a
                href={sokUrl("kontakt", "sidebar")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Besök SökaStiftelseMedel.se
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6" id="faq">Vanliga frågor</h2>

          <div className="card p-0 divide-y divide-gray-100">
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Vad är skillnaden mellan en stiftelse och en förening?</h3>
              <p className="text-gray-600">
                En stiftelse är en självägande förmögenhet som avskilts för ett bestämt ändamål. Till skillnad från en
                förening har en stiftelse inga medlemmar. Stiftelsen styrs av stiftelseförordnandet som upprättades
                när stiftelsen bildades, medan en förening styrs av stadgar som kan ändras av medlemmarna.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Hur mycket kapital behövs för att starta en stiftelse?</h3>
              <p className="text-gray-600">
                Det finns inget lagstadgat minimikapital för stiftelser och ingen officiell siffra från myndigheterna.
                En vanlig informell tumregel bland rådgivare är dock ett startkapital på omkring 350 000 - 400 000 kr,
                så att avkastningen räcker till både administrativa kostnader och utdelning enligt stiftelsens ändamål.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Kan man ändra ändamålet i en befintlig stiftelse?</h3>
              <p className="text-gray-600">
                Stiftelseförordnandet är i princip oföränderligt, men i vissa fall kan ändringar tillåtas genom
                permutation enligt 6 kap.{" "}
                <Link href="/juridik/stiftelselagen/" className="text-primary-700 hover:text-primary-800 hover:underline">stiftelselagen</Link>.
                Ändring av själva ändamålet kräver synnerliga skäl och prövas av Kammarkollegiet, medan Länsstyrelsen
                beslutar om övriga ändringar. Kammarkollegiets ansökningsavgift är 12 200 kronor (3 300 kronor för
                små stiftelser).
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Måste alla stiftelser registreras?</h3>
              <p className="text-gray-600">
                Ja, med ett undantag. Alla stiftelser ska registreras hos Länsstyrelsen inom sex månader från det att
                stiftelsen bildades. Undantaget är stiftelser vars tillgångar enligt stiftelseförordnandet endast får
                användas för bestämda fysiska personer, typiskt familjestiftelser – de får i stället organisationsnummer
                från Skatteverket. Själva registreringen är avgiftsfri, men stiftelser betalar årliga tillsyns- och
                registerhållningsavgifter. Gränsen på 1,5 miljoner kronor styr bokföringsskyldighet och krav på
                årsredovisning, inte registreringen.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Hur beskattas stiftelser?</h3>
              <p className="text-gray-600">
                Stiftelser är i princip skattskyldiga för all inkomst med 20,6 procent statlig inkomstskatt, men
                allmännyttiga stiftelser kan få inskränkt skattskyldighet. Stiftelser med inskränkt skattskyldighet
                betalar endast skatt på inkomst från näringsverksamhet och fastigheter som inte används i den
                allmännyttiga verksamheten. Familjestiftelser är alltid oinskränkt skattskyldiga, och utbetalningar
                till förmånstagarna beskattas som periodiskt understöd hos mottagaren.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Hur länge kan en stiftelse existera?</h3>
              <p className="text-gray-600">
                En stiftelse kan i princip existera för evigt, förutsatt att den har tillräckliga medel för att uppfylla sitt ändamål.
                Till skillnad från andra organisationsformer finns det ingen tidsbegränsning för en stiftelse. Dock kan en stiftelse
                avvecklas om dess tillgångar blir otillräckliga för att tillgodose ändamålet eller om ändamålet blivit omöjligt att uppfylla.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Vem kan söka bidrag från en stiftelse?</h3>
              <p className="text-gray-600">
                Vem som kan söka bidrag från en stiftelse beror helt på stiftelsens ändamål som det är formulerat i stiftelseförordnandet.
                Vissa stiftelser ger endast bidrag till specifika grupper (t.ex. studenter vid ett visst universitet), medan andra har
                bredare ändamål (t.ex. främjande av vetenskaplig forskning). Det är viktigt att läsa stiftelsens stadgar och utlysningar
                noggrant för att avgöra om man är kvalificerad att söka.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Hur hittar man stiftelser att söka bidrag från?</h3>
              <p className="text-gray-600">
                Det finns flera sätt att hitta stiftelser som kan passa ditt ändamål:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
                <li>Länsstyrelsernas stiftelseregister</li>
                <li>Bibliotekens databaser över stiftelser</li>
                <li>Specialiserade söktjänster som SökaStiftelseMedel.se</li>
                <li>Universitets och kommuners förteckningar över lokala stiftelser</li>
              </ul>
              <p className="mt-2 text-gray-600">
                Många stiftelser har också egna webbplatser där de publicerar information om ansökningsperioder och kriterier.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Vilka kostnader är förknippade med att driva en stiftelse?</h3>
              <p className="text-gray-600">
                Att driva en stiftelse medför flera kostnader:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
                <li>Administrativa kostnader (bokföring, årsredovisning)</li>
                <li>Revisionskostnader</li>
                <li>Eventuella arvoden till styrelseledamöter</li>
                <li>Kapitalförvaltningskostnader</li>
                <li>Skatter (beroende på stiftelsens skattemässiga status)</li>
                <li>Avgifter för tillsyn och registrering</li>
              </ul>
              <p className="mt-2 text-gray-600">
                För mindre stiftelser kan dessa kostnader utgöra en betydande del av den årliga avkastningen, vilket är
                anledningen till att ett tillräckligt stort startkapital rekommenderas.
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Kan en stiftelse äga företag?</h3>
              <p className="text-gray-600">
                Ja, en stiftelse kan äga företag, antingen helt eller delvis. Detta är vanligt bland näringsdrivande stiftelser.
                Stiftelsen kan antingen driva näringsverksamhet direkt eller indirekt genom att äga aktier i ett bolag.
                Om stiftelsen driver näringsverksamhet blir den registreringsskyldig hos länsstyrelsen. Skattemässigt behandlas
                inkomster från näringsverksamhet annorlunda än andra inkomster, även för stiftelser med inskränkt skattskyldighet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
