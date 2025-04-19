import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Svenska stiftelser | Guide och information | StiftelseGuiden",
  description: "Omfattande information om svenska stiftelser. Hitta aktiva stiftelser, lär dig om olika stiftelsetyper och få tips om hur du söker stiftelsemedel.",
  keywords: "svenska stiftelser, stiftelsetyper, aktiva stiftelser, söka stiftelsemedel, stiftelseguiden",
};

export default function FoundationsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Svenska stiftelser"
        subtitle="Omfattande guide till stiftelser i Sverige - typer, aktiva stiftelser och hur du söker stiftelsemedel"
        size="small"
        pattern="dots"
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
            <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Svenska stiftelser</h2>
            <p className="mb-4 text-lg">
              Sverige har en rik tradition av stiftelser som spelar en viktig roll i samhället genom att stödja forskning, 
              utbildning, kultur, innovation och välgörenhet. Stiftelser förvaltar betydande tillgångar och delar årligen 
              ut miljardbelopp till olika ändamål.
            </p>
            <p className="mb-6">
              På denna sida hittar du information om olika typer av stiftelser, aktiva stiftelser i Sverige och hur du 
              kan söka stiftelsemedel för dina projekt eller ändamål.
            </p>
          </section>
          
          {/* Main Content Cards */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Aktiva stiftelser */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-primary-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700"></div>
                  <div className="relative z-10 text-white text-center px-6">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h3 className="text-xl font-bold">100 mest aktiva stiftelser</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Utforska vår omfattande lista över Sveriges 100 mest aktiva stiftelser som stödjer forskning, utbildning, 
                    kultur, innovation och välgörenhet. Hitta rätt stiftelse för ditt ändamål.
                  </p>
                  <ul className="mb-6 space-y-2">
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
                  <Link 
                    href="/stiftelser/aktiva-stiftelser" 
                    className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium inline-flex items-center hover:bg-primary-700 transition-colors"
                  >
                    Se aktiva stiftelser
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Stiftelsetyper */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-accent-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700"></div>
                  <div className="relative z-10 text-white text-center px-6">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold">Stiftelsetyper</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Lär dig om olika typer av stiftelser i Sverige, deras egenskaper, fördelar och nackdelar. 
                    Hitta den stiftelsetyp som passar bäst för ditt ändamål.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Allmännyttiga stiftelser</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Familjestiftelser</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Näringsdrivande stiftelser</span>
                    </li>
                  </ul>
                  <Link 
                    href="/starta-stiftelse" 
                    className="bg-accent-600 text-white px-4 py-2 rounded-md font-medium inline-flex items-center hover:bg-accent-700 transition-colors"
                  >
                    Utforska stiftelsetyper
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Söka stiftelsemedel */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-secondary-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-secondary-700"></div>
                  <div className="relative z-10 text-white text-center px-6">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold">Söka stiftelsemedel</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Lär dig hur du söker stiftelsemedel framgångsrikt. Få tips och råd om ansökningsprocessen, 
                    hur du skriver en övertygande ansökan och hur du ökar dina chanser att få bidrag.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ansökningsguide steg för steg</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Mallar och exempel</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Vanliga misstag att undvika</span>
                    </li>
                  </ul>
                  <Link 
                    href="/resurser/ansokningsguide" 
                    className="bg-secondary-600 text-white px-4 py-2 rounded-md font-medium inline-flex items-center hover:bg-secondary-700 transition-colors"
                  >
                    Läs ansökningsguiden
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Jämför organisationsformer */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                  <div className="relative z-10 text-white text-center px-6">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="text-xl font-bold">Jämför organisationsformer</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Osäker på om du ska starta stiftelse, förening eller aktiebolag? Jämför de olika organisationsformerna 
                    och se vilken som passar bäst för ditt syfte.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Fördelar och nackdelar</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Skattemässiga skillnader</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Kapitalkrav och styrning</span>
                    </li>
                  </ul>
                  <Link 
                    href="/verktyg#organisationsformer" 
                    className="bg-gray-700 text-white px-4 py-2 rounded-md font-medium inline-flex items-center hover:bg-gray-800 transition-colors"
                  >
                    Jämför organisationsformer
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg mb-16 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-white/10 rounded-full"></div>
              <div className="absolute -left-24 -top-24 w-64 h-64 bg-white/5 rounded-full"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-4">Hitta rätt stiftelse för ditt ändamål</h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                SökaStiftelseMedel.se erbjuder en unik AI-driven plattform som hjälper dig att hitta rätt stiftelser för ditt ändamål 
                och skräddarsy dina ansökningar för att maximera dina chanser att få stöd.
              </p>
              <a 
                href="https://www.sokastiftelsemedel.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-white/90 transition-colors"
              >
                Sök bland tusentals stiftelser
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
