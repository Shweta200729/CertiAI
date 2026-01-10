import React from 'react'
import { Outlet } from 'react-router-dom'
import PaymentsDetailPage from '../AdminDashBoard/Payments/PaymentsDetailPage';

const PaymentsLayout = () => {
  return (
    <>
    <PaymentsDetailPage/>
        <div><Outlet/></div>
        </>
  )
}

export default PaymentsLayout;