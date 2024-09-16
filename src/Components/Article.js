// import React from "react";
// import TrendPost from "../images/building.png";
// import { MdArrowOutward } from "react-icons/md";

// const Article = () => {
//   const articles = [
//     {
//       title: "When to buy?",
//       subtitle: "The Right time to invest in land...",
//       image: TrendPost,
//     },
//     {
//       title: "Where to invest?",
//       subtitle: "Choosing the best location...",
//       image: TrendPost,
//     },
//     {
//       title: "Market Trends",
//       subtitle: "Latest trends in real estate...",
//       image: TrendPost,
//     },
//   ];

//   const handleArrowClick = (articleTitle) => {
//     // Handle arrow click action here
//   };

//   return (
//     <div className="bg-[#041423] text-white px-12  pb-4 pt-16  flex items-center flex-col">
//       <h1 className="text-4xl md:text-4xl lg:text-4xl py-5  mb-6">
//         Discover Latest Trends in Real Estate
//       </h1>
//       <div className="flex flex-col md:flex-row  space-x-9 items-center w-full">
//         {articles.map((article, index) => (
//           <div
//             key={index}
//             className="w-full  rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
//           >
//             <img
//               src={article.image}
//               alt={article.title}
//               className="w-full h-full object-cover rounded-2xl"
//             />
//             <div className="absolute bottom-0 left-0 right-0 px-4 py-12 flex flex-col items-start justify-end">
//               <h2 className="text-xl font-bold text-[#f9d32c]">
//                 {article.title}
//               </h2>
//               <p className="text-md text-gray-200">{article.subtitle}</p>
//             </div>
//             <div
//               className="absolute top-4 right-4 bg-yellow-400 p-2 rounded-full flex items-center justify-center shadow-md hover:bg-yellow-500 transition"
//               onClick={() => handleArrowClick(article.title)}
//             >
//               <MdArrowOutward className="text-black w-5 h-5" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Article;


import React from "react";
import TrendPost from "../images/building.png";
import { MdArrowOutward } from "react-icons/md";
import arrowvsp from '../images/arrowvsp.png'

const Article = () => {
  const articles = [
    {
      title: "When to buy?",
      subtitle: "The Right time to invest in land...",
      image: TrendPost,
    },
    {
      title: "Where to invest?",
      subtitle: "Choosing the best location...",
      image: TrendPost,
    },
    {
      title: "Market Trends",
      subtitle: "Latest trends in real estate...",
      image: TrendPost,
    },
  ];

  const handleArrowClick = (articleTitle) => {
    // Handle arrow click action here
  };

  return (
    <div className="bg-[#041423] text-white pt-16">
      <div className="w-full">
        <h1 className="text-[28px] md:text-[32px] font-medium mb-[40px] text-center">
          Discover Latest Trends in Real Estate
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px]">
          {articles.map((article, index) => (
            <div
              key={index}
              className="relative w-full  h-[300px] rounded-[30px] overflow-hidden  transform transition duration-300 hover:scale-105"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-[30px]" // Ensures image fills the container
              />

              {/* Text over image */}
              <div className="absolute bottom-0 left-0 right-0 pl-6 pb-6  via-transparent to-transparent flex flex-col items-start justify-end">
                <h2 className="text-[#F7E27B] md:text-[20px] text-[16px] font-semibold">
                  {article.title}
                </h2>
                <p className="text-gray-200 md:text-[16px] text-[12px] font-medium">
                  {article.subtitle}
                </p>
              </div>

              {/* Arrow Button */}
              <div
                className="absolute w-[45px] h-[45px] md:w-[50px] md:h-[50px] top-4 right-4 bg-gradient-radial from-[#F7E27B] to-[#B7832F] p-2 rounded-full flex items-center justify-center  hover:bg-yellow-500 transition md:text-[16px] font-semibold "
                onClick={() => handleArrowClick(article.title)}
              >
                {/* <MdArrowOutward className="text-black md:w-8 md:h-8 w-6 h-6 " /> */}
                <img className=" w-5 h-5 md:w-6 md:h-6 text-black" src={arrowvsp}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
