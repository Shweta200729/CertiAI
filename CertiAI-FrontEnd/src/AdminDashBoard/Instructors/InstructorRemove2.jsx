import React from 'react'
import { useNavigate } from 'react-router-dom'

const InstructorRemove2 = () => {
  const navigate=useNavigate()
  return (
    <>
       <div className="min-h-screen flex flex-col justify-center items-center">
      <p className="text-2xl font-[600] text-[#474747] mb-6">
        Instructor Has Been Removed
      </p>
      <button onClick={()=>navigate('/admin')} className="px-4 py-2 bg-[#CF4D41] text-white rounded hover:bg-[#b84338] ">
        Back To Dashboard
      </button>
    </div>
    </>
  )
}

export default InstructorRemove2
