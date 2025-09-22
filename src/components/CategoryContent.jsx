import React from 'react';

export default function CategoryContent({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  reverse = false 
}) {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-red-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Slika */}
          <div className={`order-1 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative group">
              {/* Multiple glow layers */}
              <div className="absolute -inset-6 bg-green-300/20 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-700"></div>
              <div className="absolute -inset-4 bg-red-200/15 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="absolute -inset-2 bg-green-100/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              
              <img
                src={imageSrc}
                alt={imageAlt}
                className="relative w-full h-[450px] rounded-3xl shadow-2xl object-cover group-hover:scale-[1.03] transition-all duration-700"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              
              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tekst */}
          <div className={`order-2 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="space-y-8">
              {/* Decorative line */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-red-500 rounded-full"></div>
                <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-1 bg-gray-200 rounded-full"></div>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-800 leading-tight hover:text-green-600 transition-colors duration-300">
                {title}
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 font-medium">Kvalitet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 font-medium">Inovacija</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 font-medium">Dugotrajnost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 font-medium">Estetika</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
