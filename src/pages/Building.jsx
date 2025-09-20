import { useTranslation } from "react-i18next";

export default function Building() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          {t('building.title')}
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          {t('building.description')}
        </p>

          
        <img
          src="src/assets/images/building.jpg"
          alt={t('altTexts.newBuilding')}
          className="mx-auto rounded-lg shadow-lg mb-10"
        />

        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {t('building.details')}
        </p>
      </div>
    </div>
  );
}
  