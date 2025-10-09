import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Globe } from 'lucide-react';
import { setStoredLanguage, getStoredLanguage } from '../utils/languageUtils';

const LanguageSwitcher = ({ className = "" }) => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const savedLanguage = getStoredLanguage();
    if (savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setStoredLanguage(lng);
  };

  const languages = [
    { code: 'bs', name: t('languages.bs'), flag: 'https://flagcdn.com/w20/ba.png' },
    { code: 'en', name: t('languages.en'), flag: 'https://flagcdn.com/w20/us.png' },
    { code: 'fr', name: t('languages.fr'), flag: 'https://flagcdn.com/w20/fr.png' },
    { code: 'de', name: t('languages.de'), flag: 'https://flagcdn.com/w20/de.png' }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language);

  return (
    <div className={`relative group ${className}`}>
      {/* Glavno dugme */}
      <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md px-3 py-2 transition-colors duration-200">
        <Globe size={16} />
        <span className="flex items-center gap-2 text-sm font-medium">
          <img
            src={currentLang?.flag}
            alt={currentLang?.code}
            className="w-5 h-4 object-cover rounded-sm border border-gray-300"
          />
          <span>{currentLang?.name} ({currentLang?.code.toUpperCase()})</span>
        </span>
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-md last:rounded-b-md flex items-center gap-2 ${
              i18n.language === lang.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
            }`}
          >
            <img
              src={lang.flag}
              alt={lang.code}
              className="w-5 h-4 object-cover rounded-sm border border-gray-300"
            />
            <span>{lang.name} ({lang.code.toUpperCase()})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
