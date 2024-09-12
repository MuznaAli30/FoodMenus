import React from "react";
import Reserve2 from "./Reserve2";
import { IoRemoveOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";

export default function BestServices() {
  return (
    <>
      <div className="flex flex-row justify-center items-center mb-56 mt-56">
        <div className="bg-white flex flex-col  items-center justify-center w-[35%] h-[84vh]">
          <div className="flex text-[#DAA760] flex-row items-center justify-center  m-auto">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl ">THE SERVICES</div>
            <IoRemoveOutline className="text-7xl font-extrabold" />
          </div>
          <div className="text-6xl font-bold items-center justify-center text-center m-auto -mt-14">
            Best Services
          </div>
          <div className="w-96 text-center text-black font-light m-auto -mt-14">
            <p className="mb-10">
            Lorem ipsum dolor siit amet, consectetuer adipiscing eu. Aenean
            quesi comodo liigula egett dolor. Aenean massa. Sociis natoq
            penatibus et magnis dis parturient eu mont nascetur ridiiculus mus.
            Donenecte quam eu felis magni ultricies nec, pellentesque eu, sem
            In.
            </p>
            <div className="mb-10  grid grid-cols-2 gap-4  max-lg:flex max-lg:flex-col m-auto">
              <div className="flex items-center hover:text-[#cdbba2]">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Fine Dining
              </div>
              <div className="flex items-center hover:text-[#cdbba2]">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Food Catering
              </div>
              <div className="flex items-center hover:text-[#cdbba2]">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Food Delivery
              </div>
              <div className="flex items-center hover:text-[#cdbba2]">
                <FaCircleCheck className="text-[#DAA760] mr-2" />
                Wedding Ceremony
              </div>
            </div>
            <div className="flex items-center justify-center m-auto">
                <button className="bg-[#DAA760] max-lg:m-5  text-black w-56 p-4 hover:bg-transparent hover:duration-300 hover:text-black hover:border-2 border-black border-opacity-100">
                  LEARN MORE
                </button>
              </div>
          </div>
        </div>
        <img src="/Assets/Images/BestServices2.webp"></img>
      </div>

      <Reserve2 />
    </>
  );
}
