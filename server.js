
const express = require('express');
const db = require('./db');
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')
const User = require('./model/User')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

const Person = require('./model/Person')
const Menu = require('./model/Menu')

const app = express();

//  #1 Passport.js for Auth 
const passport = require('passport');
const localStrategy = require('passport-local').Strategy; // username and password strategy

//  #2 Passport.js for Auth 
app.use(passport.initialize());

//  # 3  Passport.js for Auth 
passport.use(new localStrategy(async (Username, password, done) => {

  try {
    console.log("received credentials : ", Username, password);
    const user = await User.findOne({ username: Username });

    if (!user) {
      return done(null, false, { Message: "incorrect username" })
    }
    const isPassMatch = user.password === password;

    if (isPassMatch) {
      return done(null, user)
    } else {
      return done(null, false, { Message: "incorrect password" })
    }
  } catch (err) {
    return done(err)
  }
}))

const localAuthMiddleware = passport.authenticate('local', { session: false })

//  # 4 using created authMiddleware for  ( / route) calling passport auth for ( "/" route)
app.use('/user', localAuthMiddleware, userRoutes)

// middleWare to parse body when post is used
const bodyParser = require('body-parser');
app.use(bodyParser.json())

// logRequest middleWare to log all the details on all routes

const logRequest = (req, res, next) => {
  console.log(` [${new Date().toLocaleString()}] Request Made to ${req.originalUrl}`);
  next()
}

app.get('/', function (req, res) {
  res.send('Hello! Ho can i help u')
})
app.use(logRequest)
app.use('/person', personRoutes)
app.use('/menu', menuRoutes)

const PORT = process.env.PORT || 3000 // in future when hoisting port no. will chnage to the domain or run locally on 3000

app.listen(PORT, () => {
  console.log("listening on 3000")
})













