import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import Footer from '../HeaderFooter/Footer'
import Link from "next/link";

export default function StayCloseWithUs() {
  return (
    <>
      <div className="bg-fixed-pic3 h-[55vh] opacity-95 w-full max-lg:w-full max-sm:overflow-x-hidden">
        <div className=" flex  items-center justify-center flex-col max-lg:flex-col max-lg:m-auto max-sm:w-[90%]">
          <div className="flex relative flex-col max-lg:mt-20 mt-24 ">
            <div className="flex text-[#DAA760] flex-row items-center justify-center ">
              <IoRemoveOutline className="text-7xl font-extrabold" />
              <div className="text-xl ">ANY QUSTION ?</div>
              <IoRemoveOutline className="text-7xl font-extrabold" />
            </div>
            <div className="text-white text-8xl max-sm:text-3xl max-lg:text-4xl font-bold font-sans mb-7 flex items-center justify-start">
              Stay Close With Us
            </div>
            
          </div>
          <div className="flex items-center justify-center">
            <Link href={"/ContactUs"}>
            <button className="bg-[#DAA760] max-lg:m-5  mt-5 text-black w-60 p-5 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
              CONTACT US
            </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
