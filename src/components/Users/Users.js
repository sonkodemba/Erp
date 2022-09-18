import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalEndPoint from '../Services/GlobalEndPoint';
import UserService from '../Services/UserService';



 
export const Users = () => {
    const route = useNavigate();

     const [loading, setLoading] = useState(false);
     const [users, setUsers] = useState(null);
     

     useEffect(() => {
      
        const fetchData = async() =>{
            setLoading(true);
            try {
                //call to the Api
                const response = await UserService.all();
                // const users = await response.json();
                setUsers(response.data);              
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
       
     }, []);
  return (
    <>
    <div className="container mx-auto my-10">
      <div className="flex-shadow border-b">
      <button
             className="text-right rounded bg-yellow-600 hover:bg-green-400 text-white px-3 py-1"> Add </button>
        <table class="min-w-full">
            <thead className="bg-gray-50">
                <tr>
                    <th className='text-left font-medium text-black uppercase tracking-wider py-3 px-6'>fullName</th>
                    <th className='text-left font-medium text-black uppercase tracking-wider py-3 px-6'>Email</th>
                    <th className='text-left font-medium text-black uppercase tracking-wider py-3 px-6'>Telephone</th>
                    <th className='text-justify font-medium text-black uppercase py-3 px-3'>Action</th>                  
                    
                </tr>
            </thead>
                {!loading && (
                    <tbody className="bg-white"> 
                    {users.map((user) =>(
                            <tr>
                            <td className='text-left px-6 py-4 whitespace-nowrap'>
                                <div  className='text-sm text-gray-500'>{user.fullName} </div>
                            </td>
    
                            <td  className='text-left px-6 py-4 whitespace-nowrap'>
                                <div className='text-sm text-gray-500'>{user.emailAddr}</div>
                            </td>
    
                            <td  className='text-left px-6 py-4 whitespace-nowrap'>
                                <div className='text-sm text-gray-500'>{user.telephoneNumber} </div>
                                
                            </td>
                            <td  className='text-left px-6 py-4 whitespace-nowrap'>
                                <div className='text-sm text-gray-500'>password </div>
                                
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
                     ))}
                </tbody>
            
                )}
             </table>
              
        </div>
    </div>
    </>
  )
}