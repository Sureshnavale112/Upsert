import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signin from "../../../public/assets/auth/signin.png";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    console.log("Entered Email:", trimmedEmail);
    console.log("Entered Password:", trimmedPassword);

    const storedUserData = JSON.parse(localStorage.getItem("user"));

    if (!storedUserData) {
      setError("No user data found. Please sign up first.");
      return;
    }

  
    if (!trimmedEmail || !trimmedPassword) {
      setError('Please enter both email and password.');
      return;
    }

    const { email: storedEmail, password: storedPassword } = storedUserData;

    if (trimmedEmail === storedEmail && trimmedPassword === storedPassword) {
    
      localStorage.setItem("isAuthenticated", true);
      navigate("/");
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="w-full md:w-1/2 p-6 md:p-16">
        <h2 className="text-2xl text-center font-bold mb-6">SIGN IN</h2>

     
        <button className="flex items-center justify-center w-full border py-2 rounded mb-4">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            className="mr-2"
            alt="Google"
          />
         
        </button>

        <div className="text-center mb-4 text-gray-400">OR</div>

      
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

       
        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-3 rounded"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>

      <div className="hidden md:flex md:w-1/2 items-center justify-center p-10">
        <div className="text-center">
          <img
            src={signin}
            alt="Login Illustration"
            className="w-full max-w-sm mx-auto mb-4"
          />
          <h3 className="text-xl font-bold">nas lobortis tempus tellus non viverra.</h3>
          <p className="text-gray-500 mt-2">
            Iaculis Sed. Nulla Faucibus Metus A Dolor Suscipit
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
