const admin = require('firebase-admin');
const keys = require('../config/keys');

admin.initializeApp({
  credential: admin.credential.cert(keys.FireBase.ServiceAccount),
  databaseURL: keys.FireBase.DatabaseConnectionURL
});

module.exports = admin.firestore();