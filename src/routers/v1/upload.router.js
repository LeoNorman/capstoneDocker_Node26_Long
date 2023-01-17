const express = require("express");
const uploadController = require("../../controllers/upload.controller");

const uploadRouter = express.Router()

uploadRouter.post("/uploadImages", uploadController.uploadImages())

module.exports = uploadRouter
