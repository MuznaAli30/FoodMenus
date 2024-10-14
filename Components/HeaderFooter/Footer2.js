import React from "react";
import { LuClock9 } from "react-icons/lu";

export default function Footer2() {
  return (
    <div className="bg-black p-16 bottom-0">
      <div className="flex justify-center items-center text-5xl mt-44 mb-16 text-white font-medium">
        SOVY
      </div>
      <div className="flex justify-around items-center mb-16">
        <div class="flex items-center gap-24 text-md font-medium text-[#d08829] max-lg:gap-10 max-lg:flex-col">
          <div className="cursor-pointer hover:text-[#bec7cc] hover:duration-700">
            FACEBOOK
          </div>
          <div className="cursor-pointer hover:text-[#bec7cc] hover:duration-700">
            TWITTER
          </div>
          <div className="cursor-pointer hover:text-[#bec7cc] hover:duration-700">
            INSTAGRAM
          </div>
          <div className="cursor-pointer hover:text-[#bec7cc] hover:duration-700">
            TRIP ADVISOR
          </div>
        </div>
      </div>
     
    </div>
  );
}
