//Express
const express = require('express');

//Additional Package
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//ENV
const port = process.env.PORT || 5000;
//Db
const { connectDB } = require('./database/connectDb');

//Import Routes
const authRouter = require('./Routes/Auth');

//Middleware
const { notFound } = require('./middleware/notFound');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Routes

app.use('/api/auth/', authRouter);

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
