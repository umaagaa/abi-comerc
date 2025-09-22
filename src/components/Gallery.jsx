import {Tags} from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";
import GalleryCard from "./GalleryCard";

export default function Gallery() {
  const { t } = useTranslation();
    const items = [
      { src: "src/assets/images/stolarija.jpg", title: "Category1" },
      { src: "src/assets/images/stolarija.jpg", title: "Category2" },
      { src: "src/assets/images/stolarija.jpg", title: "Category3" },
      { src: "src/assets/images/stolarija.jpg", title: "Category4" },
      { src: "src/assets/images/stolarija.jpg", title: "Category5" },
      { src: "src/assets/images/stolarija.jpg", title: "Category6" },
      { src: "src/assets/images/stolarija.jpg", title: "Category7" },
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
              <GalleryCard
                key={i}
                src={item.src}
                title={item.title}
                alt={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  