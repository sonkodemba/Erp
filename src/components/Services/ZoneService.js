
import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";
class ZoneService{

    saveZon(zone){
        return axios.post(GlobalEndPoint.Base_Url, zone);
    }
}

export default new ZoneService();