import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";






class UserServices{

   

    saveUser(user){
        return axios.post(GlobalEndPoint.Base_Url, user);
    }
    saveDepartment(departments){
        return axios.post("http://localhost:8080/api/v1/department/create", departments);
    }

  

}   

export default  new UserServices();