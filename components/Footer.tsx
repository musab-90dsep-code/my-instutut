import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, BookOpenCheck, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer className="bg-emerald-900 text-emerald-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BookOpenCheck className="h-8 w-8 text-emerald-300" />
              <span className="font-bold text-2xl text-white">{content.appName}</span>
            </div>
            <p className="text-sm text-emerald-200">
              {content.footer.desc}
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-bold text-emerald-300 tracking-wider uppercase mb-4">{content.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-base text-emerald-100 hover:text-white">{content.nav.home}</Link></li>
              <li><Link to="/courses" className="text-base text-emerald-100 hover:text-white">{content.nav.courses}</Link></li>
              <li><Link to="/about" className="text-base text-emerald-100 hover:text-white">{content.nav.about}</Link></li>
              <li><Link to="/enroll" className="text-base text-emerald-100 hover:text-white">{content.nav.enroll}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-emerald-300 tracking-wider uppercase mb-4">{content.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-emerald-100">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-emerald-100">{CONTACT_INFO.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-emerald-100">Online / Worldwide</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-emerald-300 tracking-wider uppercase mb-4">{content.footer.follow}</h3>
            <div className="flex space-x-6">
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              {/* Add other social icons if needed */}
            </div>
            <div className="mt-6">
                <p className="text-xs text-emerald-400">
                    &copy; {new Date().getFullYear()} {content.appName}. {content.footer.rights}
                </p>
                <div className="mt-2">
                  <Link to="/admin" className="text-xs text-emerald-700 hover:text-emerald-500 flex items-center gap-1">
                    <Lock className="h-3 w-3" /> {content.nav.admin}
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};