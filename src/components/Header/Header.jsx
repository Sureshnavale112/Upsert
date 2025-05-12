import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '/assets/logo/logo.png';
import cart from '/assets/logo/cart.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowDropdown(location.pathname.startsWith('/resources'));
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/whyget', label: 'Why Get Certified' },
    {
      to: '/resources',
      label: 'Resources',
      dropdown: [
        { to: '/resources/blog', label: 'Blog-1' },
        { to: '/resources/blogs', label: 'Blog-2' },
        { to: '/resources/ebook', label: 'Ebook-1' },
        { to: '/resources/ebooks', label: 'Ebook-2' },
      ]
    },
    { to: '/events', label: 'Events' },
    { to: '/contact', label: 'Contact Us' }
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.to} className="relative group">
                  <NavLink to={link.to} className="text-gray-700 hover:text-blue-600">
                    {link.label}
                  </NavLink>
                  {showDropdown && (
                    <ul className="absolute left-0 bg-white shadow-md rounded mt-2 w-40 z-50 hidden group-hover:block">
                      {link.dropdown.map((item) => (
                        <li key={item.to}>
                          <NavLink
                            to={item.to}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {link.label}
                </NavLink>
              )
            )}
            <Link to="/cart">
             <img src={cart} alt="Cart" className="h-6 w-6 hover:opacity-80 transition" />
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Log In
            </Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Sign Up
            </Link>

          </div>

         
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
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
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.to}>
                <NavLink to={link.to} className="block text-gray-700 hover:text-blue-600">
                  {link.label}
                </NavLink>
                {showDropdown &&
                  link.dropdown.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="block pl-4 text-gray-600 hover:text-blue-500"
                    >
                      {item.label}
                    </NavLink>
                  ))}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className="block text-gray-700 hover:text-blue-600"
              >
                {link.label}
              </NavLink>
            )
          )}
          <Link to="/login" className="block text-gray-700 hover:text-blue-600">
            Login
          </Link>
          <Link to="/signup" className="block text-blue-600 font-semibold hover:underline">
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
