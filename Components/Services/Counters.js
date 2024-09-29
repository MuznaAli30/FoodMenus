import React from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { SlPeople } from "react-icons/sl";
import QtationBg from "../HomeStyleOne/QtationBg";
import FoodCatering from '../Services/FoodCatering'


export default function Counters() {
  return (
    <>
      <div className="flex flex-row max-lg:flex-col max-sm:w-[98%] items-center justify-center w-full gap-16 mb-44">
        <div className="flex items-center">
          <GiForkKnifeSpoon className="text-[#DAA760] text-8xl mr-5 max-sm:text-6xl" />
          <div>
            <div className="text-5xl text-white font-sans">50</div>
            <div className="text-2xl font-light text-[#cdbba2]">
              Food Variant
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <FaClockRotateLeft className="text-[#DAA760] font-extralight text-8xl mr-5 max-sm:text-6xl" />
          <div className="">
            <div className="text-5xl text-white font-sans">100</div>
            <div className="text-2xl font-light text-[#cdbba2]">
              Year Of Experience
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <SlPeople className="text-[#DAA760] text-8xl mr-5 max-sm:text-6xl" />
          <div className="">
            <div className="text-5xl text-white font-sans">100</div>
            <div className="text-2xl font-light text-[#cdbba2]">
              Satisfy Customer
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <SiHomeassistantcommunitystore className="text-[#DAA760] text-8xl mr-5 max-sm:text-6xl" />
          <div className="">
            <div className="text-5xl text-white font-sans">100</div>
            <div className="text-2xl font-light text-[#cdbba2]">
              Restaurant Capacity
            </div>
          </div>
        </div>
      </div>
      <QtationBg />
      <FoodCatering/>
    </>
  );
}
