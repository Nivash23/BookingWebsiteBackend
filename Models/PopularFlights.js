const mongoose = require('mongoose');

const PopularflightSchema = new mongoose.Schema({
    place: String,
    src:String
})

const Popularflight = mongoose.model('Popularflight', PopularflightSchema, 'Popularflights')

module.exports=Popularflight