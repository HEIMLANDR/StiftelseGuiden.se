import { useState } from 'react';
import foundations from '../data/foundations.json';

interface Foundation {
  name: string;
  description: string;
  purpose?: string;
  website?: string;
}

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState('');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'.split('');
  const [selectedLetter, setSelectedLetter] = useState('A');

  const filteredFoundations = foundations.filter(foundation => 
    foundation.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedLetter === '' || foundation.name.toUpperCase().startsWith(selectedLetter))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Sök stiftelse..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className={`px-3 py-1 rounded ${
              selectedLetter === letter ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredFoundations.map((foundation, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="font-bold">{foundation.name}</h3>
            <p className="text-gray-600">{foundation.description}</p>
            {foundation.purpose && (
              <p className="text-sm mt-2">Syfte: {foundation.purpose}</p>
            )}
            {foundation.website && (
              <a
                href={foundation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm mt-2 block"
              >
                Besök webbplats
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}