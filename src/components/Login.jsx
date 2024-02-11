import React, { useState ,useContext} from 'react'
import { NavLink } from "react-router-dom";
import UserContext from '../context/UserContext';
function Login() {
  const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) =>{
    e.preventDefault()
    setUser({username,password})
  
  }
  const {user} = useContext(UserContext)
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md px-8 py-6 rounded-lg shadow-md bg-white">
        {/* Form */}
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="text-sm font-medium text-gray-700">
            {/* Branch Testing */}
              USER__Name
            </label>
            <input
              required
              type="text"
              id="username"
              name="username"
              placeholder='Context'
              value={username}
              onChange={ (e) => setUsername(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={ (e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
            <button onClick={handleSubmit} 
            type="submit"
            className="inline-flex items-center px-4 py-2 ml-36 rounded-lg bg-black text-white font-bold focus:ring focus:ring-blue-700 focus:ring-opacity-50 mx-auto"
          >  
{/* {user ? (<NavLink to="/dashboard">Login</NavLink>) : (<div className='mx-6 text-start'>Please Login</div>)} */}
         <NavLink to="/dashboard">LOGIN </NavLink>
            
          </button>    
        </div>
        {/* Sign Up link */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          
          <NavLink  className="text-blue-500 hover:underline"  to="/signup">Sign Up</NavLink>
          
          
        </p>
      </div>
    </div>
  )
}

export default Login