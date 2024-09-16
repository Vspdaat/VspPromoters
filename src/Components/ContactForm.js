
// import React, { useState } from 'react';
// import connectImage from '../images/roof.jpeg';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your submission logic here
//   };

//   return (
//     <div className="bg-[#041423] h-full flex items-center justify-center px-12 pb-4 pt-16">
//       <div className="w-full   bg-[#041423] rounded-lg shadow-lg flex flex-col md:flex-row md:gap-x-18">
//         {/* Left Image Section */}
//         <div className="relative flex flex-col rounded-3xl w-1/2 h-full ">
//           <img 
//             src={connectImage} 
//             alt="Property"
//             className="w-full  object-cover rounded-3xl "
//           />
//           <div className="absolute top-0 left-0 p-8 rounded-3xl">
//             <h2 className="text-4xl  text-white">Let's Connect!</h2>
//             <p className="text-gray-300 text-lg mt-2">To find you a new dream property</p>
//           </div>
//         </div>
//         <div className="md:bg-[#041423] w-5"></div>

//         {/* Form Section */}
//         <div className="w-1/2 h-full p-8 bg-[#122638] md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl md:rounded-tl-3xl ">
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="text-gray-200 block text-lg font-medium mb-2 text-left" htmlFor="name">Name</label>
//               <input 
//                 type="text" 
//                 id="name"
//                 value={name}
//                 onChange={handleNameChange}
//                 placeholder="Enter your Full Name" 
//                 className="w-full px-4 py-3 bg-[#122638] text-white border border-gray-350 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//             <div>
//               <label className="text-gray-200 block text-lg font-medium mb-2 text-left" htmlFor="email">Email</label>
//               <input 
//                 type="email" 
//                 id="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 placeholder="Enter your Email ID" 
//                 className="w-full px-4 py-3 bg-[#122638] text-white border border-gray-350 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//             <div>
//               <label className="text-gray-200 block text-lg font-medium mb-2 text-left" htmlFor="message">Write Us</label>
//               <textarea 
//                 id="message"
//                 value={message}
//                 onChange={handleMessageChange}
//                 placeholder="Your message here..." 
//                 className="w-full h-28 px-4 py-3 bg-[#122638] text-white border border-gray-350 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
//               ></textarea>
//             </div>
//             {/* Align the submit button to the left */}
//             <button 
//               type="submit" 
//               className="py-2.5 px-10 bg-gradient-to-b from-yellow-300 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600 shadow-lg self-start"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';
import connectImage from '../images/roof.png';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <div className="bg-[#041423]  h-full flex items-center justify-center  pb-12 pt-[80px] md:h-[700px] ">
      <div className="w-full bg-[#041423] rounded-lg shadow-lg flex flex-col md:flex-row md:gap-x-18 h-full">
        {/* Left Image Section */}
        <div className="relative flex flex-1 min-h-full rounded-3xl">
          <img 
            src={connectImage} 
            alt="Property"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute top-0 left-0 p-8 rounded-3xl">
            <h2 className="text-4xl text-white">Let's Connect!</h2>
            <p className="text-gray-300 text-lg mt-2">To find you a new dream property</p>
          </div>
        </div>
        <div className="md:bg-[#041423] w-5"></div>

        {/* Form Section */}
        <div className="flex-1  p-4 bg-[#122638] md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl md:rounded-tl-3xl flex flex-col justify-between md:p-16">
          <form className="h-full flex flex-col justify-between" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-200 block text-lg font-medium mb-2 text-left md:text-[20px] font-[500]" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your Full Name" 
                className="w-full px-4 py-3 bg-[#122638] text-white border border-gray-350 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 md:text-[20px]"
              />
            </div>
            <div>
              <label className="text-gray-200 block text-lg font-medium mb-2 text-left md:text-[20px] md:font-[500]" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your Email ID" 
                className="w-full px-4 py-3 bg-[#122638] text-white border border-gray-350 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="text-gray-200 block text-lg font-medium mb-2 text-left md:text-[20px] md:font-[500]" htmlFor="message">Write Us</label>
              <textarea 
                id="message"
                value={message}
                onChange={handleMessageChange}
                placeholder="Your message here..." 
                className="w-full h-28 px-4 py-3 bg-[#122638] text-white border border-gray-350 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
              ></textarea>
            </div>
            {/* Align the submit button to the left */}
            <button 
              type="submit" 
              className="py-2.5 px-10 bg-gradient-to-b from-[#F7E27B] to-[#B7832F] text-black font-semibold text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600 shadow-lg self-start"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
