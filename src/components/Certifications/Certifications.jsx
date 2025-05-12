import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import SidebarPage from "../Sidebarpage/SidebarPage";

export default function Certifications() {
  const [tab, setTab] = useState("today");
 
  const tabs = ["today", "upcoming", "result"];

  const location = useLocation();
  const currentPath = location.pathname;



  const certifications = [
    {
      id: 1,
      title: "Cloud Computing Professional Certificate",
      date: "2025-May-23 11:00 Am",
      description: "Maecenas lobortis tellus non viverra. Nullam interdum porttitor justo.",
      image: "/assets/dashboard/com.png",
      type: "today",
    },
    {
      id: 2,
      title: "Cloud Computing Professional Certificate",
      date: "2025-May-30 11:00 Am",
      description: "Maecenas lobortis tellus non viverra. Nullam interdum porttitor justo.",
      image: "/assets/dashboard/com.png",
      type: "upcoming",
    },
    {
      id: 3,
      title: "Cloud Computing Professional Certificate",
      date: "2025-May-28 11:00 Am",
      description: "Maecenas lobortis tellus non viverra. Nullam interdum porttitor justo.",
      image: "/assets/dashboard/com.png",
      type: "result",
    },
    {
      id: 4,
      title: "Cloud Computing Professional Certificate",
      date: "2025-May-15 11:00 Am",
      description: "Maecenas lobortis tellus non viverra. Nullam interdum porttitor justo.",
      image: "/assets/dashboard/com.png",
      type: "upcoming",
    },
    {
      id: 5,
      title: "Cloud Computing Professional Certificate",
      date: "2025-May-15 11:00 Am",
      description: "Maecenas lobortis tellus non viverra. Nullam interdum porttitor justo.",
      image: "/assets/dashboard/com.png",
      type: "upcoming",
    },
    {
      id: 6,
      title: "Cloud Computing Professional Certificate",
      date: "2025-May-28 11:00 Am",
      description: "Maecenas lobortis tellus non viverra. Nullam interdum porttitor justo.",
      image: "/assets/dashboard/com.png",
      type: "result",
    },

  ]



  const filtered = certifications.filter((c) => c.type === tab);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SidebarPage />

      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">My Certifications</h2>

        <div className="flex justify-around space-x-4 mb-6 border-b">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 capitalize border-b-2 ${tab === t
                  ? "border-blue-700 text-blue-700 font-semibold"
                  : "border-transparent text-black-900"
                }`}
            >
              {t}
            </button>
          ))}
        </div>


        <div className="space-y-4">
          {filtered.length === 0 ? (
            <p className="text-gray-500">No certifications available.</p>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-50 p-4 rounded shadow"
              >
                <div className="flex items-start md:items-center space-x-4">
                  <img src={item.image} alt="cert" className="h-20 w-20 rounded" />

                  <div>
                    {tab !== "upcoming" && (
                      <p className="text-black-600 text-sm">{item.date}</p>
                    )}
                    <p className="font-semibold text-blue-600">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>

                    <div>
                      {tab === "today" && (
                        <Link to="/examplatform">
                          <button className="w-full max-w-[120px] py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                            Start Exam
                          </button>
                        </Link>
                      )}
                      {tab === "result" && (
                        <Link to="/result">
                          <button className="w-full max-w-[120px] py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                            View Result
                          </button>
                        </Link>
                      )}
                    </div>

                    {tab === "upcoming" && (
                      <p className="bg-yellow-400 w-45 rounded text-sm mt-4">{item.date}</p>
                    )}
                  </div>




                </div>
              </div>
            ))
          )}
        </div>


      </div>
    </div>
  );
}
