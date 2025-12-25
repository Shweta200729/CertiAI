import React from 'react'
import TestTakerProfile from "../../assets/TestTakerProfile.png";

const TakeTest = () => {
  return (
   <>
   <div className="  rounded-md mt-6 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-700  w-[70%]">
        <div className="text-white  pl-6 py-5">
          <div className=" text-lg">
            Choose Test from your Purchased tests
          </div>
         
        </div>
      </div>

      {/* purchased test */}
       <div className="flex gap-20 justify-between">
               <div className="bg-[#FFCDCD] rounded-sm my-9 w-[370px] ">
                 <p className="text-[#54536E] font-[700]  px-2 pt-2">
                   Purchased Tests
                 </p>
       
                 <div className=" py-2 px-3">
       
                 <div className=" flex   border rounded-sm px-3  mt-3 border-gray-300 bg-white">
                   <img
                     className="w-8 my-3"
                     src={TestTakerProfile}
                     alt="profile image"
                   />
                   <div className="flex flex-col px-3 ">
                     <div className="text-md  font-[500]">Joe</div>
                     <div className="text-sm  text-red-500 font-[400]">
                       View Details
                     </div>
                   </div>
                 </div>
       
                 <div className=" flex   border rounded-sm px-3  mt-3 border-gray-300 bg-white">
                   <img
                     className="w-8 my-3"
                     src={TestTakerProfile}
                     alt="profile image"
                   />
                   <div className="flex flex-col px-3 ">
                     <div className="text-md  font-[500]">Joe</div>
                     <div className="text-sm  text-red-500 font-[400]">
                       View Details
                     </div>
                   </div>
                 </div>
       
                 <div className=" flex   border rounded-sm px-3  mt-3 border-gray-300 bg-white">
                   <img
                     className="w-8 my-3"
                     src={TestTakerProfile}
                     alt="profile image"
                   />
                   <div className="flex flex-col px-3 ">
                     <div className="text-md  font-[500]">Joe</div>
                     <div className="text-sm  text-red-500 font-[400]">
                       View Details
                     </div>
                   </div>
                 </div>
       
       
               </div>
               </div>
               </div>
   </>
  )
}

export default TakeTest
