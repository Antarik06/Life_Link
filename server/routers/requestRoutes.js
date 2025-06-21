const express = require('express');
const router = express.Router();
const BloodRequest = require('../models/BloodRequest');

// POST /api/requests
router.post('/', async (req, res) => {
  try {
    const { name, phone, bloodType, location, reason } = req.body;

    const request = new BloodRequest({ name, phone, bloodType, location, reason });
    await request.save();

    res.status(201).json({ message: 'Blood request submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to submit blood request' });
  }
});

// GET /api/requests
router.get('/', async (req, res) => {
  try {
    const requests = await BloodRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch requests' });
  }
});

module.exports = router;
