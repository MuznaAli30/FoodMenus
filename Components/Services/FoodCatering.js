import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import Reserve2 from "../HomeStyleTwo/Reserve2";

export default function page() {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-full  my-44">
        <div>
          <div className="text-[#DAA760] flex flex-col justify-start max-lg:mt-0 max-lg:text-justify max-lg:w-[100%]">
            <div className="flex flex-row items-center justify-start">
              <IoRemoveOutline className="text-7xl font-extrabold" />
              <div className="text-xl">CELEBRATION</div>
            </div>
            <div className="text-white text-5xl font-bold font-mono flex items-center">
              Food Catering
            </div>
            <div className="text-cyan-50 flex justify-start">
              <p className="w-96 max-lg:w-[100%] text-[#cdbba2] mt-5 mb-5">
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
            <div className=" text-[#cdbba2] grid grid-cols-2 gap-4  max-lg:flex max-lg:flex-col">
              <div className="flex items-center">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Wedding Ceremony
              </div>
              <div className="flex items-center">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Birthday Party
              </div>
              <div className="flex items-center">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Event Celebration
              </div>
              <div className="flex items-center">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Family Gathering
              </div>
            </div>
            <button className="font-mono bg-[#DAA760] mt-5 text-black w-44 p-4 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="flex relative left-[15%]">
          <img src="/Assets/Images/FoodCat1.webp" className="h-[65vh]" />
          <img
            className="w-[50%] h-[80%] absolute bottom-[10%] right-[70%]  max-lg:w-full max-lg:right-[0%]"
            src="/Assets/Images/FoodCat2.webp"
          />
        </div>
      </div>
      <Reserve2 />
    </>
  );
}
