import React from 'react'
import InstructorDashboard from '../InstructorDashboard/InstructorDashboard'
import { Outlet } from 'react-router-dom'

const InstructorDashboardLayout = () => {
  return (
    <div >
        <div>
      <InstructorDashboard/>
      <div className='ml-[20%]'>
      <Outlet />
      </div>
      </div>
    </div>
  )
}

export default InstructorDashboardLayout
