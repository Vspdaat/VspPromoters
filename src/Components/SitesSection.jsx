// import React from 'react';
// import apartmentImage from '../images/apartment.jpeg';
// import House from '../images/housevsp.jpeg';
// import office from '../images/office.jpeg';
// import land from '../images/land.jpeg';
// import buy from '../images/buy.png';
// import sell from '../images/sell.png';
// import legal from '../images/legal.png';
// import agent from '../images/agent.png';



// const SitesSection = () => {
//     return (
//         <div className="bg-[#041423] text-white px-12 pt-16 pb-4 ">
//             <div className="w-full  ">
//                 {/* Visit Our Sites Section */}
//                 <div className="text-center mb-12 ">
//                     <h2 className="text-3xl  mb-8">Visit Our Sites</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                         {[
//                             { title: 'Apartment', image: apartmentImage },
//                             { title: 'House Estate', image: House },
//                             { title: 'Office Space', image: office },
//                             { title: 'Land Area', image: land },
//                         ].map((site, index) => (
//                             <div
//                                 key={index}
//                                 className="relative rounded-lg overflow-hidden "
//                             >
//                                 <img
//                                     src={site.image}
//                                     alt={site.title}
//                                     className="w-full h-48 object-cover"
//                                 />
//                                 <div className="absolute inset-0  flex items-center justify-center">
//                                     <h3 className="text-lg  bg-black p-[6px]  mb-[-21px] rounded-[30px] mt-[98px] w-[87%]">{site.title}</h3>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* What Services Section */}
//                 <div className="text-center flex flex-col">
//   <div className="flex flex-col grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-[#122638] p-6 rounded-3xl">
//     <div>
//       <h2 className="text-3xl   mb-8">What services do we provide?</h2>
//     </div>
//     <div className='flex flex-row iphone-flex-col'>
//       {[
//         { title: 'Buy Property', image: buy },
//         { title: 'Sell Property', image: sell },
//         { title: 'Legal Services', image: legal },
//         { title: 'Find Agent', image: agent },
//       ].map((service, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center text-center p-4"
//         >
//           <img src={service.image} alt={service.title} className="w-16 h-16 mb-4 object-contain" />
//           <h3 className="text-xl text-[#f9d32c] mb-2">{service.title}</h3>
//           <p className="text-gray-400">
//             Lorem ipsum dolor sit amet, consectetur adipisicing
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
//             </div>
//         </div>
//     );
// };

// export default SitesSection;



// // import React from 'react';
// // import data from '../data/data.json'; // Adjust path if necessary

// // const SitesSection = () => {
// //     const { sites, services } = data;

// //     return (
// //         <div className="bg-[#041423] text-white px-12 pt-16 pb-4 ">
// //             <div className="w-full">
// //                 {/* Visit Our Sites Section */}
// //                 <div className="text-center mb-12">
// //                     <h2 className="text-3xl mb-8">Visit Our Sites</h2>
// //                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //                         {sites.map((site, index) => (
// //                             <div
// //                                 key={index}
// //                                 className="relative rounded-lg overflow-hidden"
// //                             >
// //                                 <img
// //                                     src={site.image}
// //                                     alt={site.title}
// //                                     className="w-full h-48 object-cover"
// //                                 />
// //                                 <div className="absolute inset-0 flex items-center justify-center">
// //                                     <h3 className="text-lg bg-black p-[6px] mb-[-21px] rounded-[30px] mt-[98px] w-[87%]">{site.title}</h3>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>

// //                 {/* What Services Section */}
// //                 <div className="text-center flex flex-col">
// //                     <div className="flex flex-col grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-[#122638] p-6 rounded-3xl">
// //                         <div>
// //                             <h2 className="text-3xl mb-8">What services do we provide?</h2>
// //                         </div>
// //                         <div className='flex flex-row iphone-flex-col'>
// //                             {services.map((service, index) => (
// //                                 <div
// //                                     key={index}
// //                                     className="flex flex-col items-center text-center p-4"
// //                                 >
// //                                     <img src={service.image} alt={service.title} className="w-16 h-16 mb-4 object-contain" />
// //                                     <h3 className="text-xl text-[#f9d32c] mb-2">{service.title}</h3>
// //                                     <p className="text-gray-400">
// //                                         Lorem ipsum dolor sit amet, consectetur adipisicing
// //                                     </p>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SitesSection;

import React from 'react';
import { Link } from 'react-router-dom';
import apartmentImage from '../images/apartment.png';
import House from '../images/house.png';
import office from '../images/office.png';
import land from '../images/land.png';
import buy from '../images/buy.png';
import sell from '../images/sell.png';
import legal from '../images/legal.png';
import agent from '../images/agent.png';

const SitesSection = () => {
  return (
    <div className="bg-[#041423] text-white  pt-16 pb-4">
      <div className="w-full">
        <div className="text-center mb-[60px]">
          <h2 className="md:text-[32px] text-[28px] font-medium mb-10">Visit Our Sites</h2>
          <div className="flex flex-col  gap-[20px] md:flex-row ">
            {[
              { title: 'Apartment', image: apartmentImage },
              { title: 'House Estate', image: House },
              { title: 'Office Space', image: office },
              { title: 'Land Area', image: land },
            ].map((site, index) => (
              <div key={index} className="relative rounded-[30px] overflow-hidden w-full">
                <Link to={`/site/${site.title}`}>
                <div className='h-[261px] w-full md:w-full'>
                  <img
                    src={site.image}
                    alt={site.title}
                    className="object-cover h-full w-full"
                  /></div>
                  <div className="absolute inset-0 flex items-center justify-center px-[15px] py-[11px]">
                    <h3 className="text-[20px] font-medium bg-black p-[6px] mb-[-21px] rounded-[30px] mt-44 w-[265px] ">
                      {site.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
            
          </div>
        </div>
        <div className="text-center flex flex-col ">
  <div className="flex flex-col grid-cols-1 sm:grid-cols-2 md:grid-cols-4  bg-[#122638]  pt-[40px] pb-[38px] rounded-3xl">
    <div>
      <h2 className="md:text-[32px] text-[28px] font-medium  mb-[40px]">What services do we provide?</h2>
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
</div>
            
      </div>
    </div>
  );
};

export default SitesSection;