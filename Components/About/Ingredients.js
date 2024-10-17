import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import ContentHome1 from '../HomeStyleTwo/ContentHome1'
import OurCommitmentOfAbout from '../About/OurCommitmentOfAbout'
import Image from "next/image";
import Signature from '../../public/Assets/Images/Signature.webp';
import IngredientsPic from '../../public/Assets/Images/Ingredients.webp'
import Link from "next/link";

export default function Ingredients() {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly mb-44 max-lg:flex-col max-sm:overflow-x-hidden">
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify max-lg:w-[90%]">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">OUR STORY</div>
          </div>
          <div className="text-white text-5xl max-sm:text-4xl font-bold font-sans flex items-center">
          The Ingredients
          </div>
          <div className="text-cyan-50 flex justify-start">
            <p className="w-96 max-lg:w-[90%] text-[#cdbba2]  mt-5 mb-5">
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
        <div className="relative max-sm:w-[90%]">
        <div className=" bg-white flex top-48 absolute z-10 max-lg:items-center max-lg:justify-center max-lg:-ml-52 max-sm:ml-0">
        <div className="flex flex-col">
            <div className="flex flex-row ">
            <div className="bg-[#DAA760] h-[8vh] m-8 mr-5  w-1"></div>
          <div className="w-80 font-serif m-8 ml-0  text-gray-800 max-sm:w-[95%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          </div>
          <div className="m-8 mt-0">Maynard P .</div>
        </div>
        </div>
        </div>

        <div>
          <Image src={IngredientsPic} className="w-full h-[90vh] max-lg:mt-4 max-sm:h-[60vh]"/>
        </div>
      </div>
      <ContentHome1/>
      <OurCommitmentOfAbout/>
    </>
  );
}
