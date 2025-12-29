import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import Footer from '../components/Footer';

export default function UnderConstruction() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className='relative min-h-[90vh] w-full bg-cover bg-center flex items-center justify-center'
        style={{ backgroundImage: 'url("/blackwindow.avif")' }}
      >
        <div className='bg-gray-900/80 text-white rounded-lg p-12 max-w-2xl mx-6 text-center'>
          <div className='mb-8'>
            {/* Construction Image */}
            <div className='mb-6'>
              <img
                src='/ABI-PNG.png'
                alt='Under Construction'
                className='w-32 h-32 mx-auto rounded-full object-cover border-4 border-orange-500'
              />
            </div>

            <h1 className='text-6xl font-bold text-orange-500 mb-4'>🚧</h1>
            <h2 className='text-3xl font-semibold mb-4'>
              {t('underConstruction.title')}
            </h2>
            <p className='text-lg text-gray-300 mb-8 leading-relaxed'>
              {t('underConstruction.description')}
            </p>

            {/* Progress Bar */}
            <div className='mb-8'>
              <div className='flex justify-between text-sm text-gray-400 mb-2'>
                <span>{t('underConstruction.progress')}</span>
                <span>75%</span>
              </div>
              <div className='w-full bg-gray-700 rounded-full h-3'>
                <div
                  className='bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out'
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              to='/'
              className='bg-green-700 font-bold text-white px-8 py-3 rounded hover:bg-green-600 hover:text-black transition-colors duration-300'
            >
              {t('underConstruction.homeButton')}
            </Link>
            <button
              onClick={() => window.history.back()}
              className='bg-transparent border-2 border-green-500 font-bold text-green-500 px-8 py-3 rounded hover:bg-green-500 hover:text-white transition-colors duration-300'
            >
              {t('underConstruction.backButton')}
            </button>
          </div>

          <div className='mt-12 text-sm text-gray-400'>
            <p>{t('underConstruction.contactDescription')}</p>
            <div className='flex flex-wrap justify-center gap-4 mt-4'>
              <a
                href='mailto:info@abicomerc.ba'
                className='text-green-400 hover:text-green-300 underline'
              >
                info@abicomerc.ba
              </a>
              <span className='text-gray-500'>•</span>
              <a
                href='tel:+38737411004'
                className='text-green-400 hover:text-green-300 underline'
              >
                +387 37 411 004
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
