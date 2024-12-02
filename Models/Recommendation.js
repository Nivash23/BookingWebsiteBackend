const mongoose = require('mongoose');

const RecommentSchema = new mongoose.Schema({
    Cityname: String,
    Recomendplaces: [{
        name: String,
        src:String,
    }]
})

const Recommentplaces = mongoose.model("AttractRecommendation", RecommentSchema, "AttractRecommendations");

module.exports = Recommentplaces;

