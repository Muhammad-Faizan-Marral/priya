"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../app/images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import banner from "../app/images/banner.png";

const Ppmenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative bg-[#000000]">
      {/* Banner Image */}
      <div className="absolute top-0 left-0 w-full h-[400px] md:h-[522px] z-10">
        <Image
          src={banner}
          alt="Banner image"
          className="object-cover w-full h-full"
        />
      </div>




      <div className="relative z-20 pt-[24px] px-4 lg:px-[4.2rem] flex items-center justify-between">
  <div className="flex items-center gap-4 lg:gap-24">
    <div className="w-[120px] lg:w-[182px] min-h-[32px] flex">
      <Image
        src={logo}
        alt="priya logo"
        className="object-contain w-full h-full"
      />
    </div>

    {/* Desktop Menu */}
    <div className="hidden lg:flex menu-text font-inter text-[16px] lg:text-[19.5px] -mt-[5px] ml-3 gap-[2rem] lg:gap-[77px] text-[#787C7C]">
      <a
        href=""
        className="hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"
      >
        PPM-1
      </a>
      <a
        href=""
        className="hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"
      >
        Pricing
      </a>
      <a
        href=""
        className="hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"
      >
        Research
      </a>
      <a
        href=""
        className="hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"
      >
        About
      </a>
    </div>
  </div>

  {/* Login Button */}
  <div className="hidden lg:block">
    <button className="login-button font-inter w-[6.3rem] h-[3rem] border-2 border-[#00F795] rounded-[3rem] text-[19.5px] text-[#00DAC5]">
      Login
    </button>
  </div>

  {/* Hamburger Icon for Mobile */}
  <div className="lg:hidden">
    <button onClick={toggleMenu} className="text-[#00DAC5] text-3xl">
      {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  </div>
</div>

{menuOpen && (
  <div className="z-40 flex flex-col absolute top-14 items-start bg-[#222121] text-[#787C7C] p-6 w-full h-[300px]">
    <div className="menu-text flex flex-col text-[19.5px] gap-4">
      <a
        href=""
        className="hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"
      >
        PPM-1
      </a>
      <a
        href=""
        className="hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"
      >
        Pricing
      </a>
      <a
        href=""
        className="hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"
      >
        Research
      </a>
      <a
        href=""
        className="hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"
      >
        About
      </a>
    </div>

    <div className="mt-6">
      <button className="login-button font-inter w-[6.3rem] h-[3rem] border-2 border-[#00F795] rounded-[3rem] text-[19.5px] text-[#00DAC5]">
        Login
      </button>
    </div>
  </div>
)}




<div className="h-auto md:h-[377px] flex flex-col md:flex-row gap-[1rem] md:gap-[5rem] pt-[6rem] md:pt-[8.7rem] relative z-20">
  {/* Headings */}
  <div className="headings font-circular pl-4 md:pl-[3rem] text-[24px] sm:text-[28px] md:text-[40px] bg-clip-text text-transparent bg-gradient-to-b from-[#00E8AD] to-[#00D5CE] tracking-[2px] sm:tracking-[3px] md:tracking-[5px]">
    INTRODUCING PPM
  </div>

  {/* Paragraph */}
  <div className="paragraphtext relative -top-2 md:-top-7 leading-[22px] sm:leading-[24px] md:leading-[30px] font-light font-circular pl-4 md:pl-[7rem] text-[#7c7C7C] text-[16px] sm:text-[18px] md:text-[22px] tracking-[0] md:tracking-[-0.625px] w-full md:w-[560px]">
    The World's First Price Prediction Model. PPM is used by PRIYA to predict the next price with the highest likelihood of a conversion for any product or service.
  </div>
</div>

   


    </div>
  );
};

export default Ppmenu;
