import React from 'react'
import {FaHome} from "react-icons/fa"

const   Navbar = () => {
  return (
    <div className="bg-red-500">
      
    <div className='h-16 px-8p py-8p flex items-center'>
      <p className='text-white font-bold'>
          
        <FaHome color='white' size='3rem' /> 
        </p>
         
        <p className='text-white font-bold'> Village Development Committee</p>
    </div>
  </div>
  );
}

export default Navbar