const express = require('express');
const router = express.Router();
const BloodRequest = require('../models/BloodRequest');

// POST - Create a new blood request
router.post('/', async (req, res) => {
  try {
    const newRequest = new BloodRequest(req.body);
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET - List all blood requests
router.get('/', async (req, res) => {
  try {
    const requests = await BloodRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const requests = await BloodRequest.find().sort({ requestedAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch blood requests.' });
  }
});

module.exports = router;
