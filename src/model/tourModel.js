// IMPORTING MODULE 

const mongoose = require("mongoose")

// SCHEMA CREATION  

const tourSchema = new mongoose.Schema({
   
    tourName : {
        type : String,
        required : [true , "a tour must have a name"]
    },
    description: {
        type : String,
        required : [true , "a tour must have a description"]
    },
    price:{
        type : Number,
        required : [true,"a tour must have a price"]
    },
    ratingsAverage: Number,
    ratingsQuantity: Number
    
})

// MODEL CREATION 

const Tour = mongoose.model("Tour",tourSchema)

// EXPORTING MODULE 

module.exports = Tour