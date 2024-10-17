import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import OurChef from '../OurChefs/OurChef'
import Image from "next/image";
import BestServices2 from '../../public/Assets/Images/BestServices2.webp'
import Signature from '../../public/Assets/Images/Signature.webp'
import Link from "next/link";

export default function ChefOfTheDishes() {
  return (
    <>
      <div className="flex flex-row max-lg:flex-col items-center justify-evenly mt-44 max-sm:overflow-x-hidden">
        <div className="text-[#DAA760] flex flex-col justify-start  max-lg:w-[90%] mt-16 max-lg:mt-0 max-lg:text-justify">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">BEST QUALITY</div>
          </div>
          <div className="text-white text-5xl font-bold font-sans flex items-center max-sm:text-2xl">
            Of the Dishes
          </div>
          <div className="text-cyan-50 flex justify-start ">
            <p className="w-96  text-[#cdbba2] mt-5 mb-5 max-sm:w-[95%]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              quem commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              et mus penatibus et magnis dis parturient montes, nascetur
              ridiculus.
            </p>
          </div>
          <div>
            <div className="w-80 max-sm:w-[90%]">
              <Image src={Signature}/>
            </div>
            <div className="text-white font-medium text-2xl">
              Maynard Peters , CEO
            </div>
            <Link href={"/ReserveTwo"}>
            <button className="font-mono h-16 bg-[#DAA760] mt-5 text-black w-44 p-4 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
              RESREVE NOW
            </button>
            </Link>
          </div>
        </div>
        <div className="max-sm:w-[90%] relative  mt-5">
        <div className=" bg-white flex top-36 absolute max-lg:-right-48  z-10 max-sm:right-0 ">
        <div className="flex flex-col">
            <div className="flex flex-row ">
            <div className="bg-[#DAA760] h-[8vh] m-8 mr-5  w-1 "></div>
          <div className="w-80 font-serif m-8 ml-0 max-sm:w-[85%]  text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          </div>
          <div className="m-8 mt-0">Maynard P .</div>
        </div>
        </div>
        </div>


        <div>
          <Image src={BestServices2} className="max-lg:w-full"/>
        </div>
      </div>
      <OurChef/>
    </>
  );
}
