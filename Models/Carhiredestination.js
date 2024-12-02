const mongoose = require('mongoose');

const CarhiredestinationSchema = new mongoose.Schema({
    name: String,
    cars: Number,
    Averageprice: Number,
    src:String,
})

const Cardestination = mongoose.model('Carhiredestination', CarhiredestinationSchema, 'Carhiredestinations')

module.exports=Cardestination