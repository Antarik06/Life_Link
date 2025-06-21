const express = require('express');
const router = express.Router();
const BloodDonation = require('../models/BloodDonation');

router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
  try {
    const donations = await BloodDonation.find().sort({ donatedAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch donation requests.' });
  }
});

module.exports = router;
