import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import SpecialMenu from './SpecialMenu'

export default function TheStory() {
  return (
    <>
      <div className="mb-40 mt-[50%] max-lg:mb-0 flex justify-around items-center gap-10  max-lg:flex-col">
        <div className="flex flex-row gap-10">
          <div>
            <img src="/Assets/Images/TheStory2.webp" />
          </div>
          <div>
            <img src="/Assets/Images/TheStory22.webp" />
          </div>

          {/* white box */}
          <div>
            <div className="bg-white relative  top-[10%] right-[12%] w-96 h-[55vh] shadow-2xl mb-5 text-black flex flex-col ">
              <div className="m-5 flex flex-row items-center justify-center">
                <div className="text-[#DAA760] text-xl font-serif text-center">
                  <IoRemoveOutline className="text-7xl font-extrabold" />
                </div>
                <div className=" text-[#DAA760] text-xl font-serif text-center">
                  THIS WEEK
                </div>
                <div className="text-[#DAA760] text-xl font-serif text-center">
                  <IoRemoveOutline className="text-7xl font-extrabold" />
                </div>
              </div>
              <div className="text-6xl font-bold items-center justify-center text-center">
                The Story
              </div>
              <div className="w-72  m-auto text-center text-black font-light">
                Lorem ipsum dolor sit amet, consectetuer egetar adipiscing elit.
                Aenean quis comodo ligula Cum eget dolor. Aenean massa. Cum
                sociis natoqu esa penatibus et magnis dis parturient, nascetur
                ridiculus mus.
                <button className="bg-[#DAA760] max-lg:m-5  mt-10 text-black w-56 p-4 hover:bg-transparent hover:duration-300 hover:text-black hover:border-2 border-black border-opacity-100">
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className=" text-[#cdbba2] mt-24 grid grid-cols-2 gap-4  max-lg:flex max-lg:flex-col">
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
            </div>
          </div>
        </div>
      </div>
      <SpecialMenu/>
      </>
  );
}
