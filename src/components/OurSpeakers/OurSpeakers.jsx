import React from 'react';
 import { speakers } from './Ourspeakersdata'

const SpeakerCard = ({ speaker }) => (



  
  <div className="bg-danger rounded-xl shadow-md overflow-hidden text-center p-6">
    <img
      src={speaker.image}
      alt={speaker.name}
      className="w-52 h-52 mx-auto  object-cover mb-4"
    />
    <h4 className="text-lg font-semibold">{speaker.name}</h4>
    <p className="text-sm text-gray-500">{speaker.title}</p>
    <div className="flex justify-center gap-4 mt-4 space-x-2 text-gray-600 text-lg">
  
      <a href={speak.social.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">X</a>
      <a href={speak.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">f</a>
      <a href={speak.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">📸</a>
      <a href={speak.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">in</a>
   
    </div>
  </div>
);


const speak = {
  social: {
    twitter: "https://twitter.com/example",
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    linkedin: "https://linkedin.com/in/example",
  },
};

const OurSpeakers = () => (
  <div className="py-10 px-4 text-center">
    <h2 className="text-4xl font-bold mb-8">
      Our <span className="text-blue-500">Speakers</span>
    </h2>
    

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {speakers.map((speaker, index) => (
        <SpeakerCard key={index} speaker={speaker} />
      ))}
    </div>
  </div>
);



export default OurSpeakers;
