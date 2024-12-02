const CardestinationRouter = require('express').Router();

const Carhiredestination = require('../Models/Carhiredestination');

CardestinationRouter.get('/', async (req, res) => {
    const Destinations = await Carhiredestination.find()
    
    res.status(200).json({
        Destinations
    })
})

module.exports = CardestinationRouter;