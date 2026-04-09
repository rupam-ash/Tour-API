// IMPORTING MODULES 

const Tour = require("./../model/tourModel")

// TOURCONTROLLERS

// GETALLTOURS

exports.getAllTours = async (req,res) =>{
    try{
        const allTour = await Tour.find()
        res.status(200).send({
            status : "Success",
            data: {allTour}
        })

    }catch(err){
        res.status(400).send({
            status : "Faliure",
            error : {err}
        })
    }
}

// POSTTOURS

exports.postTours = async (req,res)=>{
    try{
        const postData = await Tour.create(req.body)
        res.status(200).send({
            status : "Success",
            data:{postData}
        })
    }catch(err){
         res.status(400).send({
            status : "Faliure",
            error : {err}
        })
    }
}