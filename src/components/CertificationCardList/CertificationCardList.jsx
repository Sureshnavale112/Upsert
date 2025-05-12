import React, { useState } from 'react';
import { IoFilter } from "react-icons/io5";
import okr from '../../../public/assets/CertCardList/okr.png';
import { certifications, categoryOptions } from './Data';
import { useNavigate } from 'react-router-dom';


const FilterSection = ({ title, options, selected, setSelected }) => {
  const toggleOption = (option) => {
    setSelected(prev =>
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      {options.map(option => (
        <label key={option} className="block mb-1 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox mr-2"
            checked={selected.includes(option)}
            onChange={() => toggleOption(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};


const CertificationCard = ({ cert }) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/product/${cert.id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="relative">
        <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover" />
        <span className={`absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded ${cert.iconColor}`}>
          {cert.type}
        </span>
        <img src={okr} alt="badge" className="absolute -bottom-6 left-4 w-26 h-26 bg-white rounded p-1 shadow" />
      </div>
      <div className="pt-8 px-4 pb-4">
        <h3 className="font-semibold text-md">{cert.title}</h3>
        <ul className="text-sm text-gray-600 my-2 space-y-1">
          <li>✔ Certification content overview</li>
          <li>✔ Industry-recognized credential</li>
        </ul>
        <p className="text-xs text-gray-500 mb-2">
          Level: <span className="text-black">{cert.level}</span>
        </p>
        <div className="flex justify-between items-center mt-2">
          <button
            className="text-sm font-semibold bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={handleBuyClick}
          >
            Buy Certification &gt;&gt;
          </button>
          <span className="font-semibold text-gray-700">{cert.price}</span>
        </div>
      </div>
    </div>
  );
};


const CertificationCardList = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [selectedFee, setSelectedFee] = useState([]);

  const filteredCertifications = certifications.filter(cert => {
    const categoryMatch = selectedCategory.length > 0 ? selectedCategory.includes(cert.category) : true;
    const levelMatch = selectedLevel.length > 0 ? selectedLevel.includes(cert.level) : true;
    const feeMatch = selectedFee.length > 0
      ? selectedFee.includes("Free") ? cert.price === "₹0.00" : cert.price !== "₹0.00"
      : true;

    return categoryMatch && levelMatch && feeMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <aside className="md:col-span-3 bg-blue-50 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <IoFilter /> Filter
        </h2>
        <FilterSection
          title="Category"
          options={categoryOptions}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
        <FilterSection
          title="Levels"
          options={["Beginner", "Intermediate", "Advanced"]}
          selected={selectedLevel}
          setSelected={setSelectedLevel}
        />
        <FilterSection
          title="Course Fee"
          options={["Paid", "Free"]}
          selected={selectedFee}
          setSelected={setSelectedFee}
        />
      </aside>

      <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map(cert => (
            <CertificationCard key={cert.id} cert={cert} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No certifications match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default CertificationCardList;
