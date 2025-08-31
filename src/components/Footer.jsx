import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
          <img src="src/assets/images/ABI-PNG.png" alt="Logo" className="w-14 h-11 mr-2" />
            <p className="text-gray-600 font-Montserrat text-lg">
              <strong>Abi Comerc d.o.o Bužim</strong>
              <br/>
              ul. Generala Izeta Nanića
              <br/>
              77245 Bužim
              <br/>
              Bosna i Hercegovina
              <br/>
              Tel: +387 37 411 004
              <br/>
              Fax: +387 37 411 004
              <br/>
              <a href="abicomerc2010@gmail.com" className="text-red-500 ">abicomerc2010@gmail.com</a>
            </p>
          </div>
          {/* Podružnice ~ dodati kasnije */}
          
            {/* Kontakt */}
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
            <h5 className="text-lg font-bold text-gray-600">Kontakt</h5>
            
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
            <h5 className="text-lg font-bold text-gray-600">Socijalne mreže</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-facebook-f mr-2"></i> Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-twitter mr-2"></i> Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-instagram mr-2"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}

        <div className="text-gray-600 text-center">
          &copy; 2025 ABI COMERC. Sva prava zadržana.
        </div>
        </div>
    </footer>
  );
}

export default Footer;