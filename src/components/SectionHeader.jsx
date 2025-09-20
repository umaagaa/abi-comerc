import { useTranslation } from 'react-i18next';

const SectionHeader = ({ 
  title, 
  description, 
  icon: Icon, 
  iconSize = 42,
  titleSize = "text-[45px]",
  className = "",
  children 
}) => {
  const { t } = useTranslation();

  return (
    <div className={`text-center mb-12 ${className}`}>
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="flex-1 border-t-2 border-red-500 max-w-[300px]" />
        {/* Ikonica u sredini */}
        <div className="text-red-500">
          <Icon size={iconSize} />
        </div>
        <div className="flex-1 border-t-2 border-red-500 max-w-[300px]" />
      </div>
      <h2 className={`${titleSize} font-bold mb-2`}>
        {typeof title === 'string' ? title : t(title)}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-[18px]">
        {typeof description === 'string' ? description : t(description)}
      </p>
      {children}
    </div>
  );
};

export default SectionHeader;
