import React from 'react';

const reports = [
  {
    title: '5G IoT Market Dynamics',
    description:
      'A few years ago, the basic concept of the cloud was derided by reducing it to the idea of “someone else’s computer,” a saying that downrates the coffee mugs of quite a few IT professionals.',
    date: 'May 20, 2024',
    image: '/assets/resorces/Blog/GG.png',
    buttonText: 'View'
  },
  {
    title: 'How Indirect Assessment Shapes Business Education',
    description:
      'A few years ago, the basic concept of the cloud was derided by reducing it to the idea of “someone else’s computer,” a saying that downrates the coffee mugs of quite a few IT professionals.',
    date: 'May 02, 2024',
    image: '/assets/resorces/Blog/RT.png',
    buttonText: 'View'
  },
  {
    title: 'Real-world sustainability solutions with Azure IoT',
    description:
      'In today’s fast-moving world, organizations are deploying innovative IoT and Digital Operations solutions that drive sustainable business practices, achieve energy conservation goals, and enhance operational efficiencies.',
    date: 'May 02, 2024',
    image: '/assets/resorces/Blog/RA.png',
    buttonText: 'View'
  },
  {
    title: "What is Cloud Computing? Everything You Need to Know",
    description: 'A quick overview of cloud basics for beginners and professionals alike.',
    date: "May 20, 2024",
    image: "/assets/resorces/Blog/Rec.png",
    buttonText: "View"
  },
  {
    title: "What Features are Important in Robotics Process Animation",
    description: 'Explore the key capabilities that power robotic automation tools.',
    date: "May 20, 2024",
    image: "/assets/resorces/Blog/Rob.png",
    buttonText: "View"
  },
  {
    title: "What is Cloud Computing? Everything You Need to Know",
    description: 'Get an in-depth understanding of cloud architecture and services.',
    date: "May 20, 2024",
    image: "/assets/resorces/Blog/Rectan.png",
    buttonText: "View"
  }
];

const Reports = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-10">
        Reports: Uncover Resources to Ignite Your Mind
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden border"
          >
            <img
              src={report.image}
              alt={report.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {report.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{report.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{report.date}</span>
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-1">
                  {report.buttonText.toUpperCase()} <span>››</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
