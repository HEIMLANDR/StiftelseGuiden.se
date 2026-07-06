import Link from 'next/link';
import { sokUrl } from '@/lib/partner';

const NAV_LINKS = [
  { text: 'Starta stiftelse', href: '/starta-stiftelse/' },
  { text: 'Driva stiftelse', href: '/driva-stiftelse/' },
  { text: 'Stiftelser', href: '/stiftelser/' },
  { text: 'Juridik', href: '/juridik/' },
  { text: 'Insikter', href: '/insikter' },
  { text: 'Om redaktionen', href: '/om/redaktionen/' },
  { text: 'Kontakt', href: '/kontakt/' },
];

const RESOURCE_LINKS = [
  { text: 'Stiftelselagen – komplett guide', href: '/juridik/stiftelselagen/' },
  { text: 'Familjestiftelse', href: '/stiftelser/familjestiftelse/' },
  { text: 'Ansökningsguide', href: '/resurser/ansokningsguide/' },
  { text: 'Stiftelseordlista', href: '/resurser/stiftelseordlista/' },
  { text: 'Dokument och mallar', href: '/dokument/' },
  { text: 'Verktyg', href: '/verktyg/' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="container mx-auto pt-14 pb-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About */}
          <div>
            <p className="text-lg font-bold tracking-tight text-white mb-3">
              StiftelseGuiden<span className="text-primary-400">.se</span>
            </p>
            <p className="text-sm leading-relaxed">
              Din kompletta guide till stiftelser i Sverige. Vi hjälper dig att förstå stiftelsers
              juridiska aspekter och praktiska förvaltning.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigera
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Resurser
            </h3>
            <ul className="space-y-2.5 text-sm">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Partner Link */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Vår samarbetspartner
            </h3>
            <div className="rounded-xl border border-secondary-700 bg-secondary-800 p-5">
              <p className="text-sm mb-4">
                Söker du stiftelsemedel till ditt projekt? Sök gratis bland 17 000+ stiftelser.
              </p>
              <a
                href={sokUrl('footer', 'partner-card')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-on-dark w-full"
              >
                SökaStiftelseMedel.se
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-800 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>
            &copy; {currentYear} StiftelseGuiden.se — informationen är vägledande och ersätter inte
            professionell rådgivning.
          </p>
          <p className="flex items-center gap-4 whitespace-nowrap">
            <Link href="/content-policy/" className="hover:text-white transition-colors">
              Innehållspolicy
            </Link>
            <a
              href="https://heimlandr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Skapad av heimlandr.io
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
