import React from 'react'

const InstructorRemove1 = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center">
      <p className="text-2xl font-[600] text-[#474747] ">
        Instructor Will be Removed
      </p>
      <p className=" text-sm my-4 text-[#474747]">This action can not be reversed</p>
      <div className="flex gap-3">
      <button className="px-4 py-2 bg-[#2188E7] text-white rounded-md hover:bg-[#0d66b9] ">
       No, Cancel Process
      </button>
      <button className="px-4 py-2 bg-[#CF4D41] text-white rounded-md hover:bg-[#b84338] ">
        Yes, Remove Instructor
      </button>
      </div>
    </div>
    
    </>
  )
}

export default InstructorRemove1
