"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

// Mock search data - in a real application, this would come from a backend API
const mockSearchData: SearchResult[] = [
  {
    title: "Starta stiftelse",
    description: "Guide till att starta en stiftelse i Sverige",
    url: "/starta-stiftelse",
    category: "Guide"
  },
  {
    title: "Driva stiftelse",
    description: "Information om förvaltning och administration av stiftelser",
    url: "/driva-stiftelse",
    category: "Guide"
  },
  {
    title: "Juridik för stiftelser",
    description: "Juridisk information om stiftelselagen och andra rättsliga aspekter",
    url: "/juridik",
    category: "Juridik"
  },
  {
    title: "Stiftelselagen",
    description: "Information om stiftelselagen (1994:1220)",
    url: "/juridik#stiftelselagen",
    category: "Juridik"
  },
  {
    title: "Tillsyn och kontroll",
    description: "Information om tillsyn av stiftelser",
    url: "/juridik#tillsyn",
    category: "Juridik"
  },
  {
    title: "Beskattning av stiftelser",
    description: "Information om hur stiftelser beskattas i Sverige",
    url: "/juridik#skatt",
    category: "Juridik"
  },
  {
    title: "Ändring av förordnandet",
    description: "Information om permutation och ändring av stiftelseförordnandet",
    url: "/juridik#andring",
    category: "Juridik"
  },
  {
    title: "Avveckling av stiftelser",
    description: "Information om hur en stiftelse kan avvecklas",
    url: "/juridik#avveckling",
    category: "Juridik"
  },
  {
    title: "Styrelsearbete i stiftelser",
    description: "Information om styrelsearbete och styrelsens ansvar",
    url: "/driva-stiftelse#styrelse",
    category: "Förvaltning"
  },
  {
    title: "Kapitalförvaltning",
    description: "Information om förvaltning av stiftelsens kapital",
    url: "/driva-stiftelse#förvaltning",
    category: "Förvaltning"
  },
  {
    title: "Årlig rapportering",
    description: "Information om bokföring och årsredovisning för stiftelser",
    url: "/driva-stiftelse#rapportering",
    category: "Förvaltning"
  },
  {
    title: "Utdelning av medel",
    description: "Information om hur stiftelser delar ut medel",
    url: "/driva-stiftelse#utdelning",
    category: "Förvaltning"
  },
  {
    title: "Framgångsrika stiftelser",
    description: "Exempel på framgångsrika stiftelser i Sverige",
    url: "/driva-stiftelse#framgangsexempel",
    category: "Exempel"
  },
  {
    title: "Kontakt",
    description: "Kontaktinformation och kontaktformulär",
    url: "/kontakt",
    category: "Kontakt"
  },
  {
    title: "Vanliga frågor",
    description: "Svar på vanliga frågor om stiftelser",
    url: "/kontakt#faq",
    category: "FAQ"
  }
];

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search
  useEffect(() => {
    if (query.length > 1) {
      const filteredResults = mockSearchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle search submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      router.push(results[0].url);
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors"
        aria-label="Sök på webbplatsen"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Sök
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg overflow-hidden z-50 animate-scaleIn">
          <form onSubmit={handleSubmit} className="border-b border-gray-200">
            <div className="flex items-center px-4 py-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Sök på StiftelseGuiden..."
                className="w-full px-4 py-2 focus:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
            </div>
          </form>

          {results.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <Link 
                  key={index} 
                  href={result.url}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-start">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary-100 text-primary-800 mr-2">
                      {result.category}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{result.title}</p>
                      <p className="text-xs text-gray-500">{result.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.length > 1 ? (
            <div className="px-4 py-3 text-sm text-gray-500">
              Inga resultat hittades för "{query}"
            </div>
          ) : null}

          <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500 border-t border-gray-100">
            Tryck på Enter för att söka eller Esc för att stänga
          </div>
        </div>
      )}
    </div>
  );
}