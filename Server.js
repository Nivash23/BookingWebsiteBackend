const express = require('express');

const app = express();
const cors = require('cors');
const GuestRouter = require('./Controllers/GuestAccount');
const GoogleRouter = require('./Controllers/GoogleAccount');
const RecommentRouter = require('./Controllers/Recommendation');
const CardestinationRouter = require('./Controllers/Carhiredestinations');
const PopularFlightRouter = require('./Controllers/PopularFlights');


app.use(cors());
app.use(express.json());


app.use('/api/Recommentplaces/',RecommentRouter)

app.use('/api/guest/', GuestRouter);

app.use('/api/google/', GoogleRouter);

app.use('/api/cardestination/', CardestinationRouter)

app.use('/api/popularflight/',PopularFlightRouter)


module.exports = app;