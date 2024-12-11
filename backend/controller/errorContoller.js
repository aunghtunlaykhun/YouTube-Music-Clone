module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if(process.env.NODE_ENV === 'developement'){
        res.status(err.status).json({
            status:err.statusCode,
            message:err.message,
            stackTrace:err.stackTrace,
            error:err
        })
    }else if(process.env.NODE_ENV === 'production'){
       if(err.isOperational){
        res.status(err.status).json({
            status:err.statusCode,
            message:err.message,
    })   
       }else{
        res.status(500).json({
            status:'error',
            msg:'Something went wrong , try again'
        })
       }
}
}