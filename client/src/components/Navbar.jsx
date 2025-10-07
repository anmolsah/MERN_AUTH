import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
      <img src={assets.logo1} alt="logo" className="w-28 sm:w-32" />
      <button onClick={()=>navigate("/login")} className="cursor-pointer px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all transform hover:scale-105">
        Login
      </button>
    </div>
  );
};

export default Navbar;
