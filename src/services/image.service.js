const bcrypt = require("bcrypt");
const configs = require("../config");
const { AppError } = require("../helpers/error");
const { Image }= require("../models");

// const saltRounds = Number(configs.SALT_ROUNDS);

const getImages = async () => {
  try {
    const images = await Image.findAll(
    //     {
    //   include: "restaurants",
    // }
    );
    return images;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getImageByImageName = async (input) => {
  try {
    const images = await Image.findAll({
        where: {
            imageName: input
        }
    })

    if (!images) {
      throw new AppError(404, "Image not found");
    }

    return images;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const createUser = async (data) => {
//   try {
//     const user = await User.findOne({
//       where: {
//         email: data.email,
//       },
//     });

//     // Email đã tồn tại trong DB
//     if (user) {
//       throw new AppError(400, "Email is existed");
//     }

//     // Ví dụ trong trường hợp admin thêm user, chỉ cần dùng email, ta cần phải tạo một mật khẩu ngẩu nhiên
//     if (!data.password) {
//       data.password = Math.random().toString(36).substring(2);
//       // Gửi email về cho user mật khẩu này
//     }

//     //hashpass
//     data.password = bcrypt.hashSync(data.password, saltRounds);

//     const createdUser = await User.create(data);
//     return createdUser;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// const updateUser = async (id, data) => {
//   try {
//     const user = await User.findOne({
//       where: {
//         id: id,
//       },
//     });

//     if (!user) {
//       throw new AppError(400, "User not found");
//     }

//     user.set(data);
//     await user.save();

//     return user;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// const deleteUser = async (id) => {
//   try {
//     const user = await User.findOne({
//       where: {
//         id,
//       },
//     });

//     if (!user) {
//       throw new AppError(400, "User not found");
//     }

//     await User.destroy({ where: { id } });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

module.exports = {
  getImages,
  getImageByImageName,
};
