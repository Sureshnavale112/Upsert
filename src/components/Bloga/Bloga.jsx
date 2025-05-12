import React from 'react'
import OBJECT from '../../../public/assets/resorces/Blogsa/OBJECT.png'
import CertificationResources from '../CertificationResources/CertificationResources';
const Bloga = () => {
  return (
    <>

    <div className="px-4 py-10 bg-white">
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto">

      <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={OBJECT}
            alt="Resources Illustration"
            className="max-w-xs md:max-w-sm"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
          <p className="text-sm text-blue-500 uppercase font-semibold">
            Resources for your certification journey
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-3">
            Empower Your Success with eBooks, Blogs, and Reports
          </h2>
          <p className="text-gray-600">
            Explore our comprehensive collection of eBooks, insightful blog posts,
            and detailed reports designed to support your certification journey.
          </p>
        </div>
       
      </div>
    </div>

    <div><CertificationResources/></div>    

</>
  )
}

export default Bloga;