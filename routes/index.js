const routes = require('express').Router();
const api = require('./api');
const path = require('path');

routes.use('/api', api);

routes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/closeWindow.html'));
});

module.exports = routes;