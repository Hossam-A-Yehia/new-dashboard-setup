import { useState, useEffect } from "react";

export const useLanguage = () => {
  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("appLanguage") || "en";
      setLang(storedLang);
    }
  }, []);

  return lang;
};
