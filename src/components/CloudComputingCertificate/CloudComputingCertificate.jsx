import React from 'react'
import CC from '../../../public/assets/certification/CC.png'

function CloudComputingCertificate() {

  return (

    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    
      <div className="flex flex-col gap-4">
        <Image
          src={CC}
          alt="Scrum Master Professional Certificate"
          width={500}
          height={400}
          className="rounded-xl shadow-md"
        />
        <div className="flex gap-4 items-center">
          <Image
            src={CC}
            alt="SMPC Thumbnail"
            width={120}
            height={80}
            className="rounded-md"
          />
          <Image
            src={CC}
            alt="Scrum Master Badge"
            width={120}
            height={80}
            className="rounded-md"
          />
        </div>
      </div>

   
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-900">
          Cloud Computing Professional Certificate
        </h2>
        <p className="text-xl font-semibold text-gray-800">Rs. 6,400.00</p>
        <p className="text-gray-600">
          Maecenas Lobortis Tempus Tellus Non Viverra. Nullam Interdum.
        </p>
        <p className="text-gray-600">
          Maecenas Lobortis Tempus Tellus Non Viverra. Nullam Interdum Porttitor
          Justo, Sit Amet Cursus Augue Iaculis Sed. Nulla Faucibus Metus A Dolor
          Suscipit, Et Condimentum Purus Elementum. Nulla Porttitor Justo, Sit Amet
          Cursus Augue Iaculis Sed. Nulla Faucibus Metus.
        </p>
        <Button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full">
          Schedule an Exam
        </Button>
      </div>
    </div>
  );
};

export default CloudComputingCertificate;


