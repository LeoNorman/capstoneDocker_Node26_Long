const { AppError } = require("../helpers/error");
const { response } = require("../helpers/response");
const uploadService = require("../services/upload.service")

const upload = () => {
  return async (req, res, next) => {
    try {
      
      const file = req.file;
      const { user } = res.locals;
      // const { desc } = req.body;
      
      if (!file) {
        next(new AppError(400, "please upload a file"));
      }
      console.log(req)
      // const imageCreated = await uploadService.uploadImages(file, desc, user)

      res.status(201).json(response(imageCreated));
    } catch (error) {
      
      next(error);
    }
  };
};

module.exports = {
  upload,
};
