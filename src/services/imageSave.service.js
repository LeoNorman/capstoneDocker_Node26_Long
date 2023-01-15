const { AppError } = require("../helpers/error");
const { User } = require("../models");


const getImageSavedByUserId = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        console.log("user: ", user.__proto__);
        if (!user) {
            throw new AppError(400, "image not found")
        }
        const imageSavedLists = await user.getImageSaveLists();
        if (imageSavedLists.length) {
            return imageSavedLists
        }
        return false;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    getImageSavedByUserId,
};
