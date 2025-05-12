import React from 'react';
import { Link } from "react-router-dom";

const Slot = () => {
  return (


    <div className="container col-span-1 md:col-span-2 p-6 rounded-xl shadow bg-white">

      <div>Certificate </div>
      <h3 className="text-lg text-center font-bold mb-4  text-blue-900">
        SELECT YOUR PREFERRED EXAM SLOT
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-10 gap-6">
        <div>
          <h4 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-2">
            Cloud Computing <br /> Professional Certificate
          </h4>
          <p className="text-xl font-bold mt-1 mb-2">Rs. 6,400.00</p>
          <p className="text-gray-600">
            Maecenas lobortis tempus tellus non viverra.<br></br> Nullam interdum.
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="exam-date" className="block text-sm font-medium text-gray-700 mb-1">
              Select Date
            </label>
            <input
              type="date"
              id="exam-date"
              className="w-full border rounded px-2 py-2"
            />
          </div>
          <div>
            <label htmlFor="exam-time" className="block text-sm font-medium text-gray-700 mb-1">
              Select Time
            </label>
            <select
              id="exam-time"
              className="w-full border rounded px-2 py-2"
              defaultValue=""
            >
              <option value="" disabled>Select Time</option>
              <option>10:00 AM</option>
              <option>2:00 PM</option>
              <option>6:00 PM</option>
            </select>
          </div>
        <Link to="/download">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Proceed
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slot;
