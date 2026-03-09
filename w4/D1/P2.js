function parseconfig(text){
    try{
        let config = JSON.parse(text);
        return config;
    }
    catch(err){
        console.log("Error parsing config: ",err.message);
            return null;
    }
    finally{
         console.log("Finally block executed.");
    }
}
parseconfig('{"theme":"dark"}');
parseconfig('{"theme"}');