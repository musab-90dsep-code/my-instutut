export type Language = 'bn' | 'en';

export interface Course {
  id: string;
  title: string;
  description: string;
  level: string; // Changed from literal union to string to support translated values easily
  duration: string;
  iconName: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface EnrollmentForm {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  gender: 'Male' | 'Female';
  courseId: string;
  message: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}