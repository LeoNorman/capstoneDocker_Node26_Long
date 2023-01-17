const { Image } = require("../models");

const uploadImages = async (file, data, requester) => {
    try {
        const imageCreated = await Image.create({
            imageName: data.imageName,
            url: `http://localhost:4000/${file.path}`,
            description: data.description,
            userId: requester.id
        })

        
        return imageCreated;

    } catch (error) {
        
        throw error;
    }
}

module.exports = {
    uploadImages,
}
