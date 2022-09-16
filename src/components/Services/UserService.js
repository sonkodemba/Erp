import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";
 




class UserService{
    
    getUsers(){
        return axios.get(GlobalEndPoint.list_user)
    }
    
    saveUser(user){
        return axios.post(GlobalEndPoint.Base_Url, user);
    }
   

  

}   

export default  new UserService();