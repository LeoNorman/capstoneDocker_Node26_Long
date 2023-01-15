const express = require("express");
const imageSaveController = require("../../controllers/imageSave.controller");

const imageSaveRouter = express.Router()

imageSaveRouter.get("/:userId", imageSaveController.getImageSavedByUserId())

module.exports = imageSaveRouter