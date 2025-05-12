import { useNavigate } from "react-router-dom";

import NewSidebarExam from "../sidenew/NewSidebarExam";

const SlotBooking = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <NewSidebarExam/>
      <div className="ml-64 p-8">
        <h1 className="text-2xl font-bold mb-4">Select Your Preferred Exam Slot</h1>
        <div className="max-w-md space-y-4">
          <p className="text-lg font-semibold">Cloud Computing Professional Certificate</p>
          <p>Rs. 6,400.00</p>
          <input type="date" className="w-full border p-2 rounded" />
          <select className="w-full border p-2 rounded">
            <option>Select Time</option>
            <option>10:00 AM</option>
            <option>02:00 PM</option>
          </select>
          <button
            className="bg-blue-700 text-white py-2 px-4 rounded"
            onClick={() => navigate("/exam-overview")}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlotBooking;
