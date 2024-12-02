const RecommentRouter = require('express').Router();

const Recommentplaces=require('../Models/Recommendation')

RecommentRouter.get('/', async (req, res) => {
    const City =await Recommentplaces.findOne({ Cityname:"Chennai"})
    
    const cityname = City.Cityname;
    const places = City.Recomendplaces;
    
    // console.log(City.Recomendplaces) 


    res.status(200).json({
        message:"Recomendations",
        cityname,
        places

    })
})

module.exports=RecommentRouter



