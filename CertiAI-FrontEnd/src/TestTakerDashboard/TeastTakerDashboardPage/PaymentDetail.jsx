import React from 'react'

const PaymentDetail = () => {
  return (
  <>
  <div className='bg-gradient-to-r from-pink-500 via-blue-500 to-purple-700 w-fit  text-white py-4 rounded-md px-6 '>
   Payment Details
  </div>

<div className="min-h-screen bg-gray-100 my-4 p-8">
      <div className="flex gap-8">
        {/* Left Section */}
        <div className="w-[70%] rounded-md bg-[#ffd6d6] p-5">
          <h2 className="mb-4 text-lg font-semibold text-black">
            Latest Updates
          </h2>

          <div className="overflow-hidden rounded-md bg-[#ffecec] ">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#ffd1d1] text-left font-semibold">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Test Name</th>
                  <th className="px-4 py-3">Bill Number</th>
                  <th className="px-4 py-3">Amount Received</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-[#f2bcbc]">
                  <td className="px-4 py-3">TestTaker</td>
                  <td className="px-4 py-3">OCJA</td>
                  <td className="px-4 py-3">00012 223</td>
                  <td className="px-4 py-3">20$</td>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    Transferred
                  </td>
                  <td className="px-4 py-3">21-Dec, 2021</td>
                </tr>

                <tr className="border-b border-[#f2bcbc]">
                  <td className="px-4 py-3">TestTaker</td>
                  <td className="px-4 py-3">OCP</td>
                  <td className="px-4 py-3">00012 223</td>
                  <td className="px-4 py-3">15$</td>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    Transferred
                  </td>
                  <td className="px-4 py-3">09-Apr, 2022</td>
                </tr>

                <tr className="border-b border-[#f2bcbc]">
                  <td className="px-4 py-3">TestTaker</td>
                  <td className="px-4 py-3">OCA</td>
                  <td className="px-4 py-3">00012 223</td>
                  <td className="px-4 py-3">35$</td>
                  <td className="px-4 py-3 font-semibold text-green-600">
                    Transferred
                  </td>
                  <td className="px-4 py-3">08-May, 2023</td>
                </tr>

                <tr>
                  <td className="px-4 py-3">TestTaker</td>
                  <td className="px-4 py-3">OCPJP</td>
                  <td className="px-4 py-3">00012 223</td>
                  <td className="px-4 py-3">10$</td>
                  <td className="px-4 py-3 font-semibold text-orange-500">
                    In Process
                  </td>
                  <td className="px-4 py-3">08-Aug, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[25%] rounded-md bg-[#ffd6d6] p-4">
          <h4 className="mb-3 font-semibold">Notifications</h4>

          <div className="flex items-center gap-3 rounded-md bg-white p-3 shadow-sm">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="h-10 w-10 rounded-full"
            />
            <p className="text-sm">
              Your Payment of <span className="font-semibold">10$</span> for{" "}
              <span className="font-semibold">OCPJP</span> is in process.
            </p>
          </div>
        </div>
      </div>
    </div>

  </>
  )
}

export default PaymentDetail;
