"use client";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import FoundationTypeIcon from "@/components/FoundationTypeIcon";
import { sokUrl } from "@/lib/partner";
import { useState } from "react";

// Modal content data
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

const KNOWLEDGE_CARDS = [
  {
    key: "definition",
    title: "Definition",
    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    desc: "En stiftelse är en självägande förmögenhet som avsatts för ett bestämt ändamål. Stiftelsen har inga ägare och är en egen juridisk person.",
  },
  {
    key: "syften",
    title: "Syften",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    desc: "Stiftelser bildas för olika ändamål som välgörenhet, utbildning, forskning, kulturella syften eller att stödja specifika grupper i samhället.",
  },
  {
    key: "forvaltning",
    title: "Förvaltning",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    desc: "Stiftelsens styrelse eller förvaltare ansvarar för att förvalta stiftelsens tillgångar och verkställa stiftelsens ändamål enligt stiftarens vilja.",
  },
] as const;

const FOUNDATION_TYPES = [
  { type: "allmännyttig" as const, name: "Allmännyttiga stiftelser", desc: "Främjar välgörande, humanitära, sociala eller kulturella ändamål.", anchor: "allmännyttiga" },
  { type: "familje" as const, name: "Familjestiftelser", desc: "Gynnar medlemmar av en viss familj eller släkt och håller samman förmögenheter.", anchor: "familjestiftelser" },
  { type: "näringsdrivande" as const, name: "Näringsdrivande stiftelser", desc: "Driver näringsverksamhet, direkt eller genom ägande av företag.", anchor: "näringsdrivande" },
  { type: "insamling" as const, name: "Insamlingsstiftelser", desc: "Samlar in pengar från allmänheten för välgörenhet eller samhällsnytta.", anchor: "insamlingsstiftelser" },
  { type: "pension" as const, name: "Pensionsstiftelser", desc: "Säkrar pensionsutfästelser till anställda och skyddar pensionskapital.", anchor: "pensionsstiftelser" },
  { type: "vinstandel" as const, name: "Vinstandelsstiftelser", desc: "Förvaltar och fördelar vinstandelar till anställda i ett företag.", anchor: "vinstandelsstiftelser" },
  { type: "kollektiv" as const, name: "Kollektivavtalsstiftelser", desc: "Bildas genom kollektivavtal för att främja anställdas intressen.", anchor: "kollektivavtalsstiftelser" },
];

const PROMO_FEATURES = [
  "Sök bland 17 000+ svenska stiftelser",
  "Massökning utifrån dina specifika kriterier",
  "DeepSearch på upp till 90 stiftelser samtidigt",
  "Aktivitetsstatus, hemsida och kontaktuppgifter",
  "AI-stöd för ansökningstexter",
  "Export till telefonlistor, namnlistor och CSV",
];

export default function HomeContent() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const closeModal = () => setOpenModal(null);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Allt du behöver veta om svenska stiftelser"
        subtitle="Din kompletta guide till att starta, driva och förvalta stiftelser i Sverige"
        kicker="Oberoende informationsresurs"
        align="center"
        size="large"
        primaryCta={{
          text: "Starta stiftelse",
          href: "/starta-stiftelse/"
        }}
        secondaryCta={{
          text: "Sök stiftelsemedel",
          href: sokUrl("home", "hero"),
          external: true
        }}
      />

      {/* Main Features Section */}
      <section className="section bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="mb-12 text-center">
            <p className="kicker mb-3">Stiftelsekunskap</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Vad är en stiftelse?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {KNOWLEDGE_CARDS.map((card) => (
              <div key={card.key} className="card card-hover flex flex-col">
                <div className="h-10 w-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                <button
                  onClick={() => setOpenModal(card.key)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-800 transition-colors self-start"
                >
                  Läs mer
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Foundations Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="mb-12">
            <p className="kicker mb-3">Översikt</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              Typer av stiftelser
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Stiftelselagen skiljer på flera stiftelseformer med olika regler för skatt,
              tillsyn och förvaltning. Välj rätt form från början — den går sällan att ändra.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOUNDATION_TYPES.map((f) => (
              <Link
                key={f.type}
                href={`/starta-stiftelse/#${f.anchor}`}
                className="card card-hover p-5 flex flex-col"
              >
                <FoundationTypeIcon type={f.type} size="sm" className="mb-4" />
                <h3 className="text-base font-semibold mb-1.5">{f.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </Link>
            ))}
            <Link
              href="/stiftelser/"
              className="card card-hover p-5 flex flex-col justify-center items-start bg-gray-50"
            >
              <h3 className="text-base font-semibold mb-1.5">Jämför alla former</h3>
              <p className="text-sm text-gray-600 mb-3">
                Se skillnader i skatt, tillsyn och krav.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-700">
                Till översikten
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Organization Comparison Section */}
      <section className="section bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="md:flex-1">
              <p className="kicker mb-3">Jämförelseverktyg</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                Stiftelse, förening eller aktiebolag?
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Osäker på vilken organisationsform som passar ditt ändamål? Vårt
                jämförelseverktyg visar skillnaderna i ägande, skatt och styrning så att du
                kan fatta ett välgrundat beslut.
              </p>
            </div>
            <div className="md:flex-none">
              <Link href="/verktyg/#organisationsformer" className="btn btn-lg btn-primary">
                Jämför organisationsformer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Promo Section */}
      <section className="section-lg bg-primary-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-400 mb-4">
                Vår samarbetspartner · SökaStiftelseMedel.se
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Hitta stiftelser som matchar ditt projekt
              </h2>
              <p className="text-lg text-primary-100 leading-relaxed mb-8">
                En AI-driven sökmotor för stiftelsemedel med över 17 000 svenska stiftelser.
                Sök gratis och spara veckor av manuellt letande.
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
                {PROMO_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-primary-100">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href={sokUrl("home", "promo")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-on-dark"
                >
                  Börja söka stiftelsemedel
                </a>
                <a
                  href="https://www.sokastiftelsemedel.se/om-oss?utm_source=stiftelseguiden&utm_medium=referral&utm_campaign=home&utm_content=promo-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Se alla funktioner
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden ring-1 ring-white/15">
              <Image
                src="/pictures/image.png"
                alt="SökaStiftelseMedel.se plattform"
                width={1069}
                height={376}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {openModal && (
        <div
          className="fixed inset-0 bg-gray-900/40 flex items-center justify-center p-4 z-50 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-hard animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                {modalContent[openModal as keyof typeof modalContent]?.title}
              </h3>
              <button
                onClick={closeModal}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                aria-label="Stäng"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {modalContent[openModal as keyof typeof modalContent]?.content}
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={closeModal} className="btn btn-primary">
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
