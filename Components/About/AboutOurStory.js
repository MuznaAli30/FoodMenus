"use client"
import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import Ingredients from '../About/Ingredients';
import Image from "next/image";
import AboutOurStory1 from '../../public/Assets/Images/AboutOurStory1.webp'
import TheStory22 from '../../public/Assets/Images/TheStory22.webp'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";





export default function page() {
  
useEffect(() => {
  AOS.init(); 
}, []);
  return (
    <>
      <div className="bg-black items-center max-lg:flex-col justify-center flex relative flex-row ml-0 max-lg:w-[100%] my-10 max-lg:my-0">
        <div className="flex justify-start right-96 relative opacity-90 max-lg:mb-10 max-xl:w-[80%] h-[55vh] ">
        <div className="relative">
          <Image
            src={TheStory22}
            className="absolute top-36 left-96 w-96 h-[50vh] z-10 max-lg:top-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <Image
            src={AboutOurStory1}
            className="w-full h-[50vh]"
          />
        </div>
        </div>
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">OUR STORY</div>
          </div>
          <div className="text-white text-5xl font-bold font-mono flex items-center">
            The Story
          </div>
          <div className="text-cyan-50 flex justify-start">
            <p className="w-96  text-[#cdbba2] mt-5 mb-5">
              Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite.
              Aenean quis commodoo ligula eget dolor. Aeneanan massa. Cum socies
              natoque penatibus etapi magnis dis parturients montes, nascetur
              ridiculus mus cume. Donenect quam felis, ultricies nec,
              pellentesque eu, pretiumus quis, sem In.
            </p>
          </div>
          <div className="flex flex-row items-center mb-5 gap-5">
            <div className="flex flex-col">
              <div className="text-white text-3xl font-sans">25</div>
              <div className="text-[#cdbba2] font-light">Year Experience</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white text-3xl font-sans">15</div>
              <div className="text-[#cdbba2] font-light">Expert Chefs</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white text-3xl font-sans">19</div>
              <div className="text-[#cdbba2] font-light">Happy Customers</div>
            </div>
          </div>
          <div className="text-white text-xl mb-2">SPECIALITIES</div>

          <div className=" text-[#cdbba2] grid grid-cols-2 gap-4  max-lg:flex max-lg:flex-col">
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
      <Ingredients/>
    </>
  );
}
