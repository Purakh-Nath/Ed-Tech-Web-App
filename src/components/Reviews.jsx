import React from 'react'

function Reviews() {
  return (
     
    <div className="flex flex-col gap-4 p-32 mr-10 rounded-lg h-full shadow-md  md:flex-row md:w-full">
    {/* Review 1 */}
  
    <div className="flex items-center bg-white rounded-md  md:w-full">
      <div className="mr-4">
        <img
          src="https://unsplash.com/photos/m_HRfLhgABo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d2VifGVufDB8fHx8MTcwMjk3MjU3Nnww&force=true&w=1920"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div>
        <h4 className="font-bold">React JS<div className='h-1 w-3/4 bg-slate-950 mb-2'></div></h4>
       <p className="text-sm text-gray-500">Some review submitted by the user about the company</p>
      </div>
    </div>

    {/* Review 2 */}
    <div className="flex items-center md:ml-4 bg-white rounded-md  md:w-full">
      <div className="mr-4">
        <img
          src="https://unsplash.com/photos/m_HRfLhgABo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d2VifGVufDB8fHx8MTcwMjk3MjU3Nnww&force=true&w=1920"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div>
        <h4 className="font-bold">React JS <div className='h-1 w-3/4 bg-slate-950 mb-2'></div></h4>
        <p className="text-sm text-gray-500">Some review submitted by the user about the company</p>
      </div>
    </div>

    {/* Review 3 */}
    <div className="flex items-center md:ml-4 bg-white rounded-md  md:w-full">
      <div className="mr-4">
        <img
          src="https://unsplash.com/photos/m_HRfLhgABo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8d2VifGVufDB8fHx8MTcwMjk3MjU3Nnww&force=true&w=1920"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div>
        <h4 className="font-bold">React JS <div className='h-1 w-3/4 bg-slate-950 mb-2'></div></h4>
        <p className="text-sm text-gray-500">Some review submitted by the user about the company</p>
      </div>
    </div>
  </div>
  )
  
}


export default Reviews