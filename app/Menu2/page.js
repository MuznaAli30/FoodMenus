import React from "react";
import Header from "../../Components/HeaderFooter/Header";
import SignatureDishhes2 from '../../Components/Menu2/SignatureDishes'

export default function Services() {
  return (
    <>
      <div>
        <div className="relative z-[30] bg-black ">
          <Header />
        </div>
        <div className="relative bg-black">
          <img
            className="w-full h-[70vh] object-cover bg-black opacity-45"
            src="/Assets/Images/ReserveHome.webp"
            alt="Background"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-around  max-lg:mt-10 ">
          <div className="">
            <div className="text-8xl -mt-44 font-semibold text-[#eddcdc] mb-10 font-sans max-lg:m-5">
              OUR MENUS
            </div>
          </div>
        </div>
      </div>
      <SignatureDishhes2/>
    </>
  );
}