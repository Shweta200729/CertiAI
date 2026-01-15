import TestTakerAdd1 from "./AdminDashBoard/TestTakers/TestTakerAdd1";
import TestTakerMange from "./AdminDashBoard/TestTakers/TestTakerMange";
import Dashboard from "./InstructorDashboard/InstructorDashboardPage/Dashboard";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./PagesStating/Home";
import Contact from "./PagesStating/Contact";
import About from "./PagesStating/About";
import AdminLayout from "./Layout/AdminLayout";
import InstructorManage from "./AdminDashBoard/Instructors/InstructorManage";
import TestEnvironments from "./AdminDashBoard/Test Environment/TestEnvironments";
import PaymentsDetailPage from "./AdminDashBoard/Payments/PaymentsDetailPage";
import TestTakerManageLayout from "./Layout/TestTakerManageLayout";
import TestTakerAdd2 from "./AdminDashBoard/TestTakers/TestTakerAdd2";
import TestTakerViewDetails1 from "./AdminDashBoard/TestTakers/TestTakerViewDetails1";
import TestTakerViewDetails2 from "./AdminDashBoard/TestTakers/TestTakerViewDetails2";
import TestTakerRemove1 from "./AdminDashBoard/TestTakers/TestTakerRemove1";
import TestTakerRemove2 from "./AdminDashBoard/TestTakers/TestTakerRemove2";
import InstructorLayout from "./Layout/InstructorLayout";
import InstructorAdd1 from "./AdminDashBoard/Instructors/InstructorAdd1";
import InstructorAdd2 from "./AdminDashBoard/Instructors/InstructorAdd2";
import InstructorViewDetail1 from "./AdminDashBoard/Instructors/InstructorViewDetail1";
import PaymentsLayout from "./Layout/paymentsLayout";
import Credit from "./AdminDashBoard/Payments/ReportCreditDebitComponents.jsx/Credit";
import Debit from "./AdminDashBoard/Payments/ReportCreditDebitComponents.jsx/Debit";
import Report from "./AdminDashBoard/Payments/ReportCreditDebitComponents.jsx/Report";
import TestsLayout from "./Layout/TestsLayout";
import TestDashboard from "./TestTakerDashboard/TeastTakerDashboardPage/TestDashboard";
import TakeTest from "./TestTakerDashboard/TeastTakerDashboardPage/TakeTest";
import ViewProgress from "./TestTakerDashboard/TeastTakerDashboardPage/ViewProgress";
import ViewProgressQuestionAns from "./TestTakerDashboard/TeastTakerDashboardPage/ViewProgressQuestionAns";
import PaymentDetail from "./TestTakerDashboard/TeastTakerDashboardPage/PaymentDetail";
import TestTakerProfile from "./TestTakerDashboard/TeastTakerDashboardPage/TestTakerProfile";
import InstructorDashboard from "./InstructorDashboard/InstructorDashboard";
import InsProfile from "./InstructorDashboard/InstructorDashboardPage/InsProfile";
import ManageTests from "./InstructorDashboard/InstructorDashboardPage/ManageTests";
import YourPayments from "./InstructorDashboard/InstructorDashboardPage/YourPayments";
import InstructorDashboardLayout from "./Layout/InstructorDashboardLayout";
import TestTakerPPurchased from "./TestTakerDashboard/TeastTakerDashboardPage/TestTakerPPurchased"
import { useEffect } from "react";
import axios from "axios";

function App() {
   useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/test/")
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* USER ROUTES */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="/Tests" element={<TestsLayout />}>
            <Route  element={<TestDashboard />} />
             <Route path="Take" element={<TestTakerPPurchased />} />
            <Route path="TakeTest" element={<TakeTest />} />
            <Route path="ViewProgress" element={<ViewProgress />} />
            <Route
              path="ViewprogressQuestion"
              element={<ViewProgressQuestionAns />}
            />
            <Route path="Payments" element={<PaymentDetail />} />
            <Route path="TestTakerProfile" element={<TestTakerProfile />} />
          </Route>

          <Route path="contact" element={<Contact />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="TestTakerManage" element={<TestTakerManageLayout />}>
            <Route element={<TestTakerMange />} />
            <Route path="TestTakerAdd-1" element={<TestTakerAdd1 />} />
            <Route path="TestTakerAdd-2" element={<TestTakerAdd2 />} />
            <Route path="ProfilePage" element={<TestTakerViewDetails1 />} />
            <Route path="RemoveTestTaker" element={<TestTakerRemove1 />} />
            <Route path="Remove" element={<TestTakerRemove2 />} />
          </Route>

          <Route path="Instructor" element={<InstructorLayout />}>
            <Route index element={<InstructorManage />} />
            <Route path="InstructAdd-1" element={<InstructorAdd1 />} />
            <Route path="InstructAdd-2" element={<InstructorAdd2 />} />
            <Route
              path="InstructorProfilepage"
              element={<InstructorViewDetail1 />}
            />{" "}
            <Route index element={<TestDashboard />} />
            <Route path="RemoveInstructor1" element={<TestTakerRemove1 />} />
            <Route path="RemoveInstrctor2" element={<TestTakerRemove2 />} />
          </Route>

          <Route path="TestEnvironment" element={<TestEnvironments />} />

          <Route path="Payments" element={<PaymentsLayout />}>
            <Route index element={<PaymentsDetailPage />} />
            <Route path="ReportPage" element={<Report />} />
            <Route path="creaditPage" element={<Credit />} />
            <Route path="debitpage" element={<Debit />} />
          </Route>
        </Route>
        <Route path="/InstructorPage" element={<InstructorDashboardLayout />}>
          <Route path="Dashboard" element={<InstructorDashboard />} />
          <Route path="insprofile" element={<InsProfile />} />
          <Route path="ManageTests" element={<ManageTests />} />
          <Route path="yourPayment" element={<YourPayments />} />
        </Route>
      </>
    )
  );

  return (
    <>
    {console.log(<h1>React + Django Connected</h1>)}
      <RouterProvider router={router} />

      {/* <LayoutDashboardPage/> */}
      {/* <TestTakerLogin/> */}
      {/* <TestTakerDashboard/> */}
      {/* <InstructorDashboard/> */}
    </>
  );
}

export default App;
