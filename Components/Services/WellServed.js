import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import Counters from '../Services/Counters'
import Services from '../../public/Assets/Images/Services.webp'
import Image from "next/image";

export default function WellServed() {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-16 my-32">
        <div className="text-white max-lg:top-8 m-5 max-lg:mb-16">
          <Image src={Services}/>
        </div>{" "}
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify max-lg:w-[100%]">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">DELVERY</div>
          </div>
          <div className="text-white text-5xl font-bold font-sans flex items-center">
            well Served
          </div>
          <div className="text-cyan-50 flex justify-start">
            <p className="w-96 max-lg:w-[100%] text-[#cdbba2] mt-5 mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing qeun elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus qet magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, necom ultricies npellentesque eu, pretium
              quis, sem. Et que Nulla consequat massa quis enim. Donec pede
              justo giemt, fringilla vel, aliquet nec, inap vulputate eget,
              arcu. Enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            </p>
          </div>
          <div className=" text-[#cdbba2] grid grid-cols-2 gap-4  max-lg:flex max-lg:flex-col">
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Food Delivery
            </div>
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Restaurant Courier
            </div>
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Catering Delivery
            </div>
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Safety and Clean
            </div>
          </div>
          <button className="font-mono bg-[#DAA760] mt-5 text-black w-44 p-4 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
            LOOK MENU
          </button>
        </div>
      </div>
      <Counters/>
    </>
  );
}
