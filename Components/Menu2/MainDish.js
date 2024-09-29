"use client"
import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import Reserve1 from "../HomeStyleOne/Reserve1";
import Footer from "../HeaderFooter/Footer";
import Menu2MainDish2 from '../../public/Assets/Images/Menu2MainDish2.webp'
import Menu2MainDish1 from '../../public/Assets/Images/Menu2MainDish1.webp'
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";




export default function MainDish() {
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
    <>
      <div className="flex flex-row items-center justify-around  my-32 max-lg:flex-col max-lg:w-[90%] ">
      <div className="relative">
          <Image
            src={Menu2MainDish2}
            className="absolute top-96 left-60 z-10 max-lg:left-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <Image
            src={Menu2MainDish1}
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify max-lg:w-[100%]">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">SAVORY</div>
          </div>
          <div className="text-white text-5xl font-bold font-sans flex items-center max-sm:mt-8">
            Mani Dish
          </div>
          <div className="text-white flex flex-row justify-between mt-10 text-2xl">
            <div>Citrus Cured Salmon​ With Honey </div>
            <div className="text-[#DAA760] max-lg:hidden">
              ..............................................
            </div>
            <div> $25</div>
          </div>
          <div className="text-[#DAA760]">Salmon / Citrus / Honey / Spice.</div>
          <div className="text-white  flex flex-row justify-between mt-10 text-2xl">
            <div>Pork Tenderloin Marinated In Yogurt</div>
            <div className="text-[#DAA760] max-lg:hidden">
              .........................................
            </div>
            <div>$25</div>
          </div>
          <div className="text-[#DAA760]">Pork / Tenderloin / Yogurt</div>
          <div className="flex text-white  flex-row justify-between  mt-10 text-2xl">
            <div>Grilled Pork With Preserved Lemons</div>
            <div className="text-[#DAA760] max-lg:hidden">...........................</div>
            <div>$27</div>
          </div>
          <div className="text-[#DAA760]">Pork / Lemon / Onions</div>
          <div className="flex text-white  flex-row justify-between mt-10 text-2xl">
            <div>Roasted Prawns with Coriander</div>
            <div className="text-[#DAA760] max-lg:hidden">
              ...............................................
            </div>
            <div>$18</div>
          </div>
          <div className="text-[#DAA760]">Prawn / Coriander / Spices</div>{" "}
          <div className="flex text-white flex-row justify-between mt-10 text-2xl">
            <div>Prawn Sausage Cassaoulet</div>
            <div className="text-[#DAA760] max-lg:hidden">
              ..................................
            </div>
            <div>$25</div>
          </div>
          <div className="text-[#DAA760]">Prawn / Sausage / Tomato</div>{" "}
          <div className="flex text-white  flex-row justify-between mt-10 text-2xl">
            <div>Shrimp Scampy</div>
            <div className="text-[#DAA760] max-lg:hidden">
              ........................................................
            </div>
            <div>$12</div>
          </div>
          <div className="text-[#DAA760]">Shrimp / Cheese / Tomato</div>{" "}
        </div>
      </div>
      <Reserve1/>
      <Footer/>
    </>
  );
}
