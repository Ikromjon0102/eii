import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Languages size={18} className="text-gray-600" />
      <button
        onClick={() => setLanguage(language === 'en' ? 'uz' : 'en')}
        className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
      >
        <span className={language === 'en' ? 'text-gray-900' : 'text-gray-500'}>EN</span>
        <span className="text-gray-400">|</span>
        <span className={language === 'uz' ? 'text-gray-900' : 'text-gray-500'}>UZ</span>
      </button>
    </div>
  );
}