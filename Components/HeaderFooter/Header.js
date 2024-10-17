"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiTwitter } from "react-icons/tfi";
import { FaTripadvisor } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Header1() {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close state of the sidebar
  const [dropdownStates, setDropdownStates] = useState({}); // State to manage which dropdowns are open

  let hoverTimeout; // To hold the timeout reference

  const handleMouseEnter = (dropdown) => {
    clearTimeout(hoverTimeout); // Clear any timeout if you hover again
    setHoveredDropdown(dropdown); // Set dropdown open
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setHoveredDropdown(null); // Set dropdown close after delay
    }, 200); // Delay closing the dropdown
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar open/close state
  };

  const toggleDropdown = (key) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the specific dropdown
    }));
  };

  // Sidebar items with dropdown options
  const items = [
    {
      name: "HOME",
      href: "/",
      key: "home",
      dropdownItems: [],
    },

    {
      name: "MENU",
      href: "/Menu2", // Updated link
      key: "menu",
      dropdownItems: [],
    },

    {
      name: "RESERVATION",
      href: "/ReserveTwo", // Updated link
      key: "reserve",
      dropdownItems: [],
    },

    {
      name: "CONTACT US",
      href: "/ContactUs", // Updated link
      key: "contact",
      dropdownItems: [],
    },
    {
      name: "ABOUT US",
      href: "/About", // Updated link
      key: "about",
      dropdownItems: [],
    },

    {
      name: "OUR CHEF",
      href: "/OurChefs", // Updated link
      key: "contact",
      dropdownItems: [],
    },

    {
      name: "GALLERY",
      href: "/OurGallery", // Updated link
      key: "contact",
      dropdownItems: [],
    },
    {
      name: "SERVICES",
      href: "/Services", // Updated link
      key: "contact",
      dropdownItems: [],
    },
  ];

  return (
    <>
      <div className="bg-[transparent] flex absolute w-full">
        <div className="bg-transparent text-white font-mono w-full flex justify-around items-center p-5 max-lg:hidden ">
          <div className="text-3xl font-serif ">
            <Link href={"/"}>FOODE MENUS</Link>
          </div>

          <div className="flex space-x-5 relative ">
            {/* Home page */}

            <Link
              className="hover:text-[#c8934d] duration-500 flex items-center gap-2"
              href="/"
            >
              HOME
            </Link>

            {/* Menus page */}

            <Link
              className="hover:text-[#c8934d] duration-500 flex items-center gap-2"
              href="/Menu2"
            >
              MENU
            </Link>

            {/* resevation page  */}

            <Link
              className="hover:text-[#c8934d] duration-500 flex items-center gap-2"
              href="/ReserveTwo"
            >
              RESERVATION
            </Link>

            {/* contact page */}
            <Link
              className="hover:text-[#c8934d] duration-500"
              href="/ContactUs"
            >
              CONTACT US
            </Link>

            {/* About Us Link */}
            <Link className="hover:text-[#c8934d] duration-500" href="/About">
              ABOUT US
            </Link>

            {/* our chef Us Link */}
            <Link
              className="hover:text-[#c8934d] duration-500"
              href="/OurChefs"
            >
              OUR CHEF
            </Link>

            {/* our gallery Us Link */}
            <Link
              className="hover:text-[#c8934d] duration-500"
              href="/OurGallery"
            >
              GALLERY
            </Link>

            {/* our chef Us Link */}
            <Link
              className="hover:text-[#c8934d] duration-500"
              href="/Services"
            >
              SERVICES
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-5 text-md ">
            <FaFacebookF className="hover:text-[#c8934d] duration-500 cursor-pointer" />
            <IoLogoInstagram className="hover:text-[#c8934d] duration-500 cursor-pointer" />
            <TfiTwitter className="hover:text-[#c8934d] duration-500 cursor-pointer" />
            <FaTripadvisor className="hover:text-[#c8934d] duration-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* lg screen navbar */}
      <div className="bg-[transparent]  flex max-md:visible 2xl:hidden xl:hidden lg:hidden">
        {/* right dive for logo 'SOVY' */}
        <div className="bg-transparent text-white w-full flex justify-between items-center p-3 absolute">
          <div className="text-3xl font-serif ">
            <Link href={"/"}>FOODS MENUS</Link>
          </div>

          {/* left div for side bar button */}
          <div className="flex space-x-5 text-md ">
            <button onClick={toggleSidebar} className="cursor-pointer">
              <FiBarChart2
                className={` text-5xl text-white rotate-[270deg] duration-700`}
              />
            </button>
          </div>
        </div>

        {/* Sidebar */}

        {/* side bar bg */}

        <div
          className={`bg-[#312D2B]  text-white fixed h-screen transition-all z-10 opacity-55
          ${
            isOpen
              ? "w-[45%] max-sm:w-full delay:500 duration-500"
              : "w-0  overflow-hidden delay-700 duration-500"
          }`}
        ></div>

        {/* actual sidebar */}
        <div
          className={`bg-[#130F0C]  text-white fixed h-screen transition-all z-10 
          ${
            isOpen
              ? "w-[45%] max-sm:w-[75%] duration-500  delay-700"
              : "w-0  overflow-hidden duration-500"
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="bg-transparent text-white w-full flex justify-between items-center text-left p-3">
              <div className="mt-1 serif text-2xl">FOODS MENUS</div>

              {/* Cross Icon for closing the sidebar */}
              <div
                className="p-2 text-xl cursor-pointer"
                onClick={toggleSidebar}
              >
                <RxCross2 />
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-auto p-3 scroll-smooth">
              {/* Sidebar items */}
              <div className="flex flex-col bg-transparent text-white  w-full ml-4">
                {/* Map through items */}
                {items.map((item, index) => (
                  <div
                    key={item.key}
                    className={`mb-5 ${index > 0 ? "mt-5" : ""}`}
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer hover:text-[#c8934d]"
                      onClick={() => toggleDropdown(item.key)}
                    >
                      <div>
                        <Link
                          href={item.href}
                          className="text-white hover:text-[#c8934d]"
                        >
                          {item.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}