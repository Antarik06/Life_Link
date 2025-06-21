const express = require('express');
const router = express.Router();
const BloodDonation = require('../models/BloodDonation');

router.post('/donations', async (req, res) => {
  try {
    const { name, bloodType, phone, center } = req.body;

    const newDonation = new BloodDonation({
      name,
      bloodType,
      phone,
      center,
    });

    await newDonation.save();
    res.status(201).json({ message: 'Thank you for your donation request!' });
  } catch (error) {
    console.error('Error saving blood donation:', error);
    res.status(500).json({ message: 'Failed to submit donation request.' });
  }
});

module.exports = router;
