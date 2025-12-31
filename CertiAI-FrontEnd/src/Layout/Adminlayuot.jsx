import React from 'react'
import LayoutDashboardPage from '../AdminDashBoard/LayoutDashboardPage'
import { Outlet } from 'react-router-dom'
import Dashboard from '../AdminDashBoard/Dashboard'
import TestTakerMange from '../AdminDashBoard/TestTakers/TestTakerMange'

const Adminlayuot = () => {
  return (
    <>
  
    <div><LayoutDashboardPage/>
    <Dashboard/>
    
    </div>



    <div><Outlet/>
    <TestTakerMange/>
    <Dashboard/>
    </div>

    </>
  )
}

export default Adminlayuot
