import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
          <img src="src/assets/images/ABI-PNG.png" alt="Logo" className="w-14 h-11 mr-2" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 mb-4 md:mb-0">
            <h5 className="text-lg font-bold text-gray-600">Kontakt</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Email: <span className="text-gray-400">info@pvc-company.com</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-Montserrat text-[18px]">
                  Fax: <span className="text-gray-400">+385 1 234 5678</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-[Mont Regular] text-[18px]">
                 Bosna i Hercegovina <span className="text-gray-400">Ulica 123, 10000 Zagreb</span>
                </a>
              </li>
            </ul>
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
        <div className="text-gray-600 text-center">
          &copy; 2025 ABI COMERC. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}

export default Footer;