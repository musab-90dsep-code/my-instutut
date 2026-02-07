import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-white">
      <SEO pageKey="about" />
      <div className="relative bg-emerald-800 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://picsum.photos/seed/mosque/1920/600" alt="Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl font-bold">{content.aboutPage.title}</h1>
          <p className="mt-4 text-emerald-100 max-w-2xl mx-auto text-lg">
            {content.aboutPage.heroText}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.aboutPage.missionTitle}</h2>
            <div className="prose prose-emerald text-gray-600 space-y-4">
              {content.aboutPage.missionText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
             <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/seed/studying/800/600" alt="Student learning" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};