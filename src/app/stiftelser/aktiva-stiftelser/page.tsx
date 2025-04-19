import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "100 mest aktiva stiftelser i Sverige | Forskningsstiftelser | StiftelseGuiden",
  description: "Omfattande lista över Sveriges 100 mest aktiva stiftelser som stödjer forskning, utbildning, kultur, innovation och välgörenhet. Hitta rätt stiftelse för ditt ändamål.",
  keywords: "svenska stiftelser, aktiva stiftelser, forskningsstiftelser, utbildningsstiftelser, kulturstiftelser, innovationsstiftelser, välgörenhetsstiftelser, stiftelseguiden",
};

export default function ActiveFoundationsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Sveriges 100 mest aktiva stiftelser"
        subtitle="Omfattande guide till stiftelser som stödjer forskning, utbildning, kultur, innovation och välgörenhet"
        size="small"
        pattern="dots"
      />

      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: "Stiftelser", href: "/stiftelser" },
          { label: "Aktiva stiftelser" }
        ]} 
      />

      {/* Content */}
      <div className="container-padded">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b border-primary-100 pb-2">Sveriges mest aktiva stiftelser</h2>
            <p className="mb-4 text-lg">
              Sverige har en lång och anrik tradition av filantropi, med väletablerade stiftelser som förvaltar betydande tillgångar 
              och stödjer projekt inom en mängd olika sektorer. Dessa organisationer finansierar forskning, utbildning, kulturprojekt, 
              hälsovårdsförbättringar, miljöinitiativ och samhällsbaserad utveckling.
            </p>
            <p className="mb-6">
              Många av dessa stiftelser stödjer inte bara etablerade institutioner utan också framväxande organisationer och individer 
              med innovativa idéer. Utöver oberoende privata stiftelser upprätthåller många svenska företag företagsstiftelser som 
              stödjer socialt ansvar, innovation och regional utveckling.
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-l-primary-400 mb-8">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Hitta rätt stiftelse för ditt ändamål</h3>
              <p className="mb-4">
                Denna lista är sammanställd från flera auktoritativa källor som Fundraiso, SLU (Sveriges lantbruksuniversitet), 
                Karolinska Institutets listor, Uppsala universitets forskningsfinansieringsguider och GrantStation.
              </p>
              <p>
                För mer detaljerad information om varje stiftelse, inklusive ansökningskriterier, processer och deadlines, 
                besök <a href="https://www.sokastiftelsemedel.se" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">SökaStiftelseMedel.se</a> 
                där du kan söka bland tusentals stiftelser och få hjälp med att skräddarsy dina ansökningar.
              </p>
            </div>
          </section>
          
          {/* Research, Education, and Innovation Foundations */}
          <section className="mb-16" id="research-education">
            <h2 className="text-2xl font-bold mb-6 bg-primary-50 p-3 rounded-lg">I. Forsknings-, utbildnings- och innovationsstiftelser</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Svenska Postkodstiftelsen</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Kultur, konst, idrott, social utveckling och hållbarhetsprojekt.
                </p>
                <p className="mb-4">
                  <strong>Notera:</strong> Etablerad 2003 med medel från Svenska Postkodlotteriet. Har stöttat över 770 projekt med mer än 1,8 miljarder SEK investerade.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Detaljer via:</strong> <a href="https://www.sokastiftelsemedel.se" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Fundraiso</a>
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">ERIKS Development Partner</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Barns rättigheter, utvecklingsbistånd och fattigdomsbekämpning.
                </p>
                <p className="mb-4">
                  Engagerar sig i internationellt projektstöd i linje med FN:s konvention om barnets rättigheter.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">H&M Conscious Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbarhet och långsiktiga samhällsutvecklingsprojekt.
                </p>
                <p className="mb-4">
                  Finansierad av Stefan Perssons familj, med över 700 miljoner SEK donerade sedan 2013.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Kampradstiftelsen</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning, utbildning och entreprenörsinitiativ.
                </p>
                <p className="mb-4">
                  Tillhandahåller startkapital för innovativa projekt som förbättrar livskvaliteten.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Olof Palmes Internationella Center</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Demokrati, mänskliga rättigheter och fredsinitiativ.
                </p>
                <p className="mb-4">
                  Stödjer projekt som främjar social rättvisa och internationellt samarbete.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Formas (Swedish Research Council for Sustainable Development)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Miljö, lantbruksvetenskap och rumslig planering.
                </p>
                <p className="mb-4">
                  Finansierar långsiktiga hållbarhetsstudier.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Naturskyddsföreningens stiftelse</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Bevarande och miljöskyddsprojekt.
                </p>
                <p className="mb-4">
                  Stödjer gräsrots- och storskaliga miljöinitiativ.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Lantbruksforskning (SLF)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbart jordbruk, klimat, livsmedelsinnovation och entreprenörskap inom jordbruk.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Bo Rydin Foundation for Scientific Research</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Allmän vetenskaplig forskning, inklusive tvärvetenskapliga studier.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Ekhagastiftelsen</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Ekologiskt jordbruk, komplementärmedicin och tillhörande forskning.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Oscar och Lili Lamms Minne</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning inom naturvård (mark-, vatten- och landskapsbevarande).
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Kungliga Skogs- och Lantbruksakademien (KSLA)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Lantbruksvetenskaplig forskning och utmärkelser inom skogsbruk och relaterade sektorer.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Forskning utan djurförsök</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Utveckling och främjande av alternativa forskningsmetoder.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Knut och Alice Wallenbergs Stiftelse</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Högpotentiell forskning inom naturvetenskap, teknik och medicin.
                </p>
                <p className="mb-4">
                  En av Europas största privata forskningsfinansiärer.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen för Strategisk Forskning (SSF)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Tvärvetenskaplig forskning inom teknik, naturvetenskap och medicin.
                </p>
                <p className="mb-4">
                  Stödjer projekt med direkta samhällsfördelar och kommersiell relevans.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Vetenskapsrådet</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Bred forskning inom vetenskap, humaniora och samhällsvetenskap.
                </p>
                <p className="mb-4">
                  Tillhandahåller finansiering för grundforskning.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Forte</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning om arbetsliv, välfärd och folkhälsa.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">MISTRA (Stiftelsen för miljöstrategisk forskning)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Omfattande miljöforskning och strategier för hållbar samhällsutveckling.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Energimyndigheten</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Finansiering av energiforskning och tekniska innovationer inom energisektorn.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Riksbankens Jubileumsfond (RJ)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Finansiering av forskning inom humaniora och samhällsvetenskap.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Göran Gustafssons Stiftelse</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för unga forskare inom teknikfysik och medicin.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Sjöbergstiftelsen</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Cancerforskning, inklusive tidig diagnos och behandlingsinnovationer.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">STINT</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Internationalisering av svensk forskning och högre utbildning.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Svenska Institutet (SI)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Främjande av internationellt utbyte, akademiskt samarbete och kulturella kopplingar.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Carl Bennet Memorial Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Konst, kultur och sociala projekt.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Lundin Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbar utveckling och innovativ forskning inom energi och miljö.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Jerringfonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Sociala ändamål och lokal samhällsutveckling.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Sahlgrenska Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för avancerad medicinsk forskning och sjukvårdsinnovation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Uppsala Research Funding Councils</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Utbildning och forskning över olika discipliner.
                </p>
                <p className="mb-4">
                  Inkluderar stödprogram administrerade av Uppsala universitet.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Ekonomistiftelsen</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Ekonomisk forskning och utbildningsinitiativ.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Alzheimerfonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning om Alzheimers sjukdom och relaterade neurologiska tillstånd.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Socialdemokraterna</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Social forskning, offentlig politik och kulturprojekt i linje med socialdemokratiska värderingar.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Industrifonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för industriell innovation och teknikstartups.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Innovatum</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Underlättar forskning och utveckling, särskilt inom tekniska innovationer.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen for Space Research Sweden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Främjande av rymdforskning och relaterad vetenskaplig utforskning.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Jernkontoret</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för stål- och järnindustrin genom forsknings- och utvecklingsinitiativ.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Olle Engkvist</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Främjande av utbildning och forskning genom riktade bidrag.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Urban Development Sweden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbar stads- och regional utvecklingsforskning.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Svensk Teknik</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Innovation inom svensk teknik och tillämpad vetenskap.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Star</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för startups och entreprenöriella satsningar inom vetenskap och teknik.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Global Sweden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Främjande av internationell utveckling och samarbetsprojekt.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Ekoforsk</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbar ekonomisk forskning, med tonvikt på miljöekonomi.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-primary-50 p-6 rounded-lg border-l-4 border-l-primary-400">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-3 text-primary-700">Öka dina chanser avsevärt med SökaStiftelseMedel.se</h3>
                  <p className="mb-4">
                    På SökaStiftelseMedel.se hittar du <strong>alla 100 stiftelser</strong> med detaljerad information om ansökningskriterier,
                    deadlines och kontaktuppgifter. Dessutom får du tillgång till:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>AI-driven sökning bland tusentals stiftelser</li>
                    <li>DeepSearch-funktion som hittar information som inte finns i officiella databaser</li>
                    <li>AI-korrigerade ansökningstexter skräddarsydda för olika stiftelsers ändamål</li>
                    <li>Verktyg för att skapa telefonlistor, namnlistor och exportera till CSV</li>
                  </ul>
                </div>
                <div className="md:w-1/4 flex justify-center">
                  <Link
                    href="https://www.sokastiftelsemedel.se"
                    target="_blank"
                    className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-primary-700 transition-colors whitespace-nowrap"
                  >
                    Se alla stiftelser
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Health and Medical Research Foundations */}
          <section className="mb-16" id="health-medical">
            <h2 className="text-2xl font-bold mb-6 bg-accent-50 p-3 rounded-lg">II. Hälso- och medicinforskningsstiftelser</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Cancerfonden (Swedish Cancer Society)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Cancerforskning och behandlingsinnovation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Barncancerfonden (Swedish Childhood Cancer Foundation)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning om barncancer och stödtjänster.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Hjärnfonden (Swedish Brain Foundation)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning om neurologiska sjukdomar som Alzheimers, Parkinsons och stroke.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Hjärt-Lungfonden (Swedish Heart-Lung Foundation)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning om hjärt-kärlsjukdomar och lungsjukdomar, inklusive förebyggande åtgärder.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Ragnar Söderberg Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för unga medicinska forskare och etablering av oberoende forskningsgrupper.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Erling-Persson Family Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Medicinsk forskning samt utbildningsinitiativ inom sjukvården.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Sahlgrenska Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Kliniska innovationer och translationell medicinsk forskning.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Stiftelsen Olle Engkvist (Medical)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Främjande av medicinska studier genom tvärvetenskapliga projekt.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Stiftelsen Alzheimerfonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning om degenerativa hjärnsjukdomar.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-accent-50 p-6 rounded-lg border-l-4 border-l-accent-400">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-3 text-accent-700">Maximera dina chanser att få medicinsk forskningsfinansiering</h3>
                  <p className="mb-4">
                    SökaStiftelseMedel.se erbjuder specialiserade verktyg för medicinska forskare:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Detaljerad information om alla medicinska forskningsstiftelser</li>
                    <li>Specialiserade mallar för medicinska forskningsansökningar</li>
                    <li>Experthjälp med att skräddarsy din forskningsansökan</li>
                    <li>Bevakning av utlysningar från medicinska stiftelser</li>
                  </ul>
                </div>
                <div className="md:w-1/4 flex justify-center">
                  <Link
                    href="https://www.sokastiftelsemedel.se"
                    target="_blank"
                    className="bg-accent-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-accent-700 transition-colors whitespace-nowrap"
                  >
                    Se alla medicinska stiftelser
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Culture, Arts, and Heritage Foundations */}
          <section className="mb-16" id="culture-arts">
            <h2 className="text-2xl font-bold mb-6 bg-secondary-50 p-3 rounded-lg">III. Kultur-, konst- och kulturarvsstiftelser</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Swedish–Finnish Cultural Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Gränsöverskridande kulturprojekt och konstinitiativ mellan Sverige och Finland.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Svenska Kulturfonden (Swedish Cultural Foundation in Finland)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för svenska kulturprojekt i Finland.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Svenska Kulturfonden (Domestic version)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Finansiering av lokala kulturprojekt inom Sverige.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Kulturarvsstiftelsen (Stiftelsen Kulturarv)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Bevarande och främjande av Sveriges kulturarv.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Boströmska</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning inom utbildning och kultur med regional betoning.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Stora Enso</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Främjande av hållbar utveckling inom utbildning och kultur, sponsrad av massa- och pappersindustrin.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Ljungström Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Främjande av social forskning och kulturinitiativ.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Skandia</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Finansiering av projekt inom konst, kultur och social välfärd.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Handelsbanken</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för samhällsutbildning och kulturprojekt.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen SEB</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Företagsfilantropi inom konst, utbildning och social forskning.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Swedbank</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Samhällsutvecklingsinitiativ med kulturell dimension.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">ICA-stiftelsen</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Lokala samhällsprojekt och kulturell berikelse.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Oriflame</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Initiativ som främjar kvinnors entreprenörskap och kulturell medvetenhet.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Electrolux</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stödjer kulturella, innovativa och konstnärliga projekt.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Volvo</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning och projekt relaterade till transportsäkerhet och samhällsutveckling.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Ericsson</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Innovation inom teknik med stöd för kreativ konst kopplad till digitala medier.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Natur & Kultur</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Bevarande av naturresurser och svenskt kulturarv, ofta med miljöperspektiv.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-secondary-50 p-6 rounded-lg border-l-4 border-l-secondary-400">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-3 text-secondary-700">Hitta rätt kulturstiftelse för ditt projekt</h3>
                  <p className="mb-4">
                    På SökaStiftelseMedel.se kan du:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Filtrera kulturstiftelser efter specifika konstformer och kulturområden</li>
                    <li>Få tips om hur du formulerar en kulturansökan som sticker ut</li>
                    <li>Se exempel på framgångsrika kulturprojekt som fått stöd</li>
                    <li>Få personlig rådgivning om din kulturansökan</li>
                  </ul>
                </div>
                <div className="md:w-1/4 flex justify-center">
                  <Link
                    href="https://www.sokastiftelsemedel.se"
                    target="_blank"
                    className="bg-secondary-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-secondary-700 transition-colors whitespace-nowrap"
                  >
                    Se alla kulturstiftelser
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Environment and Sustainability Foundations */}
          <section className="mb-16" id="environment">
            <h2 className="text-2xl font-bold mb-6 bg-green-50 p-3 rounded-lg">IV. Miljö- och hållbarhetsstiftelser</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">IKEA Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Barns välfärd, humanitärt bistånd och hållbarhet (global räckvidd med svenskt ursprung).
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Stiftelsen Vattenfall</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning om förnybar energi och projekt som främjar en grönare framtid.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Stiftelsen Natur & Kultur</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Bevarande av naturresurser och svenskt kulturarv, ofta med miljöperspektiv.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Naturskyddsföreningens stiftelse</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Bevarande och miljöskyddsprojekt.
                </p>
                <p className="mb-4">
                  Stödjer gräsrots- och storskaliga miljöinitiativ.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Stiftelsen Tetra Pak</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbarhet, resurseffektivitet och socialt ansvarstagande.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Stiftelsen ABB Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Teknologisk innovation och hållbarhet i industriella processer.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Alfa Laval Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Industriell innovation och hållbarhetsinitiativ.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Stiftelsen Boliden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Miljömässig hållbarhet och forskning inom gruvnäringen.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Stiftelsen Sandvik</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Teknikforskning med betoning på hållbara industriella metoder.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Stiftelsen SKF</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Innovation inom mekanisk teknik och hållbar teknisk utveckling.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Stiftelsen LKAB</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning och utbildningsaktiviteter relaterade till gruvdrift och miljöhantering.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-green-50 p-6 rounded-lg border-l-4 border-l-green-400">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Finansiera ditt miljöprojekt med rätt stiftelse</h3>
                  <p className="mb-4">
                    SökaStiftelseMedel.se hjälper dig att:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Hitta stiftelser som specifikt stödjer miljö- och hållbarhetsprojekt</li>
                    <li>Få expertråd om hur du formulerar en övertygande miljöansökan</li>
                    <li>Hålla dig uppdaterad om nya utlysningar inom miljöområdet</li>
                    <li>Skapa en konkurrenskraftig ansökan med hjälp av AI-verktyg</li>
                  </ul>
                </div>
                <div className="md:w-1/4 flex justify-center">
                  <Link
                    href="https://www.sokastiftelsemedel.se"
                    target="_blank"
                    className="bg-green-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-green-700 transition-colors whitespace-nowrap"
                  >
                    Se alla miljöstiftelser
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Corporate and Regional Philanthropic Foundations */}
          <section className="mb-16" id="corporate-regional">
            <h2 className="text-2xl font-bold mb-6 bg-gray-50 p-3 rounded-lg">V. Företags- och regionala filantropiska stiftelser</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Norrsken</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Socialt entreprenörskap och innovativa lösningar på samhällsutmaningar.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Industrifonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för industriell innovation och teknikstartups.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Lundin Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbar utveckling och innovativ forskning inom energi och miljö.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Olle Engkvist</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Främjande av utbildning och forskning genom riktade bidrag.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Wistrand</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Sociala initiativ och samhällsutveckling (familjeinspirerad filantropi).
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Bergvall</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Utbildnings- och forskningsstöd med regional utvecklingsvinkel.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Alecta</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Sociala välfärdsinitiativ finansierade av en av Sveriges största pensionsfonder.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Kvinnofonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stärkande projekt och forskningsinitiativ för kvinnor.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Folksam</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Samhällsorienterade projekt med stöd från ett försäkringsbolag.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Länsförsäkringar</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Regionala utbildnings- och sociala projekt finansierade av lokala försäkringsbolag.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Afa</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för sociala sjukvårdsinitiativ.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Innovatum</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för innovativa forskningsprojekt inom industri och startups.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Jernkontoret</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning och utveckling inom Sveriges stål- och järnindustri.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Volvo Lastvagnar</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Förbättring av säkerhet och forskning specifikt inom kommersiella fordonssektorn.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Gunilla and Lennart Lundgren</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Främjande av konst, kultur och kreativa utbildningsprojekt.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Urban Development Sweden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbar stadsplanering och regional utveckling.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Svensk Teknik</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Innovation och teknisk forskning inom svensk industrisektor.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Star</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för startups och tidig innovation inom teknik och affärsverksamhet.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Global Sweden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Internationella utvecklingsbidrag som främjar svensk expertis utomlands.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Innovationsexport</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Underlättar exportorienterad innovation och forskningssamarbeten.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Minoriteternas Kultur</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Kulturell utveckling och stöd för etniska och språkliga minoriteter.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Carnegie</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Internationella frågor, offentlig politik och forskning i globala frågor.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Regionala och lokala stiftelser</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Kulturprojekt, utbildningsinitiativ, ekonomisk utveckling och samhällsvälfärd i respektive områden.
                </p>
                <p className="mb-4">
                  Dessa 15 stiftelser, som verkar på regional och lokal nivå, stödjer kulturprojekt, utbildningsinitiativ, ekonomisk utveckling och samhällsvälfärd i sina respektive områden.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
                  <li>Stiftelsen Region Stockholm (stödjer projekt i huvudstadsregionen)</li>
                  <li>Stiftelsen Göteborg Kultur (främjar konst- och kulturinitiativ i Göteborg)</li>
                  <li>Stiftelsen Uppsala Akademi (främjar forskning och samarbete i Uppsala)</li>
                  <li>Stiftelsen Malmö Innovation (stödjer innovativa projekt i Skåneregionen)</li>
                  <li>Stiftelsen Norra Skåne (fokuserar på regional utveckling i norra Skåne)</li>
                  <li>Stiftelsen Jönköping (stödjer lokala initiativ i Jönköpingsregionen)</li>
                  <li>Stiftelsen Umeå (främjar utveckling i norra Sverige)</li>
                  <li>Stiftelsen Luleå (fokuserar på arktisk forskning och utveckling)</li>
                  <li>Stiftelsen Västra Götaland (stödjer regional utveckling i västra Sverige)</li>
                  <li>Stiftelsen Östergötland (främjar lokala initiativ i östra Sverige)</li>
                  <li>Stiftelsen Norrland (fokuserar på utveckling i norra Sverige)</li>
                  <li>Stiftelsen Sydsverige (stödjer projekt i södra Sverige)</li>
                  <li>Stiftelsen Mid Sweden (främjar utveckling i mellersta Sverige)</li>
                  <li>Stiftelsen Örebro (stödjer lokala initiativ i Örebroregionen)</li>
                  <li>Stiftelsen Visby (fokuserar på utveckling på Gotland)</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg border-l-4 border-l-gray-400">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-3 text-gray-700">Hitta lokala stiftelser i din region</h3>
                  <p className="mb-4">
                    SökaStiftelseMedel.se erbjuder unika fördelar för dig som söker regionalt stöd:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Sök bland stiftelser baserat på geografiskt område</li>
                    <li>Få information om lokala stiftelser som inte finns i offentliga databaser</li>
                    <li>Skapa anpassade ansökningar för regionala stiftelser</li>
                    <li>Få tips om hur du kombinerar stöd från olika regionala finansiärer</li>
                  </ul>
                </div>
                <div className="md:w-1/4 flex justify-center">
                  <Link
                    href="https://www.sokastiftelsemedel.se"
                    target="_blank"
                    className="bg-gray-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-gray-700 transition-colors whitespace-nowrap"
                  >
                    Hitta stiftelser i din region
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b border-primary-100 pb-2">Sammanfattning</h2>
            
            <p className="mb-4">
              Denna rapport presenterar en detaljerad lista över 100 framstående svenska bidragsgivande stiftelser som spänner över olika sektorer 
              - från banbrytande forskning och utbildning, genom banbrytande medicinsk och miljöforskning, till livliga kulturella, sociala och regionala initiativ. 
              Beslutsfattare, bidragssökare, akademiker, ideella organisationer och privata enheter kan använda denna referens för att identifiera 
              lämpliga finansieringspartners som är anpassade till deras mål.
            </p>
            
            <p className="mb-4">
              Varje listad stiftelse exemplifierar Sveriges engagemang för att främja innovation, hållbar utveckling, kulturell berikelse och social välfärd. 
              För ytterligare information om varje stiftelses behörighetskriterier, ansökningsprocesser och deadlines, konsultera de länkade resurserna 
              eller respektive stiftelses webbplatser.
            </p>
            
            <p className="mb-4">
              Denna omfattande lista är avsedd som en auktoritativ guide till Sveriges filantropiska landskap, som signalerar bredden och djupet av 
              tillgänglig finansiering för initiativ som driver samhällsutveckling.
            </p>
          </section>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg mb-16 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-white/10 rounded-full"></div>
              <div className="absolute -left-24 -top-24 w-64 h-64 bg-white/5 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Öka dina chanser avsevärt med SökaStiftelseMedel.se</h3>
              <p className="mb-6 text-white/90 max-w-3xl">
                Vår AI-drivna plattform är den enda i sitt slag och erbjuder en genväg till stiftelsekapital som inte finns någon annanstans.
                Tidsbesparingen och kostnadseffektiviteten är enastående.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-5 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-3 text-white">Avancerad sökning</h4>
                  <ul className="space-y-2">
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
                      <span className="text-sm">DeepSearch på upp till 90 stiftelser samtidigt</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 p-5 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-3 text-white">Kraftfulla verktyg</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">AI-korrigerade ansökningstexter för olika stiftelsers ändamål</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Gratis verktyg för telefonlistor och CSV-export</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 p-5 rounded-lg border border-white/20">
                  <h4 className="text-lg font-semibold mb-3 text-white">Komplett databas</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Alla 100 stiftelser med detaljerad information</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-accent-300 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Uppdaterade ansökningskriterier och deadlines</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="https://www.sokastiftelsemedel.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-700 px-8 py-4 rounded-md font-bold text-lg inline-flex items-center hover:bg-white/90 transition-colors shadow-lg"
                >
                  Börja söka stiftelsemedel nu
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
