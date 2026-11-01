import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  skills: string[];
  type: string;
}

export default function Experience() {
  const { t } = useLanguage();

  const experiences: Experience[] = [
    {
      title: "Python Developer, Tutor",
      company: "IT School Uchkurgan",
      location: "Uchqo'rg'on, Namangan Region, Uzbekistan",
      period: "Jan 2021 - Present",
      type: "Full-time",
      skills: [
        "Problem Solving",
        "Python (Programming Language)",
        "Mathematics",
        "Microsoft Excel",
        "Computer Engineering",
        "Adobe Photoshop"
      ]
    },
    {
      title: "Specialist in information and communication technologies",
      company: "UZTEX",
      location: "Uchqo'rg'on, Namangan Region, Uzbekistan",
      period: "Mar 2020 - Jan 2021",
      type: "Full-time",
      skills: [
        "Problem Solving",
        "Computer Repair",
        "Computer Engineering",
        "Adobe Photoshop"
      ]
    },
    {
      title: "Specialist",
      company: "State Committee of the Republic of Uzbekistan on Statistics",
      location: "Uchqo'rg'on, Namangan Region, Uzbekistan",
      period: "May 2018 - Sep 2019",
      type: "Full-time",
      skills: ["Problem Solving"]
    },
    {
      title: "Graphic Designer",
      company: "Real Print Namangan",
      location: "Namangan Region, Uzbekistan",
      period: "Sep 2017 - Jan 2018",
      type: "Full-time",
      skills: [
        "Problem Solving",
        "Computer Engineering",
        "Adobe Photoshop"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t('experience.title')}</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-gray-600 mb-2">
                    {exp.company} · {exp.type}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {skill}
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