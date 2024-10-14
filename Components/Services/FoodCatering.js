import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import Reserve2 from "../OurChefs/Reserve2";
import Image from "next/image";
import FoodCat2 from '../../public/Assets/Images/FoodCat2.webp';
import FoodCat1 from '../../public/Assets/Images/FoodCat1.webp';


export default function page() {
  return (
    <>
      <div className="flex flex-row max-lg:flex-col items-center justify-evenly w-full max-sm:[90%]  my-44">
        <div>
          <div className="text-[#DAA760] flex flex-col justify-start max-lg:mt-0 max-lg:text-justify max-sm:mt-0">
            <div className="flex flex-row  items-center justify-start">
              <IoRemoveOutline className="text-7xl font-extrabold" />
              <div className="text-xl">CELEBRATION</div>
            </div>
            <div className="text-white text-5xl font-bold font-mono flex items-center max-sm:text-4xl max-sm:ml-3">
              Food Catering
            </div>
            <div className="text-cyan-50 flex justify-start max-sm:items-center max-sm:justify-center">
              <p className="w-96 max-lg:w-[95%] max-sm:w-[90%] text-[#cdbba2] mt-5 mb-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing qeun elit.
                Aenean que commodo ligula eget dolor. Aenean massa. Cumm sociis
                natoque penatibus qet magnis diis parturient montes, nascetur
                que ridiculus mus. Donec quam felis, necom ultricies
                npellentesque qeum, pretium quis, necum sem. Et quet Nulla
                consequat massa quis enim. Donec pede justo giemt, fringilla
                vel, cum aliquet unnec, inap vulputate eget, arcu. Enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo.
              </p>
            </div>
            <div className=" text-[#cdbba2] grid grid-cols-2 gap-4  max-lg:flex max-lg:flex-col max-sm:w-[90%]">
              <div className="flex items-center max-sm:ml-3">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Wedding Ceremony
              </div>
              <div className="flex items-center max-sm:ml-3">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Birthday Party
              </div>
              <div className="flex items-center max-sm:ml-3">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Event Celebration
              </div>
              <div className="flex items-center max-sm:ml-3">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Family Gathering
              </div>
            </div>
            <button className="max-sm:ml-3 font-mono bg-[#DAA760] mt-5 text-black w-44 p-4 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="relative max-sm:w-[90%] max-sm:items-center max-sm:justify-center">
          <Image
            src={FoodCat1}
            className="absolute top-36 right-60 z-10 max-lg:right-0 w-full max-lg:top-56"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <Image
            src={FoodCat2}
            className="w-full h-[60vh]"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
      </div>
      <Reserve2 />
    </>
  );
}
