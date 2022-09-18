import {axios} from 'axios';
import GlobalEndPoint from "./GlobalEndPoint";


class MeterService{

    /**
     * @path: http://server_ipAddress:8080/api/v1/meters
     * @returns {Collection<Meters>}
     */
    all(){
        return axios.get(GlobalEndPoint.list_of_meter);
    }

    /**
     * @path: http://server_ipAddress:8080/api/v1/meter/create
     * @param {*} meter 
     * @returns {Meter}
     */
    create(meter){
        return axios.post(GlobalEndPoint.create_meter, meter);
    }

    /**
     * 
     * @param {*} meter 
     * @param {*} id 
     * @path http://server_ipAddress:8080/api/v1/meter/update
     */
    update(meter, id){
        return axios.put(GlobalEndPoint.update_meter_uri, meter, id);

    }

    /**
     * 
     * @param {*} id
     * @path http://server_ipAddress:8080/api/v1/meter/show 
     */
    show(id){
        return axios.get(GlobalEndPoint.show_meter_uri);
    }

    /**
     * 
     * @param {*} id
     * @path http://server_ipAddress:8080/api/v1/meter/delete 
     */
    delete(id){
        return axios.delete(GlobalEndPoint.delete_meter_uri, id);
    }

}
export default new MeterService();
