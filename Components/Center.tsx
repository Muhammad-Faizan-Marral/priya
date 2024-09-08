import React from "react";
import Image from "next/image";
import maths from "../app/images/maths.png";
import mathmobile from "../app/images/mathmobile.png";
const Center = () => {
  return (
    <div className="pt-[100px] pl-[80px] min-h-[500px] bg-black z-0 mt-[95px]">
      <div className="leading-[32px] text-[35px] text-white font-inter font-[630]">
        Product Pricing Over Time Algorithm
      </div>

      <div className="md:w-[70%] w-[90%] text-[17px]   font-inter mt-8 font-light text-[#7c7c7c]">
        At Y CORP, our team of researchers developed a proprietary pricing
        algorithm to interpret and run the PPM model. This mathematical concept
        allows us to set a framework on how artificial intelligence can operate
        efficiently with minimal human intervention.{" "}
      </div>

      <div className="w-[345px] h-[9rem]   -mt-[1rem]  hidden md:block">
        <Image
          src={maths}
          alt="prediction engine"
          className="object-contain w-full h-full"
        />
      </div>

      <div className="w-[250px] h-[9rem]   -mt-[1rem] block md:hidden">
        <Image
          src={mathmobile}
          alt="horizontal prediction engine"
          className="object-contain w-full h-full"
        />
      </div>
      

    
    </div>
  );
};

export default Center;
