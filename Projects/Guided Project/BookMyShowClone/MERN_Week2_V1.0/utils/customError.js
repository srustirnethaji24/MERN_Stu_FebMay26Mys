// Custom error class for error handling
class CustomError extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode = statuscode;
    }
}

module.exports = CustomError;