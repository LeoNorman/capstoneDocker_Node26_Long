const { response } = require("../helpers/response");
const imageService = require("../services/image.service");

const getImages = () => {
  return async (req, res, next) => {
    try {
      const images = await imageService.getImages();
      res.status(200).json(response(images));
    } catch (error) {
      next(error);
    }
  };
};

const getImageByImageName = () => {
  return async (req, res, next) => {
    try {
      const { input } = req.params
      const images = await imageService.getImageByImageName(input);
      res.status(200).json(response(images));
    } catch (error) {
      next(error);
    }
  };
};

const getImageById = () => {
  return async (req, res, next) => {
    try {
      const { id } = req.params
      const images = await imageService.getImageById(id);
      res.status(200).json(response(images));
    } catch (error) {
      next(error);
    }
  };
};

const getImageByUserId = () => {
  return async (req, res, next) => {
    try {
      const { userId } = req.params
      const images = await imageService.getImageByUserId(userId);
      res.status(200).json(response(images));
    } catch (error) {
      next(error);
    }
  };
}

const deleteImageCreatedById = () => {
  return async (req, res, next) => {
    try {
      const { id } = req.params
      const {user} = res.locals
      const imageDeteted = await imageService.deleteImageCreatedById(id, user);
      res.status(204).json(response(imageDeteted));
    } catch (error) {
      next(error);
    }
  };
}

module.exports = {
  getImages,
  getImageByImageName,
  getImageById,
  getImageByUserId,
  deleteImageCreatedById,
} 