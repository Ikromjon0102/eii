import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center text-gray-600">
        © {new Date().getFullYear()} {t('hero.name')}. {t('footer.rights')}
      </div>
    </footer>
  );
}