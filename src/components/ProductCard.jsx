import { useState } from "react";

export default function ProductCard({ image, title, shortDesc, details, extraImages = [] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition relative">
      {/* Slika */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Naslov i opis */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{shortDesc}</p>

        {/* Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm text-blue-600 font-semibold hover:underline"
        >
          {expanded ? "Zatvori" : "Saznajte više"}
        </button>
      </div>

      {/* Prošireni sadržaj */}
      {expanded && (
        <div className="p-4 border-t bg-gray-50 animate-fadeIn">
          <p className="text-gray-700 text-sm mb-4">{details}</p>

          {/* Extra slike */}
          {extraImages.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {extraImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${title} detalj ${i + 1}`}
                  className="w-full h-28 object-cover rounded-md"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
