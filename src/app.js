// IMPORT MODULE 

const express = require("express")
const app = express()
app.set('query parser', 'extended');
const tourRouter = require("./router/tourRouter")

// MIDDLEWARE 

app.use(express.json())
app.use("/api/v1/tours" , tourRouter)

// EXPORT MODULE

module.exports = app