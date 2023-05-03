const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  prescription: {
    compliment: {
      type: String,
    },
    dosage: {
      type: String,
    },
    instructions: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
});

module.exports = mongoose.model("Consultation", consultationSchema);
