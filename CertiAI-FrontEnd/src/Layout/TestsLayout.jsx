import React from "react";
import { Outlet } from "react-router-dom";

import TestTakerDashboard from "../TestTakerDashboard/TestTakerDashboard";

const TestsLayout = () => {
  return (
    <div >
      {/* Left Dashboard Sidebar */}
      
        <TestTakerDashboard />
    
      {/* Right Content Area */}
      <div className=" bg-gray-200 px-5 py-3 my-3 ml-[20%]  " >
        <Outlet />
      </div>
    </div>

  );
};
export default TestsLayout;
