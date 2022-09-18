import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";

class UserService{
    
    /**
     * 
     * @returns http://localhost:8080/api/v1/users
     */
    all(){
        return axios.get(GlobalEndPoint.list_users_uri);
    }
    
    /**
     * 
     * @param {*} user 
     * @returns http://localhost:8080/api/v1/user/create
     */
    crete(user){
        return axios.post(GlobalEndPoint.create_user_uri, user);
    }
   
    /**
     * 
     * @param {*} user 
     * @param {*} id 
     * @returns http://localhost:8080/api/v1/user/update
     */
    update(user, id){
        return axios.put(GlobalEndPoint.update_User_uri, user, id);
    }

    /**
     * 
     * @param {*} id
     * @returns http://localhost:8080/api/v1/user/delete 
     */
    delete(id){
        return axios.delete(GlobalEndPoint.delete_user_uri, id);
    }

  

}   

export default  new UserService();