import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from '../Services/UserService';



export const AddUser = () => {
    const route = useNavigate();
    const [user, setUser] = useState({
      id:" ",
      fullName:" ",
      emailAddr:" ",
      telephoneNumber:" ",
      password:""
  });

  const handleChange = (e) =>{
    const value = e.target.value;
    setUser({...user, [e.target.name] : value});
  };

  const saveUser = (e) =>{

    e.preventDefault();
    UserService.crete(user).then((response) =>{
      console.log(response);
      route("/users");
    }).catch((error) =>{
      console.log(error);
    });
  };

 
  return (                                                                      
    
    <div className="flex max-w-2xl mx-auto shadow border-b my-5">
        <div className="px-8 py-8">
           <h1 className="font-thin text-2xl tracking-wider text-red">
             Add User
            </h1>
        
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             {/* Full Name: */}
            </label>
          <input 
            type="text"
            name="fullName"
            value={user.fullName}
            onChange = {(e) => handleChange(e)}
            placeholder="Enter Full Name" className="h-10 w-96 border mt-2 px-2 py-2 font-bold text-green-500">
          </input>

        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             {/* Telephone Number: */}
            </label>
          <input
            type="email"
            name="emailAddr"
            value={user.emailAddr}
            onChange = {(e) => handleChange(e)}
            placeholder="Enter Email" className="h-10 w-96 border mt-2 px-2 py-2">

          </input>

        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             {/* Telephone Number: */}
             </label>
          <input
            type="Number"
            name="telephoneNumber"
            value={user.telephoneNumber}
            onChange = {(e) => handleChange(e)}
            placeholder="Telephone Number" className="h-10 w-96 border mt-2 px-2 py-2">
          </input>
        </div>
      <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Password:
            </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange = {(e) => handleChange(e)}
            placeholder="Password" className="h-10 w-96 border mt-2 px-2 py-2">
          </input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-10">
          <button 
            className="hover:bg-green-600 rounded text-white font-semibold bg-blue-400 px-5 py-1"
            onClick={(e) =>saveUser(e)}>
               Save
          </button>

        <button
          onClick={() => route("/users")}
          className="hover:bg-red-600 rounded text-white font-semibold bg-yellow-400 px-5 py-1 float-right"> 
          Cancel
        </button>
        </div> 
       
        </div>
         
    </div>
  );
}
