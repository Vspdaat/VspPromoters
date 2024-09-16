import React from 'react';
import star from '../images/Star.png';

const HeroSection = () => {
    return (
        <div className="bg-[#041423] text-white pb-16 flex items-center flex-col">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-[#122638] h-auto md:h-[390px] rounded-[41px] w-full">
                <div className="text-left w-full md:w-[50%] md:ml-[58px] p-6">
                    <h1 className="text-2xl md:text-[40px] xl:text-[40px] text-[#F7E27B] font-semibold mb-2 mb-10">
                        Easy way to find your
                    </h1>
                    <h1 className="text-2xl md:text-2xl xl:text-[40px] font-semibold text-[#F7E27B] mb-5">
                        New Property
                    </h1>
                    <p className="mt-4 text-xl font-normal md:text-lg xl:text-xl text-[#FFFFFF]">
                        The best place for you to find your dream place, we provide you with high-quality listings.
                    </p>
                </div>
                <img
                    src={'https://firebasestorage.googleapis.com/v0/b/vsp-daatstudios.appspot.com/o/images%2FHouse.jpeg?alt=media&token=8c988b25-c6e4-403f-b2f4-581159589754'}
                    alt="Property"
                    className="rounded-[41px] shadow-lg h-auto w-full md:w-[50%] md:h-[100%]"
                />
            </div>

            {/* Search Section */}
            <div className="bg-white text-[#0c1633] rounded-full md:px-2 px-1 py-1 flex justify-between items-center shadow-lg mt-[-25px] w-full md:w-[735px] md:h-[77px]">
                <div className="relative flex flex-col md:flex-row w-full mr-[20px]">
                    {/* p tag and input */}
                    <div className="flex flex-col gap-0 md:gap-0"> {/* Reduced the gap */}
                        <p className=" md:px-6 pl-1 text-[#2E3B59] font-medium text-black text-[13px] md:text-[20px]">
                            What kind of property are you looking for?
                        </p>
                        <input
                            type="text"
                            className="border-none outline-none px-4 md:px-6 text-[10px] md:text-[15px] w-full bg-transparent placeholder-[#2E3B59]"
                            placeholder="For example: A 3BHK house property in Chennai for budget..."
                        />
                    </div>
                </div>
                <button className="bg-gradient-to-b from-[#F7E27B] to-[#B7832F] text-[#0c1633] py-2 px-4 md:px-6  rounded-full text-[16px] md:text-[20px] font-medium flex items-center md:w-[182px] md:h-[61px] h-[47px]">
                    Search
                    <img
                        src={star}
                        alt="Star"
                        className="hidden lg:inline-block ml-2 w-[24%]"
                    />
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
