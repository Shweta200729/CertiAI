import React from 'react';
import logo from '../assets/logo.png';
import loginportal from '../assets/loginportal.png'
import AuthNavbar from './AuthNavbar';
import { FcGoogle } from "react-icons/fc";

const TestTakerLogin = () => {
  return (
    <>
      {/* Navbar */}
      <AuthNavbar />

      <div className="flex flex-col md:flex-row gap-10  px-10">
        {/* Left Side Login */}
        <div className="w-full md:w-[40%] flex flex-col items-center md:items-start">
          <img src={logo} alt="logo"  />

          <div className="w-full md:pl-10">
            <h2 className="font-semibold text-4xl text-center md:text-left">Login</h2>
            <p className="font-medium text-sm mt-2 text-center md:text-left">
              Enter your account details
            </p>

            <form className="mt-5 space-y-4">
              <div>
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-b border-black outline-none py-1"
                 
                />
              </div>

              <div>
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border-b border-black outline-none py-1"
                 
                />
              </div>

              <p className="text-sm my-3 cursor-pointer hover:text-blue-600 hover:underline">
                Forgot password?
              </p>

              {/* Login Button */}
              <button
                type="submit"
                className="bg-[#D04C40] text-white py-2 rounded-md w-full text-center mt-2"
              >
                Login
              </button>
            </form>

            {/* Google Login Button */}
            <button
              className="border border-gray-400 flex items-center justify-center gap-2 py-2 rounded-md w-full text-center mt-3"
              aria-label="Continue with Google"
            >
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </button>

            {/* Sign Up */}
            <div className="mt-2 text-sm w-full flex items-center justify-between">
              <p className="text-center mb-2">Don't have an account?</p>
              <button className="bg-[#D04C40] py-3 rounded-md px-5 text-white hover:bg-[#b63d34]">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Image/Text */}
        <div className="w-full md:w-[60%] bg-[#D04C40] rounded-md">
          <div className='mb-[20px]'>
          <p className="text-white text-6xl font-[800]  mt-1 ml-20 ">Welcome to</p>
          <p className="text-white text-4xl font-[500] ml-20">Test Taker Portal</p>
          <div>
            <p className="text-white text-sm font-[500] tracking-wider ml-21">Login to access your account</p>
            <img src={loginportal} alt="" className='w-[530px]  align-middle' />
          </div>
          <div className='flex items-center gap-2 ml-35'> 
            <span className='text-white'>Not A TestTaker?</span>
            <span>Switch to Instructor</span>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default TestTakerLogin;