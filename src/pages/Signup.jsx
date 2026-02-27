import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login("newuser@example.com");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#f5f6f7] flex items-center justify-center px-6">
      <div className="w-full max-w-7xl grid grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/login-image.jpg"  // replace with your actual image
            alt="Resort"
            className="rounded-3xl object-cover w-full h-[720px]"
          />

          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-6 h-2 rounded-full bg-[#6FCF97]"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-70"></div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="max-w-lg">

          {/* Logo */}
          <h1 className="text-2xl font-semibold mb-10">
            go<span className="text-[#6FCF97]">l</span>obe
          </h1>

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-2">Sign up</h2>
          <p className="text-gray-500 mb-8">
            Let’s get you all set up so you can access your personal account.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="john.doe@gmail.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FCF97] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="john.doe@gmail.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FCF97] outline-none"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FCF97] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-600">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="john.doe@gmail.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FCF97] outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-5 relative">
              <label className="block text-sm mb-2 text-gray-600">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FCF97] outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[44px] cursor-pointer text-gray-400"
              >
                👁
              </span>
            </div>

            {/* Confirm Password */}
            <div className="mb-5 relative">
              <label className="block text-sm mb-2 text-gray-600">
                Confirm Password
              </label>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••••••"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FCF97] outline-none"
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-[44px] cursor-pointer text-gray-400"
              >
                👁
              </span>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 mb-6 text-sm text-gray-600">
              <input type="checkbox" className="mt-1 w-4 h-4" required />
              <p>
                I agree to all the{" "}
                <span className="text-[#FF6B6B] cursor-pointer">
                  Terms
                </span>{" "}
                and{" "}
                <span className="text-[#FF6B6B] cursor-pointer">
                  Privacy Policies
                </span>
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#6FCF97] py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Create account
            </button>
          </form>

          {/* Login */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FF6B6B] font-medium">
              Login
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-sm text-gray-400">
              Or Sign up with
            </span>
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
      </div>
    </div>
  );
}