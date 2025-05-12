import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChallengeCard = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleBuyClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Assuming the product has an id 1
  const challenge = {
    id: 1,
    title: 'Academic Challenge 2024',
    originalPrice: '245,600.00',
    discountedPrice: '20,100.00',
    description: 'Elevate your career with access to all certifications',
    image: '/assets/challenge/acd_chg.png'
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-end">
        <div>
          <img
            src={challenge.image}
            alt="Target Graphic"
            className="h-auto w-full p-22 justify-center"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-blue-700 font-bold text-3xl mb-2">{challenge.title}</h1>

          <div className="text-lg font-semibold mb-1">
            <span className="line-through text-gray-400 mr-2 ">Rs. {challenge.originalPrice}</span>
            <span className="text-black-700 text-2xl">Rs. {challenge.discountedPrice}</span>
          </div>

          <h2 className="text-2xl mb-2">Academic Challenge 2024</h2>
          <p className="text-gray-600 mb-3">{challenge.description}</p>

          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Quisque tristique in diam et sagittis. Etiam ante quam, aliquam et blandit nec.</li>
            <li>Quisque tristique in diam et sagittis. Etiam ante quam, aliquam et blandit nec.</li>
            <li>Quisque tristique in diam et sagittis. Etiam ante quam, aliquam et blandit nec.</li>
          </ul>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="border flex items-center">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 text-xl"
              >
                −
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 text-xl"
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleBuyClick(challenge.id)} 
              className="bg-blue-600 text-white px-7 py-2 hover:bg-blue-400 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
