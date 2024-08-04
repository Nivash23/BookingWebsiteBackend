const express = require('express');

const app = express();
const cors = require('cors');
const GuestRouter = require('./Controllers/GuestAccount');
const GoogleRouter = require('./Controllers/GoogleAccount');

app.use(cors());
app.use(express.json());

app.use('/api/guest/', GuestRouter);

app.use('/api/google/', GoogleRouter);


module.exports = app;