const Person = require('./model/Person');
const User = require('./model/User');

//  #1 Passport.js for Auth 
const passport = require('passport');
const localStrategy = require('passport-local').Strategy; // username and password strategy

passport.use(new localStrategy(async (Username, password, done) => {

    try {
        console.log("received credentials : ", Username, password);
        const user = await Person.findOne({ username: Username });

        if (!user) {
            return done(null, false, { Message: "incorrect username" })
        }
        // const isPassMatch = user.password === password;
        const isPassMatch = await user.comparePass(password)

        if (isPassMatch) {
            return done(null, user)
        } else {
            return done(null, false, { Message: "incorrect password" })
        }
    } catch (err) {
        return done(err)
    }
}))

module.exports = passport;