import React from 'react'
import TestTakerMange from '../AdminDashBoard/TestTakers/TestTakerMange'
import { Link, Outlet } from 'react-router-dom'
import TestTakerAdd2 from '../AdminDashBoard/TestTakers/TestTakerAdd2'

const TestTakerManageLayout = () => {
  return (
    <>
    

    <div>
        <Outlet/>
    </div>
    </>

  )
}

export default TestTakerManageLayout