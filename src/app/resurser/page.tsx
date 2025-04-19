import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resurser för stiftelser | Guider och verktyg | StiftelseGuiden",
  description: "Omfattande resurser för stiftelser: ansökningsguider, ordlista, skatteoptimering och mer. Allt du behöver för att starta, driva och förvalta stiftelser i Sverige.",
  keywords: "stiftelseresurser, stiftelseguider, stiftelseverktyg, stiftelseordlista, ansökningsguide, skatteoptimering stiftelse, stiftelseguiden",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Resurser för stiftelser"
        subtitle="Omfattande guider, verktyg och information för att hjälpa dig navigera i stiftelsevärlden"
        size="small"
        pattern="dots"
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
            <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Resurser för stiftelser</h2>
            <p className="mb-6 text-lg">
              Här hittar du omfattande resurser för att hjälpa dig navigera i stiftelsevärlden. Oavsett om du vill starta en stiftelse, 
              söka stiftelsemedel, optimera din stiftelses skattesituation eller bara lära dig mer om stiftelser, har vi samlat 
              information och verktyg för att stödja dig.
            </p>
          </section>
          
          {/* Resource Cards */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Ansökningsguide */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-primary-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700"></div>
                  <div className="relative z-10 text-white text-center px-6">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-xl font-bold">Ansökningsguide</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Lär dig skriva framgångsrika ansökningar och maximera dina chanser att få stiftelsemedel. Vår omfattande guide 
                    tar dig genom hela processen från förberedelse till uppföljning.
                  </p>
                  <ul className="mb-6 space-y-2">
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
                  <Link 
                    href="/resurser/ansokningsguide" 
                    className="bg-primary-600 text-white px-4 py-2 rounded-md font-medium inline-flex items-center hover:bg-primary-700 transition-colors"
                  >
                    Läs ansökningsguiden
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Stiftelseordlista */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-accent-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700"></div>
                  <div className="relative z-10 text-white text-center px-6">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <h3 className="text-xl font-bold">Stiftelseordlista</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Vår omfattande ordlista förklarar termer och begrepp inom stiftelsevärlden på ett enkelt och lättförståeligt sätt. 
                    Perfekt för dig som vill förstå stiftelseterminologin bättre.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Juridiska termer förklarade på ett enkelt sätt</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ekonomiska och administrativa begrepp</span>
                    </li>
                  </ul>
                  <Link 
                    href="/resurser/stiftelseordlista" 
                    className="bg-accent-600 text-white px-4 py-2 rounded-md font-medium inline-flex items-center hover:bg-accent-700 transition-colors"
                  >
                    Utforska ordlistan
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Skatteoptimering */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-secondary-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-secondary-700"></div>
                  <div className="relative z-10 text-white text-center px-6">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold">Skatteoptimering</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Lär dig hur du kan optimera din stiftelses skattesituation på lagligt sätt. Vår guide ger dig kunskap om 
                    skatteregler, inskränkt skattskyldighet och strategier för att minimera skattebördan.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Grundläggande skatteregler för stiftelser</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Strategier för skatteoptimering</span>
                    </li>
                  </ul>
                  <Link 
                    href="/resurser/skatteoptimering" 
                    className="bg-secondary-600 text-white px-4 py-2 rounded-md font-medium inline-flex items-center hover:bg-secondary-700 transition-colors"
                  >
                    Läs om skatteoptimering
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Verktyg */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                  <div className="relative z-10 text-white text-center px-6">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h3 className="text-xl font-bold">Verktyg</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Praktiska verktyg för att hjälpa dig planera, jämföra och beräkna olika aspekter av stiftelser. 
                    Använd våra interaktiva verktyg för att fatta välgrundade beslut.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Jämför olika stiftelsetyper</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Jämför stiftelse, förening och aktiebolag</span>
                    </li>
                  </ul>
                  <Link 
                    href="/verktyg" 
                    className="bg-gray-700 text-white px-4 py-2 rounded-md font-medium inline-flex items-center hover:bg-gray-800 transition-colors"
                  >
                    Utforska verktygen
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Tips och trix */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-red-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700"></div>
                  <div className="relative z-10 text-white text-center px-6">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-xl font-bold">Tips och trix</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Upptäck avancerade strategier och dolda fördelar med stiftelser och företag. Här utforskar vi lagliga kryphål,
                    skattefördelar och optimeringsstrategier som få känner till.
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Avancerade skatteplaneringsstrategier</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Kombinationer av stiftelser och företag</span>
                    </li>
                  </ul>
                  <Link
                    href="/resurser/tips-och-trix"
                    className="bg-red-600 text-white px-4 py-2 rounded-md font-medium inline-flex items-center hover:bg-red-700 transition-colors"
                  >
                    Utforska dolda fördelar
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
              <h3 className="text-2xl font-bold mb-4">Behöver du mer hjälp med stiftelsefrågor?</h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                SökaStiftelseMedel.se erbjuder professionell hjälp med alla aspekter av stiftelser, från att hitta rätt stiftelser 
                att söka medel från till att starta och förvalta din egen stiftelse.
              </p>
              <a 
                href="https://www.sokastiftelsemedel.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-white/90 transition-colors"
              >
                Besök SökaStiftelseMedel.se
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
