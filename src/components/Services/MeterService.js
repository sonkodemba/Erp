import {axios} from 'axios';
import GlobalEndPoint from "./GlobalEndPoint";


class MeterService{

    all(){
        return axios.get(GlobalEndPoint.list_of_meter);
    }
    create(meter){
        return axios.post(GlobalEndPoint.create_meter, meter);
    }

    update(meter, id){

    }
    show(id){

    }
    delete(id){

    }

}
export default new MeterService();
