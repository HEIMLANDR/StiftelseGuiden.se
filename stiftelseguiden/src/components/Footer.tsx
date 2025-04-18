"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white/90">
      <div className="container mx-auto pt-12 pb-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-[600] mb-4 text-white">StiftelseGuiden.se</h3>
            <p className="text-sm mb-4 text-white/80">
              Din kompletta guide till stiftelser i Sverige. Vi hjälper dig att förstå stiftelsers juridiska aspekter och praktiska förvaltning.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-[600] mb-4 text-white">Snabblänkar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors hover:underline">Hem</Link>
              </li>
              <li>
                <Link href="/starta-stiftelse" className="text-white/80 hover:text-white transition-colors hover:underline">Starta stiftelse</Link>
              </li>
              <li>
                <Link href="/driva-stiftelse" className="text-white/80 hover:text-white transition-colors hover:underline">Driva stiftelse</Link>
              </li>
              <li>
                <Link href="/juridik" className="text-white/80 hover:text-white transition-colors hover:underline">Juridik</Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-white/80 hover:text-white transition-colors hover:underline">Kontakt</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-[600] mb-4 text-white">Resurser</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/starta-stiftelse#steg-för-steg" className="text-white/80 hover:text-white transition-colors hover:underline">Steg-för-steg guide</Link>
              </li>
              <li>
                <Link href="/juridik#lagar" className="text-white/80 hover:text-white transition-colors hover:underline">Relevanta lagar</Link>
              </li>
              <li>
                <Link href="/juridik#skatt" className="text-white/80 hover:text-white transition-colors hover:underline">Skattefrågor</Link>
              </li>
              <li>
                <Link href="/driva-stiftelse#rapportering" className="text-white/80 hover:text-white transition-colors hover:underline">Årlig rapportering</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Partner Link */}
          <div>
            <h3 className="text-lg font-[600] mb-4 text-white">Våra Partners</h3>
            <div className="bg-primary-700 rounded-lg p-4">
              <p className="text-sm mb-3">
                Söker du stiftelsemedel till ditt projekt? Besök vår samarbetspartner:
              </p>
              <a 
                href="https://www.sokastiftelsemedel.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-4 py-2 bg-accent-500 hover:bg-accent-400 text-white rounded-md text-sm font-[500] transition-colors w-full"
              >
                SökaStiftelseMedel.se
                <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 text-sm text-center">
          <p className="mb-2">&copy; {currentYear} StiftelseGuiden.se - All information är endast vägledande och ersätter inte professionell rådgivning.</p>
          <p>
            Created by <a href="https://heimlandr.io" target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 transition-colors">heimlandr.io</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
