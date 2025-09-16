import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export default function About() {
  return (
    <main className="bg-white text-gray-900">
      <div className="container mx-auto px-6 py-20">
        {/* --- UVODNA SEKCIJA --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 mt-10">
          <div className="order-1 lg:order-1">
            <img
              src="src/assets/images/baucentar.jpg"
              alt="Ilustracija zgrade - intro"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="order-2 lg:order-2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">O nama</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              ABI COMERC d.o.o. Bužim je porodična kompanija specijalizirana za
              proizvodnju i prodaju PVC i ALU stolarije. Pružamo kompletna
              rješenja — od projektovanja i proizvodnje do profesionalne montaže.
              Sa više od 15 godina iskustva gradimo kvalitetnu reputaciju i
              dugoročne odnose s klijentima i partnerima. Između ostalog, bavimo
              se i prodajom građevinskog materijala.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block border border-gray-300 text-gray-800 px-6 py-3  hover:bg-gray-100 transition"
              >
                Kontaktirajte nas
              </a>
            </div>
          </div>
        </section>

        {/* --- MISIJA I VIZIJA --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl font-semibold text-red-600 mb-4">
              Naša misija
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pružiti napredne aluminijske i PVC sisteme koji garantuju
              dugotrajnost, energetsku učinkovitost i estetsku vrijednost.
              Fokusiramo se na inovacije, kvalitetnu izradu te brz i pouzdan
              servis.
            </p>
          </div>

          <div className="order-2 lg:order-2">
            <img
              src="src/assets/images/kuca.jpg"
              alt="Ilustracija - misija i vizija"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* --- ZAŠTO ODABRATI NAS --- */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Zašto odabrati nas?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border rounded-xs">
              <h4 className="font-semibold mb-2">Kvaliteta</h4>
              <p className="text-sm text-gray-600">
                Prodajemo i proizvodimo trajne i testirane profile.
              </p>
            </div>

            <div className="p-6 border rounded-xs">
              <h4 className="font-semibold mb-2">Energetska efikasnost</h4>
              <p className="text-sm text-gray-600">
                Rješenja koja štede grijanje i hlađenje.
              </p>
            </div>

            <div className="p-6 border rounded-xs">
              <h4 className="font-semibold mb-2">Profesionalna montaža</h4>
              <p className="text-sm text-gray-600">
                Brza i precizna ugradnja od našeg tima.
              </p>
            </div>

            <div className="p-6 border rounded-xs">
              <h4 className="font-semibold mb-2">Podrška i servis</h4>
              <p className="text-sm text-gray-600">
                Dugoročna podrška nakon prodaje.
              </p>
            </div>
          </div>
        </section>

        {/* --- PROJEKTI --- */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img
                src="src/assets/images/about-project-preview.jpg"
                alt="Preview projekta"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-4">
                Novi projekti i investicije
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Radimo na više projekata istovremeno — od stambenih zgrada do
                poslovnih objekata. Na stranici projekta za novu zgradu nalazit će
                se detaljni tlocrti, 3D animacije, galerija i popis raspoloživih
                stanova.
              </p>

              <Link
                to="/zgrada"
                className="inline-block bg-red-600 text-white px-6 py-3  font-semibold hover:bg-red-700 transition"
              >
                Saznaj više o zgradi
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* --- FOOTER --- */}
      {/* --- FOOTER --- */}
<footer className="w-full bg-black text-gray-300">
  <div className="max-w-[1200px] mx-auto px-6 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Info o firmi */}
      <div className="flex flex-col items-start">
        {/* Logo gore */}
        <img
          src="/src/assets/images/ABI-PNG.png"
          alt="ABI logo"
          className="w-20 h-auto object-contain mb-4"
        />

        <div className="mt-5 text-[15px] leading-7">
          <p className="text-white font-semibold">
            BAUCENTAR Abi Comerc d.o.o Bužim
          </p>
          <p>ul. Generala Izeta Nanića</p>
          <p>77245 Bužim</p>
          <p>Bosna i Hercegovina</p>
          <p>Tel: +387 37 411 004</p>
          <p>Fax: +387 37 411 004</p>
          <p>
            <a
              href="mailto:abicomerc2010@gmail.com"
              className="text-red-500 hover:underline"
            >
              abicomerc2010@gmail.com
            </a>
          </p>

          {/* Ikonice */}
          <div className="flex gap-3 mt-3">
            <a
              href="https://www.facebook.com/abicomercdoo.mulalic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/abi_comerc_d.o.o"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-start md:items-end justify-center">
        <p className="text-sm text-gray-400 mb-3">
          Želite li ponudu ili posjetu? Javite nam se.
        </p>
        <Link
          to="/contact"
          className="bg-red-600 text-white px-5 py-2  text-sm font-medium hover:bg-red-700 transition"
        >
          Zatraži ponudu
        </Link>
      </div>
    </div>

    {/* copyright */}
    <div className="border-t border-gray-800 mt-6 pt-4">
      <p className="text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ABI COMERC. Sva prava zadržana.
      </p>
    </div>
  </div>
</footer>

    </main>
  );
}
