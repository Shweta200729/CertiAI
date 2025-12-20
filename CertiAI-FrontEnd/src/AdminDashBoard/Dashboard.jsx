import React from 'react'
import TestTakerCard from "../Components/TestTakerCard";
import InstructorsCard from "../Components/InstructorsCard";
const Dashboard = () => {
  return (
    <>
    {/* box */}
          <div className="  rounded-md mt-6 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-700  w-[70%]">
            <div className="text-white  pl-6 pt-6">
              <div className=" text-lg">
                Today's payment collection: Rs 14,000,000
              </div>
              <div className="text-sm pt-2">
                Total Payment Collected: RS 17,000,00
              </div>
              <div className="text-sm pt-2">Total Payment Paid: RS 15,000</div>
              <div className=" text-black text-sm py-4">view detail</div>
            </div>
          </div>
          
          <div className=" flex gap-10">
          {/* TestTaker Card */}
          <TestTakerCard/>

          {/* Instructors Card */}
          <InstructorsCard/>
          </div>
    
    </>
  )
}

export default Dashboard