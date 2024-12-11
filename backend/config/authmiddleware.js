const jwt = require('jsonwebtoken');
const AuthMiddleWare = (req,res,next)=>{
    const jwtToken = req.cookies.jwt;
    if(jwtToken !== null ){
        
    }
    jwt.verify(jwtToken,process.env.jwt_key,(error,user)=>{
        console.log(user.id);
    });
}

module.exports = AuthMiddleWare;