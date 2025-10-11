import React, { useRef, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail } from "lucide-react";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword,setNewPassword]=useState("");
  const inputRefs = useRef([]);

  const handleInput = async (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-white">
      <img
        src={assets.mern}
        onClick={() => navigate("/")}
        alt="logo"
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
      />

      <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm">
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Reset Password
        </h1>
        <p className="text-center mb-6 text-indigo-300">
          Enter your registered email address to reset your password
        </p>
        <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
          <Mail className="w-3 h-3 text-white" />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent outline-none text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="w-full mt-3 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-full">
          Submit
        </button>
      </form>

      <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm">
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Reset Password OTP
        </h1>
        <p className="text-center mb-6 text-indigo-300">
          Enter the 6-digit verification code sent to your email
        </p>
        <div className="flex justify-between mb-8" onPaste={handlePaste}>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                ref={(e) => (inputRefs.current[index] = e)}
                onInput={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                type="text"
                maxLength="1"
                key={index}
                required
                className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
              />
            ))}
        </div>
        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-full">
          Submit
        </button>
      </form>

      <form className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm">
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          New Password
        </h1>
        <p className="text-center mb-6 text-indigo-300">
          Enter your new password
        </p>
        <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
          <LockKeyhole className="w-3 h-3 text-white" />
          <input
            type="password"
            placeholder="New Password"
            className="bg-transparent outline-none text-white"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button className="w-full mt-3 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
