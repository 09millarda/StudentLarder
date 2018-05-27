const keys = require('./keys');
const UserModel = require('../models/user-model');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const db = require('../database/index');

const classToModel = require('../helpers/classToModel');
const autoMapper = require('../helpers/autoMapper');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const usersRef = db.collection('users').doc(id);
  const getDoc = usersRef.get()
    .then(doc => {
      if (!doc.exists) {
        throw new Error(`The user with id "${id}" does not exist.`);
      } else {
        done(null, doc.data());
      }
    })
    .catch(err => {
      throw new Error(err);
    });
});

passport.use(
  new GoogleStrategy({
    // options
    clientID: keys.Google.ClientId,
    clientSecret: keys.Google.ClientSecret,
    callbackURL: '/api/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => {
    const usersRef = db.collection('users');
    const query = usersRef.where('googleId', '==', profile.id).get()
      .then(snapshot => {
        let user = undefined;
        if (snapshot._size == 0) {          
          const newUserRef = usersRef.doc();
          user = autoMapper(profile, UserModel, false);
          user.googleId = profile.id;
          user.imageURL = profile.photos[0].value;
          user.accountCreated = new Date().getTime();
          user.accountLastAccessed = new Date().getTime();
          user.id = newUserRef.id;

          const addUser = newUserRef.set(classToModel(user))
            .then(ref => {
              console.log(`User "${user.displayName}" with ID "${ref.id}" and googleId "${user.googleId}" was created at "${new Date(user.accountCreated).toLocaleString()}".`);
              done(null, user);
            });
        } else {
          let userDoc = snapshot.docs[0].data();

          user = autoMapper(userDoc, UserModel);
          done(null, user);
        }
      })
      .catch(err => {
        throw new Error(err);
      });
  })
);