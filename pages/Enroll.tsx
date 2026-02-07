import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { EnrollmentForm } from '../types';
import { MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../constants';
import { SEO } from '../components/SEO';

export const Enroll: React.FC = () => {
  const { content } = useLanguage();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preSelectedCourse = searchParams.get('courseId') || '';

  const [formData, setFormData] = useState<EnrollmentForm>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: 'Male',
    courseId: preSelectedCourse,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const saveToLocalStorage = (data: EnrollmentForm) => {
    try {
      const existing = localStorage.getItem('enrollments');
      const enrollments = existing ? JSON.parse(existing) : [];
      const newEnrollment = {
        ...data,
        id: Date.now().toString(),
        date: new Date().toISOString(),
        courseName: content.courses.find(c => c.id === data.courseId)?.title || 'Unknown Course'
      };
      localStorage.setItem('enrollments', JSON.stringify([newEnrollment, ...enrollments]));
    } catch (error) {
      console.error("Could not save to local storage", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    saveToLocalStorage(formData);
    setTimeout(() => {
        setSubmitted(true);
        window.scrollTo(0,0);
    }, 500);
  };

  const getMessageBody = () => {
    const courseName = content.courses.find(c => c.id === formData.courseId)?.title || 'General Inquiry';
    return `Assalamu Alaykum,
    
I would like to enroll in the *${courseName}* course.

*Student Details:*
Name: ${formData.fullName}
Age: ${formData.age}
Gender: ${formData.gender}
Email: ${formData.email}
Phone: ${formData.phone}

*Message:*
${formData.message}

Please let me know the next steps.`;
  };

  const handleWhatsApp = () => {
    const phone = CONTACT_INFO.phoneWhatsapp;
    const text = encodeURIComponent(getMessageBody());
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const handleEmail = () => {
    const email = CONTACT_INFO.email;
    const subject = encodeURIComponent(`Enrollment Application: ${formData.fullName}`);
    const body = encodeURIComponent(getMessageBody());
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4 py-12">
        <SEO pageKey="enroll" title="Application Submitted | Talimatin Institute" />
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{content.enrollPage.success.title}</h2>
          <p className="text-gray-600 mb-6">
            {content.enrollPage.success.message.replace('{name}', formData.fullName)}
          </p>
          
          <div className="space-y-3 mb-6">
            <Button onClick={handleWhatsApp} fullWidth className="bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" />
              {content.enrollPage.success.whatsapp}
            </Button>
            
            <Button onClick={handleEmail} variant="secondary" fullWidth className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5" />
              {content.enrollPage.success.email}
            </Button>
          </div>

          <Button onClick={() => setSubmitted(false)} variant="outline" className="text-sm border-gray-300 text-gray-500 hover:text-gray-700">
            {content.enrollPage.success.again}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <SEO pageKey="enroll" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-emerald-700 px-6 py-8 sm:px-10">
            <h1 className="text-3xl font-bold text-white">{content.enrollPage.title}</h1>
            <p className="text-emerald-100 mt-2">{content.enrollPage.subtitle}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-10 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">{content.enrollPage.form.fullName}</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border p-3 bg-white text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">{content.enrollPage.form.age}</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border p-3 bg-white text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{content.enrollPage.form.email}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border p-3 bg-white text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{content.enrollPage.form.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border p-3 bg-white text-gray-900"
                />
              </div>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">{content.enrollPage.form.gender}</label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border p-3 bg-white text-gray-900"
                >
                  <option value="Male">{content.enrollPage.form.male}</option>
                  <option value="Female">{content.enrollPage.form.female}</option>
                </select>
              </div>

              <div>
                <label htmlFor="courseId" className="block text-sm font-medium text-gray-700">{content.enrollPage.form.course}</label>
                <select
                  name="courseId"
                  id="courseId"
                  required
                  value={formData.courseId}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border p-3 bg-white text-gray-900"
                >
                  <option value="">{content.enrollPage.form.courseSelect}</option>
                  {content.courses.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">{content.enrollPage.form.message}</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border p-3 bg-white text-gray-900"
                placeholder={content.enrollPage.form.messagePlaceholder}
              />
            </div>

            <div className="pt-4">
              <Button type="submit" fullWidth>{content.enrollPage.form.submit}</Button>
              <p className="mt-4 text-xs text-gray-500 text-center">
                {content.enrollPage.form.agreement}
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};