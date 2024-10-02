import React from "react";
import { IoRemoveOutline } from "react-icons/io5";

export default function page() {
  return (
    <>
      <div className="bg-fixed-pic3 h-[55vh] opacity-95 w-full max-lg:w-[100%] max-sm:overflow-x-hidden">
        <div className=" flex  items-center justify-around flex-row max-lg:flex-col max-lg:m-auto max-sm:w-[90%]">
          <div className="flex relative flex-col max-lg:mt-20 mt-24 max-sm:mt-0">
            <div className="flex text-[#DAA760] flex-row items-center justify-start ">
              <IoRemoveOutline className="text-7xl font-extrabold" />
              <div className="text-xl ">RESERVE</div>
            </div>
            <div className="text-white text-5xl font-bold font-sans mb-7 flex items-center justify-start max-sm:text-xl">
              Reserve A Table
            </div>
            <div className="text-[#cdbba2] w-[50%] max-sm:w-[90%] ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </div>
          </div>
          <div className="flex items-center mt-24 max-lg:mt-3">
            <button className="bg-[#DAA760]  mt-5 max-lg:mt-0 max-lg:p-4 text-black w-60 p-5 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
              MAKE A RESERVATION
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
