import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiBell, FiMessageSquare, FiSearch } from "react-icons/fi";

const SearchNavbar = () => {
  const [dashboard, setDashboard] = useState();

  return (
    <>
      <nav className="flex justify-between bg-gray-300 px-20 items-center py-2">
        {/* Logo */}
        <img
          className="w-[200px] bg-center bg-contain cursor-pointer"
          src={logo}
          alt="Logo"
        />

        {/* Search Input */}
        <div className="flex justify-center items-center w-min border border-gray-200 shadow-white ">
          <div className="flex items-center w-[450px] rounded px-2 shadow-sm">
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
          <FiBell className="shadow-sm  border border-gray-200 shadow-white w-7 h-5  text-xl cursor-pointer" />{" "}
        </div>
        <div>
          <FiMessageSquare className=" shadow-sm  border border-gray-200 shadow-white w-7 h-5  text-xl cursor-pointer" />
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-2">
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
      </nav>
    </>
  );
};

export default SearchNavbar;
