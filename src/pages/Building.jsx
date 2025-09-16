export default function Building() {
    return (
      <div className="min-h-screen bg-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Naša nova poslovna zgrada
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            Dobrodošli na stranicu posvećenu otvaranju naše nove zgrade. 
            Ova investicija predstavlja korak naprijed u razvoju naše firme, 
            omogućava bolje uvjete za rad i unapređenje proizvodnje PVC i ALU stolarije.
          </p>
  
            
          <img
            src="src/assets/images/building.jpg"
            alt="Nova poslovna zgrada"
            className="mx-auto rounded-lg shadow-lg mb-10"
          />
  
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Nova zgrada je opremljena savremenom opremom i modernim prostorijama 
            kako bismo pružili još kvalitetnije usluge našim partnerima i klijentima.
            Uskoro više informacija o svečanom otvaranju!
          </p>
        </div>
      </div>
    );
  }
  