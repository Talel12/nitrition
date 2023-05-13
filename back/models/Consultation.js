const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  patientDossier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PatientDossier",
    required: true,
  },
  poid: {
    type: String,
    required: true,
  },
  taille: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  prescription: [
    {
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
        type: String,
      },
      endDate: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Consultation", consultationSchema);
