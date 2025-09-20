import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function OpeningSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Ikonica i naslov */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 border-t-2 border-red-500 max-w-[200px]" />
          <Building2 size={42} className="text-red-500" />
          <div className="flex-1 border-t-2 border-red-500 max-w-[200px]" />
        </div>

        <h2 className="text-4xl font-bold mb-4 text-gray-900 ">
          {t('opening.title')}
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          {t('opening.description')}
        </p>

        {/* Button */}
        <Link
          to="/building"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition"
        >
          {t('opening.cta')}
        </Link>
      </div>
    </section>
  );
}
