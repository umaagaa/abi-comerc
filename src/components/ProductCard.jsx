// src/components/ProductCard.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function ProductCard({ 
  category, 
  index, 
  isExpanded, 
  onToggleExpand 
}) {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl"></div>
      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Slika */}
          <div className={`order-1 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
            <div className="relative group">
              <img
                src={category.imageSrc}
                alt={category.imageAlt}
                className="relative w-full h-[400px] rounded-3xl shadow-2xl object-cover group-hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Tekst */}
          <div className={`order-2 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
            <div className="space-y-6">
              {/* Decorative line */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-red-500 rounded-full"></div>
                <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-1 bg-gray-200 rounded-full"></div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {category.description}
              </p>

              <button
                onClick={() => onToggleExpand(category.id)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-red-500 text-white rounded-xl shadow hover:opacity-90 transition"
              >
                {isExpanded
                  ? t("products.close")
                  : t("products.expand")}
              </button>
            </div>
          </div>
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div className="mt-8 space-y-4">
            <p className="text-gray-700">{category.extra.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.extra.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${category.title} ${t("products.detail")} ${i + 1}`}
                  className="rounded-xl shadow-lg object-cover w-full h-[250px]"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}