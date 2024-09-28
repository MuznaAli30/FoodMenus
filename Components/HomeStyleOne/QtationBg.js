"use client"
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  const names = ["Avery Wallace", "Ramon Tran", "Liza Nixon"];
  const [currentName, setCurrentName] = useState(names[0]);
  const [showHR, setShowHR] = useState(false); // HR visibility state

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing effect
    });

    // Change the name every 3 seconds
    const nameInterval = setInterval(() => {
      setCurrentName((prevName) => {
        const currentIndex = names.indexOf(prevName);
        const nextIndex = (currentIndex + 1) % names.length;
        return names[nextIndex];
      });
    }, 3000);

    // Show HR after 3 seconds
    const hrTimeout = setTimeout(() => {
      setShowHR(true);
    }, 3000); // Delay in milliseconds (3 seconds)

    return () => {
      clearInterval(nameInterval);
      clearTimeout(hrTimeout);
    };
  }, [names]);

  return (
    <>
      <div className="bg-fixed-pic2 h-[55vh] opacity-95 w-full max-lg:w-full">
        <div className="flex items-center justify-around relative flex-col">
          {/* SVG Icon with AOS */}
          <svg
            className="m-5 text-7xl text-[#DAA760]"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            data-aos="fade-left" // AOS effect for SVG
          >
            <g fill="none">
              <g clipPath="url(#gravityUiQuoteClose0)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3.589 9.67A2.75 2.75 0 0 1 1.5 7v-.25A2.75 2.75 0 0 1 4.25 4h.25a2.747 2.747 0 0 1 2.748 2.657v.003h.002V7q0 .197-.027.386q-.03.392-.09.77a8 8 0 0 1-.559 1.918a7.2 7.2 0 0 1-2.162 2.801l-.098.076A.24.24 0 0 1 4.17 13a.25.25 0 0 1-.22-.367a17 17 0 0 0 .65-1.384c.197-.474.396-1.013.557-1.578a2.7 2.7 0 0 1-.657.079h-.25q-.343-.001-.661-.08m-.549 1.405A4.25 4.25 0 0 1 0 7v-.25A4.25 4.25 0 0 1 4.25 2.5h.25c1.452 0 2.733.728 3.5 1.838A4.25 4.25 0 0 1 11.5 2.5h.25A4.25 4.25 0 0 1 16 6.664V7q0 .275-.035.543c-.207 2.62-1.358 4.966-3.488 6.599a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86a4.25 4.25 0 0 1-2.005-1.297a8.76 8.76 0 0 1-3.058 4.363a1.74 1.74 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564c.111-.211.26-.508.418-.86m7.8-1.406q.318.079.661.08h.25a2.8 2.8 0 0 0 .657-.079a14 14 0 0 1-.68 1.865a18 18 0 0 1-.527 1.097a.25.25 0 0 0 .22.367a.24.24 0 0 0 .144-.049l.098-.076q.452-.358.832-.768a7.2 7.2 0 0 0 1.39-2.172a8 8 0 0 0 .498-1.779a9 9 0 0 0 .091-.77q.027-.19.027-.386v-.339H14.5v-.004A2.747 2.747 0 0 0 11.75 4h-.251a2.75 2.75 0 0 0-2.75 2.75V7c0 1.29.89 2.374 2.089 2.67"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="gravityUiQuoteClose0">
                  <path fill="currentColor" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </g>
          </svg>

          {/* Quote Text */}
          <div
            className="m-5 text-white text-3xl font-serif w-[50%] text-center italic max-lg:text-center max-lg:w-[90%]"
            data-aos="fade-left" // AOS effect for text
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </div>

          {/* Name with AOS */}
          <div
            className="m-5 text-[#DAA760] text-2xl font-serif text-center"
            data-aos="fade-left" // AOS effect for the name
          >
            {currentName}
          </div>

          {/* HR appears after 3 seconds */}
          {showHR && (
            <hr
              className=""
              data-aos="fade-left"
            />
          )}
        </div>
      </div>
    </>
  );
}
