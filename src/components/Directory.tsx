import React from 'react';
import { Search } from 'lucide-react';

export function Directory() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'.split('');
  
  return (
    <div id="stiftelsekatalog" className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Stiftelsekatalog A-Ö</h2>
        <a
          href="https://www.sokastiftelsemedel.se/sok-stiftelser"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all"
        >
          <Search className="w-4 h-4" />
          <span>Sök Stiftelser</span>
        </a>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {alphabet.map((letter) => (
          <a
            key={letter}
            href={`https://www.sokastiftelsemedel.se/stiftelser/${letter.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-white/5 hover:bg-white/20 rounded-lg text-white font-semibold transition-all"
          >
            {letter}
          </a>
        ))}
      </div>
    </div>
  );
}