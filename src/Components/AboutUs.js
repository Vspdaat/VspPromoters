import React from 'react';
import logo from '../images/logovs.png';

const AboutUs = () => {
  return (
    <div className="bg-[#041423] text-white pt-16 pb-4 ">
      <div className="bg-[#000b13] border-2 border-[#F7E27B] rounded-xl md:px-[70px] md:py-[60px] p-[45px]">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Left Section: Text */}
          <div className="md:pl-[59px] md:w-1/2 text-left"> {/* Added text-left for consistent alignment */}
            <h2 className="text-3xl md:text-4xl  mb-6 md:text-[32px] font-[500]">
              About Us
            </h2>
            <p className="text-[#F7E27B] text-4xl font-bold mb-6 md:text-[40px] font-[700]">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <p className="mb-6 md:text-[16px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum
              dolor sit amet, consectetur adipisicing
            </p>
            <button className="w-[188px] bg-transparent border border-[#F7E27B] text-[#F7E27B] py-2 px-4 rounded-[40px] hover:bg-gradient-radial from-[#F7E27B] to-[#B7832F] hover:text-gray-900 transition-colors md:text-">
              Know more
            </button>
          </div>

          {/* Right Section: Icon */}
          <div className=" md:w-1/2  flex justify-center md:pl-[117px] md:pr-[59px]">
            <img
              src={logo} // Replace with your local image path
              alt="Logo"
              className="w-48 md:w-64"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-wrap justify-around mt-[87px] text-center">
          {[
            { label: 'Years of Experience', value: '25+' },
            { label: 'Square Feet', value: '2C+' },
            { label: 'Projects', value: '35+' },
            { label: 'Happy Families', value: '500+' },
          ].map((stat, index) => (
            <div key={index} className="m-4">
              <h3 className="text-3xl  font-bold text-[#F8CF5E]  md:text-[60px] font-semibold">{stat.value}</h3>
              <p className="text-sm md:text-xl mt-5 md:text-[16px] font-[400]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;