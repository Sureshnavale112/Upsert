import React from "react";

const ebooks = [
  {
    title: "Cloud Security - eBook",
    author: "John Doe",
    image: "../../../public/assets/resorces/Blog/RA.png",
    button: "READ",
  },
  {
    title: "App Development - eBook",
    author: "John Doe",
    image: "../../../public/assets/resorces/Blog/RB.png",
    button: "READ",
  },
  {
    title: "Cloud Security - eBook",
    author: "John Doe",
    image: "../../../public/assets/resorces/Blog/RC.png",
    button: "READ",
  },

  {
    title: "Cloud Security - eBook",
    author: "John Doe",
    image: "../../../public/assets/resorces/Blog/RA.png",
    button: "READ",
  },
  {
    title: "App Development - eBook",
    author: "John Doe",
    image: "../../../public/assets/resorces/Blog/RB.png",
    button: "READ",
  },
  {
    title: "Cloud Security - eBook",
    author: "John Doe",
    image: "../../../public/assets/resorces/Blog/RC.png",
    button: "READ",
  }
];

export default function EbookCards() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        EBooks : Empower Your Learning with Expert
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ebooks.map((book, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={book.image} alt={book.title} className="w-full h-100 " />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{book.author}</span>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  {book.button} &nbsp;&gt;&nbsp;&gt;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
