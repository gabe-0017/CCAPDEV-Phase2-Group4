const mongoose = require("mongoose");

const labSchema = new mongoose.Schema({
    lab: {
        type: String,
        required: true,
        trim: true
    },
    seat: {
        type: [String],
        required: true
    },
    lab_tech: { // need to ensure that the user has role = "Lab Technician" later...
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }
});

module.exports = mongoose.model("Lab", labSchema);
