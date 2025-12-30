import { FcGraduationCap,  FcCurrencyExchange, FcContacts } from "react-icons/fc";
import { PiBookmarkSimple } from "react-icons/pi";

const stats = [
  { icon: <FcGraduationCap />, label: "Purchases", value: 243 },
  { icon: <PiBookmarkSimple />, label: "Certification Tests", value: 24 },
  { icon: <FcCurrencyExchange />, label: "Amount Earned", value: <span><sub>INR</sub>556,000</span> },
  { icon: <FcContacts />, label: "Instructor Rating", value: 243 },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 p-6 rounded-lg">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-[#FFCDCD] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl text-[#EE95C5]">{item.icon}</span>
            <span className="font-semibold text-[#6C6C6C]">{item.label}</span>
          </div>
          <div className="text-right mt-2">
            <span className="text-xl font-bold text-gray-800">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}