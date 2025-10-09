// src/pages/Products.jsx
import React, { useState } from "react";
import { Tags } from 'lucide-react';
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const categories = t("products.categories", { returnObjects: true });
  return (
    <div className="space-y-20 p-8 mt-32">
      <div className="flex items-center justify-center mb-4 w-full">
              <div className="border-t border-red-500 flex-1 max-w-[220px]" />
              <div className="mx-4 text-red-500">
                <Tags size={28} />
              </div>
              <div className="border-t border-red-500 flex-1 max-w-[220px]" />
            </div>
      {Object.values(categories).map((cat, idx) => (
        <ProductCard
          key={cat.id}
          category={cat}
          index={idx}
          isExpanded={expandedCard === cat.id}
          onToggleExpand={toggleExpand}
        />
      ))}
    </div>

    
 
    
  );
}
