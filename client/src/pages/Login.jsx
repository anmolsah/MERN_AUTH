import React, { useState } from "react";
import { assets } from "./../assets/assets";
import {User} from 'lucide-react';

const Login = () => {
  const [state, setState] = useState("Sign Up");
  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-white">
      <img
        src={assets.logo1}
        alt="logo"
        className="absolute left-5 sm;left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />
      <div>
        <h2>{state === "Sign Up" ? "Create Account" : "Login "}</h2>
        <p>
          {state === "Sign Up" ? "Create Account" : "Login to your Account"}
        </p>

        <form>
          <div className="mb-4 flex items-center gap-3">
        <User />
        <input type='text' placeholder="Full Name" required />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
