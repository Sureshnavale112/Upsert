import React from 'react';
import empower from '../../../public/assets/Empower_section/empower.png'

const EmpowerSection = () => {

  const formatTextWithBreaks = (text, wordsPerLine = 4) => {
    const words = text.split(' ');
    const lines = [];
  
    for (let i = 0; i < words.length; i += wordsPerLine) {
      lines.push(words.slice(i, i + wordsPerLine).join(' '));
    }
  
    return lines;
  };




  const stats = [
    { number: '36+', text: 'Presence in more than 36  countries around the world' },
    { number: '1000+', text: 'Partners who have joined CertiProf in the last 5 years' },
    { number: '800,000+', text: 'Certified professionals and an worldwides' },
  ];

  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Empowering people to change<br></br> their lives
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Nam ex purus, vehicula nec cursus tempor,<br></br>
            efficitur ut lectus.Suspendisse leo arcu phar<br></br>
            etra non  ornare non, pulvinar eget odio. Quis<br></br>
            diam . Nunc ac cursus odio, at auctor eros.<br></br>
            Donec nisi turpis, venenatis eu lectus id <br></br>
            dignissim tempor arcu.
            </p>
           
        </div>  

    
        <div className="md:w-1/2 flex justify-center">
          <img
            src={empower}
            alt="Certification"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-[#1f2f43]">
  {stats.map((item, index) => (
    <div key={index}>
      <h3 className="text-2xl text-blue-900 font-bold">{item.number}</h3>
      <p className="text-sm text-gray-600">
        {formatTextWithBreaks(item.text).map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default EmpowerSection;
