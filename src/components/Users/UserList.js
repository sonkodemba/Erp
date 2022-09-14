import React from 'react'
import { useNavigate } from 'react-router-dom'
 

 
export const UserList = () => {
    const route = useNavigate();
  return (
    <div className="container mx-auto my-8">
        <div>
            <button
            onClick={() => route("/user/create")}
            className="rounded bg-slate-600 text-white px-6 py-6">
           New User
            </button>
        </div>

        <div className="flex-shadow border-b">
        <table class="min-w-full">
            <thead className="bg-gray-100">
                <tr>
                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>fullName</th>
                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email</th>
                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Telephone</th>
                <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Action</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                                <div className='text-sm text-gray-500'>
                                Demba Sonko
                                </div>
                        </td>
                        
                        <td  className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>dsonko@nawec.gm</div>
                        </td>
                        
                        <td  className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>9976650 </div>
                            
                        </td>
                        
                        <td  className='text-righ font-medium text-smt px-6 py-4 whitespace-nowrap'>
                            {/* <a href="#" className='text-indigo-600 hover:text-orange-500-600 px-4'> Add </a>
                            <a  href="#" className='text-green-600 hover:text-blue-600 px-4'> Edit </a>
                            <a  href="#" className='text-yellow-600 hover:text-red-600 px-4'> Delete </a> */}
                        </td>
                      </tr>
                         
                         
            </tbody>
            </table>
        </div>
    </div>
  )
}
