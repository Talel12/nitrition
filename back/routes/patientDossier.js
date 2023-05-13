const express = require("express");
const router = express.Router();
const PatientDossier = require("../models/PatientDossier");
const User = require("../models/User");

// Create a patient dossier
router.post("/", async (req, res) => {
  try {
    const patientDossier = await PatientDossier.create(req.body);
    const user = await User.findById(req.body.patient);
    user.dossier = patientDossier._id;
    await user.save();
    res.status(201).json(patientDossier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all patient dossiers
router.get("/", async (req, res) => {
  try {
    const patientDossiers = await PatientDossier.find();
    res.json(patientDossiers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific patient dossier
router.get("/:id", async (req, res) => {
  try {
    const patientDossier = await PatientDossier.findById(
      req.params.id
    ).populate("consultations");
    if (!patientDossier) {
      return res.status(404).json({ error: "Patient dossier not found" });
    }
    res.json(patientDossier);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a patient dossier
router.put("/:id", async (req, res) => {
  try {
    const patientDossier = await PatientDossier.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!patientDossier) {
      return res.status(404).json({ error: "Patient dossier not found" });
    }
    res.json(patientDossier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a patient dossier
router.delete("/:id", async (req, res) => {
  try {
    const patientDossier = await PatientDossier.findByIdAndDelete(
      req.params.id
    );
    if (!patientDossier) {
      return res.status(404).json({ error: "Patient dossier not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
