
import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";

class RateService{

    /**
     * @return http://server_ipAddress:8080/api/v1/rates
     */
    index(){
        return axios.get(GlobalEndPoint.listOfZones_uri);
    }

    create(){

    }

}export default new RateService();