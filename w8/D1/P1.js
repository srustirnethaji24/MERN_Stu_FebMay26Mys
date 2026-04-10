// Connecting to MongoDb to NodeJS using Mongoose and defining Schema & models
const mongoose = require ("mongoose");

async function main() {
    try {
       await mongoose.connect("mongodb://localhost:27017/abcmern");
       console.log("MongoDB connected successfully");

       const userSchema = new mongoose.Schema({
        name: String, age: Number, role: String
       });

       const user = mongoose.model ("User",userSchema);

       console.log("Mongoose schema & model created successfully");
       console.log("Model name:",User.modelName);

       await mongoose.connection.close();
       console.log("connection closed");
    } catch (error) {
        console.log("Failed to connect to DB",error.message);
    }
}

main();