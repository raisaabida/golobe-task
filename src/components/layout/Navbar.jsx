import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Heart, User, Plane, Bed } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white px-6 lg:px-16 py-5 flex items-center justify-between">
      
      {/* Left */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <div className="flex items-center gap-2 cursor-pointer text-gray-700">
          <Plane size={18} />
          Find Flight
        </div>
        <div className="flex items-center gap-2 cursor-pointer border-b-2 border-emerald-500 pb-1 text-gray-900">
          <Bed size={18} />
          Find Stays
        </div>
      </div>

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        go<span className="text-emerald-500">lobe</span>
      </h1>

      {/* Right */}
      <div className="flex items-center gap-6 text-sm">
        <div className="hidden md:flex items-center gap-2 cursor-pointer">
          <Heart size={18} />
          Favourites
        </div>

        {user ? (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
              <User size={16} />
            </div>
            <span className="hidden sm:block">
              {user.name || "John D."}
            </span>
            <button
              onClick={logout}
              className="text-red-500 ml-2 text-xs"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}