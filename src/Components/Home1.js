import {React,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json'; // Ensure this path is correct
import Image from '../images/image.png'; // Import sample image if needed for fallback or placeholder
import layer from '../images/layer.png';
import area from '../images/area.png';
import buy from '../images/buy.png';
import sell from '../images/sell.png';
import legal from '../images/legal.png';
import agent from '../images/agent.png';
import FrequentlyAsked from './FrequentlyAsked';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Navtrans from './Navtrans';
import Locations from './Locations';
import Intrestform from './InterestForm';

const Home1 = () => {
  const { title } = useParams(); // Get the title from the URL
  const site = data.sites.find((site) => site.title === title);
  const location = data.locations.find((location) => location.title === title);

   // Use site if found in sites, otherwise use location
   const selectedData = site || location;

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   if (!selectedData) {
     return <div className="bg-[#041423] text-white font-sans">Site or Location not found</div>; // Display error if neither found
   }

 

  return (
    <div className="bg-[#041423] text-white  "> {/* Adjust top padding to account for Navbar height */}
   
    {/* Hero Section */}
<section className="relative bg-[#041423]">
  <Navtrans />
  <div>
    <img
      src={Image}
      alt={selectedData.title}
      className="rounded-lg w-full h-[100vh] object-cover  md:h-[100vh]" // Adjust height based on screen size
    />
    <div className=' px-4 md:px-20'>
    <div className="relative z-10 p-6 lg:p-12 rounded-3xl shadow-lg  bg-[#041423] bg-opacity-50 backdrop-blur-lg opacity-100 -mt-80 min-h-[500px] md:min-h-[600px] border border-gray-300">
      <div className="text-center text-white">
        <h1 className="text-[#F8CF5E] text-[40px] font-semibold text-[34px] mb-1">{selectedData.title}</h1>
        <p className="text-[20px]  md:text-[24px] font-normal text-[#FFFFFF]">{selectedData.location}</p>
        <p className="text-gray-200 text-[16px] md:text-[20px] font-normal mt-6 md:mt-12">{selectedData.description}</p>
      

    </div>
    

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px] mt-12 md:mt-16 text-center text-white h-auto items-stretch justify-center">
        {/* Plot Price */}
        <div className="bg-[#122638] py-6  rounded-[15px] shadow-md">
          <img src={layer} alt="Plot Price Logo" className="mx-auto w-[50px] h-[50px] md:w-[50px] md:h-[50px] " />
          <div className="text-[16px] md:text-[20px] mt-3">{selectedData.plotPriceTitle || 'Plot Price'}</div>
          <div className="text-[#F8CF5E] text-[20px] md:text-[24px] font-semibold mt-4">{selectedData.plotPrice}</div>
        </div>

        {/* Square Feet */}
        <div className="bg-[#122638] py-6 rounded-[15px] shadow-md">
          <img src={layer} alt="Square Feet Logo" className="mx-auto w-[50px] h-[50px] md:w-[50px] md:h-[50px] " />
          <div className="text-[16px] md:text-[20px] mt-3">{selectedData.squareFeetTitle || 'Square Feet'}</div>
          <div className="text-[#F8CF5E] text-[20px] md:text-[24px] font-semibold mt-4">{selectedData.squareFeet}</div>
        </div>

        {/* RERA ID */}
        <div className="bg-[#122638] py-6  rounded-[15px] shadow-md">
          <img src={layer} alt="RERA ID Logo" className="mx-auto w-[50px] h-[50px] md:w-[50px] md:h-[50px] " />
          <div className="text-[16px] md:text-[20px] mt-3">{selectedData.reraIdTitle || 'RERA ID'}</div>
          <div className="text-[#F8CF5E] text-[20px] md:text-[24px] font-semibold mt-4">{selectedData.reraId}</div>
        </div>

        {/* Plot Size */}
        <div className="bg-[#122638] py-6 rounded-[15px] shadow-md">
          <img src={layer} alt="Plot Size Logo" className="mx-auto w-[50px] h-[50px] md:w-[50px] md:h-[50px] " />
          <div className="text-[16px] md:text-[20px] mt-3">{selectedData.plotSizeTitle || 'Plot Size'}</div>
          <div className="text-[#F8CF5E] text-[20px] md:text-[24px] font-semibold mt-4">{selectedData.plotSize}</div>
        </div>

        {/* Year Built */}
        <div className="bg-[#122638] py-6 rounded-[15px] shadow-md">
          <img src={layer} alt="Year Built Logo" className="mx-auto w-[50px] h-[50px] md:w-[50px] md:h-[50px] " />
          <div className="text-[16px] md:text-[20px] mt-3">{selectedData.yearBuiltTitle || 'Year Built'}</div>
          <div className="text-[#F8CF5E] text-[20px] md:text-[24px] font-semibold mt-4">{selectedData.yearBuilt}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
<div className=' px-4 md:px-20'>
      {/* Features Section */}
      <section className="bg-[#041423]    pt-16    ">
        <div className="  ">
          <p className="md:text-[20px] text-[18px] font-normal text-center w-full mb-[40px]">{selectedData.description}</p>
          <div className="grid md:grid-cols-2 gap-[60px] ">
            <img
              src={area}
              alt="A neighborhood with rows of identical modern houses."
              className="rounded-xl mt-10 "
            />
            <div className="flex flex-col justify-center text-[#FFFFFF] ">
              <ul className="list-disc space-y-2 md:text-[16px] text:[14px] font-normal ml-[23px]">
                {selectedData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="bg-[#041423]   pt-16 ">
        <div className=" ">
          <h2 className="text-center text-4xl text-[#FFFFFF]">Price Table</h2>
          <div className=" min-h-[200px]  mt-6 rounded-[30px] bg-[#122638]">
            {/* Placeholder for price table */}
          </div>
        </div>
      </section>

      {/* Plot Features Section */}
      <section className="bg-[#041423]   pt-16 ">
      <div className="flex flex-col grid-cols-1 sm:grid-cols-2 md:grid-cols-4  bg-[#020B14]  pt-[40px] pb-[38px] rounded-3xl">
    <div>
      <h2 className="md:text-[32px] text-[28px] font-medium  text-center mb-[40px]">Plot Features</h2>
    </div>
    <div className='flex flex-row iphone-flex-col gap-[70px] px-8'>
      {[
        { title: 'Buy Property', image: buy },
        { title: 'Sell Property', image: sell },
        { title: 'Legal Services', image: legal },
        { title: 'Find Agent', image: agent },
      ].map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center gap-2 "
        >
          <img src={service.image} alt={service.title} className="w-[98px] h-[100px] mb-[10px] object-contain" />
          <h3 className="text-xl text-[#F8CF5E] mb-2 md:text-[20px] font-[600]">{service.title}</h3>
          <p className="text-gray-400   md:text-[16px] font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
        </div>
      ))}
    </div>
  </div>
      </section>
      {/* <section className='bg-[#041423]'>
        <FrequentlyAsked />
      </section> */}

      <section >
        <div >
         <Intrestform/>
        </div>
      </section>
      
      </div>
      <Footer/>
    </div>
    
  );
};

export default Home1;
