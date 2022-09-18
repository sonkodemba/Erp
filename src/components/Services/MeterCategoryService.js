import { axios } from "axios";
import GlobalEndPoint from "./GlobalEndPoint";
class MeterService{

    getMeters(){
        return axios.get(GlobalEndPoint.list_of_meters_uri);
    }

    create(meter){
        return axios.post(GlobalEndPoint.create_meter,meter);
    }


}
export default new MeterService();