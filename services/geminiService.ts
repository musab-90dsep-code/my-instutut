import { GoogleGenAI } from "@google/genai";
import { CONTENT } from "../constants";
import { Language } from "../types";

let aiClient: GoogleGenAI | null = null;

// Initialize the client only when needed to handle potential missing key gracefully
const getClient = () => {
  if (!aiClient && process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

// We will construct the prompt dynamically based on language
const getSystemInstruction = (lang: Language) => {
  const content = CONTENT[lang];
  return `
You are "Talib", the intelligent virtual advisor for Talimatin Institute.
The institute is based in or targets students from Bangladesh and worldwide.
Your goal is to help prospective students and parents understand our offerings and encourage them to enroll.

**IMPORTANT: YOU MUST REPLY IN ${lang === 'bn' ? 'BENGALI (BANGLA)' : 'ENGLISH'}.**

Key Information about the Institute:
- **Mission**: Teaching Quran and Tajweed online.
- **Courses Available**:
${content.courses.map(c => `  - ${c.title} (${c.level}): ${c.description}`).join('\n')}
- **FAQs**:
${content.faq.map(f => `  - Q: ${f.question} A: ${f.answer}`).join('\n')}

Tone and Style:
- Be polite, welcoming, and respectful (Islamic etiquette is appreciated, e.g., usage of 'Assalamu Alaykum', 'InshaAllah', 'JazakAllah').
- Be concise.
- If asked about fees, ask them to contact administration via the Enroll page for a customized plan.
- If you don't know something, suggest they visit the 'Contact' page or fill out the enrollment form.
- Direct users to the "Enrollment" page if they seem interested.

Strictly act as an advisor for this institute. Do not answer general knowledge questions unrelated to education, religion, or the institute.
`;
};

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], newMessage: string, language: Language = 'bn'): Promise<string> => {
  const client = getClient();
  if (!client) {
    return language === 'bn' 
      ? "দুঃখিত, আমি বর্তমানে অফলাইনে আছি। অনুগ্রহ করে সরাসরি প্রতিষ্ঠানের সাথে যোগাযোগ করুন।" 
      : "Sorry, I am currently offline. Please contact the institute directly.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    const chat = client.chats.create({
      model: model,
      config: {
        systemInstruction: getSystemInstruction(language),
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      })),
    });

    const result = await chat.sendMessage({
      message: newMessage
    });

    return result.text || (language === 'bn' ? "আমি এখন চিন্তা করতে পারছি না। অনুগ্রহ করে আবার চেষ্টা করুন।" : "I cannot think right now. Please try again.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'bn' 
      ? "আমি বর্তমানে যান্ত্রিক ত্রুটির সম্মুখীন হচ্ছি। অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।" 
      : "I am facing technical difficulties. Please try again later.";
  }
};