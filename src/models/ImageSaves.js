const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "ImageSave",
        {
            userId: {
                type: DataTypes.INTEGER,
                field: "user_id",
            },
            imageId: {
                type: DataTypes.INTEGER,
                field: "image_id",
            },
            savedAt: {
                type: DataTypes.DATE,
                field: "saved_at",
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
        },
        {
            tableName: "imageSaves",
            timestamps: false,
        }
    );
};
