import { createContext, useContext, useState, useEffect } from 'react';
import en from './en';
import ar from './ar';

const LanguageContext = createContext();

const translations = { en, ar };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('eyeden-lang') || 'en');

  useEffect(() => {
    localStorage.setItem('eyeden-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
  }, [lang]);

  const t = translations[lang];
  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
