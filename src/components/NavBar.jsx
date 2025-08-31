import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "../components/ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/about", label: t("about") },
    { path: "/products", label: t("products") },
    { path: "/contact", label: t("contact") },
  ];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold text-blue-600 dark:text-blue-400">
            <img src="src/assets/images/ABI-PNG.png" alt="Logo" className="w-14 h-11 mr-2" />
            
          </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
            >
              {link.label}
            </Link>
          ))}
          {/* Language Switch */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md px-2 py-1"
          >
            <option value="en">EN</option>
            <option value="bs">BS</option>
          </select>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} className="text-gray-700 dark:text-gray-200" /> : <Menu size={28} className="text-gray-700 dark:text-gray-200" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 items-center">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md px-2 py-1"
            >
              <option value="en">EN</option>
              <option value="bs">BS</option>
            </select>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
