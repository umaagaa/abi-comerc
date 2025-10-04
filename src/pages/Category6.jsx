import React from 'react';
import { useTranslation } from 'react-i18next';
import CategoryContent from '../components/CategoryContent';
import stijenkaImg from "../assets/images/stijenka.png";
export default function Category6() {
  const { t } = useTranslation();
  return (
    <main className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 text-gray-900 min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-emerald-300/15 rounded-full blur-3xl animate-pulse delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-4xl font-bold text-green-700 hover:text-red-600 transition-colors duration-300 mb-4 leading-tight">
            {t('category6.title')}
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t('category6.subtitle')}
            </p>
          </div>
          
          <CategoryContent
            imageSrc={stijenkaImg}
            imageAlt={t('category6.imageAlt')}
            title={t('category6.content.title')}
            description={t('category6.content.description')}
            reverse={true}
          />
        </div>
      </div>
    </main>
  );
}
