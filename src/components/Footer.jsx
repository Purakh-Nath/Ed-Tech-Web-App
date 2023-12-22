import React from 'react'

function Footer() {
  return (
    <div className="bg-black text-white py-3 flex flex-col md:flex-row justify-between items-center h-3/4">
    <div className="flex flex-col md:space-x-4">
      <h2 className="font-bold text-xl p-4">KARO ABHAYAAS <br /> 112,Electronic City <br /> Banglore,India</h2>
     
    </div>
   
    <div className="text-sm text-gray-300 mt-4 md:mt-0 pr-3">
     <h3 className="text-xl text-white">Some Text About Something <br />And Then Some Other Thing</h3>
     <div className="flex space-x-4 pt-5 text-black">
      <a href="#" className="bg-white text-center w-32 font-semibold p-2">CONTACT US</a>
      <a href="#" className="bg-white text-center w-32 font-semibold p-2">CONTACT US</a>
    </div>
    
    </div>
  </div>
  )
}

export default Footer