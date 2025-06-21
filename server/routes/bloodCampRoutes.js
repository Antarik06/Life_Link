// routes/bloodCampRoutes.js
const express = require('express');
const router = express.Router();
const BloodCamp = require('../models/BloodCamp');

// POST: Submit new blood camp
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

// ✅ GET: Fetch all blood camps for admin dashboard
router.get('/', async (req, res) => {
  try {
    const camps = await BloodCamp.find().sort({ preferredDate: -1 });
    res.status(200).json(camps);
  } catch (err) {
    console.error("❌ Fetch Error:", err.message);
    res.status(500).json({ message: 'Failed to fetch blood camps.' });
  }
});

module.exports = router;
