import {Tags} from "lucide-react";
export default function PartnersSection() {
    const partners = [
      "/src/assets/logos/GEALAN.svg",
      "/src/assets/logos/FEAL.svg", 
      "/src/assets/logos/velux.svg",
      "/src/assets/logos/BMI.svg",
      "/src/assets/logos/wurth.svg",
      "/src/assets/logos/austrotherm.svg",
    ];
  
    return (
      <section className="w-full py-12 bg-white">
        <div className="text-center mb-12"> 
            <div className="flex items-center justify-center gap-4 mb-4"> 
                <div className="flex-1 border-t-2 border-red-500 max-w-[300px]" /> 
                {/* Ikonica u sredini */}
                 <div className="text-red-500"> 
                    <Tags size={42}/> 
                    </div> 
                    <div className="flex-1 border-t-2 border-red-500 max-w-[300px]" /> 
                    </div>
                     <h2 className="text-[45px] font-bold mb-2">Naši Partneri</h2>
                      <p className="text-gray-600 max-w-2xl mx-auto text-[18px]"> 
                        Ponosni smo na dugogodišnju saradnju sa brojnim domaćim i međunarodnim partnerima. Zajedno gradimo povjerenje,
                         kvalitet i inovacije, što nam omogućava da realizujemo projekte na najvišem nivou.
                         </p> 
                         <br/>
                         </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner ${i + 1}`}
                className="max-h-16 object-contain  grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
      </section>
    );
  }
  