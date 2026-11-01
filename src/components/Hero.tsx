import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          {t('hero.name')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          {t('hero.title')}
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/ikromjon0102/" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ikromjon/" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://leetcode.com/u/Ikromjon0102/" className="text-gray-600 hover:text-gray-900 transition-colors">
            <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-light-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-light-tal-revivo"/>
            {/* <Code2 size={24} /> */}
          </a>
          <a href="mailto:ikromjon01021995@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}