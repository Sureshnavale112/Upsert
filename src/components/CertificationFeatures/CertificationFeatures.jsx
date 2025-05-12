import React from "react";
import { FaCertificate, FaLaptop, FaChartLine, FaGlobe, FaUsers } from "react-icons/fa";
import { BsBullseye } from "react-icons/bs";

const features = [
  {
    icon: <FaCertificate className="text-white text-3xl" />,
    title: "Comprehensive Certification Programs",
    description: "Our exams are designed by industry experts to ensure you gain the most relevant and up-to-date knowledge.",
  },
  {
    icon: <FaLaptop className="text-white text-3xl" />,
    title: "Flexible Learning",
    description: "Access our certification exams anytime, anywhere, making it convenient for you.",
  },
  {
    icon: <BsBullseye className="text-white text-3xl" />,
    title: "Career Advancement",
    description: "Certified professionals often enjoy higher salaries, better job opportunities, and greater respect in their fields.",
  },
  {
    icon: <FaGlobe className="text-white text-3xl" />,
    title: "Global Recognition",
    description: "Our certifications are recognized worldwide, allowing you to showcase your skills and credibility wherever your career takes you.",
  },
  {
    icon: <FaUsers className="text-white text-3xl" />,
    title: "Community and Support",
    description: "Join a network of like-minded professionals and gain access to resources and support to help you succeed.",
  },
  {
    icon: <FaUsers className="text-white text-3xl" />,
    title: "Community and Support",
    description: "Join a network of like-minded professionals and gain access to resources and support to help you succeed.",
  },
];

const CertificationFeatures = () => {
  return (
    <div className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Certify Your Skills, Elevate Your Career</h2>
        <div className="h-1 w-24 mx-auto bg-blue-500 mt-2 mb-6"></div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center bg-blue-500 rounded-full w-14 h-14 mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationFeatures;
