const PopularFlightRouter = require('express').Router();

const Popularflight = require('../Models/PopularFlights');


PopularFlightRouter.get('/', async (req, res) => {
    const Popularflights = await Popularflight.find();

    res.status(200).json({
        Popularflights
    })
})

module.exports = PopularFlightRouter;