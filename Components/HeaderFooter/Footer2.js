import React from "react";
import { FaFacebookF } from "react-icons/fa6"; 
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { LuChefHat } from "react-icons/lu";

export default function Footer2() {
  return (
<div className="flex flex-row items-center justify-around gap-96 mt-16 max-sm:justify-between max-lg:gap-5 max-lg:flex-col">
      <div className="flex justify-center items-center text-[#d08829] font-mono text-4xl ">
      <LuChefHat />
      </div>
      <div className="flex">
        <div class="flex items-center justify-around text-3xl gap-24 text-md font-medium  text-[#d08829] max-lg:gap-10 max-lg:items-center">
        <div >
          <FaFacebookF className="cursor-pointer hover:text-[#bec7cc] hover:duration-700"/>
          </div>
          <div >
          <FaTwitter className="cursor-pointer hover:text-[#bec7cc] hover:duration-700" />
          </div>
          <div>
          <FaInstagram className="cursor-pointer hover:text-[#bec7cc] hover:duration-700" />
          </div>
          <div>
          <SiTripadvisor className="cursor-pointer hover:text-[#bec7cc] hover:duration-700" />
          </div>
        </div>
      </div>
     
    </div>
  );
}
