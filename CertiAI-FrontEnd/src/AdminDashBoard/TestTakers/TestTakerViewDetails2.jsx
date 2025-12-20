import React from 'react'
import TestTakerPurchasedCard from './TestTakerComponents/TestTakerPurchasedCard';



const TestTakerViewDetails2 = () => {
  return (
    <>
     <div className="">
              <p className="text-xs pb-3 font-[500] text-[#3C3C3C]">
                Total Tests Purchased : 12
              </p>
              <div className='flex flex-wrap gap-8'>  
             <TestTakerPurchasedCard/>
             <TestTakerPurchasedCard/>
             <TestTakerPurchasedCard/>
             <TestTakerPurchasedCard/>
             <TestTakerPurchasedCard/>
             <TestTakerPurchasedCard/>
             <TestTakerPurchasedCard/>
             <TestTakerPurchasedCard/>
             <TestTakerPurchasedCard/>
             <TestTakerPurchasedCard/>


             </div>

            </div>
    </>
  )
}

export default TestTakerViewDetails2;
