import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dokument & Mallar | StiftelseGuiden.se',
  description: 'Ladda ner ansökningsblanketter, mallar, checklistor och andra dokument för stiftelser. Allt du behöver för att starta, driva och ansöka om medel från stiftelser.',
};

export default function DokumentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-16 text-white">
        <div className="container-padded max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Dokument & Mallar</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Här hittar du alla dokument, mallar och checklistor du behöver för att starta, driva och ansöka om medel från stiftelser.
            </p>
          </div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container-padded max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Ansökningsblanketter</h2>
              <p className="text-gray-600 mb-4">Officiella och standardiserade ansökningsblanketter för olika typer av stiftelser.</p>
              <a href="#ansokan" className="text-primary-600 font-medium hover:text-primary-800 inline-flex items-center">
                Visa blanketter
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Mallar & Checklistor</h2>
              <p className="text-gray-600 mb-4">Mallar för stadgar, projektbeskrivningar, budgetar och checklistor för ansökningsprocessen.</p>
              <a href="#mallar" className="text-accent-600 font-medium hover:text-accent-800 inline-flex items-center">
                Visa mallar
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Juridiska Dokument</h2>
              <p className="text-gray-600 mb-4">Officiella dokument, lagar och förordningar som reglerar stiftelser i Sverige.</p>
              <a href="#juridik" className="text-secondary-600 font-medium hover:text-secondary-800 inline-flex items-center">
                Visa dokument
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Application Forms Section */}
      <section id="ansokan" className="py-16">
        <div className="container-padded max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Ansökningsblanketter</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Document Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Allmän ansökningsblankett för stiftelser</h3>
                    <p className="text-gray-600 mb-3">Standardiserad ansökningsblankett som kan användas för de flesta allmännyttiga stiftelser.</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-3">PDF • 2 sidor</span>
                      <span>Senast uppdaterad: 2024-03-15</span>
                    </div>
                    <a 
                      href="/dokument/allmän-ansökningsblankett.pdf" 
                      className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Ladda ner
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Ansökan om forskningsmedel</h3>
                    <p className="text-gray-600 mb-3">Specialiserad blankett för ansökan om forskningsmedel från forskningsstiftelser.</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-3">PDF • 4 sidor</span>
                      <span>Senast uppdaterad: 2024-02-10</span>
                    </div>
                    <a 
                      href="/dokument/forskningsmedel-ansökan.pdf" 
                      className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Ladda ner
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates & Checklists Section */}
      <section id="mallar" className="py-16 bg-gray-50">
        <div className="container-padded max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Mallar & Checklistor</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Template Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Mall för stadgar - Allmännyttig stiftelse</h3>
                    <p className="text-gray-600 mb-3">Komplett mall för stadgar vid bildande av en allmännyttig stiftelse.</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-3">DOCX • 8 sidor</span>
                      <span>Senast uppdaterad: 2024-02-15</span>
                    </div>
                    <a 
                      href="/dokument/mall-stadgar-allmännyttig.docx" 
                      className="inline-flex items-center px-4 py-2 border border-accent-600 text-accent-600 rounded-md hover:bg-accent-50 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Ladda ner
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Template Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Checklista för ansökningsprocessen</h3>
                    <p className="text-gray-600 mb-3">Komplett checklista för att säkerställa att din ansökan är korrekt och komplett.</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-3">PDF • 2 sidor</span>
                      <span>Senast uppdaterad: 2024-03-20</span>
                    </div>
                    <a 
                      href="/dokument/checklista-ansökan.pdf" 
                      className="inline-flex items-center px-4 py-2 border border-accent-600 text-accent-600 rounded-md hover:bg-accent-50 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Ladda ner
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Documents Section */}
      <section id="juridik" className="py-16">
        <div className="container-padded max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Juridiska Dokument</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Legal Document Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Stiftelselagen (1994:1220)</h3>
                    <p className="text-gray-600 mb-3">Den kompletta stiftelselagen med alla bestämmelser som reglerar stiftelser i Sverige.</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-3">PDF • 32 sidor</span>
                      <span>Senast uppdaterad: 2023-07-01</span>
                    </div>
                    <a 
                      href="/dokument/stiftelselagen.pdf" 
                      className="inline-flex items-center px-4 py-2 border border-secondary-600 text-secondary-600 rounded-md hover:bg-secondary-50 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Ladda ner
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Document Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Stiftelseförordningen (1995:1280)</h3>
                    <p className="text-gray-600 mb-3">Förordning med kompletterande bestämmelser till stiftelselagen.</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-3">PDF • 12 sidor</span>
                      <span>Senast uppdaterad: 2023-07-01</span>
                    </div>
                    <a 
                      href="/dokument/stiftelseförordningen.pdf" 
                      className="inline-flex items-center px-4 py-2 border border-secondary-600 text-secondary-600 rounded-md hover:bg-secondary-50 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Ladda ner
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
