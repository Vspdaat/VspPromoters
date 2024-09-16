import React from "react";
import star from '../images/vspstar.png'
import person6 from '../images/person6.png'
import person5 from '../images/person5.png'
import person4 from '../images/person4.png'
import person3 from '../images/person3.png'
import person2 from '../images/person2.png'
import person1 from '../images/person1.png'
import person7 from '../images/person7.png'

const testimonials = [
  {
    name: "Reed Richards",
    image: person1,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse "
  },
  {
    name: "Susan Storm",
    image: person2,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse "
  },
  {
    name: "Johnny Storm",
    image: person3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  },
  {
    name: "Ben Grimm",
    image: person4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  },
  {
    name: "Victor Von Doom",
    image: person5,
    text: "Lorem ipsum dolor sit amet,  sed do eiu  , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  {
    name: "Alicia Masters",
    image: person7,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse "
  },
  {
    name: "Alicia Masters",
    image: person6,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse "
  }
];

const TestimonialCard = ({ name, image, text }) => (
  <div className="bg-[#000b13] text-white rounded-[30px] p-5 shadow-md w-full h-full md:w-[450px] ">
    <div className="flex items-center mb-4">
      <img className="w-[60px] h-[60px] rounded-[20px] mr-4" src={image} alt={`${name}'s avatar`} />
      <div>
        <h3 className="md:text-[24px] text-[20px] font-semibold">{name}</h3>
        <div className="flex items-center justify-between w-[73%]">
  {Array(5).fill().map((_, i) => (
    <img
      key={i}
      src={star}
      className={i !== 4 ? 'mr-[3px]' : ''} // Apply margin-right to all except the last star
      alt="star"
    />
  ))}
</div>

      </div>
    </div>
    <p className="text-gray-400 text-start text-[20px]">{text}</p>
  </div>
);

const Testimonials = () => (
  <div className="bg-[#041423] pt-16 pb-4  ">
    <h2 className="md:text-[32px] text-[28px] text-center text-white mb-8">
      Listen to <span className="italic">What Our Customers Say!</span>
    </h2>
    
    {/* Flexbox container with columns */}
    <div className="flex  flex-col gap-6 justify-center  md:flex-row  ">
      {/* First column (2 testimonials) */}
      <div className="flex flex-col gap-6">
        {testimonials.slice(0, 2).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {/* Second column (3 testimonials) */}
      <div className="flex flex-col gap-6">
        {testimonials.slice(2, 5).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      {/* Third column (remaining testimonials) */}
      <div className="flex flex-col gap-6">
        {testimonials.slice(5).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;