import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#f5f6f7] flex items-center justify-center px-6">
      <div className="w-full max-w-7xl grid grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div className="max-w-md">
          {/* Logo */}
          <h1 className="text-2xl font-semibold mb-12">
            go<span className="text-[#6FCF97]">l</span>obe
          </h1>

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-2">Login</h2>
          <p className="text-gray-500 mb-8">
            Login to access your Golobe account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm mb-2 text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="john.doe@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6FCF97]"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm mb-2 text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6FCF97]"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4" />
                Remember me
              </label>

              <span className="text-sm text-red-400 cursor-pointer">
                Forgot Password
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#6FCF97] py-3 rounded-lg font-semibold text-black hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          {/* Signup */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-[#FF6B6B] font-medium">
              Sign up
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-400">Or login with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 border border-gray-300 py-3 rounded-lg flex justify-center items-center hover:bg-gray-50">
              <i className="fab fa-facebook-f text-blue-600"></i>
            </button>

            <button className="flex-1 border border-gray-300 py-3 rounded-lg flex justify-center items-center hover:bg-gray-50">
              <i className="fab fa-google text-red-500"></i>
            </button>

            <button className="flex-1 border border-gray-300 py-3 rounded-lg flex justify-center items-center hover:bg-gray-50">
              <i className="fab fa-apple text-black"></i>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">
          <img
            src="/login-image.jpg"   // Replace with your actual image path
            alt="Resort"
            className="rounded-3xl object-cover w-full h-[700px]"
          />

          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-6 h-2 rounded-full bg-[#6FCF97]"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
}