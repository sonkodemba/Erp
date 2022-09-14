import React from 'react'
import Uservice from '../Services/Uservice';


const AddDepartment = () => {

    const [departments, setDepartments] = useState({
        id:"",
        deppartmentName:"",
        departmentCode:"",
        departmentHOD:"",
        desctiptions:""
    });
    
    const onhandleChange =(event) =>{
        const value = event.target.value;
        setDepartments({...departments, [event.target.name] : value});
    }

    const saveDepartment = (event) =>{
        event.preventDefault();
        Uservice.saveDepartment(departments).then((response) =>{
                console.log(response);
        }).catch((error) =>{
            console.console.log(error);
        })
        
    }

    return (
    <div className="flex max-w-2xl mx-auto shadow border-b my-5">
        <div className="px-8 py-8">
            {/* This si the Header */}
           <h1 className="font-thin text-2xl tracking-wider text-red">
             Add Department</h1>
        
        <div className="items-center justify-center h-14 w-full my-4">
          {/* adding Labels to the form */}
          <label className="block text-gray-600 text-sm font-normal">
             Department Name:
             </label>
          <input 
            type="text"
            name="departmentName"
            value={departments.deppartmentName}
            onChange={(event) => onhandleChange(event)}
            placeholder='Enter Full Name' className="h-10 w-96 border mt-2 px-2 py-2 font-bold text-green-500">
          </input>

        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          {/* adding Labels to the form */}
          <label className="block text-gray-600 text-sm font-normal">
            Department Code:
             </label>
          <input
         
          placeholder="dsonko@nawec.gm" className="h-10 w-96 border mt-2 px-2 py-2">

          </input>

        </div>

        {/* Email */}
        <div className="items-center justify-center h-14 w-full my-4">
          {/* adding Labels to the form */}
          <label className="block text-gray-600 text-sm font-normal">
            Head of Department:
             </label>
          <input
          
          placeholder="1234567" className="h-10 w-96 border mt-2 px-2 py-2">
          </input>

        </div>

      {/* Password */}
      <div className="items-center justify-center h-14 w-full my-4">
          {/* adding Labels to the form */}
          <label className="block text-gray-600 text-sm font-normal">
             Descriptions:
             </label>
          <input
          
          placeholder="1234567" className="h-10 w-96 border mt-2 px-2 py-2">

          </input>

        </div>

         <div className="items-center justify-center h-14 w-full my-4 space-x-40">
          {/* Save Button */}
           onClick={(event) => saveDepartment(event)}
          <button 
          className="hover:bg-green-600 rounded text-white font-semibold bg-blue-400 px-5 py-1"
           > Save</button>

 
        <button className="hover:bg-red-600 rounded text-white font-semibold bg-yellow-400 px-5 py-1"> Cancel</button>

        </div>
      
        </div>
         
    </div>
  );
}

export default AddDepartment