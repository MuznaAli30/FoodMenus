'use client';  
import React, { useEffect } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import ourStory1 from '../../public/Assets/Images/ourStory1.webp'
import ourStory2 from '../../public/Assets/Images/ourStory2.webp'


export default function TheStory() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <>
      <div className="bg-black items-center justify-center flex relative flex-row ml-0 max-lg:flex-col max-lg:m-2">
        <div className="flex justify-start right-96 relative opacity-90 max-lg:mb-10 max-xl:w-[80%] max-xl:mx-16">
          <Image
            src={ourStory1}
            className="max-sm:hidden h-[75vh] max-lg:w-full w-full"
          />
          <Image
            className="absolute duration-700 max-sm:relative bottom-[15%] left-[70%] max-sm:left-96 max-lg:w-full max-lg:right-[0%] max-sm:flex max-sm:w-[100%] max-sm:items-center max-sm:justify-center"
            src={ourStory2}
            data-aos="fade-up"
          />
        </div>
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify max-lg:w-[100%]">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">OUR STORY</div>
          </div>
          <div className="text-white text-5xl font-bold font-mono flex items-center">
            The Story
          </div>
          <div className="text-cyan-50 flex justify-start">
            <p className="w-96 max-lg:w-[100%] text-[#cdbba2] mt-5 mb-5">
              Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite. Aenean
              quis commodoo ligula eget dolor. Aeneanan massa. Cum socies natoque
              penatibus etapi magnis dis parturients montes, nascetur ridiculus mus
              cume. Donenect quam felis, ultricies nec, pellentesque eu, pretiumus
              quis, sem In.
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
