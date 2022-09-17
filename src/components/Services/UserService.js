import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";
 




class UserService{
    
    getUsers(){
        return axios.get("http://localhost:8080/api/v1/users")
    }
    
    saveUser(user){
        return axios.post(GlobalEndPoint.create_user_uri, user);
    }
   

  

}   

export default  new UserService();