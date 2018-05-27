const routes = require('express').Router();
const passport = require('passport');
const attachTokenIfUserExists = require('../../middleware/attachTokenIfUserExists');

routes.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

routes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

routes.get('/google/redirect', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  attachTokenIfUserExists,
  (req, res) => {
    req.session = null;
    res.redirect('/');
});

module.exports = routes;