import React from 'react';
import { Instagram, Facebook, Tags } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Footer component styled with Tailwind CSS
export default function Footer() {
  const { t } = useTranslation();
  const branches = [
    {
      title: 'ABI Proizvodnja i skladište',
      lines: [
        'ul. Zaradostovo BB',
        '77245 Bužim',
        'Bosna i Hercegovina',
        'Tel: +387 37 411 004',
        'Fax: +387 37 411 004',
        'proizvodnja@abicomerc.ba',
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
        'abiinvest@abicomerc.ba',
      ],
    },
  ];

  return (
    <footer className='bg-black text-gray-300'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-start'>
          {/* LEFT: logo + info + socials */}
          <div className='md:col-span-4'>
            <div className='flex items-start gap-4'>
              <img
                src='/ABI-PNG.png'
                alt={t('altTexts.logo')}
                className='w-20 h-auto object-contain'
              />
            </div>

            <div className='mt-5 text-[15px] leading-7'>
              <p className='text-white font-semibold'>
                {t('footer.companyName')}
              </p>
              <p>{t('footer.address')}</p>
              <p>{t('footer.city')}</p>
              <p>{t('footer.country')}</p>
              <p>{t('footer.phone')}</p>
              <p>{t('footer.fax')}</p>
              <p>
              <a
                  href='mailto:baucentar@abicomerc.ba'
                  className='text-red-500 hover:underline'
                >
                  baucentar@abicomerc.ba
                </a>
                <br />
                <a
                  href='mailto:info@abicomerc.ba'
                  className='text-red-500 hover:underline'
                >
                  info@abicomerc.ba
                </a>
              </p>

              <div className='flex gap-4 mt-5'>
                <a
                  href='https://www.facebook.com/abicomercdoo.mulalic'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Facebook size={20} />
                </a>

                <a
                  href='https://www.instagram.com/abi_comerc_d.o.o'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: podružnice */}
          <div className='md:col-span-8 flex flex-col items-center'>
            {/* Dekoracija: linije + Tags ikona */}
            <div className='flex items-center justify-center mb-4 w-full'>
              <div className='border-t border-red-500 flex-1 max-w-[220px]' />
              <div className='mx-4 text-red-500'>
                <Tags size={28} />
              </div>
              <div className='border-t border-red-500 flex-1 max-w-[220px]' />
            </div>

            {/* Naslov */}
            <h3 className='text-white text-2xl font-semibold text-center mb-6'>
              {t('footer.branches')}
            </h3>

            {/* Grid sa podružnicama - edit `branches` iznad */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {branches.map((b, idx) => (
                <div key={idx}>
                  <p className='text-white font-semibold mb-2'>{b.title}</p>
                  <div className='text-[14px] leading-6 text-gray-300'>
                    {b.lines.map((line, i) => {
                      // ako linija izgleda kao email, prikaži kao mailto
                      const isEmail = /@/.test(line);
                      return (
                        <div key={i}>
                          {isEmail ? (
                            <a
                              href={`mailto:${line}`}
                              className='text-red-500 hover:underline'
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
      </div>

      {/* copyright */}
      <div className='border-t border-gray-800 mt-10 pt-6'>
        <p className='text-center text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} ABI COMERC. {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
