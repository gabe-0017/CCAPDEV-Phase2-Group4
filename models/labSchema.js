const mongoose = require("mongoose");

const labSchema = new mongoose.Schema({
    laboratory: String,
    seat: [String]
    /* laboratory technician field (lab_tech) */
});

module.exports = mongoose.model("Lab", labSchema);
