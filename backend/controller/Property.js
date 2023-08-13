const { Property } = require('../model/Property');
// Helpers
const CustomError = require('../utills/customError');
//Image Uplaod
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const addProperty = async (req, res) => {
  const {
    title,
    district,
    address,
    bedrooms,
    bathrooms,
    landsize,
    units,
    houseSize,
    description,
    price,
    negotiable,
    images,
  } = req.body;

  const property = await Property.create({
    title,
    district,
    address,
    bedrooms,
    bathrooms,
    landsize,
    units,
    houseSize,
    description,
    price,
    negotiable,
    user: req.user.id,
    images: images,
  });

  res.status(200).json({
    sucess: true,
    data: property,
  });
};

const uploadPropertyImages = async (req, res) => {
  const { imageOne, imageTwo } = req.files;
  let images = [];

  if (!imageOne && !imageTwo) {
    throw new CustomError('Please Add At least Two Images');
  }
  if (
    !imageOne.mimetype.startsWith('image') &&
    !imageOne.mimetype.startsWith('image')
  ) {
    throw new CustomError('Please Upload file type with jpeg,jpg,png', 400);
  }

  const image_one = await cloudinary.uploader.upload(imageOne.tempFilePath, {
    use_filename: true,
    folder: 'Properties',
  });

  fs.unlinkSync(imageOne.tempFilePath);

  images.push(image_one.secure_url);

  const image_two = await cloudinary.uploader.upload(imageTwo.tempFilePath, {
    use_filename: true,
    folder: 'Properties',
  });

  fs.unlinkSync(imageTwo.tempFilePath);

  images.push(image_two.secure_url);

  res.status(201).json({
    sucess: true,
    images: images,
  });
};

module.exports = {
  addProperty,
  uploadPropertyImages,
};
