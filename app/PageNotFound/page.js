import React from "react";
import Header from "../../Components/HeaderFooter/Header";

export default function page() {
  return (
    <>
      <div className="relative w-full h-[110vh]">
        {/* Background Image */}
        <img
          className="absolute object-cover w-full h-full"
          src="/Assets/Images/food.webp" // Path relative to the public folder
          alt="hero1"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Header with the highest z-index */}
        <div className="relative z-[30]">
          <Header />
        </div>

        {/* 404 Image */}
        <div className="absolute inset-0 flex items-center justify-center z-[10]">
          <img
            className="object-contain w-[50%] max-lg:w-[50%] max-md:w-full max-sm:w-[70%]"
            src="/Assets/Images/notFound.webp"
            alt="404 not found"
          />
        </div>

        {/* Text and Button */}
        <div className="absolute bottom-0 w-full flex flex-col items-center mb-5 z-[15]">
          <p className="text-white text-4xl mb-5 font-bold">PAGE NOT FOUND</p>
          <button className="bg-[#DAA760] mt-7 text-black w-56 p-4 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
            BACK TO HOME
          </button>
        </div>
      </div>
    </>
  );
}
