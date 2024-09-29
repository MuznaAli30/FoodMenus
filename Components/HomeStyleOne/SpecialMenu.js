"use client";
import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import Image from "next/image";
import SpecialMenu1 from "../../public/Assets/Images/SpecialMenu1.webp";
import SpecialMenu2 from "../../public/Assets/Images/SpecialMenu2.webp";
import SpecialMenu3 from "../../public/Assets/Images/SpecialMenu3.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SpecialMenu() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="text-white flex flex-row items-center justify-evenly max-sm:w-full max-lg:flex-col max-sm:overflow-x-hidden">
        <div className="">
          <div className="flex flex-col items-start text-white">
            <div className="flex flex-row items-center justify-start text-[#DAA760]">
              <IoRemoveOutline className="text-7xl font-extrabold" />
              <div className="text-xl">THIS WEEK</div>
            </div>
            <div className="text-white text-5xl max-lg:text-2xl font-bold font-mono flex items-center">
              Specials Menu
            </div>
            {/* list */}
            <div className="flex flex-row justify-between mt-10 text-2xl">
              <div className="mr-56">
                Citrus Cured Salmon​ With Honey{" "}
                <span className="text-[#DAA760] mx-3 max-lg:hidden">
                  ..................
                </span>
              </div>
              <div>$20</div>
            </div>
            {/* <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3 "></div> */}
            <div className="text-[#DAA760]">
              Salmon / Citrus / Honey / Spice.
            </div>
            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>
                Pork Tenderloin In Yogurt
                <span className="text-[#DAA760] mx-3 max-lg:hidden">
                  ..................
                </span>
              </div>
              <div>$25</div>
            </div>
            {/* <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div> */}
            <div className="text-[#DAA760]">Pork / Tenderloin / Yogurt</div>
            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>
                Grilled Pork With Lemons{" "}
                <span className="text-[#DAA760] mx-3 max-lg:hidden">
                  ..................
                </span>
              </div>
              <div>$27</div>
            </div>
            {/* <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div> */}
            <div className="text-[#DAA760]">Prok / Lemon / Onions</div>{" "}
            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>
                Roasted Prawns with Coriander{" "}
                <span className="text-[#DAA760] mx-3 max-lg:hidden">
                  ..................
                </span>
              </div>
              <div>$18</div>
            </div>
            {/* <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div> */}
            <div className="text-[#DAA760]">Prawn / Coriander / Spices</div>{" "}
            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>
                Prawn Sausage Cassaoulet{" "}
                <span className="text-[#DAA760] mx-3 max-lg:hidden">
                  ..................
                </span>
              </div>
              <div>$19</div>
            </div>
            {/* <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div> */}
            <div className="text-[#DAA760]">Prawn / Sausage / Tomato</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 max-lg:w-[80%] max-lg:mt-5">
          <div>
            <Image src={SpecialMenu1} 
            data-aos="fade-left"
            data-aos-duration="1000"/>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 mb-5">
            <div>
              <Image src={SpecialMenu2} 
              data-aos="fade-left"
              data-aos-duration="1000"/>
            </div>
            <div>
              <Image src={SpecialMenu3} 
              data-aos="fade-left"
              data-aos-duration="1000"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
