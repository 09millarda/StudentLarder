const routes = require('express').Router();
const search = require('./search');

routes.use('/search', search);

module.exports = routes;