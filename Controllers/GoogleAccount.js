const GoogleRouter = require('express').Router();

const GoogleUser = require('../Models/GoogleAccount');

GoogleRouter.post('/', async (req, res) => {
    const { Email, Name, Profile } = req.body;

    const NewGoogleUser = new GoogleUser({
        Email,
        Name,
        Profile
    })

    await NewGoogleUser.save();

    res.status(200).json({
        message:"User Registered Sucessfully..."
    })
})

GoogleRouter.post('/googlelog/', async (req, res) => {
    const { Email } = req.body;

    const logUser = await GoogleUser.findOne({ Email });

    if (!logUser) {
        res.status(404).json({
            message:"User doesn't exists..."
        })
    }
    else {
        res.status(200).json({
            message:"login Successfully...",
            loguser:logUser,
        })
    }
})

module.exports = GoogleRouter;