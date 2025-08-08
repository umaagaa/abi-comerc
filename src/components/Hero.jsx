export default function Hero() {
    return (
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          
          {/* Tekst */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Dobrodošli u našu firmu
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nudimo vrhunske usluge i rješenja prilagođena vašim potrebama.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Kontaktirajte nas
            </button>
          </div>
  
          {/* Slika */}
          <div className="flex-1 mt-10 md:mt-0">
            <img 
              src="https://source.unsplash.com/600x400/?office,business" 
              alt="Office" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }
  