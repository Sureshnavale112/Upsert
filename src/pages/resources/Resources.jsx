import { useState } from 'react';
import Blog from '../../components/Blog/Blog';
import EbookCards from '../../components/EbookCards/EbookCards';
import CloudRoboticsArticles from '../../components/CloudRoboticsArticles/CloudRoboticsArticles';
import Reports from '../../components/Reports/Reports';

const cardData = [
  {
    id: 'blog',
    title: 'Blogs',
    description:
      'Read the latest articles and updates in the tech world, curated by experts.',
    bgClass: 'bg-orange-400',
  },
  {
    id: 'ebook',
    title: 'eBooks',
    description:
      'Access our collection of downloadable eBooks to dive deeper into key topics.',
    bgClass: 'bg-gradient-to-br from-purple-500 to-blue-500',
  },
  {
    id: 'report',
    title: 'Reports',
    description:
      'Explore detailed research reports and data insights compiled by professionals.',
    bgClass: 'bg-teal-500',
  },
];

const Resources = () => {
  const [activeSection, setActiveSection] = useState(null); 

  
  const renderSection = () => {
    switch (activeSection) {

      // case 'blog':
      //   return (
        
      //   );
      case 'ebook':
        return <EbookCards/>;
      case 'report':
        return <Reports />;
      default:
        return (<>
        
          <div><CloudRoboticsArticles/></div>
          
         
          </>
        );
    }
  };

  return (
<>
<div><Blog/></div>

    <div className="p-6 max-w-7xl mx-auto">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`${card.bgClass} text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`}
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm mb-4">{card.description}</p>
            <button
              onClick={() => setActiveSection(card.id)}
              className="underline font-semibold"
            >
              View All &gt; &gt;
            </button>
          </div>
        ))}
      </div>

     
      <div>{renderSection()}</div>
    </div>

    </>
  );
};

export default Resources;
