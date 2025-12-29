import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <div
        className='relative min-h-[90vh] w-full bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: 'url("/blackwindow.avif")' }}
      >
        <div className='bg-gray-900/80 text-white rounded-lg p-12 max-w-2xl mx-6 text-center'>
          <div className='mb-8'>
            <h1 className='text-8xl font-bold text-green-500 mb-4'>404</h1>
            <h2 className='text-3xl font-semibold mb-4'>{t('404.title')}</h2>
            <p className='text-lg text-gray-300 mb-8 leading-relaxed'>
              {t('404.description')}
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              to='/'
              className='bg-green-700 font-bold text-white px-8 py-3 rounded hover:bg-green-600 hover:text-black transition-colors duration-300'
            >
              {t('404.homeButton')}
            </Link>
            <Link
              to='/About'
              className='bg-transparent border-2 border-green-500 font-bold text-green-500 px-8 py-3 rounded hover:bg-green-500 hover:text-white transition-colors duration-300'
            >
              {t('404.aboutButton')}
            </Link>
          </div>

          <div className='mt-12 text-sm text-gray-400'>
            
              <span className='text-gray-500'>•</span>
              <Link
                to='/About'
                className='text-green-400 hover:text-green-300 underline'
              >
                {t('404.about')}
              </Link>
            </div>
          </div>
        </div>
      
      <Footer />
    </>
  );
}
