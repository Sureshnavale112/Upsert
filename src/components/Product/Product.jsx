import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

const Product = () => {

  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");

  
    useEffect(() => {
    console.log("Certification ID from URL:", id);
   
  }, [id]);

  const tabs = [
    { id: "exam", label: "Exam Details" },
    { id: "description", label: "Description" },
    { id: "objectives", label: "Learning Objectives" },
  ];  


  


  const TabContent = () => {
    const commonHeading = (
      <h3 className="text-xl font-semibold text-blue-800 mb-2">
        Cloud Computing Professional Certificate
      </h3>
    );

    if (activeTab === "exam") {
      return (
        <>
          {commonHeading}
          <p className="mb-4">
            Scrum Master Professional Certificate is Available To Take Or Re-Take Online.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Multiple Choice</li>
            <li>40 Questions</li>
            <li>Passing Score: 80%</li>
            <li>60 Minutes Duration</li>
            <li>Closed Book</li>
            <li>Unproctored Exam Delivered Through Certify</li>
          </ul>
          <p className="mt-4">
            You have two attempts within 180 days after your welcome email.
          </p>
          <p className="mt-4 font-bold">Important</p>
          <ul className="list-disc list-inside">
            <li>Take the exam immediately or within 6 months.</li>
            <li>No refund after the exam is taken.</li>
          </ul>
        </>
      );
    }

    const commonParagraphs = (
      <>
        <p>
          Scrum Master Professional Certificate is Available To Take Or Re-Take Online.
        </p>
        <p className="mt-2">
        Maecenas lobortis tempus tellus non viverra. Nullam interdum<br></br> porttitor justo, sit amet cursus augue iaculis sed.<br></br> Nulla faucibus metus a dolor suscipit, et condimentum purus elementum. Nulla porttitor justo,<br></br> sit amet cursus augue iaculis sed. Nulla faucibus metus.
        </p>
      </>
    );

    return (
      <>
        {commonHeading}
        {commonParagraphs}
        {activeTab === "description" && (
          <p className="mt-2">Maecenas Lobortis Tempus Tellus Non Viverra.<br></br> Nullam Interdum Porttitor Justo, Sit Amet Cursus <br></br> Augue Iaculis Sed.</p>
        )}
      </>
    );
  };

  return (
    <div className="p-4 md:p-10 font-sans">
      <p className="text-sm text-gray-600 mb-4">
        <span className="text-gray-500">Home / Certifications /</span>{" "}
        <span className="text-blue-600 font-medium">Cloud Computing</span>
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 p-10 space-y-4">
          <img src="/assets/certification/CloudCoumputing.png" alt="SMPC" className="w-full border-4 border-blue-500" />
          <div className="flex gap-4">
            <img src="/assets/certification/CloudCoumputing.png" className="w-1/3" alt="Thumb" />
            <img src="/assets/certification/scrum.png" className="w-1/3" alt="Badge" />
          </div>
        </div>

        <div className="md:w-1/2 p-10 space-y-4">
          <h2 className="text-2xl font-semibold text-blue-800">
            Cloud Computing <br /> Professional Certificate
          </h2>
          <p className="text-lg font-bold text-gray-900">Rs. 6,400.00</p>
          <p className="text-gray-500">Maecenas Lobortis Tempus Tellus Non Viverra. Nullam Interdum.</p>
          <p className="text-gray-700">
          Maecenas lobortis tempus tellus non viverra. Nullam interdum <br></br> porttitor justo, sit amet cursus augue iaculis sed.<br></br> Nulla faucibus metus a dolor suscipit, et condimentum purus <br/> elementum. Nulla porttitor justo, sit amet cursus augue <br></br> iaculis sed. Nulla faucibus metus.
          </p>
          <Link to="/slot"> 
          <button className="bg-blue-800 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-900">
            SCHEDULE AN EXAM
          </button>
          </Link>
        </div>
      </div>

      <div className="mt-12">
      <div className="flex justify-around border-b text-gray-600">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`mx-4 pb-2 text-lg font-medium ${activeTab === tab.id ? "border-b-2 border-blue-600 text-blue-600" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 text-gray-700">
          <TabContent />
        </div>
      </div>



    </div>
  );
};

export default Product;
