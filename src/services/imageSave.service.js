const { AppError } = require("../helpers/error");
const { User, Image, ImageSaves } = require("../models");


const getImageSavedByUserId = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new AppError(400, "user not found")
        }
        const imageSavedLists = await ImageSaves.findAll({
            where: {
                userId,
            }
        })
        if (imageSavedLists.length) {
            return imageSavedLists
        }
        return false;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const checkSaved = async (imageId, userCheck) => {
    try {
        const image = await Image.findByPk(imageId);
        
        if (!image) {
            throw new AppError(400, "image not found")
        }
        const isSaved = await image.hasUserSaveList(userCheck.id);
        if (isSaved) {
            const imageSaved = await ImageSaves.findOne({
                where: {
                    userId: userCheck.id,
                    imageId, 
                }
            })
            return imageSaved
        }
        return false;
    } catch (error) {
        console.error(error);
        throw error;
    }

}

module.exports = {
    getImageSavedByUserId,
    checkSaved,
};
