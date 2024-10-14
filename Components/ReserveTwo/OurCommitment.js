import React from "react";
import StayCloseWithUs from '../ReserveTwo/StayCloseWithUs'
import OurCommitment2 from '../../public/Assets/Images/OurCommitment2.webp'
import OurCommitment1 from '../../public/Assets/Images/OurCommitment1.webp'
import Image from "next/image";


export default function OurCommitment() {
  return (
    <>
      <div className=" text-white flex flex-row max-lg:flex-col items-center gap-24 justify-center my-44 max-sm:overflow-x-hidden max-sm:w-[90%]">
        <div className="w-[45%] max-sm:w-[90%]">
          <Image src={OurCommitment1} />
          <div className="font-mono mt-5 text-[#cdbba2]">
            We provide valuable experiences that you will never forget with your
            friends or partner. Delicious food and refreshing drinks will make
            you feel more happy and satisfied
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <div className="flex flex-col font-mono max-sm:w-[90%]">
            <div className="font-serif text-xl mb-5 text-cyan-50"> OUR COMMITMENT</div>
            <div className="w-96 max-sm:w-[99%] text-[#cdbba2]">
              We are committed to providing the best and serving wholeheartedly
              to customers. We will provide the best service from waiters to
              chefs who work with us. A typical dish with great Indonesian taste
              with an abundant and delicious flavors on the tongue, giving
              satisfaction to the heart. 
              <div className="mt-5 mb-10 text-[#cdbba2]">We will give the best from our
              restaurant so that you come home feeling happy and satisfied
              because you have coming from our restaurant. Hopefully you will
              feel satisfaction from our restaurant services.</div>
            <Image src={OurCommitment2} className="max-lg:w-[90%]"/>

            </div>

          </div>
        </div>
      </div>
      <StayCloseWithUs/>
    </>
  );
}
