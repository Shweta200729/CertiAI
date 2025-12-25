import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

import LayoutDashboardPage from './AdminDashBoard/LayoutDashboardPage'
import TestTakerLogin from './Authenticate/TestTakerLogin'
import TestTakerAdd1 from './AdminDashBoard/TestTakers/TestTakerAdd1'
import TestTakerMange from './AdminDashBoard/TestTakers/TestTakerMange'
import TestTakerDashboard from './TestTakerDashboard/TestTakerDashboard'

function App() {
 
  return (
    <>
   
   {/* <LayoutDashboardPage/> */}
   {/* <TestTakerLogin/> */}

   <TestTakerDashboard/>
   

     
  
    </>
  )
}

export default App
