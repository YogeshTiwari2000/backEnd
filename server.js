
const express = require('express');
const db = require('./db');
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')
const User = require('./model/User');
const Person = require('./model/Person')
const Menu = require('./model/Menu')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

const passport = require('./auth')
const app = express();

// middleWare to parse body when post is used
const bodyParser = require('body-parser');
app.use(bodyParser.json())

//  #2 Passport.js for Auth 
app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', { session: false })

//  # 4 using created authMiddleware for  ( / route) calling passport auth for ( "/" route)
// app.use('/person', localAuthMiddleware, personRoutes)
app.use('/person', personRoutes)


// logRequest middleWare to log all the details on all routes

const logRequest = (req, res, next) => {
  console.log(` [${new Date().toLocaleString()}] Request Made to ${req.originalUrl}`);
  next()
}

app.get('/', function (req, res) {
  res.send('Hello! Ho can i help u')
})
app.use(logRequest)
app.use('/user', userRoutes)
app.use('/menu', menuRoutes)

const PORT = process.env.PORT || 3000 // in future when hoisting port no. will chnage to the domain or run locally on 3000

app.listen(PORT, () => {
  console.log("listening on 3000")
})













