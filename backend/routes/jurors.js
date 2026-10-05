const express = require('express');
const router = express.Router();
const db = require('../models');

const { Juror } = db;

router.post('/', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: 'name und email sind Pflichtfelder'
    });
  }

  const juror = await Juror.create({
    name,
    email
  });

  res.status(201).json(juror);
});

module.exports = router;