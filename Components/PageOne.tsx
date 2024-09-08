import React from 'react'
import Image from "next/image";
import predictionengine from "../app/images/predictionengine.png";
import horizentalpredictionengine from "../app/images/horizentalpredictionengine.png";

const PageOne = () => {
  return (

    <div className='mt-[200px] ml-[80px] md:mt-[100px]'>
      <div className='leading-[32px] text-[35px] text-black font-inter font-[630]'>Powerful Price Prediction Engine</div>
      <div className='w-[70%] text-[17px] text-black font-inter mt-8 font-light'>
        PPM is a highly trained transformer model used to run, interpret, and predict price over time. The goal... predict the next price that will have the highest likelihood of a conversion.
      </div>

      <div className='flex items-center justify-center md:-mt-[2rem] mt-10 -ml-[3.5rem]'>
       
        <div className="w-[900px] h-[32rem]  hidden md:block">
          <Image
            src={predictionengine}
            alt="prediction engine"
            className="object-contain w-full h-full"
          />
        </div>

        
        <div className="w-[900px] h-[32rem] block md:hidden">
          <Image
            src={horizentalpredictionengine}
            alt="horizontal prediction engine"
            className="object-contain w-full h-full"
          />
        </div>
        
      </div>
    </div>
    
  )
}

export default PageOne
