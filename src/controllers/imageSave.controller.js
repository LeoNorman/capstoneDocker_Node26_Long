const { AppError } = require("../helpers/error");
const { response } = require("../helpers/response");
const imageSaveService = require("../services/imageSave.service");


const getImageSavedByUserId = () => {
  return async (req, res, next) => {
    try {
      const { userId } = req.params
      const imageSaved = await imageSaveService.getImageSavedByUserId(userId);
      if(!imageSaved) {
        throw new AppError(404, "This user hasn't saved any photos yet")
      }
      res.status(200).json(response(imageSaved));
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
    getImageSavedByUserId,
}