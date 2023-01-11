const express = require("express");
const imageController = require("../../controllers/image.controller");

const imageRouter = express.Router()

imageRouter.get("/", imageController.getImages())
imageRouter.get("/:input", imageController.getImageByImageName())

module.exports = imageRouter