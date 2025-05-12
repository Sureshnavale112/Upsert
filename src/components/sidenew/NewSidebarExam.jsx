import React, { useState } from 'react';
import { Link } from "react-router-dom";


const NewSidebarExam = () => {

 const [selectedMaterial, setSelectedMaterial] = useState("official");

  const getPdfPath = () => {
    switch (selectedMaterial) {
      case "official":
        return "assets/InternshipAssignment.pdf";
      case "support":
        return "assets/InternshipAssignment.pdf";
      default:
        return "assets/InternshipAssignment.pdf";
    }
  };


  return (
    <aside className="bg-white p-4 rounded-xl ">
    <div className="space-y-4">
    <Link to="/download">
    <h3 className="font-semibold bg-blue-900 text-white text-sm p-4 rounded flex items-center gap-2">
      <img src="/assets/text-box.png" alt="Text Box Icon" className="w-4 h-4" />
        Scrum Master Professional Certificate (SMPC)
       </h3>
       </Link>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="radio"
          name="material"
          value="official"
          checked={selectedMaterial === "official"}
          onChange={() => setSelectedMaterial("official")}
        />
        Download The Official Material
      </label>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="radio"
          name="material"
          value="support"
          checked={selectedMaterial === "support"}
          onChange={() => setSelectedMaterial("support")}
        />
        Download Supportive Question
      </label>

      <div className="mt-6">
       
    <Link to="/exam">
       <img src="/assets/text-box.png" alt="Text Box Icon" className="w-4 h-4" />
        <h4 className="font-medium bg-blue-900 p-4 rounded text-sm flex items-center gap-2 text-white">
          Final Exam
        </h4>
        </Link>
        <p className="text-xs text-gray-600 flex items-center gap-2 mt-1">
          <img src="/assets/check-circle.png" alt="Check Icon" className="w-3 h-3" />
          Final Evaluation Exam
        </p>
      </div>

    </div>
  </aside>
  )
}

export default NewSidebarExam;