const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

module.exports = (req, res, next) => {
  if (req.user !== undefined) {
    const token = jwt.sign({
      userId: req.user.id
    }, keys.session.cookieKey, {
      expiresIn: 30
    });

    res.cookie('authToken', token, { maxAge: 30 * 1000 });
  }

  next();
}