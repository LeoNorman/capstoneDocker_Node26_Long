// Routers V1
const express = require("express");
const authorization = require("../../middlewares/authorization");
const authRouter = require("./auth.router");
const imageRouter = require("./image.router");
const userRouter = require("./user.router");


// path v1: /api/v1
const v1 = express.Router();

// Định nghĩa các routers cho authorization
v1.use("/auth", authRouter);
// Định nghĩa các routers cho users
v1.use("/users", authorization, userRouter);
// Định nghĩa các routers cho images
v1.use("/images", authorization, imageRouter);


module.exports = v1;
