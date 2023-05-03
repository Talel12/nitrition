const express = require("express");
const router = express.Router();
const PatientDossier = require("../models/patientDossier");

// GET all patient dossiers
router.get("/", async (req, res) => {
  try {
    const patientDossiers = await PatientDossier.find();
    res.json(patientDossiers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one patient dossier by ID
router.get("/:id", getPatientDossier, (req, res) => {
  res.json(res.patientDossier);
});

// CREATE a patient dossier
router.post("/", async (req, res) => {
  const patientDossier = new PatientDossier({
    patient: req.body.patient,
    consultations: req.body.consultations,
    NCarnet: req.body.NCarnet,
    notes: req.body.notes,
  });

  try {
    const newPatientDossier = await patientDossier.save();
    res.status(201).json(newPatientDossier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a patient dossier
router.patch("/:id", getPatientDossier, async (req, res) => {
  if (req.body.patient != null) {
    res.patientDossier.patient = req.body.patient;
  }
  if (req.body.consultations != null) {
    res.patientDossier.consultations = req.body.consultations;
  }
  if (req.body.NCarnet != null) {
    res.patientDossier.NCarnet = req.body.NCarnet;
  }
  if (req.body.notes != null) {
    res.patientDossier.notes = req.body.notes;
  }

  try {
    const updatedPatientDossier = await res.patientDossier.save();
    res.json(updatedPatientDossier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a patient dossier
router.delete("/:id", getPatientDossier, async (req, res) => {
  try {
    await res.patientDossier.remove();
    res.json({ message: "Patient dossier deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a patient dossier by ID
async function getPatientDossier(req, res, next) {
  let patientDossier;
  try {
    patientDossier = await PatientDossier.findById(req.params.id);
    if (patientDossier == null) {
      return res.status(404).json({ message: "Cannot find patient dossier" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.patientDossier = patientDossier;
  next();
}

module.exports = router;
