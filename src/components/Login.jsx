import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useLogin } from "../customHooks/useLogin";
import logo from '../logo.jpg'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, error, isLoading } = useLogin();

    const handleSubmit = async(e) => {
        e.preventDefault();

        await login(email, password);
    }
  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <div className="shadow-[0_1px_5px_2px_rgba(0,0,0,0.3)] mx-0 my-auto flex items-center justify-center flex-col p-[50px] rounded-[10px] w-[450px]">
        <div className="logo">
            <img src={logo} alt="logo" className="w-[130px] mb-3"/>
        </div>
        <p><b>Sign in to join with Stack</b></p>
        <form onSubmit={handleSubmit} className='flex flex-col w-full p-[15px] gap-y-8' method='POST'>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Enter Email" id="email" name="email" className='border-solid border-2 border-[#212121] focus:ring focus:outline-violet-300 py-[10px] px-[25px] rounded-[6px]' autoFocus onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-y-2'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" id="password" name="password" className='border-solid border-2 border-[#212121] focus:ring focus:outline-violet-300 py-[10px] px-[25px] rounded-[6px]' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className='bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 py-[10px] px-[25px] text-sm leading-5 rounded-[6px] font-semibold text-white'>Sign In</button>
        </form>
        <span className='text-slate-500'>Don't have an account? <Link to="/signup" className='text-blue-600 visited:text-purple-600'>Sign Up</Link></span>
      </div>
    </div>
  )
}

export default Login
