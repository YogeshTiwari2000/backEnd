const express = require('express');
const router = express.Router();
const Person = require('../model/Person')
const { jwtAuthMiddleware, generateToken } = require('../jwt')

// Posting/Saving data to db:hotel having collection people got auto created by MongoDB but can be customised too
router.post('/signup', async (req, res) => {

    try {
        const data = req.body; // req.body used to extract data sent by client (typically in JSON format) when hitting this endpoint.

        const newPerson = new Person(data); // this is new and blank using schema of person

        const response = await newPerson.save();

        const payLoad = {
            username: response.username,
            id: response._id
        }

        const token = generateToken(payLoad);
        console.log(token);


        console.log('data saved');
        res.status(200).json({ response: response, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })
    }

})

// Login Route     // consider token got expire after 30sec of creation so new token
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        // finding user with username
        const user = await Person.findOne({ username: username });
        const pass = await user.comparePass(password)
        //if user dont exist or pass wrong
        if (!user || !pass) {
            return res.status(401).json({ error: "Invalid username or Password" })
        }

        const payLoad = {
            username: user.username,
            id: user._id
        }

        const token = generateToken(payLoad);
        // return token as response 
        res.json({ token })  //  {"token": "Header.Payload.signature"}   // isne as an json object return kiya hai
        // res.json( token ) //   "Header.Payload.signature"         // isne as an string
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: 'internal server error' })
    }
})

// Fetching the data from db:hotel having collection people

router.get('/', jwtAuthMiddleware, async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })
    }
})

// Profile Route
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try {
        const userData = req.data;
        // console.log('userData', userData);

        const userId = userData.id;

        const user = await Person.findById(userId)
        console.log('user', user);


        res.status(200).json({ user })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' })

    }
})


router.get('/:work', async (req, res) => {
    try {
        workType = req.params.work;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            response = await Person.find({ work: workType })
            res.status(200).json(response);
        } else {
            res.status(400).json({ message: "Invalid work type" });
        }
    }
    catch {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Get the ID from the URL parameter
        const updateData = req.body; // Get the update data from the request body

        // Find and update the person by _id
        const updatedPerson = await Person.findByIdAndUpdate(
            personId,
            updateData,
            {
                new: true,       // Return the updated document
                runValidators: true // Validate the update against the schema
            }
        );

        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Person updated:', updatedPerson);
        res.status(200).json({ message: 'Person updated successfully', user: updatedPerson });
    } catch (error) {
        console.error('Error updating person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router