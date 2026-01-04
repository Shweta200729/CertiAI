import React from "react";
import LayoutDashboardPage from "../AdminDashBoard/LayoutDashboardPage";
import { Outlet } from "react-router-dom";
import Dashboard from "../AdminDashBoard/Dashboard";
import TestTakerMange from "../AdminDashBoard/TestTakers/TestTakerMange";

const AdminLayout = () => {
  return (
    <>
      {/* Left Sidebar or Top Navigation */}
      <div className="">
      <LayoutDashboardPage />
</div>

          {/* This will render all nested routes */}
          <div className=" bg-gray-200 ml-[20%] px-5 py-3">
          <Outlet />
          </div>

          {/* Extra Component */}
         
        
    </>
  );
};

export default AdminLayout;
