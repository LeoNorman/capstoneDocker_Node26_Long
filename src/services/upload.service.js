const { Image } = require("../models");

const uploadImages = async (file, desc, requester) => {
    try {
        console.log("desc: ", desc);
        // console.log("requester: ", requester.id);
        // console.log("file: ", file);
        const imageCreated = await Image.create({
            imageName: file.filename,
            url: `http://localhost:4000/${file.path}`,
            description: desc,
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
