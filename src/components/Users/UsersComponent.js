import React from 'react';
import {FaPencilAlt,FaUserPlus,FaEraser} from 'react-icons/fa'


export default function UsersComponent({user,deleteUser, route}) {

  
  return (
    <tr key={user.id}>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{user.fullName}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{user.emailAddr}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{user.telephoneNumber}</div>

    </td>
   
    <td className='font-medium text-smt px-6 py-4 tracking-wider float-right'>
        <a
            href="#" className='text-indigo-600 hover:text-orange-500-600 px-4'>
            <FaUserPlus  color='blue'/>
        </a>

        <a
           href="#" className='text-green-600 hover:text-blue-600 px-4 hover:cursor-pointer  '>
            <FaPencilAlt  color='green' /> 
             
        </a>
        <a
          onClick={(event, id) => deleteUser(event, user.id)}
            className='text-yellow-600 hover:text-red-600 px-4 hover:cursor-pointer hover:cursor-pointer'>
            <FaEraser  color='red'/>
        </a>
    </td>
</tr>

  )
}
