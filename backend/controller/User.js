// Models
const { User, userValidator } = require('../Model/User');

// Helpers
const CustomError = require('../utills/customError');

//Image Uplaod
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const uploadProfilePic = async (req, res) => {
  let image = req.files.profilePicture;

  if (!image) {
    throw new CustomError('Please Upload Photo', 400);
  }

  if (!image.mimetype.startsWith('image')) {
    throw new CustomError('Please Upload Image', 400);
  }
  const result = await cloudinary.uploader.upload(image.tempFilePath, {
    use_filename: true,
    folder: 'ProfileImages',
  });

  fs.unlinkSync(image.tempFilePath);
  return res.status(201).json({ image: { src: result.secure_url } });
};

const updateProfilePic = async (req, res) => {
  const { image } = req.body;

  if (!image) {
    throw new CustomError('Please Add Photo Url', 400);
  }
 
  let user = await User.findById(req.user.id);

  if (user) {
    user.image = image;
    await user.save();
    res.status(201).json({
      sucess: true,
      message: 'User Profile Updated',
    });
    return;
  }

  throw new CustomError('No User Find For the Update Profile', 400);
};

module.exports = {
  uploadProfilePic,
  updateProfilePic,
};
