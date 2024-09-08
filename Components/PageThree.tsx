import React from 'react'
import Image from "next/image";
import learning from "../app/images/learning.png";
import learningmobile from "../app/images/learningmobile.png";


const PageThree = () => {
  return (
    <div className='mt-[100px] ml-[80px]'>
    <div className='leading-[32px] text-[35px] text-black font-inter font-[630]'>Advanced Learning on a Per-Product Basis
    </div>
    <div className='w-[70%] text-[17px] text-black font-inter mt-8 font-light'>
    PRIYA runs on PPM, which enables accurate price predictions on a granular per-product level. This means prices can be optimized for every single individual product and service sold online. PPM is also trained on an industry level such as apparel, electronics, appliances, etc.
</div>

    <div className='flex items-center justify-center md:-mt-[2rem] mt-10 -ml-[3.5rem]'>
     
      <div className="w-[900px] h-[32rem]  hidden md:block">
        <Image
          src={learning}
          alt="prediction engine"
          className="object-contain w-full h-full"
        />
      </div>

      
      <div className="w-[900px] h-[32rem] block md:hidden">
        <Image
          src={learningmobile}
          alt="horizontal prediction engine"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  </div>
  )
}

export default PageThree
