import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import FoundationComparison from "@/components/FoundationComparison";
import OrganizationComparison from "@/components/OrganizationComparison";
import CapitalCalculator from "@/components/CapitalCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verktyg för stiftelser och organisationer | StiftelseGuiden",
  description: "Användbara verktyg för att jämföra stiftelsetyper, organisationsformer, beräkna kapital och planera din verksamhet. Kostnadsfria hjälpmedel från StiftelseGuiden.se.",
  keywords: "stiftelseverktyg, stiftelsekapital, jämföra stiftelser, jämföra organisationsformer, stiftelse vs förening, stiftelse vs aktiebolag, stiftelseberäkning, stiftelseplanering",
};

export default function ToolsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Verktyg för stiftelser"
        subtitle="Praktiska hjälpmedel för att planera och förvalta din stiftelse"
        size="small"
        pattern="dots"
      />

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Verktyg" }
        ]} 
      />

      {/* Content */}
      <div className="container-padded">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Våra verktyg</h2>
          
          <p className="mb-6 text-lg">
            Här hittar du praktiska verktyg som hjälper dig att planera, jämföra och beräkna olika aspekter av stiftelser. 
            Verktygen är kostnadsfria och kan användas som stöd i ditt beslutsfattande, men ersätter inte professionell rådgivning.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Jämför stiftelsetyper</h3>
              <p className="mb-4">
                Jämför olika typer av stiftelser sida vid sida för att hitta den form som passar ditt ändamål bäst.
                Se skillnader i skattemässig status, kapitalkrav, förvaltning och mer.
              </p>
              <a href="#jamfor" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Gå till verktyget
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            
            <div className="card card-hover bg-white hover-lift bg-accent-50 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-accent-700">Jämför organisationsformer</h3>
              <p className="mb-4">
                Osäker på om du ska starta stiftelse, förening eller aktiebolag? Jämför de olika organisationsformerna
                och se vilken som passar bäst för ditt syfte.
              </p>
              <a href="#organisationsformer" className="text-accent-600 font-medium hover:text-accent-700 inline-flex items-center">
                Gå till verktyget
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            
            <div className="card card-hover bg-white hover-lift">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Kapitalberäknare</h3>
              <p className="mb-4">
                Beräkna hur mycket kapital din stiftelse behöver för att uppnå dina mål för utdelning över tid.
                Anpassa parametrar som avkastning, inflation och administrativa kostnader.
              </p>
              <a href="#kalkylator" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Gå till verktyget
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <section id="jamfor" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Jämför stiftelsetyper</h2>
          <FoundationComparison />
        </section>
        
        <section id="organisationsformer" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Jämför organisationsformer</h2>
          <OrganizationComparison />
        </section>
        
        <section id="kalkylator" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Kapitalberäknare</h2>
          <CapitalCalculator />
        </section>
        
        <div className="bg-primary-50 rounded-lg p-6 border border-primary-100 mb-16">
          <h3 className="text-xl font-semibold mb-4 text-primary-700">Viktigt att tänka på</h3>
          <p className="mb-4">
            Verktygen på denna sida är avsedda att ge en uppskattning och vägledning, men ersätter inte professionell rådgivning. 
            Varje stiftelse är unik och påverkas av många faktorer som inte fullt ut kan representeras i dessa verktyg.
          </p>
          <p>
            Vi rekommenderar att du konsulterar juridisk och ekonomisk expertis innan du fattar viktiga beslut om din stiftelse. 
            För mer information och personlig rådgivning, kontakta vår samarbetspartner SökaStiftelseMedel.se.
          </p>
        </div>
      </div>
    </>
  );
}