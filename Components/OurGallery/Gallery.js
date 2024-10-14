"use client";
import React, { useState } from "react";
import Reserve2 from '../OurChefs/Reserve2';
import { MdOutlineCancelPresentation } from "react-icons/md";
import Image from "next/image";
import g1 from "../../public/Assets/Images/g1.webp";
import g3 from "../../public/Assets/Images/g3.webp";
import g4 from "../../public/Assets/Images/g4.webp";
import g5 from "../../public/Assets/Images/g5.webp";
import g6 from "../../public/Assets/Images/g6.webp";
import g7 from "../../public/Assets/Images/g7.webp";
import g8 from "../../public/Assets/Images/g8.webp";
import g9 from "../../public/Assets/Images/g9.webp";
import g10 from "../../public/Assets/Images/g10.webp";
import g11 from "../../public/Assets/Images/g11.webp";
import g12 from "../../public/Assets/Images/g12.webp";
import g2 from "../../public/Assets/Images/g2.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [selectedimg, setSelectedimg] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // All imgs with their categories
  const imgs = [
    { src: g1, text: "CHEF COOKING", category: "THE RESTAURANT" },
    { src: g2, text: "BEEF KEBAB", category: "FOOD" },
    { src: g3, text: "A GLASS OF WINE", category: "DRINK" },
    { src: g4, text: "INSIDE THE RESTAURANT", category: "THE RESTAURANT" },
    { src: g5, text: "THE DESERT", category: "FOOD" },
    { src: g6, text: "BAKED SHRIMP", category: "FOOD" },
    { src: g7, text: "SHRIMP ON APICE", category: "FOOD" },
    { src: g8, text: "COOKING STEAK", category: "THE RESTAURANT" },
    { src: g9, text: "BEEF KEBAB", category: "FOOD" },
    { src: g10, text: "RESTAURANT TABLE", category: "THE RESTAURANT" },
    { src: g11, text: "INSIDE THE RESTAURANT", category: "THE RESTAURANT" },
    { src: g12, text: "WINE WITH CHERRY", category: "DRINK" },
  ];

  const openimgPreview = (imgSrc) => {
    setSelectedimg(imgSrc);
  };

  const closeimgPreview = () => {
    setSelectedimg(null);
  };

  // Filter imgs based on the selected category
  const filteredimgs =
    selectedCategory === "ALL"
      ? imgs
      : imgs.filter((img) => img.category === selectedCategory);

  return (
    <>
      <div className="flex items-center justify-center flex-col my-32">
        {/* Navigation Links */}
        <div className="text-white flex  flex-row items-center justify-around mb-16 z-30 gap-10 max-lg:gap-5">
          {["ALL", "FOOD", "THE RESTAURANT", "DRINK"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer duration-500 ${
                selectedCategory === category
                  ? "text-[#DAA760] underline underline-offset-4"
                  : "hover:text-[#DAA760] hover:underline-offset-4"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* img Gallery */}
        <div className="text-white grid grid-cols-4 max-lg:flex max-lg:flex-col grid-rows-3 md:grid-cols-3 gap-10 w-[70%]">
          {filteredimgs.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onClick={() => openimgPreview(item.src)}
            >
              <Image
                className="cursor-pointer hover:opacity-40 duration-700 w-full "
                src={item.src}
                alt={`Gallery img ${index + 1}`}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              />
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 group-hover:opacity-100 duration-700 bg-black bg-opacity-50">
                <p className="text-[#DAA760] text-xl font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* img Preview Modal */}
      {selectedimg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeimgPreview}
        >
          <div className="relative">
            <Image
              className="max-w-full max-h-screen cursor-pointer"
              src={selectedimg}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              alt="Preview"
            />
            <MdOutlineCancelPresentation
              className="absolute top-2 right-2 text-white bg-[#DAA760] p-2 rounded-full cursor-pointer"
              size={36}
              onClick={closeimgPreview}
            />
          </div>
        </div>
      )}

      <Reserve2 />
    </>
  );
}
