// IMPORTING MODULES 

const Tour = require("./../model/tourModel")
const tourApi = require("./../utils/tourFilter")
// TOURCONTROLLERS

// GET ALL TOURS

exports.getAllTours = async (req,res) =>{
    try{
        const tourFilter = new tourApi(Tour, req.query)
        .filter()
        .sorting()
        .fields()
        .pagination()

        const allTour = await tourFilter.query
        res.status(200).send({
            status : "Success",
            length: allTour.length,
            data: allTour
        })

    }catch(err){
        res.status(400).send({
            status : "Faliure",
            error : err.message
        })
    }
}

// POST TOURS

exports.postTours = async (req,res)=>{
    try{
        const postData = await Tour.create(req.body)
        res.status(200).send({
            status : "Success",
            data: postData
        })
    }catch(err){
         res.status(400).send({
            status : "Faliure",
            error : err.message
        })
    }
}

// GET SPECIFIC TOUR BY ID

exports.getTourById = async (req,res) =>{
    try{
        const specificTour = await Tour.findById(req.params.id)
        res.status(200).send({
            status : "Success",
            data : specificTour
        })
    }catch(err){
        res.status(400).send({
            status : "Faliure",
            message : err.message
        })
    }
}

// PATCH SPECIFIC TOUR BY ID 

exports.patchTourById = async (req , res) =>{
    try{
        const updatedTour = await Tour.findByIdAndUpdate(req.params.id , req.body , {
            returnDocument: "after" ,
            runValidators : true
        })
        res.status(200).send({
            status:"Success",
            message:"Updated the tour"
        })

    }catch(err){
        res.status(400).send({
            status:"Failure",
            message : err.message
        })
    }
}

// DELETE SPECIFIC TOUR BY ID 

exports.deleteTourById = async (req,res) =>{
    try{
        const deleteTour = await Tour.findByIdAndDelete(req.params.id)
        res.status(200).send({
            status:"Sucess",
            message:"Tour got deleted"
        })
    }catch(err){
        res.status(400).send({
            status:"Faliure",
            message : err.message
        })
    }
}