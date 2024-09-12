import React from "react";
import { IoRemoveOutline } from "react-icons/io5";

export default function page() {
  return (
    <>
      <div className="bg-black flex items-center justify-evenly flex-row max-lg:flex-col max-lg:m-auto max-sm:w-[90%]">
        <div className="flex relative flex-col max-lg:mt-20">
          <div className="flex text-[#DAA760] flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl ">THIS WEEK</div>
          </div>
          <div className="text-white text-5xl font-bold font-sans mb-7 flex items-center justify-start">
            Specials Menu
          </div>
          <ul class="list-none ">
            <li className="text-white font-sans text-xl mt-5">
              Citrus Cured Salmon​ With Honey
              <span className="text-[#DAA760] mx-3">..................</span>
              <span className="font-medium">$20</span>
            </li>
            <li className="text-[#DAA760] mb-10">Salmon / Citrus / Honey / Spice.</li>

            <li className="text-white font-sans text-xl mt-5">
              Pork Tenderloin In Yogurt
              <span className="text-[#DAA760] mx-3">
                ...............................
              </span>
              <span className="font-medium">$25</span>
            </li>
            <li className="text-[#DAA760] mb-10">Pork / Tenderloin / Yogurt</li>

            <li className="text-white font-sans text-xl mt-5">
              Grilled Pork With Lemons
              <span className="text-[#DAA760] mx-3">
                ...............................
              </span>
              <span className="font-medium">$27</span>
            </li>
            <li className="text-[#DAA760] mb-10">Prok / Lemon / Onions</li>

            <li className="text-white font-sans text-xl mt-5">
              Roasted Prawns with Coriander
              <span className="text-[#DAA760] mx-3">....................</span>
              <span className="font-medium">$18</span>
            </li>
            <li className="text-[#DAA760] mb-10">Prawn / Coriander / Spices</li>

            <li className="text-white font-sans text-xl mt-5">
              Prawn Sausage Cassaoulet
              <span className="text-[#DAA760] mx-3">
                ............................
              </span>
              <span className="font-medium">$19</span>
            </li>
            <li className="text-[#DAA760] mb-10">Prawn / Sausage / Tomato</li>
          </ul>
        </div>
        <div className="flex flex-col justify-around items-center opacity-80">
        <div className="text-white relative top-80 max-lg:top-0 m-5">
          <img src="/Assets/Images/SpecialMenu1.webp" />
        </div>
        <div className="flex flex-row">
        <div className="bg-black mb-[70%] max-lg:mb-[20%] text-white relative top-80 max-lg:top-0 m-5">
          <img src="/Assets/Images/SpecialMenu2.webp" />
        </div>
        <div className="text-white relative top-80 max-lg:top-0 m-5">
          <img src="/Assets/Images/SpecialMenu3.webp" />
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
