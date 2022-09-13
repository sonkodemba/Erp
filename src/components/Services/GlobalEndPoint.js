

class GlobalEndPoint{

    Base_Url = "localhost:8080/api/v1/user/create";
    update_User = "localhost:8080/api/v1/user/update/{id}";
    delete_user = "localhost:8080/api/v1/user/delete/{id}";
    list_user = "localhost:8080/api/v1/user"

}

export default new GlobalEndPoint();