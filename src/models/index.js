// Setup Sequelize
const { Sequelize } = require("sequelize");
const configs = require("../config");

const sequelize = new Sequelize(configs.DB_NAME, configs.DB_USER, configs.DB_PASSWORD, {
  dialect: configs.DB_DIALECT,
  host: configs.DB_HOST,
  port: configs.DB_PORT,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize Connected");
  } catch (error) {
    console.log("Sequelize Error", error);
  }
})();

// // Khởi tạo model
const User = require("./User")(sequelize);
const Image = require("./Image")(sequelize);
const Comment = require("./Comment")(sequelize);
const ImageSaves = require("./ImageSaves")(sequelize);

// // Định nghĩa relationship giữa các model

// // User 1 - n Image
Image.belongsTo(User, { as: "owner", foreignKey: "userId" });
User.hasMany(Image, { as: "imageLists", foreignKey: "userId" });

// User 1 - n Comment
// Image 1 - n Comment
User.belongsToMany(Image, {
  as: "imageCommentLists",
  through: Comment,
  foreignKey: "userId",
});
Image.belongsToMany(User, {
  as: "userCommentLists",
  through: Comment,
  foreignKey: "imageId",
});

// User 1 - n ImageSaves
// Image 1 - n ImageSaves
User.belongsToMany(Image, {
  as: "imageSaveLists",
  through: ImageSaves,
  foreignKey: "userId",
});
Image.belongsToMany(User, {
  as: "userSaveLists",
  through: ImageSaves,
  foreignKey: "imageId",
});

module.exports = {
  sequelize,
  User,
  Image,
  Comment,
  ImageSaves,
};
