"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../app/images/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Menu: React.FC = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <div className="bg-[#000000]">



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
  <div className="z-40 flex flex-col absolute top-14 items-start bg-[#222121] text-[#787C7C] p-6 w-full h-[280px]">
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










 {/* Paragraph */}

<div className="h-[273px] flex flex-col gap-[8px] pt-[50px] pl-0 ">
        <div className="font-circular pl-[4rem] md:pl-[90px] text-[53px] bg-clip-text text-transparent bg-gradient-to-b from-[#00E8AD] to-[#00D5CE] tracking-[3px]">
          PRICING
        </div>
        <div className="font-circular pl-[4rem] md:pl-[90px] text-[#787C7C] text-[1.3rem] ">
          Choose from 3 plans to start using PRIYA
        </div>
      </div>



    </div>
  );
};

export default Menu;
