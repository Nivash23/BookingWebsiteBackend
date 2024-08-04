const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
    email: String,
    password:String,
})

const Guest = mongoose.model('GuestUser', GuestSchema, 'GuestUsers');

module.exports = Guest;