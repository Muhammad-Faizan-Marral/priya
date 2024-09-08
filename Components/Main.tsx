import React from "react";
import Image from "next/image";
import main from "../app/images/main.png";
import mainmobile from "../app/images/mainmobile.png";

const Main = () => {
  return (
    <div className="mt-[100px] ml-[80px]">
      <div className="leading-[32px] text-[35px] text-black font-inter font-[630]">
        Help Improve PRIYA by Using Her
      </div>
      <div className="w-[70%] text-[17px] text-black font-inter mt-8 font-light">
        While connected to each store, PRIYA learns at an astounding rate to
        improve pricing accuracy over time. This means better dynamic pricing,
        which will lead to more revenue for business owners connected to PRIYA.
        By using PRIYA you’ll directly participate in helping train her so all
        other connected businesses will benefit as well.
      </div>

      <div className="flex items-center justify-center md:mt-[1rem] -mt-10 -ml-[3.5rem]">
        <div className="w-[900px] h-[32rem]  hidden md:block">
          <Image
            src={main}
            alt="prediction engine"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="w-[900px] h-[22rem] block md:hidden">
          <Image
            src={mainmobile}
            alt="horizontal prediction engine"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

 

    </div>
  );
};

export default Main;
