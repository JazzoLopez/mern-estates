const response ={
    result:null,
    response : false,
    message:"Error inesperado",

    setRespose(response, message){
        this.response = response;
        this.message = message;

    }
}

export default response;