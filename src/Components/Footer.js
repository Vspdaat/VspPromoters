// import React from "react";
// import logo from "../images/vsplogo.png";

// const Footer = () => {
//   return (
//     <div className="bg-[#000b13] text-gray-300 px-12 py-12 ">
//       <div className="max-w-7xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         <div className="flex flex-col" >
//           <div className="flex items-center space-x-2">
//             <img
//               src={logo} // Replace with the actual path to your logo
//               alt="VSP Promoters Logo"
//               className="w-8 h-8"
//             />
//             <h2 className="text-xl  text-yellow-400">VSP Promoters</h2>
//           </div>
//           <p className="mt-4 md:text-left text-sm text-center">
//   Lorem ipsum dolor sit amet,consectetur adipiscing.Lorem ipsum dolor sit amet,consectetur adipiscing.
// </p>

//         </div>
//         <div className="flex flex-col items-center  md:flex-col">
//           <h3 className="text-lg font-semibold text-white">About Us</h3>
//           <ul className="mt-4 space-y-2 text-sm">
//             <li>Lorem Ipsum</li>
//             <li>Lorem Ipsum</li>
//             <li>Lorem Ipsum</li>
//           </ul>
//         </div>
//         <div className="flex flex-col items-center  md:flex-col">
//           <h3 className="text-lg font-semibold text-white">About Us</h3>
//           <ul className="mt-4 space-y-2 text-sm">
//             <li>Lorem Ipsum</li>
//             <li>Lorem Ipsum</li>
//             <li>Lorem Ipsum</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import logo from "../images/vsplogo.png";

const Footer = () => {
  return (
    <div className="bg-[#000b13] text-gray-300 px-12 py-16">
      <div className="w-full flex flex-col md:flex-row md:pl-32  gap-20">
        <div className="flex flex-col">
          <div className="flex items-center text-center space-x-2">
            <img
              src={logo} // Replace with the actual path to your logo
              alt="VSP Promoters Logo"
              className="w-8 h-8"
            />
            <h2 className="md:text-[32px] text-2xl font-[500] text-[#F8CF5E]">VSP Promoters</h2>
          </div>
          <p className="mt-4 text-[16px] font-[400] text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing.<br/> Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[20px] font-[500] text-white">About Us</h3>
          <ul className="mt-4 space-y-2 text-[16px] font-[400]">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-[20px] font-[500] text-white">About Us</h3>
          <ul className="mt-4 space-y-2 text-[16px] font-[400]">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;