import React from 'react';
import { Mail, Phone, Facebook, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../constants';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  const { content } = useLanguage();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <SEO pageKey="contact" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">{content.contactPage.title}</h1>
          <p className="mt-4 text-gray-600">{content.contactPage.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{content.contactPage.infoTitle}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{content.contactPage.emailLabel}</h3>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{content.contactPage.phoneLabel}</h3>
                  <p className="text-gray-600">{CONTACT_INFO.phoneDisplay}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Facebook className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{content.contactPage.socialLabel}</h3>
                  <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">{content.contactPage.socialLink}</a>
                </div>
              </div>

               <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{content.contactPage.officeLabel}</h3>
                  <p className="text-gray-600">{content.contactPage.officeText1}</p>
                  <p className="text-gray-600">{content.contactPage.officeText2}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Message Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{content.contactPage.formTitle}</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">{content.contactPage.formName}</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md border p-3 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{content.contactPage.formEmail}</label>
                <input type="email" className="mt-1 block w-full border-gray-300 rounded-md border p-3 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{content.contactPage.formMessage}</label>
                <textarea rows={4} className="mt-1 block w-full border-gray-300 rounded-md border p-3 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900"></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-600 text-white py-3 rounded-md font-bold hover:bg-emerald-700 transition-colors">
                {content.contactPage.formButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};