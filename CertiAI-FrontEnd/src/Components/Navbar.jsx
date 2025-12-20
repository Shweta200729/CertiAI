import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between px-20 items-center py-2">
        <img className="w-[200px] bg-center bg-contain cursor-pointer" src={logo} alt="Logo" />
        <div className="flex gap-10 font-[500] ">
          <a
            className="hover:text-[#CF4D40] hover:border-b-2 hover:border-b-amber-700 cursor-pointer"
            href="#"
          >
            Home
          </a>
          <a
            className="hover:text-[#CF4D40]  hover:border-b-2 hover:border-b-amber-700 cursor-pointer"
            href="#"
          >
            About
          </a>
          <a
            className="hover:text-[#CF4D40] hover:border-b-2 hover:border-b-amber-700 cursor-pointer"
            href="#"
          >
            Tests
          </a>
          <a
            className="hover:text-[#CF4D40] hover:border-b-2 hover:border-b-amber-700 cursor-pointer"
            href="#"
          >
            Contact Us
          </a>
          <a
            className="hover:text-[#CF4D40] hover:border-b-2 hover:border-b-amber-700 cursor-pointer"
            href="#"
          >
         
            Admin
          </a>
        </div>
        <button className="bg-[#CF4C42]  font-[500] px-7 py-2 rounded-3xl text-white cursor-pointer ">
          Login/Register
        </button>
      </div>

     
    </>
  );
};

export default Navbar;
