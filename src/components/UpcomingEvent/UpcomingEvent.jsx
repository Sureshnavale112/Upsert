import React from 'react';
import { Link } from 'react-router-dom'

const UpcomingEvent = () => {
  const imageSrc = '/assets/events/Upcoming.png'; 
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-12">
      <h2 className="text-center text-lg sm:text-xl font-semibold text-blue-900 border-b-2 border-blue-500 inline-block mb-8 sm:mb-10">
        UPCOMING EVENT
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center bg-white p-4 sm:p-6 rounded-lg  max-w-5xl mx-auto">
        
        
        <div className="md:col-span-6">
          <img
            src={imageSrc}
            alt="Business Meeting"
            className="rounded-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

       
        <div className="md:col-span-6 space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            Business Process Management Event
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor lacus sed posuere gravida.
          </p>

          <div className="flex items-center gap-2 text-blue-600 font-medium text-sm sm:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3M16 7V3M4 11h16M4 15h16M4 19h16"
              />
            </svg>
            <span>26 May 2024</span>
          </div>
          <Link to="/register">
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded transition w-full sm:w-auto"
            aria-label="Register for the upcoming event"
          >
            Register Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
