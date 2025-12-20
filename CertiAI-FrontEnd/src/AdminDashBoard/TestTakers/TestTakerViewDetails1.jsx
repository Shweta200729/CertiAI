import React from "react";
import { FiArrowLeft, FiMinus } from "react-icons/fi";
import TestTakerGirlProfile from "../../assets/TestTakerGirlProfile.png";
import TestTakerViewDetails2 from "./TestTakerViewDetails2";
import TestTakerProfileGeneralPage from "./TestTakerComponents/TestTakerProfileGeneralPage";
const TestTakerViewDetails1 = () => {
  return (
    <>
      <div className="min-h-screen">
        {/* TestTaker Profile */}
        <div className="flex justify-between  mt-5">
          <div className="flex items-center gap-3  text-[#3C3C3C] font-medium font-[400]">
            <FiArrowLeft className="text-xl" />
            <p className="text-[#3C3C3C]  font-medium font-[400]">
              TestTaker Profile
            </p>
          </div>
          <div className="flex flex-row-reverse ">
            <button className="px-4 mt-6 py-2 bg-[#CF4D41] font-[500] text-white rounded hover:bg-[#b84338] flex gap-1 items-center ">
              <FiMinus /> Remove
            </button>
          </div>
        </div>

        {/* Profile image detail */}
        <div className="flex gap-8 my-4">
          <img
            className="w-16 rounded-full "
            src={TestTakerGirlProfile}
            alt="profile image"
          />
          <div>
            <p className="font-[500] text-md text-[#3C3C3C] ">Raj Anadkat</p>
            <p className="text-sm text-[#3C3C3C] font-[400]">
              Student ID: EU1244324
            </p>
            <p className="text-sm text-[#3C3C3C] font-[400]"> Gender: Female</p>
          </div>
        </div>

        {/* General Test Purchased  */}
        <div className="mt-10">
          <div className="flex gap-15 ">
            <p className="text-sm pb-3 font-[500] text-[#707070] hover:border-b-2  hover:border-b-[#CF4C42] hover:text-[#CF4C42] focus:border-b-[#CF4C42] focus:text-[#CF4C42]">
              General
            </p>
            <p className="text-sm  pb-3 font-[500] text-[#707070] hover:border-b-2 px-2 hover:border-b-[#CF4C42] hover:text-[#CF4C42] focus:border-b-[#CF4C42] focus:text-[#CF4C42]">
              Tests Purchased
            </p>
          </div>
          <hr className=" border  mb-3 border-[#dfdbdb] w-[100%]  " />
        </div>

        {/* After Purchased Clicked */}
       {/* <TestTakerProfileGeneralPage/> */}
       <TestTakerViewDetails2/>
      </div>
    </>
  );
};

export default TestTakerViewDetails1;
