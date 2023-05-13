const express = require("express");
const router = express.Router();
const Consultation = require("../models/Consultation");
const PatientDossier = require("../models/PatientDossier");

// Create a consultation
router.post("/", async (req, res) => {
  try {
    const consultation = await Consultation.create(req.body);
    const dossier = await PatientDossier.findById(req.body.patientDossier);
    dossier.consultations.push(consultation._id);
    await dossier.save();
    res.status(201).json(consultation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all consultations
router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find();
    // .populate(
    //   "patient patientDossier"
    // );
    res.json(consultations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific consultation
router.get("/:id", async (req, res) => {
  try {
    const consultation = await Consultation.findById(req.params.id);
    // .populate(
    //   "patient patientDossier"
    // );
    if (!consultation) {
      return res.status(404).json({ error: "Consultation not found" });
    }
    res.json(consultation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a consultation
router.put("/:id", async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    // .populate("patient patientDossier");
    if (!consultation) {
      return res.status(404).json({ error: "Consultation not found" });
    }
    res.json(consultation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a consultation
router.delete("/:id", async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndDelete(req.params.id);
    // .populate("patient patientDossier");
    if (!consultation) {
      return res.status(404).json({ error: "Consultation not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
