import { useNavigate } from "react-router-dom";


const TestTakerAdd2 = () => {
  const navigate=useNavigate()

  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center">
      <p className="text-2xl font-[600] text-[#474747] mb-6">
        TestTaker Has Been Added
      </p>
      
      <button  className="px-4 py-2 bg-[#CF4D41] text-white rounded hover:bg-[#b84338] "
      onClick={()=>navigate('/admin')}>
        Back To Dashboard
      </button>
    </div>
    
  );
};

export default TestTakerAdd2;
