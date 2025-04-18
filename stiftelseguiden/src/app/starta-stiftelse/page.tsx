import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starta en stiftelse i Sverige | StiftelseGuiden",
  description: "Komplett guide om hur du startar en stiftelse i Sverige, juridiska krav, beskattning och steg-för-steg process från planering till registrering.",
  keywords: "starta stiftelse, stiftelsebildning, stiftelseförordnande, stiftelsestyrelse, stiftelsekapital",
};

export default function StartFoundation() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Starta en stiftelse i Sverige"
        subtitle="En komplett guide till stiftelsebildning - från planering till registrering"
        size="small"
        pattern="dots"
      />

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Starta stiftelse" }
        ]} 
      />

      {/* Content */}
      <div className="container-padded">
        {/* Table of Contents */}
        <div className="card bg-gray-50 mb-12">
          <h2 className="text-xl font-bold mb-4">Innehåll</h2>
          <ul className="space-y-2 text-primary-600 stagger-children">
            <li>
              <a href="#steg-för-steg" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Steg-för-steg guide
              </a>
            </li>
            <li>
              <a href="#förutsättningar" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Förutsättningar
              </a>
            </li>
            <li>
              <a href="#stiftelseförordnande" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Stiftelseförordnandet
              </a>
            </li>
            <li>
              <a href="#förmögenhet" className="hover:underline hover:text-primary-700 inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                Förmögenhetskrav
              </a>
            </li>
          </ul>
        </div>

        <section id="steg-för-steg" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Steg-för-steg guide</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">1</span>
              Definiera stiftelsens ändamål
            </h3>
            <p className="ml-11">
              Det första och viktigaste steget är att tydligt definiera vilket ändamål stiftelsen ska ha. Detta måste vara konkret 
              och detaljerat för att senare kunna verkställas. Ändamålet blir stiftelsens grundläggande syfte och kan vara svårt 
              att ändra i efterhand.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">2</span>
              Samla stiftelsekapital
            </h3>
            <p className="ml-11">
              Stiftelser kräver ett kapital för att kunna genomföra sina ändamål. För mindre stiftelser rekommenderas minst 
              350 000 - 400 000 kr för att täcka administrativa kostnader och samtidigt kunna generera avkastning för utdelning.
            </p>
          </div>
          
          <p className="text-center my-10">
            <a 
              href="#förutsättningar" 
              className="btn btn-primary inline-flex items-center"
            >
              Läs vidare om förutsättningar
              <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H6a1 1 0 110-2h6.586l-3.293-3.293a1 1 0 111.414-1.414l4 4z" clipRule="evenodd" />
              </svg>
            </a>
          </p>
        </section>

        <section id="förutsättningar" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Förutsättningar</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="card card-hover bg-white">
              <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Förordnande</h3>
              <p className="text-gray-700">En skriftlig förklaring från stiftaren med tydligt definierat ändamål för stiftelsen.</p>
            </div>
            
            <div className="card card-hover bg-white">
              <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Förmögenhet</h3>
              <p className="text-gray-700">Kapital som avskiljs för stiftelsens ändamål och blir en självständig förmögenhetsmassa.</p>
            </div>
            
            <div className="card card-hover bg-white">
              <div className="h-12 w-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ändamål</h3>
              <p className="text-gray-700">Ett bestämt syfte som ska vara tillräckligt preciserat för att kunna verkställas.</p>
            </div>
          </div>
          
          <div className="bg-secondary-50 border-l-4 border-l-secondary-400 p-6 mb-8">
            <h4 className="font-semibold text-secondary-800 mb-2">Viktig juridisk information</h4>
            <p className="text-secondary-700">
              För att en giltig stiftelse ska uppstå krävs att alla tre rekvisit är uppfyllda. Saknas något av dem kan 
              stiftelsen inte bildas enligt stiftelselagen (1994:1220).
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg mb-16 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -left-24 -top-24 w-64 h-64 bg-white/5 rounded-full"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Behöver du professionell hjälp?</h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Besök vår partner för experthjälp med stiftelsebildning, juridisk rådgivning och förvaltning av stiftelser
            </p>
            <a 
              href="https://www.sokastiftelsemedel.se" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-primary-700 px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-white/90 transition-colors"
            >
              Besök SökaStiftelseMedel.se
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <section id="stiftelseförordnande" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Stiftelseförordnandet</h2>
          
          <p className="mb-6">
            Stiftelseförordnandet är stiftelsens grunddokument som motsvarar bolagsordningen i ett aktiebolag eller stadgarna i en förening. 
            Detta dokument styr stiftelsens verksamhet och kan vara svårt att ändra i efterhand.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Obligatoriska delar i ett stiftelseförordnande</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><span className="font-medium">Stiftelsens namn</span> - Ett unikt namn som inte kan förväxlas med andra</li>
              <li><span className="font-medium">Ändamålsbestämmelse</span> - Detaljerad beskrivning av stiftelsens syfte</li>
              <li><span className="font-medium">Förklaring om avsättande av egendom</span> - Vilken egendom som avskiljs</li>
            </ul>
          </div>
        </section>

        <section id="förmögenhet" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Förmögenhetskrav</h2>
          
          <p className="mb-6">
            En stiftelse måste ha tillräcklig förmögenhet för att kunna uppfylla sitt ändamål långsiktigt. Det finns inget formellt
            minimikrav i lagen, men förmögenheten måste vara tillräcklig för att stiftelsen ska kunna främja sitt ändamål över tid.
          </p>
          
          <div className="bg-accent-50 border-l-4 border-accent-400 p-6 mb-8">
            <h4 className="font-medium text-accent-800 mb-2">Rekommenderad storlek på stiftelsekapital</h4>
            <p className="text-accent-700">
              För mindre stiftelser rekommenderas ett startkapital på minst 350 000 - 400 000 kr för att täcka administrativa
              kostnader och samtidigt kunna generera tillräcklig avkastning för utdelning enligt stiftelsens ändamål.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Kapitalförvaltning</h3>
              <p className="mb-4">
                När stiftelsen väl är bildad är det viktigt att förvalta kapitalet på ett sätt som ger god avkastning samtidigt
                som det finns en betryggande säkerhet. Vanliga placeringsalternativ inkluderar:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Räntebärande värdepapper</li>
                <li>Aktier och aktiefonder</li>
                <li>Blandfonder</li>
                <li>Fastigheter</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Stiftelsens styrelse bör upprätta en placeringspolicy som anger hur kapitalet ska förvaltas.
              </p>
            </div>
            
            <div className="card card-hover bg-white">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Exempel: Kulturstiftelse</h3>
              <p className="mb-4">
                <span className="font-medium">Stiftelsen Kulturarv Sverige</span> bildades 2018 med ett startkapital på
                500 000 kr. Stiftelsens ändamål är att främja bevarandet av svenskt kulturarv.
              </p>
              <p className="mb-4">
                Kapitalet placerades enligt följande:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>60% i en diversifierad aktieportfölj</li>
                <li>30% i företagsobligationer</li>
                <li>10% i likvida medel</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Denna fördelning har gett en genomsnittlig årlig avkastning på 5-7%, vilket möjliggör utdelning av
                ca 25 000 kr årligen till kulturbevarande projekt.
              </p>
            </div>
          </div>
        </section>
        
        <section id="praktiska-exempel" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Praktiska exempel</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">1</span>
              Familjestiftelse
            </h3>
            <p className="ml-11 mb-4">
              <span className="font-medium">Andersson Familjestiftelse</span> bildades av entreprenören Erik Andersson för att
              säkerställa ekonomiskt stöd till hans efterkommande för utbildning och vid sjukdom.
            </p>
            <div className="ml-11 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Nyckelkomponenter:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Startkapital: 2 miljoner kronor</li>
                <li>Förvaltning: Egen styrelse bestående av familjemedlemmar och en extern jurist</li>
                <li>Utdelning: Årliga stipendier för högskolestudier och stöd vid sjukdom</li>
                <li>Skattekonsekvenser: Familjestiftelser har inte inskränkt skattskyldighet</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-primary-700">
              <span className="flex h-8 w-8 rounded-full bg-primary-100 text-primary-600 mr-3 items-center justify-center font-semibold">2</span>
              Allmännyttig stiftelse
            </h3>
            <p className="ml-11 mb-4">
              <span className="font-medium">Stiftelsen Framtidens Forskare</span> bildades av ett läkemedelsföretag för att stödja
              medicinsk forskning inom neurologi.
            </p>
            <div className="ml-11 bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-primary-700 mb-2">Nyckelkomponenter:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Startkapital: 5 miljoner kronor</li>
                <li>Förvaltning: Professionell styrelse med experter inom medicin och ekonomi</li>
                <li>Utdelning: Årliga forskningsstipendier efter ansökningsförfarande</li>
                <li>Skattekonsekvenser: Inskränkt skattskyldighet då stiftelsen uppfyller kraven för allmännyttigt ändamål</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
