import React from "react";
import DashboardProfileRow from "../ComponentsTest/DashboardProfileRow";
import DashNotificaation from "../ComponentsTest/DashNotificaation";
const TestDashboard = () => {
  return (
    <>
      {/* box */}
      <div className="  rounded-md mt-6 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-700  w-[70%]">
        <div className="text-white  pl-6 pt-6">
          <div className=" text-lg">
            Start Taking Tests and Build your Career as a
          </div>
          <div className="text-sm pt-2">Test Taker in the World of Certify</div>
          <div className="text-sm pt-2">Explore the community</div>
          <div className=" text-black underline text-sm py-4">Sea More</div>
        </div>
      </div>
   <div className="flex gap-20 justify-between">
    <div className="bg-[#FFCDCD] rounded-sm my-9 w-[370px] ">
      <p className="text-[#54536E] font-[700]  px-2 pt-2">Your Courses/Tests</p>
      <div className=" py-2 px-3">
      <DashboardProfileRow/>
      <DashboardProfileRow/>
      <DashboardProfileRow/>
      <DashboardProfileRow/>
      <DashboardProfileRow/>
      </div> 
      </div>
  {/* notification */}
       <div className="bg-[#FFCDCD] rounded-sm w-[340px] my-9  ">
      <p className="text-[#54536E] font-[700]  px-2 pt-2">Notification</p>
      <div className=" py-2 px-3">
        <DashNotificaation/>
        <DashNotificaation/>
        <DashNotificaation/>
        <DashNotificaation/>
        
      
      </div> 
      </div>
    </div>
    </>
  );
};

export default TestDashboard;
