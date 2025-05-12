

import React from 'react';

const Footer = () => {
  const listItems1 = [
    'Nullam Interdum Porttitor Justo', 
    'Sit Amet Cursus Augue Iaculis Sed.',
    'Nulla Faucibus Metus A Dolor.',
    'Nullam Interdum Porttitor Justo',
    'Sit Amet Cursus Augue Iaculis Sed.',
    'Nulla Faucibus Metus A Dolor.',
  ];

  const listItems2 = [
    'Nullam Interdum Porttitor Justo', 
    'Sit Amet Cursus Augue Iaculis Sed.',
    'Nulla Faucibus Metus A Dolor.',
    'Nullam Interdum Porttitor Justo',
    'Sit Amet Cursus Augue Iaculis Sed.',
    'Nulla Faucibus Metus A Dolor.',
  ];
  const socialIcons = ['facebook', 'instagram', 'linkedin', 'youtube'];

  const socialLinks = [
    { name: 'facebook', url: 'https://facebook.com' },
    { name: 'instagram', url: 'https://instagram.com' },
    { name: 'linkedin', url: 'https://linkedin.com' },
    { name: 'youtube', url: 'https://youtube.com' },
  ];
  

  return (
    <footer className="bg-white text-slate-800  px-6 py-10 border-t border-blue-200">
      <div className="max-w-7xl mx-auto grid   grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col space-y-4">
          <button className="bg-[#1f2f43] text-white px-4 w-65 py-3 rounded-lg rounded-bl-none border hover:bg-[#0e1c2a] transition flex justify-between items-center">
            <span>Join Our Community</span>
            <img src="/assets/footer/footericon.png" className="rounded-full h-12 w-12 -mr-10 ml-4" alt="Join Icon" />
          </button>


          <div>
            <p className="font-semibold text-blue-900">FOLLOW US</p>
            {socialLinks.map((icon, i) => (
              <a key={i} href={icon.url} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${icon.name}`}></i>
              </a>
            ))}

          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[listItems1, listItems2].map((items, idx) => (
            <div key={idx}>
              <h3 className="text-blue-900 font-bold mb-3">MAECENAS LOBORTIS</h3>
              <ul className="space-y-2 text-gray-700">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-xs text-blue-900 mt-10 pt-4 border-t border-blue-200">
        CERTIFY © 2024
      </div>
    </footer>
  );
};

export default Footer;
