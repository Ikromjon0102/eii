import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('about.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img 
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800"
            alt="Clean workspace with laptop showing code"
            className="rounded-lg shadow-lg object-cover aspect-4/3"
          />
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {t('about.cta')}
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}