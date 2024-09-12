import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import Content from "./Content";
import OurMenu from '../HomeStyleOne/OurMenu'
import BestQualityFood from '../HomeStyleOne/BestQualityFood'

export default function SpecialMenu() {
  return (
    <>
    <div>
      <div className="bg-fixed-pic4 h-[100vh] opacity-95 w-full max-lg:w-[110%]">
        <div className="flex items-center justify-center m-auto h-full">
          {" "}
          {/* Full height container */}
          <div className="bg-white flex flex-col items-center justify-stretch w-[70%] h-[80vh]">
            {/* headings */}
            <div>
              <div className="m-5 flex flex-row items-center justify-center">
                <div className="text-[#DAA760] text-xl font-serif text-center">
                  <IoRemoveOutline className="text-7xl font-extrabold" />
                </div>
                <div className=" text-[#DAA760] text-xl font-serif text-center">
                  THIS WEEK
                </div>
                <div className="text-[#DAA760] text-xl font-serif text-center">
                  <IoRemoveOutline className="text-7xl font-extrabold" />
                </div>
              </div>
              <div className="text-6xl font-bold items-center justify-center text-center">
                Special Menus
              </div>
            </div>

            {/* menu grids */}
            <div className="flex items-center justify-center gap-24 mt-10 ">
              {" "}
              {/* Centering both lists */}
              <div className="grid grid-rows-4 gap-5">
              <div>
                  <div  className="text-xl">
                    Citrus Cured Salmon​ With Honey
                    <span className="ml-32">$20</span>
                  </div>
                  <div className="h-[0.2vh] bg-[#DAA760] mt-3 mb-3"></div>
                  <div className="text-gray-600 font-light">Salmon/ Citrus/ Honey/ Spice.</div>
                </div>
                <div>
                  <div className="text-xl">
                    Pork Tenderloin Marinated In Yogurt
                    <span className="ml-[19%]">$25</span>
                  </div>
                  <div className="h-[0.2vh] bg-[#DAA760] mt-3 mb-3"></div>
                  <div className="text-gray-600 font-light">Pork/ Tenderloin/ Yogurt</div>
                </div>
                <div>
                  <div className="text-xl">
                    Grilled Pork With Preserved Lemons
                    <span className="ml-[19%]">$27</span>
                  </div>
                  <div className="h-[0.2vh] bg-[#DAA760] mt-3 mb-3"></div>
                  <div className="text-gray-600 font-light">Prok/ Lemon/ Onions</div>
                </div>
                <div>
                  <div className="text-xl">
                    Roasted Prawns with Coriander
                    <span className="ml-[28%]">$18</span>
                  </div>
                  <div className="h-[0.2vh] bg-[#DAA760] mt-3 mb-3"></div>
                  <div className="text-gray-600 font-light">Prawn/ Coriander/ Spices</div>
                </div>
              </div>
              <div className="grid grid-rows-4 gap-5">
                <div>
                  <div  className="text-xl">
                    Citrus Cured Salmon​ With Honey
                    <span className="ml-32">$20</span>
                  </div>
                  <div className="h-[0.2vh] bg-[#DAA760] mt-3 mb-3"></div>
                  <div className="text-gray-600 font-light">Salmon/ Citrus/ Honey/ Spice.</div>
                </div>
                <div>
                  <div className="text-xl">
                    Pork Tenderloin Marinated In Yogurt
                    <span className="ml-[19%]">$25</span>
                  </div>
                  <div className="h-[0.2vh] bg-[#DAA760] mt-3 mb-3"></div>
                  <div className="text-gray-600 font-light">Pork/ Tenderloin/ Yogurt</div>
                </div>
                <div>
                  <div className="text-xl">
                    Grilled Pork With Preserved Lemons
                    <span className="ml-[19%]">$27</span>
                  </div>
                  <div className="h-[0.2vh] bg-[#DAA760] mt-3 mb-3"></div>
                  <div className="text-gray-600 font-light">Prok/ Lemon/ Onions</div>
                </div>
                <div>
                  <div className="text-xl">
                    Roasted Prawns with Coriander
                    <span className="ml-[28%]">$18</span>
                  </div>
                  <div className="h-[0.2vh] bg-[#DAA760] mt-3 mb-3"></div>
                  <div className="text-gray-600 font-light">Prawn/ Coriander/ Spices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Content/>
    </>
  );
}
