import React from 'react';
import { Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-white/80 mb-6">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Bot className="w-5 h-5" />
            <span>Akademisk Stiftelse-AI</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://www.sokastiftelsemedel.se"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              sokastiftelsemedel.se
            </a>
            <span>|</span>
            <span>&copy; {new Date().getFullYear()} Alla rättigheter förbehållna</span>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 mb-6">
          <h3 className="text-white/90 text-center mb-4 font-medium">Company Services</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-white/80 text-sm">
            <a 
              href="https://heimlandr.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              AI, blockchain and Tech - HEIMLANDR.IO
            </a>
            <span className="hidden md:inline">|</span>
            <a 
              href="https://heimlandr.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Our foundation - HEIMLANDR.ORG
            </a>
            <span className="hidden md:inline">|</span>
            <a 
              href="https://heimlandr.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Our visionary building block - HEIMLANDR.COM
            </a>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://heimlandr.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-sm transition-colors inline-flex items-center space-x-2"
          >
            <span>Vår Stiftelse - HEIMLANDR Insamlingsstiftelse</span>
            <span className="text-white/60">| Virtual Blockchain Foundation MVP</span>
          </a>
        </div>
      </div>
    </footer>
  );
}