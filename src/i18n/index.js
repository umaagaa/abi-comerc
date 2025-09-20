import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initializeLanguage } from '../utils/languageUtils';

// Import translation files
import bsTranslation from './locales/bs.json';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';
import deTranslation from './locales/de.json';

const resources = {
  bs: {
    translation: bsTranslation
  },
  en: {
    translation: enTranslation
  },
  fr: {
    translation: frTranslation
  },
  de: {
    translation: deTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'bs', // Set Bosnian as default language
    fallbackLng: 'bs', // Fallback to Bosnian if translation missing
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language',
      checkWhitelist: true,
    },

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    react: {
      useSuspense: false,
    },

    // Ensure Bosnian is always the default
    supportedLngs: ['bs', 'en', 'fr', 'de'],
    nonExplicitSupportedLngs: false,
  });

// Initialize language after i18n is configured
initializeLanguage(i18n);

export default i18n;
