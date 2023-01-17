const { AppError } = require("../helpers/error");
const { response } = require("../helpers/response");
const uploadService = require("../services/upload.service")

const uploadImages = () => {
  return async (req, res, next) => {
    try {

      const file = req.file;
      const { user } = res.locals;
      const data = req.body;

      if (!file) {
        next(new AppError(400, "please upload a file"));
      }
      const imageCreated = await uploadService.uploadImages(file, data, user)

      res.status(201).json(response(imageCreated));
    } catch (error) {

      next(error);
    }
  };
};

module.exports = {
  uploadImages,
};
