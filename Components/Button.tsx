import React from "react";

const Button = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="-mt-[34px] border-b-[1px] border-black w-[63rem] px-16 pb-14"></div>
      </div>

      <div className="container mt-[50px]">
        <div className="border-top-dark py-3 py-sm-5 text-center">
          <button
            type="button"
            className="bg-gray-200 hover:shadow-md font-circular font-semibold text-[1rem] hover:shadow-gray-500 shadow-sm-black text-dark py-3 px-4 ff-inter-semi text-uppercase rounded-xl btn btn-secondary transition-all duration-300 ease-in-out"
          >
            Explore More Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
