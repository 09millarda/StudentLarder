const routes = require('express').Router();
const top = require('./top');
const trending = require('./trending');
const ingredients = require('./ingredients');
const single = require('./single');

routes.use('/top', top);
routes.use('/trending', trending);
routes.use('/r/:recipeId', single);
routes.use('/q/:ingredients', ingredients);

module.exports = routes;