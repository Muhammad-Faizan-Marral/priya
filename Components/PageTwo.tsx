import React from 'react'
import Image from "next/image";
import macro from "../app/images/macro.png";
import macromobile from "../app/images/macromobile.png";

const PageTwo = () => {
  return (

    <div className='mt-[100px] ml-[80px]'>
    <div className='leading-[32px] text-[35px] text-black font-inter font-[630]'>Interpreting Macro and Micro Economic Behavior</div>
    <div className='w-[70%] text-[17px] text-black font-inter mt-8 font-light'>
    PPM has been designed to interpret macroeconomic conditions such as competitor data, supply chain costs, economic conditions, as well as consumer behavior data and sales data to predict optimal prices.. all in real-time.

</div>

    <div className='flex items-center justify-center md:-mt-[2rem] mt-10 -ml-[3.5rem]'>
     
      <div className="w-[900px] h-[32rem]  hidden md:block">
        <Image
          src={macro}
          alt="prediction engine"
          className="object-contain w-full h-full"
        />
      </div>

      
      <div className="w-[900px] h-[32rem] block md:hidden">
        <Image
          src={macromobile}
          alt="horizontal prediction engine"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  </div>

  )
}

export default PageTwo
