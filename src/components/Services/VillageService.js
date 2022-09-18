import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";

class VillageService{

    /**
     * @endPoint localhost:8080/api/v1/villages
     * @returns Collection<Vilage>
     */
    index(){}

    /**
     * 
     * @param {*} village 
     * @return http://localhost:8080/api/v1/village/create
     */
    create(village){
        return axios.post(GlobalEndPoint.create_village_uri, village);
    }

    /**
     * 
     * @param {*} village 
     * @param {*} id localhost:8080/api/v1/village/update 
     *@return
    */
    update(village, id){
        return axios.put(GlobalEndPoint.create_village_uri, village, id);
    }

    /**
     * 
     * @param {*} id
     * @return http://localhost:8080/api/v1/village/delete 
     */
    delete(id){
        return axios.delete(GlobalEndPoint.delete_village_uri, id);
    }

} export default new VillageService();

