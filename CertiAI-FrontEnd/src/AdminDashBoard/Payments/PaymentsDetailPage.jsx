import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import Credit from "./ReportCreditDebitComponents.jsx/Credit";
import Debit from "./ReportCreditDebitComponents.jsx/Debit";
import { useNavigate } from "react-router-dom";
import Report from "./ReportCreditDebitComponents.jsx/Report";
const PaymentsDetailPage = () => {
  const navigate=useNavigate()
  const [activateSection,setAvtivateSection]=useState()
  return (
    <>
    {/* Report credit debit */}
      <div className="space-x-8">
        <span onClick={()=>{
          navigate('ReportPage');
          setAvtivateSection('ReportPage');
          }}
           className="hover:text-[#CF4D40] px-2 hover:border-b-2 hover:border-b-amber-700 cursor-pointer py-2">
          Report
        </span>
        <span onClick={()=>{
          navigate('creaditPage');
          setAvtivateSection('creaditPage')
          }} className="hover:text-[#CF4D40] px-2 hover:border-b-2 hover:border-b-amber-700 cursor-pointer py-2">
          Credit
        </span>
        <span onClick={()=>{
          navigate('debitpage');
          setAvtivateSection('debitpage')
        }}
         className="hover:text-[#CF4D40] px-2 hover:border-b-2 hover:border-b-amber-700 cursor-pointer py-2">
          Debit
        </span>
        <hr className="border border-gray-300 my-2" />
      </div>

   {/* date */}
      <div className="flex items-center gap-4 text-sm text-[#434343]">
        <div>From</div>
        <div className="flex items-center">
          <div>
            <FiCalendar />
          </div>
          <div> 12-01-2026</div>
        </div>
        <div>to</div>
        <div className="flex items-center">
          <div>
            <FiCalendar />
          </div>
          <div> 12-01-2026</div>
        </div>
      </div>

   {/* credit */}
      {/* <Credit/> */}

      {activateSection==='debitpage'&&<Debit/>}
       {activateSection==='creaditPage'&&<Credit/>}
        {activateSection==='ReportPage'&&<Report/>}

<Debit/>

    </>
  );
};

export default PaymentsDetailPage;
