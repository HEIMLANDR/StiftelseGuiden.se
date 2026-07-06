"use client";

import { useState } from 'react';

interface OrganizationType {
  id: string;
  name: string;
  description: string;
  purpose: string;
  taxStatus: string;
  minCapital: string;
  governance: string;
  advantages: string[];
  disadvantages: string[];
  bestFor: string[];
}

const organizationTypes: OrganizationType[] = [
  {
    id: "stiftelse",
    name: "Stiftelse",
    description: "En självägande förmögenhet som avsatts för ett bestämt ändamål.",
    purpose: "Att främja ett specifikt ändamål över lång tid utan ägarinflytande.",
    taxStatus: "Varierar beroende på typ. Allmännyttiga stiftelser kan få inskränkt skattskyldighet.",
    minCapital: "Rekommenderat minst 350 000 kr för att täcka administrativa kostnader och ge avkastning.",
    governance: "Styrs av en styrelse eller förvaltare enligt stiftarens vilja i stiftelseförordnandet.",
    advantages: [
      "Långsiktig stabilitet och kontinuitet",
      "Möjlighet till skattefördelar för allmännyttiga stiftelser",
      "Skydd mot externa intressen och påtryckningar",
      "Tydligt fokus på ändamålet"
    ],
    disadvantages: [
      "Svårt att ändra ändamålet efter bildandet",
      "Relativt högt kapitalkrav",
      "Omfattande administration och tillsyn",
      "Begränsad flexibilitet"
    ],
    bestFor: [
      "Långsiktiga ändamål som ska bestå över generationer",
      "Välgörenhet och allmännyttiga syften",
      "Förvaltning av kapital för specifika ändamål",
      "Skydd av tillgångar från splittring"
    ]
  },
  {
    id: "forening",
    name: "Ideell förening",
    description: "En sammanslutning av personer eller organisationer med gemensamt intresse eller syfte.",
    purpose: "Att främja medlemmarnas gemensamma intresse, ofta utan vinstsyfte.",
    taxStatus: "Kan få inskränkt skattskyldighet om föreningen är allmännyttig.",
    minCapital: "Inget formellt kapitalkrav. Kan startas med minimala resurser.",
    governance: "Styrs demokratiskt av medlemmarna genom årsmöte och vald styrelse.",
    advantages: [
      "Enkelt och billigt att starta",
      "Demokratisk styrning med medlemsinflytande",
      "Flexibel verksamhet som kan anpassas över tid",
      "Möjlighet till skattefördelar för allmännyttiga föreningar"
    ],
    disadvantages: [
      "Beroende av aktivt medlemsengagemang",
      "Kan vara svårt att fatta snabba beslut",
      "Begränsade möjligheter till kapitaluppbyggnad",
      "Personligt betalningsansvar för styrelsen vid oaktsamhet"
    ],
    bestFor: [
      "Verksamheter som bygger på medlemskap och delaktighet",
      "Fritidsintressen, sport och kulturaktiviteter",
      "Lokala samhällsinitiativ och påverkansarbete",
      "Verksamheter som utvecklas och förändras över tid"
    ]
  },
  {
    id: "aktiebolag",
    name: "Aktiebolag",
    description: "Ett företag där ägarna har begränsat personligt ansvar för företagets skulder.",
    purpose: "Att bedriva näringsverksamhet, oftast med vinstsyfte.",
    taxStatus: "Beskattas för vinst med bolagsskatt. Utdelning till ägare beskattas ytterligare.",
    minCapital: "Minst 25 000 kr för privata aktiebolag, 500 000 kr för publika.",
    governance: "Styrs av styrelse och VD enligt aktiebolagslagen och ägarnas direktiv.",
    advantages: [
      "Begränsat personligt ansvar för ägarna",
      "Tydlig struktur för ägande och styrning",
      "Möjlighet att ta in externt kapital",
      "Hög trovärdighet mot kunder och leverantörer"
    ],
    disadvantages: [
      "Mer omfattande administration och redovisningskrav",
      "Dubbelbeskattning (både bolagsskatt och skatt på utdelning)",
      "Kapitalkrav vid start",
      "Mindre flexibilitet jämfört med enskild firma"
    ],
    bestFor: [
      "Verksamheter med ekonomisk risk",
      "Företag som behöver externt kapital",
      "Verksamheter som planerar tillväxt",
      "När flera personer ska äga och driva verksamheten tillsammans"
    ]
  }
];

export default function OrganizationComparison() {
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
  
  const selectedOrganizations = organizationTypes.filter(type => 
    selectedTypes.includes(type.id)
  );
  
  return (
    <div className="card">
      <h2 className="text-2xl font-semibold tracking-tight mb-6">Jämför organisationsformer</h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Välj upp till 3 organisationsformer att jämföra sida vid sida för att hitta den form som passar ditt ändamål bäst.
        </p>
        
        <div className="inline-flex flex-wrap gap-1 rounded-lg border border-gray-300 p-0.5">
          {organizationTypes.map(type => (
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
      
      {selectedOrganizations.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">Egenskap</th>
                {selectedOrganizations.map(org => (
                  <th key={org.id} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {org.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Beskrivning</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">{org.description}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Ändamål</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">{org.purpose}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Skattemässig status</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">{org.taxStatus}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Kapitalkrav</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">{org.minCapital}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Styrning</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">{org.governance}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Fördelar</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      {org.advantages.map((advantage, index) => (
                        <li key={index}>{advantage}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Nackdelar</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      {org.disadvantages.map((disadvantage, index) => (
                        <li key={index}>{disadvantage}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-gray-100 font-medium text-gray-900">Passar bäst för</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="px-4 py-3 border-t border-gray-100 text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      {org.bestFor.map((bestFor, index) => (
                        <li key={index}>{bestFor}</li>
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
          Välj minst en organisationsform för att se jämförelsen
        </div>
      )}
    </div>
  );
}