import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { CourseCard } from '../components/CourseCard';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="flex flex-col">
      <SEO pageKey="home" />
      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/islamicpattern/1920/1080?blur=4" 
            alt="Background Pattern" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 opacity-95"></div>
          {/* Decorative glowing blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="lg:w-3/4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-800/50 border border-emerald-700/50 text-emerald-200 text-sm font-medium mb-6 backdrop-blur-sm">
                Online Quran Academy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              {content.hero.titlePrefix} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-amber-200">{content.hero.titleSuffix}</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100/90 mb-10 max-w-2xl font-light leading-relaxed">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/enroll">
                <Button className="w-full sm:w-auto text-lg px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-900/20 border-0 ring-offset-2 ring-offset-emerald-900">{content.hero.ctaPrimary}</Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="w-full sm:w-auto border-emerald-500/30 bg-emerald-900/30 text-emerald-100 hover:bg-emerald-800 hover:text-white text-lg px-8 py-4 backdrop-blur-sm">
                  {content.hero.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">{content.features.title}</h2>
            <p className="text-lg text-gray-500">{content.features.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.features.list.map((feature, idx) => (
              <div key={idx} className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <CheckCircle2 className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="py-24 bg-slate-50 relative">
        {/* Subtle patterned background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{content.coursesPage.title}</h2>
              <p className="mt-2 text-gray-500">{content.coursesPage.subtitle}</p>
            </div>
            <Link to="/courses" className="hidden sm:flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors bg-emerald-50 px-4 py-2 rounded-full text-sm">
              {content.hero.ctaSecondary} <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.courses.slice(0, 3).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/courses">
               <Button variant="secondary" fullWidth>{content.hero.ctaSecondary}</Button>
            </Link>
          </div>
        </div>
      </section>

       {/* Testimonials */}
       <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
             {content === useLanguage().content /* Just checking type safely */ && (
               useLanguage().language === 'bn' ? 'শিক্ষার্থীদের মতামত' : 'Student Testimonials'
             )}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.map(t => (
              <div key={t.id} className="bg-gray-50 p-8 rounded-2xl relative transition-transform hover:-translate-y-1">
                 <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                 </div>
                 <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">"{t.content}"</p>
                 <div className="flex items-center mt-auto border-t border-gray-200 pt-6">
                   <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover mr-4 ring-2 ring-emerald-100" />
                   <div>
                     <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                     <p className="text-xs text-emerald-600 font-medium">{t.role}</p>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50"></div>
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-950 rounded-full blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{content.enrollPage.subtitle}</h2>
          <p className="text-emerald-100 mb-10 text-lg md:text-xl font-light">
             {useLanguage().language === 'bn' ? 'আজই আপনার ফ্রি ট্রায়াল ক্লাস বুক করুন।' : 'Book your free trial class today.'}
          </p>
          <Link to="/enroll">
            <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:from-amber-500 hover:to-amber-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 hover:shadow-amber-500/20">
              {content.nav.enroll}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};