const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Image",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      imageName: {
        type: DataTypes.STRING,
        field: 'image_name',
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      }
    },
    {
      tableName: "images",
      timestamps: false,
    }
  );
};
