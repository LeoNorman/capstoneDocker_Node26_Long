const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define(
        "Comment",
        {
            userId: {
                type: DataTypes.INTEGER,
                field: "user_id",
            },
            imageId: {
                type: DataTypes.INTEGER,
                field: "image_id",
            },
            commentedAt: {
                type: DataTypes.DATE,
                field: "commented_at",
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
        },
        {
            tableName: "comments",
            timestamps: false,
        }
    );
};
