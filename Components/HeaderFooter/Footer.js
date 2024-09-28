import React from "react";
import { LuClock9 } from "react-icons/lu";

export default function page() {
  return (
    <div className="bg-black p-16 bottom-0">
      <div className="flex justify-around items-center max-lg:flex-col max-lg:items-start ">
        <div class="flex items-center gap-5 m-2 cursor-pointer ">
          <svg
            className="text-[#d08829] text-4xl "
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            >
              <path d="M 16.110084,16.110084 H 160.04176 L 96.072129,64.087313" />
              <path d="m 16.110084,16.110084 -2e-6,175.916496 h 79.962047" />
              <path d="M 96.072132,64.087313 H 240.00381 V 240.0038 H 96.072129 l 3e-6,-175.916487" />
              <path d="M 160.04176,16.110084 V 64.087313" />
            </g>
          </svg>
          <div className="max-md:text-lg text-[#e3d2af] max-sm:w-full">
            Sovy Restaurant, Jl. Raya
            <br />
            Canggu, Badung, Bali.
          </div>
        </div>
        <div className="flex items-center gap-2 m-2 cursor-pointer">
          <svg
            className="text-[#d08829] text-5xl"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"
            />
          </svg>
          <div className="max-md:text-lg text-[#e3d2af] max-sm:w-full">
            (+62) 81 224 557 900
            <br />
            (+62) 82 222 577 912
          </div>
        </div>
        <div className="flex items-center gap-5 m-2 cursor-pointer">
          <svg
            className="text-[#d08829] text-4xl"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
            >
              <path d="M36 15h8v26H4V15h8m12 4V5m6 6l-6-6l-6 6" />
              <path d="m4 15l20 15l20-15" />
            </g>
          </svg>
          <div className="max-md:text-lg text-[#e3d2af] max-sm:w-full">
            Reservation@sovy.com
            <br />
            Books@sovy.com
          </div>
        </div>
        <div className="flex items-center cursor-pointer gap-5 m-2">
          <LuClock9 className="text-[#d08829] text-4xl" />
          <div className="max-md:text-lg text-[#e3d2af] max-sm:w-full">
            Open 04:00 pm WITA
            <br />
            Closed 01:00 am WITA
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-5xl mt-44 mb-16 text-white font-medium">SOVY</div>
      <div className="flex justify-around items-center ">
        
        <div class="flex items-center gap-24 text-md font-medium text-[#d08829] max-lg:gap-10 max-lg:items-center max-lg:flex-col">
          <div className="cursor-pointer hover:text-[#bec7cc] hover:duration-700">FACEBOOK</div>
          <div className="cursor-pointer hover:text-[#bec7cc] hover:duration-700">TWITTER</div>
          <div className="cursor-pointer hover:text-[#bec7cc] hover:duration-700">INSTAGRAM</div>
          <div className="cursor-pointer hover:text-[#bec7cc] hover:duration-700">TRIP ADVISOR</div>
        </div>
      </div>
      <div className="flex justify-center items-center max-md:text-sm mt-10 text-lg max-sm:text-center max-sm:ml-16 max-md:text-center text-[#d9c59d] mb-5">@ 2020 Sovy Restaurant by Jegtheme. All Right Reserved</div>

    </div>
  );
}
