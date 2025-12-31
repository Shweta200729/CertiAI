import React from 'react'
import { FiClock } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

const InstrucrorOffers = () => {
  return (
    <>
     {/* boxes */}
                  <div className="bg-white w-max  rounded-sm h-min pl-4 pr-15 py02">
                    <p className="font-[600] pt-2 pb-7">OCP</p>
                    <div className="text-[#989898] border border-[#D3D3D3] pr-9 pl-2 rounded-sm text-sm font-[500] w-max">
                      Sir Asif
                    </div>
                    <div className="flex gap-5 my-2 text-sm text-[#989898] font-[500]">
                      <div className="flex items-center gap-2">
                        <span>
                          <FiClock />
                        </span>
                        <span>12:40 P:M </span>
                      </div>
        
                      <div className="flex items-center gap-2">
                        <span>
                          <FiCalendar />
                        </span>
                        <span> 03 Jan 2025 </span>
                      </div>
                    </div>
                    <div className="pb-5 pt-1">
                      <div className="text-[#F12222]  bg-[#FFDDDD]  text-sm rounded-sm w-max px-5 pr-8 py-1 ">
                        Status: Inactive
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default InstrucrorOffers;


