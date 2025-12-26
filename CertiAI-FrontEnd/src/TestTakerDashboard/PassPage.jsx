import React, { useState } from "react";
import { FiBell, FiMessageSquare, FiSearch } from "react-icons/fi";

import logo from "../assets/logo.png";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiStudentBold, PiBooksBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import ViewProgress from "./TeastTakerDashboardPage/ViewProgress";
import ViewProgressQuestionAns from "./TeastTakerDashboardPage/ViewProgressQuestionAns";
import TestTakerProfile from "./TeastTakerDashboardPage/TestTakerProfile";

const PassPage = () => {
  const [dashboard, setDashboard] = useState();

  return (
    <>
      <div className="flex bg-gray-100">
        {/* left side */}
        <div className="w-[20%] c fixed  bg-white h-svh">
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
              <button className="font-[400]">Test Purchased</button>
            </div>
            <div className="flex items-center mt-1 gap-5 ">
              <div>
                <GiTeacher />
              </div>
              <button>Take Tests</button>
            </div>
            <div className="flex items-center mt-1  gap-5 ">
              <div>
                <PiBooksBold />
              </div>
              <button>View Progress</button>
            </div>

            <div className="flex items-center mt-1  gap-5 ">
              <div>
                <RiSecurePaymentLine />
              </div>
              <button>Payments</button>
            </div>

            <div className="flex items-center mt-1  gap-5 ">
              <div>
                <RiPagesLine />
              </div>
              <button>Test Taker Profile</button>
            </div>
          </div>
        </div>

        {/* right side       */}
        <div className="w-[80%] ml-[20%] h-screen bg-gray-200 px-10  ">
          {/* Right side profile card */}
          <div className="flex mt-3 justify-end">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.kN8tEO6_wPf1PMEofLrdTgHaGh?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Profile"
              className="w-10 h-10 object-cover rounded"
            />
            <div className="ml-2 ">
              <div className="font-semibold">Anwar</div>
              <div className="text-sm">Admin</div>
            </div>
          </div>

          <div className="flex items-center my-2">
            <hr className="border-2 border-[#CF4F41]  w-full" />
            <span className="text-[#CF4F41] text-3xl px-4">PASS</span>
            <hr className="border-2 border-[#CF4F41]  w-full" />
          </div>
         
          {/* <ViewProgress /> */}
          {/* <ViewProgressQuestionAns/> */}
         
        </div>
      </div>
    </>
  );
};

export default PassPage;
