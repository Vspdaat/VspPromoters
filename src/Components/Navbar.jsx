import React, { useState, useEffect } from 'react';
import logo from '../images/vsplogo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={` top-0 left-0 bg-[#041423] text-[#F8CF5E] w-full  shadow-md pt-4 pb-9`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-semibold text-xl">VSP Promoters</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-lg text-[#FFFFFF]">About Us</a>
          <a href="#sell" className="text-lg text-[#FFFFFF]">Sell Property</a>
          <a href="#listings" className="text-lg text-[#FFFFFF]">Listings</a>
          <a href="#contact" className="text-lg bg-gradient-radial from-[#F7E27B] to-[#B7832F] text-black px-4 py-2 rounded-full inline-block">Contact</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-yellow-500 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-6 space-y-3">
          <a href="#about" className="block text-white transition-colors" onClick={handleMenuClick}>About Us</a>
          <a href="#sell" className="block text-white transition-colors" onClick={handleMenuClick}>Sell Property</a>
          <a href="#listings" className="block text-white transition-colors" onClick={handleMenuClick}>Listings</a>
          <a href="#contact" className="text-lg bg-gradient-radial from-[#F7E27B] to-[#B7832F] text-black px-4 py-2 rounded-full block" onClick={handleMenuClick}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
