"use client";
import Link from "next/link";
import React, { useState } from "react";
import Reserve2 from "../../Components/HomeStyleTwo/Reserve2";
import { MdOutlineCancelPresentation } from "react-icons/md"; // Import the icon

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL"); // Track selected category

  // All images with their categories
  const images = [
    { src: "/Assets/Images/g1.webp", text: "CHEF COOKING", category: "THE RESTAURANT" },
    { src: "/Assets/Images/g2.webp", text: "BEEF KEBAB", category: "FOOD" },
    { src: "/Assets/Images/g3.webp", text: "A GLASS OF WINE", category: "DRINK" },
    { src: "/Assets/Images/g4.webp", text: "INSIDE THE RESTAURANT", category: "THE RESTAURANT" },
    { src: "/Assets/Images/g5.webp", text: "THE DESERT", category: "FOOD" },
    { src: "/Assets/Images/g6.webp", text: "BAKED SHRIMP", category: "FOOD" },
    { src: "/Assets/Images/g7.webp", text: "SHRIMP ON APICE", category: "FOOD" },
    { src: "/Assets/Images/g8.webp", text: "COOKING STEAK", category: "THE RESTAURANT" },
    { src: "/Assets/Images/g9.webp", text: "BEEF KEBAB", category: "FOOD" },
    { src: "/Assets/Images/g10.webp", text: "RESTAURANT TABLE", category: "THE RESTAURANT" },
    { src: "/Assets/Images/g11.webp", text: "INSIDE THE RESTAURANT", category: "THE RESTAURANT" },
    { src: "/Assets/Images/g12.webp", text: "WINE WITH CHERRY", category: "DRINK" },
  ];

  const openImagePreview = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImagePreview = () => {
    setSelectedImage(null);
  };

  // Filter images based on the selected category
  const filteredImages = selectedCategory === "ALL" ? images : images.filter(img => img.category === selectedCategory);

  return (
    <>
      <div className="flex items-center justify-center flex-col my-32">
        {/* Navigation Links */}
        <div className="text-white flex flex-row items-center justify-around mb-16 z-30 gap-10">
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

        {/* Image Gallery */}
        <div className="text-white grid grid-cols-4 grid-rows-3 md:grid-cols-3 gap-10 w-[70%]">
          {filteredImages.map((item, index) => (
            <div key={index} className="relative group" onClick={() => openImagePreview(item.src)}>
              <img
                className="cursor-pointer hover:opacity-40 duration-700 w-full"
                src={item.src}
                alt={`Gallery Image ${index + 1}`}
              />
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 group-hover:opacity-100 duration-700 bg-black bg-opacity-50">
                <p className="text-[#DAA760] text-xl font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImagePreview}
        >
          <div className="relative">
            <img
              className="max-w-full max-h-screen cursor-pointer"
              src={selectedImage}
              alt="Preview"
            />
            <MdOutlineCancelPresentation
              className="absolute top-2 right-2 text-white bg-[#DAA760] p-2 rounded-full cursor-pointer"
              size={36}
              onClick={closeImagePreview}
            />
          </div>
        </div>
      )}

      <Reserve2 />
    </>
  );
}
