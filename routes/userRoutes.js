
const express = require('express')
const User = require('../model/User');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newUser = new User(data);
        const response = await newUser.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/', async (req, res) => {

    try {
        const data = await User.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const userId = req.params.id; // Get the ID from the URL parameter
        const updateData = req.body; // Get the update data from the request body

        // Find and update the user by ID
        const updatedUser = await User.findOneAndUpdate(
            { id: userId }, // Match the user by `id`
            updateData,     // Update with the new data
            { new: true },  // Return the updated user
            { runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        console.log('User updated:', updatedUser);
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findOneAndDelete({ id: userId });
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log('User deleted:', deletedUser);
        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router