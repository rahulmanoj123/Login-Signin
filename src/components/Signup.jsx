import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../customHooks/useRegister";
import logo from '../logo.jpg'

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { register } = useRegister();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z]).{6,}$/;
    return passwordRegex.test(password);
  };

  const getPasswordValidationClasses = () => {
    const isValid = validatePassword(password);
    const classesArray = Array.from({ length: 6 }, (_, index) =>
      index < password.length ? (isValid ? "right" : "wrong") : "");

    return classesArray;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
        setError('Password is not valid');
        return;
      }

    await register(email, password);
    setError("");
  };
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="shadow-[0_1px_5px_2px_rgba(0,0,0,0.3)] mx-0 my-auto flex items-center justify-center flex-col p-[50px] rounded-[10px] w-[450px]">
        <div className="logo">
            <img src={logo} alt="logo" className="w-[130px] mb-3"/>
        </div>
        <p>
          <b>Sign up to join with Stack</b>
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full p-[15px] gap-y-8"
          method="POST"
        >
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              name="email"
              className="border-solid border-2 border-[#212121] focus:ring focus:outline-violet-300 py-[10px] px-[25px] rounded-[6px]"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
              className="border-solid border-2 border-[#212121] focus:ring focus:outline-violet-300 py-[10px] px-[25px] rounded-[6px]"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {password && (
            <div className="validate">
              {getPasswordValidationClasses().map((className, index) => (
                <span key={index} className={className}></span>
              ))}
            </div>
          )}
          <button
            type="submit"
            className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 py-[10px] px-[25px] text-sm leading-5 rounded-[6px] font-semibold text-white"
          >
            Sign Up
          </button>
        </form>
        {error && 
            <div className="py-2 px-3 text-[#e7195a] border-2 rounded-[5px]">{error}</div>
        }
        <span className="text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 visited:text-purple-600">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
