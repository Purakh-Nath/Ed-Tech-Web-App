import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';

import UserContext from '../context/UserContext';


function SignUp() {
  const [usernameSign,setUsernameSign] = useState('')
  const [email,setEmail] = useState('')
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) =>{
    e.preventDefault()
    setUser({usernameSign,email})
  
  }
  const {user} = useContext(UserContext)


    return (
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 h-full sm:h-1/2 border-solid border-2 border-gray-900  mx-auto mt-20 p-4">
        <h1 className="text-2xl font-bold mb-8">Sign Up</h1>
        <input
          type="text"
          placeholder="NAME"
          value={usernameSign}
              onChange={ (e) => setUsernameSign(e.target.value)}
          className="w-2/4 h-16 mb-4 rounded border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold"
        />
       
        <input
          type="email"
          placeholder="EMAIL Context"
          value={email}
              onChange={ (e) => setEmail(e.target.value)}
          className="w-2/4 h-16 mb-4 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold" 
        />
        <div className='flex gap-5'>
         <div className="flex items-center">
          <div className="mr-2 border-r border-gray-300 pr-2">+91</div>
          <input
            type="tel"
            placeholder="PHONE NUMBER"
            className="w-3/4 h-16 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold"
          />
        </div>
        <button onClick={handleSubmit}
         type="submit"
        className="rounded-lg bg-black px-4 py-2 text-white font-semibold hover:bg-blue-600">
          Send OTP
        </button>  </div>
        <p className="text-lg text-gray-900 mb-2 pt-2">Didn't Receive It?</p>
        <a href="#" className="text-blue-900  hover:text-black">
          Resend OTP
        </a>
        <button  onClick={handleSubmit}
         type="submit"
        
        className="rounded-lg bg-black px-4 py-2 text-white font-semibold hover:bg-blue-600 mt-4">
          <NavLink to="/dashboard">Sign Up</NavLink>
        </button>
        <p className="text-lg text-gray-900 mt-4">Already Have An Account?  <NavLink to="/login" className="text-blue-800 font-bold">
          Log In
        </NavLink></p>
       
      </div>
    );
  }
  
  export default SignUp;
  