import { PanelBottom, DoorClosed, BrickWall, Package } from "lucide-react";

export default function FeaturesInline() {
  const features = [
    { title: "PVC STOLARIJA", subtitle: "Prozori, vrata i proizvodi od PVC-a", icon: <PanelBottom size={46} /> },
    { title: "ALU STOLARIJA", subtitle: "Prozori, vrata i proizvodi od aluminija", icon: <DoorClosed size={46} /> },
    { title: "GRAĐEVINSKI MATERIJAL", subtitle: "Fasadni profili, bravarija i dr.", icon: <BrickWall size={46} /> },
    { title: "OSTALI PROIZVODI", subtitle: "Komarnici, roletne, garažna vrata...", icon: <Package size={46} /> },
  ];

  return (
    <div className="w-full flex justify-center py-12 bg-gray-50">
      <div className="flex items-center gap-12">

        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-8">
            {i > 0 && <div className="h-20 w-px bg-gray-300" />}
            <div className="flex flex-col items-center text-center max-w-[180px]">
              <div className="text-green-600 mb-3">{f.icon}</div>
              <h3 className="font-semibold text-xl">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.subtitle}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
