"use client";

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary-600 text-white shadow-md relative z-20">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:text-white/90 transition-colors flex items-center"
          >
            <span className="border-b-2 border-accent-400">
              StiftelseGuiden
            </span>
            <span className="text-accent-300 ml-1">.se</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {[
                { text: 'Hem', href: '/' },
                { text: 'Starta stiftelse', href: '/starta-stiftelse' },
                { text: 'Driva stiftelse', href: '/driva-stiftelse' },
                { text: 'Juridik', href: '/juridik' },
                { text: 'Dokument', href: '/dokument' },
                { text: 'Verktyg', href: '/verktyg' },
                { text: 'Kontakt', href: '/kontakt' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-md text-white hover:text-white hover:bg-primary-500 transition-all duration-200"
                >
                  {item.text}
                </Link>
              ))}
            </nav>
            
            {/* Search Bar */}
            <SearchBar />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                {mobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-primary-600 py-2 px-4 absolute w-full shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {[
              { text: 'Hem', href: '/' },
              { text: 'Starta stiftelse', href: '/starta-stiftelse' },
              { text: 'Driva stiftelse', href: '/driva-stiftelse' },
              { text: 'Juridik', href: '/juridik' },
              { text: 'Dokument', href: '/dokument' },
              { text: 'Verktyg', href: '/verktyg' },
              { text: 'Kontakt', href: '/kontakt' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-md text-white hover:text-white hover:bg-primary-500 transition-all"
              >
                {item.text}
              </Link>
            ))}
            
            {/* Search in mobile menu */}
            <div className="px-4 py-3">
              <SearchBar />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
