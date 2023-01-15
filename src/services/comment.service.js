const { AppError } = require("../helpers/error");
const { Image } = require("../models");


const getCommentByImageId = async (imageId) => {
    try {
        const image = await Image.findByPk(imageId);
        if (!image) {
            throw new AppError(400, "image not found")
        }
        const imageCommentLists = await image.getUserCommentLists();
        if (imageCommentLists.length) {
            return imageCommentLists
        }
        return false;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    //   getComments,
    getCommentByImageId,
};
