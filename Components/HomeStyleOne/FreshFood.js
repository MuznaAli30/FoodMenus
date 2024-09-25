import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Link from "next/link.js";
import Image from "next/image";
import freshFood from '../../public/Assets/Images/freshFood.webp'

export default function page() {
  return (
    <>
      <div className="bg-black flex items-center justify-evenly flex-row max-lg:flex-col max-lg:m-auto max-sm:w-[90%]">
        <div className="flex flex-col justify-around items-center">
          <div className="text-white relative top-80 max-lg:top-8 m-5 w-[90%] mb-96 max-lg:mb-16">
            <Image src={freshFood} className="" />
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
              Lorem ipsum dolorr sit amet, consectetuer adipiiscing elite.
              Aenean quis commodoo ligula eget dolor. Aeneanan massa. Cum socies
              natoque penatibus etapi magnis dis parturients montes, nascetur
              ridiculus mus cume. Donenect quam felis, ultricies nec,
              pellentesque eu, pretiumus quis, sem In.
            </p>
          </div>
          <div className=" text-[#cdbba2] grid grid-cols-2 gap-4  max-lg:flex max-lg:flex-col">
            <div className="flex items-center">
              <GiForkKnifeSpoon className="text-[#DAA760] text-5xl mr-2" />
              <div>
                <div className="text-3xl text-white font-semibold">50</div>
                <div className="text-xl font-light text-[#cdbba2]">
                  Food Variant
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <SiHomeassistantcommunitystore className="text-[#DAA760] text-5xl mr-2" />
              <div className="">
                <div className="text-3xl text-white font-semibold">100</div>
                <div className="text-xl font-light text-[#cdbba2]">
                  Person Capacity
                </div>
              </div>
            </div>
            <div className="text-[#cdbba2] mb-96 max-lg:mb-16">
              {" "}
              Your attendant is important for us,{" "}
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
