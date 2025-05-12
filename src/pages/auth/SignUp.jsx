import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    country: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, confirmPassword, firstName, lastName, email, mobile, country, termsAccepted } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!firstName || !lastName || !email || !mobile || !country || !password || !termsAccepted) {
      setError('Please fill in all fields and accept the Terms & Conditions');
      return;
    }

    const userData = { firstName, lastName, email, mobile, country, password };
    localStorage.setItem("user", JSON.stringify(userData));
    console.log('User Data:', userData); // For now, logging the data
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/2 p-8 md:p-16">
        <h2 className="text-2xl font-bold mb-4">SIGN UP</h2>

        {/* Google Sign-Up Button */}
        <button className="flex items-center justify-center w-full border py-2 rounded mb-4">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" className="mr-2" alt="Google" />
          Sign up with your Google account
        </button>

        <div className="text-center mb-4 text-gray-400">OR</div>

        {/* Error message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {['firstName', 'lastName', 'email', 'mobile'].map(field => (
            <input
              key={field}
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
              className="w-full p-3 border rounded"
              value={formData[field]}
              onChange={handleChange}
            />
          ))}
          
          {/* Country Select */}
          <select
            name="country"
            className="w-full p-3 border rounded text-gray-400"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>

          {/* Password Fields */}
          {['password', 'confirmPassword'].map(field => (
            <input
              key={field}
              type="password"
              name={field}
              placeholder={field === 'password' ? 'Password' : 'Confirm Password'}
              className="w-full p-3 border rounded"
              value={formData[field]}
              onChange={handleChange}
            />
          ))}

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label htmlFor="terms" className="text-xs text-gray-500">
              I agree to the <span className="text-blue-600">Terms of Use</span> and <span className="text-blue-600">Privacy Policy</span>.
            </label>
          </div>

          <button type="submit" className="w-full bg-blue-900 text-white p-3 rounded">
            SIGN UP
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-10">
        <div className="text-center">
          <img src="./assets/auth/signup.png" alt="Sign-Up Illustration" className="w-full max-w-sm mx-auto mb-4" />
          <h3 className="text-xl font-bold">nas lobortis tempus tellus non viverra.</h3>
          <p className="text-gray-500 mt-2">Iaculis Sed. Nulla Faucibus Metus A Dolor Suscipit</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

