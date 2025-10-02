// src/pages/Products.jsx
import React, { useState } from "react";
import { Tags } from 'lucide-react';
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const categories = t("products.categories", { returnObjects: true });
  return (
    <div className="space-y-20 p-8 mt-32">
      <div className="flex items-center justify-center mb-4 w-full">
              <div className="border-t border-red-500 flex-1 max-w-[220px]" />
              <div className="mx-4 text-red-500">
                <Tags size={28} />
              </div>
              <div className="border-t border-red-500 flex-1 max-w-[220px]" />
            </div>
      {Object.values(categories).map((cat, idx) => (

        <div key={cat.id} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl"></div>
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Slika */}
              <div className={`order-1 ${idx % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="relative group">
                  <img
                    src={cat.imageSrc}
                    alt={cat.imageAlt}
                    className="relative w-full h-[400px] rounded-3xl shadow-2xl object-cover group-hover:scale-[1.03] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                </div>
              </div>

              {/* Tekst */}
              <div className={`order-2 ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="space-y-6">
                  {/* Decorative line */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-red-500 rounded-full"></div>
                    <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-1 bg-gray-200 rounded-full"></div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                    {cat.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {cat.description}
                  </p>

                  <button
                    onClick={() => toggleExpand(cat.id)}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                  >
                    {expandedCard === cat.id
                      ? t("products.close")
                      : t("products.expand")}
                  </button>
                </div>
              </div>
            </div>

            {/* Expanded content */}
            {expandedCard === cat.id && (
              <div className="mt-8 space-y-4">
                <p className="text-gray-700">{cat.extra.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.extra.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${cat.title} detalj ${i + 1}`}
                      className="rounded-xl shadow-lg object-cover w-full h-[250px]"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    
 
    
  );
}
