const mongoose = require("mongoose");

const rendezvousSchema = new mongoose.Schema(
  {
    startAt: { type: Date, required: true },
    endAt: { type: Date, required: true },
    // date: { type: Date, required: true },
    summary: { type: String, required: true },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    status: {
      type: String,
      enum: ["Scheduled", "Cancelled", "Accepted"],
      default: "Scheduled",
    },
    color: { type: String, default: "blue" },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", rendezvousSchema);

module.exports = Appointment;
