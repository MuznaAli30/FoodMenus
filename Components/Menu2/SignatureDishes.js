import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import Appetizer from '../Menu2/Appetizer'

export default function SignatureDishes() {
  return (
    <>
      <div className="text-white flex flex-col items-center justify-center mb-44 max-lg:w-[90%] max-lg:m-5">
        <div className="text-5xl font-bold mt-44">Signature Dish</div>
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
        <div className="flex flex-row gap-20 items-center  max-lg:gap-0 max-lg:flex-col justify-center">
          {/* first menu colunm */}
          <div className="flex flex-col items-start text-white">
            <div className="text-[#DAA760] text-3xl mb-5">APPETIZER</div>
            <div className="flex flex-row justify-between max-lg:gap-20 mt-10 text-2xl">
              <div>Citrus Cured Salmon​ With Honey </div>
              <div className="text-[#DAA760] max-lg:hidden">
                ............................................................................ 
              </div>
              <div> $25</div>
            </div>
            <div className="text-[#DAA760]">Salmon / Citrus / Honey / Spice.</div>
            
            <div className="flex flex-row justify-between max-lg:gap-16 mt-10 text-2xl">
              <div>Pork Tenderloin Marinated In Yogurt</div>
              <div className="text-[#DAA760] max-lg:hidden">
                .....................................................................
              </div>
              <div>$25</div>
            </div>
           
            <div className="text-[#DAA760]">Pork / Tenderloin / Yogurt</div>
            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>Grilled Pork With Preserved Lemons</div>
              <div className="text-[#DAA760] max-lg:hidden">
                ............................................................
              </div>
              <div>$27</div>
            </div>
            
            <div className="text-[#DAA760]">Pork / Lemon / Onions</div>
            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>Roasted Prawns with Coriander</div>
              <div className="text-[#DAA760] max-lg:hidden">
                ...................................................................
              </div>
              <div>$18</div>
            </div>
            
            <div className="text-[#DAA760]">Prawn / Coriander / Spices</div>{" "}
            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>Prawn Sausage Cassaoulet</div>
              <div className="text-[#DAA760] max-lg:hidden">
                ......................................................................
              </div>
              <div>$25</div>
            </div>
           
            <div className="text-[#DAA760]">Prawn / Sausage / Tomato</div>{" "}
            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>Shrimp Scampy</div>
              <div className="text-[#DAA760] max-lg:hidden">
                ................................................................................................
              </div>
              <div>$12</div>
            </div>

            <div className="text-[#DAA760]">Shrimp / Cheese / Tomato</div>{" "}
          </div>

          {/* second menu column */}
          <div className="flex flex-col text-white max-lg:w-[90%]">
            <div className="text-[#DAA760] text-3xl mb-5">MAIN DISH</div>
            <div className="flex flex-row justify-between mt-10 text-2xl">
              <div>Pork Tenderloin Marinated In Yogurt</div>
              <div className="text-[#DAA760] max-lg:hidden">
                ..................................................
              </div>
              <div>$25</div>
            </div>
           
            <div className="text-[#DAA760]">Pork / Tenderloin / Yogurt</div>
            <div className="flex flex-row w-full justify-between  mt-10 text-2xl ">
              <div>Grilled Pork With Preserved Lemons</div>
              <div className="text-[#DAA760] max-lg:hidden">
                ..................................................
              </div>
              <div>$27</div>
            </div>
            
            <div className="text-[#DAA760]">Pork / Lemon / Onions</div>
            <div className="text-[#DAA760] text-3xl mt-[7%]">DESERT</div>
            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>
              Prawn Sausage Cassaoulet</div>
              <div className="text-[#DAA760] max-lg:hidden">
                ............................................................................
              </div>
              <div>$19</div>
            </div>

            <div className="text-[#DAA760]">Prawn / Sausage / Tomato</div>{" "}
            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>Shrimp Scampy</div>
              <div className="text-[#DAA760] max-lg:hidden">
                ................................................................................................
              </div>
              <div>$12</div>
            </div>

            <div className="text-[#DAA760]">Shrimp / Cheese / Tomato</div>{" "}

            <div className="flex flex-row justify-between w-full mt-10 text-2xl">
              <div>Citrus Cured Salmon​ With Honey</div>
              <div className="text-[#DAA760] max-lg:hidden">
                ..................................................................
              </div>
              <div>$20</div>
            </div>

            <div className="text-[#DAA760]">Salmon / Citrus / Honey / Spice.</div>{" "}
            
          </div>
        </div>
      </div>
      <Appetizer/>
    </>
  );
}
