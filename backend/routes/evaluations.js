const express = require('express');
const router = express.Router();
const db = require('../models');

const { Evaluation, Project, Criterion, Juror } = db;

// neue Bewertung anlegen
router.post('/', async (req, res) => {
  const { projectId, criterionId, jurorId, score, comment } = req.body;

  if (!projectId || !criterionId || !jurorId || score === undefined) {
    return res.status(400).json({
      error: 'projectId, criterionId, jurorId und score sind Pflichtfelder'
    });
  }

  const project = await Project.findByPk(projectId);
  const criterion = await Criterion.findByPk(criterionId);
  const juror = await Juror.findByPk(jurorId);

  if (!project) {
    return res.status(404).json({ error: 'Projekt nicht gefunden' });
  }

  if (!criterion) {
    return res.status(404).json({ error: 'Kriterium nicht gefunden' });
  }

  if (!juror) {
    return res.status(404).json({ error: 'Juror nicht gefunden' });
  }

  const evaluation = await Evaluation.create({
    projectId,
    criterionId,
    jurorId,
    score,
    comment
  });

  res.status(201).json(evaluation);
});

const { fn, col } = require('sequelize');

router.get('/project/:projectId/average', async (req, res) => {
  const ergebnis = await Evaluation.findAll({
    where: {
      projectId: req.params.projectId
    },
    attributes: [
      'criterionId',
      [fn('AVG', col('score')), 'durchschnitt']
    ],
    group: ['criterionId']
  });

  res.json(ergebnis);
});

module.exports = router;