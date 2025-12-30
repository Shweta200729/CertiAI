import React from 'react'
import { InstructorNotification } from '../ComponentsInstructor/InstructorNotification'
import InstructorUploadTestRow from '../ComponentsInstructor/InstructorUploadTestRow'

const Dashboard = () => {
  return (
<>
{/* box */}
  <div className="  rounded-md mt-6 w-fit pl-2 pr-20 py-4 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-700  ">
    <p className='text-white text-md'>Start Uploading Tests and Build your Career as <br /> an instructor in the World of <strong>CertiAI</strong> <br />Explore and Help the Community Grow and <br />Thrive <span className='text-sm text-black font-[500] underline'>See more</span></p>
  </div>

{/* Your Uploads */}
<div className="flex gap-20 justify-between">
    <div className="bg-[#FFCDCD] rounded-sm my-9 w-[370px] ">
      <p className="text-[#54536E] font-[700]  px-2 pt-2">Your Courses/Tests</p>
      <div className=" py-2 px-3">
     <InstructorUploadTestRow/>
     <InstructorUploadTestRow/>
     <InstructorUploadTestRow/>
     <InstructorUploadTestRow/>
     <InstructorUploadTestRow/>
      </div> 
      </div>
  {/* notification */}
       <div className="bg-[#FFCDCD] rounded-sm w-[340px] my-9  ">
      <p className="text-[#54536E] font-[700]  px-2 pt-2">Notification</p>
      <div className=" py-2 px-3">
       <InstructorNotification/> 
       <InstructorNotification/>      
       <InstructorNotification/> 
       <InstructorNotification/> 
       <InstructorNotification/> 
      </div> 
      </div>
      </div>

  </>
  )
}

export default Dashboard
