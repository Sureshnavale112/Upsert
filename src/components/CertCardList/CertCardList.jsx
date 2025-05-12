import React from 'react';
import { useNavigate } from 'react-router-dom';

import okrmaster from '../../../public/assets/CertCardList/okr.png';

const certifications = [
  {
    id: 1,
    title: 'Scrum Master Professional Certificate (SMPC)',
    image: okrmaster,
    price: '6,400.00',
  },
  {
    id: 2,
    title: 'OKR Master Professional Certification – OKRMPC',
    image: okrmaster,
    price: '6,400.00',
  },
  {
    id: 3,
    title: 'Scrum Master Professional Certificate (SMPC)',
    image: okrmaster,
    price: '6,400.00',
  },
];

const CertCardList = () => {
  const navigate = useNavigate();

  const handleBuyClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-center">
      <h2 className="text-xl font-bold text-blue-900 mb-6">BOOST YOUR CAREER IN 2024</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-between"
          >
            <img src={cert.image} alt="Badge" className="w-28 h-28 mb-4" />
            <h3 className="font-semibold text-sm text-blue-900 mb-2">{cert.title}</h3>
            <div className="text-lg font-bold mb-2">Rs. {cert.price}</div>

            <button
              className="text-sm font-semibold bg-blue-700 text-white px-4 py-2 rounded-md"
              onClick={() => handleBuyClick(cert.id)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertCardList;
