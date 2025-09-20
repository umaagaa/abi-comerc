import {Tags} from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";

export default function PartnersSection() {
  const { t } = useTranslation();
    const partners = [
      "/src/assets/logos/GEALAN.svg",
      "/src/assets/logos/FEAL.svg", 
      "/src/assets/logos/velux.svg",
      "/src/assets/logos/BMI.svg",
      "/src/assets/logos/wurth.svg",
      "/src/assets/logos/austrotherm.svg",
    ];
  
    return (
      <section className="w-full py-12 bg-white">
        <SectionHeader
          icon={Tags}
          title={t('partners.title')}
          description={t('partners.description')}
        />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner ${i + 1}`}
                className="max-h-16 object-contain  grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
      </section>
    );
  }
  