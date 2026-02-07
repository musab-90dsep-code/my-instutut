import React from 'react';
import { Course } from '../types';
import { BookOpen, Globe, Heart, Mic, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="h-6 w-6" />,
  Mic: <Mic className="h-6 w-6" />,
  Heart: <Heart className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />,
};

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { content } = useLanguage();

  return (
    <div className="group relative flex flex-col h-full bg-white/70 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
      
      {/* 1. Image Section */}
      <div className="relative h-64 overflow-hidden rounded-t-[2rem]">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent opacity-80" />
        
        <div className="absolute top-4 right-4">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            {course.level}
          </div>
        </div>
      </div>

      {/* 2. Floating Icon - এবার এটি কাটবে না */}
      <div className="relative h-0 z-20"> 
        <div className="absolute -top-7 left-8">
          <div className="h-14 w-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-emerald-600 border-[3px] border-emerald-50 group-hover:scale-110 transition-all duration-300 group-hover:border-emerald-500 group-hover:text-emerald-500">
             {iconMap[course.iconName] || <BookOpen className="h-6 w-6" />}
          </div>
        </div>
      </div>
      
      {/* 3. Content Section */}
      <div className="flex-1 px-8 pt-10 pb-8 flex flex-col relative z-10">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors leading-tight">
            {course.title}
          </h3>
          
          <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
            {course.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50/80 border border-emerald-100/50 text-emerald-700 text-xs font-bold tracking-wide">
              <Clock className="h-3.5 w-3.5" />
              <span>{course.duration}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-100/50 text-amber-700 text-xs font-bold tracking-wide">
              <Award className="h-3.5 w-3.5" />
              {/* Type error এড়াতে (as any) ব্যবহার করা হয়েছে */}
              <span>{(content.courseCard as any)?.certificate || "সার্টিফিকেট আছে"}</span>
            </div>
          </div>
        </div>

        <Link to={`/enroll?courseId=${course.id}`} className="block mt-auto">
          <button className="relative w-full overflow-hidden rounded-xl bg-gray-50 group-hover:bg-emerald-600 text-gray-900 group-hover:text-white border border-gray-200 group-hover:border-emerald-500 py-3.5 px-4 text-sm font-bold transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-emerald-500/30 flex items-center justify-between">
            <span className="relative z-10 flex items-center gap-2">
                {content.courseCard.enrollBtn}
            </span>
            <div className="relative z-10 bg-black/5 group-hover:bg-white/20 rounded-full p-1.5 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};