import React from 'react';
import { Link } from 'react-router-dom';

export default function GalleryCard({ src, title, alt }) {
  // Konvertuj title u lowercase za rutu
  const routePath = `/categories/${title.toLowerCase()}`;

  return (
    <Link to={routePath} className="block">
      <div className="bg-white border border-gray-400 overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
        {/* Slika */}
        <div className="overflow-hidden">
          <img
            src={src}
            alt={alt || title}
            className="w-full h-32 p-3 object-cover transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Naslov */}
        <div className="p-4 text-center">
          <h3 className="text-sm font-bold text-gray-800 uppercase">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
