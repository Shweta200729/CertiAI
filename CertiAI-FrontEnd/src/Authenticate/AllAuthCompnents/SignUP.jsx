import React from 'react'
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/logo.png';

const SignUP = () => {
  return (
   <>
     <div className="w-full md:w-[40%] flex flex-col items-center h-[100%] md:items-start">
                  <img src={logo} alt="logo"  />
        
                  <div className="w-full md:pl-10">
                    <h2 className="font-semibold text-4xl text-center md:text-left">Sign Up</h2>
                    <p className="font-medium text-sm mt-2 text-center md:text-left">
                      Enter your account details
                    </p>
        
                    <form className="mt-5 space-y-4">

                         <div>
                        <label htmlFor="fullname" className="text-sm">
                          FullName
                        </label>
                        <input
                          type="fullname"
                          id="fullname"
                          name="fullname"
                          className="w-full border-b border-black outline-none py-1"
                         
                        />
                      </div>




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
                        Sign Up
                      </button>
                    </form>
        
                    {/* Google Login Button */}
                    <button
                      className="border border-black flex items-center justify-center gap-2 py-2 rounded-md w-full text-center mt-3"
                      aria-label="Continue with Google"
                    >
                      <FcGoogle className="text-xl" />
                      <span className=''>Sign Up with Google</span>
                    </button>
        
                    {/* Sign Up */}
                    <div className="mt-2 text-sm w-full flex items-center justify-between">
                      <p className="text-center mb-2">Don't have an account?</p>
                      <button className="bg-[#D04C40] py-3 rounded-md px-5 text-white hover:bg-[#b63d34]">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
   </>
  )
}

export default SignUP