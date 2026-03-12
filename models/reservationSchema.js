const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  lab: { type: String, trim: true },
  seat: { type: String, trim: true },
  date: { type: String, trim: true },
  time: { type: String, trim: true },
  purpose: { type: String, trim: true },
  lab_tech: { type: String, trim: true },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Cancelled"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
