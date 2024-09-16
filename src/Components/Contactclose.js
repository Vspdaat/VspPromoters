import React, { useState } from 'react';
  import connectImage from '../images/roof.png';

  const Contactclose = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handlers for form inputs
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
      onClose(); // Close the form after submission
    };

    return (
      <>
        <style>
          {`
            input:-webkit-autofill,
            textarea:-webkit-autofill {
              background-color: #122638 !important;
              color: white !important;
              -webkit-box-shadow: 0 0 0px 1000px #122638 inset;
              box-shadow: 0 0 0px 1000px #122638 inset;
              -webkit-text-fill-color: white !important;
            }
          `}
        </style>

        <div className="bg-[#041423] h-screen flex items-center justify-center overflow-y-auto  p-4 md:p-0">
          {/* Left Image Section */}
          <div className="w-full bg-[#041423] rounded-lg shadow-lg flex flex-col md:flex-row md:gap-x-18 h-full max-h-[90vh]">
            <div className="relative flex flex-1 h-full rounded-3xl ">
              <img
                src={connectImage}
                alt="Property"
                className="w-full h-full md:h-full object-cover rounded-3xl "
              />
              <div className="absolute top-0 left-0 p-6 md:p-8 rounded-lg">
                <h2 className="text-xl md:text-4xl text-white">Let's Connect!</h2>
                <p className="text-gray-300 text-sm md:text-lg mt-2">
                  To find you a new dream property
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="relative flex-1 p-4 bg-[#122638] md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl md:rounded-tl-3xl flex flex-col justify-between md:p-16">
              <form
                className="h-full flex flex-col justify-between"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    className="text-gray-200 block md:text-lg md:font-medium mb-2 text-left text-md font-medium font-[500]"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your Full Name"
                    className="w-full px-4 py-2 md:py-3 bg-[#122638] text-white border border-gray-350 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 md:text-[20px]"
                  />
                </div>
                <div>
                  <label
                    className="text-gray-200 block text-lg font-medium mb-2 text-left md:text-[20px] md:font-[500]"
                    htmlFor="email"
                  >
                    Email
                  </label>
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
                  <label
                    className="text-gray-200 block text-lg font-medium mb-2 text-left md:text-[20px] md:font-[500]"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Enter your Message"
                    className="w-full h-28 px-4 py-3 bg-[#122638] text-white border border-gray-350 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="py-2.5 px-10 bg-gradient-to-b from-[#F7E27B] to-[#B7832F] text-black font-semibold text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600 shadow-lg self-start"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={onClose}
                className="absolute top-[-16rem]  right-[1rem] md:top-4 md:right-4 text-black bg-gradient-radial from-[#F7E27B] to-[#B7832F] hover:bg-yellow-900 rounded-full w-9 h-9 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                <span className="text-xl font-bold">X</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Contactclose;