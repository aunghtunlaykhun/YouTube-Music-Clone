const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const authRouter = require('./router/authRouter');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const customError = require('./utils/customError');
const errorController = require('./controller/errorContoller');
const mongoose = require('mongoose');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:'http://localhost:5173',
    // credentials:true
}))

mongoose.connect(process.env.mongo_url).then(()=>{
        console.log('it is alive on mongodb');
    })
        app.listen(process.env.PORT,()=>{
    console.log('connected to server',`${process.env.PORT}`);
})

app.use(authRouter);

app.all('*',(req,res,next)=>{
    const err = new customError(`can't find ${req.originalUrl} in this server`,404);
    next(err);
})

app.use(errorController);