const routes = require('express').Router();
const all = require('./all');
const models = require('./models');
const cars = require('./cars');

routes.get('/', all);

routes.use('/models', models);
routes.use('/cars', cars);

module.exports = routes;