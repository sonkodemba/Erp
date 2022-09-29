

class GlobalEndPoint{

    ipProtocol ="http://localhost:8080/api/v1";

    create_user_uri = "http://localhost:8080/api/v1/user/create";
    update_User_uri = "http://localhost:8080/api/v1/user/update/id";
    delete_user_uri = "http://localhost:8080/api/v1/user/delete/id";
    list_users_uri = "http://localhost:8080/api/v1/users";

    // Zone End points.
    create_zone_uri = "http://localhost:8080/api/v1/zone/create";
    update_zone_uri = "http://localhost:8080/api/v1/zone/update";
    delete_zone_uri = "http://localhost:8080/api/v1/zone/delete/id";
    listOfZones_uri =  "http://localhost:808/api/v1/zones";

    //customer
    create_customer_uri = "http://localhost:8080/api/v1/customer/create";
    update_customer_uri = "http://localhost:8080/api/v1/customer/update/id";
    delete_customer_uri = "http://localhost:8080/api/v1/customer/delete/id";
    list_of_customer_uri = "http://localhost:8080/api/v1/customers";


    //consumption
    create_consumption_uri = "http://localhost:8080/api/v1/consumption/create";
    update_consumption_uri = "http://localhost:8080/api/v1/consumption/update/id";
    delete_consumption_uri = "http://localhost:8080/api/v1/consumption/delete/id";
    list_of_consumptions_uri = "http://localhost:8080/api/v1/consumptions";

    //village EndPoints
    create_village_uri = "http://localhost:8080/api/v1/villages";
    update_village_uri = "http://localhost:8080/api/v1/village/update/id";
    delete_village_uri = "http://localhost:8080/api/v1/village/delete/id";
    list_of_villages_uri = "http://localhost:8080/api/v1/villages";


   //Reading EndPoints
   create_reading = "http://localhost:8080/api/v1/reading/create";
   update_reading = "http://localhost:8080/api/v1/reading/update/id";
   delete_reading = "http://localhost:8080/api/v1/reading/delete/id";
   list_of_readings = "http://localhost:8080/api/v1/readings";


   //meterCategory EndPoints

   create_meter_category = "http://localhost:8080/api/v1/meter-category/create";
   update_meter_category = "http://localhost:8080/api/v1/meter-category/update/id";
   delete_meter_category = "http://localhost:8080/api/v1/meter-category/delete/id";
   list_of_meter_categories = "http://localhost:8080/api/v1/meter-categories";

   //meter
   create_meter = "http://localhost:8080/api/v1meter/create";
   update_meter_uri = "http://localhost:8080/api/v1/meter/update/id";
   delete_meter_uri = "http://localhost:8080/api/v1/meter/delete/id";
   list_of_meters_uri = "http://localhost:8080/api/v1/meters";

   //Rates EndPoints

   create_rate_uri = "http://localhost:8080/api/v1/rate/create";
   update_rate_uri = "http://localhost:8080/api/v1/update/id";
   deletee_rate_uri = "http://localhost:8080/api/v1/rate/delete/id";
   list_of_rates_iro = "http://localhost:8080/api/v1/rates";

   //payment Endpoints

   create_payment_uri = "http://localhost:8080/api/v1/pay/create";
   update_payment_uri = "http://localhost:8080/api/v1/pay/update/id";
   delete_payment_uri = "http://localhost:8080/api/v1/pay/delete/id";
   list_of_payment_uri = "http://localhost:8080/api/v1/pays";
   

}

export default new GlobalEndPoint();