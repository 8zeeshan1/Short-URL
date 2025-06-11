require('dotenv').config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, secret); //we don't store passwords in the token
}

function getUser(token){
    if(!token) return null;
    try{
    return jwt.verify(token, secret); // Now if someonne copies the token from the cookie and decode it they'll get the details of the token and if they try to modify it and put it in the cookie they'll get error as the jwt sign will not verify due to not having the secret key so we shall not enclose the secret key 
    } catch (error){
        return null;// If someone have our secret key and they change something in the token with putting the secret key they will be able to login without credentials.
    }
}

module.exports={
    setUser,
    getUser
}