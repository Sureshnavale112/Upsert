import React from "react";
import { Link } from 'react-router-dom'

const events = [
  {
    id: 1,
    title: "International Developers Meetup 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. et mattis ipsum. Nullam tempor lacus sed posuere gravida.",
    date: "02",
    month: "JUNE",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    time: "11.00 Am",
    location: "Virtual",
  },
  {
    id: 2,
    title: "International Developers Meetup 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. et mattis ipsum. Nullam tempor lacus sed posuere gravida.",
    date: "05",
    month: "JUNE",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    time: "11.00 Am",
    location: "Virtual",
  },
  {
    id: 3,
    title: "International Developers Meetup 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. et mattis ipsum. Nullam tempor lacus sed posuere gravida.",
    date: "12",
    month: "JULY",
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
    time: "11.00 Am",
    location: "Virtual",
  },
];

const FeaturedEvents = () => {
  return (
    <section className="py-12 px-4 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Our Featured <span className="text-blue-600">Events</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-center px-2 py-1 rounded-md">
                <p className="text-lg font-bold leading-tight">{event.date}</p>
                <p className="text-xs uppercase">{event.month}</p>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{event.description}</p>
              <div className="flex items-center text-sm text-gray-500 gap-4 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zM8 8a2 2 0 114 0 2 2 0 01-4 0z" />
                  </svg>
                  {event.location}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </span>
              </div>
              <Link to="/register">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                REGISTER NOW
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;
