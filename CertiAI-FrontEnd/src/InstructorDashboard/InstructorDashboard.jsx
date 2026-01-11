import React, { useState } from 'react'
import { FiBell, FiMessageSquare, FiSearch } from "react-icons/fi";

import logo from "../assets/logo.png";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiStudentBold, PiBooksBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Dashboard from './InstructorDashboardPage/Dashboard';
import InsProfile from './InstructorDashboardPage/InsProfile';
import YourPayments  from './InstructorDashboardPage/YourPayments';
import ManageTests from './InstructorDashboardPage/ManageTests';
import { Link } from 'react-router-dom';

const InstructorDashboard = () => {

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
                  <Link to='Dashboard'><button className="font-[400]">Upload Tests</button></Link>
                </div>
                <div className="flex items-center mt-1 gap-5 ">
                  <div>
                    <GiTeacher />
                  </div>
                  <Link to='ManageTests'><button>Manage Tests</button></Link>
                </div>
                <div className="flex items-center mt-1  gap-5 ">
                  <div>
                    <PiBooksBold />
                  </div>
                 <Link to='yourPayment'> <button>Your Payments</button></Link>
                </div>

                <div className="flex items-center mt-1  gap-5 ">
                  <div>
                    <RiSecurePaymentLine />
                  </div>
                  <Link to='insprofile'><button>Instructor Profile</button></Link>
                </div>


              </div>
            </div>

      {/* right side       */}
       <div className="w-[80%] ml-[20%] h-screen bg-gray-200 px-10  ">
            
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
         {/* <Dashboard/> */}
         {/* <InsProfile/> */}
         {/* <YourPayments/> */}
         {/* <ManageTests/> */}
        </div>
      
      

</div>
    </>
  )
}

export default InstructorDashboard;




