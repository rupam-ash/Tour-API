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
    ratingsAverage:{
        type:Number,
        max:5,
        min:1,
        default:4.5
    },
    ratingsQuantity: {
        type: Number,
        min : 0,
        default:0
    },
    difficulty:{
        type : String,
        required : [true , "A tour must have a difficulty"],
        enum : {
            values:["easy", "medium","hard"],
            message:"Difficulty is either easy , medium or hard"
        }
    },
    maxGroupSize:{
        type:Number,
        required:[true, "Have to mention the max group size"],
        min:1
    },
    durationInDays:{
        type:Number,
        required:[true , "Have to mention the duration"]
    },
    startLocation:{
        city:{
            type:String,
            required: [true , "A starting city location is required"]
        },
        state:{
            type:String,
            required:[true, "A tour must have starting state"]
        },
        coordinates:[Number]
    },
    locationsCovered:{
        type:[String],
        required:[true,"Have to mention the location which will be covered"]
    },
    startDates:{
        type:[Date],
        required:[true , "Have to mention the starting date"]
    },
    included:{
        type:[String],
        required:[true , "Have to mention the included things"]
    },
    excluded:{
        type:[String],
        required:[true , "Have to mention the excluded things"]
    }
    
})

// MODEL CREATION 

const Tour = mongoose.model("Tour",tourSchema)

// EXPORTING MODULE 

module.exports = Tour