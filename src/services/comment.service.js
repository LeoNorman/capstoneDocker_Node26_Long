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

const createComment = async (imageId, user) => {
    try {
        console.log("imageId", imageId);
        const image = await Image.findByPk(imageId);
        if (!image) {
            throw new AppError(400, "image not found")
        }

        console.log("image: ", image.__proto__);
        const addComment = await image.addUserCommentList(user.id)
        console.log("addComment: ", addComment);
        return addComment;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    getCommentByImageId,
    createComment,
};
