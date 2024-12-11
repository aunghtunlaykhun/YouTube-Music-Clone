const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const AuthMiddleWare = require('../config/authmiddleware');
const multer = require('multer');
const upload_File = multer({dest:'uploads/files/'});
const upload_Image = multer({dest:'uploads/images/'})
const uploadFile = require('../config/multer');
const CloudinaryGenerateSign = require('../config/sign_upload');

router.post('/auth',authController.Auth);
router.post('/register',authController.Register);
router.post('/post',uploadFile.single('file'),authController.Post);
router.get('/listen',authController.Listen);
// router.post('/sign_upload',uploadFile.single('file'),CloudinaryGenerateSign.Sign_upload);

module.exports = router; 