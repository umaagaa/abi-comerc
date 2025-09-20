import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <div className="relative min-h-[90vh] w-full bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: 'url("src/assets/images/blackwindow.avif")' }}
      >
        <div className="bg-gray-900/80 text-white rounded-lg p-12 max-w-2xl mx-6 text-center">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-green-500 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-4">
              Stranica nije pronađena
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Nažalost, stranica koju tražite ne postoji ili je premještena. 
              Možete se vratiti na početnu stranicu ili istražiti naše usluge.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/" 
              className="bg-green-700 font-bold text-white px-8 py-3 rounded hover:bg-green-600 hover:text-black transition-colors duration-300"
            >
              POČETNA STRANICA
            </Link>
            <Link 
              to="/About" 
              className="bg-transparent border-2 border-green-500 font-bold text-green-500 px-8 py-3 rounded hover:bg-green-500 hover:text-white transition-colors duration-300"
            >
              O NAMA
            </Link>
          </div>
          
          <div className="mt-12 text-sm text-gray-400">
            <p>Ili možete istražiti naše usluge:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link to="/building" className="text-green-400 hover:text-green-300 underline">
                Gradnja
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/About" className="text-green-400 hover:text-green-300 underline">
                O nama
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
