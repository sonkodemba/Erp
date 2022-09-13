import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";


const Base_Url = "localhost:8080/api/v1/user/create";
const update_User = "localhost:8080/api/v1/user/update/{id}";
const delete_user = "localhost:8080/api/v1/user/delete/{id}";
const list_user = "localhost:8080/api/v1/user"




class UserServices{

   

    saveUser(user){
        return axios.post(GlobalEndPoint, user);
    }

  

}

export default  new UserServices();