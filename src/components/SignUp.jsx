import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';


function SignUp() {
  const [showInput, setShowInput] = useState(false); 
  const [usernameSign,setUsernameSign] = useState('')
  const [email,setEmail] = useState('')
  const [contact,setContact] = useState('')
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault()
    setUser({usernameSign,email,contact})
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  
  }
  const {user} = useContext(UserContext)


    return (
      <form   className=''
       onSubmit={handleSubmit}>
      <div className="rounded-md  bg-[#145DA0] flex flex-col items-center justify-center w-full sm:w-1/2 h-full sm:h-1/2 border-solid border-2 border-gray-900  mx-auto mt-20 p-4">
        <h1 className="text-2xl font-bold mb-8">Sign Up</h1>
        <input
          type="text"
          placeholder="NAME"
          value={usernameSign}
          required
          onChange={ (e) => setUsernameSign(e.target.value)}
          className="w-2/4 h-14 mb-4 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold"
        ></input>
       
        <input
          type="email"
          placeholder="EMAIL"
          value={email}
          required
          onChange={ (e) => setEmail(e.target.value)}
          className="w-2/4 h-14 mb-4 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold" 
        ></input>
        <div className='flex flex-initial justify-around gap-9'>
         <div className="flex items-center justify-start">
          <div className="-ml-8 border-r-4 border-gray-300 p-1">+91</div>
          <input
            type="tel"
            placeholder="PHONE NUMBER"
            value={contact}
            maxLength={10}
            onChange={ (e) => setContact(e.target.value)}
            className="m-1 h-14 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold"
            ></input>
         
        </div>
        <button
        onClick={() => setShowInput(true)}
        className="rounded-lg bg-black px-4 py-2 text-white font-semibold hover:bg-blue-600">
          Send OTP
        </button>  </div>
        {showInput && (
        <div className='flex items-center space-y-6 m-4'>
             <input
             required
            type="tel"
            placeholder="Enter Random 6 Digits"
            // value={contact}
            maxLength={6}
            // onChange={ (e) => setContact(e.target.value)}
            className="w-full h-14 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold"
            ></input> </div>   )}
        <p className="text-lg text-gray-900 mb-2 pt-2">Didn't Receive It?</p>
        <Link href="#" className="text-[#2E8BC0]  hover:text-black">
          Resend OTP
        </Link>
        <button
         className="rounded-lg bg-black px-4 py-2 text-white font-semibold hover:bg-blue-600 mt-4">
        Sign Up
        </button>
        <p className="text-lg text-gray-900 mt-4">Already Have An Account?  <NavLink to="/login" className="text-[#B1D4E0] font-bold">
          Log In
        </NavLink></p>
       
      </div>
      </form>
    );
  }
  
  export default SignUp;
  