import React from '../../node_modules/react';
import { Search, FileText, Settings, HelpCircle } from 'lucide-react';

export function Features() {
  return (
    <section className="py-20 bg-warm-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Vad kan vi hjälpa dig med?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Search className="w-8 h-8" />}
            title="Sök Stiftelser"
            description="Hitta information om befintliga stiftelser i Sverige"
          />
          <FeatureCard
            icon={<FileText className="w-8 h-8" />}
            title="Starta Stiftelse"
            description="Guide till att starta och registrera en ny stiftelse"
          />
          <FeatureCard
            icon={<Settings className="w-8 h-8" />}
            title="Förvaltning"
            description="Råd om stiftelseförvaltning och administration"
          />
          <FeatureCard
            icon={<HelpCircle className="w-8 h-8" />}
            title="Juridisk Guide"
            description="Svar på juridiska frågor om stiftelser"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-warm-200 hover:border-warm-300">
      <div className="text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-primary-800">{title}</h3>
      <p className="text-warm-700">{description}</p>
    </div>
  );
}