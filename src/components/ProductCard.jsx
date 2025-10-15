// src/components/ProductCard.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductCard({ 
  category, 
  index, 
  isExpanded, 
  onToggleExpand 
}) {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  // otvara popup s galerijom slika
  const openGallery = (gallery) => {
    setActiveGallery(gallery);
    setCurrentImage(0);
    setIsModalOpen(true);
  };

  const closeGallery = () => setIsModalOpen(false);

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? activeGallery.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === activeGallery.length - 1 ? 0 : prev + 1
    );
  };

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
                className="relative w-full h-[550px] rounded-3xl shadow-2xl object-cover group-hover:scale-[1.03] transition-all duration-700"
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
                {isExpanded ? t("products.close") : t("products.expand")}
              </button>
            </div>
          </div>
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div className="mt-8 space-y-6">
            <p className="text-gray-700">{category.extra.description}</p>

            {/* 3 slike s opisima ispod */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {category.extra.images
    .slice(0, category.extra.imagesToShow || category.extra.images.length)
    .map((img, i) => (
      <div
        key={i}
        className="flex flex-col items-center text-center space-y-3 cursor-pointer"
        onClick={() => openGallery(img.gallery || [])}
      >
        <img
          src={img.src || img}
          alt={`${category.title} ${t("products.detail")} ${i + 1}`}
          className="rounded-xl shadow-lg object-cover w-full h-[450px] hover:scale-[1.03] transition-transform duration-500"
        />
        {img.description && (
          <p className="text-gray-600 text-sm max-w-[90%]">{img.description}</p>
        )}
      </div>
    ))}
</div>

          </div>
        )}
      </div>

      {/* MODAL - popup galerija */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center">
          <button
            onClick={closeGallery}
            className="absolute top-6 right-8 text-white hover:text-red-400 transition"
          >
            <X size={36} />
          </button>

          {activeGallery.length > 0 && (
            <div className="relative flex items-center justify-center w-full max-w-5xl px-8">
              <button
                onClick={prevImage}
                className="absolute left-0 text-white hover:text-red-400 transition"
              >
                <ChevronLeft size={48} />
              </button>

              <img
                src={activeGallery[currentImage]}
                alt={`Galerija slika ${currentImage + 1}`}
                className="max-h-[80vh] rounded-2xl shadow-2xl object-contain transition-all duration-300"
              />

              <button
                onClick={nextImage}
                className="absolute right-0 text-white hover:text-red-400 transition"
              >
                <ChevronRight size={48} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
