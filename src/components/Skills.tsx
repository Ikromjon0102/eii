import React from 'react';
import { Database, Server, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('skills.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Database className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('skills.backend.title')}</h3>
            <p className="text-gray-600">
              {t('skills.backend.desc')}
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Server className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('skills.database.title')}</h3>
            <p className="text-gray-600">
              {t('skills.database.desc')}
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Shield className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('skills.security.title')}</h3>
            <p className="text-gray-600">
              {t('skills.security.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}