const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    lab: String,
    date: String,
    time: String,
    purpose: String,
    status: {
        type: String,
        default: "Pending"
    }
});

module.exports = mongoose.model("Reservation", reservationSchema);
