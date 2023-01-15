const { AppError } = require("../helpers/error");
const { Image, sequelize }= require("../models");

// const saltRounds = Number(configs.SALT_ROUNDS);

const getImages = async () => {
  try {
    const images = await Image.findAll(
    //     {
    //   include: "restaurants",
    // }
    );
    return images;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getImageByImageName = async (input) => {
  try {
    const images = await Image.findAll({
        where: {
            imageName: sequelize.where(
              sequelize.fn("LOWER", sequelize.col("image_name")),
              "LIKE",
              "%" + input + "%"
            )
        }
    })

    if (!images) {
      throw new AppError(404, "Image not found");
    }

    return images;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getImageById = async (id) => {
  try {
    const images = await Image.findAll({
        where: {
            userId: id
        }
    })

    console.log("images", images);

    if (!images) {
      throw new AppError(404, "Image not found");
    }

    return images;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getImages,
  getImageByImageName,
  getImageById,
};
