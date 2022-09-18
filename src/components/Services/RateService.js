
import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";

class RateService{

    /**
     * @path http://server_ipAddress:8080/api/v1/rates
     * @return: Collection<Rate>
     */
    index(){
        return axios.get(GlobalEndPoint.listOfZones_uri);
    }

    /**
     * 
     * @param {*} rate 
     * @path http://server_ipAddress:8080/api/v1/rate/create
     * @returns {Rate}
     */
    create(rate){
        return axios.post(GlobalEndPoint.list_of_rates_iro, rate);
    }

    /**
     * 
     * @param {*} rate 
     * @param {*} id
     * @path: http://server_ipAddress:8080/api/v1/rate/update
     * @return {UpdatedRate}
     */
    update(rate, id){
        return axios.put(GlobalEndPoint.update_rate_uri, rate, id);
    }

    /**
     * 
     * @param {*} id 
     * @returns {deletedRate}
     * @path: http://server_ipAddress:8080/api/v1/rate/delete
     */
    delete(id){
        return axios.delete(GlobalEndPoint.deletee_rate_uri, id);
    }

}export default new RateService();