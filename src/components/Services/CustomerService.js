import axios from "axios";
import GlobalEndPoint from "./GlobalEndPoint";


class CustomerService{
   

    /**
     * 
     * @EndPoint: http://localhost:8080/customes 
     * @returns Collection<Customer>
     */
    all(){
        return axios.get(GlobalEndPoint.list_of_customer_uri);
    }

    /**
     * 
     * @EndPoint: http://localhost:8080/customer/create 
     * @returns Customer
     */
    create(customer){
        return axios.post(GlobalEndPoint.create_customer_uri, customer);
    }

      /**
     * 
     * @EndPoint: http://localhost:8080/customer/update/{id} 
     * @returns Customer
     */
    update(customer, id){
        return axios.put(GlobalEndPoint.update_customer_uri, customer, id);
    }

     /**
     * 
     * @EndPoint: http://localhost:8080/customer/delete/{id} 
     * @returns Customer
     */
    delete(id){
        return axios.delete(GlobalEndPoint.delete_customer_uri, id);
    }

}
export default new CustomerService();