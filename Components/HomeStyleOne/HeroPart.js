"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from '../HeaderFooter/Header';
import { FaPlayCircle } from "react-icons/fa";

export default function Page() {
  const [isVideoOpen, setIsVideoOpen] = useState(false); // State to track if the video modal is open

  const handleVideoOpen = () => {
    setIsVideoOpen(true); // Open the video modal
  };

  const handleVideoClose = () => {
    setIsVideoOpen(false); // Close the video modal
  };

  return (
    <>
      <div className="relative z-[30] bg-black ">
        <Header />
      </div>
      <div className="max-lg:flex max-lg:flex-row">
        <div className="relative bg-black">
          <img
            className="w-full h-[100vh] object-cover bg-black opacity-45"
            src="/Assets/Images/hero33.webp"
            alt="Background"
          />
          <div className="xl:absolute inset-0 flex items-center justify-around mt-[30%] max-xl:mt-[5%]">
            <img
              className="object-contain w-[50%] max-lg:w-[50%] max-md:w-full max-sm:w-[70%]"
              src="/Assets/Images/hero11.webp"
              alt="404 not found"
            />
          </div>
          <div className="xl:absolute right-0 top-[45%] flex items-center justify-end max-lg:justify-center max-lg:items-center max-2xl:justify-end max-2xl:top-[45%]">
            <img
              className="h-[70vh]"
              src="/Assets/Images/hero22.webp"
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-around max-lg:flex-col max-lg:mt-10">
          <div className="">
            <div className="text-8xl font-semibold text-[#eddcdc] mb-10 font-sans max-lg:m-5">
              We Only Serve <br />A{" "}
              <span className="hover:text-black duration-1000 text-[#c8934d]">
                Delicious
              </span>
              <br /> Dishes
            </div>
            <button className="bg-[#DAA760] max-lg:m-5 mt-5 text-black w-56 p-4 hover:bg-[#130F0C] hover:duration-300 hover:text-white hover:border-2 border-opacity-100">
              RESERVE NOW
            </button>
          </div>
          <div className="text-[#eddcdc] w-[20%] max-lg:w-[90%] text-2xl font-serif">
            {/* Play button to trigger video modal */}
            <FaPlayCircle
              className="text-[#DAA760] my-10 text-6xl cursor-pointer hover:scale-150 hover:duration-700 duration-700 animate-pulse"
              onClick={handleVideoOpen} // Open video on click
            />
            The only thing we’re serious about is food. We will wait for your
            seat in our restaurant and satisfy your self with quality food
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
          <div className="relative w-full h-full max-w-4xl mx-auto">
            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-white text-4xl font-bold z-50"
              onClick={handleVideoClose}
            >
              &times;
            </button>
            <iframe
              className="w-full h-[80vh] max-lg:h-[60vh]"
              src="https://www.youtube.com/embed/1MTkZPys7mU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
