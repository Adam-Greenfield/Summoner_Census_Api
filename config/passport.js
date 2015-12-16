var localStrategy = require("passport-local").Strategy;
var User = require("../models/user");

module.exports = function(passport){

  passport.use('local-signup', new localStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  }, function(req, email, password, done) {

    User.findOne({ 'local.email': email }, function(err, user){
      if(err) return done(err, false, { message: "This doesn't work for some reason" });

      if(user) return done(null, false, {message: "Email already exists in database" });

      var newUser = new User();
      newUser.local.email = email;
      newUser.local.username = req.body.username;
      newUser.local.firstname = req.body.firstname;
      newUser.local.password = User.encrypt(password);
      newUser.local.region = req.body.region;

      newUser.save(function(err, user){

        if (err) return done(err, false, { message: "Lol nope" });

        return done(null, user);
      })
    })
  }))
  }
