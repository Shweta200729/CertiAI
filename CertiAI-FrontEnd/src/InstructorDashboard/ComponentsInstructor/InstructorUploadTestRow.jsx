import React from 'react'
import TestTakerProfile from '../../assets/TestTakerProfile.png'

const InstructorUploadTestRow = () => {
  return (
    <>
      <div className=" flex   border rounded-sm px-3  mt-3 border-gray-300 bg-white">
                           <img
                             className="w-8 my-3"
                             src={TestTakerProfile}
                             alt="profile image"
                           />
                           <div className="flex flex-col px-3 ">
                             <div className="text-md  font-[500]">Joe</div>
                             <div className="text-sm  text-red-500 font-[400]">View Details</div>
                           </div>
                         </div>
    </>
  )
}

export default InstructorUploadTestRow;
