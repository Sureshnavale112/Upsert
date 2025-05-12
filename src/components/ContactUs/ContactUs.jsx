import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-5">
      <div className="max-w-5xl mx-auto P-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">CONTACT US</h1>

        <div className="flex flex-col md:flex-row gap-10">
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'First_Name Last_Name' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' }
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  value={formData[id]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Select Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose country</option>
                <option value="India">India</option>
                <option value="Nigeria">Nigeria</option>
                <option value="United States">United States</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>

          <div className="w-full md:w-1/2 space-y-6">
            {[
              { title: 'CERTIFY', content: 'Macerase lobortis tempus tellus non viverra. Nullam intercum porttitor justo, eit amet cursus augue laculis sed.' },
              { title: 'CALL US', content: '+91 1234567890' },
              { title: 'MAIL US', content: 'hello@info.com.ng' }
            ].map(({ title, content }, i) => (
              <div key={i} className={i < 2 ? 'border-b border-gray-200 pb-6' : ''}>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
