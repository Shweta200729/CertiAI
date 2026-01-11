import React from "react";
import { useNavigate } from "react-router-dom";

const ViewProgressQuestionAns = () => {
  const navigate=useNavigate()
  return (
    <>
      {/* button */}
      <div className="mt-3 flex justify-end space-x-5">
        <button className="px-3 shadow-sm py-2 rounded-md font-[500] border border-gray-400 bg-white text-black">
          Dowmload pdf
        </button>
        <button onClick={()=>navigate('../ViewProgress')} className="px-6 shadow-sm font-[500] py-2 rounded-md border border-gray-400 bg-white text-black">
          Exit
        </button>
      </div>
      {/* question Answer */}

      <div className=" bg-white my-5 border py-3 border-gray-300 px-4 rounded-sm">
        <div className="flex justify-between py-2 ">
          <span className="font-[500] text-sm">Answers</span>
          <div className="space-x-5 ">
            <span className="font-[500] text-sm hover:font-[400]">Showing</span>
            <span className="font-[500] text-sm hover:font-[400]">All</span>
          </div>
        </div>

        {/* question1 */}
        <div>
          <div className="flex justify-between mt-2">
            <span>
              <strong>Question 1</strong>
            </span>
            <span className="px-5 py-1 bg-[#40997E] rounded-2xl text-white">
              correct
            </span>
          </div>

          <div className="flex items-center justify-between my-4">
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae possimus ex eaque voluptatum iste in?</span>
          <span className="text-[#40997E] px-4 py-1 rounded-2xl border-[#40997E] bg-[#dbf3eb]">3 point</span>
          </div>

          <div className="space-x-2 ">
            <input type="checkbox" id="radiobox1" className="w-5"/>
            <label htmlFor="radiobox1">Lorem ipsum dolor sit amet consectetur.</label>

            <div className="space-x-2 ">
            <input type="checkbox" id="radiobox2" className="w-5"/>
            <label htmlFor="radiobox2">Lorem ipsum dolor sit amet consectetur.</label>

          </div><div className="space-x-2 ">
            <input type="checkbox" id="radiobox3" className="w-5"/>
            <label htmlFor="radiobox3">Lorem ipsum dolor sit amet consectetur.</label>

          </div><div className="space-x-2 ">
            <input type="checkbox" id="radiobox4" className="w-5"/>
            <label htmlFor="radiobox4">Lorem ipsum dolor sit amet consectetur.</label>
          </div>
          </div>

        </div>

       {/* question2 */}
               <div>
          <div className="flex justify-between my-3">
            <span>
              <strong>Question 2</strong>
            </span>
            <span className="px-5 py-1 bg-[#C12D2D] rounded-2xl text-white">
              correct
            </span>
          </div>

          <div className="flex items-center justify-between my-4">
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae possimus ex eaque voluptatum iste in?</span>
          <span className="text-[#C12D2D] px-4 py-1 rounded-2xl border-[#40997E] bg-[#dbf3eb]">3 point</span>
          </div>

          <div className="space-x-2  ">
            <input type="checkbox" id="radiobox1" className="w-5"/>
            <label htmlFor="radiobox1">Lorem ipsum dolor sit amet consectetur.</label>

            <div className="space-x-2 ">
            <input type="checkbox" id="radiobox2" className="w-5"/>
            <label htmlFor="radiobox2">Lorem ipsum dolor sit amet consectetur.</label>

          </div><div className="space-x-2 ">
            <input type="checkbox" id="radiobox3" className="w-5"/>
            <label htmlFor="radiobox3">Lorem ipsum dolor sit amet consectetur.</label>

          </div><div className="space-x-2 ">
            <input type="checkbox" id="radiobox4" className="w-5"/>
            <label htmlFor="radiobox4">Lorem ipsum dolor sit amet consectetur.</label>
          </div>
          </div>
          </div>

      </div>
    </>
  );
};

export default ViewProgressQuestionAns;
