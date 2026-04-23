const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true,
    },
    showId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"show",
        required:true,
        index:true
    },
    seats:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["booked","cancelled"],
        default:"booked",
        index:true,
    },
    bookingTime:{
        type:Date,
        default:Date.now(),
    },
},
{
    timestamps:true,
});

// Add Validation
bookingSchema.pre("save",function () {
    if (this.seats.length === 0) {
        throw new Error("At Least One Seat Must Be Selected");
    }
    if (this.totalSeats!=this.seats.length) {
         throw new Error("Seat Count Mismatch");
    }
});

// Compound Index

bookingSchema.index({userId:1,showId:1});

module.exports = mongoose.model("Booking",bookingSchema);