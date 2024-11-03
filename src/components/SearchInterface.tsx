import React, { useState } from 'react';
import { Bot, Search, Shield, ExternalLink } from 'lucide-react';

export function SearchInterface() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://www.sokastiftelsemedel.se';
  };

  return (
    <main className="max-w-4xl mx-auto px-4 pt-16 pb-24">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <Bot className="w-12 h-12 text-indigo-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-900">
            Akademisk Stiftelse-AI
          </h1>
        </div>
        <p className="text-xl text-gray-600 mb-4">
          Sveriges mest avancerade AI för akademiska stiftelser och stipendier
        </p>
        <div className="flex items-center justify-center text-sm text-gray-500 space-x-6">
          <div className="flex items-center">
            <Shield className="w-4 h-4 mr-2" />
            <span>GDPR-säker</span>
          </div>
          <div className="flex items-center">
            <Bot className="w-4 h-4 mr-2" />
            <span>Tränad på Sveriges stiftelsedatabas</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Hitta rätt stiftelse för din akademiska resa
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Vad söker du stipendium för?
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="T.ex: doktorandstudier i medicin, forskningsanslag inom humaniora..."
                className="w-full p-4 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 px-6 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Sök stipendier på sokastiftelsemedel.se</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </form>
      </div>

      <div className="prose prose-indigo max-w-none">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Varför använda vår AI-guide?
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li>✓ Specialiserad på svenska akademiska stiftelser och stipendier</li>
          <li>✓ Uppdaterad databas med över 15 000 stiftelser</li>
          <li>✓ GDPR-kompatibel - sparar ingen personlig information</li>
          <li>✓ Expertkunskap inom akademiska bidrag och ansökningar</li>
        </ul>
      </div>
    </main>
  );
}