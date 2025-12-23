import {useState} from 'react'

const InstructorAdd1 = () => {
    
     const[name,setName]=useState('')
     const[email,setEmail]=useState('')
     const[password,setpassword]=useState('')
    
     const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("submitted")
      setName('')
      setEmail('')
      setpassword('')
    
     };
    
  return (
    <>
        <div className=" min-h-screen flex items-center justify-center">
          <form  onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-90">
            <h2 className="text-xl font-[400] mb-4 text-center">Add Instructor</h2>
    
            <label htmlFor="name" className="block mb-2  text-sm text-[#414141] font-[500]">Enter Name</label>
            <input
              type="text"
              placeholder='dixit yadav'
              id="name"
              name="name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              className="w-full text-sm font-[400] text-[#C5C5C5] p-2 hover:outline-none outline-none border border-gray-300 rounded-sm"
            />
    
            <label htmlFor="email" className="block mb-2  text-sm text-[#414141] font-[500]">Enter Email</label>
            <input
              type="email"
              id="email"
              placeholder='Adbcerthfykbfd@gmail.com'
              name="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="w-full text-sm font-[400] text-[#C5C5C5] p-2 hover:outline-none outline-none border border-gray-300 rounded-sm"
            />
    
            <label htmlFor="password" className="block mb-2  text-sm text-[#414141] font-[500]">Password</label>
            <input
              type="password"
              id="password"
              placeholder='asjce43m93c'
              name="password"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
              className="w-full text-sm font-[400] text-[#C5C5C5] p-2 hover:outline-none outline-none border border-gray-300 rounded-sm"
            />
    
            <button
              type="submit"
              className="w-full bg-[#CF4D41] text-white py-2 my-5 rounded hover:bg-[#CF4D41] transition"
            >
              Add
            </button>
          </form>
        </div>
      );

    
  
    </>
  )
}

export default InstructorAdd1
