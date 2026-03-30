const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Student", "Lab Technician"],
        default: 'Student'
    },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservation"
    }],
    profilePicture: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("User", userSchema);
