const express = require("express");
const uploadController = require("../../controllers/upload.controller");

const uploadRouter = express.Router()

uploadRouter.post("/uploadImages", uploadController.upload())

module.exports = uploadRouter
