import React from "react";
import {
  FaChartLine,
  FaHandshake,
  FaStar,
  FaGift,
  FaTools,
  FaGlobe,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Career Advancement",
    description: "Lorem Ipsum is not simply random text",
  },
  {
    icon: <FaStar className="text-white text-2xl" />,
    title: "Industry Recognition",
    description: "It has roots in a piece of classical",
  },
  {
    icon: <FaTools className="text-white text-2xl" />,
    title: "Skill Enhancement",
    description: "Lorem Ipsum is not simply random text",
  },
  {
    icon: <FaHandshake className="text-white text-2xl" />,
    title: "Networking Opportunities",
    description: "Lorem Ipsum is not simply random text",
  },
  {
    icon: <FaGift className="text-white text-2xl" />,
    title: "Employer Benefits",
    description: "It has roots in a piece of classical",
  },
  {
    icon: <FaGlobe className="text-white text-2xl" />,
    title: "Global Recognition",
    description: "Lorem Ipsum is not simply random text",
  },
];

const WhyChooseUpcert = () => {
  return (
    <div className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
      
      <div className="text-left mb-10">
        <p className="text-sm text-blue-500 font-semibold uppercase">
          Your Pathway to Professional Excellence
        </p>
        <h2 className="text-3xl font-bold mt-2">Why Choose UPCERT?</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Whether you're looking to advance in your career, gain industry <br />
          recognition, or simply enhance your expertise, UPCERT is here to <br />
          support your journey.
        </p>
      </div>

      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 transition duration-300 hover:bg-gray-50 p-4 rounded-lg"
          >
            <div className="bg-blue-500 p-4 rounded-full shadow-lg hover:scale-105 transition-transform">
              {item.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUpcert;
