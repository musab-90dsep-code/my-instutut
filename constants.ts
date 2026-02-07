import { Course, Testimonial } from './types';

export const APP_NAME_EN = "Talimatin Institute";
export const APP_NAME_BN = "তালিমাতিন ইন্সটিটিউট";

export const CONTACT_INFO = {
  phoneDisplay: "01670555719",
  phoneWhatsapp: "8801670555719",
  facebook: "https://www.facebook.com/share/1TKhzGcU1p/",
  email: "musabbinsharif321@gmail.com"
};

export const CONTENT = {
  en: {
    appName: APP_NAME_EN,
    seo: {
      default: {
        title: "Talimatin Institute - Online Quran Academy",
        description: "An online Quran and Arabic learning platform offering courses in Tajweed, Hifz, and Islamic studies.",
        keywords: "Quran, Tajweed, Online Quran Class, Hifz, Arabic, Islam"
      },
      home: {
        title: "Home | Talimatin Institute - Online Quran Academy",
        description: "Join Talimatin Institute for online Quran education. Learn Tajweed, Hifz, and Islamic basics from qualified teachers.",
        keywords: "Quran, Tajweed, Hifz, Online Quran, Islam, Learn Quran from Home"
      },
      courses: {
        title: "Courses | Talimatin Institute",
        description: "Explore our curriculum: Noorani Qaida, Quran Recitation (Nazira), and Hifzul Quran programs for all ages.",
        keywords: "Quran Courses, Hifz Program, Nazira, Noorani Qaida, Islamic Studies"
      },
      enroll: {
        title: "Enroll Now | Talimatin Institute",
        description: "Start your journey of sacred knowledge. Register for online Quran classes today.",
        keywords: "Enroll Quran Class, Quran Admission, Register for Hifz, Learn Quran"
      },
      about: {
        title: "About Us | Talimatin Institute",
        description: "Learn about our mission to illuminate hearts through Quran and Sunnah education since 2020.",
        keywords: "About Talimatin, Islamic Mission, Quran Education History, Online Madrasa"
      },
      contact: {
        title: "Contact Us | Talimatin Institute",
        description: "Get in touch with us via WhatsApp, Email or Facebook. We are here to answer your queries.",
        keywords: "Contact Quran Academy, Quran Teacher Phone Number, Islamic Institute Contact"
      }
    },
    nav: {
      home: "Home",
      courses: "Courses",
      about: "About Us",
      contact: "Contact",
      enroll: "Enroll Now",
      admin: "Admin",
      menuOpen: "Open menu"
    },
    hero: {
      titlePrefix: "Learn from Home",
      titleSuffix: "Quran & Islam",
      subtitle: "Join Talimatin Institute for online Quran education. Learn Tajweed, Hifz, and Islamic basics from qualified teachers.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "View Courses"
    },
    features: {
      title: "Why Choose Talimatin?",
      subtitle: "We combine modern technology with traditional teaching methods.",
      list: [
        { title: 'Experienced Teachers', desc: 'Guided by qualified Huffaz and Scholars skilled in teaching.' },
        { title: 'Flexible Timing', desc: 'Classes at your convenience. 24/7 availability.' },
        { title: 'Interactive Learning', desc: 'One-to-one sessions ensuring personal attention and fast progress.' }
      ]
    },
    coursesPage: {
      title: "Our Curriculum",
      subtitle: "We offer Islamic education programs suitable for all levels, for children and adults.",
      ctaTitle: "Which course is right for you?",
      ctaDesc: "Our academic advisors can assess your level and provide the right recommendation.",
      ctaButton: "Talk to Advisor"
    },
    enrollPage: {
      title: "Enrollment",
      subtitle: "Begin your journey of sacred knowledge today.",
      form: {
        fullName: "Full Name",
        age: "Age",
        gender: "Gender",
        email: "Email Address",
        phone: "Phone Number (WhatsApp)",
        course: "Interested Course",
        courseSelect: "Select a course...",
        message: "Additional Message / Questions",
        messagePlaceholder: "Tell us about your previous experience or specific requirements.",
        submit: "Submit Application",
        agreement: "By submitting this form, you agree to be contacted by Talimatin Institute administration regarding your course application.",
        male: "Male",
        female: "Female"
      },
      success: {
        title: "Application Saved!",
        message: "JazakAllah Khair, {name}. To ensure we receive your application immediately, please send it to us via WhatsApp or Email below.",
        whatsapp: "Send via WhatsApp",
        email: "Send via Email",
        again: "Submit Another Application"
      }
    },
    aboutPage: {
      title: "About Us",
      heroText: "Illuminating hearts and souls through Quran and Sunnah education since 2020.",
      missionTitle: "Our Mission",
      missionText: [
        "At Talimatin Institute, we believe Quranic education should be accessible to everyone, everywhere. Our goal is to provide high-quality and authentic Islamic education using modern technology.",
        "We connect students with qualified teachers who not only teach the correct rules of Tajweed but also instill a love for the Book of Allah.",
        "Whether you are a beginner learning Arabic alphabets or an advanced student wishing to memorize the entire Quran, we have the right curriculum for you."
      ]
    },
    contactPage: {
      title: "Contact Us",
      subtitle: "Have questions? We are ready to help you start your learning journey.",
      infoTitle: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone / WhatsApp",
      socialLabel: "Social Media",
      socialLink: "Visit our Facebook Page",
      officeLabel: "Office Hours",
      officeText1: "Mon - Fri: 24 Hours",
      officeText2: "Sat - Sun: 10 AM - 10 PM",
      formTitle: "Send a Message",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formButton: "Send Message"
    },
    footer: {
      desc: "Dedicated to spreading the light of Quran and Sunnah to students worldwide through qualified teachers and modern technology.",
      quickLinks: "Quick Links",
      contact: "Contact",
      follow: "Follow Us",
      rights: "All rights reserved."
    },
    courses: [
      {
        id: 'c1',
        title: 'Noorani Qaida',
        description: 'The foundation of reading Quran. Learn Arabic alphabet, Makhraj, and basic Tajweed rules to start reading Quran correctly.',
        level: 'Beginner',
        duration: '3-6 Months',
        iconName: 'BookOpen',
        image: 'image1.jpg', // Open Quran, clear text
      },
      {
        id: 'c2',
        title: 'Quran Recitation (Nazira)',
        description: 'For those who completed Qaida. Focuses on fluency, correct Tajweed, and beautiful recitation of the Holy Quran.',
        level: 'Intermediate',
        duration: '6-12 Months',
        iconName: 'Mic',
        image: 'image2.jpg', // Quran on Rehal
      },
      {
        id: 'c3',
        title: 'Hifzul Quran',
        description: 'A structured program to memorize the entire Quran under the supervision of experienced teachers with regular revision.',
        level: 'Advanced',
        duration: '2-3 Years',
        iconName: 'Heart',
        image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800&auto=format&fit=crop', // Person reading in mosque
      },
    ] as Course[],
    testimonials: [
      {
        id: 't1',
        name: 'Abdullah Bhai',
        role: 'Parent',
        content: 'Talimatin Institute improved my son\'s reading beautifully. Teachers are very patient and skilled in Tajweed.',
        avatar: 'https://picsum.photos/seed/user1/100/100',
      },
      {
        id: 't2',
        name: 'Sister Fatima',
        role: 'Student',
        content: 'I never thought learning Quran online could be this easy. The curriculum is well structured helping me learn authentically.',
        avatar: 'https://picsum.photos/seed/user2/100/100',
      },
      {
        id: 't3',
        name: 'Yusuf Ali',
        role: 'Hifz Student',
        content: 'The Hifz program is challenging but rewarding. My Ustad encourages me daily to meet my goals.',
        avatar: 'https://picsum.photos/seed/user3/100/100',
      },
    ] as Testimonial[],
    faq: [
      {
        question: "How are classes conducted?",
        answer: "All classes are conducted via Zoom or Google Meet one-to-one with a teacher."
      },
      {
        question: "Is there a trial class?",
        answer: "Yes, we offer a 3-day free trial so you can evaluate our teaching method before enrolling."
      },
      {
        question: "Do you have female teachers?",
        answer: "Yes, we have experienced and qualified female teachers (Hafezas) for sisters and children."
      }
    ],
    admin: {
      title: "Admin Dashboard",
      subtitle: "Managing student applications.",
      clear: "Clear Data",
      logout: "Logout",
      table: {
        date: "Date",
        name: "Student Name",
        course: "Course",
        contact: "Contact",
        details: "Details"
      },
      empty: "No enrollments found yet.",
      loginTitle: "Admin Access",
      loginSub: "Enter your access code to view enrollments.",
      loginBtn: "Login",
      accessError: "Incorrect Access Code",
      deleteConfirm: "Are you sure you want to delete all data?"
    },
    chat: {
      initial: "As-salamu alaykum! I am Talib, your virtual advisor. How can I help you regarding courses or enrollment?",
      placeholder: "Ask about courses or fees...",
      typing: "Talib is typing...",
      error: "Sorry, something went wrong. Please try again.",
      powered: "Powered by Gemini AI",
      trigger: "Ask a Question",
      header: "Talib AI Advisor",
      status: "Online | Instant Reply"
    },
    courseCard: {
      duration: "Certificate Available", // Reusing icon layout, mapped roughly
      enrollBtn: "Enroll in Course"
    }
  },
  bn: {
    appName: APP_NAME_BN,
    seo: {
      default: {
        title: "তালিমাতিন ইন্সটিটিউট - অনলাইন কুরআন একাডেমি",
        description: "তাজভিদ, হিফজ এবং ইসলামিক শিক্ষার জন্য একটি অনলাইন প্ল্যাটফর্ম।",
        keywords: "কুরআন, তাজভিদ, অনলাইন কুরআন ক্লাস, হিফজ, আরবি, ইসলাম"
      },
      home: {
        title: "হোম | তালিমাতিন ইন্সটিটিউট - অনলাইন কুরআন একাডেমি",
        description: "তালিমাতিন ইন্সটিটিউটের সাথে অনলাইনে কুরআন শিক্ষা গ্রহণ করুন। অভিজ্ঞ উস্তাদদের কাছ থেকে তাজভিদ ও হিফজ শিখুন।",
        keywords: "কুরআন শিক্ষা, তাজভিদ, হিফজ, অনলাইন কুরআন, ইসলাম, ঘরে বসে কুরআন শিখুন"
      },
      courses: {
        title: "কোর্সসমূহ | তালিমাতিন ইন্সটিটিউট",
        description: "আমাদের পাঠ্যক্রম দেখুন: নূরানী কায়দা, কুরআন তিলাওয়াত (নাজেরা) এবং হিফজুল কুরআন প্রোগ্রাম।",
        keywords: "কুরআন কোর্স, হিফজ প্রোগ্রাম, নাজেরা, নূরানী কায়দা, ইসলামিক শিক্ষা"
      },
      enroll: {
        title: "ভর্তি হোন | তালিমাতিন ইন্সটিটিউট",
        description: "আজই আপনার পবিত্র জ্ঞান অর্জনের যাত্রা শুরু করুন। অনলাইন কুরআন ক্লাসের জন্য নিবন্ধন করুন।",
        keywords: "কুরআন ক্লাসে ভর্তি, কুরআন এডমিশন, হিফজ ভর্তি, কুরআন শিখুন"
      },
      about: {
        title: "আমাদের সম্পর্কে | তালিমাতিন ইন্সটিটিউট",
        description: "২০২০ সাল থেকে কুরআন ও সুন্নাহর শিক্ষার মাধ্যমে মানুষের মন আলোকিত করার আমাদের লক্ষ্য সম্পর্কে জানুন।",
        keywords: "তালিমাতিন সম্পর্কে, ইসলামিক মিশন, কুরআন শিক্ষার ইতিহাস, অনলাইন মাদ্রাসা"
      },
      contact: {
        title: "যোগাযোগ করুন | তালিমাতিন ইন্সটিটিউট",
        description: "হোয়াটসঅ্যাপ, ইমেইল বা ফেসবুকের মাধ্যমে আমাদের সাথে যোগাযোগ করুন।",
        keywords: "কুরআন একাডেমি যোগাযোগ, কুরআন শিক্ষকের ফোন নম্বর, ইসলামিক ইন্সটিটিউট"
      }
    },
    nav: {
      home: "হোম",
      courses: "কোর্সসমূহ",
      about: "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
      enroll: "ভর্তি হোন",
      admin: "অ্যাডমিন",
      menuOpen: "মেনু খুলুন"
    },
    hero: {
      titlePrefix: "ঘরে বসেই শিখুন",
      titleSuffix: "সহীহ কুরআন ও ইসলাম",
      subtitle: "তালিমাতিন ইন্সটিটিউটের সাথে অনলাইনে কুরআন শিক্ষা গ্রহণ করুন। অভিজ্ঞ উস্তাদদের কাছ থেকে তাজভিদ, হিফজ এবং ইসলামের বুনিয়াদি জ্ঞান অর্জন করুন।",
      ctaPrimary: "ফ্রি ট্রায়াল শুরু করুন",
      ctaSecondary: "কোর্সগুলো দেখুন"
    },
    features: {
      title: "কেন তালিমাতিন বেছে নিবেন?",
      subtitle: "আমরা আধুনিক প্রযুক্তির সাথে ঐতিহ্যবাহী শিক্ষ পদ্ধতির সমন্বয় ঘটিয়েছি।",
      list: [
        { title: 'অভিজ্ঞ উস্তাদ', desc: 'যোগ্য হাফেজ ও আলেমগণ দ্বারা পরিচালিত, যারা শিক্ষাদানে দক্ষ।' },
        { title: 'সুবিধাজনক সময়', desc: 'আপনার সুবিধামতো সময়ে ক্লাস করার সুযোগ। ২৪/৭ ক্লাস ব্যবস্থা।' },
        { title: 'ইন্টারঅ্যাকটিভ লার্নিং', desc: 'ওয়ান-টু-ওয়ান সেশন, যা ব্যক্তিগত মনোযোগ এবং দ্রুত উন্নতি নিশ্চিত করে।' }
      ]
    },
    coursesPage: {
      title: "আমাদের পাঠ্যক্রম",
      subtitle: "আমরা শিশু এবং প্রাপ্তবয়স্কদের জন্য সকল স্তরের উপযোগী ইসলামিক শিক্ষা কার্যক্রম অফার করি।",
      ctaTitle: "কোন কোর্সটি আপনার জন্য উপযুক্ত?",
      ctaDesc: "আমাদের একাডেমিক অ্যাডভাইজাররা আপনার স্তর যাচাই করে সঠিক পরামর্শ দিতে পারেন।",
      ctaButton: "অ্যাডভাইজারের সাথে কথা বলুন"
    },
    enrollPage: {
      title: "কোর্সে ভর্তি",
      subtitle: "আজই আপনার পবিত্র জ্ঞান অর্জনের যাত্রা শুরু করুন।",
      form: {
        fullName: "পূর্ণ নাম",
        age: "বয়স",
        gender: "লিঙ্গ",
        email: "ইমেইল ঠিকানা",
        phone: "ফোন নম্বর (হোয়াটসঅ্যাপ)",
        course: "আগ্রহী কোর্স",
        courseSelect: "কোর্স নির্বাচন করুন...",
        message: "অতিরিক্ত বার্তা / প্রশ্ন",
        messagePlaceholder: "আপনার পূর্বের অভিজ্ঞতা বা বিশেষ কোনো প্রয়োজনীয়তা থাকলে লিখুন।",
        submit: "আবেদন জমা দিন",
        agreement: "এই ফর্মটি জমা দেওয়ার মাধ্যমে আপনি সম্মত হচ্ছেন যে তালিমাতিন ইন্সটিটিউট আপনার আবেদনের বিষয়ে আপনার সাথে যোগাযোগ করতে পারে।",
        male: "পুরুষ",
        female: "মহিলা"
      },
      success: {
        title: "আবেদন সংরক্ষিত হয়েছে!",
        message: "জাজাকাল্লাহ খায়ের, {name}। আমাদের কাছে দ্রুত আবেদনটি পৌঁছাতে অনুগ্রহ করে নিচের হোয়াটসঅ্যাপ বা ইমেইল বাটনে ক্লিক করে পাঠিয়ে দিন।",
        whatsapp: "হোয়াটসঅ্যাপে পাঠান",
        email: "ইমেইলে পাঠান",
        again: "নতুন আবেদন করুন"
      }
    },
    aboutPage: {
      title: "আমাদের সম্পর্কে",
      heroText: "২০২০ সাল থেকে কুরআন ও সুন্নাহর শিক্ষার মাধ্যমে মানুষের মন ও আত্মাকে আলোকিত করে আসছি।",
      missionTitle: "আমাদের লক্ষ্য",
      missionText: [
        "তালিমাতিন ইন্সটিটিউটে আমরা বিশ্বাস করি যে কুরআন শিক্ষা সবার জন্য সহজলভ্য হওয়া উচিত, তা যেখানেই হোক না কেন। আমাদের লক্ষ্য হলো আধুনিক প্রযুক্তি ব্যবহার করে উচ্চমানের এবং বিশুদ্ধ ইসলামিক শিক্ষা প্রদান করা।",
        "আমরা শিক্ষার্থীদের এমন যোগ্য শিক্ষকদের সাথে সংযুক্ত করি যারা শুধু তাজভিদের সঠিক নিয়মই শেখান না, বরং আল্লাহর কিতাবের প্রতি ভালোবাসা সৃষ্টি করেন।",
        "আপনি যদি আরবি বর্ণমালা শেখার জন্য একজন নতুন শিক্ষার্থী হন বা সম্পূর্ণ কুরআন মুখস্থ করতে ইচ্ছুক একজন অগ্রসর শিক্ষার্থী হন, আমাদের কাছে আপনার জন্য সঠিক পাঠ্যক্রম রয়েছে।"
      ]
    },
    contactPage: {
      title: "যোগাযোগ করুন",
      subtitle: "কোনো প্রশ্ন আছে? আপনার শেখার যাত্রা শুরু করতে আমরা আপনাকে সাহায্য করতে প্রস্তুত।",
      infoTitle: "যোগাযোগের তথ্য",
      emailLabel: "ইমেইল",
      phoneLabel: "ফোন / হোয়াটসঅ্যাপ",
      socialLabel: "সোশ্যাল মিডিয়া",
      socialLink: "আমাদের ফেসবুক পেজ ভিজিট করুন",
      officeLabel: "অফিস সময়",
      officeText1: "সোম - শুক্র: ২৪ ঘন্টা",
      officeText2: "শনি - রবি: সকাল ১০টা - রাত ১০টা",
      formTitle: "বার্তা পাঠান",
      formName: "নাম",
      formEmail: "ইমেইল",
      formMessage: "বার্তা",
      formButton: "বার্তা পাঠান"
    },
    footer: {
      desc: "আধুনিক প্রযুক্তির মাধ্যমে এবং যোগ্য শিক্ষকদের তত্ত্বাবধানে সারা বিশ্বের শিক্ষার্থীদের মাঝে কুরআন ও সুন্নাহর আলো ছড়িয়ে দিতে আমরা বদ্ধপরিকর।",
      quickLinks: "দ্রুত লিঙ্ক",
      contact: "যোগাযোগ",
      follow: "অনুসরণ করুন",
      rights: "সর্বস্বত্ব সংরক্ষিত।"
    },
    courses: [
      {
        id: 'c1',
        title: 'নূরানী কায়দা',
        description: 'কুরআন পড়ার ভিত্তি। আরবি বর্ণমালা, মাখরাজ এবং তাজভিদের প্রাথমিক নিয়মগুলো শিখে সহীহভাবে কুরআন পড়া শুরু করার জন্য।',
        level: 'Beginner',
        duration: '৩-৬ মাস',
        iconName: 'BookOpen',
        image: 'image1.jpg', // Open Quran, clear text
      },
      {
        id: 'c2',
        title: 'কুরআন তিলাওয়াত (নাজেরা)',
        description: 'যারা কায়দা শেষ করেছেন তাদের জন্য। সাবলীলতা, সঠিক তাজভিদ এবং সুন্দর সুরে পবিত্র কুরআন তিলাওয়াতের উপর গুরুত্ব দেওয়া হয়।',
        level: 'Intermediate',
        duration: '৬-১২ মাস',
        iconName: 'Mic',
        image: 'image2.jpg', // Quran on Rehal
      },
      {
        id: 'c3',
        title: 'হিফজুল কুরআন',
        description: 'অভিজ্ঞ শিক্ষকের তত্ত্বাবধানে এবং নিয়মিত রিভিশনের মাধ্যমে সম্পূর্ণ কুরআন মুখস্থ করার একটি সুশৃঙ্খল প্রোগ্রাম।',
        level: 'Advanced',
        duration: '২-৩ বছর',
        iconName: 'Heart',
        image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800&auto=format&fit=crop', // Person reading in mosque
      },
    ] as Course[],
    testimonials: [
      {
        id: 't1',
        name: 'আব্দুল্লাহ ভাই',
        role: 'অভিভাবক',
        content: 'তালিমাতিন ইন্সটিটিউট আমার ছেলের পড়া অনেক সুন্দর করেছে। শিক্ষকরা অনেক ধৈর্যশীল এবং তাজভিদের ব্যাপারে খুব দক্ষ।',
        avatar: 'https://picsum.photos/seed/user1/100/100',
      },
      {
        id: 't2',
        name: 'ফাতিমা বোন',
        role: 'ছাত্রী',
        content: 'অনলাইনে এত সহজে কুরআন শেখা যায় ভাবতেই পারিনি। পাঠ্যক্রমটি খুব সুন্দরভাবে সাজানো, যা আমাকে সহীহভাবে শিখতে সাহায্য করেছে।',
        avatar: 'https://picsum.photos/seed/user2/100/100',
      },
      {
        id: 't3',
        name: 'ইউসুফ আলী',
        role: 'হিফজ ছাত্র',
        content: 'হিফজ প্রোগ্রামটি চ্যালেঞ্জিং তবে খুবই ফলপ্রসূ। আমার উস্তাদ আমাকে প্রতিদিন আমার লক্ষ্য পূরণে উৎসাহিত করেন।',
        avatar: 'https://picsum.photos/seed/user3/100/100',
      },
    ] as Testimonial[],
    faq: [
      {
        question: "ক্লাসগুলো কীভাবে নেওয়া হয়?",
        answer: "সকল ক্লাস অনলাইন জুম (Zoom) বা গুগল মিট (Google Meet)-এর মাধ্যমে একজন শিক্ষকের সাথে সরাসরি (ওয়ান-টু-ওয়ান) নেওয়া হয়।"
      },
      {
        question: "কোনো ট্রায়াল ক্লাসের ব্যবস্থা আছে কি?",
        answer: "হ্যাঁ, আমরা ৩ দিনের ফ্রি ট্রায়াল দিই যাতে ভর্তির আগে আপনি আমাদের পড়ানোর পদ্ধতি যাচাই করতে পারেন।"
      },
      {
        question: "আপনাদের কি মহিলা শিক্ষিকা আছে?",
        answer: "হ্যাঁ, মা-বোন এবং শিশুদের জন্য আমাদের অভিজ্ঞ ও যোগ্য মহিলা শিক্ষিকা (হাফেজা) রয়েছেন।"
      }
    ],
    admin: {
      title: "অ্যাডমিন ড্যাশবোর্ড",
      subtitle: "শিক্ষার্থীদের আবেদন ব্যবস্থাপনা।",
      clear: "ডেটা মুছুন",
      logout: "লগআউট",
      table: {
        date: "তারিখ",
        name: "শিক্ষার্থীর নাম",
        course: "কোর্স",
        contact: "যোগাযোগ",
        details: "বিস্তারিত"
      },
      empty: "কোনো আবেদন পাওয়া যায়নি।",
      loginTitle: "অ্যাডমিন প্যানেল",
      loginSub: "ভর্তির তথ্য দেখতে আপনার অ্যাক্সেস কোড দিন।",
      loginBtn: "লগইন",
      accessError: "ভুল পিন কোড",
      deleteConfirm: "আপনি কি নিশ্চিত যে আপনি সমস্ত ডেটা মুছে ফেলতে চান? এটি আর ফিরিয়ে আনা যাবে না।"
    },
    chat: {
      initial: "আসসালামু আলাইকুম! আমি তালিব, আপনার ভার্চুয়াল সহকারী। কোর্স বা ভর্তি সম্পর্কে আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
      placeholder: "কোর্স বা ফি সম্পর্কে জিজ্ঞাসা করুন...",
      typing: "তালিব লিখছে...",
      error: "দুঃখিত, কোনো একটি সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
      powered: "পাওয়ার্ড বাই জেমিনি এআই।",
      trigger: "প্রশ্ন জিজ্ঞাসা করুন",
      header: "তালিব এআই অ্যাডভাইজার",
      status: "অনলাইন | তাৎক্ষণিক উত্তর"
    },
    courseCard: {
      duration: "সার্টিফিকেট আছে",
      enrollBtn: "কোর্সে ভর্তি হোন"
    }
  }
};