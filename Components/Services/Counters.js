"use client";
import React, { useState, useEffect } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { SlPeople } from "react-icons/sl";
import QtationBg from "../HomeStyleOne/QtationBg";
import FoodCatering from "../Services/FoodCatering";
import CountUp from "react-countup"; // Import CountUp

export default function Counters() {
  const [startCounter, setStartCounter] = useState(false);

  // Function to check if the user has scrolled to the counter section
  const handleScroll = () => {
    const counterSection = document.querySelector("#counter-section");
    const position = counterSection.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      setStartCounter(true);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="counter-section"
        className="flex flex-row max-lg:flex-col max-sm:w-[98%] items-center justify-center w-full gap-16 mb-44"
      >
        <div className="flex items-center max-sm:mr-16">
          <GiForkKnifeSpoon className="text-[#DAA760] text-8xl mr-5 max-sm:text-6xl" />
          <div>
            <div className="text-5xl text-white font-sans">
              {startCounter && <CountUp start={0} end={50} duration={2} />}
            </div>
            <div className="text-2xl font-light text-[#cdbba2]">
              Food Variant
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <FaClockRotateLeft className="text-[#DAA760] font-extralight text-8xl mr-5 max-sm:text-6xl" />
          <div className="">
            <div className="text-5xl text-white font-sans">
              {startCounter && <CountUp start={0} end={100} duration={2} />}
            </div>
            <div className="text-2xl font-light text-[#cdbba2]">
              Year Of Experience
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <SlPeople className="text-[#DAA760] text-8xl mr-5 max-sm:text-6xl" />
          <div className="">
            <div className="text-5xl text-white font-sans">
              {startCounter && <CountUp start={0} end={100} duration={2} />}
            </div>
            <div className="text-2xl font-light text-[#cdbba2]">
              Satisfy Customer
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <SiHomeassistantcommunitystore className="text-[#DAA760] text-8xl mr-5 max-sm:text-6xl" />
          <div className="">
            <div className="text-5xl text-white font-sans">
              {startCounter && <CountUp start={0} end={100} duration={2} />}
            </div>
            <div className="text-2xl font-light text-[#cdbba2]">
              Restaurant Capacity
            </div>
          </div>
        </div>
      </div>
      <QtationBg />
      <FoodCatering />
    </>
  );
}
