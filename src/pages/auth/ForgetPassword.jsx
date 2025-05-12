import React from 'react';

import forget from '../../../public/assets/auth/forgot.png'; // Use this only with next/image

const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Section */}
      <div className="flex-1 p-6 md:p-16 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-center mb-6">CREATE NEW PASSWORD</h2>

        <div className="text-center mb-4 text-gray-400">Please enter a new password</div>

        <form className="space-y-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-3 rounded"
          >
            Reset Password
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-6">
        {/* If using Next.js */}
        <img
          src={forget}
          alt="Forgot password illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
        />
      </div>
    </div>
  );
};

export default ForgetPassword;
