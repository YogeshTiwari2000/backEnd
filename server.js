
const express = require('express');
const db=require('./db');
const personRoutes=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes')
const User=require('./model/User')
const userRoutes=require('./routes/userRoutes')
require('dotenv').config();


const app = express();
const Person=require('./model/Person')
const Menu=require('./model/Menu')

// middleWare to parse body when post is used
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello! Ho can i help u')
})

app.use('/person',personRoutes)
app.use('/menu',menuRoutes)
app.use('/user',userRoutes)

const PORT=process.env.PORT || 3000 // in future when hoisting port no. will chnage to the domain or run locally on 3000

app.listen(PORT,()=>{
  console.log("listening on 3000")
})

// console.log("hello HEro");
// function add(a, b) {
//     return a, b
// }
// console.log(add(9, 12));
// console.log("hero Tu");
// var mul = (a, b) => { return a * b }

// console.log(mul(5, 6));

// var notes = require('./note') // require is used to import modules in node.js

// var fs = require('fs')
// var os = require('os')


// var _ = require('lodash'); // has no. of build i function to use // e.g chunk() : group kr dega , drop(): delet kr dega, take() : will or make array of size n of the orignal size // union() ;intersection (), 



// var user = os.userInfo()

// console.log(user.username);

// var age = notes.age;
// var add = notes.add(age, 12)
// console.log(age);

// var data = [1, 2, 1, 21, "Name", "sir", 'name', 'age'];
// var unique = _.uniq(data);

// dummy = [
//     {
//         "id": 1,
//         "first_name": "Ni Yarr",
//         "last_name": "Vellacott",
//         "email": "fvellacotti@vimeo.com",
//         "gender": "Male",
//         "salary": "$2803.30"
//     },
//     {
//         "id": 2,
//         "first_name": "Findlay",
//         "last_name": "Vellacott",
//         "email": "fvellacotti@vimeo.com",
//         "gender": "Female",
//         "salary": "$7803.30"
//     },
//     {
//         "id": 3,
//         "first_name": "Tiwari",
//         "last_name": "Vellacott",
//         "email": "fvellacotti@vimeo.com",
//         "gender": "female",
//         "salary": "$5803.30"
//     },
//     {
//         "id": 4,
//         "first_name": "Yogesh",
//         "last_name": "Vellacott",
//         "email": "fvellacotti@vimeo.com",
//         "gender": "Male",
//         "salary": "$9803.30"
//     },
// ]

// console.log(unique);
// console.log(_.isString(data));
// console.log(_.countBy(dummy, 'gender')); // count by gender
// maxSal = _.orderBy(dummy, 'salary', 'desc'); // sort by salary in descending order 
// console.log(_.map(maxSal, 'first_name'));// map

// console.log("array of top 3 max salary", _.take(maxSal, 3),);





// fs.appendFile('make.txt', 'Hi! message ' + user.username + '\n', () => {
//     console.log("some random callback");
// })

// Lecture 4 tak ka upper hi

//  anything inside menu is Endpoint and menu is itself API (Restraunt and waiter(server))

// What are API and Endpoints?
// Imagine a menu card a in a restaurant
// Lots of options are there, each option will give you a different order

// ( Now, collection of that list = Menu card = API's )

// ( And an option = in that list = Endpoint )

// Waiter is the Server
 
// Express js se Api bnti hi server bnta hi

