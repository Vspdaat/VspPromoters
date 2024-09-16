// import React from 'react';
// import abc from '../images/abc.png';
// const Locations = () => {
//     return (
//         <div className="bg-[#041423] text-white pt-16 pb-4 px-12">
//             <div className="w-full">
//                 <h2 className="text-3xl  text-center mb-8">
//                     Projects In Nearby Locations
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {Array(8).fill(null).map((_, index) => (
//   <div
//     key={index}
//     className="bg-[#122638] p-6 rounded-lg flex flex-row items-center text-center"
//   >
//     <div className="text-yellow-400 text-2xl mb-2 mr-4">
//       <img src={abc}></img></div> {/* Placeholder for icon */}
//     <div>
//       <h3 className=" text-md text-yellow-500">ABC Apartments</h3>
//       <p className="text-gray-400 text-xs">Chennai, Tamil Nadu</p>
//     </div>
//   </div>
// ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Locations;


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import data from '../data/data'; // Import JSON data
import abc from '../images/abc.png'; // Import image

const Locations = () => {
  return (
    <div className="bg-[#041423] text-white pt-16 pb-4 ">
      <div className="w-full">
        <h2 className="md:text-[32px] text-[28px] text-center mb-10">Projects In Nearby Locations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {data.locations.map((location) => (
            <div key={location.id} className="relative rounded-lg overflow-hidden">
              {/* Use Link to route to the specific location based on title */}
              <Link to={`/site/${location.title}`}>
                <div className="bg-[#122638] px-[39px] py-[33px] rounded-[30px] flex flex-row items-start cursor-pointer">
                  <img src={abc} alt="Icon" className="text-[#F8CF5E] text-2xl  mr-7" />
                  <div  className='flex flex-col items-start'>
                    <h3 className="md:text-[20px] text-[16px] font-semibold text-[#F8CF5E]">{location.title}</h3>
                    <p className="text-[#FFFFFF] font-normal  md:text-[16px] text-[12px] ">{location.location}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;