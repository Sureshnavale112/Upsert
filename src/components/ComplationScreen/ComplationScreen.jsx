import React from 'react';


import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const CompletionScreen = () => {
  return (
    <div className="col-span-1 md:col-span-2 text-center py-12 border rounded-xl shadow bg-white">
    <div className="text-3xl mb-2">🎉</div>
    <h3 className="text-xl font-semibold text-blue-700 mb-2">Thank You!</h3>
    <p className="text-lg font-medium mb-4">Congratulations On Completing Your Exam!</p>
    <p className="text-sm text-gray-600 mb-6">
      Your hard work and dedication have paid off. We appreciate your effort and commitment
      to enhancing your knowledge and skills.
    </p>
    <div className="text-sm text-blue-600">CONNECT WITH US ON</div>
    <div className="flex justify-center gap-4 mt-2 text-xl text-blue-500">
      <FaFacebook />
      <FaInstagram />
      <FaLinkedin />
      <FaYoutube />
    </div>
  </div>
  );
};

export default CompletionScreen;
