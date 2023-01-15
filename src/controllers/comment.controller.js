const { AppError } = require("../helpers/error");
const { response } = require("../helpers/response");
const commentService = require("../services/comment.service");

const getComments = () => {
  return async (req, res, next) => {
    try {
      const comments = await commentService.getComments();
      res.status(200).json(response(comments));
    } catch (error) {
      next(error);
    }
  };
};


const getCommentByImageId = () => {
  return async (req, res, next) => {
    try {
      const { imageId } = req.params
      const comments = await commentService.getCommentByImageId(imageId);
      if(!comments) {
        throw new AppError(404, "This image has no comments yet")
      }
      res.status(200).json(response(comments));
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
    getComments,
    getCommentByImageId
}