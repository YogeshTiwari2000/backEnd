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

// console.log('OS Type:', os.type());
// console.log('Platform:', os.platform());
// console.log('Architecture:', os.arch());
// console.log('CPU Details:', os.cpus());


// var user = os.userInfo()

// console.log(user.username);

// var _ = require('lodash'); // has no. of build i function to use // e.g chunk() : group kr dega , drop(): delet kr dega, take() : will or make array of size n of the orignal size // union() ;intersection (), 



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

