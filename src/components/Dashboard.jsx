import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';


function Dashboard() {
  const [activeSection, setActiveSection] = useState('orders');

    const {user} = useContext(UserContext)

    if(!user) return <div className='text-center font-bold'>Please Login</div>

  return (
    <div className="flex justify-between items-center bg-gray-100 p-7 mt-10 rounded-lg shadow-md">
      {/* Left side */}
      <div className="flex flex-col w-1/2 place-self-start">
        <h2 className="text-xl font-bold mb-2">User Information</h2>
        <div className="flex items-center mb-4">
          {/* <div className="w-1/3">Username:</div> */}
          <div className="w-2/3 font-semibold"> {user.username ||user.usernameSign ||"Go Back & Enter Username"} </div>
        </div>

        <div className="flex items-center mb-4">
          {/* <div className="w-1/3">Contact:</div> */}
          <div className="w-2/3 font-semibold">+91774690033</div>
        </div>
        <div className="flex items-center mb-4">
          {/* <div className="w-1/3">Email:</div> */}
          <div className="w-2/3 font-semibold"> {user.email || "amit.jha6700@gmail.com"}</div>
        </div>
        <div className="flex justify-start">
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
          <button className="ml-4 bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <NavLink to="/">Logout</NavLink>
          </button>
        </div>

    
     
       <div className="flex items-center justify-between">
       
        <div className="flex items-center mt-7">
          <button
            className={`bg-black text-white font-bold py-2 px-4 rounded-md mr-4 ${
              activeSection === 'orders' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => setActiveSection('orders')}
          >
            Orders
          </button>
          <button
            className={`bg-black text-white font-bold py-2 px-4 rounded-md mr-4 ${
              activeSection === 'tests' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => setActiveSection('tests')}
          >
            Tests
          </button>
          <button
            c className={`bg-black text-white font-bold py-2 px-4 rounded-md mr-4 ${
              activeSection === 'qa' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => setActiveSection('qa')}
          >
            Q/A
          </button>
        </div>
      </div> 


      {activeSection === 'orders' && (
  <div className="grid grid-cols-1 gap-4 mt-20 md:grid-cols-2 md:gap-8">
  
      <div className="flex flex-col">
        <h3 className="text-lg font-medium mb-4">Order Details</h3>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <div className="w-1/3 text-gray-700 font-medium">Order Number:</div>
            <div className="w-2/3 font-semibold">#1293</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/3">Product -:</div>
            <div className="w-2/3 text-gray-700 font-medium">Random Name</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/3">Address:</div>
            <div className="w-2/3">Random Address</div>
          </div>
        </div>
      </div>
   
    <div className="flex flex-col items-center justify-center md:mt-0 md:ml-4 gap-7">
      <button className="bg-black hover:bg-blue-700 text-white py-2 px-9 font-bold rounded">View Details</button>
      <button className="bg-black hover:bg-blue-700 text-white py-2 px-7 font-bold rounded">TRACK ORDER</button>
      <button className="bg-black hover:bg-blue-700 text-white py-2 px-4 font-bold rounded">Download Invoice</button>
    </div>
  </div>
)}










{activeSection === 'tests' && (
  <div className="grid grid-cols-2 gap-4 w-full h-80">
    <div className="col-span-2 bg-white rounded-lg shadow-md p-4 mb-4">
      <input
        type="text"
        placeholder="Search Tests"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
  <div className="col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="bg-white rounded-lg shadow-md p-4 mt-5">
        <h3 className="text-lg font-medium mb-4">Test Details</h3>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <div className="w-1/4 font-medium">Test Name:</div>
            <div className="w-3/4">Math Test</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 font-medium">Module:</div>
            <div className="w-3/4">Algebra</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 font-medium">Date:</div>
            <div className="w-3/4">25-12-2023</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 font-medium">Duration:</div>
            <div className="w-3/4">60 minutes</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <button className="bg-black text-white font-bold py-2 px-4 rounded-full w-48">
          Start
        </button>
      </div>
    </div>

    </div>
  
  </div>
)}



{activeSection === 'qa' && (
  <div className="grid grid-cols-2 gap-4 pt-5">
    <div className="col-span-2 grid grid-cols-2 gap-4 items-center">
      <div className="col-span-1">
        <input
          type="text"
          placeholder="Search Questions"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div className="col-span-1">
        <button className="bg-black text-white font-bold py-2 px-4 rounded-full w-48">
          Ask A New Question
        </button>
      </div>
    </div>
    <div className="col-span-2 grid grid-cols-2 gap-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        {/* <h3 className="text-lg font-medium mb-4">Question Details</h3> */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <div className="w-1/4 font-medium">Question Title:</div>
            <div className="w-3/4">Placeholder Title</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 font-medium">Module:</div>
            <div className="w-3/4">Placeholder Module</div>
          </div>
          <div className="flex items-center">
            <div className="w-1/4 font-medium">Date:</div>
            <div className="w-3/4">Placeholder Date</div>
          </div>
        </div>
      </div>
      <div className=" p-4">
        <button className="bg-black text-white font-bold py-2 px-4 rounded-full w-48">
          View Reply
        </button>
      </div>
    </div>
  </div>
)}

      </div>
        <div className='h-40 w-1  bg-gray-900  mr-10 ml-3 sm:mr-9 mb-96 place-self-start'></div>
      {/* Right side */}
      <div className="flex flex-col w-1/2 space-y-8 mb-96 place-self-start">
        <h2 className="text-xl font-bold mb-2">Address</h2>
        <div className="text-gray-900">
          R107, AJMERA INFINITY,<br />
          KARUNA NAGAR, ELECTRONIC CITY,<br />
          BANGALORE, INDIA<br />
          PIN: 846009
        </div>  
      </div>
    </div>
  );
}

export default Dashboard;
