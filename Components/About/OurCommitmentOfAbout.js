import React from "react";
import Reserve1 from "../HomeStyleOne/Reserve1";
import Footer from "../HeaderFooter/Footer";
import Image from "next/image";
import OurCommitment1 from "../../public/Assets/Images/OurCommitment1.webp";
import OurCommitment2 from "../../public/Assets/Images/OurCommitment2.webp";

export default function OurCommitmentOfAbout() {
  return (
    <>
      <div className=" text-white flex flex-row items-center gap-24 justify-center my-44">
        <div className="w-[45%]">
          <Image src={OurCommitment1} />
          <div className="font-mono mt-5 text-[#cdbba2]">
            We provide valuable experiences that you will never forget with your
            friends or partner. Delicious food and refreshing drinks will make
            you feel more happy and satisfied
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col font-mono">
            <div className="font-serif text-xl mb-5 text-cyan-50">
              {" "}
              OUR COMMITMENT
            </div>
            <div className="w-96 text-[#cdbba2]">
              We are committed to providing the best and serving wholeheartedly
              to customers. We will provide the best service from waiters to
              chefs who work with us. A typical dish with great Indonesian taste
              with an abundant and delicious flavors on the tongue, giving
              satisfaction to the heart.
              <div className="mt-5 mb-10 text-[#cdbba2]">
                We will give the best from our restaurant so that you come home
                feeling happy and satisfied because you have coming from our
                restaurant. Hopefully you will feel satisfaction from our
                restaurant services.
              </div>
              <Image src={OurCommitment2} />
            </div>
          </div>
        </div>
      </div>
      <Reserve1 />
      <Footer />
    </>
  );
}
