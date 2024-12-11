const cloudinary = require('./cloudinary');
const fs = require('fs');

const cloudinaryUploader = async(req,res)=>{
    const file = req.file;
    // console.log(file.path);
    if(!file){
        return res.status(400).json({message:'file not found'});
    }

    const fileName = file.originalname.split(".")[0];
    const fileBuffer = fs.readFileSync(file.path);
    console.log(typeof fileBuffer);
    console.log(fileBuffer);
    // try{
    //     // const base64File = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
    //     // const bytes = await file.buffer;
    //     // const buffer = Buffer.from(bytes);
    //     const result = await new Promise(
    //         (resolve,reject)=>{
    //             cloudinary.uploader.upload_stream({
    //                 folder:'MusicApp'},(error,result)=>{
    //                     return resolve(result);
    //                 }
    //             ).end(fileBuffer);
    //         }
    //     ).then((result)=>{console.log('result is ', result)})
    //     return result;
    //     // const uploadAudio = await cloudinary.uploader.upload_stream(file.buffer,{
    //     //    upload_preset:'Audio_Khun'
    //     // })
    //     // return uploadAudio;
    // }catch(error){
    //     console.log(error);
    //     return res.status(400).json({msg:error});
    // }
}

module.exports = cloudinaryUploader;