"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { sokUrl } from "@/lib/partner";

const NAV_ITEMS = [
  { text: "Starta stiftelse", href: "/starta-stiftelse/" },
  { text: "Driva stiftelse", href: "/driva-stiftelse/" },
  { text: "Stiftelser", href: "/stiftelser/" },
  { text: "Juridik", href: "/juridik/" },
  { text: "Resurser", href: "/resurser/" },
  { text: "Insikter", href: "/insikter" },
  { text: "Kontakt", href: "/kontakt/" },
];

// Sidor som inte får plats i toppmenyn men ska nås från mobilmenyn.
const MOBILE_EXTRA_ITEMS = [
  { text: "Dokument", href: "/dokument/" },
  { text: "Verktyg", href: "/verktyg/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-gray-900 whitespace-nowrap"
          >
            StiftelseGuiden<span className="text-primary-600">.se</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Huvudmeny">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <SearchBar />

            <a
              href={sokUrl("header", "cta")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hidden sm:inline-flex whitespace-nowrap"
            >
              Sök stiftelsemedel
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              aria-label={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
              aria-expanded={mobileMenuOpen}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
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
        <nav
          className="lg:hidden absolute w-full bg-white border-b border-gray-200 shadow-medium"
          aria-label="Mobilmeny"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {[...NAV_ITEMS, ...MOBILE_EXTRA_ITEMS].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                {item.text}
              </Link>
            ))}

            <a
              href={sokUrl("header", "mobile-menu")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2"
            >
              Sök stiftelsemedel
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
