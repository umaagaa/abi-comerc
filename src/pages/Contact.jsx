import React from "react";
import { useTranslation } from "react-i18next";
import { Instagram, Facebook } from "lucide-react";

const locations = (t) => [
  {
    name: t("contact.baucentar.name"),
    address: [
      t("contact.baucentar.address1"),
      t("contact.baucentar.address2"),
      t("contact.baucentar.address3"),
    ],
    phone: t("contact.baucentar.phone"),
    jib: t("contact.baucentar.jib"),
    email: t("contact.baucentar.email"),
    fb: "https://www.facebook.com/abicomerc",
    ig: "https://www.instagram.com/abicomerc",
    mapSrc: "https://maps.app.goo.gl/rpdZydMSVsoMrB9SA",
  },
  {
    name: t("contact.proizvodnja.name"),
    address: [
      t("contact.proizvodnja.address1"),
      t("contact.proizvodnja.address2"),
      t("contact.proizvodnja.address3"),
    ],
    phone: t("contact.proizvodnja.phone"),
    jib: t("contact.proizvodnja.jib"),
    email: t("contact.proizvodnja.email"),
    fb: "https://www.facebook.com/abiproizvodnja",
    ig: "https://www.instagram.com/abiproizvodnja",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!...tvoj_skladiste_link...",
  },
  {
    name: t("contact.abinvest.name"),
    address: [
      t("contact.abinvest.address1"),
      t("contact.abinvest.address2"),
      t("contact.abinvest.address3"),
    ],
    phone: t("contact.abinvest.phone"),
    jib: t("contact.abinvest.jib"),
    email: t("contact.abinvest.email"),
    fb: "https://www.facebook.com/abiinvest",
    ig: "https://www.instagram.com/abiinvest",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!...tvoj_abinvest_link...",
  },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-50 to-white mt-26">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          {t("contact.title")}
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {locations(t).map((loc, i) => (
            <div
              key={i}
              className="relative bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-3xl shadow-2xl p-8 flex flex-col"
            >
              {/* Naslov */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {loc.name}
              </h3>

              {/* Adresa */}
              <div className="text-gray-600 space-y-1 mb-4">
                {loc.address.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
                <p className="mt-2 font-medium">{loc.phone}</p>
                <p>
                  {t("contact.jib")}: {loc.jib}
                </p>
                <p className="text-green-600 font-medium">{loc.email}</p>
              </div>

              {/* Mapa */}
              <div className="rounded-2xl overflow-hidden shadow-md mb-6">
                <iframe
                  src={loc.mapSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              {/* Ikone */}
              <div className="flex space-x-4 mt-auto">
                <a
                  href={loc.fb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={loc.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full hover:opacity-90 transition"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
