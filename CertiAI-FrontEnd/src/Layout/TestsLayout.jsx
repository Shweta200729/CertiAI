import React from "react";
import { Outlet } from "react-router-dom";

import TestTakerDashboard from "../TestTakerDashboard/TestTakerDashboard";

const TestsLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Dashboard Sidebar */}
      
        <TestTakerDashboard />
      

      {/* Right Content Area */}
      <div className="flex-1 bg-gray-200 px-5 py-3">
        <Outlet />
      </div>
    </div>

  );
};
export default TestsLayout;
