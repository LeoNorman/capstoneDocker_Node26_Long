const { AppError } = require("../helpers/error");
const { Image, sequelize } = require("../models");

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
        id,
      },
      include: [
        {
          association: "owner",
          attributes: {
            exclude: ["email", "password"],
          },
        },
      ],
      attributes: {
        exclude: ["userId"]
      },
    })

    if (!images.length) {
      throw new AppError(404, "Image not found");
    }

    return images;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getImageByUserId = async (userId) => {
  try {
    const images = await Image.findAll({
      where: {
        userId,
      }
    });
    return images;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const deleteImageCreatedById = async (id, requester) => {
  try {
    const image = await Image.findByPk(id);
    if (!image) {
      throw new AppError(400, "image not found");
    }

    if (image.userId !== requester.id) {
      throw new AppError(403, "no have permission");
    }
    const imageDeleted = await Image.destroy({ where: { id, } });
    return imageDeleted;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// const createImage = async (file, desc, requester) => {
//   try {
//     // console.log("desc: ", desc);
//     // console.log("requester: ", requester.id);
//     // console.log("file: ", file);
//     const imageCreated = await Image.create({
//       imageName: file.filename,
//       url: `http://localhost:4000/${file.path}`,
//       description: desc,
//       userId: requester.id
//     })

//     return imageCreated;

//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

module.exports = {
  getImages,
  getImageByImageName,
  getImageById,
  getImageByUserId,
  deleteImageCreatedById,
};
