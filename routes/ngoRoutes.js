// routes/ngoRoutes.js
const express = require('express');
const router = express.Router();
const NGO = require('../models/NGO'); // Correct relative path

// GET all NGOs
router.get('/all', async (req, res) => {
  try {
    const ngos = await NGO.find();
    res.json(ngos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch NGOs' });
  }
});

// POST new NGO
router.post('/add', async (req, res) => {
  try {
    const newNGO = new NGO(req.body);
    await newNGO.save();
    res.status(201).json(newNGO);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add NGO', details: err.message });
  }
});

module.exports = router;
