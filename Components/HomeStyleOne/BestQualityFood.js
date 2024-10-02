import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";

export default function Page() {
  return (
    <>
      <div className="bg-fixed-pic1 h-[55vh] opacity-95 max-sm:overflow-x-hidden">
        <div className="flex flex-col justify-center items-center h-full font-serif">
          <p className="text-white font-extrabold text-8xl max-sm:text-4xl">
            Best Quality Foods
          </p>
          <div>
            <div className="m-5 flex mb-16 flex-row items-center justify-around">
              <div className="text-[#DAA760] text-xl font-serif text-center ">
                <IoRemoveOutline className="text-7xl font-extrabold " />
              </div>
              <div className=" text-[#DAA760] text-xl font-serif text-center">
                <FaAsterisk />
              </div>
              <div className="text-[#DAA760] text-xl font-serif text-center">
                <IoRemoveOutline className="text-7xl font-extrabold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
