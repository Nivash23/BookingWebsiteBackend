const GuestRouter = require('express').Router();

const Guest = require('../Models/GuestAccount');




GuestRouter.post('/', async (req, res) => {
    const { email, password } = req.body;

    const CheckingUser = await Guest.findOne({ email });

    if (!CheckingUser)
    {

        const User = new Guest({
            email,
            password
        })
        
        await User.save();
    
        res.status(200).json({
            message:"User create sucessfully"
        })
    }
    else {
        res.status(402).json({
            message:"User already exists"
        })
    }

})


GuestRouter.post('/guestlog/', async (req, res) => {
    const { email, password } = req.body;

    const logUser = await Guest.findOne({ email:email  ,password:password });

    if (!logUser)
    {
        res.status(404).json({
            message:"User doesn't exists..."
        })
    }
    else {
        
        res.status(200).json({
            message:"User login Successfully..."
        })
    }



})

module.exports = GuestRouter;