"use client";
import React, { useEffect } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import ourStory1 from "../../public/Assets/Images/ourStory1.webp";
import ourStory2 from "../../public/Assets/Images/ourStory2.webp";

export default function TheStory() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="bg-black max-sm:w-[90%] items-center justify-evenly flex relative flex-row ml-0 max-lg:flex-col max-lg:m-2 max-w-full max-sm:overflow-x-hidden">
        <div className="flex justify-start right-96 relative opacity-90 max-lg:mb-10 max-xl:w-[80%] max-xl:mx-16">
          <div className="relative">
            <Image
              src={ourStory2}
              className="absolute top-36 left-96 z-10 "
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <div>
              <Image
                src={ourStory1}
                className="w-full h-[70vh] max-lg:flex max-lg:items-center max-lg:justify-center"
              />
            </div>
          </div>
        </div>
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify max-sm:w-[90%]">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">OUR STORY</div>
          </div>
          <div className="text-white text-5xl max-sm:text-4xl font-bold font-mono flex items-center">
            The Story
          </div>
          <div className="text-cyan-50 flex justify-start">
            <p className="w-96 max-sm:w-full text-[#cdbba2] mt-5 mb-5">
              Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite.
              Aenean quis commodoo ligula eget dolor. Aeneanan massa. Cum socies
              natoque penatibus etapi magnis dis parturients montes, nascetur
              ridiculus mus cume. Donenect quam felis, ultricies nec,
              pellentesque eu, pretiumus quis, sem In.
            </p>
          </div>
          <div className="text-[#cdbba2] grid grid-cols-2 gap-4 max-lg:flex max-lg:flex-col">
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
          <button className="font-mono bg-[#DAA760] mt-5 text-black w-44 p-4 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
            LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
}
