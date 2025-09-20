import {Tags} from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Gallery() {
    const items = [
      { src: "src/assets/images/stolarija.jpg", title: "SISTEMI PROZORA I VRATA" },
      { src: "src/assets/images/stolarija.jpg", title: "FASADNI SISTEMI" },
      { src: "src/assets/images/stolarija.jpg", title: "OGRADNI SISTEMI" },
      { src: "src/assets/images/stolarija.jpg", title: "ALUMINIJSKI TRGOVAČKI PROFILI" },
      { src: "src/assets/images/stolarija.jpg", title: "ZAŠTITA OD SUNCA" },
      { src: "src/assets/images/stolarija.jpg", title: "ZIMSKI VRT" },
      { src: "src/assets/images/stolarija.jpg", title: "PREGARDNI SISTEMI" },
    ];
  
    return (
      <div className="w-full bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* === OVAJ DIO JE HEADER === */} 
          <SectionHeader
            icon={Tags}
            title="Proizvodi"
            description="Napredni aluminijski sistemi za moderne građevinske projekte, koji nude dugotrajnost, estetiku i energetsku učinkovitost."
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
  