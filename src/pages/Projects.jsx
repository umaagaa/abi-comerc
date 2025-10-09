// src/pages/Projects.jsx
import React, { useState } from "react";
import { Building2, Home, Factory, Wrench, Hammer, Tags, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: t("projects.residential.title"),
      description: t("projects.residential.description"),
      image: "src/assets/images/kuca.jpg",
      icon: Home,
      features: [
        t("projects.residential.features.quality"),
        t("projects.residential.features.efficiency"),
        t("projects.residential.features.design")
      ]
    },
    {
      id: 2,
      title: t("projects.commercial.title"),
      description: t("projects.commercial.description"),
      image: "src/assets/images/firma.jpg",
      icon: Building2,
      features: [
        t("projects.commercial.features.durability"),
        t("projects.commercial.features.performance"),
        t("projects.commercial.features.innovation")
      ]
    },
    {
      id: 3,
      title: t("projects.industrial.title"),
      description: t("projects.industrial.description"),
      image: "src/assets/images/status.jpg",
      icon: Factory,
      features: [
        t("projects.industrial.features.strength"),
        t("projects.industrial.features.reliability"),
        t("projects.industrial.features.customization")
      ]
    },
    {
      id: 4,
      title: t("projects.renovation.title"),
      description: t("projects.renovation.description"),
      image: "src/assets/images/stolarija.jpg",
      icon: Wrench,
      features: [
        t("projects.renovation.features.modernization"),
        t("projects.renovation.features.energy"),
        t("projects.renovation.features.aesthetics")
      ]
    },
    {
      id: 5,
      title: t("projects.facade.title"),
      description: t("projects.facade.description"),
      image: "src/assets/images/alubond.webp",
      icon: Hammer,
      features: [
        t("projects.facade.features.durability"),
        t("projects.facade.features.weather"),
        t("projects.facade.features.maintenance")
      ]
    },
  ];

  return (
    <div className="space-y-20 p-8 mt-32">
      <div className="flex items-center justify-center mb-8 w-full">
        <div className="border-t border-red-500 flex-1 max-w-[220px]" />
        <div className="mx-4 text-red-500">
          <Tags size={28} />
        </div>
        <div className="border-t border-red-500 flex-1 max-w-[220px]" />
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <project.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 flex-grow">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    {t("projects.keyFeatures")}:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - Always at bottom */}
                <div className="mt-8">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
                  >
                    {t("projects.learnMore")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("projects.cta.title")}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t("projects.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 text-center"
            >
              {t("projects.cta.contact")}
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              {t("projects.cta.portfolio")}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-2">
          <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[98vh] overflow-hidden shadow-2xl border border-gray-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <selectedProject.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-10 overflow-y-auto max-h-[calc(98vh-160px)]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Image - Takes 2 columns */}
                <div className="lg:col-span-2 space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-[700px] object-cover rounded-xl shadow-lg"
                  />
                </div>

                {/* Content - Takes 1 column */}
                <div className="lg:col-span-1 flex flex-col justify-between h-full">
                  {/* Text Content */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-6">
                        {t("projects.description")}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-xl">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-6">
                        {t("projects.keyFeatures")}
                      </h4>
                      <ul className="space-y-4">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-gray-600 text-xl">
                            <div className="w-4 h-4 bg-blue-500 rounded-full mr-4 flex-shrink-0 mt-1"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button - Fixed at bottom */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      to="/contact"
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-xl font-bold transition-colors duration-300 text-center text-xl"
                    >
                      {t("projects.cta.contact")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
