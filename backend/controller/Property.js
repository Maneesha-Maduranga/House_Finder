const { Property } = require('../model/Property');

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
  });

  res.status(200).json({
    sucess: true,
    data: property,
  });
};

module.exports = {
  addProperty,
};
