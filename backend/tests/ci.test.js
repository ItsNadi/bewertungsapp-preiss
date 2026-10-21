const test = require('node:test');
const assert = require('node:assert/strict');
const pkg = require('../package.json');

test('Das Backend besitzt ein Startskript', () => {
  assert.equal(pkg.scripts.start, 'node index.js');
});

test('Express ist als Abhaengigkeit eingetragen', () => {
  assert.ok(pkg.dependencies.express, 'Express muss installiert sein');
});

test('Die Paketdatei hat einen gueltigen Namen', () => {
  assert.equal(pkg.name, 'backend');
});
