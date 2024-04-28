require("dotenv").config()
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL,{  serverSelectionTimeoutMS: 60000,})
.then(() => console.log('Connected to MongooseDB'))
.catch((err) => console.error('Error connecting to MongooseDB:', err));