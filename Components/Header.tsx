import React from "react";

const Header = () => {
  return (
    <div className="bg-black">
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

export default Header;
