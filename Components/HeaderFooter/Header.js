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

export default function Header() {
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
      dropdownItems: [
        { name: "Home-Style-1", href: "/" },
        { name: "Home-Style-2", href: "/Home2" }, // Updated link
      ],
    },
    {
      name: "ABOUT US",
      href: "/About", // Updated link
      key: "about",
      dropdownItems: [],
    },
    {
      name: "MENUS",
      href: "/menus", // Updated link
      key: "menus",
      dropdownItems: [
        { name: "Menu-Style-1", href: "/Menu1" }, // Updated link
        { name: "Menu-Style-2", href: "/Menu2" }, // Updated link
      ],
    },
    {
      name: "PAGES",
      href: "/pages", // Updated link
      key: "pages",
      dropdownItems: [
        { name: "Contact Us", href: "/ContactUs" }, // Updated link
        { name: "Reservation-Style 1", href: "/ReserveOne" }, // Updated link
        { name: "Reservation-Style 2", href: "/ReserveTwo" }, // Updated link
        { name: "Our Chef", href: "/OurChefs" }, // Updated link
        { name: "Gallery", href: "OurGallery"},
        { name: "Services", href: "Services" }, // Updated link
        { name: "404 Page", href: "PageNotFound" }, // Updated link
      ],
    },
  ];
  

  return (
    <>
      <div className="bg-[transparent] flex absolute w-full">
        <div className="bg-transparent text-white font-mono w-full flex justify-around items-center p-5 max-lg:hidden ">
          <div className="text-3xl font-semibold">SOVY</div>

          <div className="flex space-x-5 relative ">
            {/* Home Dropdown */}
            <div
              className="relative text-md cursor-pointer"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className="hover:text-[#c8934d] duration-500 flex items-center gap-2"
                href="#"
              >
                HOME
                <SlArrowDown className="m-auto" />
              </Link>
              <div
                className={`absolute right-0 top-12 w-32 rounded-sm bg-[#130F0C] text-white py-4 shadow-md transition-all duration-300 
                ${
                  hoveredDropdown === "home"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }
                ${hoveredDropdown === "home" ? "block" : "hidden"}`}
              >
                <Link
                  href="/"
                  className="p-1 text-center hover:text-[#c8934d] block"
                >
                  Home-Style-1
                </Link>
                <Link
                  href="/Home2"
                  className="p-1 text-center hover:text-[#c8934d] block"
                >
                  Home-Style-2
                </Link>
              </div>
            </div>

            {/* About Us Link */}
            <Link className="hover:text-[#c8934d] duration-500" href="/About">
              ABOUT US
            </Link>

            {/* Menus Dropdown */}
            <div
              className="relative text-md cursor-pointer"
              onMouseEnter={() => handleMouseEnter("menus")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className="hover:text-[#c8934d] duration-500 flex items-center gap-2"
                href="#"
              >
                MENUS
                <SlArrowDown className="m-auto" />
              </Link>
              <div
                className={`absolute right-0 top-12 w-32 rounded-sm bg-[#130F0C] text-white py-4 shadow-md transition-all duration-300 
                ${
                  hoveredDropdown === "menus"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }
                ${hoveredDropdown === "menus" ? "block" : "hidden"}`}
              >
                <Link
                  href="/Menu1"
                  className="p-1 text-center hover:text-[#c8934d] block"
                >
                  Menu-Style-1
                </Link>
                <Link
                  href="/Menu2"
                  className="p-1 text-center hover:text-[#c8934d] block"
                >
                  Menu-Style-2
                </Link>
              </div>
            </div>

            {/* Pages Dropdown */}
            <div
              className="relative text-md cursor-pointer"
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className="hover:text-[#c8934d] duration-500 flex items-center gap-2"
                href="#"
              >
                PAGES
                <SlArrowDown className="m-auto" />
              </Link>
              <div
                className={`absolute left-0 top-12 w-56 text-left rounded-sm bg-[#130F0C] text-white  py-2 shadow-md transition-all duration-300 
                ${
                  hoveredDropdown === "pages"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }
                ${hoveredDropdown === "pages" ? "block" : "hidden"}`}
              >
                <Link href="/ContactUs" className="px-4 py-2 hover:text-[#c8934d] block ">
                  Contact Us
                </Link>
                <Link href="/ReserveOne" className="px-4 py-2 hover:text-[#c8934d] block ">
                  Reservation-Style-1
                </Link>
                <Link href="/ReserveTwo" className="px-4 py-2 hover:text-[#c8934d] block ">
                  Reservation-Style-2
                </Link>
                <Link href="/OurChefs" className="px-4 py-2 hover:text-[#c8934d] block ">
                  Our Chef
                </Link>
                
                <Link href="/OurGallery" className="px-4 py-2 hover:text-[#c8934d] block ">
                  Gallery
                </Link>
                <Link href="/Services" className="px-4 py-2 hover:text-[#c8934d] block ">
                  Services
                </Link>
                <Link
                  href="/PageNotFound"
                  className="px-4 py-2 hover:text-[#c8934d] block "
                >
                  404 Page
                </Link>
              </div>
            </div>
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
          <div className={`text-3xl font-semibold text-left `}>SOVY</div>

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
        <div
          className={`bg-[#130F0C]  text-white fixed h-screen transition-all z-10 
          ${isOpen ? "w-[45%] delay-1000" : "w-0 delay-1000 overflow-hidden"}`}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="bg-transparent text-white w-full flex justify-between font-semibold text-left p-3">
              <div className="ml-4 text-3xl">SOVY</div>

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
                      {item.dropdownItems.length > 0 && (
                        <IoIosArrowDropdown
                          className={`text-xl transition-transform mr-10${
                            dropdownStates[item.key] ? "" : ""
                          }`}
                        />
                      )}
                    </div>
                    {/* Dropdown content */}
                    {dropdownStates[item.key] &&
                      item.dropdownItems.length > 0 && (
                        <div className="mt-2 ml-4">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-white hover:text-[#c8934d] p-3"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
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
