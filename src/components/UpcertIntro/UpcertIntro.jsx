import React from 'react';
import Upcert from '../../../public/assets/why/why.png';
import Upcertb from '../../../public/assets/why/whyb.png';

const UpcertIntro = () => {
  return (
    <div className="container mx-auto   md:px-10 py-12">
      <div className="grid grid-cols-1 p-10 md:grid-cols-2 items-center gap-10">
        
       
        <div>
          <h3 className="text-6xl md:text-4xl font-bold text-blue-900 leading-snug">
            Unlock Your Potential <br />
            with <span className="text-blue-400">UPCERT</span>
          </h3>
          <p className="mt-4 text-3xl text-gray-600  leading-relaxed">
            At UPCERT, We Believe That Every <br></br> 
            Professional Has The Potential To <br></br>   Excel And Achieve Greatness. Our  <br></br>Mission 
            Is To Empower Individua<br></br>ls By Poviding Top-Tier Certifica <br></br> tion Exams
            That Validate Vheir Skills And Knowledge.
          </p>
        </div>    

  
        <div className="relative flex justify-end">
          <div className="relative h-150 md:w-70 md:h-100">
            <img
              src={Upcert}
              alt="Main visual"         
              className="rounded-full object-cover w-full h-full shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-45 h-74 bg-white rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={Upcertb}
                alt="Overlay person"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UpcertIntro;
