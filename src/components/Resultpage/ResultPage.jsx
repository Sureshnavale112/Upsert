import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const ResultPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Scrum Master Professional Certificate (SMPC)
      </h1>

      <div className="bg-blue-100 text-blue-700 font-semibold text-lg md:text-xl px-6 py-3 rounded mb-6">
        Your Score Is 80%
      </div>

      <p className="text-lg font-medium text-gray-700 mb-2">
        Exam Submitted Successfully, Check Your Email To Download Your Certificate
      </p>

      <p className="text-sm text-gray-500 mb-4">
        Maecenas Lobortis Tempus Tellus Non Viverra. Nullam Interdum Porttitor<br />
        Justo, Sit Amet Cursus Augue Iaculis Sed. Nulla Faucibus Metus A Dolor<br />
        Suscipit, Et Condimentum Purus Elementum. Nulla
      </p>

      <h2 className="text-lg font-semibold text-blue-700 mt-6">FOLLOW US</h2>

      <div className="flex justify-center space-x-6 mt-3 text-blue-600 text-xl">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
      </div>
    </div>
  );
};

export default ResultPage;
