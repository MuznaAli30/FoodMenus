import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import Reserve1 from '../HomeStyleOne/Reserve1'
import Footer from '../HeaderFooter/Footer';

export default function Desert() {
  return (
    <>
    <div className="text-white flex flex-col items-center justify-center mt-[50%] mb-[50%]">
    <div className="bg-fixed-pic8 h-[55vh] opacity-95 w-full max-lg:w-[110%] ">
    <div className=" flex  items-center justify-center flex-col max-lg:flex-col max-lg:m-auto max-sm:w-[90%]">
      <div className="text-white flex flex-col items-center justify-center mt-56 bg-black">
      <div className="text-5xl font-bold mt-16">Dessert</div>
      <div className="m-5 flex mb-16 flex-row items-center justify-around">
        <div className="text-[#DAA760] text-xl font-serif text-center">
          <IoRemoveOutline className="text-7xl font-extrabold" />
        </div>
        <div className=" text-[#DAA760] text-xl font-serif text-center">
          <FaAsterisk />
        </div>
        <div className="text-[#DAA760] text-xl font-serif text-center">
          <IoRemoveOutline className="text-7xl font-extrabold" />
        </div>
      </div>

      {/* menus */}
      <div className="flex flex-row gap-20 items-center justify-center m-10">
      {/* first menu colunm */}
      <div className="flex flex-col items-start text-white">
        <div className="flex flex-row justify-evenly mt-10 text-2xl">

          
          <div className="mr-56">Pork Tenderloin Marinated In Yogurt</div>
          <div>$25</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3 "></div>
        <div className="text-gray-400">Pork / Tenderloin / Yogurt</div>


        <div className="flex flex-row justify-between w-full mt-10 text-2xl">
          <div>Grilled Pork With Preserved Lemons</div>
          <div>
          $27</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Pork / Lemon / Onions</div>


        <div className="flex flex-row justify-between w-full mt-10 text-2xl">
          <div>Roasted Prawns with Coriander
          </div>
          <div>
          $18</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Prawn / Coriander / Spices</div>{" "}


        <div className="flex flex-row justify-between w-full mt-10 text-2xl">
          <div>Prawn Sausage Cassaoulet</div>
          <div>$25</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Prawn / Sausage / Tomato</div>{" "}


        <div className="flex flex-row justify-between w-full mt-10 text-2xl">
          <div>
          Citrus Cured Salmon​ With Honey</div>
          <div>$20</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Salmon / Citrus / Honey / Spice.</div>
      </div>

      {/* second menu column */}
      <div className="flex flex-col items-start text-white">


        <div className="flex flex-row justify-evenly mt-10 text-2xl">
          <div className="mr-56">Pork Tenderloin Marinated In Yogurt</div>
          <div>$25</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3 "></div>
        <div className="text-gray-400">Pork / Tenderloin / Yogurt</div>


        <div className="flex flex-row justify-between w-full mt-10 text-2xl">
          <div>Grilled Pork With Preserved Lemons</div>
          <div>
          $27</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Pork / Lemon / Onions</div>


        <div className="flex flex-row justify-between w-full mt-10 text-2xl">
          <div>Roasted Prawns with Coriander
          </div>
          <div>
          $18</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Prawn / Coriander / Spices</div>{" "}


        <div className="flex flex-row justify-between w-full mt-10 text-2xl">
          <div>Prawn Sausage Cassaoulet</div>
          <div>$25</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Prawn / Sausage / Tomato</div>{" "}
        
        <div className="flex flex-row justify-between w-full mt-10 text-2xl">
          <div>
          Citrus Cured Salmon​ With Honey</div>
          <div>$20</div>
        </div>
        <div className="h-[0.2vh] bg-[#DAA760] w-full mt-3 mb-3"></div>
        <div className="text-gray-400">Salmon / Citrus / Honey / Spice.</div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
   <Reserve1/>
   <Footer/>
  </>
  );
}
