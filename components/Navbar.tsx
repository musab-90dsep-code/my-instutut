import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpenCheck, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { content, toggleLanguage, language } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.nav.home, path: '/' },
    { name: content.nav.courses, path: '/courses' },
    { name: content.nav.about, path: '/about' },
    { name: content.nav.contact, path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <BookOpenCheck className="h-8 w-8 text-emerald-600" />
              <span className="font-bold text-xl md:text-2xl text-emerald-800 tracking-wide">{content.appName}</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-300'
                } px-1 py-2 text-base font-medium transition-all duration-200`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-emerald-700 bg-emerald-50/80 px-3 py-1 rounded-full text-sm font-semibold hover:bg-emerald-100 transition-colors border border-emerald-200"
            >
              <Globe className="h-4 w-4" />
              {language === 'bn' ? 'EN' : 'BN'}
            </button>
            <Link to="/enroll">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md text-base font-medium transition-colors shadow-sm opacity-95 hover:opacity-100">
                {content.nav.enroll}
              </button>
            </Link>
          </div>

          <div className="flex items-center md:hidden gap-4">
             <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-emerald-700 bg-emerald-50/80 px-3 py-1 rounded-full text-sm font-semibold hover:bg-emerald-100 transition-colors border border-emerald-200"
            >
              {language === 'bn' ? 'EN' : 'BN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">{content.nav.menuOpen}</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/enroll"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-emerald-600 text-white px-3 py-3 rounded-md text-base font-medium hover:bg-emerald-700"
              >
                {content.nav.enroll}
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};