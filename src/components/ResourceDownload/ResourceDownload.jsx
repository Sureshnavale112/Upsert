import React, { useState } from 'react';
import NewSidebarExam from '../sidenew/NewSidebarExam';

const ResourceDownload = () => {
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
    <div className="w-full min-h-screen px-4 py-6 bg-gray-50">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

      <NewSidebarExam/>
     
        <div className="md:col-span-2">
          <iframe
            src={getPdfPath()}
            title="Material PDF"
            className="w-full h-[80vh] border rounded-md shadow"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResourceDownload;
