// IMPORTING MODULE 

const express = require("express")
const tourController = require("./../controller/tourController")

// ROUTE CREATION  

const router = express.Router()
router.route("/")
.get(tourController.getAllTours)
.post(tourController.postTours)
router.route("/:id")
.get(tourController.getTourById)
.patch(tourController.patchTourById)
.delete(tourController.deleteTourById)

//EXPOTING MODULE 

module.exports = router 