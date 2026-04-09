//  IMPORTING THE MODULE
const fs = require("fs")
const dotenv = require("dotenv")
dotenv.config({path : "./config.env"})
const mongoose = require("mongoose")
const Tour = require("./../model/tourModel")




const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`,"utf-8"))
// CONNECTING THE DB

mongoose.connect(process.env.DB).then(()=>console.log("DB is Connected ")).catch((err) => console.log(err))




const importData = async ()=>{
    try{
        const tours = await Tour.create(data)
        console.log("Tour is created")
    }catch(err){
        console.log(err)
    }
    process.exit()
}

const deleteData = async ()=>{
        try{
        const tours = await Tour.deleteMany()
            console.log("Tour is deleted ")
    }catch(err){
         console.log(err)
    }
    process.exit()
}

if(process.argv[2] === "--import"){
    importData()
}else if(process.argv[2] === "--delete"){
    deleteData()
}