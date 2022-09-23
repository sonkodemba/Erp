import React from 'react'

export const UpdateeUser = () => {
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b my-5">
        <div className="px-8 py-8">
           <h1 className="font-thin text-2xl tracking-wider text-red">
             Add User
            </h1>
        
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Full Name:
            </label>
          <input 
            type="text"
            name="fullName"
            placeholder='Enter Full Name' className="h-10 w-96 border mt-2 px-2 py-2 font-bold text-green-500">
          </input>

        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Telephone Number:
            </label>
          <input
            type="email"
            name="emailAddr"
           
            placeholder="dsonko@nawec.gm" className="h-10 w-96 border mt-2 px-2 py-2">

          </input>

        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Telephone Number:
             </label>
          <input
            type="Number"
            name="telephoneNumber"
            
            placeholder="1234567" className="h-10 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
      <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Password:
            </label>
           
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-40">
          <button 
            className="hover:bg-green-600 rounded text-white font-semibold bg-blue-400 px-5 py-1">
            
               Save
          </button>
        <button
          
          className="hover:bg-red-600 rounded text-white font-semibold bg-yellow-400 px-5 py-1"> 
          Cancel
        </button>

        </div>
       
        </div>
         
    </div>
  )
}
