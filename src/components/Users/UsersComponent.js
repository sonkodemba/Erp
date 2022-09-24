import React from 'react'

export default function UsersComponent(user,deleteUser) {

  return (
    <tr key={user.id}>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{user.fullName}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{user.emal_addr}</div>
    </td>

    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{user.telephone_number}</div>

    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{user.password} </div>

    </td>

    <td className='text-rigt font-medium text-smt px-6 py-4 tracking-wider'>
        <a
            href="#"
            className='text-indigo-600 hover:text-orange-500-600 px-4'>
            Add
        </a>

        <a
           href="#"
            className='text-green-600 hover:text-blue-600 px-4'>
            Edit
        </a>
        <a
          onClick={(event, id) => deleteUser(event, user,id)}
            className='text-yellow-600 hover:text-red-600 px-4 hover:cursor-pointer'>
            Delete
        </a>
    </td>
</tr>

  )
}
