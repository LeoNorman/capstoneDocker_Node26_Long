const express = require("express");
const imageController = require("../../controllers/image.controller");

const imageRouter = express.Router()

imageRouter.get("/", imageController.getImages())
imageRouter.get("/search/:input", imageController.getImageByImageName())
imageRouter.get("/:id", imageController.getImageById())

module.exports = imageRouter