const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv').config();

cloudinary.config({
    api_key:process.env.cloudinary_api_key,
    api_secret:process.env.cloudinary_api_secret,
    cloud_name:process.env.cloudinary_cloud_name
})

module.exports = cloudinary;