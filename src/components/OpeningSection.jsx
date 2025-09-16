import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

export default function OpeningSection() {
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
        Otvaranje nove stambeno-poslovne zgrade
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
        ABI COMERC s ponosom najavljuje otvaranje moderne stambeno–poslovne zgrade u srcu grada.
Projekat objedinjuje vrhunski dizajn, funkcionalnost i kvalitetu, nudeći stanove različitih struktura te savremene poslovne prostore prilagođene potrebama današnjeg tržišta.
Na posebnoj stranici možete istražiti detalje o zgradi, pogledati tlocrte, 3D animacije i raspoložive stanove.
        </p>

        {/* Button */}
        <Link
          to="/zgrada"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Saznaj više
        </Link>
      </div>
    </section>
  );
}
