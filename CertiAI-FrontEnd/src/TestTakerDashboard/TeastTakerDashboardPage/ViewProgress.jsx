import React from "react";

const ViewProgress = () => {
  return (
    <>
      <div className="bg-white rounded-md mr-40 pl-6 ml-9 mt-15 pb-5 border-t-2 border-b-2 border-r-4 border-b-gray-300 border-l-2  border-l-gray-300  border-t-gray-300 border-r-gray-300  " >
        <div className="flex  gap-40  pl-3   items-center">
          {/* Left Circle */}
          <div className=" my-20 ">
            <span className=" shadow-md border-t-2 border-b-2 border-r-4 border-b-[#e32c18]   border-l-[#d22f1d]  border-t-[#ed3520] border-r-[#f12f19]   px-10 text-4xl py-15 rounded-full text-sky-800">
              31/50
            </span>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-[220px_1fr] gap-y-0.5">
            <span className="font-[500]">Test</span>
            <span className="text-sm">OCGA</span>

            <span className="font-[500]">Time Taken</span>
            <span className="text-sm">1 hr 20 min</span>

            <span className="font-[500]">Question Attempted</span>
            <span className="text-sm">45</span>

            <span className="font-[500]">Correct Answer</span>
            <span className="text-sm">12</span>

            <span className="font-[500]">Wrong Answer</span>
            <span className="text-sm">22</span>

            <span className="font-[500]">Overall Result</span>
            <span className="text-sm">63%</span>
          </div>
        </div>
        </div>

        {/* Buttons */}
       <div className="mt-20 flex justify-end space-x-5">
  <button className="px-3 shadow-sm py-2 rounded-md font-[500] border border-gray-400 bg-white text-black">
    View Answers
  </button>
  <button className="px-6 shadow-sm font-[500] py-2 rounded-md border border-gray-400 bg-white text-black">
    Exit
  </button>
</div>
      
    </>
  );
};

export default ViewProgress;
