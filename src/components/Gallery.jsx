import {Tags} from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";

export default function Gallery() {
  const { t } = useTranslation();
    const items = [
      { src: "src/assets/images/stolarija.jpg", title: t('galleryProducts.windowSystems') },
      { src: "src/assets/images/stolarija.jpg", title: t('galleryProducts.facadeSystems') },
      { src: "src/assets/images/stolarija.jpg", title: t('galleryProducts.fenceSystems') },
      { src: "src/assets/images/stolarija.jpg", title: t('galleryProducts.aluminumProfiles') },
      { src: "src/assets/images/stolarija.jpg", title: t('galleryProducts.sunProtection') },
      { src: "src/assets/images/stolarija.jpg", title: t('galleryProducts.winterGarden') },
      { src: "src/assets/images/stolarija.jpg", title: t('galleryProducts.pregardSystems') },
    ];
  
    return (
      <div className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* === OVAJ DIO JE HEADER === */} 
          <SectionHeader
            icon={Tags}
            title={t('gallery.title')}
            description={t('gallery.description')}
          />
  
          {/* Kartice */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-400 overflow-hidden shadow hover:shadow-lg transition"
              >
                {/* Slika */}
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-32 p-3 object-cover transform hover:scale-105 transition duration-300"
                  />
                </div>
  
                {/* Naslov */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-bold text-gray-800 uppercase">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  