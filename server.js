//  IMPORTING THE MODULE

const dotenv = require("dotenv")
dotenv.config({path : "./config.env"})
const mongoose = require("mongoose")
const app = require("./src/app")

// CONNECTING THE DB

mongoose.connect(process.env.DB).then(()=>console.log("DB is Connected ")).catch((err) => console.log(err))


// SERVER START

app.listen(process.env.PORT,()=>console.log("Server is UP Baby "))