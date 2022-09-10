import React from 'react'

export const AddUser = () => {
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b my-5">
        <div className="px-8 py-8">
            {/* This si the Header */}
           <h1 className="font-thin text-2xl tracking-wider text-red">
             Add User</h1>
        
        <div className="items-center justify-center h-14 w-full my-4">
          {/* adding Labels to the form */}
          <label className="block text-gray-600 text-sm font-normal">
             Full Name:
             </label>
          <input placeholder='Demba' type="text" className="h-10 w-96 border mt-2 px-2 py-2 font-bold text-green-500">

          </input>

        </div>

        {/* Lastname */}
        <div className="items-center justify-center h-14 w-full my-4">
          {/* adding Labels to the form */}
          <label className="block text-gray-600 text-sm font-normal">
             Email
             </label>
          <input placeholder="dsonko@onclick-tech.gm" type="email" className="h-10 w-96 border mt-2 px-2 py-2">

          </input>

        </div>

        {/* Email */}
        <div className="items-center justify-center h-14 w-full my-4">
          {/* adding Labels to the form */}
          <label className="block text-gray-600 text-sm font-normal">
             Telephone Number:
             </label>
          <input placeholder="9976650" type="email" className="h-10 w-96 border mt-2 px-2 py-2">

          </input>

        </div>
        {/* button */}
        <div className="items-center justify-center h-14 w-full my-4 space-x-40">
          {/* Save Button */}
           
          <button className="hover:bg-green-600 rounded text-white font-semibold bg-blue-400 px-5 py-1"> Save</button>

        {/* Adding Clear Button */}

        <button className="hover:bg-red-600 rounded text-white font-semibold bg-yellow-400 px-5 py-1"> Save</button>

        </div>
        <div>
          <p className="text-red-500 font-thin">Errors and Omision Accepted Before you save..</p>
        </div>
        </div>
         
    </div>
  );
}
