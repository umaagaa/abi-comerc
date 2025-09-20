import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import "flag-icons/css/flag-icons.min.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openAbout, setOpenAbout] = useState(false); // 👈 za mobilni dropdown

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const navLinks = [
    { path: "/about", label: t("nav.about") },
    { path: "/about", label: t("nav.products") },
    { path: "/products", label: t("nav.gallery") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="w-full bg-white dark:bg-white-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          <img
            src="src/assets/images/ABI-PNG.png"
            alt="Logo"
            className="w-17 h-14 mr-4"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">


          {/* Ostali linkovi */}
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="relative text-gray-700 font-bold transition duration-300 
                         hover:text-red-600
                         after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 
                         after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switch */}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <X size={28} className="text-gray-700 dark:text-gray-200" />
          ) : (
            <Menu size={28} className="text-gray-700 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4">
    
          

          {/* Ostali linkovi */}
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:text-red-600"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switch */}
          <div className="flex gap-3 items-center">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md px-2 py-1"
            >
              <option value="BS">BS</option>
              <option value="EN">EN</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
