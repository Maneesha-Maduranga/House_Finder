//Express
const express = require('express');

//Additional Package
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

//ENV
const port = process.env.PORT || 5000;
//Db
const { connectDB } = require('./database/connectDb');

//Import Routes
const authRouter = require('./routes/Auth');
const userRouter = require('./routes/User');
const propertyRouter = require('./routes/Property');

//Middleware
const { notFound } = require('./middleware/notFound');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
//Cloudaniry
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

//Routes
app.use('/api/auth/', authRouter);
app.use('/api/user/', userRouter);
app.use('/api/property/', propertyRouter);

//Middleware
app.use(notFound);
app.use(errorHandler);

//Entry Point
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log('Server IS Running');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
