const express = require('express');
const router = express.Router();
const db = require('../models');

const { Criterion } = db;

router.post('/', async (req, res) => {
  const { name, maxScore, weight } = req.body;

  if (!name || maxScore === undefined || weight === undefined) {
    return res.status(400).json({
      error: 'name, maxScore und weight sind Pflichtfelder'
    });
  }

  const criterion = await Criterion.create({
    name,
    maxScore,
    weight
  });

  res.status(201).json(criterion);
});

module.exports = router;