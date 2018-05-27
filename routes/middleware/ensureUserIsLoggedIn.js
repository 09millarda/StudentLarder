const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

module.exports = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, keys.session.cookieKey, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const now = new Date().getTime() / 1000;
        const exp = data.exp;

        if (now > exp) {
          res.sendStatus(403);
        } else {
          req.data = data;
          next();
        }
      }      
    });
  } else {
    res.sendStatus(403);
  }
}