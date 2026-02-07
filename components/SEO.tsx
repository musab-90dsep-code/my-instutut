import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  pageKey?: 'home' | 'courses' | 'enroll' | 'about' | 'contact';
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ pageKey, title, description, keywords }) => {
  const { content } = useLanguage();
  
  // Use explicit props if provided, otherwise fallback to content.seo[pageKey], otherwise content.seo.default
  const seoData = pageKey && content.seo && (content.seo as any)[pageKey] 
    ? (content.seo as any)[pageKey] 
    : content.seo.default;

  const finalTitle = title || seoData.title;
  const finalDesc = description || seoData.description;
  const finalKeywords = keywords || seoData.keywords;

  useEffect(() => {
    document.title = finalTitle;

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (finalDesc) setMeta('description', finalDesc);
    if (finalKeywords) setMeta('keywords', finalKeywords);

    // Basic OG tags
    const setOg = (property: string, content: string) => {
       let element = document.querySelector(`meta[property="${property}"]`);
       if (!element) {
         element = document.createElement('meta');
         element.setAttribute('property', property);
         document.head.appendChild(element);
       }
       element.setAttribute('content', content);
    }
    
    setOg('og:title', finalTitle);
    if (finalDesc) setOg('og:description', finalDesc);
    setOg('og:type', 'website');

  }, [finalTitle, finalDesc, finalKeywords]);

  return null;
};