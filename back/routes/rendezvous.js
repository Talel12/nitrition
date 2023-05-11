const express = require("express");
const router = express.Router();
const Appointment = require("../models/RendezVous");
const User = require("../models/User");

// CREATE new appointment
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment({ ...req.body });
    const savedAppointment = await appointment.save();
    // Add appointment ID to user model
    const user = await User.findById(req.body.patient);
    user.rendezvous.push(savedAppointment._id);
    await user.save();
    res.status(201).json(savedAppointment);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

// READ all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("patient");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ one appointment
router.get("/:id", getAppointment, (req, res) => {
  res.json(res.appointment);
});

// UPDATE appointment
router.put("/:id", async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json(updatedAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE appointment
router.delete("/:id", getAppointment, async (req, res) => {
  try {
    await res.appointment.remove();
    res.json({ message: "Deleted appointment" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single appointment by ID
async function getAppointment(req, res, next) {
  let appointment;
  try {
    appointment = await Appointment.findById(req.params.id);
    if (appointment == null) {
      return res.status(404).json({ message: "Cannot find appointment" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.appointment = appointment;
  next();
}

module.exports = router;
