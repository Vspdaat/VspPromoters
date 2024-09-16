import React, { useState } from 'react';
import map from '../images/vspmap.jpeg';
import Contactclose from './Contactclose';
import { FaMapMarkerAlt } from "react-icons/fa";

function MapSection() {
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [formData, setFormData] = useState(null); // Store form data after submission
  const [showContactForm, setShowContactForm] = useState(false); // Toggle for contact form

  // Format the slider value for display
  const formatSliderValue = (value) => {
    if (value <= 100) {
      return `${value}L`; // 1 to 100 Lakhs
    } else if (value > 100 && value <= 110) {
      const croreValue = (value - 100); // Mapping 101 to 110 as 1Cr to 10Cr
      return `${croreValue}Cr`; // 1 to 10 Crores
    } else {
      const tencroreValue = ((value - 110) * 10); // Mapping above 110 as 10Cr+
      return `${tencroreValue}Cr`;
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    const data = {
      propertyType: selectedPropertyType,
      location: location,
      budget: sliderValue
    };
    setFormData(data); // Store the data in formData
    setShowContactForm(true); // Show the contact form after submission
  };

  // Handle close of the Contactclose form and reset fields
  const handleFormClose = () => {
    // Reset form fields to default values
    setSelectedPropertyType('');
    setLocation('');
    setSliderValue(50);
    setShowContactForm(false); // Close the contact form
  };

  return (
    <div className="relative">
      {/* Blur background when the contact form is shown */}
      <div className={`bg-[#041423] text-white pb-4 flex items-center flex-col ${showContactForm ? 'blur-md' : ''}`}>
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#122638] h-full md:h-[389px] rounded-[41px] w-full">
          {/* Left Section: Property Type & Inputs */}
          <div className="w-full md:w-[50%] p-6 md:p-8">
            {/* Property Type Selector */}
            <div>
              <label className="text-white text-md text-[20px] flex">Choose Property Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                {['House', 'Apartment', 'Office', 'Land'].map((type) => (
                  <button
                  key={type}
                  className={`py-2 px-3 border border-white  rounded-[27px] ${
                    selectedPropertyType === type 
                      ? 'bg-gradient-to-b from-[#F7E27B] to-[#B7832F] text-black'
                      : 'bg-[#122638] text-white  '
                  }`}
                  onClick={() => setSelectedPropertyType(type)}
                >
                  {type}
                </button>
                ))}
              </div>
            </div>

            {/* Location Input */}
            {/* Location Input */}
<div className="mt-4 ">
  <label className="text-[#FFFFFF] text-[20px] font-medium flex">Enter Location</label>
  <div className="flex flex-col md:flex-row  gap-2">
    <input
      type="text"
      placeholder="Anna Nagar, Chennai"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="border mt-[8px] border-white rounded-[27px] h-[40px] w-[250px] md:w-[284px] pl-[12px] bg-[#122638] text-white"
    />
    
    {/* Adjust this section for proper alignment on mobile */}
    <div className="flex flex-row items-center gap-2">
      <span className="text-gray-400 text-[16px] font-medium cursor-pointer underline">or Choose in Map</span>
      <FaMapMarkerAlt className="text-white text-[20px]" />
    </div>
  </div>
</div>

<div className="flex items-center justify-end w-full mt-4 md:w-[50%] md:hidden">
            <img
              src={map}
              alt="Map or Property Image"
              className="rounded-[41px] shadow-lg h-auto w-full md:w-[542px] md:h-[348px]"
            />
          </div>
            {/* Budget Slider */}
            <div className="mt-4">
              <label className="flex text-[#FFFFFF] text-[20px] font-medium">Your Budget</label>
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-[454px]">
                  <input
                    type="range"
                    min="1"
                    max="120"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(e.target.value)}
                    className="w-full mt-2 range-slider"
                  />
                  <div className="flex justify-between text-white mt-2">
                    <span>1L</span>
                    <span>1Cr</span>
                    <span>10Cr</span>
                    <span>100Cr</span>
                  </div>
                </div>
                <div className="flex items-center w-[34%] justify-between">
                  <div className="mt-2 lg:mt-0 lg:ml-4 text-right w-full">
                    <input
                      type="text"
                      value={`Rs. ${formatSliderValue(sliderValue)}`}
                      readOnly
                      className="w-[222px] p-2 border border-white rounded-[27px] bg-[#122638] text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex justify-start">
                <button
                  onClick={handleSubmit}
                  className="py-2 px-3 text-black rounded-[27px] bg-gradient-to-b from-[#F7E27B] to-[#B7832F] hover:text-black w-[130px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Map/Image */}
          <div className="hidden md:flex items-center justify-end w-full md:w-[50%]">
            <img
              src={map}
              alt="Map or Property Image"
              className="rounded-[41px] shadow-lg h-auto w-full md:w-[542px] md:h-[348px]"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Contactclose onClose={handleFormClose} />
        </div>
      )}
    </div>
  );
}

export default MapSection;
