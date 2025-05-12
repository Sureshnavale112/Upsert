import { useState } from 'react';
import { Link } from "react-router-dom";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    jobTitle: '',
    city: '',
    state: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

  };

  const fields = [
    { id: 'name', label: 'Name', placeholder: 'First_Name Last_Name', type: 'text', required: false },
    { id: 'email', label: 'Email', placeholder: 'Email Address', type: 'email', required: true },
    { id: 'mobile', label: 'Mobile Number', placeholder: 'Mobile number', type: 'tel', required: true },
    { id: 'company', label: 'Company', placeholder: 'Company', type: 'text', required: true },
    { id: 'jobTitle', label: 'Job Title', placeholder: 'Job Title', type: 'text', required: true },
    { id: 'city', label: 'City', placeholder: 'City', type: 'text', required: true },
    { id: 'state', label: 'State', placeholder: 'State', type: 'text', required: true }
  ];
  


  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
          <p className="text-gray-600">
            Please complete the form below and we will be in contact soon.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          <div className="w-full lg:w-1/1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {fields.slice(0, 3).map(({ id, label, placeholder, type, required }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                      {label} {required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      placeholder={placeholder}
                      value={formData[id]}
                      onChange={handleChange}
                      required={required}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {fields.slice(3).map(({ id, label, placeholder, type, required }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                        {label} {required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={type}
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        value={formData[id]}
                        onChange={handleChange}
                        required={required}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>


                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Choose country</option>
                    <option value="India">India</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="United States">United States</option>
                  </select>
                </div>
              </div>


              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
              >
                SUBMIT
              </button>
            </form>
          </div>


          <div className="w-full lg:w-1/2 space-y-6">
            {[
              { title: 'UPCERT', content: 'Maceenas lobortis tempus tellus non viverra. Nullam interdum porttitor justo, sit amet cursus augue laculis sed.' },
              { title: 'CALL US', content: '+91 1234567890' },
              { title: 'MAIL US', content: 'hello@info.com.ng' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600"> {item.content}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
