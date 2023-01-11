const express = require("express");
const userController = require("../../controllers/user.controller");

const userRouter = express.Router()

userRouter.get("/", userController.getUsers())
userRouter.put("/:id", userController.updateUser())

module.exports = userRouter
