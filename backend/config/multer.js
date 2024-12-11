const multer = require('multer');
const Filestorage = multer.diskStorage({
    // destination(req,file,cb){
    //     cb(null,'/uploads/files/');
    // },
    filename(req,file,cb){
        let fileExt = file.originalname.split('.');
        const fileName = `${new Date().getTime()}.${fileExt}`;
        cb(null,fileName);
    }
})

const fileStorage = multer.memoryStorage();

const fileFilter = (req,file,cb)=>{
    try{
        if(file.mimetype !== "audio/mpeg"){
            req.fileValidationError = "File type must be mp3 or mpeg";
            return cb(null, false , req.fileValidationError);
        }else{
            cb(null,true);
        }
    }catch(e){
        console.log(e);
    }
}

const uploadFile = multer({
    storage:Filestorage,
    // fileFilter:fileFilter,
});

module.exports = uploadFile;