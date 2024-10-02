"use client"
import React, { useState, useEffect } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import SpecialMenu from './SpecialMenu';
import Image from "next/image";
import TheStory2 from '../../public/Assets/Images/TheStory2.webp';
import TheStory22 from '../../public/Assets/Images/TheStory22.webp';
import CountUp from "react-countup";

// Reusable CounterItem component
const CounterItem = ({ Icon, end, label, startCounter }) => (
  <div className="flex items-center">
    <Icon className="text-[#DAA760] text-5xl mr-2" />
    <div>
      <div className="text-3xl text-white font-semibold">
        {startCounter && <CountUp start={0} end={end} duration={2} />}
      </div>
      <div className="text-xl font-light text-[#cdbba2]">{label}</div>
    </div>
  </div>
);

export default function TheStory() {
  const [startCounter, setStartCounter] = useState(false);

  // Function to check if the user has scrolled to the counter section
  const handleScroll = () => {
    const counterSection = document.querySelector("#the-story-counter-section");
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
      <div className="flex justify-around items-center gap-10 mt-96 max-sm:overflow-x-hidden">
        <div className="flex flex-row mt-96 max-lg:flex-col max-lg:items-center max-lg:justify-center gap-10">
          <div className="mt-56 max-sm:w-[90%]">
            <Image src={TheStory2} alt="The Story Image 1" />
          </div>
          <div className="mt-56 max-lg:mt-10 max-sm:w-[90%]">
            <Image src={TheStory22} alt="The Story Image 2" />
          </div>

          {/* White box */}
          <div>
            <div className="bg-white max-sm:w-full mt-56 max-lg:mt-10 relative max-lg:right-0 top-[10%] right-[12%] w-96 h-[55vh] shadow-2xl mb-5 text-black flex flex-col">
              <div className="m-5 flex flex-row items-center justify-center">
                <div className="text-[#DAA760] text-xl font-serif text-center">
                  <IoRemoveOutline className="text-7xl font-extrabold" />
                </div>
                <div className="text-[#DAA760] text-xl max-sm:text-base font-serif text-center">
                  THIS WEEK
                </div>
                <div className="text-[#DAA760] text-xl font-serif text-center">
                  <IoRemoveOutline className="text-7xl font-extrabold" />
                </div>
              </div>
              <div className="text-6xl max-sm:text-5xl font-bold items-center justify-center text-center">
                The Story
              </div>
              <div className="w-72 m-auto text-center text-black font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                quis commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient, nascetur ridiculus mus.
                <button className="bg-[#DAA760] max-lg:m-5 mt-10 text-black w-56 p-4 hover:bg-transparent hover:duration-300 hover:text-black hover:border-2 border-black border-opacity-100">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Counter Section */}
            <div
              id="the-story-counter-section"
              className="text-[#cdbba2] mt-24 grid grid-cols-2 gap-4 max-lg:flex max-lg:flex-col"
            >
              <CounterItem
                Icon={GiForkKnifeSpoon}
                end={50}
                label="Food Variant"
                startCounter={startCounter}
              />
              <CounterItem
                Icon={SiHomeassistantcommunitystore}
                end={100}
                label="Person Capacity"
                startCounter={startCounter}
              />
            </div>
          </div>
        </div>
      </div>
      <SpecialMenu />
    </>
  );
}
