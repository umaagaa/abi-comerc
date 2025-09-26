// Language utility functions for consistent localStorage handling

export const LANGUAGE_STORAGE_KEY = 'language';
export const DEFAULT_LANGUAGE = 'bs';

export const getStoredLanguage = () => {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE;
  } catch (error) {
    console.warn('Could not access localStorage:', error);
    return DEFAULT_LANGUAGE;
  }
};

export const setStoredLanguage = (language) => {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.warn('Could not save to localStorage:', error);
  }
};

export const initializeLanguage = (i18n) => {
  const storedLanguage = getStoredLanguage();
  
  // Ensure the language is valid
  const validLanguages = ['bs', 'en', 'fr', 'de'];
  const languageToUse = validLanguages.includes(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
  
  // Set the language if it's different from current
  if (i18n.language !== languageToUse) {
    i18n.changeLanguage(languageToUse);
  }
  
  // Ensure it's stored
  setStoredLanguage(languageToUse);
  
  return languageToUse;
};
