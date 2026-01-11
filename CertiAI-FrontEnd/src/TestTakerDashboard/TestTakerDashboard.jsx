import React, { useState } from "react";
import { FiBell, FiMessageSquare, FiSearch } from "react-icons/fi";

import logo from "../assets/logo.png";
import SearchNavbar from "../Components/SearchNavbar";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiStudentBold, PiBooksBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const TestTakerDashboard = () => {
  const [dashboard, setDashboard] = useState();

  return (
    <>
      <div className="flex gap-90 bg-gray-100 ">
        {/* left side */}
        <div className="w-[20%]  fixed  bg-white h-svh">
          {/* image logo */}
          <img
            className="w-[200px] bg-center mt-6 bg-contain cursor-pointer"
            src={logo}
            alt="Logo"
          />
          {/* button */}
          <div className="mx-10 my-12 cursor-pointer">
            <div className="flex items-center  gap-5 ">
              <div className="font-bold">
                <HiOutlineDesktopComputer />
              </div>
              <button className="font-[600]">Dashboard</button>
            </div>
            <div className="flex items-center mt-4 gap-5 ">
              <div>
                <PiStudentBold />
              </div>
              <Link to="TestPurchased">
                {" "}
                <button className="font-[400]">Test Purchased</button>
              </Link>
            </div>
            <div className="flex items-center mt-1 gap-5 ">
              <div>
                <GiTeacher />
              </div>
            <Link to='TakeTest'>  <button>Take Tests</button></Link>
            </div>
            <div className="flex items-center mt-1  gap-5 ">
              <div>
                <PiBooksBold />
              </div>
             <Link to='ViewProgress'> <button>View Progress</button></Link>
            </div>

            <div className="flex items-center mt-1  gap-5 ">
              <div>
                <RiSecurePaymentLine />
              </div>
              <NavLink to='Payments'><button>Payments</button></NavLink>
            </div>

            <div className="flex items-center mt-1  gap-5 ">
              <div>
                <RiPagesLine />
              </div>
              <Link to='TestTakerProfile'><button>Test Taker Profile</button></Link>
            </div>
          </div>
        </div>

        {/* right side       */}
        {/* right side */}
<div className="mr-[50%]  min-h-screen bg-gray-200 px-6">
  {/* navbar on the top */}
  <div className="flex justify-between items-center py-4">
    {/* Search Box */}
    <div className="flex items-center bg-white w-full max-w-lg rounded px-3 shadow">
      <FiSearch className="mr-2 text-gray-400" />
      <input
        className="text-gray-600 h-9 text-sm w-full px-2 py-1 rounded outline-none"
        type="text"
        value={dashboard}
        onChange={() => setDashboard()}
        placeholder="Search Dashboard"
      />
    </div>

    {/* Icons */}
    <div className="flex items-center gap-4">
      <FiBell className="bg-white border border-gray-200 w-7 h-7 p-1 rounded cursor-pointer" />
      <FiMessageSquare className="bg-white border border-gray-200 w-7 h-7 p-1 rounded cursor-pointer" />

      {/* Profile Section */}
      <div className="flex items-center bg-white px-3 py-2 rounded gap-2 shadow">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.kN8tEO6_wPf1PMEofLrdTgHaGh?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Profile"
          className="w-10 h-10 object-cover rounded"
        />
        <div>
          <div className="font-semibold">Anwar</div>
          <div className="text-sm text-gray-500">Admin</div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default TestTakerDashboard;
