import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
import MainDish from '../Menu2/MainDish'

export default function Appetizer() {
  return (
    <>
      <div className="flex flex-row items-center justify-around mt-44">
        <div className="text-[#DAA760] flex flex-col justify-start mt-16 max-lg:mt-0 max-lg:text-justify max-lg:w-[100%]">
          <div className="flex flex-row items-center justify-start">
            <IoRemoveOutline className="text-7xl font-extrabold" />
            <div className="text-xl">STARTER</div>
          </div>
          <div className="text-white text-5xl font-bold font-sans flex items-center">
            Appetizer
          </div>
          <div className="text-white flex flex-row justify-evenly mt-10 text-2xl">
              <div>Citrus Cured Salmon​ With Honey </div>
              <div className="text-[#DAA760]">
                .............................................. 
              </div>
              <div> $25</div>
            </div>
            <div className="text-[#DAA760]">Salmon / Citrus / Honey / Spice.</div>
            
            <div className="text-white  flex flex-row justify-evenly mt-10 text-2xl">
              <div>Pork Tenderloin Marinated In Yogurt</div>
              <div className="text-[#DAA760]">
                .........................................
              </div>
              <div>$25</div>
            </div>
           
            <div className="text-[#DAA760]">Pork / Tenderloin / Yogurt</div>
            <div className="flex text-white  flex-row justify-between  mt-10 text-2xl">
              <div>Grilled Pork With Preserved Lemons</div>
              <div className="text-[#DAA760]">
                ...........................
              </div>
              <div>$27</div>
            </div>
            
            <div className="text-[#DAA760]">Pork / Lemon / Onions</div>
            <div className="flex text-white  flex-row justify-between mt-10 text-2xl">
              <div>Roasted Prawns with Coriander</div>
              <div className="text-[#DAA760]">
                ...............................................
              </div>
              <div>$18</div>
            </div>
            
            <div className="text-[#DAA760]">Prawn / Coriander / Spices</div>{" "}
            <div className="flex text-white flex-row justify-between mt-10 text-2xl">
              <div>Prawn Sausage Cassaoulet</div>
              <div className="text-[#DAA760]">
                ..................................
              </div>
              <div>$25</div>
            </div>
           
            <div className="text-[#DAA760]">Prawn / Sausage / Tomato</div>{" "}
            <div className="flex text-white  flex-row justify-between mt-10 text-2xl">
              <div>Shrimp Scampy</div>
              <div className="text-[#DAA760]">
                ........................................................
              </div>
              <div>$12</div>
            </div>

            <div className="text-[#DAA760]">Shrimp / Cheese / Tomato</div>{" "}
        </div>
        <div className="flex top-[250%] left-[47%] absolute justify-end">
          <img src="/Assets/Images/Menu2Appetizer2.webp" />
        </div>

        <div>
          <img src="/Assets/Images/Menu2Appetizer1.webp" />
        </div>
        
      </div>
      <MainDish/>
    </>
  );
}
