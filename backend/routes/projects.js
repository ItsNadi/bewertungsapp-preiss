const express = require('express');
const router = express.Router();
const db = require('../models');

const { Project } = db;

// alle Projekte
router.get('/', async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

// ein Projekt per ID
router.get('/:id', async (req, res) => {
  const project = await Project.findByPk(req.params.id);

  if (!project) {
    return res.status(404).json({ error: 'Projekt nicht gefunden' });
  }

  res.json(project);
});

// neues Projekt anlegen
router.post('/', async (req, res) => {
  const { teamId, titel, beschreibung, praesentationsdatum } = req.body;

  if (!teamId || !titel || !praesentationsdatum) {
    return res.status(400).json({
      error: 'teamId, titel und praesentationsdatum sind Pflichtfelder'
    });
  }

  const project = await Project.create({
    teamId,
    titel,
    beschreibung,
    praesentationsdatum
  });

  res.status(201).json(project);
});

// Projekt aktualisieren
router.put('/:id', async (req, res) => {
  const project = await Project.findByPk(req.params.id);

  if (!project) {
    return res.status(404).json({ error: 'Projekt nicht gefunden' });
  }

  await project.update(req.body);
  res.json(project);
});

// Projekt löschen
router.delete('/:id', async (req, res) => {
  const project = await Project.findByPk(req.params.id);

  if (!project) {
    return res.status(404).json({ error: 'Projekt nicht gefunden' });
  }

  await project.destroy();
  res.status(204).send();
});

module.exports = router;