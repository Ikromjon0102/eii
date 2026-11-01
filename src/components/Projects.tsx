import React from 'react';
import { Globe, QrCode, Code, Users, CreditCard, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  tags: string[];
}

export default function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "Tunl.uz",
      description: "A high-performance reverse tunneling service that exposes local servers to the global internet via secure HTTP/HTTPS tunnels. Provides persistent subdomains for Telegram bot webhooks without frequent URL updates.",
      link: "https://tunl.uz/",
      icon: <Globe className="w-12 h-12" />,
      tags: ["Python", "FastAPI", "Nginx", "Networking"]
    },
    {
      title: "QarzDaptar",
      description: "Digital debt ledger FinTech solution for retail businesses. Provides transparent two-way debt tracking via Telegram Mini App, replacing manual paper ledgers with digital system.",
      link: "https://qarzdaptar.uz/",
      icon: <CreditCard className="w-12 h-12" />,
      tags: ["Django", "Telegram Mini Apps", "PostgreSQL", "FinTech"]
    },
    {
      title: "School Manage (Smart-School)",
      description: "AI-powered attendance system integrated with Hikvision facial recognition terminals. Tracks student and teacher check-ins/check-outs with real-time notifications to parents.",
      link: "https://schoolmanage.uz/",
      icon: <Users className="w-12 h-12" />,
      tags: ["Django", "Hikvision SDK", "PostgreSQL", "Telegram Bot"]
    },
    {
      title: "MedQueue",
      description: "Clinical queue management system for medical clinics. Allows patients to view doctor schedules, book appointments, and receive automated queue numbers through Telegram bot.",
      link: "https://t.me/MedQueueRobot",
      icon: <Calendar className="w-12 h-12" />,
      tags: ["Django", "Telegram Bot API", "Digital Ocean", "Webhooks"]
    },
    {
      title: "KodYoz",
      description: "A LeetCode-like platform for coding academies to create custom challenges. Students can solve problems in Python, Java, JavaScript, or C++, with automatic test case validation.",
      link: "https://www.kodyoz.uz/",
      icon: <Code className="w-12 h-12" />,
      tags: ["Python", "Django", "Docker", "PostgreSQL"]
    },
    {
      title: "eMenu",
      description: "Digital menu platform for restaurants enabling QR code-based ordering. Customers can browse menus and place orders through an intuitive interface.",
      link: "https://foodme-new.vercel.app/",
      icon: <QrCode className="w-12 h-12" />,
      tags: ["Django REST", "PostgreSQL", "Celery", "Redis"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('projects.title')}</h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="text-gray-900 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Globe size={20} />
                    </a>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}