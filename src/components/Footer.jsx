import React from 'react';
import { Instagram, Facebook, Tags } from 'lucide-react';

// Footer component styled with Tailwind CSS
export default function Footer() {
  const branches = [
    {
      title: 'ABI Proizvodnja i skladište',
      lines: [
        'ul. Zaradostovo BB',
        '77245 Bužim',
        'Bosna i Hercegovina',
        'Tel: +387 37 411 004',
        'Fax: +387 37 411 004',
        'proizvodnja@abicomerc.ba'
      ],
    },
    {
      title: 'ABI INVEST d.o.o',
      lines: [
        'ul. Generala Izeta Nanića BB',
        '77245 Bužim',
        'Bosna i Hercegovina',
        'Tel: +387 37 411 004',
        'JIB: 4263959840003',
        'info@abicomerc.ba'
      ],
    },
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* LEFT: logo + info + socials */}
          <div className="md:col-span-4">
            <div className="flex items-start gap-4">
              <img
                src="/src/assets/images/ABI-PNG.png"
                alt="ABI logo"
                className="w-20 h-auto object-contain"
              />
            </div>

            <div className="mt-5 text-[15px] leading-7">
              <p className="text-white font-semibold">BAUCENTAR Abi Comerc d.o.o Bužim</p>
              <p>ul. Generala Izeta Nanića BB</p>
              <p>77245 Bužim</p>
              <p>Bosna i Hercegovina</p>
              <p>Tel: +387 37 411 004</p>
              <p>JIB: 4263577130006</p>
              <p>
                <a
                  href="mailto:abicomerc2010@gmail.com"
                  className="text-red-500 hover:underline"
                >
                  abicomerc2010@gmail.com
                </a>
              </p>

              <div className="flex gap-4 mt-5">
                <a
                  href="https://www.facebook.com/abicomercdoo.mulalic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href="https://www.instagram.com/abi_comerc_d.o.o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: podružnice */}
          <div className="md:col-span-8 flex flex-col items-center">
            {/* Dekoracija: linije + Tags ikona */}
            <div className="flex items-center justify-center mb-4 w-full">
              <div className="border-t border-red-500 flex-1 max-w-[220px]" />
              <div className="mx-4 text-red-500">
                <Tags size={28} />
              </div>
              <div className="border-t border-red-500 flex-1 max-w-[220px]" />
            </div>

            {/* Naslov */}
            <h3 className="text-white text-2xl font-semibold text-center mb-6">PODRUŽNICE</h3>
{/* Grid sa podružnicama - centriran ispod dekoracije */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-2xl mx-auto">
  {branches.map((b, idx) => (
    <div key={idx} className="text-left">
      <p className="text-white font-semibold mb-2">{b.title}</p>
      <div className="text-[15px] leading-7 text-gray-300">
        {b.lines.map((line, i) => {
          const isEmail = /@/.test(line);
          return (
            <div key={i}>
              {isEmail ? (
                <a
                  href={`mailto:${line}`}
                  className="text-red-500 hover:underline"
                >
                  {line}
                </a>
              ) : (
                <span>{line}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  ))}
</div>


          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ABI COMERC. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
