import Link from 'next/link';
import { sokUrl } from '@/lib/partner';

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
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-[600] mb-4 text-white">Snabblänkar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors hover:underline">Hem</Link>
              </li>
              <li>
                <Link href="/starta-stiftelse/" className="text-white/80 hover:text-white transition-colors hover:underline">Starta stiftelse</Link>
              </li>
              <li>
                <Link href="/driva-stiftelse/" className="text-white/80 hover:text-white transition-colors hover:underline">Driva stiftelse</Link>
              </li>
              <li>
                <Link href="/juridik/" className="text-white/80 hover:text-white transition-colors hover:underline">Juridik</Link>
              </li>
              <li>
                <Link href="/insikter" className="text-white/80 hover:text-white transition-colors hover:underline">Insikter</Link>
              </li>
              <li>
                <Link href="/om/redaktionen/" className="text-white/80 hover:text-white transition-colors hover:underline">Om redaktionen</Link>
              </li>
              <li>
                <Link href="/kontakt/" className="text-white/80 hover:text-white transition-colors hover:underline">Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-[600] mb-4 text-white">Resurser</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/juridik/stiftelselagen/" className="text-white/80 hover:text-white transition-colors hover:underline">Stiftelselagen – komplett guide</Link>
              </li>
              <li>
                <Link href="/stiftelser/familjestiftelse/" className="text-white/80 hover:text-white transition-colors hover:underline">Familjestiftelse</Link>
              </li>
              <li>
                <Link href="/starta-stiftelse/#steg-för-steg" className="text-white/80 hover:text-white transition-colors hover:underline">Steg-för-steg guide</Link>
              </li>
              <li>
                <Link href="/juridik/#skatt" className="text-white/80 hover:text-white transition-colors hover:underline">Skattefrågor</Link>
              </li>
              <li>
                <Link href="/driva-stiftelse/#rapportering" className="text-white/80 hover:text-white transition-colors hover:underline">Årlig rapportering</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Partner Link */}
          <div>
            <h3 className="text-lg font-[600] mb-4 text-white">Våra Partners</h3>
            <div className="bg-primary-700 rounded-lg p-4">
              <p className="text-sm mb-3">
                Söker du stiftelsemedel till ditt projekt? Sök gratis bland 17 000+ stiftelser:
              </p>
              <a
                href={sokUrl('footer', 'partner-card')}
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
          <p className="mb-2">
            <Link href="/content-policy/" className="text-white/70 hover:text-white transition-colors hover:underline">Innehållspolicy</Link>
          </p>
          <p>
            Created by <a href="https://heimlandr.io" target="_blank" rel="noopener noreferrer" className="text-accent-300 hover:text-accent-200 transition-colors">heimlandr.io</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
