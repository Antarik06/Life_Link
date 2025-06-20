// routes/bloodCampRoutes.js
const express = require('express');
const router = express.Router();
const BloodCamp = require('../models/BloodCamp');

router.post('/', async (req, res) => {
  try {
    console.log("📥 Incoming data:", req.body);

    // Ensure preferredDate is a Date object
    if (req.body.preferredDate) {
      req.body.preferredDate = new Date(req.body.preferredDate);
    }

    const newCamp = new BloodCamp(req.body);
    await newCamp.save();

    console.log("✅ Camp request saved successfully");
    res.status(201).json({ message: 'Camp request submitted' });

  } catch (err) {
    console.error("❌ Submission Error:", err.message);
    if (err.errors) {
      console.error("❗ Validation Errors:", err.errors);
    }
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
