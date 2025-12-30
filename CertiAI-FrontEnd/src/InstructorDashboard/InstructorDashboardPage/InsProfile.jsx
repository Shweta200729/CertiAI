import React from "react";
import Girls from "../../assets/Girls.png";
import { GiPencil } from "react-icons/gi";
import { FcGraduationCap } from "react-icons/fc";
import { FcBookmark } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import DashboardStats from "../ComponentsInstructor/DashboarsStateGrid";

const InsProfile = () => {
  return (
    <>
      <div className="font-[600] my-2 uppercase text-md">Profile</div>

      <div className="flex items-center gap-40 ">
        <div className="w-full max-w-md my-5 rounded-md bg-[#FFCDCD] p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
          <p className="mb-4 text-lg font-semibold text-[#54536E] text-md">
            Personal Details
          </p>

          {/* Details and Profile Change */}
          <div className="space-y-3 space-x-30  text-sm text-[#54536E]">
            <div className="flex justify-between">
              <span className="font-medium">Name</span>
              <span>Ms ABC</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Email</span>
              <span>abc@gmail.com</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Contact</span>
              <span>9876543210</span>
            </div>

            <div className="flex justify-between mr-30">
              <span className="font-medium">Password</span>
              <span>XXXXXXXXXX</span>
            </div>
          </div>
        </div>

        <div className="flex  flex-col items-center">
          <div className="bg-[#FFCDCD] px-15 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-sm flex flex-col items-center  w-fit">
            <img
              className="w-30 py-4 rounded-full"
              src={Girls}
              alt="Profile Photo"
            />
            <div className="flex items-center gap-3 mx-3  bg-white px-2 rounded-sm my-2">
              <p className="text-[#8A8A8A]">Change image</p>
              <GiPencil />
            </div>
          </div>
          <div>
            <div className="w-full rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#FFCDCD]">
              <div className="px-3 mx-9  my-5 py-4  rounded-sm bg-white">
                <div className="text-md font-[500]">Registered Date:</div>
                <div className="text-sm  mx-6 font-[400] mt-2">23-04-2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className=" flex gap-50 justify-between ">
        <div className="h-fit px-5 text-md rounded-md py-4 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-700  ">
          <p className="font-[600]  ">Bio</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus esse, ad iste labore vel voluptates rerum hic ipsum
            eum fuga sed optio quis asperiores incidunt Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Omnis deserunt excepturi,
            exercitationem dolores cum maiores iure. Molestias eligendi aut
            optio!.
          </p>
        </div>
      </div> */}

      {/* <div className="grid grid-cols-2 grid-rows-2  bg-sky-300 gap-10 ">
        <div className="bg-[#FFCDCD] grid-10">
            <div className="">
                <span className="w-20"><  FcGraduationCap className=""/></span>
                 <span>Purchases</span>
            </div>
            <div>
                <span>243</span>
            </div>
        </div>
        
        <div className="bg-[#FFCDCD] grid-10">
            <div className="">
                <span className="w-20"><  FcBookmark className=""/></span>
                 <span>Certificaation Tests</span>
            </div>
            <div>
                <span>243</span>
            </div>
        </div>

       <div className="bg-[#FFCDCD] grid-10">
            <div className="">
                <span className="w-20">< FcCurrencyExchange /></span>
                 <span>Amount Earned</span>
            </div>
            <div>
                <span>243</span>
            </div>
        </div>
       
        <div>
            <div className="bg-[#FFCDCD]">
            <div className="">
                <span>< FcContacts className="bg-[#2183BB]"/></span>
                 <span>Instructor Rating</span>
            </div>
            <div>
                <span>243</span>
            </div>
        </div>
        </div>

      </div> */}

      <DashboardStats/>

      
    </>
  );
};

export default InsProfile;
