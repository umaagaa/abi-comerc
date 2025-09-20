import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";

export default function OpeningSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <SectionHeader
          icon={Building2}
          title={t('opening.title')}
          description={t('opening.description')}
          titleSize="text-4xl"
          className="mb-8"
        >
          <Link
            to="/building"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition"
          >
            {t('opening.cta')}
          </Link>
        </SectionHeader>
      </div>
    </section>
  );
}
