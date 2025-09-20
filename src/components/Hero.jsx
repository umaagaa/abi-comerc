import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    
    
    <div className="relative h-[90vh] w-full bg-cover bg-center" 
      style={{ backgroundImage: 'url("src/assets/images/blackwindow.avif")' }}
    >
      <div className="flex flex-col items-start justify-center h-full ml-12">
        <div className="bg-gray-900/70 text-white rounded-lg p-8 max-w-xl ">
          <h2 className="text-xl mb-2">
            {t('hero.subtitle')}
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="mb-6 text-sm leading-relaxed">
            {t('hero.description')}
          </p>
          <button className="bg-green-700 font-bold text-white px-8 py-3 rounded-xs hover:bg-green-600 hover:text-black">
            {t('hero.cta')}
          </button>

        </div>
      </div>
      
    </div>
  );
}
