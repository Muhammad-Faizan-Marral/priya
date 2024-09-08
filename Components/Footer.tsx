"use client";
import React from "react";
import Image from "next/image";
import logo from "../app/images/logo.png";

const Footer = () => {
  return (
    <div className="min-h-[590px] bg-black mt-10">
      <div className="flex items-center justify-center pt-[5.6rem] ">
        <span className="tracking-[4px] font-circular bg-gradient-to-r from-[#00f795] to-[#00c4e9] text-transparent bg-clip-text text-[0.857rem] ">
          EXPERIENCE PRIYA
        </span>
      </div>

      <div className="flex items-center justify-center pt-1">
        <span className=" text-[#ffffff] text-[3rem] font-inter -tracking-[1.2px] font-light">
          {" "}
          Get started now.
        </span>
      </div>

      <div className="flex items-center justify-center gap-2 pt-5">
        <button className="  w-[177px] h-[61px] focus:border-white border-2 -tracking-[0.45px] font-circular bg-white rounded-[3rem] text-[18px] text-[#000000] font-semibold">
          TRY PRIYA
        </button>

        <button className=" border-[1px] border-white w-[177px] h-[61px] focus:border-white -tracking-[0.45px] font-circular bg-black rounded-[3rem] text-[18px] text-[#ffffff]  ">
          BOOk A DEMO
        </button>
      </div>

      <div className="flex items-center justify-center mt-[7.3rem]">
        <div className="  w-[160px] h-[35px]  ">
          <Image
            src={logo}
            alt="priya logo"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      <div className="text-[17px] font-normal flex items-center  justify-center font-circular mt-11 text-[#575757] gap-[3rem] flex-wrap">
        <a href="" className=" hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text">PPM-1</a>
        <div className="border-r border-[#464646]   h-5 hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"></div>
        <a href="" className=" hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text">Pricing</a>
        <div className="border-r border-[#464646]   h-5 hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"></div>
        <a href="" className=" hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text">Research</a>
        <div className="border-r border-[#464646]   h-5 hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"></div>

        <a href="" className=" hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text">About</a>
        <div className="border-r border-[#464646]   h-5 hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"></div>

        <a href=""className=" hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text" >Login</a>
        <div className="border-r border-[#464646]   h-5 hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text"></div>
        <a href="" className=" hover:text-transparent hover:bg-gradient-to-b hover:from-[#00E8AD] hover:to-[#00D5CE] hover:bg-clip-text">
          Privacy Policy
        </a>
      </div>

      <div className="flex items-center justify-center pt-[52px] ">
        <div className="text-[#575757] font-circular text-[17px] font-normal">
          Copyright© 2024, Y CORP | All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
