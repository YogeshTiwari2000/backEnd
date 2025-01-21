console.log("this is a different module as node can run only single file therfore other files aare likned to that single file");


var age = 24; // to use this in other file u need to export this

var add = (a, b) => {
    return console.log(a + b);
}

module.exports = {
    age,
    add
}
