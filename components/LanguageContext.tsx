"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "es" | "ur";
export type Mode = "student" | "teacher" | null;

type LanguageContextType = {
  language: Language | null;
  mode: Mode;
  setLanguage: (lang: Language) => void;
  setMode: (mode: Mode) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language | null>(null);
  const [mode, setModeState] = useState<Mode>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("orw_language") as Language | null;
    const savedMode = localStorage.getItem("orw_mode") as Mode | null;
    if (savedLang) setLanguageState(savedLang);
    if (savedMode) setModeState(savedMode);
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("orw_language", lang);
  }

  function setMode(m: Mode) {
    setModeState(m);
    if (m) localStorage.setItem("orw_mode", m);
  }

  return (
    <LanguageContext.Provider value={{ language, mode, setLanguage, setMode }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
