
import React from 'react'

import Sidebar from '../Sidebar/Sidebar';

const CoursesPage = () => {

    const courses = [
        {
          title: "Cloud Computing Certification",
          level: "Beginner",
          type: "Foundation",
          price: "₹6,400.00",
          image: "/assets/certification/comon.png",
          image1: "/assets/certification/cloud.png",
        },
        {
          title: "Cloud Computing Certification",
          level: "Beginner",
          type: "Foundation",
          price: "₹6,400.00",
          image: "/assets/certification/comon.png",
          image1: "/assets/certification/cloud.png",
        },
        {
          title: "Cloud Computing Certification",
          level: "Beginner",
          type: "Foundation",
          price: "₹6,400.00",
          image: "/assets/certification/comon.png",
          image1: "/assets/certification/cloud.png",
        },
        {
          title: "Cloud Computing Certification",
          level: "Beginner",
          type: "Foundation",
          price: "₹6,400.00",
          image: "/assets/certification/comon.png",
          image1: "/assets/certification/cloud.png",
        },

      ];
      
  return (
    
<div className="flex flex-col md:flex-row p-4 bg-white-100 min-h-screen">
    
     <Sidebar/>
      
      <main className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
  {courses.map((course, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md p-4 relative overflow-visible m-5">
      
      
      <span className="absolute top-4 left-4 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded">
        {course.type}
      </span>


      <img
        src={course.image}
        alt="Course"
        className="w-full h-48 object-cover rounded-md"
      />

     
      <img 
        src={course.image1}
        alt="Preview"
        className="w-30 h-30  object-cover rounded-md absolute -mt-10 left-10 shadow-md border-2 border-white"
      />

 
      <h3 className="text-lg font-semibold mt-26">{course.title}</h3>
      <ul className="text-sm text-gray-600 my-2 list-disc pl-5">
        <li>Lorem Ipsum Dolor Sit Amet</li>
        <li>Consectetur Elit</li>
      </ul>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
          Buy Certification &gt;&gt;
        </button>
        <span className="font-semibold">{course.price}</span>
      </div>
    </div>
  ))}   
</main>
      
    </div>
  )
}

export default CoursesPage;
