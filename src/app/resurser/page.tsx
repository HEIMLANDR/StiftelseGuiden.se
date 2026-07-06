import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import PartnerCTA from "@/components/PartnerCTA";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";

const resourceCollections = [
  { name: "Ansökningsguide", url: "/resurser/ansokningsguide/" },
  { name: "Skatteoptimering", url: "/resurser/skatteoptimering/" },
  { name: "Stiftelseordlista", url: "/resurser/stiftelseordlista/" },
  { name: "Tips och trix", url: "/resurser/tips-och-trix/" },
  { name: "Dokument & mallar", url: "/dokument/" },
  { name: "Verktyg", url: "/verktyg/" },
];

export const metadata = createPageMetadata({
  title: "Resurser för stiftelser",
  description: "Resurser för stiftelser: ansökningsguider, ordlista, skatteoptimering och verktyg. Allt du behöver för att starta, driva och förvalta stiftelser i Sverige.",
  keywords: "stiftelseresurser, stiftelseguider, stiftelseverktyg, stiftelseordlista, ansökningsguide, skatteoptimering stiftelse, stiftelseguiden",
  path: "/resurser/",
});

export default function ResourcesPage() {
  return (
    <>
      <PageSchema
        title="Resurser för stiftelser"
        description="Resurser för stiftelser: ansökningsguider, ordlista, skatteoptimering och verktyg. Allt du behöver för att starta, driva och förvalta stiftelser i Sverige."
        path="/resurser/"
        pageType="CollectionPage"
        breadcrumbs={[{ label: "Resurser" }]}
        collectionItems={resourceCollections}
      />
      {/* Hero Section */}
      <Hero
        title="Resurser för stiftelser"
        subtitle="Omfattande guider, verktyg och information för att hjälpa dig navigera i stiftelsevärlden"
        size="small"
      />

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Resurser" }
        ]}
      />

      {/* Content */}
      <div className="container-padded">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Resurser för stiftelser</h2>
            <p className="mb-6 text-lg text-gray-600 max-w-2xl">
              Här hittar du omfattande resurser för att hjälpa dig navigera i stiftelsevärlden. Oavsett om du vill starta en stiftelse,
              söka stiftelsemedel, optimera din stiftelses skattesituation eller bara lära dig mer om stiftelser, har vi samlat
              information och verktyg för att stödja dig.
            </p>
          </section>

          {/* Resource Cards */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Ansökningsguide */}
              <Link href="/resurser/ansokningsguide" className="card card-hover flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Ansökningsguide</h3>
                <p className="text-gray-600 mb-4">
                  Lär dig skriva framgångsrika ansökningar och maximera dina chanser att få stiftelsemedel. Vår omfattande guide
                  tar dig genom hela processen från förberedelse till uppföljning.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Steg-för-steg guide till ansökningsprocessen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mallar och exempel på framgångsrika ansökningar</span>
                  </li>
                </ul>
                <span className="mt-auto inline-flex items-center font-medium text-primary-700">
                  Läs ansökningsguiden
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

              {/* Stiftelseordlista */}
              <Link href="/resurser/stiftelseordlista" className="card card-hover flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Stiftelseordlista</h3>
                <p className="text-gray-600 mb-4">
                  Vår omfattande ordlista förklarar termer och begrepp inom stiftelsevärlden på ett enkelt och lättförståeligt sätt.
                  Perfekt för dig som vill förstå stiftelseterminologin bättre.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Juridiska termer förklarade på ett enkelt sätt</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ekonomiska och administrativa begrepp</span>
                  </li>
                </ul>
                <span className="mt-auto inline-flex items-center font-medium text-primary-700">
                  Utforska ordlistan
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

              {/* Skatteoptimering */}
              <Link href="/resurser/skatteoptimering" className="card card-hover flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Skatteoptimering</h3>
                <p className="text-gray-600 mb-4">
                  Lär dig hur du kan optimera din stiftelses skattesituation på lagligt sätt. Vår guide ger dig kunskap om
                  skatteregler, inskränkt skattskyldighet och strategier för att minimera skattebördan.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Grundläggande skatteregler för stiftelser</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Strategier för skatteoptimering</span>
                  </li>
                </ul>
                <span className="mt-auto inline-flex items-center font-medium text-primary-700">
                  Läs om skatteoptimering
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

              {/* Verktyg */}
              <Link href="/verktyg" className="card card-hover flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Verktyg</h3>
                <p className="text-gray-600 mb-4">
                  Praktiska verktyg för att hjälpa dig planera, jämföra och beräkna olika aspekter av stiftelser.
                  Använd våra interaktiva verktyg för att fatta välgrundade beslut.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Jämför olika stiftelsetyper</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Jämför stiftelse, förening och aktiebolag</span>
                  </li>
                </ul>
                <span className="mt-auto inline-flex items-center font-medium text-primary-700">
                  Utforska verktygen
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

              {/* Tips och trix */}
              <Link href="/resurser/tips-och-trix" className="card card-hover flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tips och trix</h3>
                <p className="text-gray-600 mb-4">
                  Upptäck avancerade strategier och dolda fördelar med stiftelser och företag. Här utforskar vi lagliga kryphål,
                  skattefördelar och optimeringsstrategier som få känner till.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Avancerade skatteplaneringsstrategier</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kombinationer av stiftelser och företag</span>
                  </li>
                </ul>
                <span className="mt-auto inline-flex items-center font-medium text-primary-700">
                  Utforska dolda fördelar
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </section>

          {/* Partner CTA */}
          <PartnerCTA campaign="resurser" placement="bottom" className="mb-16" />
        </div>
      </div>
    </>
  );
}
