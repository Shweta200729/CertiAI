import React from 'react'

const ManageTests = () => {
  return (
  <>
  <div className='bg-gradient-to-r from-pink-500 via-blue-500 to-purple-700 w-fit  text-white py-4 rounded-md px-6 '>
   Manage Tests
  </div>

<div className="min-h-screen bg-gray-100 my-4 p-8">
      <div className="flex gap-8">
        {/* Left Section */}
        <div className="w-[100%] rounded-md bg-[#ffd6d6] p-5">
          <h2 className="mb-4 text-lg font-[700] text-black">
            Latest Updates
          </h2>

          <div className="overflow-hidden rounded-md bg-[#ffecec] ">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#ffd1d1] text-left font-semibold">
                  <th className="px-4 py-3">Test Name</th>
                  <th className="px-4 py-3">Test ID</th>
                  <th className="px-4 py-3">Upload Date</th>
                  <th className="px-4 py-3">File Format</th>
                  <th className="px-4 py-3">Duration</th>
                 
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-[#f2bcbc]">
                  <td className="px-4 py-3">OCJA</td>
                  <td className="px-4 py-3">00012</td>
                  <td className="px-4 py-3">21-Dec, 2021 </td>
                  <td className="px-4 py-3">Excel</td>
                  <td className="px-4 py-3">30min</td>
                </tr>

                <tr className="border-b border-[#f2bcbc]">
                 <td className="px-4 py-3">OCJA</td>
                  <td className="px-4 py-3">00012</td>
                  <td className="px-4 py-3">21-Dec, 2021 </td>
                  <td className="px-4 py-3">Excel</td>
                  <td className="px-4 py-3">30min</td>
                </tr>

                <tr className="border-b border-[#f2bcbc]">
                 <td className="px-4 py-3">OCJA</td>
                  <td className="px-4 py-3">00012</td>
                  <td className="px-4 py-3">21-Dec, 2021 </td>
                  <td className="px-4 py-3">Excel</td>
                  <td className="px-4 py-3">30min</td>
                </tr>

                <tr>
                  <td className="px-4 py-3">OCJA</td>
                  <td className="px-4 py-3">00012</td>
                  <td className="px-4 py-3">21-Dec, 2021 </td>
                  <td className="px-4 py-3">Excel</td>
                  <td className="px-4 py-3">30min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      
        
      </div>
    </div>

  </>
  )
}

export default ManageTests;


