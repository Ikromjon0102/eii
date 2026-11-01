import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'uz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.name': 'Ikromjon Ergashev',
    'hero.title': 'Backend Developer',
    
    // About
    'about.title': 'About Me',
    'about.description': "I'm a passionate Backend Developer with 5 years of experience building robust web applications and APIs. I specialize in Python, Django, Django REST Framework, and PostgreSQL, with expertise in task queuing using Celery. My focus is on creating scalable, secure, and efficient backend solutions.",
    'about.cta': 'Get in touch',
    
    // Skills
    'skills.title': 'What I Do',
    'skills.backend.title': 'Backend Development',
    'skills.backend.desc': 'Building robust APIs and microservices using Django and Django REST Framework.',
    'skills.database.title': 'Database Design',
    'skills.database.desc': 'Designing and optimizing PostgreSQL databases with complex relationships.',
    'skills.security.title': 'API Security',
    'skills.security.desc': 'Implementing authentication, authorization, and secure API endpoints.',
    
    // Experience
    'experience.title': 'Experience',
    
    // Projects
    'projects.title': 'Featured Projects',
    
    // Contact
    'contact.title': "Let's Connect",
    'contact.description': "I'm always open to discussing new backend development opportunities and challenging projects.",
    'contact.email': 'Email Me',
    'contact.call': 'Call Me',
    'contact.telegram': 'Telegram',
    'contact.phone': 'Phone: +998 99 979 73 67',
    'contact.telegram_handle': 'Telegram: @ergashev_ikromjon',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Men haqimda',
    'nav.skills': 'Ko\'nikmalar',
    'nav.experience': 'Tajriba',
    'nav.projects': 'Loyihalar',
    'nav.contact': 'Aloqa',
    
    // Hero
    'hero.name': 'Ikromjon Ergashev',
    'hero.title': 'Backend Dasturchi',
    
    // About
    'about.title': 'Men Haqimda',
    'about.description': "Men 3 yillik tajribaga ega bo'lgan Backend dasturchiman va mustahkam veb-ilovalar va API'lar yaratish bilan shug'ullanaman. Python, Django, Django REST Framework va PostgreSQL bo'yicha mutaxassisman, Celery yordamida vazifalar navbatini boshqarish tajribam bor. Mening asosiy yo'nalishim - kengaytiriladigan, xavfsiz va samarali backend yechimlarini yaratish.",
    'about.cta': 'Bog\'lanish',
    
    // Skills
    'skills.title': 'Nima Qilaman',
    'skills.backend.title': 'Backend Dasturlash',
    'skills.backend.desc': 'Django va Django REST Framework yordamida mustahkam API va mikroservislar yaratish.',
    'skills.database.title': 'Ma\'lumotlar Bazasi Dizayni',
    'skills.database.desc': 'Murakkab bog\'lanishlarga ega PostgreSQL ma\'lumotlar bazalarini loyihalash va optimallashtirish.',
    'skills.security.title': 'API Xavfsizligi',
    'skills.security.desc': 'Autentifikatsiya, avtorizatsiya va xavfsiz API nuqtalarini amalga oshirish.',
    
    // Experience
    'experience.title': 'Tajriba',
    
    // Projects
    'projects.title': 'Asosiy Loyihalar',
    
    // Contact
    'contact.title': 'Bog\'lanish',
    'contact.description': 'Men har doim yangi backend dasturlash imkoniyatlari va qiyin loyihalarni muhokama qilishga tayyorman.',
    'contact.email': 'Email Yozish',
    'contact.call': 'Qo\'ng\'iroq Qilish',
    'contact.telegram': 'Telegram',
    'contact.phone': 'Telefon: +998 99 979 73 67',
    'contact.telegram_handle': 'Telegram: @ergashev_ikromjon',
    
    // Footer
    'footer.rights': 'Barcha huquqlar himoyalangan.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}