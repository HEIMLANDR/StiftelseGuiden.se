import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import PartnerCTA from "@/components/PartnerCTA";
import Link from "next/link";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";

const foundationCollections = [
  { name: "Aktiva stiftelser", url: "/stiftelser/aktiva-stiftelser/" },
  { name: "Olika stiftelsetyper" },
  { name: "Guide till att söka stiftelsemedel" },
];

export const metadata = createPageMetadata({
  title: "Svenska stiftelser",
  description: "Omfattande information om svenska stiftelser. Hitta aktiva stiftelser, lär dig om olika stiftelsetyper och få tips om hur du söker stiftelsemedel.",
  keywords: "svenska stiftelser, stiftelsetyper, aktiva stiftelser, söka stiftelsemedel, stiftelseguiden",
  path: "/stiftelser/",
});

export default function FoundationsPage() {
  return (
    <>
      <PageSchema
        title="Svenska stiftelser"
        description="Omfattande information om svenska stiftelser. Hitta aktiva stiftelser, lär dig om olika stiftelsetyper och få tips om hur du söker stiftelsemedel."
        path="/stiftelser/"
        pageType="CollectionPage"
        breadcrumbs={[{ label: "Stiftelser" }]}
        collectionItems={foundationCollections}
      />
      {/* Hero Section */}
      <Hero
        title="Svenska stiftelser"
        subtitle="Omfattande guide till stiftelser i Sverige - typer, aktiva stiftelser och hur du söker stiftelsemedel"
        size="small"
      />

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Stiftelser" }
        ]} 
      />

      {/* Content */}
      <div className="container-padded">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Svenska stiftelser</h2>
            <p className="mb-4 text-lg text-gray-600">
              Sverige har en rik tradition av stiftelser som spelar en viktig roll i samhället genom att stödja forskning,
              utbildning, kultur, innovation och välgörenhet. Stiftelser förvaltar betydande tillgångar och delar årligen
              ut miljardbelopp till olika ändamål.
            </p>
            <p className="mb-6 text-gray-600">
              På denna sida hittar du information om olika typer av stiftelser, aktiva stiftelser i Sverige och hur du
              kan söka stiftelsemedel för dina projekt eller ändamål.
            </p>
          </section>
          
          {/* Main Content Cards */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Aktiva stiftelser */}
              <div className="card flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">100 mest aktiva stiftelser</h3>
                <div className="flex flex-col flex-1">
                  <p className="mb-4 text-gray-600">
                    Utforska vår omfattande lista över Sveriges 100 mest aktiva stiftelser som stödjer forskning, utbildning,
                    kultur, innovation och välgörenhet. Hitta rätt stiftelse för ditt ändamål.
                  </p>
                  <ul className="mb-6 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Forsknings- och utbildningsstiftelser</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Hälso- och medicinforskningsstiftelser</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Kultur-, miljö- och företagsstiftelser</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="/stiftelser/aktiva-stiftelser"
                      className="btn btn-secondary"
                    >
                      Se aktiva stiftelser
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stiftelsetyper */}
              <div className="card flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Stiftelsetyper</h3>
                <div className="flex flex-col flex-1">
                  <p className="mb-4 text-gray-600">
                    Lär dig om olika typer av stiftelser i Sverige, deras egenskaper, fördelar och nackdelar.
                    Hitta den stiftelsetyp som passar bäst för ditt ändamål.
                  </p>
                  <ul className="mb-6 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Allmännyttiga stiftelser</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Familjestiftelser</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Näringsdrivande stiftelser</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="/starta-stiftelse"
                      className="btn btn-secondary"
                    >
                      Utforska stiftelsetyper
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Söka stiftelsemedel */}
              <div className="card flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Söka stiftelsemedel</h3>
                <div className="flex flex-col flex-1">
                  <p className="mb-4 text-gray-600">
                    Lär dig hur du söker stiftelsemedel framgångsrikt. Få tips och råd om ansökningsprocessen,
                    hur du skriver en övertygande ansökan och hur du ökar dina chanser att få bidrag.
                  </p>
                  <ul className="mb-6 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ansökningsguide steg för steg</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Mallar och exempel</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Vanliga misstag att undvika</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="/resurser/ansokningsguide"
                      className="btn btn-secondary"
                    >
                      Läs ansökningsguiden
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Jämför organisationsformer */}
              <div className="card flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Jämför organisationsformer</h3>
                <div className="flex flex-col flex-1">
                  <p className="mb-4 text-gray-600">
                    Osäker på om du ska starta stiftelse, förening eller aktiebolag? Jämför de olika organisationsformerna
                    och se vilken som passar bäst för ditt syfte.
                  </p>
                  <ul className="mb-6 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Fördelar och nackdelar</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Skattemässiga skillnader</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Kapitalkrav och styrning</span>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href="/verktyg#organisationsformer"
                      className="btn btn-secondary"
                    >
                      Jämför organisationsformer
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <div className="mb-16">
            <PartnerCTA
              campaign="stiftelser"
              placement="bottom"
              heading="Hitta rätt stiftelse för ditt ändamål"
            />
          </div>
        </div>
      </div>
    </>
  );
}
