import axios from 'axios';
import GlobalEndPoint from './GlobalEndPoint';
class ReadingService{

    /**
     * 
     * @http://localhost:8080/api/v1/readings
     */
    index(){
        return axios.get(GlobalEndPoint.list_of_readings);

    }

    /**
     * 
     * @param {*} reading 
     * @http://localhost:8080/api/v1/reading/create
     */
    create(reading){
        return axios.post(GlobalEndPoint.create_reading, reading);
    }

    /**
     * 
     * @param {*} reading 
     * @param {*} id 
     * @returns http://localhost:8080/api/v1/reading/update
     */
    update(reading, id){
        return axios.put(GlobalEndPoint.update_reading, reading,id);
    }

    /**
     * 
     * @param {*} id
     * @returns http://localhost:8080/api/v1/reading/delete 
     */
    delete(id){
        return axios.delete(GlobalEndPoint.delete_reading, id);
    }


    
}
export default new ReadingService();