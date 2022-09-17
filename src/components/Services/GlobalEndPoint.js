

class GlobalEndPoint{

    ipProtocol ="http://localhost:8080/api/v1";

    create_user_uri = this.ipProtocol+"/user/create";
    update_User_uri = this.ipProtocol+"/user/update/{id}";
    delete_user_uri = "http://localhost:8080/api/v1/user/delete/{id}";
    list_users_uri = "http://localhost:8080/api/v1/users";

    // Zone End points.
    create_zone_uri = this.ipprotocol+"zone/create";
    update_zone_uri = this.ipprotocol+"zone/update";
    delete_zone_uri = this.ipprotocol+"zone/delete/id";
    listOfZones_uri =  "http://localhost:808/api/v1/zones";

    //customer
    create_customer_uri = this.ipprotocol+"customer/create";
    update_customer_uri = this.ipprotocol+"customer/update/id";
    delete_customer_uri = this.ipprotocol+"customer/delete/id";
    list_of_customer_uri = this.ipprotocol+"customers";


    //consumption
    create_consumption_uri = this.ipprotocol+"consumption/create";
    update_consumption_uri = this.ipprotocol+"consumption/update/id";
    delete_consumption_uri = this.ipprotocol+"consumption/delete/id";
    list_of_consumptions_uri = this.ipprotocol+"consumptions";

    //village EndPoints
    create_village_uri = this.ipprotocol+"villages";
    update_village_uri = this.ipprotocol+"village/update/id";
    delete_village_uri = this.ipprotocol+"village/delete/id";
    list_of_villages_uri = this.ipprotocol+"villages";


   //Reading EndPoints
   create_reading = this.ipprotocol+"reading/create";
   update_reading = this.ipprotocol+"reading/update/id";
   delete_reading = this.ipprotocol+"reading/delete/id";
   list_of_readings = this.ipprotocol+"readings";


   //meterCategory EndPoints

   create_meter_category = this.ipprotocol+"meter-category/create";
   update_meter_category = this.ipprotocol+"meter-category/update/id";
   delete_meter_category = this.ipprotocol+"meter-category/delete/id";
   list_of_meter_categories = this.ipprotocol+"meter-categories";

   //meter
   create_meter = this.ipprotocol+"meter/create";
   update_meter_uri = this.ipprotocol+"meter/update/id";
   delete_meter_uri = this.ipprotocol+"meter/delete/id";
   list_of_meters_uri = this.ipprotocol+"meters";

   //Rates EndPoints

   create_rate_uri = this.ipProtocol+"/rate/create";
   update_rate_uri = this.ipProtocol+"/update/id";
   deletee_rate_uri = this.iprotocol+"/rate/delete/id";
   list_of_rates_iro = this.ipprotocol+"/rates";

   //payment Endpoints

   create_payment_uri = this.ipProtocol+"/pay/create";
   update_payment_uri = this.ipProtocol+"/pay/update/id";
   delete_payment_uri = this.ipProtocol+"/pay/delete/id";
   list_of_payment_uri = this.ipProtocol+"/pays";
   

}

export default new GlobalEndPoint();