const mongoose = require('mongoose');
const app = require('./Server');
const {MongoDBUrl,Port} = require('./config');

mongoose.connect(MongoDBUrl)
    .then(() => {
    console.log('MongoDB connected...')
    })
    .catch((e) => {
    console.log(e)
    })

app.listen(Port, () => {
        console.log(`Server listening to ${Port}`)
    })