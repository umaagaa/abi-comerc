import { useTranslation } from 'react-i18next';

const FeatureCard = ({ 
  title, 
  description, 
  className = "p-6 border rounded-xs"
}) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h4 className="font-semibold mb-2">
        {t(title)}
      </h4>
      <p className="text-sm text-gray-600">
        {t(description)}
      </p>
    </div>
  );
};

export default FeatureCard;
