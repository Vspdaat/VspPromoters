import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Keep useNavigate for redirecting to the root
import logo from '../images/vsplogo.png';

const Navtrans = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    // Redirect to the homepage ("/") and append the section hash
    navigate(`/#${sectionId}`);
  };

  const handleLogoClick = () => {
    navigate(`/`); // Navigate to the home page
  };

  return (
    <nav className="bg-transparent text-[#F8CF5E] px-[20px] pb-5 absolute top-[30px] h-[48px] w-full z-50 shadow-none space-x-auto md:px-[100px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={handleLogoClick} className="flex items-center focus:outline-none">
            <img src={logo} alt="Logo" className="h-9 w-8 mr-2" />
            <span className="font-semibold text-[26px] text-white">VSP Promoters</span>
          </button>
        </div>
        <div className="hidden md:flex space-x-[45px]">
          <button onClick={() => handleMenuClick('about')} className="font-normal text-lg text-white">
            About Us
          </button>
          <button onClick={() => handleMenuClick('sell')} className="font-normal text-lg text-white">
            Sell Property
          </button>
          <button onClick={() => handleMenuClick('listings')} className="font-normal text-lg text-white">
            Listings
          </button>
          <button onClick={() => handleMenuClick('contact')} className="font-medium text-lg bg-gradient-radial from-[#F7E27B] to-[#B7832F] text-black px-4 py-2 rounded-full">
            Contact
          </button>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-yellow-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 px-6 space-y-3">
          <button onClick={() => handleMenuClick('about')} className="font-normal text-lg text-white">
            About Us
          </button>
          <button onClick={() => handleMenuClick('sell')} className="font-normal text-lg text-white">
            Sell Property
          </button>
          <button onClick={() => handleMenuClick('listings')} className="font-normal text-lg text-white">
            Listings
          </button>
          <button onClick={() => handleMenuClick('contact')} className="font-medium text-lg bg-gradient-radial from-[#F7E27B] to-[#B7832F] text-black px-4 py-2 rounded-full">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navtrans;
