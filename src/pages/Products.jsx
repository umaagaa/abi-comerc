
import { useState } from "react";

const proizvodi = [
  {
    naziv: "GRAĐEVINSKI MATERIJAL",
    podkategorije: ["Cement", "Cigla", "Betonski blokovi", "Željezo"],
  },
  {
    naziv: "PROZORI",
    podkategorije: ["PVC Prozori", "Aluminijski Prozori", "Drveni Prozori"],
  },
  {
    naziv: "ULAZNA VRATA",
    podkategorije: [
      "Klasična vrata (obična ručka, dekorativni panel, skriveno krilo)",
      "Protuprovalna vrata",
      "Panel vrata",
    ],
  },
  {
    naziv: "ROLETNE, KOMARNICI, RAFFSTORE",
    podkategorije: [
      "Roletne",
      "Komarnici",
      "Vanjski žaluzine (raffstore)",
    ],
  },
  {
    naziv: "KLIZNE I FIX STIJENKE",
    podkategorije: ["Klizne stijene", "Fiksne stijene"],
  },
  {
    naziv: "GARAŽNA VRATA",
    podkategorije: ["Segmentna vrata", "Rolo vrata", "Industrijska vrata"],
  },
  {
    naziv: "ALUBOND",
    podkategorije: ["Ventilirane fasade", "Obloge"],
  },
];

const Proizvodi = () => {
  const [otvoreno, setOtvoreno] = useState(null);

  const toggle = (index) => {
    setOtvoreno(otvoreno === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Naši Proizvodi</h1>
      <div className="space-y-4">
        {proizvodi.map((kategorija, i) => (
          <div
            key={i}
            className="border rounded-lg shadow-md p-4 bg-white"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-lg font-semibold"
            >
              {kategorija.naziv}
              <span>{otvoreno === i ? "−" : "+"}</span>
            </button>

            {otvoreno === i && (
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700">
                {kategorija.podkategorije.map((pod, j) => (
                  <li key={j}>{pod}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proizvodi;
