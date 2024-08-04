require('dotenv').config();

const MongoDBUrl = process.env.MONGODB_URL;
const Port = process.env.PORT;

module.exports = { MongoDBUrl, Port };