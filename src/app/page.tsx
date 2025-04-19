"use client";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import FoundationTypeIcon from "@/components/FoundationTypeIcon";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  
  // Additional information content for each card
  const modalContent = {
    definition: {
      title: "Definition av stiftelse",
      content: `En stiftelse är en självägande förmögenhet som avsatts för ett bestämt ändamål. Till skillnad från andra organisationsformer har stiftelser inga ägare, medlemmar eller delägare.

Stiftelsen är en egen juridisk person som kan ingå avtal, äga tillgångar och ha skulder. Den styrs av stiftelseförordnandet, det dokument där stiftaren anger stiftelsens ändamål och hur förmögenheten ska förvaltas.

Stiftelser regleras huvudsakligen av stiftelselagen (1994:1220) och står under tillsyn av länsstyrelsen. Stiftelser är långsiktiga och ändamålet som anges vid bildandet är i princip oföränderligt, vilket ger stabilitet men också ställer höga krav på noggrann planering vid bildandet.`
    },
    syften: {
      title: "Stiftelsers syften",
      content: `Stiftelser bildas för många olika ändamål, och dessa ändamål styr hela stiftelsens verksamhet:

• Välgörenhet: Att stödja behövande grupper i samhället
• Utbildning: Att främja utbildning genom stipendier eller forskningsstöd
• Forskning: Att finansiera vetenskaplig forskning inom specifika områden
• Kultur: Att bevara kulturarv eller stödja kulturella verksamheter
• Miljö: Att främja miljöskydd och hållbar utveckling
• Religion: Att stödja religiös verksamhet
• Sociala ändamål: Att förbättra sociala förhållanden för specifika grupper

Ändamålet måste vara tillräckligt konkret för att kunna följas, men samtidigt tillräckligt flexibelt för att fungera över lång tid. Stiftelsens styrelse eller förvaltare är skyldiga att följa ändamålet och kan inte ändra det utan särskilda skäl och tillstånd från Kammarkollegiet.`
    },
    forvaltning: {
      title: "Förvaltning av stiftelser",
      content: `Förvaltningen av en stiftelse kan ske på två sätt:

1. Egen förvaltning: Stiftelsen har en styrelse som ansvarar för förvaltningen
2. Anknuten förvaltning: En extern förvaltare (t.ex. en bank, kommun eller annan juridisk person) förvaltar stiftelsen

Oavsett förvaltningsform har förvaltaren följande huvuduppgifter:

• Placera stiftelsens kapital på ett säkert sätt som ger god avkastning
• Verkställa stiftelsens ändamål genom att dela ut medel eller bedriva verksamhet
• Sköta bokföring och årsredovisning enligt stiftelselagen och bokföringslagen
• Anmäla stiftelsen till länsstyrelsen för tillsyn och till Skatteverket
• Följa stiftelsens stadgar och stiftelselagen i alla beslut

God förvaltning kräver både ekonomisk kompetens och förståelse för stiftelsens specifika ändamål. Förvaltaren har ett stort ansvar och kan bli personligt ersättningsskyldig vid misskötsel.`
    }
  };

  // Function to close the modal
  const closeModal = () => setOpenModal(null);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Allt du behöver veta om svenska stiftelser"
        subtitle="Din kompletta guide till att starta, driva och förvalta stiftelser i Sverige"
        pattern="dots"
        size="large"
        primaryCta={{
          text: "Starta stiftelse",
          href: "/starta-stiftelse"
        }}
        secondaryCta={{
          text: "Sök stiftelsemedel",
          href: "https://www.sokastiftelsemedel.se",
          external: true
        }}
        imageComponent={
          <div className="bg-primary-600/40 h-96 w-full rounded-xl shadow-lg flex items-center justify-center border border-white/10 overflow-hidden relative">
            {/* Simplified document graphic */}
            <div className="bg-white h-72 w-64 rounded-lg flex flex-col p-4 shadow-lg border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="h-3 w-3 rounded-full bg-accent-500 mr-1.5"></div>
                <div className="h-3 w-3 rounded-full bg-primary-500 mr-1.5"></div>
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                <div className="ml-auto text-xs font-medium text-gray-500">Stiftelsedokument</div>
              </div>
              
              {/* Document content */}
              <div className="space-y-2">
                <div className="h-5 bg-primary-100 rounded w-3/4 mx-auto"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-10 bg-gray-100 rounded-lg w-full mt-4 border border-gray-200 flex items-center justify-center">
                  <div className="w-20 h-5 bg-primary-200 rounded"></div>
                </div>
                <div className="h-3 bg-gray-200 rounded w-full mt-3"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                
                {/* Signature line */}
                <div className="flex items-center gap-2 mt-4">
                  <div className="h-px bg-gray-300 flex-grow"></div>
                  <div className="italic text-xs text-gray-400">Signatur</div>
                  <div className="h-px bg-gray-300 flex-grow"></div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* Main Features Section - Enhanced with shadows, gradients and animated hover effects */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="mb-16 text-center">
            <div className="inline-block mb-3 bg-primary-50 px-3 py-1 rounded-full">
              <span className="text-primary-600 text-sm font-medium">Stiftelsekunskap</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vad är en stiftelse?</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Definition Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary-100 relative overflow-hidden">
              {/* Decorative corner gradient */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-50 rounded-full"></div>
              
              <div className="relative">
                <div className="h-14 w-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-5 border border-primary-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-800">Definition</h3>
                <p className="text-gray-600">En stiftelse är en självägande förmögenhet som avsatts för ett bestämt ändamål. Stiftelsen har inga ägare och är en egen juridisk person.</p>
                
                {/* Clickable indicator */}
                <button
                  onClick={() => setOpenModal('definition')}
                  className="mt-6 flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
                >
                  <span className="text-sm">Läs mer</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Syften Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary-100 relative overflow-hidden">
              {/* Decorative corner gradient */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-accent-50 rounded-full"></div>
              
              <div className="relative">
                <div className="h-14 w-14 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center mb-5 border border-accent-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-accent-800">Syften</h3>
                <p className="text-gray-600">Stiftelser bildas för olika ändamål som välgörenhet, utbildning, forskning, kulturella syften eller att stödja specifika grupper i samhället.</p>
                
                {/* Clickable indicator */}
                <button
                  onClick={() => setOpenModal('syften')}
                  className="mt-6 flex items-center text-accent-600 font-medium hover:text-accent-800 transition-colors"
                >
                  <span className="text-sm">Läs mer</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Förvaltning Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary-100 relative overflow-hidden">
              {/* Decorative corner gradient */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-50 rounded-full"></div>
              
              <div className="relative">
                <div className="h-14 w-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-5 border border-primary-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-800">Förvaltning</h3>
                <p className="text-gray-600">Stiftelsens styrelse eller förvaltare ansvarar för att förvalta stiftelsens tillgångar och verkställa stiftelsens ändamål enligt stiftarens vilja.</p>
                
                {/* Clickable indicator */}
                <button
                  onClick={() => setOpenModal('forvaltning')}
                  className="mt-6 flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
                >
                  <span className="text-sm">Läs mer</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Foundations Section */}
      <section className="section bg-grid">
        <div className="container-padded max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Typer av stiftelser</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {/* Vinstandelsstiftelser Card - Placed at the beginning for visibility */}
            <div className="card card-hover border-l-4 border-l-primary-400 hover-lift p-4 bg-primary-50 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <FoundationTypeIcon type="vinstandel" size="lg" />
                <h3 className="text-lg font-semibold my-3 text-primary-700">Vinstandelsstiftelser</h3>
                <p className="text-sm mb-4">Förvaltar och fördelar vinstandelar till anställda i ett företag.</p>
                <Link
                  href="/starta-stiftelse#vinstandelsstiftelser"
                  className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center group"
                >
                  Läs mer
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="card card-hover border-l-4 border-l-primary-400 hover-lift p-4">
              <div className="flex flex-col items-center text-center">
                <FoundationTypeIcon type="allmännyttig" size="lg" />
                <h3 className="text-lg font-semibold my-3 text-primary-700">Allmännyttiga stiftelser</h3>
                <p className="text-sm mb-4">Främjar välgörande, humanitära, sociala, kulturella eller andra allmännyttiga ändamål.</p>
                <Link
                  href="/starta-stiftelse#allmännyttiga"
                  className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center group"
                >
                  Läs mer
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="card card-hover border-l-4 border-l-accent-400 hover-lift p-4">
              <div className="flex flex-col items-center text-center">
                <FoundationTypeIcon type="familje" size="lg" />
                <h3 className="text-lg font-semibold my-3 text-accent-700">Familjestiftelser</h3>
                <p className="text-sm mb-4">Gynnar medlemmar av en viss familj eller släkt och håller samman förmögenheter.</p>
                <Link
                  href="/starta-stiftelse#familjestiftelser"
                  className="text-accent-600 font-medium hover:text-accent-800 inline-flex items-center group"
                >
                  Läs mer
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="card card-hover border-l-4 border-l-secondary-400 hover-lift p-4">
              <div className="flex flex-col items-center text-center">
                <FoundationTypeIcon type="näringsdrivande" size="lg" />
                <h3 className="text-lg font-semibold my-3 text-secondary-700">Näringsdrivande stiftelser</h3>
                <p className="text-sm mb-4">Driver näringsverksamhet, direkt eller genom ägande av företag.</p>
                <Link
                  href="/starta-stiftelse#näringsdrivande"
                  className="text-secondary-600 font-medium hover:text-secondary-800 inline-flex items-center group"
                >
                  Läs mer
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="card card-hover border-l-4 border-l-primary-400 hover-lift p-4">
              <div className="flex flex-col items-center text-center">
                <FoundationTypeIcon type="insamling" size="lg" />
                <h3 className="text-lg font-semibold my-3 text-primary-700">Insamlingsstiftelser</h3>
                <p className="text-sm mb-4">Samlar in pengar från allmänheten för välgörenhet eller samhällsnyttiga syften.</p>
                <Link
                  href="/starta-stiftelse#insamlingsstiftelser"
                  className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center group"
                >
                  Läs mer
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="card card-hover border-l-4 border-l-accent-400 hover-lift p-4">
              <div className="flex flex-col items-center text-center">
                <FoundationTypeIcon type="pension" size="lg" />
                <h3 className="text-lg font-semibold my-3 text-accent-700">Pensionsstiftelser</h3>
                <p className="text-sm mb-4">Säkrar pensionsutfästelser till anställda och skyddar pensionskapital.</p>
                <Link
                  href="/starta-stiftelse#pensionsstiftelser"
                  className="text-accent-600 font-medium hover:text-accent-800 inline-flex items-center group"
                >
                  Läs mer
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="card card-hover border-l-4 border-l-secondary-400 hover-lift p-4 bg-secondary-50 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <FoundationTypeIcon type="kollektiv" size="lg" />
                <h3 className="text-lg font-semibold my-3 text-secondary-700">Kollektivavtalsstiftelser</h3>
                <p className="text-sm mb-4">Bildas genom kollektivavtal för att främja intressen för anställda.</p>
                <Link
                  href="/starta-stiftelse#kollektivavtalsstiftelser"
                  className="text-secondary-600 font-medium hover:text-secondary-800 inline-flex items-center group"
                >
                  Läs mer
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Removed duplicate Vinstandelsstiftelser card */}
          </div>
        </div>
      </section>

      {/* Organization Comparison CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-padded max-w-5xl">
          <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-accent-200/30 rounded-full"></div>
            <div className="absolute -left-24 -top-24 w-64 h-64 bg-accent-200/20 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent-800">Ska jag starta stiftelse, förening eller aktiebolag?</h2>
                  <p className="text-accent-700 mb-6">
                    Osäker på vilken organisationsform som passar bäst för ditt ändamål? Vårt unika jämförelseverktyg
                    hjälper dig att förstå skillnaderna mellan stiftelser, föreningar och aktiebolag så att du kan fatta
                    ett välgrundat beslut.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/verktyg#organisationsformer"
                      className="bg-accent-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-accent-700 transition-colors"
                    >
                      Testa vårt jämförelseverktyg
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <svg className="w-16 h-16 text-accent-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="mt-3 font-semibold text-accent-800">Jämför alternativ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - AI-Powered Platform */}
      <section className="section-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden py-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute right-0 bottom-0 w-full h-64 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
          
          {/* AI-themed background elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
          
          {/* Circuit-like patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/3 w-1/2 h-px bg-white"></div>
            <div className="absolute top-1/3 left-1/4 w-1/3 h-px bg-white"></div>
            <div className="absolute top-2/3 left-1/2 w-1/4 h-px bg-white"></div>
            <div className="absolute top-1/2 left-1/5 h-1/4 w-px bg-white"></div>
            <div className="absolute top-1/3 right-1/4 h-1/3 w-px bg-white"></div>
          </div>
        </div>
        
        <div className="container-padded max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI-driven plattform
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Sveriges enda AI-drivna stiftelsesökmotor</h2>
              
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Spara veckor av tid och tusentals kronor
              </div>
              
              <p className="text-xl mb-6 text-white/90">Vår <span className="font-bold text-white">helt unika</span> AI-drivna plattform är den enda i sitt slag och erbjuder en genväg till stiftelsekapital som inte finns någon annanstans. Tidsbesparingen och kostnadseffektiviteten är enastående.</p>
              
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Avancerad sökning & analys</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Massökning av stiftelser baserat på dina specifika kriterier</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">DeepSearch på upp till 90 stiftelser samtidigt för information som inte finns i officiella databaser</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Stiftelseanalys: aktivitetsstatus, hemsida, e-post och kontaktuppgifter</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Senaste nyheterna om stiftelser och utlysningar</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Kraftfulla verktyg</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">AI-korrigerade ansökningstexter specifikt utformade för olika stiftelsers ändamål</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Projektbörsen - dela ditt projekt öppet för alla att se och stödja</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Gratis verktyg för telefonlistor, namnlistor, utskrift och CSV-export</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Starta en stiftelse och bygg den från grunden med vår akademiska stiftelse-AI</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.sokastiftelsemedel.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-indigo-700 px-8 py-4 rounded-md font-bold text-lg inline-flex items-center hover:bg-white/90 transition-colors shadow-lg"
                >
                  Börja söka stiftelsemedel nu
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="https://www.sokastiftelsemedel.se/om-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-800/30 text-white border border-white/30 px-8 py-4 rounded-md font-medium text-lg inline-flex items-center hover:bg-indigo-800/50 transition-colors"
                >
                  Se alla funktioner
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/pictures/image.png"
                  alt="SökaStiftelseMedel.se plattform"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium text-lg">Sveriges bästa verktyg och sökmotor för att hitta rätt stiftelser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fadeIn" onClick={closeModal}>
          <div
            className="bg-white rounded-xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {openModal === 'definition' && modalContent.definition.title}
                {openModal === 'syften' && modalContent.syften.title}
                {openModal === 'forvaltning' && modalContent.forvaltning.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line">
                {openModal === 'definition' && modalContent.definition.content}
                {openModal === 'syften' && modalContent.syften.content}
                {openModal === 'forvaltning' && modalContent.forvaltning.content}
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Add these animations to your global CSS file
// @keyframes fadeIn {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }
//
// @keyframes scaleIn {
//   from { transform: scale(0.95); opacity: 0; }
//   to { transform: scale(1); opacity: 1; }
// }
//
// .animate-fadeIn {
//   animation: fadeIn 0.2s ease-out forwards;
// }
//
// .animate-scaleIn {
//   animation: scaleIn 0.2s ease-out forwards;
// }
