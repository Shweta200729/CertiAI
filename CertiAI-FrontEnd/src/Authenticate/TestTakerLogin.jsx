import React from 'react'
import loginportal from '../assets/loginportal.png'
import AuthNavbar from './AuthNavbar';
import LoginAuth from './AllAuthCompnents/LoginAuth';
import SignUP from './AllAuthCompnents/SignUP';

const TestTakerLogin = () => {
  return (
    <>
      {/* Navbar */}
      <AuthNavbar />

      <div className="flex flex-col md:flex-row gap-10  px-10">
        {/* Left Side Login */}
       {/* <LoginAuth/> */}
       <SignUP/>

        {/* Right Side Image/Text */}
        <div className="w-full md:w-[60%] bg-[#D04C40] rounded-md">
          <div className='mb-[20px]'>
          <p className="text-white text-7xl font-[800]  mt-1 ml-20 ">Welcome to</p>
          <p className="text-white text-4xl font-[500] ml-20">Test Taker Portal</p>
          <div>
            <p className="text-white text-sm font-[500] tracking-wider  ml-21">Login to access your account</p>
            <img src={loginportal} alt="" className='w-[460px] ml-25  ' />
          </div>
          <div className='flex ml-[30%] gap-2 '> 
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