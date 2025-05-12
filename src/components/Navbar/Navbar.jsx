import React, { useState } from 'react';
import logo from '../../../public/assets/logo/logo.png';
import cart from '../../../public/assets/logo/cart.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (


    <>
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-800"></span>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <img src={cart} className="text-gray-700 hover:text-blue-600"/>
            <a href="#" className="text-gray-700 hover:text-blue-600">Log In</a>
            <button className="text-gray-700 bg-blue-500 rounded  hover:text-blue-600">Sign UP</button>
          </div>

          <div className="md:hidden flex items-center">
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button> */}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {/* <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a> */}
        </div>
      )}
    </nav>



<nav className="bg-white shadow-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-center items-center h-16">


    <ul className="hidden md:flex space-x-12">
      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Home</li>
      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">About US</li>
      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Certifications</li>
      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Why Get Certified</li>
      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Resources</li>
      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Events</li>
      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Contact Us</li>
    </ul>

    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  </div>
</div>

{isOpen && (
  <ul className="md:hidden px-4 pb-4 space-y-2">
    <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Home</li>
    <li className="text-gray-700 hover:text-blue-600 cursor-pointer">About</li>
    <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Services</li>
    <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Portfolio</li>
    <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Blog</li>
    <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Careers</li>
    <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Contact</li>
  </ul>
)}
</nav>


</>


  );
};

export default Navbar;
