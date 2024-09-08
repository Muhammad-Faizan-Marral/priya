import React from "react";

const Para = () => {
  return (
    <div className="mt-[56px]">
      {/* Text Section */}
      <div className="flex items-center justify-center px-4 md:px-0">
        <div className="text-[18px] sm:text-[20px] md:text-[26px] font-light text-black max-w-[992px] w-full font-inter leading-relaxed md:leading-normal">
          “Based on our latest data with 60 different stores and 1000’s of
          various products, PRIYA can be up to 73% more accurate at setting
          prices compared to humans. This is absolutely astounding data. Price
          is everywhere, and the entire economy is affected by it, it turns out
          a highly trained, self-learning machine is actually more accurate than
          humans, and not just by a small margin, but by a large sum.”
        </div>
      </div>

      {/* Author Section */}
      <div className="flex items-center justify-end p-4 md:p-11">
        <div className="font-bold text-black text-[0.75rem] sm:text-[0.875rem] font-inter">
          - AI Researcher at Y CORP
        </div>
      </div>
    </div>
  );
};

export default Para;
