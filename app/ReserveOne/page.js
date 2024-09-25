import React from "react";
import Header from "../../Components/HeaderFooter/Header";
import FormOne from '../../Components/ReserveOne/FormOne'
import Image from "next/image";
import ReserveHome from '../../public/Assets/Images/ReserveHome.webp'

export default function page() {
  return (
    <>
      <div>
        <div className="relative z-[30] bg-black ">
          <Header />
        </div>
        <div className="relative bg-black">
          <Image
            className="w-full h-[70vh] object-cover bg-black opacity-45"
            src={ReserveHome}
            alt="Background"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-around  max-lg:mt-10 ">
          <div className="">
            <div className="text-8xl -mt-44 font-semibold text-[#eddcdc] mb-10 font-sans max-lg:m-5">
              RESERVATION
            </div>
          </div>
        </div>
      </div>
      <FormOne/>
    </>
  );
}
