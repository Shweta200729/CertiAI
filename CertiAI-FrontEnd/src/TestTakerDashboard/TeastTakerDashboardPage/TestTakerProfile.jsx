import React from "react";
import Girls from "../../assets/Girls.png";
import { GiPencil } from "react-icons/gi";
const TestTakerProfile = () => {
  return (
    <>
      <div className="font-[600] my-2 uppercase text-md">Profile</div>

      <div className="flex items-center gap-40 ">
        <div className="w-full max-w-md my-5 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#FFCDCD] p-5">
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

        <div className="bg-[#FFCDCD] shadow-md hover:shadow-lg transition-shadow duration-300 px-15 rounded-sm flex flex-col items-center  w-fit">
          <img  className="w-30 py-4 rounded-full" src={Girls} alt="Profile Photo" />
          <div className="flex items-center gap-3 mx-3  bg-white px-2 rounded-sm my-2">
          <p className="text-[#8A8A8A]">Change image</p>
          <GiPencil/>
          </div>

        </div>
      </div>


      <div className=" flex gap-50 justify-between ">

        <div className="h-fit px-5 text-md rounded-md py-4 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-700  ">
          <p className="font-[600]  ">Bio</p>
          <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus esse, ad iste labore vel voluptates rerum hic ipsum eum fuga sed optio quis asperiores incidunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deserunt excepturi, exercitationem dolores cum maiores iure. Molestias eligendi aut optio!.</p>

        </div>

         <div className="w-full rounded-sm  shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#FFCDCD]">
          <div className="px-3 mx-9 my-8 py-4 rounded-sm bg-white">
          <div className="text-md font-[500]">Registered Date:</div>
          <div className="text-sm  mx-6 font-[400] mt-2">23-04-2026</div>
          </div>
         </div>

       </div>
      
    </>
  );
};

export default TestTakerProfile;
