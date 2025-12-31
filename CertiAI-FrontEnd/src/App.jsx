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
import PassPage from './TestTakerDashboard/PassPage'
import TestDashboard from './TestTakerDashboard/TeastTakerDashboardPage/TestDashboard'
import InstructorDashboard from './InstructorDashboard/InstructorDashboard'
import Dashboard from './AdminDashBoard/Dashboard'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './PagesStating/Home'
import Contact from './PagesStating/Contact'
import About from './PagesStating/About'
import Adminlayuot from './Layout/Adminlayuot'
import PaymentDetail from './TestTakerDashboard/TeastTakerDashboardPage/PaymentDetail'

function App() {

  const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* USER ROUTES */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<Adminlayuot />}>
    <Route path='dashboard' element={<Dashboard/>}></Route>
      <Route path='Testtaker' element={<TestTakerMange/>}></Route>  
      
      
        
      </Route>
    </>
  )
);

 
 
  return (
    <>
    <RouterProvider router={router}/>
   

   {/* <LayoutDashboardPage/> */}
   {/* <TestTakerLogin/> */}
   {/* <TestTakerDashboard/> */}
   {/* <InstructorDashboard/> */}
   


     
  
    </>
  )
}

export default App
