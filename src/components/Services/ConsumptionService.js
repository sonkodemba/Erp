import GlobalEndPoint from "./GlobalEndPoint";
import axios from 'axios';


class ConsumptionService{


    
    /**
     * 
     * @EndPoint: http://localhost:8080/consumptions 
     * @returns Collection<Consumption>
     */
    all(){
        return axios.get(GlobalEndPoint.list_of_consumptions_uri);
    }

     /**
     * 
     * @EndPoint: http://localhost:8080/consumption/create 
     * @returns Consumption
     */
    create(consumption){
        return axios.post(GlobalEndPoint.create_consumption_uri, consumption);
    }

     /**
     * 
     * @EndPoint: http://localhost:8080/consumption/update 
     * @returns Comsumption
     */
     update(consumption, id){
        return axios.put(GlobalEndPoint.update_consumption_uri, id);
     }

      /**
     * 
     * @EndPoint: http://localhost:8080/consumption/delete 
     * @returns Consumption
     */
    delete(id){
        return axios.delete(GlobalEndPoint.delete_consumption_uri, id);
    }




} export default new ConsumptionService();