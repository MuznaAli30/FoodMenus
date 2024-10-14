import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Reserve2 from "../OurChefs/Reserve2";
import Image from "next/image";
import Chef3 from '../../public/Assets/Images/Chef3.webp';
import Chef2 from '../../public/Assets/Images/Chef2.webp';
import Chef1 from '../../public/Assets/Images/Chef1.webp';


export default function   page() {
  return (
    <>
      <div className="bg-black flex justify-center items-center flex-col max-sm:overflow-x-hidden">
        <div className="flex relative top-10 flex-col max-lg:top-0 max-lg:m-5 ">
          <div className="flex text-[#DAA760] flex-row items-center justify-center">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl ">OUR CHEF</div>
            <IoRemoveOutline className="text-7xl font-extrabold" />
          </div>
          <div>
            <div className="text-white text-5xl font-bold font-sans mb-7 flex items-center justify-center max-sm:text-2xl">
              Behind the Kitchen
            </div>
            <div className="text-[#cdbba2] max-lg:w-[90%] flex items-center justify-center text-center max-sm:w-full">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget
              <br /> dolor. Aenean massa. Cum sociis natoque penatibus et magnis
              parturient montes.
            </div>
          </div>

          <div className="mb-40 max-lg:mb-0 flex flex-row mt-16 justify-around items-center gap-10 opacity-85 max-lg:flex-col">
            <div>
              <Image
                src={Chef1}
                className=" hover:opacity-85"
              />
              <div className="flex flex-col m-10 items-center justify-around text-center">
                <div className="text-[#DAA760] text-xl font-semibold ">
                  CHUK MORTAN
                </div>
                <div className="hover:text-[#DAA760] hover:scale-125 duration-500 cursor-pointer text-[#f7f0e6] my-2">
                  Assistant chef
                </div>
                <div className="text-[#DAA760]  flex flex-row gap-4">
                  <div className="hover:text-[#f7f0e6] duration-500 cursor-pointer">
                    <FaFacebookF />{" "}
                  </div>
                  <div className="hover:text-[#f7f0e6] duration-500 cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                  <div className="hover:text-[#f7f0e6] duration-500 cursor-pointer">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image

                src={Chef2}
                className=" hover:opacity-85"
              />
              <div className="flex flex-col m-10 items-center justify-around text-center">
                <div className="text-[#DAA760] text-xl font-semibold ">
                  MANUEL DELANEY
                </div>
                <div className="hover:text-[#DAA760] hover:scale-125 duration-500 cursor-pointer text-[#f7f0e6] my-2">
                  Chef
                </div>
                <div className="text-[#DAA760]  flex flex-row gap-4">
                  <div className="hover:text-[#f7f0e6] duration-500 cursor-pointer">
                    <FaFacebookF />{" "}
                  </div>
                  <div className="hover:text-[#f7f0e6] duration-500 cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                  <div className="hover:text-[#f7f0e6] duration-500 cursor-pointer">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={Chef3}
                className="hover:opacity-85"
              />
              <div className="flex flex-col m-10 items-center justify-around text-center">
                <div className="text-[#DAA760] text-xl font-semibold ">
                  MORGAN BULLOCK
                </div>
                <div className="hover:text-[#DAA760] hover:scale-125 duration-500 cursor-pointer text-[#f7f0e6] my-2">
                  Assistant chef
                </div>
                <div className="text-[#DAA760]  flex flex-row gap-4">
                  <div className="hover:text-[#f7f0e6] duration-500 cursor-pointer">
                    <FaFacebookF />{" "}
                  </div>
                  <div className="hover:text-[#f7f0e6] duration-500 cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                  <div className="hover:text-[#f7f0e6] duration-500 cursor-pointer">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reserve2/>
    </>
  );
}
