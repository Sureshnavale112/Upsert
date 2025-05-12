import React from 'react';
import { Link } from 'react-router-dom';

const WhyUpcertSection = () => {

   


    const cards = [
        {
            src: "/assets/WhyUpcert/wa.png",
            alt: "Student 1",
            badge: "⏱️",
            badgePos: "top-2 right-2",
            badgeColor: "bg-blue-600"
        },
        {
            src: "/assets/WhyUpcert/wc.png",
            alt: "Student 2",
            badge: "🎓",
            badgePos: "bottom-2 right-2",
            badgeColor: "bg-yellow-500",
            spanTwo: true
        },
        {
            src: "/assets/WhyUpcert/wb.png",
            alt: "Student 3",
            badge: "📊",
            badgePos: "top-2 left-2",
            badgeColor: "bg-pink-500"
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10">

                <div className="w-full lg:w-1/2 p-10 text-center lg:text-left">
                    <h2 className="text-6xl h-30  font-bold text-[#1f2f43] mb-2">
                        WHY<br></br> <span className="text-blue-400 h-0  mt-10 text-6xl">UPCERT</span>
                    </h2>


                    <h2 className="text-3xl semibold text-blue-900 p- 0 mt-10">Lorem ipsum</h2>
                    <h4 className=" text-lg leading-relaxed mb-6 ">
                        Lorem ipsum dolor sit amet, consectetur  <br />
                        consectetur adipiscing elit mattis ipsum  <br />
                        Nullam tempor lacus  sed posuere gravida  <br />
                        Lorem ipsum  dolor   sit   amet  consectetur  <br />
                        consectetureget    tempus   risus, at mattis ipsum <br />
                        Nullum tempor lacus sed posuere gravida  <br />
                    
                      </h4>
                      <Link to="/learnmore">
                       <button className="bg-[#1f2f43] text-white px-6 py-2 rounded-lg rounded-bl-none border hover:bg-[#0e1c2a] transition">
                           Learn More
                       </button>
                    </Link>
                </div>

                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`relative w-70 rounded-xl overflow-hidden shadow-lg ${card.spanTwo ? "sm:row-span-2" : ""
                                }`}
                        >
                            <img
                                src={card.src}
                                alt={card.alt}
                                className={`rounded-xl w-full ${card.spanTwo ? " object-cover mt-20" : ""}`}
                            />
                            <div className={`absolute ${card.badgePos} ${card.badgeColor} text-white p-2 rounded-full text-xs`}>
                                {card.badge}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyUpcertSection;
