import React, { createContext, useContext, useEffect, useState } from "react";
import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import pt from "./pt.json";
import en from "./en.json";
import es from "./es.json";

const STORAGE_KEY = "@mottusense_language";

const resources = { pt, en, es };

const I18nContext = createContext({
  t: (k) => k,
  language: "pt",
  setLanguage: (l) => {},
});

export function useI18n() {
  return useContext(I18nContext);
}

export function I18nProvider({ children, defaultLanguage = "pt" }) {
  const [language, setLanguageState] = useState(defaultLanguage);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored && resources[stored]) setLanguageState(stored);
      } catch (e) {
        // ignore
      }
    })();
  }, []);

  const setLanguage = async (lang) => {
    if (!resources[lang]) return;
    try {
      await AsyncStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // ignore
    }
    setLanguageState(lang);
  };

  const t = (key, vars) => {
    const res = resources[language] || {};
    let text = res[key] || key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        text = text.replace(new RegExp(`{{${k}}}`, "g"), vars[k]);
      });
    }
    return text;
  };

  return (
    <I18nContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}
