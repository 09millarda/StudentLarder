const routes = require('express').Router();
const search = require('./search');
const auth = require('./auth');
const ensureUserIsLoggedIn = require('../middleware/ensureUserIsLoggedIn');

routes.use('/search', search);
routes.use('/auth', auth);

routes.get('/protected', ensureUserIsLoggedIn, (req, res) => {
  res.json({
    'text': 'this is a protected page',
    'userId': `Your user id = ${req.data.userId}`
  });
});

module.exports = routes;