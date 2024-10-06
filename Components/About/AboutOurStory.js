"use client";
import React, { useState, useEffect } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import Ingredients from '../About/Ingredients';
import Image from "next/image";
import AboutOurStory1 from '../../public/Assets/Images/AboutOurStory1.webp';
import TheStory22 from '../../public/Assets/Images/TheStory22.webp';
import AOS from "aos";
import 'aos/dist/aos.css';
import CountUp from 'react-countup'; // Import CountUp

export default function Page() {
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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-black items-center max-lg:flex-col justify-center flex relative flex-row ml-0 max-lg:w-[90%] my-10 max-lg:my-0 max-sm:overflow-x-hidden">
        <div className="flex justify-start right-96 relative opacity-90 max-lg:mb-10 max-xl:w-[80%] h-[55vh]">
          <div className="relative">
            <Image
              src={TheStory22}
              className="absolute top-36 left-96 w-96 h-[50vh] z-10 max-lg:top-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <Image src={AboutOurStory1} className="w-full h-[50vh]" />
          </div>
        </div>
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify ">
          <div className="flex flex-row items-center justify-start max-sm:ml-3">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">OUR STORY</div>
          </div>
          <div className="text-white text-5xl font-bold font-mono flex items-center max-sm:ml-3">
            The Story
          </div>
          <div className="text-cyan-50 flex justify-start max-sm:justify-center max-sm:items-center">
            <p className="w-96 max-sm:w-[90%] text-[#cdbba2] mt-5 mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              quis commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <div id="counter-section" className="flex flex-row items-center mb-5 gap-5 max-sm:w-[90%] max-sm:ml-3">
            <div className="flex flex-col ">
              <div className="text-white text-3xl font-sans">
                {startCounter && <CountUp start={0} end={25} duration={2} />} {/* Counter for Year Experience */}
              </div>
              <div className="text-[#cdbba2] font-light">Year Experience</div>
            </div>
            <div className="flex flex-col ">
              <div className="text-white text-3xl font-sans">
                {startCounter && <CountUp start={0} end={15} duration={2} />} {/* Counter for Expert Chefs */}
              </div>
              <div className="text-[#cdbba2] font-light">Expert Chefs</div>
            </div>
            <div className="flex flex-col ">
              <div className="text-white text-3xl font-sans">
                {startCounter && <CountUp start={0} end={19} duration={2} />} {/* Counter for Happy Customers */}
              </div>
              <div className="text-[#cdbba2] font-light">Happy Customers</div>
            </div>
          </div>
          <div className="text-white text-xl mb-2 max-sm:ml-3">SPECIALITIES</div>

          <div className="text-[#cdbba2] grid grid-cols-2 gap-4 max-lg:flex max-lg:flex-col max-sm:ml-3">
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Fine Dining
            </div>
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Food Catering
            </div>
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Food Delivery
            </div>
            <div className="flex items-center">
              <FaCircleCheck className="text-[#DAA760] mr-2" />
              Wedding Ceremony
            </div>
          </div>
        </div>
      </div>
      <Ingredients />
    </>
  );
}
