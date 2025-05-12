import React from "react";
import {
  FaCheckCircle,
  FaClipboardList,
  FaBookOpen,
  FaCertificate,
} from "react-icons/fa";

const steps = [
  {
    step: 1,
    title: "Register and Choose Your Exam",
    description:
      "Sign up for an account, browse our exam catalog, and select the certification that aligns with your goals.",
    icon: <FaCheckCircle />,
    iconColor: "text-white",
    bgColor: "bg-gray-800",
  },
  {
    step: 2,
    title: "Take the Exam",
    description:
      "Choose a time that works for you and take your exam online, from anywhere in the world.",
    icon: <FaBookOpen />,
    iconColor: "text-white",
    bgColor: "bg-blue-400",
  },
  {
    step: 3,
    title: "Prepare with Confidence",
    description:
      "Use our study materials and practice tests to get ready for your exam.",
    icon: <FaClipboardList />,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    step: 4,
    title: "Get Certified",
    description:
      "Pass the exam and receive your certification instantly, with options to share it on LinkedIn or add it to your resume.",
    icon: <FaCertificate />,
    iconColor: "text-white",
    bgColor: "bg-blue-400",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          How It <span className="text-blue-500">Works</span>
        </h2>
        <p className="mt-2 text-gray-500 max-w-xl mx-auto">
          Discover the unique advantages that make ProctorTech the leading
          choice for secure and reliable online assessments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
         
            <div
            
              className={`${step.bgColor} text-white px-6 py-2 rounded w-full text-center`}
            >
              Step <span className="font-bold">{step.step}</span>
            </div>
            <br></br>
            <br></br>
         

            <div className="bg-gray-50 p-6 text-center rounded w-full shadow-sm">
              <div
                className={`mb-4 flex items-center justify-center w-14 h-14 rounded-full mx-auto ${step.bgColor}`}
              >
                {React.cloneElement(step.icon, {
                  className: `text-3xl ${step.iconColor}`,
                })}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;



