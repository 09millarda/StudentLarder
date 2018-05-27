const app = require('express')();
const routes = require('./routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['user']
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

console.log(process.env.NODE_ENV);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port http://localhost:${process.env.PORT}`);  
});