export default function Hero() {
    return (
      <section className="bg-gray-50">
        
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Dobrodošli 
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis iusto a neque eligendi facilis natus inventore, ab debitis voluptas.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Kontaktirajte nas
            </button>
          </div>
  
          {/* Slika */}
          <div className="flex-1 mt-10 md:mt-0">
            <img 
              src="assets/images/ABI-PNG.png" 
              alt="abi" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }
  