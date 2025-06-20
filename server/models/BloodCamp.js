// models/BloodCamp.js
const mongoose = require('mongoose');

const BloodCampSchema = new mongoose.Schema({
  organizationType: {
    type: String,
    required: true
  },
  organizationName: {
    type: String,
    required: true
  },
  contactPerson: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  preferredDate: {
    type: Date,
    required: true
  },
  participants: {
    type: String
  },
  additionalRequirements: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BloodCamp', BloodCampSchema);
