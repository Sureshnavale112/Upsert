import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    username: "@jamietechguru00",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 2,
    name: "Sam Dawson",
    username: "@dawsontechtips",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    id: 3,
    name: "Riley Smith",
    username: "@rileysmith1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 4,
    name: "Taylor Kim",
    username: "@taylorkimm",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg"
  },
  {
    id: 5,
    name: "Casey Harper",
    username: "@casey09",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg"
  },

{
  id: 6,
    name: "Alex Rivera",
    username: "@jamietechguru00",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 7,
    name: "Sam Dawson",
    username: "@dawsontechtips",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    id: 8,
    name: "Riley Smith",
    username: "@rileysmith1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 9,
    name: "Taylor Kim",
    username: "@taylorkimm",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg"
  },
  {
    id: 10,
    name: "Casey Harper",
    username: "@casey09",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg"
  },
  {
    id: 11,
    name: "Taylor Kim",
    username: "@taylorkimm",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg"
  },
  {
    id: 12,
    name: "Casey Harper",
    username: "@casey09",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend erat. Sed commodo mattis accumsan.",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg"
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What our users say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl p-6 transition ${
              item.id === 2
                ? "bg-purple-50 border-2 border-purple-500 shadow-lg"
                : "bg-white shadow-md hover:shadow-lg"
            }`}
          >
            <p className="text-gray-700 mb-4">{item.text}</p>
            <div className="flex items-center gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
