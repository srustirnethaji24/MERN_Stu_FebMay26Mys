// Bsics of embedding and referencing
const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");

        const orederSchema = new mongoose.Schema({
            product: String, price: Number
        });
        const userSchema = new mongoose.Schema({
            name: String, oreders: [orederSchema] // Embedded document 
        });
        const User = mongoose.model("User", userSchema);
        const embeddedUser = await User.create({
            name: "Srusti",
            oreders: [
                { product: " Laptop ", price: 50000 },
                { product: " Printer ", price: 10000 },
                { product: " Projector ", price: 70000 },
            ]
        });
        console.log("Users :\n");
        // console.log(embeddedUser);
        // console.log(await User.find());
        const users = await User.find().lean();
        console.log(JSON.stringify(users,null,2));

        // Referencing
        const userRefSchema = new mongoose.Schema({
            name:String
        });
        const orederRefSchema = new mongoose.Schema({
            product: String, price: Number,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "UserRef"
            }
        });
        const UserRef = mongoose.model("UserRef",userRefSchema);
        const OrderRef = mongoose.model("OrderRef",orederRefSchema);

        const refUser = await UserRef.create({name: "lokesh"});
        await OrderRef.create([
            { product: "Mobile", price: 20000, user: refUser._id },
            { product: "Charger", price: 30000, user: refUser._id }
        ]);
        console.log(" Referenced Orders ");
        console.log(await OrderRef.find().populate("user")); // populate is used to replace by the actual data 
    } catch (error) {
        console.error("Error:", error.message);
    }
    finally {
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();