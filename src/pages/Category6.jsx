import React from 'react';
import CategoryContent from '../components/CategoryContent';

export default function Category6() {
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
              Category6
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Održiva rješenja za budućnost koja minimiziraju uticaj na okoliš
            </p>
          </div>
          
          <CategoryContent
            imageSrc="src/assets/images/stolarija.jpg"
            imageAlt="Category6 proizvodi"
            title="Održiva rješenja"
            description="Category6 kategorija fokusira se na ekološki održive graditeljske rješenja. Naši proizvodi su dizajnirani da minimiziraju uticaj na okoliš dok pružaju vrhunsku funkcionalnost i estetsku privlačnost za buduće generacije."
            reverse={true}
          />
        </div>
      </div>
    </main>
  );
}
