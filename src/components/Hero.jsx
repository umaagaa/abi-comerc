export default function Hero() {
  return (
    
    
    <div className="relative h-[90vh] w-full bg-cover bg-center" 
      style={{ backgroundImage: 'url("src/assets/images/blackwindow.avif")' }}
    >
      <div className="flex flex-col items-start justify-center h-full ml-12">
        <div className="bg-gray-900/70 text-white rounded-lg p-8 max-w-xl ">
          <h2 className="text-xl mb-2">
            Inovativna PVC i ALU rješenja za budućnost gradnje
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            PVC i ALU profili i sistemi
          </h1>
          <p className="mb-6 text-sm leading-relaxed">
            Abi koristi najnoviju tehnologiju za proizvodnju i obradu aluminijskih profila.
            Naši proizvodi prilagođeni su vašim specifičnim potrebama, od ideje do realizacije,
            pružajući vrhunska rješenja za modernu arhitekturu i industriju diljem svijeta.
          </p>
          <button className="bg-green-700 font-bold text-white px-8 py-3 rounded-xs hover:bg-green-600 hover:text-black">
  ISTRAŽITE RJEŠENJA
</button>

        </div>
      </div>
      
    </div>
  );
}
