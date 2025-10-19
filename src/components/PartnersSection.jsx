import { Tags, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import { useRef } from 'react';

export default function PartnersSection() {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  const partners = [
    '/logos/GEALAN.svg',
    '/logos/FEAL.svg',
    '/logos/velux.svg',
    '/logos/BMI.svg',
    '/logos/wurth.svg',
    '/logos/austrotherm.svg',
    '/logos/baumit-seeklogo.png',
    '/logos/civic_logo.png',
    '/logos/hager-seeklogo.svg',
    '/logos/euroroal.png',
    '/logos/ceresit.png',
    '/logos/sch.jpeg',
    '/logos/logojub.png',
    '/logos/knauf.svg',
    '/logos/Nexe.svg',
    '/logos/rofix.png',
    '/logos/Siegenia_Logo.svg',
    '/logos/weber.svg',
    '/logos/Wienerberger.svg',
  ];

  const scroll = direction => {
    const container = scrollRef.current;
    const scrollAmount = 250; // koliko da se pomjeri po kliku
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className='w-full py-12 bg-white relative'>
      <SectionHeader
        icon={Tags}
        title={t('partners.title')}
        description={t('partners.description')}
      />

      <div className='relative'>
        {/* Strelica lijevo */}
        <button
          onClick={() => scroll('left')}
          className='absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100'
        >
          <ChevronLeft className='w-5 h-5' />
        </button>

        {/* Logo traka */}
        <div
          ref={scrollRef}
          className='flex gap-8 overflow-x-auto scroll-smooth  px-10 no-scrollbar'
        >
          {partners.map((logo, i) => (
            <div
              key={i}
              className='flex-shrink-0 w-32 flex justify-center items-center'
            >
              <img
                src={logo}
                alt={`Partner ${i + 1}`}
                className='max-h-16 object-contain grayscale hover:grayscale-0 transition'
              />
            </div>
          ))}
        </div>

        {/* Strelica desno */}
        <button
          onClick={() => scroll('right')}
          className='absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100'
        >
          <ChevronRight className='w-5 h-5' />
        </button>
      </div>
    </section>
  );
}
