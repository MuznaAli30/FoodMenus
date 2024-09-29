"use client"
import React, { useState, useEffect } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Link from "next/link.js";
import Image from "next/image";
import CountUp from "react-countup"; // Import CountUp
import freshFood from '../../public/Assets/Images/freshFood.webp'

export default function FreshFood() {
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
      <div className="bg-black flex items-center justify-evenly flex-row max-lg:flex-col max-sm:w-[90%] max-sm:overflow-x-hidden">
        <div className="flex flex-col justify-around items-center">
          <div className="text-white relative top-80 max-lg:top-8 m-5 w-[90%] mb-96 max-lg:mb-16">
            <Image src={freshFood} alt="Fresh Food" />
          </div>
        </div>
        <div className="flex relative top-80 max-lg:top-0 flex-col">
          <div className="flex text-[#DAA760] flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl ">SERVICES</div>
          </div>
          <div className="text-white text-5xl font-bold font-sans mb-7 flex items-center justify-start">
            Fresh Foods
          </div>
          <div className="flex justify-start">
            <p className="w-96 max-lg:w-[100%] text-[#cdbba2] mt-5 mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean quis commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
              pretium quis, sem.
            </p>
          </div>
          <div id="counter-section" className="text-[#cdbba2] grid grid-cols-2 gap-4 max-lg:flex max-lg:flex-col">
            <div className="flex items-center">
              <GiForkKnifeSpoon className="text-[#DAA760] text-5xl mr-2" />
              <div>
                <div className="text-3xl text-white font-semibold">
                  {/* Counter for 50 */}
                  {startCounter && (
                    <CountUp start={0} end={50} duration={2} />
                  )}
                </div>
                <div className="text-xl font-light text-[#cdbba2]">
                  Food Variant
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <SiHomeassistantcommunitystore className="text-[#DAA760] text-5xl mr-2" />
              <div>
                <div className="text-3xl text-white font-semibold">
                  {/* Counter for 100 */}
                  {startCounter && (
                    <CountUp start={0} end={100} duration={2} />
                  )}
                </div>
                <div className="text-xl font-light text-[#cdbba2]">
                  Person Capacity
                </div>
              </div>
            </div>
            <div className="text-[#cdbba2] mb-96 max-lg:mb-16">
              {" "}
              Your attendance is important to us,{" "}
              <span>
                <Link
                  href={""}
                  className="underline text-[#DAA760] hover:text-[#e3dbd0]"
                >
                  RESERVE NOW.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
