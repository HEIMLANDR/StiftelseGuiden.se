"use client";

import { useState } from 'react';

interface FoundationType {
  id: string;
  name: string;
  description: string;
  purpose: string;
  taxStatus: string;
  minCapital: string;
  governance: string;
  advantages: string[];
  disadvantages: string[];
}

const foundationTypes: FoundationType[] = [
  {
    id: "family",
    name: "Familjestiftelse",
    description: "En stiftelse som främst gynnar medlemmar av en eller flera familjer.",
    purpose: "Att stödja medlemmar av en specifik familj eller släkt.",
    taxStatus: "Obegränsad skattskyldighet. Beskattas för all inkomst.",
    minCapital: "Rekommenderat minst 400 000 kr för att täcka administrativa kostnader och ge avkastning.",
    governance: "Styrs av en styrelse, ofta med familjemedlemmar representerade.",
    advantages: [
      "Möjliggör långsiktig förmögenhetsförvaltning för familjen",
      "Kan skydda tillgångar från splittring",
      "Ger möjlighet att stödja familjemedlemmar över generationer"
    ],
    disadvantages: [
      "Ingen skattemässig fördel jämfört med andra stiftelseformer",
      "Begränsad flexibilitet då ändamålet är svårt att ändra",
      "Kräver noggrann planering och förvaltning"
    ]
  },
  {
    id: "public",
    name: "Allmännyttig stiftelse",
    description: "En stiftelse som främjar allmännyttiga ändamål som vetenskap, utbildning, kultur eller välgörenhet.",
    purpose: "Att främja allmännyttiga ändamål som gynnar en större grupp eller samhället i stort.",
    taxStatus: "Kan få inskränkt skattskyldighet om villkoren uppfylls. Betalar då endast skatt på inkomst från näringsverksamhet.",
    minCapital: "Rekommenderat minst 350 000 kr för att täcka administrativa kostnader och ge avkastning.",
    governance: "Styrs av en oberoende styrelse med relevant kompetens för ändamålet.",
    advantages: [
      "Möjlighet till inskränkt skattskyldighet",
      "Gott anseende och möjlighet till samhällspåverkan",
      "Kan attrahera externa donationer och bidrag"
    ],
    disadvantages: [
      "Måste uppfylla strikta krav för att få skattefördelar",
      "Kräver noggrann dokumentation och rapportering",
      "Begränsad flexibilitet då ändamålet är svårt att ändra"
    ]
  },
  {
    id: "business",
    name: "Näringsdrivande stiftelse",
    description: "En stiftelse som bedriver näringsverksamhet, antingen direkt eller genom ägande av företag.",
    purpose: "Att driva näringsverksamhet, ofta med ett bakomliggande allmännyttigt syfte.",
    taxStatus: "Beskattas för inkomst från näringsverksamhet. Kan få inskränkt skattskyldighet för övrig inkomst om den uppfyller kraven för allmännyttighet.",
    minCapital: "Betydligt högre kapitalkrav, ofta flera miljoner kronor beroende på verksamhetens omfattning.",
    governance: "Professionell styrelse med kompetens inom både verksamhetsområdet och stiftelseförvaltning.",
    advantages: [
      "Möjliggör långsiktig och stabil ägarstruktur för företag",
      "Kan kombinera näringsverksamhet med allmännyttigt ändamål",
      "Skydd mot uppköp och kortsiktiga vinstintressen"
    ],
    disadvantages: [
      "Komplexa skatteregler och redovisningskrav",
      "Kräver omfattande kapital och professionell förvaltning",
      "Registreringsskyldighet och tillsyn från länsstyrelsen"
    ]
  },
  {
    id: "collective",
    name: "Kollektivavtalsstiftelse",
    description: "En stiftelse som bildas genom kollektivavtal mellan arbetsmarknadens parter.",
    purpose: "Att främja intressen för anställda inom en viss bransch eller sektor, t.ex. trygghetsråd eller kompetensutveckling.",
    taxStatus: "Särskilda skatteregler enligt inkomstskattelagen. Ofta inskränkt skattskyldighet.",
    minCapital: "Varierar beroende på ändamål och omfattning. Finansieras ofta löpande genom avgifter från arbetsgivare.",
    governance: "Styrs av representanter från både arbetsgivar- och arbetstagarorganisationer.",
    advantages: [
      "Partsgemensamt inflytande över förvaltningen",
      "Stabil finansiering genom kollektivavtal",
      "Möjlighet att stödja stora grupper av anställda"
    ],
    disadvantages: [
      "Begränsad till specifika ändamål enligt kollektivavtalet",
      "Komplex styrning med flera intressenter",
      "Särskilda regler och begränsningar i stiftelselagen"
    ]
  },
  {
    id: "pension",
    name: "Pensionsstiftelse",
    description: "En stiftelse som säkrar en arbetsgivares pensionsutfästelser till anställda.",
    purpose: "Att trygga utfästelser om pension till arbetstagare eller deras efterlevande.",
    taxStatus: "Särskilda skatteregler enligt tryggandelagen. Begränsad skattskyldighet.",
    minCapital: "Baseras på pensionsåtagandets storlek. Ofta betydande belopp.",
    governance: "Styrs av representanter från både arbetsgivare och anställda enligt särskilda regler.",
    advantages: [
      "Skyddar pensionskapital vid arbetsgivarens konkurs",
      "Skattemässigt fördelaktigt sätt att trygga pensioner",
      "Möjlighet till effektiv kapitalförvaltning"
    ],
    disadvantages: [
      "Omfattas av särskild lagstiftning (tryggandelagen)",
      "Begränsad till pensionsändamål",
      "Kräver aktuariell kompetens och särskild redovisning"
    ]
  },
  {
    id: "fundraising",
    name: "Insamlingsstiftelse",
    description: "En stiftelse som samlar in pengar från allmänheten för ett specifikt ändamål.",
    purpose: "Att samla in och förvalta medel för ett specifikt allmännyttigt ändamål.",
    taxStatus: "Kan få inskränkt skattskyldighet om villkoren för allmännyttighet uppfylls.",
    minCapital: "Inget formellt minimikrav på startkapital, då verksamheten bygger på löpande insamling.",
    governance: "Styrs av en oberoende styrelse med kompetens inom insamlingsverksamhet och ändamålet.",
    advantages: [
      "Kräver inte stort startkapital",
      "Möjlighet att engagera allmänheten i ändamålet",
      "Kan få 90-konto och skattereduktion för givare"
    ],
    disadvantages: [
      "Beroende av kontinuerlig insamling",
      "Höga krav på transparens och redovisning",
      "Måste följa Svensk Insamlingskontrolls regler för att få 90-konto"
    ]
  },
  {
    id: "profit-sharing",
    name: "Vinstandelsstiftelse",
    description: "En stiftelse som förvaltar vinstandelar för anställda i ett företag.",
    purpose: "Att förvalta och fördela vinstandelar till anställda i ett företag.",
    taxStatus: "Särskilda skatteregler enligt inkomstskattelagen. Stiftelsen är skattebefriad, men utbetalningar beskattas hos mottagaren.",
    minCapital: "Baseras på företagets avsättningar. Ingen formell minimigräns.",
    governance: "Styrs ofta av representanter från både företaget och de anställda.",
    advantages: [
      "Skattemässigt fördelaktigt sätt att fördela vinst till anställda",
      "Kan fungera som incitament för anställda",
      "Möjlighet till långsiktig förvaltning av medlen"
    ],
    disadvantages: [
      "Komplexa regler för avsättning och utbetalning",
      "Begränsad till vinstdelning för anställda",
      "Kräver kontinuerlig administration"
    ]
  }
];

export default function FoundationComparison() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  
  const handleTypeToggle = (typeId: string) => {
    if (selectedTypes.includes(typeId)) {
      setSelectedTypes(selectedTypes.filter(id => id !== typeId));
    } else {
      if (selectedTypes.length < 3) {
        setSelectedTypes([...selectedTypes, typeId]);
      }
    }
  };
  
  const selectedFoundations = foundationTypes.filter(type => 
    selectedTypes.includes(type.id)
  );
  
  return (
    <div className="card">
      <h2 className="text-2xl font-semibold tracking-tight mb-6">Jämför stiftelsetyper</h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Välj upp till 3 stiftelsetyper att jämföra sida vid sida för att hitta den form som passar ditt ändamål bäst.
        </p>
        
        <div className="inline-flex flex-wrap gap-1 rounded-lg border border-gray-300 p-0.5">
          {foundationTypes.map(type => (
            <button
              key={type.id}
              onClick={() => handleTypeToggle(type.id)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                selectedTypes.includes(type.id)
                  ? 'bg-primary-700 text-white rounded-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              disabled={selectedTypes.length >= 3 && !selectedTypes.includes(type.id)}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>
      
      {selectedFoundations.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Egenskap</th>
                {selectedFoundations.map(foundation => (
                  <th key={foundation.id} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {foundation.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Beskrivning</td>
                {selectedFoundations.map(foundation => (
                  <td key={foundation.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">{foundation.description}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Ändamål</td>
                {selectedFoundations.map(foundation => (
                  <td key={foundation.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">{foundation.purpose}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Skattemässig status</td>
                {selectedFoundations.map(foundation => (
                  <td key={foundation.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">{foundation.taxStatus}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Rekommenderat kapital</td>
                {selectedFoundations.map(foundation => (
                  <td key={foundation.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">{foundation.minCapital}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Förvaltning</td>
                {selectedFoundations.map(foundation => (
                  <td key={foundation.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">{foundation.governance}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Fördelar</td>
                {selectedFoundations.map(foundation => (
                  <td key={foundation.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      {foundation.advantages.map((advantage, index) => (
                        <li key={index}>{advantage}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Nackdelar</td>
                {selectedFoundations.map(foundation => (
                  <td key={foundation.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      {foundation.disadvantages.map((disadvantage, index) => (
                        <li key={index}>{disadvantage}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          Välj minst en stiftelsetyp för att se jämförelsen
        </div>
      )}
    </div>
  );
}