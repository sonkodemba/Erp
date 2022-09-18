
import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";
class ZoneService{

    /**
     * @return http://server_ipaddress:8080/api/v1/zones
     * return axio
     */
         
    index(){
        return axios.get(GlobalEndPoint.listOfZones_uri);
    }

    /**
     * 
     * @param {*} zone 
     * @returns http://server_ipAddress:8080/api/v1/zone/create
     */
    create(zone){
        return axios.post(GlobalEndPoint.create_zone_uri, zone);
    }

    /**
     * 
     * @param {*} zone 
     * @param {*} id 
     * @returns http://server_ipaddress:8080/api/v1/zone/update
     */
    update(zone, id){
        return axios.put(GlobalEndPoint.update_zone_uri, id);
    }


    /**
     * 
     * @param {*} id 
     * @return http://server_ipaddress:8080/api/v1/zone/delete
     */
    delete(id){
    
        return axios.delete(GlobalEndPoint.delete_zone_uri, id);
    }
}

export default new ZoneService();