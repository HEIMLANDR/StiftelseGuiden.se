import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakta StiftelseGuiden | Frågor om svenska stiftelser",
  description: "Har du frågor om stiftelser i Sverige? Kontakta oss på StiftelseGuiden eller besök vår partner SökaStiftelseMedel.se för professionell rådgivning.",
  keywords: "kontakt stiftelse, frågor stiftelse, stiftelseguiden kontakt, stiftelserådgivning",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Kontakta oss"
        subtitle="Har du frågor om stiftelser eller behöver hjälp? Vi finns här för dig."
        size="small"
        pattern="dots"
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
            <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Kontaktformulär</h2>
            
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Kontaktinformation</h2>
            
            <div className="card bg-white mb-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Kontakta oss</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-primary-800">Kontaktformulär</p>
                    <p className="text-gray-600">Använd formuläret till vänster för att kontakta oss</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-primary-800">Svarstid</p>
                    <p className="text-gray-600">Vi svarar normalt inom 1-2 arbetsdagar</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-accent-50 rounded-lg p-6 border border-accent-100">
              <h3 className="text-xl font-semibold mb-4 text-accent-700">Professionell hjälp?</h3>
              <p className="mb-4 text-accent-600">
                För mer omfattande hjälp med stiftelser, besök vår samarbetspartner som erbjuder professionell rådgivning.
              </p>
              <a 
                href="https://www.sokastiftelsemedel.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-accent-500 text-white px-4 py-2 rounded-md font-medium hover:bg-accent-600 transition-colors inline-flex items-center"
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
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2" id="faq">Vanliga frågor</h2>
          
          <div className="space-y-4 stagger-children">
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Vad är skillnaden mellan en stiftelse och en förening?</h3>
              <p>
                En stiftelse är en självägande förmögenhet som avskilts för ett bestämt ändamål. Till skillnad från en
                förening har en stiftelse inga medlemmar. Stiftelsen styrs av stiftelseförordnandet som upprättades
                när stiftelsen bildades, medan en förening styrs av stadgar som kan ändras av medlemmarna.
              </p>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Hur mycket kapital behövs för att starta en stiftelse?</h3>
              <p>
                Det finns inget lagstadgat minimikrav för stiftelsekapital. Dock rekommenderas för mindre stiftelser
                ett startkapital på minst 350 000 - 400 000 kr för att täcka administrativa kostnader och samtidigt
                generera tillräcklig avkastning för utdelning enligt stiftelsens ändamål.
              </p>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Kan man ändra ändamålet i en befintlig stiftelse?</h3>
              <p>
                Stiftelseförordnandet är i princip oföränderligt, men i vissa fall kan ändringar i ändamålet tillåtas
                genom permutation. Detta kräver tillstånd från Kammarkollegiet eller domstol och beviljas endast om
                föreskriften blivit omöjlig att följa, uppenbart onyttig eller strider mot stiftarens avsikt.
              </p>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Måste alla stiftelser registreras?</h3>
              <p>
                Nej, inte alla stiftelser behöver registreras. Registreringsskyldighet gäller för stiftelser som
                bedriver näringsverksamhet, har tillgångar överstigande 1,5 miljoner kronor, eller är bildade av
                stat eller kommun. Övriga stiftelser kan välja att registrera sig frivilligt.
              </p>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Hur beskattas stiftelser?</h3>
              <p>
                Stiftelser är i princip skattskyldiga för all inkomst, men allmännyttiga stiftelser kan få
                inskränkt skattskyldighet. Stiftelser med inskränkt skattskyldighet betalar endast skatt på
                inkomst från näringsverksamhet och fastigheter som inte används i den allmännyttiga verksamheten.
                Familjestiftelser kan inte få inskränkt skattskyldighet.
              </p>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Hur länge kan en stiftelse existera?</h3>
              <p>
                En stiftelse kan i princip existera för evigt, förutsatt att den har tillräckliga medel för att uppfylla sitt ändamål.
                Till skillnad från andra organisationsformer finns det ingen tidsbegränsning för en stiftelse. Dock kan en stiftelse
                avvecklas om dess tillgångar blir otillräckliga för att tillgodose ändamålet eller om ändamålet blivit omöjligt att uppfylla.
              </p>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Vem kan söka bidrag från en stiftelse?</h3>
              <p>
                Vem som kan söka bidrag från en stiftelse beror helt på stiftelsens ändamål som det är formulerat i stiftelseförordnandet.
                Vissa stiftelser ger endast bidrag till specifika grupper (t.ex. studenter vid ett visst universitet), medan andra har
                bredare ändamål (t.ex. främjande av vetenskaplig forskning). Det är viktigt att läsa stiftelsens stadgar och utlysningar
                noggrant för att avgöra om man är kvalificerad att söka.
              </p>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Hur hittar man stiftelser att söka bidrag från?</h3>
              <p>
                Det finns flera sätt att hitta stiftelser som kan passa ditt ändamål:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                <li>Länsstyrelsernas stiftelseregister</li>
                <li>Bibliotekens databaser över stiftelser</li>
                <li>Specialiserade söktjänster som SökaStiftelseMedel.se</li>
                <li>Universitets och kommuners förteckningar över lokala stiftelser</li>
              </ul>
              <p className="mt-2">
                Många stiftelser har också egna webbplatser där de publicerar information om ansökningsperioder och kriterier.
              </p>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Vilka kostnader är förknippade med att driva en stiftelse?</h3>
              <p>
                Att driva en stiftelse medför flera kostnader:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                <li>Administrativa kostnader (bokföring, årsredovisning)</li>
                <li>Revisionskostnader</li>
                <li>Eventuella arvoden till styrelseledamöter</li>
                <li>Kapitalförvaltningskostnader</li>
                <li>Skatter (beroende på stiftelsens skattemässiga status)</li>
                <li>Avgifter för tillsyn och registrering</li>
              </ul>
              <p className="mt-2">
                För mindre stiftelser kan dessa kostnader utgöra en betydande del av den årliga avkastningen, vilket är
                anledningen till att ett tillräckligt stort startkapital rekommenderas.
              </p>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Kan en stiftelse äga företag?</h3>
              <p>
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
