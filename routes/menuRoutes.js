const express = require('express')
const Menu = require('../model/Menu');
const router = express.Router();

router.post('/', async (req, res) => {

    try {
        const data = req.body; // req.body used to extract data sent by client (typically in JSON format) when hitting this endpoint.

        const newMenu = new Menu(data); // this is new and blank using schema of person

        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })
    }

})

router.get('/', async (req, res) => {

    try {
        const data = await Menu.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })
    }
})
router.get('/:taste', async (req, res) => {
    try {
        tasteType = req.params.taste;
        if (tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
            response = await Menu.find({ work: workType })
            res.status(200).json(response);
        } else {
            res.status(400).json({ message: "Invalid work type" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal server error' })
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id;
        // const deletedMenu = await Menu.findOneAndDelete({ id: menuId });
        const deletedMenuItem = await Menu.findByIdAndDelete(menuItemId);

        if (!deletedMenuItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        console.log('Item deleted:', deletedMenuItem);
        res.status(200).json({ message: 'Item deleted successfully', item: deletedMenuItem });
    } catch (error) {
        console.error('Error deleting Item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router