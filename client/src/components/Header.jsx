import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center mt-28 md:mt-32 px-4 text-center">
      <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
        Hey Developer
      </h2>

      <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
        Welcome to MERN AUTH
      </h1>

      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
        This is a simple authentication app using MERN stack. Let's start with a
        quick product tour and we'll have you up and running in no time.
      </p>

      <div className="mt-8">
        <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
