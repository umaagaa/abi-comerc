import {Tags} from "lucide-react";
export default function Gallery() {
    const images = [
      "src/assets/images/pvc1.jpg",
      "src/assets/images/pvc2.jpg",
      "src/assets/images/pvc3.jpg",
      "src/assets/images/pvc4.jpg",
    ];
  
    return (
      <div className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
  
          {/* === OVAJ DIO JE HEADER === */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 border-t-2 border-red-500 max-w-[300px]" />
              
              {/* Ikonica u sredini */}
              <div className="text-red-500">
                <Tags size={42}/>
              </div>
  
              <div className="flex-1 border-t-2 border-red-500 max-w-[300px]" />
            </div>
  
            <h2 className="text-2xl font-bold mb-2">Proizvodi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Napredni aluminijski sistemi za moderne građevinske projekte,
              koji nude dugotrajnost, estetiku i energetsku učinkovitost.
            </p>
          </div>
          {/* === KRAJ HEADERA === */}
  
          {/* Galerija */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, i) => (
              <div 
                key={i} 
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <img 
                  src={src} 
                  alt={`Stolarija ${i + 1}`} 
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  