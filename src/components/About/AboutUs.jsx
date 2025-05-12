import React from 'react';

const AboutUs = () => (
  <div className="container px-4 sm:px-6 lg:px-8 py-6 rounded-lg mx-auto mt-10 flex flex-col md:flex-row gap-8 items-start">
   
    <div className="flex-1 p-10">
    <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-blue-900 mb-4">
    About Us
  </h2>
  <h4 className="text-base sm:text-lg lg:text-3xl font-semibold text-gray-800 mb-4 leading-relaxed">
    Maecenas Lobortis Tempus Tellus Non Viverra. Nullam Interdum Porttitor Justo, Sit Amet Cursus Augue Iaculis
  </h4>
  <p className="text-sm sm:text-base lg:text-2xl text-gray-500 mb-6 leading-relaxed">
    Sed nulla faucibus metus a dolor suscipit, et condimentum purus elementum. Nulla facilisi.
  </p>
  <div className="flex justify-center sm:justify-start">
    <button className="bg-blue-500 text-white px-6 py-2 rounded-full w-40 hover:bg-blue-600 transition">
      Join Us →
    </button>
  </div>
    </div>

   
    <div className="flex flex-col p-10 sm:flex-row md:flex-col items-center gap-4 w-full md:w-auto">
      {[
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
      ].map((src, i) => (
        <div
          key={i}
          className={`relative w-full sm:w-1/2 md:w-auto ${i === 0 ? 'ml-0 sm:ml-8 md:ml-22' : 'mr-0 sm:mr-8 md:mr-22'}`}
        >
          {i === 0 && (
            <div className="absolute -top-4 -left-4 bg-blue-700 rounded p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.304.534 6.121 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          )}
          <img
            src={src}
            alt="About section"
            loading="lazy"
            className="rounded-lg w-full  h-48 mr-50 object-cover shadow"
          />
        </div>
      ))}
    </div>
  </div>
);

export default AboutUs;
