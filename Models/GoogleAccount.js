const mongoose = require('mongoose');

const GoogleAccountSchema = new mongoose.Schema({
    Email: String,
    Name: String,
    Profile:String
})

const GoogleUser = mongoose.model('GoogleUser', GoogleAccountSchema, 'GoogleUsers');


module.exports = GoogleUser;