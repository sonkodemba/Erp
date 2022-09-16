import React from 'react'
import { useNavigate } from 'react-router-dom'
 

 
export const UserList = () => {
    const route = useNavigate();

    

  return (
    <div className="container mx-auto my-10">
      <div className="flex-shadow border-b">
        <table class="min-w-full">
            <thead className="bg-gray-100">
                <tr>
                <th className='text-left font-medium text-black uppercase tracking-wider py-3 px-6'>fullName</th>
                <th className='text-left font-medium text-black uppercase tracking-wider py-3 px-6'>Email</th>
                <th className='text-left font-medium text-black uppercase tracking-wider py-3 px-6'>Telephone</th>
                <th className='text-justify font-medium text-black uppercase py-3 px-3'>
                    Action
                    
                     <button
                            onClick={() => route("/user/create")}
                            className="text-right rounded bg-yellow-600 hover:bg-green-400 text-white px-3 py-1">
                            <i className="fa fa-user">
                                    Add
                            </i>
                     </button>
                     </th>
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
                        
                        <td  className='text-rigt font-medium text-smt px-6 py-4 tracking-wider'>
                            <a
                             href={() => route("/users")}  
                             className='text-indigo-600 hover:text-orange-500-600 px-4'> 
                                Add 
                            </a>
                            
                            <a  
                                href={() => route("/user/update")}
                                className='text-green-600 hover:text-blue-600 px-4'>
                                     Edit
                            </a>
                            <a 
                                href={() => route("/users")}
                                className='text-yellow-600 hover:text-red-600 px-4'>
                                     Delete
                            </a>
                        </td>
                      </tr>

                      {/* Row 2 */}
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
                        
                        <td  className='text-rigt font-medium text-smt px-6 py-4 tracking-wider'>
                            <a
                             
                             href={() => route("/users")}  
                             className='text-indigo-600 hover:text-orange-500-600 px-4'> 
                                Add 
                            </a>
                            
                            <a  
                                href={() => route("/user/update")}
                                className='text-green-600 hover:text-blue-600 px-4'>
                                     Edit
                            </a>
                            <a 
                                href={() => route("/users")}
                                className='text-yellow-600 hover:text-red-600 px-4'>
                                     Delete
                            </a>
                        </td>
                      </tr>
                         
                         {/* Row 3 */}
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
                        
                        <td  className='text-rigt font-medium text-smt px-6 py-4 tracking-wider'>
                            <a
                             href={() => route("/users")}  
                             className='text-indigo-600 hover:text-orange-500-600 px-4'> 
                                Add 
                            </a>
                            
                            <a  
                                href={() => route("/user/update")}
                                className='text-green-600 hover:text-blue-600 px-4'>
                                     Edit
                            </a>
                            <a 
                                href={() => route("/users")}
                                className='text-yellow-600 hover:text-red-600 px-4'>
                                     Delete
                            </a>
                        </td>
                      </tr>
                         
            </tbody>
            </table>
        </div>
    </div>
  )
}
