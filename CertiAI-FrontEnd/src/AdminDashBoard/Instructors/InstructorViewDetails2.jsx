import React from 'react'
import InstrucrorOffers from './InstructorComponents/InstrucrorOffers';



const InstructorViewDetails2 = () => {
  return (
    <>
     <div className="">
              <p className="text-xs pb-3 font-[500] text-[#3C3C3C]">
                Total Tests Purchased : 12
              </p>
              <div className='flex flex-wrap gap-8'>
                <InstrucrorOffers/>  
                <InstrucrorOffers/>  
                <InstrucrorOffers/>  
                <InstrucrorOffers/>  
                <InstrucrorOffers/>  
                <InstrucrorOffers/>  
             <></>

             </div>

            </div>
    </>
  )
}

export default InstructorViewDetails2;