import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between px-20 items-center py-2">
        <img
          className="w-[200px] bg-center bg-contain cursor-pointer"
          src={logo}
          alt="Logo"
        />
        <div className="flex gap-10 font-[500] ">
          <Link
            to="/"
            className="hover:text-[#CF4D40] hover:border-b-2 hover:border-b-amber-700 cursor-pointer"
            href="#"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="hover:text-[#CF4D40]  hover:border-b-2 hover:border-b-amber-700 cursor-pointer"
            href="#"
          >
            About
          </Link>
          <Link
            to="/Tests"
            className="hover:text-[#CF4D40] hover:border-b-2 hover:border-b-amber-700 cursor-pointer"
            href="#"
          >
            Tests
          </Link>
          <Link
            to="/Contact"
            className="hover:text-[#CF4D40] hover:border-b-2 hover:border-b-amber-700 cursor-pointer"
            href="#"
          >
            Contact Us
          </Link>
          <Link
            to="/Admin"
            className="hover:text-[#CF4D40] hover:border-b-2 hover:border-b-amber-700 cursor-pointer"
            href="#"
          >
            Admin
          </Link>
        </div>
        <button className="bg-[#CF4C42]  font-[500] px-7 py-2 rounded-3xl text-white cursor-pointer ">
          Login/Register
        </button>
      </div>
    </>
  );
};

export default Navbar;
<Link to="/about">About</Link>;
