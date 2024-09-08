"use client";
import React from "react";
import Image from "next/image";
import DongBelt from "../app/images/DongBelt.png";
import camera from "../app/images/camera.png";
import jacket from "../app/images/jacket.png";
import makeup from "../app/images/makeup.png";
import foods from "../app/images/foods.png";


const ImgCards = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2">
      {/* Image Card One  */}

      <div className="rounded-md shadow-lg p-6 shadow-[#aba6a6d3] pl-8 flex gap-4 justify-center flex-col h-[240px] w-[390px]  mt-[65px]">
        <div className="text-[1.1rem] font-medium text-black  ">
          Apparel Industry
        </div>
        <div className="w-[300px]">
          Estimated Revenue Loss Due to Pricing Inefficiencies
        </div>

        <div className=" flex items-center  ">
          <span className=" text-[3rem] font-medium text-[#000000]">-</span>
          <span className="ml-2 text-[2rem] font-medium text-[#000000]">
            $
          </span>
          <span className="text-[2rem] font-medium">553M</span>
          <span className="text-[1rem] text-[#7C7C7C]">/mo</span>

          <div className="w-[100px] h-[110px]  ml-[5rem]">
            <Image
              src={jacket}
              alt="priya logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Image Card Two  */}

      <div className="rounded-md shadow-lg p-6 shadow-[#aba6a6d3] pl-8 flex gap-4 justify-center flex-col h-[240px] w-[390px]  mt-[65px]">
        <div className="text-[1.1rem] font-medium text-black  ">
        Electronics
        </div>
        <div className="w-[300px]">
          Estimated Revenue Loss Due to Pricing Inefficiencies
        </div>

        <div className=" flex items-center  ">
          <span className=" text-[3rem] font-medium text-[#000000]">-</span>
          <span className="ml-2 text-[2rem] font-medium text-[#000000]">
            $
          </span>
          <span className="text-[2rem] font-medium">611M</span>
          <span className="text-[1rem] text-[#7C7C7C]">/mo</span>

          <div className=" w-[110px] h-[120px]   ml-[3rem]">
            <Image
              src={camera}
              alt="priya logo"
              className="object-contain w-full h-full transform scale-125"
            />
          </div>
        </div>
      </div>
      {/* Image Card Three  */}
      <div className="rounded-md shadow-lg p-6 shadow-[#aba6a6d3] pl-8 flex gap-4 justify-center flex-col h-[240px] w-[390px]  mt-[65px]">
        <div className="text-[1.1rem] font-medium text-black  ">
        Beauty & Care
        </div>
        <div className="w-[300px]">
          Estimated Revenue Loss Due to Pricing Inefficiencies
        </div>

        <div className=" flex items-center  ">
          <span className=" text-[3rem] font-medium text-[#000000]">-</span>
          <span className="ml-2 text-[2rem] font-medium text-[#000000]">
            $
          </span>
          <span className="text-[2rem] font-medium">357M</span>
          <span className="text-[1rem] text-[#7C7C7C]">/mo</span>

          <div className=" w-[100px] h-[110px]   ml-[5rem]">
            <Image
              src={makeup}
              alt="priya logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
     
      <div className="rounded-md shadow-lg p-6 shadow-[#aba6a6d3] pl-8 flex gap-4 justify-center flex-col h-[240px] w-[390px]  mt-[65px]">
        <div className="text-[1.1rem] font-medium text-black  ">
        Food & Beverage
        </div>
        <div className="w-[370px] text-[0.9rem] font-light font-inter">
          Estimated Revenue Loss Due to Pricing Inefficiencies
        </div>

        <div className=" flex items-center  ">
          <span className=" text-[3rem] font-medium text-[#000000]">-</span>
          <span className="ml-2 text-[2rem] font-medium text-[#000000]">
            $
          </span>
          <span className="text-[2rem] font-medium">885M</span>
          <span className="text-[1rem] text-[#7C7C7C]">/mo</span>

          <div className=" w-[110px] h-[120px]   ml-[3rem]">
            <Image
              src={foods}
              alt="priya logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* Image Card Five  */}
      <div className="rounded-md shadow-lg p-6 shadow-[#aba6a6d3] pl-8 flex gap-4 justify-center flex-col h-[240px] w-[390px]  mt-[65px]">
        <div className="text-[1rem] font-medium text-black  font-inter">
        Pet Products

        </div>
        <div className="w-[370px] text-[0.9rem] font-light font-inter">
          Estimated Revenue Loss Due to Pricing Inefficiencies
        </div>

        <div className=" flex items-center  ">
          <span className=" text-[3rem] font-medium text-[#000000]">-</span>
          <span className="ml-2 text-[2rem] font-medium text-[#000000]">
            $
          </span>
          <span className="text-[2rem] font-medium">215M</span>
          <span className="text-[1rem] text-[#7C7C7C]">/mo</span>

          <div className=" w-[110px] h-[120px]   ml-[3rem]">
            <Image
              src={DongBelt}
              alt="priya logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>


    </div>
  );
};

export default ImgCards;
