import React from 'react'
import TestTakerProfileRow from "../Components/TestTakerProfileRow";

const InstructorsCard = () => {
  return (
    <>
     <div className="bg-white  rounded-sm pl-3 mt-6 w-[40%]">
            <div className="mr-3 pt-2">
              <div className="flex justify-between items-center">
                <div className="text-[#54536E] text-sm font-[700]">Instructors</div>
                <button className="bg-[#D14B42] text-white w-7 h-7 rounded-sm ">
                  +
                </button>
              </div>

              <TestTakerProfileRow/>
              <TestTakerProfileRow/>
              <TestTakerProfileRow/>
              <TestTakerProfileRow/>
              <TestTakerProfileRow/>
           

              
            </div>
          </div>
    </>
  )
}

export default InstructorsCard