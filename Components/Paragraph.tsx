import React from "react";

const Paragraph = () => {
  return (
    <div className="flex items-center justify-center mt-24 md:mt-[108px] px-4 sm:px-6 lg:px-0">
      <div className="flex items-center justify-center flex-col w-full max-w-[673px]">
        <p className="text-[1.5rem] md:text-[1.7rem] text-center font-circular ">
          On average, 46% of potential revenue is lost by small
        </p>
        <p className="text-[1.4rem] md:text-[1.6rem] text-center font-circular">
          businesses due to sub-optimal pricing.
        </p>
        <p className="text-[#000000] text-[1rem] md:text-[1.1rem] mt-4 text-center font-inter">
          PRIYA automatically works for you to optimize pricing as much as
          possible
        </p>
      </div>
    </div>
  );
};

export default Paragraph;
