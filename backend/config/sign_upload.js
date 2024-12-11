let cloudinary = require('cloudinary').v2;
const utils = require('cloudinary').utils;
require('dotenv').config();

const cloudinaryConfig = {
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
}

cloudinary.config(cloudinaryConfig);

const CloudinaryGenerateSign = {
    Sign_upload:  async (req,res)=>{
        const file = req.file;
        console.log(file);
        if(!file){
            return res.status(400).json({error:'folder should not be empty'});
        }
        const timestamp = Math.round((new Date)/1000);
        const signature = utils.api_sign_request({
            timestamp:timestamp,
        },cloudinaryConfig.api_secret);
        console.log('timestamp = ',timestamp);
        try{
            
        const result = await cloudinary.uploader.upload(file.path,{
            resource_type: 'auto', // 'auto' will automatically detect the file type (image, video, audio, etc.)
            public_id: file.originalname,
            timeout: 60000, // Optional: set timeout in ms
        });
        console.log(result);
           
        }catch(e){
            console.log(e);
        }
    
        // return res.status(200).json({timestamp,signature});
    }
}

module.exports = CloudinaryGenerateSign;