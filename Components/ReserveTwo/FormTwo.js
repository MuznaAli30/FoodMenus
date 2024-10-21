import React from "react";
import OurCommitment from "../ReserveTwo/OurCommitment";

import { IoRemoveOutline } from "react-icons/io5";

export default function FormTwo() {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="flex relative flex-col max-lg:mt-20 mt-24 ">
          <div className="flex text-[#DAA760] flex-row items-center justify-center ">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl ">YOUR DETAILS</div>
            <IoRemoveOutline className="text-7xl font-extrabold" />
          </div>
          <div className="text-white text-6xl max-sm:text-2xl max-sm:items-center max-sm:justify-center max-lg:text-4xl font-bold font-mono mb-7 flex items-center justify-start">
            Reserve A Table
          </div>
        </div>
        <div className="text-[#cdbba2] w-[40%] text-center mb-10 max-sm:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </div>

        {/* input fields in a row with a btn */}
        <div className="flex flex-row max-lg:flex-col items-center justify-between w-[65%] gap-3 max-xl:w-[79%] text-white">
          <div className="flex flex-col w-full max-sm:w-full">
            <label className="text-white text-lg mb-3">
              DATE <span className="text-[#DAA760]">*</span>
            </label>
            <input
              type="date"
              className="p-5  bg-[#1A1C1D] text-white hover:border hover:border-[#DAA760] h-16 w-[95%]"
            />
          </div>
          <div className="flex flex-col w-full max-sm:w-full">
            <label className="text-white text-lg mb-3">
              TIME <span className="text-[#DAA760]">*</span>
            </label>
            <input
              type="time"
              className="p-5 bg-[#1A1C1D] text-white hover:border hover:border-[#DAA760] h-16 w-[95%]"
            />
          </div>
          <div className="flex flex-col max-sm:w-[90%] w-full">
                <label className="text-white text-lg mb-3">
                PERSONS <span className="text-[#DAA760]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Persons"
                  className="p-5 bg-[#1A1C1D] text-white hover:border hover:border-[#DAA760] h-16 w-[95%]"
                />
              </div>

          <div className="w-full">
            <button className="font-mono h-16 w-[95%]  bg-[#DAA760] mt-9 text-black p-5 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
              RESERVATION NOW
            </button>
          </div>
        </div>
      </div>
      <OurCommitment/>
    </>
  );
}
