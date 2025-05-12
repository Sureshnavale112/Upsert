import React from "react";

const cardData = [
  {
    title: "Blogs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor lacus...",
    link: "#",
    bgClass: "bg-orange-400",
  },
  {
    title: "eBooks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor lacus...",
    link: "#",
    bgClass: "bg-gradient-to-br from-purple-500 to-blue-500",
  },
  {
    title: "Reports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor lacus...",
    link: "#",
    bgClass: "bg-teal-500",
  },
];

const CertificationResources = () => {
  return (
   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.bgClass} text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`}
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm mb-4">{card.description}</p>
            <a href={card.link} className="underline font-semibold">
              View All
            </a>
          </div>
        ))}
      </div>
 
        

  
  );
};

export default CertificationResources;
