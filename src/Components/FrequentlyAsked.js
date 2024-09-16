import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import FontAwesome icons

const FrequentlyAsked = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section className="bg-[#041423] px-4 pb-4 pt-16 sm:px-12">
      <div className=" ">
        <h2 className="text-center text-3xl text-white-400 mb-6">Frequently Asked</h2>
        <div className="space-y-4">
          {/* Dropdown 1 */}
          <div className="bg-gray-800 p-4 rounded-3xl cursor-pointer flex justify-between items-center" onClick={() => toggleDropdown(1)}>
            <p className="text-lg text-left px-5">ABC Apartments</p>
            {openDropdown === 1 ? <FaChevronUp className="text-white-400" /> : <FaChevronDown className="text-white-400" />}
          </div>
          {openDropdown === 1 && (
            <div className="bg-gray-700 p-4 mt-2 rounded-md">
              <p>Details about ABC Apartments...</p>
            </div>
          )}

          {/* Dropdown 2 */}
          <div className="bg-gray-800 p-4 rounded-3xl cursor-pointer flex justify-between items-center" onClick={() => toggleDropdown(2)}>
            <p className="text-lg text-left px-5">ABC Apartments</p>
            {openDropdown === 2 ? <FaChevronUp className="text-yellow-400" /> : <FaChevronDown className="text-white-400" />}
          </div>
          {openDropdown === 2 && (
            <div className="bg-gray-700 p-4 mt-2 rounded-md">
              <p>Details about ABC Apartments...</p>
            </div>
          )}

          {/* Dropdown 3 */}
          <div className="bg-gray-800 p-4 rounded-3xl cursor-pointer flex justify-between items-center" onClick={() => toggleDropdown(3)}>
            <p className="text-lg text-left px-5">ABC Apartments</p>
            {openDropdown === 3 ? <FaChevronUp className="text-yellow-400" /> : <FaChevronDown className="text-white-400" />}
          </div>
          {openDropdown === 3 && (
            <div className="bg-gray-700 p-4 mt-2 rounded-md">
              <p>Details about ABC Apartments...</p>
            </div>
          )}

          {/* Dropdown 4 */}
          <div className="bg-gray-800 p-4 rounded-3xl cursor-pointer flex justify-between items-center" onClick={() => toggleDropdown(4)}>
            <p className="text-lg text-left px-5">ABC Apartments</p>
            {openDropdown === 4 ? <FaChevronUp className="text-yellow-400" /> : <FaChevronDown className="text-white-400" />}
          </div>
          {openDropdown === 4 && (
            <div className="bg-gray-700 p-4 mt-2 rounded-md">
              <p>Details about ABC Apartments...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAsked;
