import React from '../../node_modules/react';
import { Bot } from 'lucide-react';

export function Header() {
  const scrollToDirectory = (e: React.MouseEvent) => {
    e.preventDefault();
    const directory = document.querySelector('#stiftelsekatalog');
    if (directory) {
      directory.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Bot className="w-8 h-8 text-white" />
            <div>
              <h1 className="text-2xl font-bold text-white">StiftelseGuiden.se</h1>
              <p className="text-white/80 text-sm">Sveriges mest omfattande AI-verktyg för Stiftelser</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://heimlandr.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Created by HEIMLANDR.IO
            </a>
            <button 
              onClick={scrollToDirectory}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all"
            >
              Sök Stiftelser
            </button>
          </div>
        </div>
        <div className="mt-4 text-center space-y-2">
          <p className="text-white/90 text-lg">För Individer, Organisationer, Myndigheter, Stiftelser och Företag</p>
          <p className="text-white/80 text-sm font-medium">Vår Stiftelse - HEIMLANDR Insamlingsstiftelse</p>
        </div>
      </div>
    </header>
  );
}