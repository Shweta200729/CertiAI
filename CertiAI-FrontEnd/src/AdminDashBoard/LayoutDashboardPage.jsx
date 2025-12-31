import React, { useState } from "react";
import logo from "../assets/logo.png";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiStudentBold, PiBooksBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FiBell, FiMessageSquare, FiSearch } from "react-icons/fi";
import { Links, NavLink, useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import TestTakerMange from "./TestTakers/TestTakerMange";
import TestTakerAdd from "./TestTakers/TestTakerAdd1";
import TestTakerAdd2 from "./TestTakers/TestTakerAdd2";
import TestTakerViewDetails1 from "./TestTakers/TestTakerViewDetails1";
import TestTakerRemove1 from "./TestTakers/TestTakerRemove1";
import TestTakerAdd1 from "./TestTakers/TestTakerAdd1";
import TestTakerRemove2 from "./TestTakers/TestTakerRemove2";
import TestTakerViewDetails2 from "./TestTakers/TestTakerViewDetails2";
import InstructorManage from "./Instructors/InstructorManage";
import InstructorAdd1 from "./Instructors/InstructorAdd1";
import InstructorAdd2 from "./Instructors/InstructorAdd2";
import InstructorViewDetail1 from "./Instructors/InstructorViewDetail1";
import PaymentsDetailPage from "./Payments/PaymentsDetailPage";
import InstrucrorOffers from "./Instructors/InstructorComponents/InstrucrorOffers";
import InstructorRemove1 from "./Instructors/InstructorRemove1";
import InstructorRemove2 from "./Instructors/InstructorRemove2";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Link,
  Route,
} from "react-router-dom";

const LayoutDashboardPage = () => {
  const [dashboard, setDashboard] = useState();

  const Navigate = useNavigate();
  // const router=createBrowserRouter(
  //  createRoutesFromElements(
  //   <Route path="/" element={<Dashboard />}>

  //   </Route>
  //  )
  // )

  return (
    <>
      <div className="flex bg-gray-100">
        {/* left part */}

        <div className="w-[20%] c fixed  bg-white h-svh">
          {/* image logo */}
          <img
            className="w-[200px] bg-center mt-6 bg-contain cursor-pointer"
            src={logo}
            alt="Logo"
            onClick={() => Navigate("/")}
          />
          {/* button */}
          <div className="mx-10 my-12 cursor-pointer">
            <div className="flex items-center  gap-5 ">
              <div className="font-bold">
                <HiOutlineDesktopComputer />
              </div>

              <NavLink to="/Dashboard">
                <button className="font-[600] cursor-pointer">Dashboard</button>
              </NavLink>
            </div>
            <NavLink to="/TestTaker">
              <div className="flex items-center mt-4 gap-5 ">
                <div>
                  <PiStudentBold />
                </div>
                <button
                  className="font-[400] cursor-pointer hover:border hover:border-pink-400 hover:Rounded-md  hover:bg-pink-200 "
                  onClick={useNavigate("/TestakerManager")}
                >
                  TestTakers
                </button>
              </div>
            </NavLink>
            <Link to="/Instructor">
              <div className="flex items-center mt-1 gap-5 ">
                <div>
                  <GiTeacher />
                </div>
                <button>Instructor</button>
              </div>
            </Link>
            <Link to="/TestEnvironment">
              <div className="flex items-center mt-1  gap-5 ">
                <div>
                  <PiBooksBold />
                </div>
                <button>Test Environment</button>
              </div>
            </Link>
            <Link to="/Payment">
              <div className="flex items-center mt-1  gap-5 ">
                <div>
                  <RiSecurePaymentLine />
                </div>
                <button>Payments</button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Right part */}
      <div className="w-[80%] ml-[20%] h-full bg-gray-200 px-10  ">
        {/* navbar  on the top*/}
        <div className="flex justify-between  items-center mt-6">
          <div className="flex justify-center items-center w-min border border-gray-200 shadow-white ">
            <div className="flex items-center bg-white w-[650px] rounded px-2 shadow-sm">
              <span>
                <FiSearch className="mr-2 text-gray-400 " />
              </span>
              <input
                className="text-gray-400 h-9 text-sm w-full px-2 py-1 rounded outline-none"
                type="text"
                value={dashboard}
                onChange={() => setDashboard()}
                placeholder="Search Dashboard"
              />
            </div>
          </div>
          {/* Icons */}
          <div className="  ">
            <FiBell className="shadow-sm  bg-white border border-gray-200 shadow-white w-7 h-5  text-xl cursor-pointer" />{" "}
          </div>
          <div>
            <FiMessageSquare className=" shadow-sm bg-white border border-gray-200 shadow-white w-7 h-5  text-xl cursor-pointer" />
          </div>

          {/* Profile Section */}
          <div className="flex items-center  bg-white px-2 py-2 rounded-sm gap-2">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.kN8tEO6_wPf1PMEofLrdTgHaGh?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Profile"
              className="w-10 h-10 object-cover rounded"
            />
            <div>
              <div className="font-semibold">Anwar</div>
              <div className="text-sm">Admin</div>
            </div>
          </div>
        </div>
        {/* <InstructorRemove2/> */}
        <Dashboard />
      </div>
    </>
  );
};

export default LayoutDashboardPage;
