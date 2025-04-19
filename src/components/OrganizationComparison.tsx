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
    <div className="bg-white rounded-lg shadow-md p-6 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6 text-primary-700">Jämför organisationsformer</h2>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Välj upp till 3 organisationsformer att jämföra sida vid sida för att hitta den form som passar ditt ändamål bäst.
        </p>
        
        <div className="flex flex-wrap gap-3">
          {organizationTypes.map(type => (
            <button
              key={type.id}
              onClick={() => handleTypeToggle(type.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTypes.includes(type.id)
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              disabled={selectedTypes.length >= 3 && !selectedTypes.includes(type.id)}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>
      
      {selectedOrganizations.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">Egenskap</th>
                {selectedOrganizations.map(org => (
                  <th key={org.id} className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                    {org.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 font-medium border-b">Beskrivning</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="py-3 px-4 border-b">{org.description}</td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 font-medium border-b">Ändamål</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="py-3 px-4 border-b">{org.purpose}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium border-b">Skattemässig status</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="py-3 px-4 border-b">{org.taxStatus}</td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 font-medium border-b">Kapitalkrav</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="py-3 px-4 border-b">{org.minCapital}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium border-b">Styrning</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="py-3 px-4 border-b">{org.governance}</td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 font-medium border-b">Fördelar</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="py-3 px-4 border-b">
                    <ul className="list-disc list-inside space-y-1">
                      {org.advantages.map((advantage, index) => (
                        <li key={index} className="text-sm">{advantage}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium border-b">Nackdelar</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="py-3 px-4 border-b">
                    <ul className="list-disc list-inside space-y-1">
                      {org.disadvantages.map((disadvantage, index) => (
                        <li key={index} className="text-sm">{disadvantage}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 font-medium border-b">Passar bäst för</td>
                {selectedOrganizations.map(org => (
                  <td key={org.id} className="py-3 px-4 border-b">
                    <ul className="list-disc list-inside space-y-1">
                      {org.bestFor.map((bestFor, index) => (
                        <li key={index} className="text-sm">{bestFor}</li>
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