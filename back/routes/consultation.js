const express = require("express");
const router = express.Router();
const Consultation = require("../models/consultation");

// Récupérer toutes les consultations
router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find();
    res.json(consultations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Récupérer une consultation
router.get("/:id", getConsultation, (req, res) => {
  res.json(res.consultation);
});

// Créer une nouvelle consultation
router.post("/", async (req, res) => {
  const consultation = new Consultation({
    patient: req.body.patient,
    date: req.body.date,
    duration: req.body.duration,
    reason: req.body.reason,
    notes: req.body.notes,
    prescription: req.body.prescription,
  });

  try {
    const newConsultation = await consultation.save();
    res.status(201).json(newConsultation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Mettre à jour une consultation
router.patch("/:id", getConsultation, async (req, res) => {
  if (req.body.patient != null) {
    res.consultation.patient = req.body.patient;
  }
  if (req.body.date != null) {
    res.consultation.date = req.body.date;
  }
  if (req.body.duration != null) {
    res.consultation.duration = req.body.duration;
  }
  if (req.body.reason != null) {
    res.consultation.reason = req.body.reason;
  }
  if (req.body.notes != null) {
    res.consultation.notes = req.body.notes;
  }
  if (req.body.prescription != null) {
    res.consultation.prescription = req.body.prescription;
  }

  try {
    const updatedConsultation = await res.consultation.save();
    res.json(updatedConsultation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Supprimer une consultation
router.delete("/:id", getConsultation, async (req, res) => {
  try {
    await res.consultation.remove();
    res.json({ message: "Consultation supprimée" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware pour récupérer une consultation par ID
async function getConsultation(req, res, next) {
  try {
    const consultation = await Consultation.findById(req.params.id);
    if (consultation == null) {
      return res.status(404).json({ message: "Consultation non trouvée" });
    }
    res.consultation = consultation;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
