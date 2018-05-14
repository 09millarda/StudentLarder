const models = require('express').Router();
const all = require('./all');
const single = require('./single');

models.get('/', all);
models.get('/:id', single);

module.exports = models;