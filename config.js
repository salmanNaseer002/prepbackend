//import dotenv from 'dotenv';
const dotenv = require("dotenv");
dotenv.config();


  module.exports = {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://Imran:imran112@cluster0.ms0ev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'  //mongodb://localhost/amazona
  
  }
  