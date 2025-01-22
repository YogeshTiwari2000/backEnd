const { uniq } = require('lodash');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        uniq: true,
        required: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,

    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        unique: true, // Ensure no duplicate IDs
    },
});

personSchema.pre('save', async function (next) {

    const person = this;

    // Hash the password only if its modified for new

    if (!person.isModified('password')) return next();
    try {

        // salt generated 
        const salt = await bcrypt.genSalt(10)

        const hashedPass = await bcrypt.hash(person.password, salt);
        person.password = hashedPass;

        next();

    } catch (err) {
        next(err)
    }

})

personSchema.methods.comparePass = async function (candidatePass) {
    // stored pass ko decrypt ni krta but entered pass ko hash kr ke compare krta hi
    // let the pass be : yogi ------> ahfdgshbankcsv
    // ahfdgshbankcsv ----> salt extract hoga through compare fucntion
    // salt+yogi(enterd) ---> Hash ---> ahfdgshbankcsv
    try {
        // use bycrpt to compare the machedPass with enteredPass
        const isMatch = await bcrypt.compare(candidatePass, this.password)
        return await bcrypt.compare(candidatePass, this.password);
        return isMatch;

    } catch (err) {
        throw err;
    }
}

const Person = mongoose.model('Person', personSchema);
module.exports = Person;