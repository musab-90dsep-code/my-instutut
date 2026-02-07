import React from 'react';
import { CourseCard } from '../components/CourseCard';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';

export const Courses: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <SEO pageKey="courses" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.coursesPage.title}</h1>
          <p className="text-lg text-gray-600">
            {content.coursesPage.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.coursesPage.ctaTitle}</h3>
            <p className="text-gray-600">{content.coursesPage.ctaDesc}</p>
          </div>
          <a href="#/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200">
            {content.coursesPage.ctaButton}
          </a>
        </div>
      </div>
    </div>
  );
};