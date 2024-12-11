const jwt = require('jsonwebtoken');
const createJwt = async(id)=>{
    const key = process.env.jwt_key;
    const maxAge = 1 * 24 * 60 * 60 * 1000;
    const token = jwt.sign({id},key,{expiresIn:maxAge})
    return token;
}

module.exports = createJwt;