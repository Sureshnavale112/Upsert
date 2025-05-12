import React, { useState } from 'react';
import { IoFilter } from "react-icons/io5";

const sampleCourses = [
  { title: "Cloud Security Basics", level: "Beginner", price: "₹6,400.00" },
  { title: "Advanced DevOps", level: "Advanced", price: "₹6,400.00" },
  { title: "AI for Everyone", level: "Intermediate", price: "₹6,400.00" },
  { title: "Cloud FinOps Pro", level: "Advanced", price: "₹6,400.00" }
];

const FilterSection = ({ title, options, selected, setSelected }) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-2">{title}</h3>
    {options.map((option) => (
      <label key={option} className="inlineflex items-center block mb-1">
        <input
          type="checkbox"
          className="form-checkbox mr-2"
          checked={selected === option}
          onChange={() => setSelected(selected === option ? null : option)}
        />
        {option}
      </label>
    ))}
  </div>  
);

const Sidebar = ({ courses = sampleCourses }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedFee, setSelectedFee] = useState(null);

    const filteredCourses = courses.filter(course => {
      const categoryMatch = selectedCategory ? course.title.includes(selectedCategory) : true;
      const levelMatch = selectedLevel ? course.level === selectedLevel : true;
      const feeMatch = selectedFee ? (selectedFee === "Free" ? course.price === "₹0.00" : course.price !== "₹0.00") : true;
      return categoryMatch && levelMatch && feeMatch;
    });

  return (
    <aside className="w-full md:w-1/4 p-4 bg-blue-50 rounded-lg shadow-md mb-6 md:mb-0">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <IoFilter /> Filter
      </h2>

    
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <input className="bg-white mb-2 p-1 w-full rounded" type="text" placeholder="Search category" />
        <ul className="space-y-1">
          {["Cloud Security", "Cloud FinOps", "DevOps", "AI", "IoT"].map((item) => (
            <li key={item}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox mr-2"
                  checked={selectedCategory === item}
                  onChange={() => setSelectedCategory(selectedCategory === item ? null : item)}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>

     
      <FilterSection
        title="Levels"
        options={["Beginner", 
            "Intermediate", 
            "Advanced"]}
        selected={selectedLevel}
        setSelected={setSelectedLevel}
      />
      <FilterSection
        title="Course Fee"
        options={["Paid", "Free"]}
        selected={selectedFee}
        setSelected={setSelectedFee}
      />
    </aside>
  );
};  

export default Sidebar;
