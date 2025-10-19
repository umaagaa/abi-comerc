import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div
      className='relative h-[90vh] w-full bg-cover bg-center'
      style={{ backgroundImage: 'url("/firma.jpg")' }}
    >
      <div className='flex flex-col items-start justify-center h-full ml-12'>
        <div className='bg-gray-900/70 text-white rounded-lg p-8 max-w-xl '>
          <h2 className='text-xl mb-2'>{t('hero.subtitle')}</h2>
          <h1 className='text-4xl font-bold mb-4'>{t('hero.title')}</h1>
          <p className='mb-6 text-sm leading-relaxed'>
            {t('hero.description')}
          </p>
          <Link
            to='/products'
            className='inline-block px-8 py-3 font-bold text-white rounded-xl bg-gradient-to-r from-green-500 to-red-500 shadow-md hover:opacity-90 hover:text-black transition'
          >
            {t('hero.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
