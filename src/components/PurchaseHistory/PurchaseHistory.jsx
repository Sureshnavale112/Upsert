import React from "react";
import SidebarPage from "../Sidebarpage/SidebarPage";

const purchases = [
  {
    id: 1,
    image: "/assets/dashboard/com.png",
    title: "Cloud Computing Professional Certificate",
    description:
      "Maecenas lobortis tellus non viverra. Nullam interdum porttitor justo.",
    date: "23 May 2024, 11:00 AM",
    price: "6,400.00",
    status: "success",
  },
  {
    id: 2,
    image: "/assets/dashboard/com.png",
    title: "Cloud Computing Professional Certificate",
    description:
      "Maecenas lobortis tellus non viverra. Nullam interdum porttitor justo.",
    date: "23 May 2024, 11:00 AM",
    price: "6,400.00",
    status: "failed",
  },
  {
    id: 3,
    image: "/assets/dashboard/com.png",
    title: "Cloud Computing Professional Certificate",
    description:
      "Maecenas lobortis tellus non viverra. Nullam interdum porttitor justo.",
    date: "23 May 2024, 11:00 AM",
    price: "6,400.00",
    status: "success",
  },
];

export default function PurchaseHistory() {
  return (

     <div className="flex flex-col md:flex-row min-h-screen">
       
            <SidebarPage/>
    
           
          <main className="flex-1 p-4 md:p-10 bg-white space-y-4">
            <h2 className="text-xl md:text-2xl font-bold mb-4">My Purchase</h2>
            {purchases.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-50 p-4 rounded shadow space-y-4 md:space-y-0"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
                  <img
                    src={item.image}
                    alt="cert"
                    className="h-20 w-auto rounded object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.date}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-bold text-lg">₹{item.price}</p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded ${
                      item.status === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status === "success"
                      ? "Payment Successful"
                      : "Payment Failed"}
                  </span>
                </div>
              </div>
            ))}
          </main>
          
        </div>
  );
}
