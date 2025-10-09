import React, { useState } from "react";
import { assets } from "./../assets/assets";
import { LockKeyhole, Mail, User } from "lucide-react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-white">
      <img
        src={assets.mern}
        alt="logo"
        className="absolute left-5 sm;left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg width-full sm:w-96 text-indigo-300 text-sm">
        <h2 className="text-3xl font-semibold text-white text-center mb-3">
          {state === "Sign Up" ? "Create Account" : "Login "}
        </h2>
        <p className="text-center text-sm mb-6">
          {state === "Sign Up"
            ? "Create Your Account"
            : "Login to your Account"}
        </p>

        <form>
          {state === "Sign Up" && (
            <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#2e334b]">
              <User />
              <input
                className="bg-transparent outline-none"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#2e334b]">
            <Mail />
            <input
              className="bg-transparent outline-none"
              type="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#2e334b]">
            <LockKeyhole />
            <input
              className="bg-transparent outline-none"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <p className="mb-4 text-indigo-500 cursor-pointer">
            Forgot Password?
          </p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-full transition duration-300 mb-1">
            {state}
          </button>
        </form>
        {state === "Sign Up" ? (
          <p className="text-gray-400 text-center text-xs mt-4">
            Already have an account?{" "}
            <span onClick={()=>setState("Login")} className="text-indigo-400 cursor-pointer underline">
              Login here
            </span>
          </p>
        ) : (
          <p className="text-gray-400 text-center text-xs mt-4">
            Don't have an account?{" "}
            <span onClick={()=>setState("Sign Up")} className="text-indigo-400 cursor-pointer underline">
              Sign Up here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
