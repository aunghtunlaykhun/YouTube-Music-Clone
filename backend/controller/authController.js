const  axios = require("axios");
const createJwt = require('../config/createJWT');
const customError = require("../utils/customError");
const B2 = require("backblaze-b2");
const fs = require('fs');
const path = require('path');
const { default: mongoose } = require("mongoose");
const musicModel = require('../models/musicModel');
const cloudinaryUploader = require('../config/cloudinaryUploader');
const cloudinary = require('../config/cloudinary');

const asyncErrorHandler = (func)=>{
    return(req,res,next)=>{
        func(req,res,next).catch(err => next(err));
    }
}

const authController = {
    Auth : asyncErrorHandler(async (req,res,next)=>{
        const accountId = process.env.b2_account_id;
        const applicationKey = process.env.b2_application_key;
    
        const authString = Buffer.from(`${accountId}:${applicationKey}`).toString('base64');

        const response = await axios.get('https://api.backblazeb2.com/b2api/v2/b2_authorize_account',{
            headers:{
                Authorization : `Basic ${authString}`
            },
            timeout:50000
        })
        if(!response){
            const err = new customError('Unauthorized ',401);
            next(err);
        }

        const token = await createJwt(response.data.authorizationToken);
        res.cookie('jwt',token,{maxAge:24*60*60*1000,httpOnly:true,sameSite:true,secure:true}).send({data:'cookie set successf'});
    }),
    "Post":async(req,res)=>{
        try{
            const {songName,artist,album,section,audio,image,type} = req.body;
            console.log(audio,'...',image);
            
            const mongoResponse = await musicModel.create({
                audio:audio,
                image:image,
                type:type,
                songName:songName,
                artist:artist,
                album:album,
                section:section,
            })
            console.log(mongoResponse);
        }catch(e){
            console.log(e);
        }
    },
    Listen : async(req,res)=>{
       const kw = req.query.keyword;
       try{
        const checkResult = await musicModel.find({section:kw});
        if(checkResult){
            return res.status(200).json({data:checkResult});
        }else{
            return res.status(400).json({data:''});
        }
       }catch(e){
            return res.status(500).json({error:'Internal server error occured'})
       }

    },
    Register: (req,res,next)=>{
        console.log(req.body);
    },
    test:async (req,res,next)=>{
        const {songName,artist,album,section} = req.body;
        console.log(songName,',,,',artist);
        const response = await musicModel.create({fileId:'1234',fileName:'filefile',songName:songName,artist:artist,section:section,image:'not yet',album:album});
        console.log(response);
    }
    
}

module.exports = authController;