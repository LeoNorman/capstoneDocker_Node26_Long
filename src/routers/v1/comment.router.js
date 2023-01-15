const express = require("express");
const commentController = require("../../controllers/comment.controller");

const commentRouter = express.Router()

commentRouter.get("/", commentController.getComments())
commentRouter.get("/:imageId", commentController.getCommentByImageId())

module.exports = commentRouter