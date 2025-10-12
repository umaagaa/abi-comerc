import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import FeatureCard from "../components/FeatureCard";

export default function About() {
  const { t } = useTranslation();
  return (
    <main className="bg-white text-gray-900">
      <div className="container mx-auto px-6 py-20">
        {/* --- UVODNA SEKCIJA --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 mt-10">
          <div className="order-1 lg:order-1">
            <img
              src="src/assets/images/baucentar.jpg"
              alt={t('altTexts.buildingIntro')}
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="order-2 lg:order-2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('about.description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-block rounded-xl px-6 py-3 font-semibold text-white border border-gray-300 bg-gradient-to-r from-green-500 to-red-500 shadow-md hover:opacity-90 hover:text-black transition"

              >
                {t('about.contactUs')}
              </a>
            </div>
          </div>
        </section>

        {/* --- MISIJA I VIZIJA --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl font-semibold text-red-600 mb-4">
              {t('about.mission.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('about.mission.description')}
            </p>
          </div>

          <div className="order-2 lg:order-2">
            <img
              src="src/assets/images/kuca.jpg"
              alt={t('altTexts.missionVision')}
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* --- ZAŠTO ODABRATI NAS --- */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {t('about.whyChooseUs.title')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="about.whyChooseUs.quality.title"
              description="about.whyChooseUs.quality.description"
            />
            <FeatureCard
              title="about.whyChooseUs.efficiency.title"
              description="about.whyChooseUs.efficiency.description"
            />
            <FeatureCard
              title="about.whyChooseUs.installation.title"
              description="about.whyChooseUs.installation.description"
            />
            <FeatureCard
              title="about.whyChooseUs.support.title"
              description="about.whyChooseUs.support.description"
            />
          </div>
        </section>

        {/* --- PROJEKTI --- */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img
                src="src/assets/images/zgrada.jpg"
                alt={t('altTexts.projectPreview')}
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-4">
                {t('about.projects.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('about.projects.description')}
              </p>

              <Link
                to="/building"
                className="inline-block px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-green-500 to-red-500 shadow-md hover:opacity-90 hover:text-black transition"

              >
                {t('about.projects.cta')}
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
          alt={t('altTexts.logo')}
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
          {t('about.cta.text')}
        </p>
        <Link
          to="/contact"
          className="bg-red-600 text-white px-5 py-2  text-sm font-medium hover:bg-red-700 transition"
        >
          {t('about.cta.button')}
        </Link>
      </div>
    </div>

    {/* copyright */}
    <div className="border-t border-gray-800 mt-6 pt-4">
      <p className="text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ABI COMERC. {t('footer.copyright')}
      </p>
    </div>
  </div>
</footer>

    </main>
  );
}
