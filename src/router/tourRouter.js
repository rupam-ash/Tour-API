// IMPORTING MODULE 

const express = require("express")
const tourController = require("./../controller/tourController")

// ROUTE CREATION  

const router = express.Router()
router.route("/")
.get(tourController.getAllTours)
.post(tourController.postTours)

//EXPOTING MODULE 

module.exports = router 