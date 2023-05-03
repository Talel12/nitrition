const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({

  img: {
    type: String,
    default:
      "https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/ava-1.png",
  },
  name: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "patient",
  },
  CIN: {
    type: String,
    required: false,
    default: ""
  },
  rendezvous: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  dossier:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "PatientDossier",
  },
});

module.exports = mongoose.model("user", UserSchema);
