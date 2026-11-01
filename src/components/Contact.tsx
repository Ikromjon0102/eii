import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
        <p className="text-gray-600 mb-8">
          {t('contact.description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:ikromjon01021995@gmail.com"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail size={18} />
            {t('contact.email')}
          </a>
          <a 
            href="tel:+998999797367"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center"
          >
            <Phone size={18} />
            {t('contact.call')}
          </a>
          <a 
            href="https://t.me/ergashev_ikromjon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center"
          >
            <Send size={18} />
            {t('contact.telegram')}
          </a>
        </div>
        <div className="mt-8 space-y-2 text-gray-600">
          <p>{t('contact.phone')}</p>
          <p>{t('contact.telegram_handle')}</p>
        </div>
      </div>
    </section>
  );
}