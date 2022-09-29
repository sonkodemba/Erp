import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import UserService from '../Services/UserService';
import UsersComponent from './UsersComponent';
import UserComponent from './UsersComponent';



 
export const Users = () => {
    const route = useNavigate();

     const [loading, setLoading] = useState(true);
     const [users, setUsers] = useState([]);

     useEffect(() => {
      
        const fetchData = async() =>{
           
            setLoading(true);
            try {
                //call to the Api
                const response = await UserService.all();
               setUsers(response.data);              
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
       
     }, []);

     const deleteUser =(e, id) =>{
        e.preventDefault();
        UserService.delete(id).
        then((response) =>{
            if(users){
                /**
                 * Update the Currrent of the users
                 */
                setUsers((prevElement) =>{
                    return prevElement.filter((user) => user.id !== id);
                })
            }
        });
     }
  return (
    
    <div className="container mx-auto my-10">
      <div className="flex-shadow border-b">
      <button
            onClick={() => route("/user/create")}
             className="text-right rounded bg-yellow-600 hover:bg-green-400 text-white px-3 py-1"> Add </button>
        <table className="min-w-full">
            <thead className="bg-gray-50">
                <tr>
                    <th className='text-left font-medium text-black uppercase tracking-wider py-3 px-6'>fullName</th>
                    <th className='text-left font-medium text-black uppercase tracking-wider py-3 px-6'>Email</th>
                    <th className='text-left font-medium text-black uppercase tracking-wider py-3 px-6'>Telephone</th>
                    <th className='text-right font-medium text-black uppercase  tracking-wider py-3 px-6'>Action</th>                  
                    
                </tr>
            </thead>
                {!loading && (
                    <tbody className='bg-white'> 

                    {users && users.map((user) => (
                        <UsersComponent
                             user={user} 
                             key={user.id} 
                             deleteUser={deleteUser}
                             />
                    ))}
                </tbody>
            
                )}
             </table>
              
        </div>
    </div>
  )
}
