import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import PartnerCTA from "@/components/PartnerCTA";
import { sokUrl } from "@/lib/partner";
import { PageSchema } from "@/components/SeoSchema";
import { createPageMetadata } from "@/lib/seo";

const activeFoundationHighlights = [
  { name: "Svenska Postkodstiftelsen" },
  { name: "H&M Foundation" },
  { name: "Familjen Kamprads stiftelse" },
  { name: "Knut och Alice Wallenbergs Stiftelse" },
  { name: "Stiftelsen för Strategisk Forskning (SSF)" },
  { name: "Riksbankens Jubileumsfond (RJ)" },
  { name: "Stiftelsen Lantbruksforskning (SLF)" },
  { name: "MISTRA (Stiftelsen för miljöstrategisk forskning)" },
  { name: "IKEA Foundation" },
  { name: "Hjärnfonden" },
];

export const metadata = createPageMetadata({
  title: "Sveriges mest aktiva stiftelser",
  description: "Guide till Sveriges mest aktiva stiftelser inom forskning, utbildning, kultur, miljö och samhälle. Hitta rätt stiftelse för ditt ändamål.",
  keywords: "svenska stiftelser, aktiva stiftelser, forskningsstiftelser, utbildningsstiftelser, kulturstiftelser, innovationsstiftelser, välgörenhetsstiftelser, stiftelseguiden",
  path: "/stiftelser/aktiva-stiftelser/",
});

export default function ActiveFoundationsPage() {
  return (
    <>
      <PageSchema
        title="Sveriges mest aktiva stiftelser"
        description="Guide till Sveriges mest aktiva stiftelser inom forskning, utbildning, kultur, miljö och samhälle. Hitta rätt stiftelse för ditt ändamål."
        path="/stiftelser/aktiva-stiftelser/"
        pageType="CollectionPage"
        breadcrumbs={[
          { label: "Stiftelser", href: "/stiftelser" },
          { label: "Aktiva stiftelser" },
        ]}
        collectionItems={activeFoundationHighlights}
      />
      {/* Hero Section */}
      <Hero
        title="Sveriges mest aktiva stiftelser"
        subtitle="Guide till stiftelser som stödjer forskning, utbildning, kultur, innovation och välgörenhet"
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
              med innovativa idéer. Nedan hittar du ett urval av de mest aktiva stiftelserna, sorterade efter ändamål, samt en separat
              genomgång av viktiga finansiärer som ofta förväxlas med stiftelser men som i själva verket är myndigheter eller ideella föreningar.
            </p>

            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-l-primary-400 mb-8">
              <h3 className="text-xl font-semibold mb-2 text-primary-700">Hitta rätt stiftelse för ditt ändamål</h3>
              <p className="mb-4">
                Listan är sammanställd från offentliga källor, bland annat universitetens finansieringssidor och länsstyrelsernas stiftelseregister.
              </p>
              <p>
                För mer detaljerad information om varje stiftelse, inklusive ansökningskriterier, processer och deadlines,
                besök <a href={sokUrl("aktiva-stiftelser", "inline")} className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">SökaStiftelseMedel.se</a>
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
                  <strong>Notera:</strong> Finansieras av överskott från Svenska Postkodlotteriet och har stöttat hundratals projekt i Sverige och internationellt.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Detaljer via:</strong> <a href={sokUrl("aktiva-stiftelser", "inline")} className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">SökaStiftelseMedel.se</a>
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">H&M Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbarhet och långsiktiga samhällsutvecklingsprojekt.
                </p>
                <p className="mb-4">
                  Grundad med medel från familjen Stefan Persson.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Familjen Kamprads stiftelse</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning och utbildning som främjar entreprenörskap, miljö, hälsa och social utveckling.
                </p>
                <p className="mb-4">
                  Stödjer projekt som kommer många människor till del, ofta med koppling till Småland.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Lantbruksforskning (SLF)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbart jordbruk, klimat, livsmedelsinnovation och entreprenörskap inom jordbruk.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Bo Rydins Stiftelse för vetenskaplig forskning</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Allmän vetenskaplig forskning, inklusive tvärvetenskapliga studier.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Kungl. Skogs- och Lantbruksakademien (KSLA)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning inom jord- och skogsbruk samt livsmedel.
                </p>
                <p className="mb-4">
                  Akademien förvaltar ett stort antal stiftelser som delar ut forskningsanslag, resestipendier och priser.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Forska Utan Djurförsök</h3>
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
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Riksbankens Jubileumsfond (RJ)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Finansiering av forskning inom humaniora och samhällsvetenskap.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Göran Gustafssons Stiftelse</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd till forskare inom naturvetenskap, teknik och medicin, bland annat genom Göran Gustafssonprisen.
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
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Jerringfonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Barn och unga med särskilda behov – anslag till forskning, vård och utbildning.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Industrifonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd för industriell innovation och teknikstartups.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Jernkontoret</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning och utveckling inom järn- och stålindustrin.
                </p>
                <p className="mb-4">
                  Branschorganisation som även förvaltar forskningsstiftelser och fonder inom området.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Stiftelsen Olle Engkvist Byggmästare</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Främjande av vetenskaplig forskning genom riktade bidrag.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">Magnus Bergvalls Stiftelse</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Anslag till svenska forskare inom humaniora, medicin och naturvetenskap.
                </p>
              </div>
            </div>
          </section>

          {/* Health and Medical Research Foundations */}
          <section className="mb-16" id="health-medical">
            <h2 className="text-2xl font-bold mb-6 bg-accent-50 p-3 rounded-lg">II. Hälso- och medicinforskningsstiftelser</h2>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Hjärnfonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning om hjärnan och neurologiska sjukdomar som Alzheimers, Parkinsons och stroke.
                </p>
                <p className="mb-4">
                  Hjärnfonden är en insamlingsstiftelse som delar ut forskningsanslag och stipendier.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Ragnar Söderbergs stiftelse</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning inom medicin, ekonomi och rättsvetenskap, med särskilt stöd till yngre forskare.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Erling-Perssons stiftelse</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Medicinsk forskning och utbildning samt entreprenörskap.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Sahlgrenskastiftelsen (Sahlgrenska Foundation)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd till medicinsk forskning i Västsverige.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-accent-700">Alzheimerfonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning om Alzheimers sjukdom och andra demenssjukdomar.
                </p>
                <p className="mb-4">
                  Insamlingsstiftelse som delar ut anslag till demensforskning.
                </p>
              </div>
            </div>
          </section>

          {/* Culture, Arts, and Heritage Foundations */}
          <section className="mb-16" id="culture-arts">
            <h2 className="text-2xl font-bold mb-6 bg-secondary-50 p-3 rounded-lg">III. Kultur-, konst- och kulturarvsstiftelser</h2>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Kulturfonden för Sverige och Finland</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Kulturutbyte och samarbetsprojekt mellan Sverige och Finland.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Stiftelsen Natur & Kultur</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Bokförlag organiserat som stiftelse. Delar ut priser, stipendier och bidrag som främjar bildning, litteratur och kultur.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Längmanska kulturfonden</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Humanistiska vetenskaper, naturvetenskap, konst och litteratur samt folkbildning.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-secondary-700">Konung Gustaf VI Adolfs fond för svensk kultur</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Stöd till svensk humanistisk forskning och kulturminnesvård.
                </p>
              </div>
            </div>
          </section>

          {/* Mid-page partner CTA */}
          <PartnerCTA campaign="aktiva-stiftelser" placement="mid" variant="compact" className="mb-16" />

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
                <h3 className="text-xl font-semibold mb-3 text-green-700">MISTRA (Stiftelsen för miljöstrategisk forskning)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Omfattande miljöforskning och strategier för hållbar samhällsutveckling.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Ekhagastiftelsen</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Ekologiskt jordbruk, komplementärmedicin och tillhörande forskning.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Stiftelsen Oscar och Lili Lamms Minne</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning inom naturvård (mark-, vatten- och landskapsbevarande).
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Stiftelsen Skogssällskapet</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbart skogsbruk och naturvård. Delar ut anslag till forskning och kunskapsutveckling om skog.
                </p>
              </div>
            </div>
          </section>

          {/* Corporate and Regional Philanthropic Foundations */}
          <section className="mb-16" id="corporate-regional">
            <h2 className="text-2xl font-bold mb-6 bg-gray-50 p-3 rounded-lg">V. Företags- och regionala filantropiska stiftelser</h2>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Norrsken Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Socialt entreprenörskap och innovativa lösningar på samhällsutmaningar.
                </p>
                <p className="mb-4">
                  Grundad av Klarna-medgrundaren Niklas Adalberth.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Lundin Foundation</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Hållbar utveckling och innovativ forskning inom energi och miljö.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Stiftelsen Innovatum</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Regional innovation och utveckling i Västsverige; driver Innovatum Science Park i Trollhättan.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Volvo Research and Educational Foundations (VREF)</h3>
                <p className="mb-4">
                  <strong>Fokus:</strong> Forskning om hållbara transporter och framtidens stadsmiljöer.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">Regionala och lokala stiftelser</h3>
                <p className="mb-4">
                  Utöver de nationella aktörerna finns tusentals regionala och lokala stiftelser som stödjer kulturprojekt, utbildning,
                  ekonomisk utveckling och samhällsvälfärd i sina respektive områden. Många av dem är små och saknar egen webbplats.
                </p>
                <p className="mb-4">
                  Det bästa sättet att hitta dem är att söka i länsstyrelsernas gemensamma <a href="https://stiftelser.lansstyrelsen.se/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">stiftelsedatabas</a>,
                  där alla registrerade stiftelser i Sverige finns med ändamål och kontaktuppgifter.
                </p>
              </div>
            </div>
          </section>

          {/* Other funders that are not foundations */}
          <section className="mb-16" id="andra-finansiarer">
            <h2 className="text-2xl font-bold mb-6 bg-primary-50 p-3 rounded-lg">Andra viktiga finansiärer (ej stiftelser)</h2>

            <p className="mb-8">
              Flera av Sveriges mest kända forskningsfinansiärer och insamlingsorganisationer är inte stiftelser i juridisk mening,
              utan myndigheter eller ideella föreningar. De nämns ofta i samma sammanhang som stiftelserna ovan och är viktiga
              finansieringskällor – men ansökningsprocesserna och regelverken skiljer sig åt.
            </p>

            <h3 className="text-xl font-bold mb-4">Statliga forskningsfinansiärer</h3>
            <div className="space-y-6 mb-10">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Vetenskapsrådet</h4>
                <p>
                  Statlig myndighet och Sveriges största statliga forskningsfinansiär. Finansierar grundforskning inom alla vetenskapsområden.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Formas</h4>
                <p>
                  Statligt forskningsråd för hållbar utveckling. Finansierar forskning om miljö, areella näringar och samhällsbyggande.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Forte</h4>
                <p>
                  Statligt forskningsråd som finansierar forskning om hälsa, arbetsliv och välfärd.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Energimyndigheten</h4>
                <p>
                  Statlig myndighet som finansierar forskning och innovation inom energiområdet.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Svenska institutet (SI)</h4>
                <p>
                  Statlig myndighet som främjar internationellt utbyte, akademiskt samarbete och kulturella kopplingar.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Insamlingsorganisationer</h3>
            <p className="mb-6 text-sm text-gray-600">
              Organisationerna nedan är ideella föreningar, inte stiftelser. Hjärnfonden och Alzheimerfonden, som ofta nämns i samma
              sammanhang, är däremot insamlingsstiftelser och finns därför kvar i listan ovan.
            </p>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Cancerfonden</h4>
                <p>
                  Ideell insamlingsorganisation (förening) och en av Sveriges största finansiärer av cancerforskning.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Barncancerfonden</h4>
                <p>
                  Ideell förening som finansierar forskning om barncancer och stödjer drabbade familjer.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Hjärt-Lungfonden</h4>
                <p>
                  Ideell förening som samlar in pengar till forskning om hjärt- och lungsjukdomar.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Naturskyddsföreningen</h4>
                <p>
                  Ideell miljöorganisation (förening) som driver och finansierar natur- och miljöprojekt.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Erikshjälpen (ERIKS Development Partner)</h4>
                <p>
                  Ideell förening som arbetar med barns rättigheter och internationellt utvecklingssamarbete.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-2 text-primary-700">Olof Palmes Internationella Center</h4>
                <p>
                  Ideell förening – arbetarrörelsens organisation för internationellt utvecklingssamarbete och opinionsbildning.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b border-primary-100 pb-2">Sammanfattning</h2>

            <p className="mb-4">
              Denna guide presenterar ett urval av Sveriges mest aktiva bidragsgivande stiftelser inom forskning, utbildning,
              medicin, kultur, miljö och regional utveckling, samt de viktigaste finansiärerna med annan organisationsform.
              Bidragssökare, akademiker, ideella organisationer och privatpersoner kan använda den som utgångspunkt för att
              identifiera finansieringspartners som passar deras mål.
            </p>

            <p className="mb-4">
              För ytterligare information om varje stiftelses behörighetskriterier, ansökningsprocesser och deadlines,
              konsultera respektive stiftelses webbplats eller länsstyrelsernas stiftelsedatabas.
            </p>
          </section>

          {/* Bottom partner CTA */}
          <PartnerCTA
            campaign="aktiva-stiftelser"
            placement="bottom"
            heading="Sök bland alla dessa stiftelser på ett ställe"
            className="mb-16"
          />
        </div>
      </div>
    </>
  );
}
