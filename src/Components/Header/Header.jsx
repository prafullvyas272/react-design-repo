import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-red-700 shadow-md fixed w-full z-10 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 text-xl font-bold text-blue-600">
              Logo
            </div>

            <div className="hidden md:flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>
              <a href="/services" className="text-gray-700 hover:text-blue-500">Services</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-500 focus:outline-none"
              >
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
            <a href="/" className="block text-gray-700 hover:text-blue-500">Home</a>
            <a href="/about" className="block text-gray-700 hover:text-blue-500">About</a>
            <a href="/services" className="block text-gray-700 hover:text-blue-500">Services</a>
            <a href="/contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
          </div>
        )}
      </nav>
      {/* Add padding to prevent content overlap with fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;