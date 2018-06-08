const app = require('express')();
const routes = require('./routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://dev.studentlarder.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['user']
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

app.listen(5000, () => {
  console.log(`App listening on port http://localhost:5000`);  
});