import React from "react";
import SidebarPage from "../Sidebarpage/SidebarPage";

export default function Profile() {
  return (

    <div className="flex flex-col md:flex-row min-h-screen">
    
    <aside className="w-full md:w-64  bg-blue-50  space-y-6">
     <SidebarPage/>
    </aside>
<div/>
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold  text-blue-900 mb-6 text-left">Edit Your Profile</h2>

      
      <form className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
        
        
        <div className="flex-1 space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>India</option>
            <option>USA</option>
          </select>

          <div className="text-center md:text-left">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </div>

    
        <div className="flex justify-center md:justify-end items-start">
          <img
            src="/assets/dashboard/profile.png"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      </form>
    </div>

    
    </div>
  );
}

