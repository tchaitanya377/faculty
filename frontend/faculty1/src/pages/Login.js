import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa';
import logo from '../images/logo.png';

const Login = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="md:w-20 h-20 mr-4" />
            <div>
              <div className="text-red-600 md:text-4xl font-semibold text-center">
                Madanapalle Institute of Technology & Science
              </div>
              <div className="border-b border-gray-300 md:mt-2"></div>
              <div className="text-green-600 text-sm text-center m-2">
                UGC - Autonomous Institute
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="mt-4 text-blue-500 text-2xl text-center p-10">
          Computer Science & Engineering - Data Science
        </div>
        <div className="max-w-md bg-white p-8 rounded-lg shadow-md w-full">
          <div className="mb-4 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center">
              <div className="w-6 h-6">
                <FaUser />
              </div>
            </div>
          </div>
          <form className="mt-2">
            <div className="mb-4 flex items-center border rounded-md border-green-400">
              <div className="w-6 h-6 ml-2 text-green-400">
                <FaUser />
              </div>
              <input
                type="text"
                placeholder="Username"
                className="w-full py-2 pl-2 pr-10 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="mb-6 flex items-center border rounded-md border-green-400">
              <div className="w-6 h-6 ml-2 text-green-400">
                <FaLock />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2 pl-2 pr-10 focus:outline-none rounded-r-md"
              />
            </div>
            <div className="text-right mb-4">
              <a href="#" className="text-blue-500">
                Forget your password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded-md hover-bg-blue-700"
            >
              Login
            </button>
            
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
