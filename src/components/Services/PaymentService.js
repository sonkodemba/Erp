import {axios} from 'axios';
import GlobalEndPoint from './GlobalEndPoint';

class PaymentService{

     /**
     * 
     * @EndPoint: http://localhost:8080/customes 
     * @returns Collection<Customer>
     */
   all(){
    return axios.get(GlobalEndPoint.list_of_payment_uri);
   }


    /**
     * 
     * @EndPoint: http://localhost:8080/customes 
     * @returns Collection<Payments>
     */
   
   create(payment){
    return axios.post(GlobalEndPoint.create_payment_uri, payment);
   }

 /**
     * 
     * @EndPoint: http://localhost:8080/pay 
     * @returns Payment
     */
   
   update(paymet, id){
    return axios.put(GlobalEndPoint.update_payment_uri, id);
   }

     /**
     * 
     * @EndPoint: http://localhost:8080/pay/delete 
     * @returns Payment
     */
   
   delete(id){
    return axios.delete(GlobalEndPoint.delete, id);

   }


}export default new PaymentService();