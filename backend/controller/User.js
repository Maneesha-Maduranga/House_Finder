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
  if (!image.mimetype.startsWith('image/png')) {
    throw new CustomError('Please Upload Image ', 400);
  }
  const result = await cloudinary.uploader.upload(image.tempFilePath, {
    use_filename: true,
    folder: 'ProfileImages',
  });
  fs.unlinkSync(image.tempFilePath);
  return res.status(201).json({ image: { src: result.secure_url } });
};

module.exports = {
  uploadProfilePic,
};
