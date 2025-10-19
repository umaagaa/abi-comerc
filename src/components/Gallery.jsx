import { Tags } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import GalleryCard from './GalleryCard';

export default function Gallery() {
  const { t } = useTranslation();
  const items = [
    {
      src: '/blok.jpg',
      title: t('galleryItems.constructionMaterial'),
      path: '/categories/Category1',
    },
    {
      src: '/gealan.png',
      title: t('galleryItems.pvcAluWindows'),
      path: '/categories/Category2',
    },
    {
      src: '/vratagealan.webp',
      title: t('galleryItems.entranceDoors'),
      path: '/categories/Category3',
    },
    {
      src: '/gvrata.png',
      title: t('galleryItems.garageDoors'),
      path: '/categories/Category4',
    },
    {
      src: '/zos.png',
      title: t('galleryItems.sunProtection'),
      path: '/categories/Category5',
    },
    {
      src: '/stijenka.png',
      title: t('galleryItems.slidingWalls'),
      path: '/categories/Category6',
    },
    {
      src: '/alubond.webp',
      title: t('galleryItems.alubondFacades'),
      path: '/categories/Category7',
    },
    {
      src: '/velux.webp',
      title: t('galleryItems.roofWindows'),
      path: '/categories/Category8',
    },
  ];

  return (
    <div className='w-full bg-white py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* === OVAJ DIO JE HEADER === */}
        <SectionHeader
          icon={Tags}
          title={t('gallery.title')}
          description={t('gallery.description')}
        />

        {/* Kartice */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-3'>
          {items.map((item, i) => (
            <GalleryCard
              key={i}
              src={item.src}
              title={item.title}
              alt={item.title}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
