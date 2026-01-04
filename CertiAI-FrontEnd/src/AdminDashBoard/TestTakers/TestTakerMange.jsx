import React from "react";
import TestTakerCard from "../../Components/TestTakerCard";

import { useNavigate } from "react-router-dom";

const TestTakerMange = () => {
 
  const  navigate=useNavigate()

  return (
    <>
    
      <div >
        {/* Title and Button  */}
        <div className="flex justify-between mt-5">
          <p className="text-[#54536E] text-sm font-[600]">TestTakers</p>
           {/* <Link to='TestTakerAdd-1'> */}
          <button  onClick={() => navigate("TestTakerAdd-1")} className="bg-[#D14B42] text-white px-3 py-2  rounded-md ">
            +Add TestTakers
          </button>
          
          
        </div>
        {/* box  */}
        <div className="flex gap-10 my-5">
         {/* box 1  */}
        <div className="bg-white w-[35%] border border-gray-300 px-5 py-4">
          <p className="text-md text-[#6E6B97] ">Active TestTakers</p>
          <div className="flex justify-between mt-2">
          <div className="text-[#40997E] text-2xl font-[400]"> 2295</div>
          <div className="mt-1">
            <div className="text-[#40997E] text-sm">+ 15.6%</div>
            <p className=" text-[#6E6B97] text-sm">From Previous Year</p>
          </div>
        </div>
        </div>
        {/* Box2 */}
        <div className="bg-white w-[35%] border border-gray-300 px-5 py-4">
          <p className="text-md text-[#6E6B97] ">Dropouts</p>
          <div className="flex justify-between mt-2">
          <div className="text-[#F03838] text-2xl font-[400]"> 2295</div>
          <div className="mt-1">
            <div className="text-[#F03838] text-sm">+ 15.6%</div>
            <p className=" text-[#6E6B97] text-sm">From Previous Year</p>
          </div>
        </div>
        </div>
        {/* Box3 */}
        <div className="bg-white w-[35%] border border-gray-300 px-5 py-4">
          <p className="text-md text-[#6E6B97] ">Total TestTakers</p>
          <div className="flex justify-between mt-2">
          <div className="text-[#000000] text-2xl font-[400]"> 2295</div>
          <div className="mt-1">
            <div className="text-[#40997E] text-sm">+ 15.6%</div>
            <p className=" text-[#6E6B97] text-sm">From Previous Year</p>
          </div>
        </div>
        </div>
        </div>
        {/* Test Card */}
        <TestTakerCard/>
      </div>
     
    </>
  );
};

export default TestTakerMange;
